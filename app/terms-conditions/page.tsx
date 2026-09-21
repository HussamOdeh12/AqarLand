'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { UI_STRINGS } from '@/lib/translations';
import { COMPANY_DETAILS } from '@/lib/company-data';

export default function TermsConditionsPage() {
  const { lang, isAr } = useLanguage();

  return (
    <div className="flex flex-col bg-[#F7F5F0] dark:bg-[#181A1B] text-[#181A1B] dark:text-[#F7F5F0] transition-colors duration-200">
      {/* Header */}
      <section className="border-b border-[#E2DED6] dark:border-[#2C2F33] py-20 bg-[#EFECE6]/40 dark:bg-[#181A1B]">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32] block mb-3">
            {isAr ? 'الشروط والأحكام • دولة الإمارات' : 'TERMS & CONDITIONS • UAE'}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#181A1B] dark:text-[#F7F5F0]">
            {UI_STRINGS.footer.conditionsOfUse[lang]}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#2C2F33]/80 dark:text-[#E2DED6]/80 font-sans">
            {isAr
              ? 'الشروط والأحكام الحاكمة لاستخدام الموقع الإلكتروني والتواصل الهندسي مع مؤسسة عقارلاند للمقاولات العامة والنقل.'
              : 'Terms governing website usage and formal contracting inquiries with Aqarland Contracting & Transporting Est.'}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 mx-auto max-w-5xl px-6 lg:px-12">
        <div className="border border-[#E2DED6] dark:border-[#2C2F33] bg-[#EFECE6]/30 dark:bg-[#2C2F33]/20 p-8 sm:p-12 space-y-8 text-sm sm:text-base leading-relaxed text-[#2C2F33]/90 dark:text-[#E2DED6]/90 font-sans">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#181A1B] dark:text-[#F7F5F0] mb-2">
              {isAr ? '1. نطاق الشروط' : '1. Acceptance & Engagement'}
            </h2>
            <p>
              {isAr
                ? 'يخضع استخدام هذا الموقع الإلكتروني للبنود الموضحة هنا. إن تقديم الاستفسارات أو طلبات التسعير لا يشكل عقداً ملزماً حتى يتم توقيع اتفاقية رسمية معتمدة تحدد نطاق العمل والجدول الزمني.'
                : 'Access to this website is governed by these terms. Submitting specifications or requests for quotation does not constitute a binding contract until formal, mutual contracting agreements are executed.'}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#181A1B] dark:text-[#F7F5F0] mb-2">
              {isAr ? '2. الاستشارات والمواصفات الهندسية' : '2. Engineering Consultations & Proposals'}
            </h2>
            <p>
              {isAr
                ? 'تستند جميع العروض والمقترحات الفنية إلى الدراسات الميدانية والمخططات المعتمدة من الجهات المختصة في دولة الإمارات العربية المتحدة.'
                : 'All preliminary proposals, scope assessments, and timelines are developed following architectural reviews and local municipal parameters in the United Arab Emirates.'}
            </p>
          </div>

          <div className="pt-6 border-t border-[#E2DED6] dark:border-[#2C2F33] flex flex-wrap items-center gap-6 text-xs font-mono">
            <span className="text-[#C85A32] font-semibold">{COMPANY_DETAILS.legalNameEn}</span>
            <span>Abu Dhabi, UAE</span>
            <span dir="ltr">{COMPANY_DETAILS.contact.landlineFormatted}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
