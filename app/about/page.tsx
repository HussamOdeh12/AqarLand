'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { UI_STRINGS } from '@/lib/translations';
import { COMPANY_DETAILS } from '@/lib/company-data';
import Breadcrumbs from '@/components/Breadcrumbs';
import {
  Building2,
  ShieldCheck,
  Award,
  Sparkles,
  Users,
  HardHat,
  Compass,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';

export default function AboutPage() {
  const { lang, isAr } = useLanguage();
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const breadcrumbItems = [
    {
      labelEn: UI_STRINGS.nav.aboutUs.en,
      labelAr: UI_STRINGS.nav.aboutUs.ar,
      href: '/about',
    },
  ];

  const valueIcons: Record<string, React.ElementType> = {
    ShieldCheck,
    Award,
    Sparkles,
    Users,
    HardHat,
    Compass,
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-16 sm:py-24 border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
            alt="Abu Dhabi UAE Architecture"
            fill
            priority
            className="object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-900/60 z-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-400">
              <Building2 className="h-3.5 w-3.5" />
              <span>
                {isAr
                  ? 'مؤسسة عقارلاند للمقاولات العامة والنقل • أبوظبي'
                  : 'Aqarland Contracting & Transporting Est. • Abu Dhabi'}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              {UI_STRINGS.nav.aboutUs[lang]} - {COMPANY_DETAILS.brandNameEn}
            </h1>

            <p className="text-base sm:text-lg text-amber-400 font-medium">
              {COMPANY_DETAILS.tagline[lang]}
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {COMPANY_DETAILS.visionPhilosophy[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Verified Identity */}
      <section className="py-16 sm:py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>
                {isAr
                  ? 'تأسست عام 2000 في عاصمة دولة الإمارات العربية المتحدة'
                  : 'Established in 2000 in Abu Dhabi, United Arab Emirates'}
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-950 leading-tight">
              {isAr
                ? 'شريككم الموثوق في التشييد الهندسي وصيانة المرافق'
                : 'Your Reliable Partner in Engineering Construction & Facility Care'}
            </h2>

            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {isAr
                ? 'تأسست مؤسسة عقارلاند للمقاولات العامة والنقل (عقار لاند) في إمارة أبوظبي عام 2000، لتكون صرحاً وطنياً يسهم في مسيرة النهضة العمرانية لدولة الإمارات العربية المتحدة. نتخصص في تنفيذ مشاريع المقاولات العامة السكنية والتجارية والصناعية، إلى جانب تقديم خدمات صيانة المباني المتكاملة والاستشارات الهندسية المعتمدة.'
                : 'Established in 2000 in Abu Dhabi, Aqarland Contracting & Transporting Est. (Aqar Land) has served as a dedicated UAE contracting and maintenance establishment contributing to the nation’s architectural landscape. We specialize in residential, commercial, and industrial construction, integrated facility maintenance, and certified technical support services.'}
            </p>

            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {isAr
                ? 'نرتكز في كافة أعمالنا على معايير الجودة الصارمة، وبروتوكولات السلامة الخالية من الحوادث، واستخدام أحدث التقنيات الهندسية لضمان تسليم المشاريع بكفاءة ودقة متميزة تلبي تطلعات عملائنا وشركائنا.'
                : 'Our operations are anchored in rigorous quality control, zero-accident safety protocols, and modern construction engineering to ensure every project is executed on schedule, within budget, and to the highest standards of structural integrity.'}
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
                    <Compass className="h-4 w-4" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900">
                    {UI_STRINGS.missionVision.missionTitle[lang]}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {UI_STRINGS.missionVision.missionText[lang]}
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900">
                    {UI_STRINGS.missionVision.visionTitle[lang]}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {UI_STRINGS.missionVision.visionText[lang]}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-96 sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-xl bg-slate-900">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
              alt="Aqar Land Engineering Team"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 start-6 end-6 rounded-xl bg-slate-900/90 border border-slate-700 p-4 text-white backdrop-blur-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                {isAr ? 'الهوية والالتزام' : 'Identity & Commitment'}
              </span>
              <p className="text-sm font-semibold text-slate-100 mt-1">
                {COMPANY_DETAILS.tagline[lang]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
              {UI_STRINGS.missionVision.valuesTitle[lang]}
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              {UI_STRINGS.missionVision.valuesSub[lang]}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_DETAILS.values.map((val, idx) => {
              const IconComponent = valueIcons[val.icon] || ShieldCheck;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-6 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <h3 className="font-bold text-base text-white">
                      {lang === 'ar' ? val.titleAr : val.titleEn}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {lang === 'ar' ? val.descAr : val.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ready to collaborate CTA */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-950">
            {isAr
              ? 'جاهزون لمرافقتكم في بناء وصيانة مشاريعكم في دولة الإمارات'
              : "Ready to Partner on Your Next UAE Construction or Maintenance Project"}
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            {isAr
              ? 'تواصلوا مع مهندسينا في المقر الرئيسي بأبوظبي للحصول على استشارة فنية مخصصة ودراسة لمواصفات مشروعكم.'
              : 'Connect with our engineering specialists in Abu Dhabi for project consultations, technical evaluations, and custom RFP proposals.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              id="about-cta-contact-btn"
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-amber-500 transition-colors"
            >
              <span>{UI_STRINGS.nav.contactUs[lang]}</span>
              <ArrowIcon className="h-4 w-4" />
            </Link>
            <a
              href={COMPANY_DETAILS.contact.landlineTel}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <Phone className="h-4 w-4 text-amber-600" />
              <span dir="ltr">{COMPANY_DETAILS.contact.landlineFormatted}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
