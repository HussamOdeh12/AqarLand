'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function QualityPage() {
  const { lang, isAr } = useLanguage();
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const qualityPillars = [
    {
      num: '01',
      titleEn: 'Quality & Craftsmanship',
      titleAr: 'الجودة ودقة التنفيذ',
      descEn:
        'Uncompromising dedication to superior workmanship, structural integrity, and adherence to approved engineering specifications across all project stages.',
      descAr:
        'التزام راسخ بأعلى معايير الإتقان، والمتانة الإنشائية، ومطابقة المخططات والمواصفات الهندسية المعتمدة في كافة مراحل المشروع.',
    },
    {
      num: '02',
      titleEn: 'Continuous Improvement & Technology',
      titleAr: 'التحسين المستمر والابتكار',
      descEn:
        'Systematic enhancement of construction practices, adopting modern methods and technologies to optimize site execution and operational workflows.',
      descAr:
        'تطوير منهجي ومستمر لأساليب البناء واعتماد التقنيات الحديثة لرفع كفاءة التنفيذ وتطوير بيئة العمل.',
    },
    {
      num: '03',
      titleEn: 'Customer Satisfaction & Transparency',
      titleAr: 'رضا العملاء والشفافية',
      descEn:
        'Building enduring client relationships based on active communication, responsive collaboration, and exceeding expectations on every deliverable.',
      descAr:
        'بناء علاقات متينة مع العملاء تقوم على التواصل الفعال، والتنسيق المستمر، والحرص على تجاوز التوقعات في كافة المخرجات.',
    },
    {
      num: '04',
      titleEn: 'Sustainability & Environmental Awareness',
      titleAr: 'الاستدامة والمسؤولية البيئية',
      descEn:
        'Prioritizing sustainable practices, efficient resource utilization, and long-term durability in built environments across the UAE.',
      descAr:
        'التركيز على الممارسات المستدامة، والاستخدام الأمثل للموارد، وضمان ديمومة المباني والمنشآت في دولة الإمارات.',
    },
    {
      num: '05',
      titleEn: 'Cost Effectiveness & Efficiency',
      titleAr: 'الكفاءة وفعالية التكلفة',
      descEn:
        'Rigorous budget planning and resource management delivering maximum value and operational efficiency without compromising on build quality.',
      descAr:
        'تخطيط مالي دقيق وإدارة فعالة للموارد لتحقيق أعلى قيمة تشغيلية واقتصادية دون المساس بجودة البناء.',
    },
    {
      num: '06',
      titleEn: 'Schedule Discipline & Project Standards',
      titleAr: 'الانضباط الزمني والالتزام بالمعايير',
      descEn:
        'Strict adherence to agreed timelines, milestone management, and systematic site oversight to ensure predictable and orderly project handovers.',
      descAr:
        'التزام صارم بالجداول الزمنية المحددة، ومتابعة مراحل الإنجاز، وإشراف ميداني منتظم لضمان تسليم المشاريع بدقة وانضباط.',
    },
  ];

  return (
    <div className="flex flex-col bg-[#F7F5F0] dark:bg-[#181A1B] text-[#181A1B] dark:text-[#F7F5F0] transition-colors duration-200">
      {/* 1. Hero Header */}
      <section className="border-b border-[#E2DED6] dark:border-[#2C2F33] py-20 lg:py-28 bg-[#EFECE6]/40 dark:bg-[#181A1B]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
              {isAr ? 'منهجية الجودة والعمل • عقار لاند' : 'QUALITY FRAMEWORK • AQAR LAND'}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#181A1B] dark:text-[#F7F5F0] leading-tight">
              {isAr ? 'الجودة، النزاهة، والتميز الهندسي' : 'Quality Framework & Operational Approach'}
            </h1>
            <p className="text-base sm:text-lg text-[#2C2F33]/85 dark:text-[#E2DED6]/85 font-sans leading-relaxed pt-2">
              {isAr
                ? 'تلتزم عقار لاند بتقديم خدمات وحلول عالية الجودة تتجاوز توقعات العملاء، مع التركيز على الاستدامة، الكفاءة، والانضباط الزمني في أبوظبي والإمارات.'
                : 'A principled commitment to engineering quality, continuous improvement, customer satisfaction, and schedule discipline across every project lifecycle.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Pillars Grid */}
      <section className="py-20 lg:py-28 border-b border-[#E2DED6] dark:border-[#2C2F33]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityPillars.map((item) => (
              <div
                key={item.num}
                className="border border-[#E2DED6] dark:border-[#2C2F33] p-8 bg-[#EFECE6]/30 dark:bg-[#2C2F33]/20 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-[#C85A32] tracking-widest">
                      {item.num}
                    </span>
                    <div className="h-2 w-2 bg-[#C85A32]" />
                  </div>
                  <h2 className="font-serif text-xl font-normal text-[#181A1B] dark:text-[#F7F5F0]">
                    {isAr ? item.titleAr : item.titleEn}
                  </h2>
                  <p className="text-sm text-[#2C2F33]/80 dark:text-[#E2DED6]/80 leading-relaxed font-sans">
                    {isAr ? item.descAr : item.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Operational Discipline & Site Standards */}
      <section className="py-20 lg:py-28 border-b border-[#E2DED6] dark:border-[#2C2F33] bg-[#EFECE6]/50 dark:bg-[#181A1B]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
                {isAr ? 'الانضباط الهندسي والميداني' : 'OPERATIONAL DISCIPLINE & RIGOR'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#181A1B] dark:text-[#F7F5F0]">
                {isAr ? 'بيئة عمل منضبطة ومعايير تنفيذ دقيقة' : 'Structured On-Site Management & Project Standards'}
              </h2>
              <p className="text-base text-[#2C2F33]/85 dark:text-[#E2DED6]/85 font-sans leading-relaxed">
                {isAr
                  ? 'تحرص عقار لاند على تنظيم مواقع العمل، والالتزام بإرشادات السلامة العامة، وتطبيق الرقابة الهندسية المستمرة في كافة مراحل التشييد والبناء لضمان أعلى درجات الجودة والتسليم المنضبط.'
                  : 'Aqar Land enforces structured site coordination, safety guidelines, and active supervision across all active works in Abu Dhabi, ensuring high construction quality and timely project completion.'}
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
                  <span>Site Supervision Standards</span>
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
