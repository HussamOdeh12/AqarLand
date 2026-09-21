'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { UI_STRINGS } from '@/lib/translations';
import { COMPANY_DETAILS } from '@/lib/company-data';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react';

export default function ContactPage() {
  const { lang, isAr } = useLanguage();
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div className="flex flex-col bg-[#F7F5F0] dark:bg-[#181A1B] text-[#181A1B] dark:text-[#F7F5F0] transition-colors duration-200">
      {/* 1. Hero Header */}
      <section className="border-b border-[#E2DED6] dark:border-[#2C2F33] py-20 lg:py-28 bg-[#EFECE6]/40 dark:bg-[#181A1B]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32]">
              {isAr ? 'المقر الرئيسي • أبوظبي، الإمارات' : 'HEADQUARTERS • ABU DHABI, UAE'}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#181A1B] dark:text-[#F7F5F0] leading-tight">
              {UI_STRINGS.contact.title[lang]}
            </h1>
            <p className="text-base sm:text-lg text-[#2C2F33]/85 dark:text-[#E2DED6]/85 font-sans leading-relaxed pt-2">
              {UI_STRINGS.contact.subtitle[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Official Contact Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div className="border border-[#E2DED6] dark:border-[#2C2F33] p-8 bg-[#EFECE6]/30 dark:bg-[#2C2F33]/20 space-y-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32] block">
                  {isAr ? 'قنوات التواصل المعتمدة' : 'OFFICIAL CONTACT DETAILS'}
                </span>

                {/* Physical HQ Address */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2C2F33] dark:text-[#E2DED6]">
                    <MapPin className="h-4 w-4 text-[#C85A32]" />
                    <span>{UI_STRINGS.contact.hqLabel[lang]}</span>
                  </div>
                  <p className="text-sm text-[#181A1B] dark:text-[#F7F5F0] ps-6">
                    {isAr ? COMPANY_DETAILS.headquarters.addressAr : COMPANY_DETAILS.headquarters.addressEn}
                  </p>
                  <div className="ps-6 pt-1">
                    <a
                      href={COMPANY_DETAILS.headquarters.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C85A32] hover:text-[#B84D28] transition-colors"
                    >
                      <span>{isAr ? 'فتح في خرائط Google' : 'View on Google Maps'}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Telephone Landline */}
                <div className="pt-4 border-t border-[#E2DED6] dark:border-[#2C2F33] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2C2F33] dark:text-[#E2DED6]">
                    <Phone className="h-4 w-4 text-[#C85A32]" />
                    <span>{UI_STRINGS.contact.phone[lang]}</span>
                  </div>
                  <p className="text-sm font-mono ps-6" dir="ltr">
                    <a
                      href={COMPANY_DETAILS.contact.landlineTel}
                      className="hover:text-[#C85A32] transition-colors"
                    >
                      {COMPANY_DETAILS.contact.landlineFormatted}
                    </a>
                  </p>
                </div>

                {/* Mobile / WhatsApp */}
                <div className="pt-4 border-t border-[#E2DED6] dark:border-[#2C2F33] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2C2F33] dark:text-[#E2DED6]">
                    <Phone className="h-4 w-4 text-[#C85A32]" />
                    <span>{UI_STRINGS.contact.mobile[lang]}</span>
                  </div>
                  <p className="text-sm font-mono ps-6" dir="ltr">
                    <a
                      href={COMPANY_DETAILS.contact.mobileTel}
                      className="hover:text-[#C85A32] transition-colors"
                    >
                      {COMPANY_DETAILS.contact.mobileFormatted}
                    </a>
                  </p>
                </div>

                {/* Email Inquiries */}
                <div className="pt-4 border-t border-[#E2DED6] dark:border-[#2C2F33] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2C2F33] dark:text-[#E2DED6]">
                    <Mail className="h-4 w-4 text-[#C85A32]" />
                    <span>{UI_STRINGS.contact.email[lang]}</span>
                  </div>
                  <p className="text-sm font-sans ps-6">
                    <a
                      href={COMPANY_DETAILS.contact.emailMailto}
                      className="hover:text-[#C85A32] transition-colors"
                    >
                      {COMPANY_DETAILS.contact.email}
                    </a>
                  </p>
                </div>
              </div>

              {/* Legal Notice */}
              <div className="border border-[#E2DED6] dark:border-[#2C2F33] p-6 text-xs text-[#2C2F33]/70 dark:text-[#E2DED6]/70 space-y-2">
                <span className="font-semibold uppercase tracking-wider text-[#C85A32] block">
                  {isAr ? 'الترخيص والاعتماد' : 'Registration & Licensure'}
                </span>
                <p>
                  {isAr
                    ? 'مؤسسة عقارلاند للمقاولات العامة والنقل مسجلة ومرخصة رسمياً في إمارة أبوظبي، دولة الإمارات العربية المتحدة.'
                    : 'Aqarland Contracting & Transporting Est. is an officially registered commercial entity operating under UAE commercial regulations in the Emirate of Abu Dhabi.'}
                </p>
              </div>
            </div>

            {/* Right Column: Stitch Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
