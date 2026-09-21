'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { UI_STRINGS } from '@/lib/translations';
import { COMPANY_DETAILS, SERVICE_CATEGORIES } from '@/lib/company-data';
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';

export default function Footer() {
  const { lang, isAr } = useLanguage();

  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-slate-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        {isAr ? 'تذييل الموقع' : 'Footer Navigation'}
      </h2>

      {/* Main Footer Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Corporate Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600 text-slate-950 font-black">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <span className="block font-serif text-lg font-bold text-white">
                  AQAR LAND
                </span>
                <span className="block text-xs font-semibold text-amber-400 font-arabic">
                  عقار لاند
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-400">
              {UI_STRINGS.footer.aboutText[lang]}
            </p>

            <div className="inline-flex items-center gap-2 rounded border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs text-amber-400">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>
                {isAr ? 'تأسست عام 2000 في أبوظبي' : 'Established in 2000 • Abu Dhabi, UAE'}
              </span>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <span className="block text-xs uppercase font-medium text-slate-500 mb-2">
                {isAr ? 'تابعنا' : 'Official Channels'}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={COMPANY_DETAILS.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-slate-900 p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors"
                  aria-label="Aqar Land Facebook"
                >
                  <span className="text-xs font-bold">FB</span>
                </a>
                <a
                  href={COMPANY_DETAILS.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-slate-900 p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors"
                  aria-label="Aqar Land Instagram"
                >
                  <span className="text-xs font-bold">IG</span>
                </a>
                <a
                  href={COMPANY_DETAILS.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-slate-900 p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors"
                  aria-label="Aqar Land X Twitter"
                >
                  <span className="text-xs font-bold">X</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              {UI_STRINGS.footer.services[lang]}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/general-contracting"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  {UI_STRINGS.nav.generalContracting[lang]}
                </Link>
                <div className="text-xs text-slate-500 mt-0.5">
                  {isAr ? 'سكني • تجاري • صناعي' : 'Residential • Commercial • Industrial'}
                </div>
              </li>
              <li className="pt-1">
                <Link
                  href="/building-maintenance"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  {UI_STRINGS.nav.buildingMaintenance[lang]}
                </Link>
                <div className="text-xs text-slate-500 mt-0.5">
                  {isAr ? 'صيانة دورية • طوارئ 24/7 • عقود سنوية' : 'Routine • 24/7 Emergency • AMC Contracts'}
                </div>
              </li>
              <li className="pt-1">
                <Link
                  href="/support-services"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  {UI_STRINGS.nav.supportServices[lang]}
                </Link>
                <div className="text-xs text-slate-500 mt-0.5">
                  {isAr ? 'إدارة المشاريع • تدقيق السلامة • التدريب' : 'Project Management • Safety Audits • Training'}
                </div>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              {UI_STRINGS.footer.quickLinks[lang]}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-amber-400 transition-colors">
                  {UI_STRINGS.nav.home[lang]}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-amber-400 transition-colors">
                  {UI_STRINGS.nav.aboutUs[lang]}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-amber-400 transition-colors">
                  {UI_STRINGS.nav.contactUs[lang]}
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <Link
                  href="/privacy-policy"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  {UI_STRINGS.footer.privacyNotice[lang]}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  {UI_STRINGS.footer.conditionsOfUse[lang]}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              {isAr ? 'المقر ومعلومات الاتصال' : 'Abu Dhabi Headquarters'}
            </h3>
            <address className="not-italic space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-amber-500 shrink-0 mt-1" />
                <div>
                  <span className="block font-medium text-slate-300">
                    {COMPANY_DETAILS.headquarters.addressEn}
                  </span>
                  <a
                    href={COMPANY_DETAILS.headquarters.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-amber-400 hover:underline mt-0.5"
                  >
                    <span>{UI_STRINGS.contact.openInMaps[lang]}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-amber-500 shrink-0" />
                <div>
                  <div className="text-xs text-slate-500">{isAr ? 'الهاتف الثابت' : 'Landline'}</div>
                  <a
                    href={COMPANY_DETAILS.contact.landlineTel}
                    className="font-medium text-slate-300 hover:text-amber-400 transition-colors"
                    dir="ltr"
                  >
                    {COMPANY_DETAILS.contact.landlineFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs text-slate-500">{isAr ? 'الهاتف المتحرك' : 'Mobile / 24-7'}</div>
                  <a
                    href={COMPANY_DETAILS.contact.mobileTel}
                    className="font-medium text-slate-300 hover:text-emerald-400 transition-colors"
                    dir="ltr"
                  >
                    {COMPANY_DETAILS.contact.mobileFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-amber-500 shrink-0" />
                <div>
                  <div className="text-xs text-slate-500">{isAr ? 'البريد الإلكتروني' : 'Email Us'}</div>
                  <a
                    href={COMPANY_DETAILS.contact.emailMailto}
                    className="font-medium text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    {COMPANY_DETAILS.contact.email}
                  </a>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{UI_STRINGS.footer.rightsReserved[lang]}</p>
          <p className="text-slate-500">
            {isAr
              ? 'بناء معالم الغد بفخر إماراتي • أبوظبي'
              : "Constructing Tomorrow's Landmarks with Emirati Pride • Abu Dhabi, UAE"}
          </p>
        </div>
      </div>
    </footer>
  );
}
