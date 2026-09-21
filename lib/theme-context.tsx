'use client';

import React, {
  createContext,
  useContext,
  useSyncExternalStore,
  useCallback,
  useEffect,
} from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  setMode: (mode: ThemeMode) => void;
  cycleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'system',
  resolvedTheme: 'light',
  setMode: () => {},
  cycleTheme: () => {},
  isDark: false,
});

const STORAGE_KEY = 'aqar_theme';
const THEME_CHANGE_EVENT = 'aqar_theme_change';

function subscribeTheme(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener(THEME_CHANGE_EVENT, callback);
  window.addEventListener('storage', callback);
  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  mql.addEventListener('change', callback);
  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, callback);
    window.removeEventListener('storage', callback);
    mql.removeEventListener('change', callback);
  };
}

function getModeSnapshot(): ThemeMode {
  if (typeof window === 'undefined') return 'system';
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark' || saved === 'system') return saved;
    return 'system';
  } catch {
    return 'system';
  }
}

function getServerModeSnapshot(): ThemeMode {
  return 'system';
}

function getResolvedTheme(mode: ThemeMode): ResolvedTheme {
  if (mode === 'dark') return 'dark';
  if (mode === 'light') return 'light';
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const mode = useSyncExternalStore(subscribeTheme, getModeSnapshot, getServerModeSnapshot);
  const resolvedTheme = getResolvedTheme(mode);

  useEffect(() => {
    const root = document.documentElement;
    if (resolvedTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [resolvedTheme]);

  const setMode = useCallback((newMode: ThemeMode) => {
    try {
      localStorage.setItem(STORAGE_KEY, newMode);
      window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
    } catch {
      // ignore
    }
  }, []);

  const cycleTheme = useCallback(() => {
    const current = getModeSnapshot();
    let next: ThemeMode;
    if (current === 'light') next = 'dark';
    else if (current === 'dark') next = 'system';
    else next = 'light';
    setMode(next);
  }, [setMode]);

  const isDark = resolvedTheme === 'dark';

  return (
    <ThemeContext.Provider value={{ mode, resolvedTheme, setMode, cycleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
