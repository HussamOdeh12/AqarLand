'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { UI_STRINGS } from '@/lib/translations';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function QualityPage() {
  const { lang, isAr } = useLanguage();
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const qualityStandards = [
    {
      num: '01',
      titleEn: 'Structural Precision & Calculation Rigor',
      titleAr: 'الدقة الإنشائية والتحليل الهندسي',
      descEn:
        'Every structural component is assessed against regional load dynamics, foundation stability requirements, and structural engineering best practices.',
      descAr:
        'يتم فحص كل عنصر إنشائي وفق حسابات الأحمال واستقرار الأساسات وأفضل الممارسات الهندسية الإقليمية المعتمدة.',
    },
    {
      num: '02',
      titleEn: 'Material Verification & Environmental Resilience',
      titleAr: 'التحقق من المواد ومقاومة البيئة المحلية',
      descEn:
        'All raw materials, concrete aggregates, waterproofing membranes, and steel reinforcement are sourced from certified regional suppliers capable of withstanding the UAE climate.',
      descAr:
        'يتم توريد الخرسانة، وحديد التسليح، وعوازل المياه والرطوبة من موردين معتمدين لضمان مقاومة العوامل الجوية ودرجات الحرارة العالية.',
    },
    {
      num: '03',
      titleEn: 'On-Site Supervision & Milestone Sign-Offs',
      titleAr: 'الإشراف الميداني واعتماد المراحل',
      descEn:
        'Daily on-site logs and milestone inspections guarantee that execution matches approved architectural drawings before proceeding to subsequent construction stages.',
      descAr:
        'سجلات متابعة يومية وفحوصات دورية لكل مرحلة تضمن مطابقة التنفيذ للمخططات الهندسية المعتمدة قبل الانتقال للمرحلة التالية.',
    },
    {
      num: '04',
      titleEn: 'Proactive Asset Upkeep & Lifecycle Care',
      titleAr: 'الصيانة الاستباقية وحماية الأصول',
      descEn:
        'Post-handover maintenance agreements and systematic preventative routines preserve the mechanical, electrical, and aesthetic integrity of built structures.',
      descAr:
        'برامج صيانة وقائية دورية تحافظ على كفاءة الأنظمة الكهروميكانيكية وسلامة المباني والمنشآت على المدى الطويل.',
    },
  ];

  return (
    <div className="flex flex-col bg-[#F7F5F0] dark:bg-[#181A1B] text-[#181A1B] dark:text-[#F7F5F0] transition-colors duration-200">
      {/* 1. Hero Header */}
      <section className="border-b border-[#E2DED6] dark:border-[#2C2F33] py-20 lg:py-28 bg-[#EFECE6]/40 dark:bg-[#181A1B]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
              {isAr ? 'منهجية الجودة والرقابة • عقار لاند' : 'METHODOLOGY & QUALITY • AQAR LAND'}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#181A1B] dark:text-[#F7F5F0] leading-tight">
              {isAr ? 'الجودة، النزاهة، والانضباط الهندسي' : 'Quality Framework & Operational Approach'}
            </h1>
            <p className="text-base sm:text-lg text-[#2C2F33]/85 dark:text-[#E2DED6]/85 font-sans leading-relaxed pt-2">
              {isAr
                ? 'نلتزم بأعلى معايير الحرفية والشفافية في كافة مراحل التخطيط، المقاولات، والتنفيذ في أبوظبي ودولة الإمارات.'
                : 'A principled commitment to structural durability, meticulous site oversight, and transparent stakeholder coordination across every construction and maintenance lifecycle.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Pillars Grid */}
      <section className="py-20 lg:py-28 border-b border-[#E2DED6] dark:border-[#2C2F33]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {qualityStandards.map((item) => (
              <div
                key={item.num}
                className="border border-[#E2DED6] dark:border-[#2C2F33] p-8 lg:p-10 bg-[#EFECE6]/30 dark:bg-[#2C2F33]/20 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-[#C85A32] tracking-widest">
                    {item.num}
                  </span>
                  <div className="h-2 w-2 bg-[#C85A32]" />
                </div>
                <h2 className="font-serif text-2xl font-normal text-[#181A1B] dark:text-[#F7F5F0]">
                  {isAr ? item.titleAr : item.titleEn}
                </h2>
                <p className="text-sm text-[#2C2F33]/80 dark:text-[#E2DED6]/80 leading-relaxed font-sans">
                  {isAr ? item.descAr : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Site Health, Safety & Environment (HSE) Discipline */}
      <section className="py-20 lg:py-28 border-b border-[#E2DED6] dark:border-[#2C2F33] bg-[#EFECE6]/50 dark:bg-[#181A1B]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
                {isAr ? 'السلامة والبيئة المهنية' : 'SAFETY PROTOCOLS & SITE RIGOR'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#181A1B] dark:text-[#F7F5F0]">
                {isAr ? 'بيئة عمل آمنة، منظمة، ومنضبطة' : 'Disciplined On-Site Environmental & Safety Standards'}
              </h2>
              <p className="text-base text-[#2C2F33]/85 dark:text-[#E2DED6]/85 font-sans leading-relaxed">
                {isAr
                  ? 'تولي عقار لاند سلامة الكوادر الفنية والمواقع الإنشائية أولوية قصوى. تطبق فرقنا الميدانية بروتوكولات وقائية يومية وتدريبات دورية للحفاظ على بيئة عمل آمنة ومنتجة.'
                  : 'Aqar Land enforces proactive safety protocols across every active site in Abu Dhabi. From daily morning briefings to hazard mitigation and mandatory personal protective equipment, our worksites maintain strict operational discipline.'}
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#C85A32] px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-white hover:bg-[#B84D28] transition-colors"
                >
                  <span>{isAr ? 'تواصل مع المقر الرئيسي' : 'Discuss Standards with HQ'}</span>
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative border border-[#E2DED6] dark:border-[#2C2F33] p-3 bg-[#F7F5F0] dark:bg-[#2C2F33]/40">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#2C2F33]">
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
                    alt="On-site Engineering Supervision"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#181A1B]/15" />
                </div>
                <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono tracking-wider text-[#2C2F33]/60 dark:text-[#E2DED6]/60 uppercase">
                  <span>Site Supervision Protocol</span>
                  <span>Abu Dhabi, UAE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="py-20 lg:py-24 bg-[#EFECE6] dark:bg-[#181A1B]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
            {isAr ? 'استشارات الجودة والمشاريع' : 'PROJECT CONSULTATION'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#181A1B] dark:text-[#F7F5F0] max-w-3xl mx-auto">
            {isAr ? 'شاركنا متطلبات ومخططات مشروعك' : 'Review Blueprints & Engineering Specifications'}
          </h2>
          <p className="text-sm sm:text-base text-[#2C2F33]/80 dark:text-[#E2DED6]/80 max-w-2xl mx-auto font-sans leading-relaxed">
            {isAr
              ? 'فريقنا الهندسي في أبوظبي مستعد لدراسة المخططات وتقديم التوجيهات الفنية اللازمة.'
              : 'Our engineering and management team in Abu Dhabi is ready to conduct a detailed review of your project requirements.'}
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#C85A32] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white hover:bg-[#B84D28] transition-colors"
            >
              <span>{isAr ? 'ابدأ مشروعك' : 'Start a Project Inquiry'}</span>
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
