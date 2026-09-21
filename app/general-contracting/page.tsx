'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { STITCH_SERVICES, COMPANY_DETAILS } from '@/lib/company-data';
import ContactForm from '@/components/ContactForm';
import { ArrowRight, ArrowLeft, Phone } from 'lucide-react';

export default function GeneralContractingPage() {
  const { lang, isAr } = useLanguage();
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;
  const service = STITCH_SERVICES.find((s) => s.id === 'general-contracting')!;

  return (
    <div className="flex flex-col bg-[#F7F5F0] dark:bg-[#181A1B] text-[#181A1B] dark:text-[#F7F5F0] transition-colors duration-200">
      {/* Hero */}
      <section className="border-b border-[#E2DED6] dark:border-[#2C2F33] py-20 lg:py-28 bg-[#EFECE6]/40 dark:bg-[#181A1B]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
              {isAr ? 'قطاع هندسي معتمد • 01' : 'VERIFIED DISCIPLINE • 01'}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#181A1B] dark:text-[#F7F5F0] leading-tight">
              {isAr ? service.titleAr : service.titleEn}
            </h1>
            <p className="text-base sm:text-lg text-[#2C2F33]/85 dark:text-[#E2DED6]/85 font-sans leading-relaxed pt-2">
              {isAr ? service.shortDescAr : service.shortDescEn}
            </p>
          </div>
        </div>
      </section>

      {/* Narrative & Visual */}
      <section className="py-20 lg:py-28 border-b border-[#E2DED6] dark:border-[#2C2F33]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
                {isAr ? 'نطاق العمل والمواصفات' : 'SPECIFICATIONS & EXECUTION'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#181A1B] dark:text-[#F7F5F0]">
                {isAr ? 'حلول مقاولات متكاملة وتسليم مفتاح' : 'End-to-End Turnkey Contracting'}
              </h2>
              <p className="text-base text-[#2C2F33]/85 dark:text-[#E2DED6]/85 leading-relaxed font-sans">
                {isAr ? service.fullDescAr : service.fullDescEn}
              </p>

              <div className="pt-4 border-t border-[#E2DED6] dark:border-[#2C2F33] space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C85A32] block">
                  {isAr ? 'الإمكانات المعتمدة:' : 'Approved Capabilities:'}
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {(isAr ? service.featuresAr : service.featuresEn).map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#2C2F33] dark:text-[#E2DED6] font-medium">
                      <span className="text-[#C85A32] font-bold">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative border border-[#E2DED6] dark:border-[#2C2F33] p-3 bg-[#EFECE6] dark:bg-[#2C2F33]/30">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#2C2F33]">
                  <Image
                    src={service.imageUrl}
                    alt={service.titleEn}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
