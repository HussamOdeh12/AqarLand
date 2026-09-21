'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { STITCH_SERVICES, COMPANY_DETAILS } from '@/lib/company-data';
import { ArrowRight, ArrowLeft, Phone } from 'lucide-react';

export default function ServicesPage() {
  const { isAr } = useLanguage();
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="flex flex-col bg-[#F7F5F0] dark:bg-[#181A1B] text-[#181A1B] dark:text-[#F7F5F0] transition-colors duration-200">
      {/* 1. Services Hero Header */}
      <section className="border-b border-[#E2DED6] dark:border-[#2C2F33] py-20 lg:py-28 bg-[#EFECE6]/40 dark:bg-[#181A1B]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A8421D] dark:text-[#E2774E]">
              {isAr ? 'قطاعات العمل الهندسية • دولة الإمارات' : 'DISCIPLINES & SERVICES • UAE'}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#181A1B] dark:text-[#F7F5F0] leading-tight">
              {isAr
                ? 'المقاولات العامة، صيانة المباني، والتنفيذ الهندسي'
                : 'General Contracting, Building Upkeep & Project Execution'}
            </h1>
            <p className="text-base sm:text-lg text-[#3B3E42] dark:text-[#DCD8CF] font-sans leading-relaxed pt-2">
              {isAr
                ? 'ستة قطاعات تخصصية معتمدة تقدم الدقة الهندسية، المتانة الإنشائية، والحلول المستدامة لمختلف المشاريع في أبوظبي والإمارات.'
                : 'Six verified engineering disciplines delivering structural durability, operational continuity, and architectural precision across Abu Dhabi and the UAE.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Services Navigation Quick Anchors */}
      <section className="border-b border-[#E2DED6] dark:border-[#2C2F33] bg-[#F7F5F0] dark:bg-[#181A1B] sticky top-20 z-40 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 overflow-x-auto py-4">
          <div className="flex items-center gap-6 min-w-max">
            {STITCH_SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.number.toLowerCase()}-${s.slug}`}
                className="text-xs font-mono tracking-wider text-[#2C2F33] dark:text-[#E2DED6] hover:text-[#A8421D] dark:hover:text-[#E2774E] transition-colors flex items-center gap-2"
              >
                <span className="text-[#A8421D] dark:text-[#E2774E] font-bold">{s.number}</span>
                <span>{isAr ? s.titleAr : s.titleEn}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The 6 Verified Stitch Service Categories */}
      <section className="divide-y divide-[#E2DED6] dark:divide-[#2C2F33]">
        {STITCH_SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              id={`${service.number.toLowerCase()}-${service.slug}`}
              className="py-20 lg:py-28 scroll-mt-24"
            >
              <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                    !isEven ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Text Column */}
                  <div className={`lg:col-span-7 space-y-6 ${!isEven ? 'lg:col-start-6' : ''}`}>
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-lg font-bold text-[#A8421D] dark:text-[#E2774E] tracking-wider">
                        {service.number}
                      </span>
                      <div className="h-px flex-1 max-w-[80px] bg-[#E2DED6] dark:bg-[#2C2F33]" />
                      <span className="text-xs font-mono uppercase tracking-widest font-semibold text-[#3B6676] dark:text-[#8EBDD0]">
                        {isAr ? 'قطاع هندسي معتمد' : 'Verified Discipline'}
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#181A1B] dark:text-[#F7F5F0]">
                      {isAr ? service.titleAr : service.titleEn}
                    </h2>

                    <p className="text-base text-[#3B3E42] dark:text-[#DCD8CF] font-sans leading-relaxed">
                      {isAr ? service.fullDescAr : service.fullDescEn}
                    </p>

                    {/* Features / Capabilities List */}
                    <div className="pt-4 border-t border-[#E2DED6] dark:border-[#2C2F33] space-y-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#A8421D] dark:text-[#E2774E] block">
                        {isAr ? 'نطاق الأعمال والإمكانات:' : 'Core Capabilities & Specifications:'}
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {(isAr ? service.featuresAr : service.featuresEn).map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2.5 text-xs text-[#2C2F33] dark:text-[#E2DED6] font-medium"
                          >
                            <span className="text-[#A8421D] dark:text-[#E2774E] font-bold mt-0.5">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA link to contact */}
                    <div className="pt-6 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/contact?service=${service.slug}`}
                        className="inline-flex items-center gap-3 bg-[#B84D28] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:bg-[#A33F1D] transition-colors focus-visible:outline-2 focus-visible:outline-[#B84D28]"
                      >
                        <span>{isAr ? 'استشارة هذا القطاع' : 'Request Consultation'}</span>
                        <ArrowIcon className="h-3.5 w-3.5" />
                      </Link>
                      <a
                        href={COMPANY_DETAILS.contact.landlineTel}
                        className="inline-flex items-center gap-2 border border-[#E2DED6] dark:border-[#2C2F33] px-5 py-3 text-xs font-semibold text-[#181A1B] dark:text-[#F7F5F0] hover:border-[#B84D28] hover:text-[#A8421D] dark:hover:text-[#E2774E] transition-colors focus-visible:outline-2 focus-visible:outline-[#B84D28]"
                        dir="ltr"
                      >
                        <Phone className="h-3.5 w-3.5 text-[#A8421D] dark:text-[#E2774E]" />
                        <span>{COMPANY_DETAILS.contact.landlineFormatted}</span>
                      </a>
                    </div>
                  </div>

                  {/* Architectural Image Column */}
                  <div className={`lg:col-span-5 ${!isEven ? 'lg:col-start-1' : ''}`}>
                    <div className="relative border border-[#E2DED6] dark:border-[#2C2F33] p-3 bg-[#EFECE6] dark:bg-[#2C2F33]/30">
                      <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-[#2C2F33]">
                        <Image
                          src={service.imageUrl}
                          alt={service.titleEn}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-[#181A1B]/10" />
                      </div>
                      <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono tracking-wider text-[#3B3E42] dark:text-[#DCD8CF] uppercase font-medium">
                        <span>Discipline {service.number}</span>
                        <span>Aqar Land UAE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 4. Bottom Contact Callout */}
      <section className="py-20 lg:py-24 bg-[#EFECE6] dark:bg-[#181A1B] border-t border-[#E2DED6] dark:border-[#2C2F33]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#A8421D] dark:text-[#E2774E]">
            {isAr ? 'استشارات المشاريع في أبوظبي' : 'TECHNICAL INQUIRIES & CONTRACTING'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#181A1B] dark:text-[#F7F5F0] max-w-3xl mx-auto">
            {isAr
              ? 'هل تحتاج إلى استشارة هندسية أو تنفيذ مشروع؟'
              : 'Require Tailored Engineering Execution or Upkeep?'}
          </h2>
          <p className="text-sm sm:text-base text-[#3B3E42] dark:text-[#DCD8CF] max-w-2xl mx-auto font-sans leading-relaxed">
            {isAr
              ? 'تواصل مباشرة مع فريقنا في أبوظبي لمناقشة المتطلبات، المخططات، والخطط التشغيلية.'
              : 'Connect directly with our headquarters in Abu Dhabi to review blueprints, specifications, and project schedules.'}
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#B84D28] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white hover:bg-[#A33F1D] transition-colors focus-visible:outline-2 focus-visible:outline-[#B84D28]"
            >
              <span>{isAr ? 'ابدأ محادثة مع فريقنا' : 'Start a Project Inquiry'}</span>
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
