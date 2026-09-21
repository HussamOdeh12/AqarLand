'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from '@/lib/theme-context';
import {
  Menu,
  X,
  Sun,
  Moon,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

export default function Navbar() {
  const { lang, setLang, isAr } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const navLinks = [
    { href: '/', labelEn: 'Home', labelAr: 'الرئيسية' },
    { href: '/about', labelEn: 'About', labelAr: 'من نحن' },
    { href: '/services', labelEn: 'Services', labelAr: 'خدماتنا' },
    { href: '/projects', labelEn: 'Projects', labelAr: 'المشاريع' },
    { href: '/quality', labelEn: 'Quality & Approach', labelAr: 'الجودة والمنهجية' },
    { href: '/contact', labelEn: 'Contact', labelAr: 'اتصل بنا' },
  ];

  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

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
          <div className="h-5 w-5 bg-[#C85A32] transition-transform duration-300 group-hover:scale-95 flex items-center justify-center">
            <div className="h-2 w-2 bg-[#F7F5F0] dark:bg-[#181A1B]" />
          </div>
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#181A1B] dark:text-[#F7F5F0]">
            AQAR LAND
          </span>
          {isAr && (
            <span className="text-base font-bold text-[#C85A32] font-arabic me-1">
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
                    ? 'border-[#C85A32] text-[#C85A32] font-semibold'
                    : 'border-transparent text-[#2C2F33] dark:text-[#E2DED6] hover:text-[#C85A32] dark:hover:text-[#C85A32]'
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
            className="text-xs font-semibold tracking-widest text-[#2C2F33] dark:text-[#E2DED6] hover:text-[#C85A32] transition-colors uppercase px-2 py-1 border border-[#E2DED6] dark:border-[#2C2F33]"
            aria-label={isAr ? 'Switch to English' : 'التبديل إلى العربية'}
          >
            {isAr ? 'EN' : 'AR'}
          </button>

          {/* Theme Toggle */}
          <button
            id="nav-theme-toggle"
            type="button"
            onClick={toggleTheme}
            className="p-2 text-[#2C2F33] dark:text-[#E2DED6] hover:text-[#C85A32] dark:hover:text-[#C85A32] transition-colors border border-[#E2DED6] dark:border-[#2C2F33]"
            aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Start a Project Button */}
          <Link
            id="nav-cta-start-project"
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#C85A32] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#B84D28] transition-colors"
          >
            <span>{isAr ? 'ابدأ مشروعك' : 'Start a Project'}</span>
            <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Menu & Quick Controls */}
        <div className="flex sm:hidden items-center gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            className="text-xs font-semibold tracking-wider text-[#181A1B] dark:text-[#F7F5F0] px-2 py-1 border border-[#E2DED6] dark:border-[#2C2F33]"
          >
            {isAr ? 'EN' : 'AR'}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 text-[#181A1B] dark:text-[#F7F5F0] border border-[#E2DED6] dark:border-[#2C2F33]"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#181A1B] dark:text-[#F7F5F0] border border-[#E2DED6] dark:border-[#2C2F33]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
                    ? 'text-[#C85A32] font-semibold'
                    : 'text-[#181A1B] dark:text-[#F7F5F0]'
                }`}
              >
                {isAr ? link.labelAr : link.labelEn}
              </Link>
            ))}
          </nav>
          <div className="pt-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 bg-[#C85A32] py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#B84D28]"
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
