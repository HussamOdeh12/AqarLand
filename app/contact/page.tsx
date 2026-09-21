'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { UI_STRINGS } from '@/lib/translations';
import { COMPANY_DETAILS } from '@/lib/company-data';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Building2,
} from 'lucide-react';

export default function ContactPage() {
  const { lang, isAr } = useLanguage();

  const breadcrumbItems = [
    {
      labelEn: UI_STRINGS.nav.contactUs.en,
      labelAr: UI_STRINGS.nav.contactUs.ar,
      href: '/contact',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero Header */}
      <section className="bg-slate-950 text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
              <Building2 className="h-3.5 w-3.5" />
              <span>{isAr ? 'المقر الرئيسي في أبوظبي' : 'Abu Dhabi Headquarters'}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {UI_STRINGS.contact.title[lang]}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {UI_STRINGS.contact.subtitle[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-14 sm:py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Location */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Cards */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="font-serif text-xl font-bold text-slate-950">
                {isAr ? 'بيانات الاتصال المعتمدة' : 'Official Contact Channels'}
              </h2>

              {/* Physical Location */}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700 shrink-0 mt-0.5">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    {UI_STRINGS.contact.address[lang]}
                  </span>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    {COMPANY_DETAILS.headquarters.addressEn}
                  </p>
                  <p className="text-xs text-slate-500">
                    {isAr ? 'الإمارات العربية المتحدة' : 'United Arab Emirates'}
                  </p>
                  <a
                    id="contact-page-maps-link"
                    href={COMPANY_DETAILS.headquarters.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 hover:underline mt-1.5"
                  >
                    <span>{UI_STRINGS.contact.openInMaps[lang]}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Landline */}
              <div className="flex items-start gap-3 pt-4 border-t border-slate-100">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-800 shrink-0 mt-0.5">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    {UI_STRINGS.contact.landline[lang]}
                  </span>
                  <a
                    id="contact-landline-tel"
                    href={COMPANY_DETAILS.contact.landlineTel}
                    className="text-base font-bold text-slate-900 hover:text-amber-700 transition-colors"
                    dir="ltr"
                  >
                    {COMPANY_DETAILS.contact.landlineFormatted}
                  </a>
                  <p className="text-xs text-slate-500">
                    {isAr ? 'هاتف المكتب الرئيسي' : 'Main Office Line'}
                  </p>
                </div>
              </div>

              {/* Mobile / 24/7 Dispatch */}
              <div className="flex items-start gap-3 pt-4 border-t border-slate-100">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 shrink-0 mt-0.5">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    {UI_STRINGS.contact.mobile[lang]}
                  </span>
                  <a
                    id="contact-mobile-tel"
                    href={COMPANY_DETAILS.contact.mobileTel}
                    className="text-base font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                    dir="ltr"
                  >
                    {COMPANY_DETAILS.contact.mobileFormatted}
                  </a>
                  <p className="text-xs text-slate-500">
                    {isAr ? 'متاح 24/7 لطوارئ الصيانة والتشغيل' : 'Available 24/7 for Emergency Dispatch'}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 pt-4 border-t border-slate-100">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-700 shrink-0 mt-0.5">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    {UI_STRINGS.contact.email[lang]}
                  </span>
                  <a
                    id="contact-email-mailto"
                    href={COMPANY_DETAILS.contact.emailMailto}
                    className="text-base font-bold text-slate-900 hover:text-amber-700 transition-colors"
                  >
                    {COMPANY_DETAILS.contact.email}
                  </a>
                  <p className="text-xs text-slate-500">
                    {isAr ? 'للمناقصات والاستفسارات الهندسية' : 'For RFPs, tenders, and inquiries'}
                  </p>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  id="contact-instant-whatsapp-link"
                  href={COMPANY_DETAILS.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 text-sm font-bold text-white hover:bg-emerald-500 transition-colors shadow-sm"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>{UI_STRINGS.quoteTool.directWhatsapp[lang]}</span>
                </a>
              </div>
            </div>

            {/* Embed / Map Display Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between mb-3 px-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  {isAr ? 'خريطة الموقع' : 'Interactive Location'}
                </span>
                <a
                  href={COMPANY_DETAILS.headquarters.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-amber-700 hover:underline flex items-center gap-1"
                >
                  <span>{UI_STRINGS.contact.openInMaps[lang]}</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Responsive Google Map iframe */}
              <div className="relative h-64 w-full rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                <iframe
                  title="Aqar Land Abu Dhabi Map"
                  src="https://maps.google.com/maps?q=24.4538818,54.3922035&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Direct Enquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
