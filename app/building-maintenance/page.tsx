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
  Wrench,
  CheckCircle2,
  Phone,
  ArrowRight,
  ArrowLeft,
  Clock,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';

export default function BuildingMaintenancePage() {
  const { lang, isAr } = useLanguage();
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;
  const category = SERVICE_CATEGORIES.find((c) => c.id === 'building-maintenance')!;

  const breadcrumbItems = [
    {
      labelEn: category.titleEn,
      labelAr: category.titleAr,
      href: '/building-maintenance',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity pointer-events-none">
          <Image
            src={category.imageUrl}
            alt="Building Maintenance Services UAE"
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
              <Wrench className="h-3.5 w-3.5" />
              <span>{isAr ? 'قطاع صيانة المباني والمرافق' : 'Facility Maintenance Division'}</span>
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

            {/* Emergency Hotline Box */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                id="bm-emergency-call"
                href={COMPANY_DETAILS.contact.mobileTel}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-colors shadow-lg"
              >
                <Clock className="h-4 w-4 animate-pulse" />
                <span>{isAr ? 'طوارئ الصيانة 24/7:' : '24/7 Emergency Dispatch:'}</span>
                <span dir="ltr">{COMPANY_DETAILS.contact.mobileFormatted}</span>
              </a>

              <a
                href="#amc-quote-section"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-3 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <span>{isAr ? 'طلب عقد صيانة سنوي (AMC)' : 'Request AMC Contract'}</span>
                <ArrowIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detailed Cards */}
      <section className="py-16 sm:py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {category.services.map((service, index) => {
            const isReversed = index % 2 === 1;
            const isEmergency = service.id === 'emergency-repairs';

            return (
              <div
                key={service.id}
                id={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-2xl border ${
                  isEmergency ? 'border-amber-400/40 bg-amber-50/20' : 'border-slate-200 bg-white'
                } p-6 sm:p-10 shadow-sm`}
              >
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
                  {isEmergency && (
                    <div className="absolute top-4 start-4 rounded-md bg-emerald-600 px-3 py-1 text-xs font-bold text-white shadow">
                      24/7 Available
                    </div>
                  )}
                </div>

                <div
                  className={`lg:col-span-7 space-y-4 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                    <Wrench className="h-4 w-4" />
                    <span>{lang === 'ar' ? 'خدمة صيانة متخصصة' : 'Specialized Maintenance'}</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
                    {lang === 'ar' ? service.titleAr : service.titleEn}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {lang === 'ar' ? service.fullDescAr : service.fullDescEn}
                  </p>

                  <div className="pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                      {lang === 'ar' ? 'نطاق الخدمة والالتزامات:' : 'Service Scope & Commitments:'}
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

                  {isEmergency && (
                    <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                      <a
                        id="bm-emergency-direct-action"
                        href={COMPANY_DETAILS.contact.mobileTel}
                        className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-500"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        <span>{isAr ? 'اتصال فوري بالطوارئ' : 'Call 24/7 Hotline Now'}</span>
                      </a>
                      <span className="text-xs text-slate-500">
                        {isAr ? 'أبوظبي وجميع مناطق الدولة' : 'Serving Abu Dhabi and UAE'}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* AMC Consultation Form */}
      <section id="amc-quote-section" className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
              {lang === 'ar'
                ? 'طلب استشارة أو عقد صيانة سنوي (AMC)'
                : 'Inquire About Annual Maintenance Contracts'}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              {lang === 'ar'
                ? 'فريق صيانة المباني بعقار لاند مستعد لتقديم باقات صيانة مخصصة لمنشأتكم السكنية أو التجارية.'
                : 'Our facility management engineers provide customized preventative schedules and guaranteed response times for your properties.'}
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
