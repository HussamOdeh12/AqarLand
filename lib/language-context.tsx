'use client';

import React, { createContext, useContext, useSyncExternalStore, useCallback, useEffect } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  dir: 'ltr' | 'rtl';
  isAr: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  dir: 'ltr',
  isAr: false,
});

const LANGUAGE_CHANGE_EVENT = 'aqar_language_change';

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener(LANGUAGE_CHANGE_EVENT, callback);
  window.addEventListener('storage', callback);
  window.addEventListener('popstate', callback);
  return () => {
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, callback);
    window.removeEventListener('storage', callback);
    window.removeEventListener('popstate', callback);
  };
}

function getSnapshot(): Language {
  if (typeof window === 'undefined') return 'en';
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang === 'ar' || urlLang === 'en') {
      return urlLang;
    }
    if (window.location.pathname === '/ar' || window.location.pathname.startsWith('/ar/')) {
      return 'ar';
    }
    const saved = localStorage.getItem('aqar_lang');
    return saved === 'ar' ? 'ar' : 'en';
  } catch {
    return 'en';
  }
}

function getServerSnapshot(): Language {
  return 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }, [lang]);

  const setLang = useCallback((newLang: Language) => {
    try {
      localStorage.setItem('aqar_lang', newLang);
      if (typeof document !== 'undefined') {
        document.documentElement.lang = newLang;
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
      }
      window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
    } catch {
      // ignore
    }
  }, []);

  const isAr = lang === 'ar';
  const dir = isAr ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir, isAr }}>
      <div dir={dir} className={isAr ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
