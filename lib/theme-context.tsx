'use client';

import React, {
  createContext,
  useContext,
  useSyncExternalStore,
  useCallback,
  useEffect,
} from 'react';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  resolvedTheme: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  resolvedTheme: 'light',
  setMode: () => {},
  toggleTheme: () => {},
  isDark: false,
});

const STORAGE_KEY = 'aqar_theme';
const THEME_CHANGE_EVENT = 'aqar_theme_change';

function subscribeTheme(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener(THEME_CHANGE_EVENT, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, callback);
    window.removeEventListener('storage', callback);
  };
}

function getModeSnapshot(): ThemeMode {
  if (typeof window === 'undefined') return 'light';
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark') return 'dark';
    if (saved === 'light') return 'light';
    return 'light';
  } catch {
    return 'light';
  }
}

function getServerModeSnapshot(): ThemeMode {
  return 'light';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const mode = useSyncExternalStore(subscribeTheme, getModeSnapshot, getServerModeSnapshot);

  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [mode]);

  const setMode = useCallback((newMode: ThemeMode) => {
    try {
      localStorage.setItem(STORAGE_KEY, newMode);
      window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
    } catch {
      // ignore
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const current = getModeSnapshot();
    const next: ThemeMode = current === 'dark' ? 'light' : 'dark';
    setMode(next);
  }, [setMode]);

  const isDark = mode === 'dark';

  return (
    <ThemeContext.Provider value={{ mode, resolvedTheme: mode, setMode, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
