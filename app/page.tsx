'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { UI_STRINGS } from '@/lib/translations';
import { STITCH_SERVICES, VERIFIED_PROJECTS, COMPANY_DETAILS } from '@/lib/company-data';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function HomePage() {
  const { lang, isAr } = useLanguage();
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const featuredProjects = VERIFIED_PROJECTS.slice(0, 3);

  return (
    <div className="flex flex-col bg-[#F7F5F0] dark:bg-[#181A1B] text-[#181A1B] dark:text-[#F7F5F0] transition-colors duration-200">
      <div
        style={{ display: 'none' }}
        dangerouslySetInnerHTML={{ __html: '<!-- AQAR-BUILD-CHECK-2026-09-21 -->' }}
      />
      {/* 1. Large Architectural Hero Section */}
      <section
        id="hero-section"
        className="relative border-b border-[#E2DED6] dark:border-[#2C2F33] overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
                  {UI_STRINGS.hero.label[lang]}
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#181A1B] dark:text-[#F7F5F0] leading-[1.12]">
                  {UI_STRINGS.hero.title[lang]}
                </h1>
              </div>

              <p className="text-base sm:text-lg text-[#2C2F33]/85 dark:text-[#E2DED6]/85 leading-relaxed font-sans max-w-xl">
                {UI_STRINGS.hero.description[lang]}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  id="hero-explore-services-btn"
                  href="/services"
                  className="inline-flex items-center gap-3 bg-[#C85A32] px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-white hover:bg-[#B84D28] transition-colors"
                >
                  <span>{UI_STRINGS.hero.ctaPrimary[lang]}</span>
                  <ArrowIcon className="h-4 w-4" />
                </Link>

                <Link
                  id="hero-view-projects-btn"
                  href="/projects"
                  className="inline-flex items-center gap-3 border border-[#E2DED6] dark:border-[#2C2F33] bg-[#EFECE6]/50 dark:bg-[#2C2F33]/30 px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#181A1B] dark:text-[#F7F5F0] hover:border-[#C85A32] hover:text-[#C85A32] transition-colors"
                >
                  <span>{UI_STRINGS.hero.ctaSecondary[lang]}</span>
                </Link>
              </div>

              {/* Minimal Architectural Location & Registration Stamp */}
              <div className="pt-8 border-t border-[#E2DED6] dark:border-[#2C2F33] flex flex-wrap items-center gap-8 text-xs text-[#2C2F33]/70 dark:text-[#E2DED6]/70">
                <div>
                  <span className="block font-semibold uppercase tracking-wider text-[#C85A32]">
                    {isAr ? 'المقر' : 'Location'}
                  </span>
                  <span className="font-sans">
                    {isAr ? 'أبوظبي، الإمارات' : 'Abu Dhabi, UAE'}
                  </span>
                </div>
                <div className="h-6 w-px bg-[#E2DED6] dark:bg-[#2C2F33]" />
                <div>
                  <span className="block font-semibold uppercase tracking-wider text-[#C85A32]">
                    {isAr ? 'الكيان القانوني' : 'Legal Entity'}
                  </span>
                  <span className="font-sans">
                    {COMPANY_DETAILS.legalNameEn}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Asymmetrical Architectural Visual Frame */}
            <div className="lg:col-span-5">
              <div className="relative border border-[#E2DED6] dark:border-[#2C2F33] p-3 bg-[#EFECE6] dark:bg-[#2C2F33]/40">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#2C2F33]">
                  <Image
                    src="/images/hero/aqar-land-hero.jpg"
                    alt={isAr ? 'مشروع سكني — عقار لاند أبوظبي' : 'AQAR LAND residential project — Abu Dhabi'}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                  {/* Subtle architectural overlay */}
                  <div className="absolute inset-0 bg-[#181A1B]/15" />
                </div>
                {/* Structural Metadata Tag */}
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono tracking-wider text-[#2C2F33]/70 dark:text-[#E2DED6]/70 uppercase">
                  <span>Abu Dhabi, UAE</span>
                  <span>General Contracting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Editorial Philosophy Statement */}
      <section className="border-b border-[#E2DED6] dark:border-[#2C2F33] py-16 bg-[#EFECE6]/60 dark:bg-[#2C2F33]/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-4xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
              {isAr ? 'رؤية وفلسفة العمل' : 'VISION & ARCHITECTURAL PHILOSOPHY'}
            </span>
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#181A1B] dark:text-[#F7F5F0] leading-snug">
              {isAr ? COMPANY_DETAILS.visionPhilosophy.ar : COMPANY_DETAILS.visionPhilosophy.en}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Disciplines / Services Grid (The 6 Verified Stitch Categories) */}
      <section id="services-section" className="border-b border-[#E2DED6] dark:border-[#2C2F33] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
                {UI_STRINGS.servicesOverview.label[lang]}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#181A1B] dark:text-[#F7F5F0]">
                {UI_STRINGS.servicesOverview.heading[lang]}
              </h2>
              <p className="text-sm sm:text-base text-[#2C2F33]/80 dark:text-[#E2DED6]/80 leading-relaxed font-sans">
                {UI_STRINGS.servicesOverview.subheading[lang]}
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C85A32] hover:text-[#B84D28] transition-colors pb-1 border-b border-[#C85A32]"
            >
              <span>{UI_STRINGS.servicesOverview.viewAll[lang]}</span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* 6 Services Architectural Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-s border-[#E2DED6] dark:border-[#2C2F33]">
            {STITCH_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="group relative flex flex-col justify-between border-b border-e border-[#E2DED6] dark:border-[#2C2F33] p-8 bg-[#F7F5F0] dark:bg-[#181A1B] hover:bg-[#EFECE6] dark:hover:bg-[#2C2F33]/40 transition-colors duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-bold text-[#C85A32] tracking-widest">
                      {srv.number}
                    </span>
                    <div className="h-2 w-2 bg-[#E2DED6] dark:bg-[#2C2F33] group-hover:bg-[#C85A32] transition-colors" />
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-[#181A1B] dark:text-[#F7F5F0] mb-4 group-hover:text-[#C85A32] transition-colors">
                    {isAr ? srv.titleAr : srv.titleEn}
                  </h3>

                  <p className="text-sm text-[#2C2F33]/80 dark:text-[#E2DED6]/80 leading-relaxed font-sans mb-8">
                    {isAr ? srv.shortDescAr : srv.shortDescEn}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E2DED6]/60 dark:border-[#2C2F33]/60 flex items-center justify-between">
                  <Link
                    href={`/services#${srv.number.toLowerCase()}-${srv.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#181A1B] dark:text-[#F7F5F0] group-hover:text-[#C85A32] transition-colors"
                  >
                    <span>{isAr ? 'التفاصيل الهندسية' : 'View Specifications'}</span>
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Projects (Selected Works) */}
      <section id="projects-section" className="border-b border-[#E2DED6] dark:border-[#2C2F33] py-20 lg:py-28 bg-[#EFECE6]/40 dark:bg-[#181A1B]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
                {UI_STRINGS.featuredProjects.label[lang]}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#181A1B] dark:text-[#F7F5F0]">
                {UI_STRINGS.featuredProjects.heading[lang]}
              </h2>
              <p className="text-sm sm:text-base text-[#2C2F33]/80 dark:text-[#E2DED6]/80 leading-relaxed font-sans">
                {UI_STRINGS.featuredProjects.subheading[lang]}
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C85A32] hover:text-[#B84D28] transition-colors pb-1 border-b border-[#C85A32]"
            >
              <span>{UI_STRINGS.featuredProjects.viewAll[lang]}</span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Editorial Project Portfolio Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((proj) => (
              <div
                key={proj.id}
                className="group border border-[#E2DED6] dark:border-[#2C2F33] bg-[#F7F5F0] dark:bg-[#2C2F33]/20 flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#2C2F33]">
                  <Image
                    src={proj.imageUrl}
                    alt={isAr ? 'مشروع سكني — عقار لاند' : 'AQAR LAND residential project'}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#181A1B]/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute top-4 start-4 bg-[#F7F5F0]/90 dark:bg-[#181A1B]/90 px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-[#C85A32]">
                    {isAr ? proj.statusAr : proj.statusEn}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span
                        className={`inline-block px-2 py-0.5 text-[10px] font-semibold border ${
                          proj.status === 'Completed'
                            ? 'border-[#628E9D]/40 text-[#628E9D] bg-[#628E9D]/5'
                            : 'border-[#C85A32]/40 text-[#C85A32] bg-[#C85A32]/5'
                        }`}
                      >
                        {isAr ? proj.statusAr : proj.statusEn}
                      </span>
                      {proj.year && (
                        <span className="inline-block px-2 py-0.5 text-[10px] border border-[#E2DED6] dark:border-[#2C2F33] text-[#2C2F33]/80 dark:text-[#E2DED6]/80">
                          {proj.year}
                        </span>
                      )}
                      {proj.value && (
                        <span className="inline-block px-2 py-0.5 text-[10px] font-medium text-[#C85A32] dark:text-[#E07A5F] bg-[#C85A32]/5 border border-[#C85A32]/20">
                          {isAr ? (proj.valueAr || proj.value) : proj.value}
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-[#181A1B] dark:text-[#F7F5F0] group-hover:text-[#C85A32] transition-colors leading-snug">
                      {isAr ? proj.titleAr : proj.titleEn}
                    </h3>
                  </div>

                  <div className="pt-4 border-t border-[#E2DED6] dark:border-[#2C2F33] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#C85A32]">
                    <span>{isAr ? 'عرض كافة المشاريع' : 'View Full Portfolio'}</span>
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Quality & Approach Section */}
      <section className="border-b border-[#E2DED6] dark:border-[#2C2F33] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
                {UI_STRINGS.approach.label[lang]}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#181A1B] dark:text-[#F7F5F0] leading-tight">
                {UI_STRINGS.approach.heading[lang]}
              </h2>
              <p className="text-base text-[#2C2F33]/85 dark:text-[#E2DED6]/85 leading-relaxed font-sans">
                {UI_STRINGS.approach.description[lang]}
              </p>
              <div className="pt-4">
                <Link
                  href="/quality"
                  className="inline-flex items-center gap-3 bg-[#C85A32] px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-white hover:bg-[#B84D28] transition-colors"
                >
                  <span>{isAr ? 'منهجية الجودة والرقابة' : 'Quality Framework'}</span>
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {UI_STRINGS.approach.principles.map((pr) => (
                <div
                  key={pr.num}
                  className="border border-[#E2DED6] dark:border-[#2C2F33] p-6 sm:p-8 bg-[#EFECE6]/40 dark:bg-[#2C2F33]/20 space-y-4"
                >
                  <span className="font-mono text-xs font-bold text-[#C85A32] tracking-widest block">
                    {pr.num}
                  </span>
                  <h3 className="font-serif text-xl font-normal text-[#181A1B] dark:text-[#F7F5F0]">
                    {isAr ? pr.titleAr : pr.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2C2F33]/80 dark:text-[#E2DED6]/80 leading-relaxed font-sans">
                    {isAr ? pr.descAr : pr.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Direct Contact CTA Banner */}
      <section className="py-20 lg:py-24 bg-[#EFECE6] dark:bg-[#181A1B]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
            {isAr ? 'بدء مشروعك معنا' : 'PROJECT CONSULTATION'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#181A1B] dark:text-[#F7F5F0] max-w-3xl mx-auto">
            {UI_STRINGS.contactCta.heading[lang]}
          </h2>
          <p className="text-sm sm:text-base text-[#2C2F33]/80 dark:text-[#E2DED6]/80 max-w-2xl mx-auto font-sans leading-relaxed">
            {UI_STRINGS.contactCta.description[lang]}
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#C85A32] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white hover:bg-[#B84D28] transition-colors"
            >
              <span>{UI_STRINGS.contactCta.ctaButton[lang]}</span>
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <a
              href={COMPANY_DETAILS.contact.landlineTel}
              className="inline-flex items-center gap-3 border border-[#E2DED6] dark:border-[#2C2F33] bg-[#F7F5F0] dark:bg-[#2C2F33]/40 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#181A1B] dark:text-[#F7F5F0] hover:border-[#C85A32] transition-colors"
              dir="ltr"
            >
              <span>{COMPANY_DETAILS.contact.landlineFormatted}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
