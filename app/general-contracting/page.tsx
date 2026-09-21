'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { UI_STRINGS } from '@/lib/translations';
import { COMPANY_DETAILS, SERVICE_CATEGORIES } from '@/lib/company-data';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';
import {
  Building2,
  CheckCircle2,
  ShieldCheck,
  Phone,
  ArrowRight,
  ArrowLeft,
  HardHat,
  Compass,
} from 'lucide-react';

export default function GeneralContractingPage() {
  const { lang, isAr } = useLanguage();
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;
  const category = SERVICE_CATEGORIES.find((c) => c.id === 'general-contracting')!;

  const breadcrumbItems = [
    {
      labelEn: category.titleEn,
      labelAr: category.titleAr,
      href: '/general-contracting',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <Breadcrumbs items={breadcrumbItems} />

      {/* Header Banner */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity pointer-events-none">
          <Image
            src={category.imageUrl}
            alt="General Contracting UAE"
            fill
            priority
            className="object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
              <Building2 className="h-3.5 w-3.5" />
              <span>{isAr ? 'قطاع المقاولات العامة' : 'Core Division'}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {lang === 'ar' ? category.titleAr : category.titleEn}
            </h1>
            <p className="text-base sm:text-lg text-amber-400/90 font-medium">
              {lang === 'ar' ? category.subtitleAr : category.subtitleEn}
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {lang === 'ar' ? category.descriptionAr : category.descriptionEn}
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                id="gc-quote-scroll-btn"
                href="#consultation-section"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-bold text-slate-950 hover:bg-amber-500 transition-colors"
              >
                <span>{UI_STRINGS.quoteTool.title[lang]}</span>
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a
                href={COMPANY_DETAILS.contact.landlineTel}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 border border-slate-700 rounded-lg"
              >
                <Phone className="h-3.5 w-3.5 text-amber-400" />
                <span dir="ltr">{COMPANY_DETAILS.contact.landlineFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detailed Breakdown */}
      <section className="py-16 sm:py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {category.services.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual */}
                <div
                  className={`lg:col-span-5 relative h-64 sm:h-80 w-full rounded-xl overflow-hidden bg-slate-900 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <Image
                    src={service.imageUrl}
                    alt={service.titleEn}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 start-4 rounded-md bg-slate-900/90 border border-slate-700 px-3 py-1 text-xs font-bold text-amber-400">
                    {lang === 'ar' ? 'معايير إماراتية معتمدة' : 'UAE Certified Quality'}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-7 space-y-4 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                    <Building2 className="h-4 w-4" />
                    <span>{lang === 'ar' ? 'خدمة متخصصة' : 'Specialized Contracting Service'}</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
                    {lang === 'ar' ? service.titleAr : service.titleEn}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {lang === 'ar' ? service.fullDescAr : service.fullDescEn}
                  </p>

                  <div className="pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                      {lang === 'ar' ? 'أبرز مميزات ومواصفات الخدمة:' : 'Key Engineering Features:'}
                    </h3>
                    <ul className="space-y-2.5">
                      {(lang === 'ar' ? service.featuresAr : service.featuresEn).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Consultation Request Form Section */}
      <section id="consultation-section" className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
              {lang === 'ar'
                ? 'طلب استشارة لمشاريع المقاولات العامة'
                : 'Request a General Contracting Consultation'}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              {lang === 'ar'
                ? 'تواصل مع مهندسي عقار لاند في أبوظبي لمناقشة المخططات والمواصفات وجدول التنفيذ.'
                : 'Connect with Aqar Land civil engineers in Abu Dhabi to review blueprints, specifications, and project timelines.'}
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
