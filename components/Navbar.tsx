'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from '@/lib/theme-context';
import { UI_STRINGS } from '@/lib/translations';
import { Sun, Moon, Menu, X, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { lang, isAr, setLang } = useLanguage();
  const { mode, toggleTheme, setMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
  };

  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const navLinks = [
    { href: '/', labelEn: UI_STRINGS.nav.home.en, labelAr: UI_STRINGS.nav.home.ar },
    { href: '/services', labelEn: UI_STRINGS.nav.services.en, labelAr: UI_STRINGS.nav.services.ar },
    { href: '/projects', labelEn: UI_STRINGS.nav.projects.en, labelAr: UI_STRINGS.nav.projects.ar },
    { href: '/about', labelEn: UI_STRINGS.nav.about.en, labelAr: UI_STRINGS.nav.about.ar },
    { href: '/quality', labelEn: UI_STRINGS.nav.quality.en, labelAr: UI_STRINGS.nav.quality.ar },
    { href: '/contact', labelEn: UI_STRINGS.nav.contact.en, labelAr: UI_STRINGS.nav.contact.ar },
  ];

  const getThemeLabel = () => {
    if (mode === 'light') {
      return isAr ? 'التبديل إلى الوضع الداكن' : 'Switch to Dark Mode';
    }
    return isAr ? 'التبديل إلى الوضع النهاري' : 'Switch to Light Mode';
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E2DED6] dark:border-[#2C2F33] bg-[#F7F5F0]/95 dark:bg-[#181A1B]/95 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Brand Logo - Stitch architectural wordmark */}
        <Link
          href="/"
          className="flex items-center gap-3 tracking-wider group focus:outline-none"
          aria-label="Aqar Land Homepage"
        >
          {/* Subtle architectural geometric mark */}
          <div className="h-5 w-5 bg-[#B84D28] transition-transform duration-300 group-hover:scale-95 flex items-center justify-center">
            <div className="h-2 w-2 bg-[#F7F5F0] dark:bg-[#181A1B]" />
          </div>
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#181A1B] dark:text-[#F7F5F0]">
            AQAR LAND
          </span>
          {isAr && (
            <span className="text-base font-bold text-[#A8421D] dark:text-[#E2774E] font-arabic me-1">
              عقار لاند
            </span>
          )}
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors py-1 border-b-2 ${
                  isActive
                    ? 'border-[#B84D28] text-[#A8421D] dark:border-[#E2774E] dark:text-[#E2774E] font-semibold'
                    : 'border-transparent text-[#2C2F33] dark:text-[#E2DED6] hover:text-[#A8421D] dark:hover:text-[#E2774E]'
                }`}
              >
                {isAr ? link.labelAr : link.labelEn}
              </Link>
            );
          })}
        </nav>

        {/* Right Controls: EN/AR, Theme Toggle, Start a Project CTA */}
        <div className="hidden sm:flex items-center gap-5">
          {/* Language Toggle */}
          <button
            id="nav-lang-toggle"
            type="button"
            onClick={toggleLanguage}
            className="text-xs font-semibold tracking-widest text-[#2C2F33] dark:text-[#E2DED6] hover:text-[#A8421D] dark:hover:text-[#E2774E] transition-colors uppercase px-2.5 py-1.5 border border-[#E2DED6] dark:border-[#2C2F33] focus-visible:outline-2 focus-visible:outline-[#B84D28] focus-visible:outline-offset-2"
            aria-label={isAr ? 'Switch to English' : 'التبديل إلى العربية'}
          >
            {isAr ? 'EN' : 'AR'}
          </button>

          {/* Theme Toggle (Light / Dark) */}
          <button
            id="nav-theme-toggle"
            type="button"
            onClick={toggleTheme}
            className="p-2 text-[#2C2F33] dark:text-[#E2DED6] hover:text-[#A8421D] dark:hover:text-[#E2774E] transition-colors border border-[#E2DED6] dark:border-[#2C2F33] focus-visible:outline-2 focus-visible:outline-[#B84D28] focus-visible:outline-offset-2"
            aria-label={getThemeLabel()}
            title={getThemeLabel()}
          >
            {mode === 'light' ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </button>

          {/* Start a Project Button */}
          <Link
            id="nav-cta-start-project"
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#B84D28] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#A33F1D] transition-colors focus-visible:outline-2 focus-visible:outline-[#B84D28] focus-visible:outline-offset-2"
          >
            <span>{isAr ? 'ابدأ مشروعك' : 'Start a Project'}</span>
            <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button + Quick Language */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="text-xs font-semibold tracking-wider text-[#181A1B] dark:text-[#F7F5F0] px-2 py-1 border border-[#E2DED6] dark:border-[#2C2F33] focus-visible:outline-2 focus-visible:outline-[#B84D28]"
            aria-label={isAr ? 'Switch to English' : 'التبديل إلى العربية'}
          >
            {isAr ? 'EN' : 'AR'}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 text-[#181A1B] dark:text-[#F7F5F0] border border-[#E2DED6] dark:border-[#2C2F33] focus-visible:outline-2 focus-visible:outline-[#B84D28]"
            aria-label={getThemeLabel()}
            title={getThemeLabel()}
          >
            {mode === 'light' ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#181A1B] dark:text-[#F7F5F0] border border-[#E2DED6] dark:border-[#2C2F33] focus-visible:outline-2 focus-visible:outline-[#B84D28]"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5 text-[#181A1B] dark:text-[#F7F5F0]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E2DED6] dark:border-[#2C2F33] bg-[#F7F5F0] dark:bg-[#181A1B] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-base font-medium border-b border-[#E2DED6]/50 dark:border-[#2C2F33] ${
                  pathname === link.href
                    ? 'text-[#A8421D] dark:text-[#E2774E] font-semibold'
                    : 'text-[#181A1B] dark:text-[#F7F5F0]'
                }`}
              >
                {isAr ? link.labelAr : link.labelEn}
              </Link>
            ))}
          </nav>
          <div className="pt-4 space-y-3">
            <div className="flex items-center justify-between border border-[#E2DED6] dark:border-[#2C2F33] p-1.5 bg-[#EFECE6]/50 dark:bg-[#2C2F33]/30 text-xs font-medium">
              <span className="px-2 text-[#3B3E42] dark:text-[#DCD8CF]">
                {isAr ? 'المظهر' : 'Theme'}
              </span>
              <div className="flex items-center gap-1">
                {(['light', 'dark'] as const).map((tMode) => {
                  const isActive = mode === tMode;
                  const label = tMode === 'light' ? (isAr ? 'نهاري' : 'Light') : (isAr ? 'داكن' : 'Dark');
                  const IconComp = tMode === 'light' ? Sun : Moon;
                  return (
                    <button
                      key={tMode}
                      type="button"
                      onClick={() => setMode(tMode)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold transition-colors ${
                        isActive
                          ? 'bg-[#B84D28] text-white'
                          : 'text-[#2C2F33] dark:text-[#E2DED6] hover:text-[#A8421D] dark:hover:text-[#E2774E]'
                      }`}
                      aria-label={`${label} mode`}
                    >
                      <IconComp className="h-3 w-3" />
                      <span>{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 bg-[#B84D28] py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#A33F1D]"
            >
              <span>{isAr ? 'ابدأ مشروعك' : 'Start a Project'}</span>
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
