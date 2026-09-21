'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { COMPANY_DETAILS } from '@/lib/company-data';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  const { isAr } = useLanguage();
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="flex flex-col bg-[#F7F5F0] dark:bg-[#181A1B] text-[#181A1B] dark:text-[#F7F5F0] transition-colors duration-200">
      {/* 1. Architectural Hero Header */}
      <section className="border-b border-[#E2DED6] dark:border-[#2C2F33] py-20 lg:py-28 bg-[#EFECE6]/40 dark:bg-[#181A1B]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A8421D] dark:text-[#E2774E]">
              {isAr ? 'عن المؤسسة • أبوظبي، الإمارات' : 'CORPORATE PROFILE • ABU DHABI, UAE'}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#181A1B] dark:text-[#F7F5F0] leading-tight">
              {isAr ? 'نبذة عن عقار لاند للمقاولات العامة' : 'About Aqar Land Contracting'}
            </h1>
            <p className="text-base sm:text-lg text-[#3B3E42] dark:text-[#DCD8CF] font-sans leading-relaxed pt-2">
              {isAr
                ? 'مؤسسة وطنية متخصصة في المقاولات العامة، صيانة المنشآت، والخدمات المساندة في عاصمة دولة الإمارات العربية المتحدة.'
                : 'A dedicated UAE enterprise delivering disciplined general contracting, preventive facility maintenance, and technical execution across Abu Dhabi.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Narrative & Editorial Asymmetric Layout */}
      <section className="py-20 lg:py-28 border-b border-[#E2DED6] dark:border-[#2C2F33]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A8421D] dark:text-[#E2774E]">
                {isAr ? 'الهوية والرسالة' : 'OUR IDENTITY & DISCIPLINE'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#181A1B] dark:text-[#F7F5F0]">
                {isAr ? COMPANY_DETAILS.tagline.ar : COMPANY_DETAILS.tagline.en}
              </h2>
              <div className="space-y-4 text-base text-[#3B3E42] dark:text-[#DCD8CF] leading-relaxed font-sans">
                <p>
                  {isAr
                    ? 'تعمل مؤسسة عقارلاند للمقاولات العامة والنقل من مقرها في أبوظبي لتقديم خدمات هندسية وإنشائية متكاملة تلبي احتياجات المشاريع السكنية والتجارية. نحن نركز على تحقيق أعلى درجات الجودة والمتانة الإنشائية.'
                    : 'Operating from its headquarters in Abu Dhabi, Aqarland Contracting & Transporting Est. provides integrated engineering and contracting works across residential and commercial developments. We build with an enduring focus on structural integrity and craftsmanship.'}
                </p>
                <p>
                  {isAr
                    ? 'من خلال إدارة هندسية دقيقة وكوادر فنية متمرسة، نحرص على تنفيذ كافة الأعمال وفق المخططات المعتمدة، مع الالتزام بالمواعيد المحددة والتنسيق المستمر مع كافة الأطراف والشركاء.'
                    : 'Through disciplined on-site management and experienced technical teams, our operations adhere strictly to approved architectural specifications, ensuring predictable project scheduling, transparent coordination, and lasting performance.'}
                </p>
              </div>

              {/* Verified Legal Details Box */}
              <div className="pt-6 border-t border-[#E2DED6] dark:border-[#2C2F33] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="border border-[#E2DED6] dark:border-[#2C2F33] p-4 bg-[#EFECE6]/40 dark:bg-[#2C2F33]/20">
                  <span className="font-semibold uppercase tracking-wider text-[#A8421D] dark:text-[#E2774E] block mb-1">
                    {isAr ? 'الاسم التجاري المعتمد' : 'Official Entity Name'}
                  </span>
                  <p className="font-medium text-[#181A1B] dark:text-[#F7F5F0]">
                    {COMPANY_DETAILS.legalNameEn}
                  </p>
                  <p className="font-arabic text-[#3B3E42] dark:text-[#DCD8CF] mt-1">
                    {COMPANY_DETAILS.legalNameAr}
                  </p>
                </div>
                <div className="border border-[#E2DED6] dark:border-[#2C2F33] p-4 bg-[#EFECE6]/40 dark:bg-[#2C2F33]/20">
                  <span className="font-semibold uppercase tracking-wider text-[#A8421D] dark:text-[#E2774E] block mb-1">
                    {isAr ? 'المقر الإقليمي' : 'Headquarters'}
                  </span>
                  <p className="font-medium text-[#181A1B] dark:text-[#F7F5F0]">
                    {isAr ? COMPANY_DETAILS.headquarters.addressAr : COMPANY_DETAILS.headquarters.addressEn}
                  </p>
                  <p className="text-[#3B3E42] dark:text-[#DCD8CF] mt-1 font-mono">
                    Abu Dhabi, United Arab Emirates
                  </p>
                </div>
              </div>
            </div>

            {/* Architectural Visual */}
            <div className="lg:col-span-5">
              <div className="relative border border-[#E2DED6] dark:border-[#2C2F33] p-3 bg-[#EFECE6] dark:bg-[#2C2F33]/40">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#2C2F33]">
                  <Image
                    src="/images/about/about-hq.jpg"
                    alt={isAr ? 'المقر الرئيسي — عقار لاند أبوظبي' : 'AQAR LAND Abu Dhabi Operations'}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#181A1B]/15" />
                </div>
                <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono tracking-wider text-[#3B3E42] dark:text-[#DCD8CF] uppercase font-medium">
                  <span>Abu Dhabi HQ Operations</span>
                  <span>United Arab Emirates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-20 lg:py-28 border-b border-[#E2DED6] dark:border-[#2C2F33] bg-[#EFECE6]/40 dark:bg-[#181A1B]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border border-[#E2DED6] dark:border-[#2C2F33] p-8 lg:p-12 bg-[#F7F5F0] dark:bg-[#2C2F33]/30 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A8421D] dark:text-[#E2774E]">
                {isAr ? 'رسالتنا' : 'OUR MISSION'}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#181A1B] dark:text-[#F7F5F0]">
                {isAr ? 'التميز المهني وتجاوز التوقعات' : 'Professional Excellence & Client Satisfaction'}
              </h3>
              <p className="text-base text-[#3B3E42] dark:text-[#DCD8CF] font-sans leading-relaxed">
                {isAr ? COMPANY_DETAILS.mission.ar : COMPANY_DETAILS.mission.en}
              </p>
            </div>

            <div className="border border-[#E2DED6] dark:border-[#2C2F33] p-8 lg:p-12 bg-[#F7F5F0] dark:bg-[#2C2F33]/30 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A8421D] dark:text-[#E2774E]">
                {isAr ? 'رؤيتنا' : 'OUR VISION'}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#181A1B] dark:text-[#F7F5F0]">
                {isAr ? 'الريادة والحلول المستدامة' : 'Enduring Leadership & Sustainable Growth'}
              </h3>
              <p className="text-base text-[#3B3E42] dark:text-[#DCD8CF] font-sans leading-relaxed">
                {isAr ? COMPANY_DETAILS.vision.ar : COMPANY_DETAILS.vision.en}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-20 lg:py-28 border-b border-[#E2DED6] dark:border-[#2C2F33]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A8421D] dark:text-[#E2774E]">
              {isAr ? 'القيم الجوهرية' : 'CORE VALUES'}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#181A1B] dark:text-[#F7F5F0]">
              {isAr ? 'المبادئ المؤسسية التي تحكم أعمالنا' : 'The Principles That Define Our Craft'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_DETAILS.values.map((val, idx) => (
              <div
                key={idx}
                className="border border-[#E2DED6] dark:border-[#2C2F33] p-6 lg:p-8 bg-[#EFECE6]/30 dark:bg-[#2C2F33]/20 space-y-3"
              >
                <span className="font-mono text-xs font-bold text-[#A8421D] dark:text-[#E2774E] tracking-wider block">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-xl font-normal text-[#181A1B] dark:text-[#F7F5F0]">
                  {isAr ? val.titleAr : val.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-[#3B3E42] dark:text-[#DCD8CF] leading-relaxed font-sans">
                  {isAr ? val.descAr : val.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom Callout */}
      <section className="py-20 lg:py-24 bg-[#EFECE6] dark:bg-[#181A1B]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#A8421D] dark:text-[#E2774E]">
            {isAr ? 'المقر الرئيسي في أبوظبي' : 'DIRECT ENGAGEMENT'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#181A1B] dark:text-[#F7F5F0] max-w-3xl mx-auto">
            {isAr ? 'تواصل مع فريقنا لمناقشة مشروعك' : 'Connect Directly with Our Abu Dhabi Headquarters'}
          </h2>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#B84D28] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white hover:bg-[#A33F1D] transition-colors focus-visible:outline-2 focus-visible:outline-[#B84D28]"
            >
              <span>{isAr ? 'تواصل معنا' : 'Contact Headquarters'}</span>
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
