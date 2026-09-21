'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { UI_STRINGS } from '@/lib/translations';
import { COMPANY_DETAILS, SERVICE_CATEGORIES } from '@/lib/company-data';
import QuoteCalculator from '@/components/QuoteCalculator';
import ContactForm from '@/components/ContactForm';
import {
  Building2,
  Wrench,
  HardHat,
  ShieldCheck,
  Award,
  Sparkles,
  Users,
  Compass,
  ArrowRight,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Clock,
  ExternalLink,
} from 'lucide-react';

export default function HomePage() {
  const { lang, isAr } = useLanguage();
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const valueIcons: Record<string, React.ElementType> = {
    ShieldCheck,
    Award,
    Sparkles,
    Users,
    HardHat,
    Compass,
  };

  const divisionIcons: Record<string, React.ElementType> = {
    Building2,
    Wrench,
    HardHat,
  };

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section
        id="hero-section"
        className="relative overflow-hidden bg-slate-950 text-white pt-16 pb-20 lg:pt-24 lg:pb-32 border-b border-slate-800"
      >
        {/* Background Architectural Texture with subtle overlay */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1541971875076-8f970d573be6?q=80&w=2000&auto=format&fit=crop"
            alt="Aqar Land UAE Construction"
            fill
            priority
            className="object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60 z-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            {/* Emirati Pride & Licensing Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-400">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>{UI_STRINGS.hero.badge[lang]}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white leading-tight">
              {UI_STRINGS.hero.tagline[lang]}
            </h1>

            {/* Authentic Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {UI_STRINGS.hero.subtitle[lang]}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                id="hero-explore-services-btn"
                href="#services-section"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-md hover:bg-amber-500 focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all"
              >
                <span>{UI_STRINGS.hero.ctaPrimary[lang]}</span>
                <ArrowIcon className="h-4 w-4" />
              </Link>

              <Link
                id="hero-contact-hq-btn"
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:border-slate-500 hover:text-white transition-all"
              >
                <span>{UI_STRINGS.hero.ctaSecondary[lang]}</span>
              </Link>

              <a
                id="hero-landline-call"
                href={COMPANY_DETAILS.contact.landlineTel}
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-amber-400 px-2 py-2 transition-colors"
              >
                <Phone className="h-4 w-4 text-amber-500" />
                <span dir="ltr">{COMPANY_DETAILS.contact.landlineFormatted}</span>
              </a>
            </div>

            {/* Verified Statistics Bar */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {UI_STRINGS.hero.stats.map((st, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-400">
                    {st.value}
                  </span>
                  <span className="text-xs text-slate-400 mt-1">
                    {lang === 'ar' ? st.labelAr : st.labelEn}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Specialized Operational Divisions */}
      <section
        id="services-section"
        className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-slate-950">
              {UI_STRINGS.divisions.heading[lang]}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              {UI_STRINGS.divisions.subheading[lang]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICE_CATEGORIES.map((cat) => {
              const IconComponent = divisionIcons[cat.icon] || Building2;
              return (
                <div
                  key={cat.id}
                  id={`division-card-${cat.id}`}
                  className="group relative flex flex-col rounded-2xl border border-slate-200 bg-slate-50/50 overflow-hidden shadow-sm hover:shadow-md hover:border-amber-400/60 transition-all"
                >
                  {/* Category Image */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={cat.imageUrl}
                      alt={cat.titleEn}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute bottom-4 start-4 flex items-center gap-2 text-white">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600 text-slate-950 font-bold shadow">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                        {lang === 'ar' ? 'قطاع متخصص' : 'Specialist Division'}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">
                      {lang === 'ar' ? cat.titleAr : cat.titleEn}
                    </h3>
                    <p className="text-xs font-semibold text-amber-700 mb-3">
                      {lang === 'ar' ? cat.subtitleAr : cat.subtitleEn}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                      {lang === 'ar' ? cat.descriptionAr : cat.descriptionEn}
                    </p>

                    {/* Sub-services list */}
                    <div className="border-t border-slate-200/80 pt-4 mb-6">
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        {lang === 'ar' ? 'تشمل الخدمات:' : 'Core Capabilities:'}
                      </span>
                      <ul className="space-y-2">
                        {cat.services.map((srv) => (
                          <li
                            key={srv.id}
                            className="flex items-start gap-2 text-xs text-slate-700 font-medium"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-amber-600 shrink-0 mt-0.5" />
                            <span>{lang === 'ar' ? srv.titleAr : srv.titleEn}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      id={`division-link-${cat.id}`}
                      href={`/${cat.slug}`}
                      className="inline-flex items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-900 group-hover:bg-amber-600 group-hover:border-amber-600 group-hover:text-slate-950 transition-colors"
                    >
                      <span>{UI_STRINGS.divisions.viewDivision[lang]}</span>
                      <ArrowIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Mission, Vision, and Core Values Section */}
      <section
        id="mission-vision-section"
        className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mission & Vision Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-8 sm:p-10 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {UI_STRINGS.missionVision.missionTitle[lang]}
                </h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-base">
                {UI_STRINGS.missionVision.missionText[lang]}
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-amber-400">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>
                  {isAr ? 'التميز المهني • الجودة • الاستدامة' : 'Excellence • Quality • Sustainability'}
                </span>
              </div>
            </div>

            {/* Vision */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-8 sm:p-10 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {UI_STRINGS.missionVision.visionTitle[lang]}
                </h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-base">
                {UI_STRINGS.missionVision.visionText[lang]}
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-amber-400">
                <Building2 className="h-4 w-4 text-amber-400" />
                <span>
                  {isAr
                    ? 'ريادة المقاولات والصيانة في دولة الإمارات'
                    : 'Premier Contracting & Maintenance Partner in UAE'}
                </span>
              </div>
            </div>
          </div>

          {/* Core Values Grid */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {UI_STRINGS.missionVision.valuesTitle[lang]}
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                {UI_STRINGS.missionVision.valuesSub[lang]}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPANY_DETAILS.values.map((val, idx) => {
                const IconComponent = valueIcons[val.icon] || ShieldCheck;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-800 bg-slate-950/50 p-6 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-amber-400">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <h4 className="font-bold text-base text-white">
                        {lang === 'ar' ? val.titleAr : val.titleEn}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {lang === 'ar' ? val.descAr : val.descEn}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Project Planning & RFP Calculator */}
      <section id="quote-calculator-section" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <QuoteCalculator />
        </div>
      </section>

      {/* 5. Headquarters, Map & Quick Contact */}
      <section id="hq-contact-section" className="py-16 sm:py-24 bg-white text-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Office Information & Location Card */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  {isAr ? 'المقر الرئيسي في الإمارات' : 'United Arab Emirates Headquarters'}
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-950 mt-1">
                  {isAr ? 'عقار لاند - أبوظبي' : 'Aqar Land Abu Dhabi'}
                </h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {UI_STRINGS.contact.subtitle[lang]}
                </p>
              </div>

              <div className="space-y-4 rounded-xl border border-slate-200 bg-slate-50/70 p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-amber-600 shrink-0 mt-1" />
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 uppercase">
                      {isAr ? 'الموقع الجغرافي' : 'Physical Location'}
                    </span>
                    <span className="font-bold text-sm text-slate-900">
                      {COMPANY_DETAILS.headquarters.addressEn}
                    </span>
                    <a
                      id="home-hq-maps-link"
                      href={COMPANY_DETAILS.headquarters.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-800 hover:underline"
                    >
                      <span>{UI_STRINGS.contact.openInMaps[lang]}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                  <Phone className="h-5 w-5 text-amber-600 shrink-0" />
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 uppercase">
                      {UI_STRINGS.contact.landline[lang]}
                    </span>
                    <a
                      href={COMPANY_DETAILS.contact.landlineTel}
                      className="text-sm font-bold text-slate-900 hover:text-amber-700 transition-colors"
                      dir="ltr"
                    >
                      {COMPANY_DETAILS.contact.landlineFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                  <Phone className="h-5 w-5 text-emerald-600 shrink-0" />
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 uppercase">
                      {UI_STRINGS.contact.mobile[lang]} (24/7 Dispatch)
                    </span>
                    <a
                      href={COMPANY_DETAILS.contact.mobileTel}
                      className="text-sm font-bold text-slate-900 hover:text-emerald-700 transition-colors"
                      dir="ltr"
                    >
                      {COMPANY_DETAILS.contact.mobileFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                  <Mail className="h-5 w-5 text-amber-600 shrink-0" />
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 uppercase">
                      {UI_STRINGS.contact.email[lang]}
                    </span>
                    <a
                      href={COMPANY_DETAILS.contact.emailMailto}
                      className="text-sm font-bold text-slate-900 hover:text-amber-700 transition-colors"
                    >
                      {COMPANY_DETAILS.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="flex items-center gap-3 rounded-lg border border-emerald-200 bg-emerald-50/80 p-4 text-xs text-emerald-800">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>
                  {isAr
                    ? 'مرخصون ومسجلون رسمياً في أبوظبي لممارسة المقاولات العامة وصيانة المباني.'
                    : 'Officially registered in Abu Dhabi for General Contracting & Building Maintenance.'}
                </span>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
