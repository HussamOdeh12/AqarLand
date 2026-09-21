'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { UI_STRINGS } from '@/lib/translations';
import { COMPANY_DETAILS } from '@/lib/company-data';

export default function PrivacyPolicyPage() {
  const { lang, isAr } = useLanguage();

  return (
    <div className="flex flex-col bg-[#F7F5F0] dark:bg-[#181A1B] text-[#181A1B] dark:text-[#F7F5F0] transition-colors duration-200">
      {/* Header */}
      <section className="border-b border-[#E2DED6] dark:border-[#2C2F33] py-20 bg-[#EFECE6]/40 dark:bg-[#181A1B]">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#A8421D] dark:text-[#E2774E] block mb-3">
            {isAr ? 'السياسات والشفافية • دولة الإمارات' : 'LEGAL & GOVERNANCE • UAE'}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#181A1B] dark:text-[#F7F5F0]">
            {UI_STRINGS.footer.privacyNotice[lang]}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#3B3E42] dark:text-[#DCD8CF] font-sans">
            {isAr
              ? 'التزام مؤسسة عقارلاند للمقاولات العامة بحماية خصوصيتك ومعلوماتك وفق القوانين المعمول بها في دولة الإمارات.'
              : 'Our commitment to data protection and client privacy under UAE commercial regulations.'}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 mx-auto max-w-5xl px-6 lg:px-12">
        <div className="border border-[#E2DED6] dark:border-[#2C2F33] bg-[#EFECE6]/30 dark:bg-[#2C2F33]/20 p-8 sm:p-12 space-y-8 text-sm sm:text-base leading-relaxed text-[#2C2F33] dark:text-[#E2DED6] font-sans">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#181A1B] dark:text-[#F7F5F0] mb-2">
              {isAr ? '1. المقدمة ونطاق الالتزام' : '1. Introduction & Scope'}
            </h2>
            <p>
              {isAr
                ? 'تلتزم مؤسسة عقارلاند للمقاولات العامة والنقل (عقار لاند) بحماية خصوصية وأمان معلوماتكم. يوضح هذا الإشعار كيفية جمع واستخدام المعلومات المتعلقة بكم خلال تعاملاتكم معنا، وفقاً للقوانين واللوائح المعمول بها في إمارة أبوظبي ودولة الإمارات العربية المتحدة.'
                : 'Aqarland Contracting & Transporting Est. (Aqar Land) is committed to protecting the confidentiality and security of project inquiries and client information. This notice outlines how information is handled in accordance with the regulatory standards of the Emirate of Abu Dhabi and the United Arab Emirates.'}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#181A1B] dark:text-[#F7F5F0] mb-2">
              {isAr ? '2. المعلومات التي يتم جمعها' : '2. Information Handled'}
            </h2>
            <p>
              {isAr
                ? 'نقوم بجمع المعلومات اللازمة لتقديم الاستشارات الهندسية وإدارة المقاولات، مثل الاسم، تفاصيل الاتصال، ومواصفات المشروع والمخططات الهندسية المقدمة من قبلكم.'
                : 'We collect data necessary to provide engineering consultations, contracting proposals, and project management services, including full names, corporate contact details, and project specifications.'}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#181A1B] dark:text-[#F7F5F0] mb-2">
              {isAr ? '3. سرية المخططات والمواصفات' : '3. Blueprint & Data Confidentiality'}
            </h2>
            <p>
              {isAr
                ? 'تُعامل كافة المخططات المعمارية والوثائق الفنية بسرية تامة ولا تُشارك إلا مع الفرق الهندسية المصرح لها لأغراض دراسة المشروع وتنفيذه.'
                : 'All engineering blueprints, bill of quantities, and architectural specifications are treated with strict confidentiality and used exclusively for feasibility assessment, project execution, or client-authorized coordination.'}
            </p>
          </div>

          <div className="pt-6 border-t border-[#E2DED6] dark:border-[#2C2F33] flex flex-wrap items-center gap-6 text-xs font-mono">
            <span className="text-[#A8421D] dark:text-[#E2774E] font-semibold">{COMPANY_DETAILS.legalNameEn}</span>
            <span className="text-[#3B3E42] dark:text-[#DCD8CF]">Abu Dhabi, United Arab Emirates</span>
            <a href={COMPANY_DETAILS.contact.emailMailto} className="text-[#A8421D] dark:text-[#E2774E] hover:underline">
              {COMPANY_DETAILS.contact.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
