'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { COMPANY_DETAILS } from '@/lib/company-data';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

export default function Footer() {
  const { lang, isAr } = useLanguage();
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const currentYear = new Date().getFullYear();

  const servicesList = [
    { num: '01', titleEn: 'General Contracting', titleAr: 'المقاولات العامة', href: '/services#01-general-contracting' },
    { num: '02', titleEn: 'Building Maintenance', titleAr: 'صيانة المباني', href: '/services#02-building-maintenance' },
    { num: '03', titleEn: 'Support Services', titleAr: 'خدمات الدعم والمساندة', href: '/services#03-support-services' },
    { num: '04', titleEn: 'Project Management', titleAr: 'إدارة المشاريع', href: '/services#04-project-management' },
    { num: '05', titleEn: 'Design & Structural Analysis', titleAr: 'التصميم والتحليل الإنشائي', href: '/services#05-design-structural-analysis' },
    { num: '06', titleEn: 'Project Execution', titleAr: 'تنفيذ المشاريع', href: '/services#06-project-execution' },
  ];

  const quickLinks = [
    { labelEn: 'Home', labelAr: 'الرئيسية', href: '/' },
    { labelEn: 'About Us', labelAr: 'من نحن', href: '/about' },
    { labelEn: 'Services', labelAr: 'خدماتنا', href: '/services' },
    { labelEn: 'Projects', labelAr: 'المشاريع', href: '/projects' },
    { labelEn: 'Quality & Approach', labelAr: 'الجودة والمنهجية', href: '/quality' },
    { labelEn: 'Contact', labelAr: 'اتصل بنا', href: '/contact' },
    { labelEn: 'Privacy Policy', labelAr: 'سياسة الخصوصية', href: '/privacy-policy' },
    { labelEn: 'Terms & Conditions', labelAr: 'الشروط والأحكام', href: '/terms-conditions' },
  ];

  return (
    <footer className="w-full border-t border-[#E2DED6] dark:border-[#2C2F33] bg-[#EFECE6] dark:bg-[#181A1B] text-[#181A1B] dark:text-[#F7F5F0] transition-colors duration-200">
      {/* Top Pre-Footer Callout / Architectural Statement */}
      <div className="border-b border-[#E2DED6] dark:border-[#2C2F33] py-16 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
              {isAr ? 'عقار لاند • دولة الإمارات' : 'AQAR LAND • UNITED ARAB EMIRATES'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#181A1B] dark:text-[#F7F5F0]">
              {isAr
                ? 'تشكيل رؤيتك مع أفضل خدمات البناء والتصميم الملهم'
                : 'Shaping Your Vision with Premier Construction and Inspired Design'}
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#C85A32] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white hover:bg-[#B84D28] transition-colors self-start md:self-auto"
          >
            <span>{isAr ? 'ابدأ مشروعك معنا' : 'Start a Project With Us'}</span>
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer Navigation Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & Corporate Overview */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-4 w-4 bg-[#C85A32]" />
              <span className="font-serif text-2xl font-bold tracking-widest text-[#181A1B] dark:text-[#F7F5F0]">
                AQAR LAND
              </span>
              {isAr && (
                <span className="text-lg font-bold text-[#C85A32] font-arabic">
                  عقار لاند
                </span>
              )}
            </div>

            <p className="text-sm text-[#2C2F33]/80 dark:text-[#E2DED6]/80 leading-relaxed font-sans max-w-sm">
              {isAr
                ? 'مؤسسة عقارلاند للمقاولات العامة والنقل. خدمات مقاولات عامة شاملة، صيانة مباني، وإدارة مشاريع هندسية في أبوظبي وجميع أنحاء دولة الإمارات العربية المتحدة.'
                : 'Aqarland Contracting & Transporting Est. Dedicated general contracting, facility upkeep, and engineering execution across Abu Dhabi and the United Arab Emirates.'}
            </p>

            <div className="pt-2 text-xs text-[#2C2F33]/70 dark:text-[#E2DED6]/70">
              <p className="font-semibold">{COMPANY_DETAILS.legalNameEn}</p>
              <p className="font-arabic font-medium mt-1">{COMPANY_DETAILS.legalNameAr}</p>
            </div>
          </div>

          {/* Core Categories */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32] block">
              {isAr ? 'الخدمات التخصصية' : 'Core Disciplines'}
            </span>
            <ul className="space-y-3 pt-2">
              {servicesList.map((srv) => (
                <li key={srv.num}>
                  <Link
                    href={srv.href}
                    className="group flex items-baseline gap-3 text-sm text-[#2C2F33] dark:text-[#E2DED6] hover:text-[#C85A32] dark:hover:text-[#C85A32] transition-colors"
                  >
                    <span className="text-xs font-mono text-[#628E9D] group-hover:text-[#C85A32] transition-colors">
                      {srv.num}
                    </span>
                    <span>{isAr ? srv.titleAr : srv.titleEn}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Directory */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32] block">
              {isAr ? 'دليل الموقع' : 'Navigation'}
            </span>
            <ul className="space-y-2.5 pt-2">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#2C2F33]/90 dark:text-[#E2DED6]/90 hover:text-[#C85A32] dark:hover:text-[#C85A32] transition-colors"
                  >
                    {isAr ? item.labelAr : item.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact HQ */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32] block">
              {isAr ? 'المقر الرئيسي' : 'Headquarters'}
            </span>
            <div className="space-y-3 pt-2 text-sm text-[#2C2F33] dark:text-[#E2DED6]">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#C85A32] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  {isAr ? 'أبوظبي، الإمارات العربية المتحدة' : 'Abu Dhabi, United Arab Emirates'}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#C85A32] shrink-0" />
                <a
                  href={COMPANY_DETAILS.contact.landlineTel}
                  className="text-xs hover:text-[#C85A32] transition-colors"
                  dir="ltr"
                >
                  {COMPANY_DETAILS.contact.landlineFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#C85A32] shrink-0" />
                <a
                  href={COMPANY_DETAILS.contact.mobileTel}
                  className="text-xs hover:text-[#C85A32] transition-colors"
                  dir="ltr"
                >
                  {COMPANY_DETAILS.contact.mobileFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#C85A32] shrink-0" />
                <a
                  href={COMPANY_DETAILS.contact.emailMailto}
                  className="text-xs hover:text-[#C85A32] transition-colors truncate"
                >
                  {COMPANY_DETAILS.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#E2DED6] dark:border-[#2C2F33] py-8 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#2C2F33]/60 dark:text-[#E2DED6]/60">
          <p>
            © {currentYear} {COMPANY_DETAILS.legalNameEn}. {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#C85A32] transition-colors">
              {isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </Link>
            <span>•</span>
            <Link href="/terms-conditions" className="hover:text-[#C85A32] transition-colors">
              {isAr ? 'الشروط والأحكام' : 'Terms & Conditions'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
