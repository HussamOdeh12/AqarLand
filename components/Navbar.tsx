'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/language-context';
import { UI_STRINGS } from '@/lib/translations';
import { COMPANY_DETAILS } from '@/lib/company-data';
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Globe,
  ArrowRight,
  ArrowLeft,
  Building2,
  HardHat,
  Wrench,
  ShieldCheck,
} from 'lucide-react';

export default function Navbar() {
  const { lang, setLang, isAr } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const navLinks = [
    { href: '/', label: UI_STRINGS.nav.home[lang] },
    { href: '/general-contracting', label: UI_STRINGS.nav.generalContracting[lang] },
    { href: '/building-maintenance', label: UI_STRINGS.nav.buildingMaintenance[lang] },
    { href: '/support-services', label: UI_STRINGS.nav.supportServices[lang] },
    { href: '/about', label: UI_STRINGS.nav.aboutUs[lang] },
    { href: '/contact', label: UI_STRINGS.nav.contactUs[lang] },
  ];

  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950 text-slate-100 shadow-md">
      {/* Top Utility Bar */}
      <div className="border-b border-slate-800/80 bg-slate-900/90 text-xs text-slate-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="h-3.5 w-3.5 text-amber-500" />
              <span>{UI_STRINGS.topbar.abuDhabi[lang]}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>{UI_STRINGS.topbar.workingHours[lang]}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={COMPANY_DETAILS.contact.landlineTel}
              className="flex items-center gap-1.5 font-medium text-slate-200 hover:text-amber-400 transition-colors"
              title="Abu Dhabi Landline"
            >
              <Phone className="h-3.5 w-3.5 text-amber-500" />
              <span dir="ltr">{COMPANY_DETAILS.contact.landlineFormatted}</span>
            </a>

            <div className="h-3 w-px bg-slate-700" />

            {/* Language Switcher */}
            <button
              id="nav-lang-toggle"
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 rounded border border-slate-700 bg-slate-800/80 px-2.5 py-0.5 text-xs font-semibold text-amber-400 hover:border-amber-500/50 hover:bg-slate-800 transition-colors"
              aria-label={isAr ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              <Globe className="h-3 w-3" />
              <span>{UI_STRINGS.topbar.switchLang[lang]}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Aqar Land Homepage"
        >
          <div className="relative flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-amber-600 to-amber-700 text-slate-950 font-black shadow-inner shadow-amber-300/30">
            <Building2 className="h-6 w-6 text-slate-950" />
            <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-slate-950 bg-amber-400" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                AQAR LAND
              </span>
              <span className="text-sm font-bold text-amber-400/90 font-arabic">
                عقار لاند
              </span>
            </div>
            <span className="text-[10px] font-medium tracking-wider uppercase text-slate-400">
              {isAr ? 'المقاولات العامة والصيانة' : 'Contracting & Maintenance'}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-slate-800 text-amber-400 border border-slate-700'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            id="nav-cta-contact"
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-amber-600 px-4 py-2 text-sm font-semibold text-slate-950 shadow hover:bg-amber-500 transition-colors"
          >
            <span>{UI_STRINGS.nav.requestQuote[lang]}</span>
            <ArrowIcon className="h-4 w-4" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex lg:hidden items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-800 hover:text-white focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle main menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950 px-4 pt-3 pb-6 space-y-2">
          <nav className="space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-md px-3 py-2.5 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-800 text-amber-400 font-semibold'
                      : 'text-slate-200 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <Link
              id="mobile-nav-cta-contact"
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-amber-600 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-amber-500 transition-colors"
            >
              <span>{UI_STRINGS.nav.requestQuote[lang]}</span>
              <ArrowIcon className="h-4 w-4" />
            </Link>

            <div className="flex flex-col gap-2 pt-2 text-xs text-slate-400">
              <a
                href={COMPANY_DETAILS.contact.mobileTel}
                className="flex items-center gap-2 text-slate-300"
              >
                <Phone className="h-3.5 w-3.5 text-amber-500" />
                <span>Mobile: {COMPANY_DETAILS.contact.mobileFormatted}</span>
              </a>
              <a
                href={COMPANY_DETAILS.contact.emailMailto}
                className="flex items-center gap-2 text-slate-300"
              >
                <Mail className="h-3.5 w-3.5 text-amber-500" />
                <span>{COMPANY_DETAILS.contact.email}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
