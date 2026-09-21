'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { UI_STRINGS } from '@/lib/translations';
import { COMPANY_DETAILS, SERVICE_CATEGORIES } from '@/lib/company-data';
import { Calculator, CheckCircle2, MessageSquare, Send, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

export default function QuoteCalculator() {
  const { lang, isAr } = useLanguage();
  const [selectedDivision, setSelectedDivision] = useState(SERVICE_CATEGORIES[0].id);
  const [selectedService, setSelectedService] = useState(SERVICE_CATEGORIES[0].services[0].id);
  const [emirate, setEmirate] = useState('Abu Dhabi');
  const [projectScale, setProjectScale] = useState('Medium Scale');
  const [submitted, setSubmitted] = useState(false);
  const [contactInfo, setContactInfo] = useState({ name: '', phone: '', email: '' });

  const activeCategory = SERVICE_CATEGORIES.find((c) => c.id === selectedDivision) || SERVICE_CATEGORIES[0];
  const activeService = activeCategory.services.find((s) => s.id === selectedService) || activeCategory.services[0];

  const handleDivisionChange = (divisionId: string) => {
    setSelectedDivision(divisionId);
    const cat = SERVICE_CATEGORIES.find((c) => c.id === divisionId);
    if (cat && cat.services.length > 0) {
      setSelectedService(cat.services[0].id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const whatsappMessage = encodeURIComponent(
    `Hello Aqar Land Team,\n\nI would like an RFP/consultation for:\nDivision: ${activeCategory.titleEn}\nService: ${activeService.titleEn}\nLocation: ${emirate}\nScale: ${projectScale}\nName: ${contactInfo.name || 'Prospective Client'}\nPhone: ${contactInfo.phone || 'N/A'}`
  );

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-900 text-white p-6 sm:p-10 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400 border border-amber-500/20 mb-3">
            <Calculator className="h-3.5 w-3.5" />
            <span>{isAr ? 'حاسبة التخطيط الهندسي والتسعير' : 'Engineering Planning & RFP Estimator'}</span>
          </div>
          <h3 className="text-2xl font-bold font-serif text-white tracking-tight">
            {UI_STRINGS.quoteTool.title[lang]}
          </h3>
          <p className="mt-1 text-sm text-slate-400 max-w-2xl">
            {UI_STRINGS.quoteTool.desc[lang]}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            id="quote-direct-call-btn"
            href={COMPANY_DETAILS.contact.landlineTel}
            className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/80 px-3.5 py-2 text-xs font-medium text-slate-300 hover:border-amber-500/50 hover:text-white transition-colors"
          >
            <span>{isAr ? 'اتصال مباشر:' : 'Direct Call:'}</span>
            <span dir="ltr" className="font-bold text-amber-400">
              {COMPANY_DETAILS.contact.landlineFormatted}
            </span>
          </a>
        </div>
      </div>

      {submitted ? (
        <div className="rounded-xl bg-slate-800/90 border border-amber-500/30 p-8 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-amber-400 mb-4" />
          <h4 className="text-xl font-bold text-white mb-2">
            {isAr ? 'تم تسجيل متطلبات مشروعكم بنجاح' : 'Consultation Request Prepared'}
          </h4>
          <p className="text-sm text-slate-300 max-w-lg mx-auto mb-6">
            {isAr
              ? `تم حفظ استفسارك لخدمة (${lang === 'ar' ? activeService.titleAr : activeService.titleEn}) في ${emirate}. بإمكانك إرسالها فوراً لمهندسينا في أبوظبي أو المحادثة المباشرة عبر واتساب.`
              : `Your inquiry for (${activeService.titleEn}) in ${emirate} has been configured. You can dispatch directly to our Abu Dhabi engineering team or connect instantly on WhatsApp.`}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              id="quote-send-whatsapp-btn"
              href={`https://wa.me/971504754070?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              <span>{UI_STRINGS.quoteTool.directWhatsapp[lang]}</span>
            </a>

            <button
              id="quote-reset-btn"
              type="button"
              onClick={() => setSubmitted(false)}
              className="rounded-lg border border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-700 transition-colors"
            >
              {isAr ? 'تعديل المعايير' : 'Modify Parameters'}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Division Selector */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              {UI_STRINGS.quoteTool.divisionLabel[lang]}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {SERVICE_CATEGORIES.map((cat) => {
                const isSelected = cat.id === selectedDivision;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleDivisionChange(cat.id)}
                    className={`flex flex-col items-start p-4 rounded-xl border text-start transition-all ${
                      isSelected
                        ? 'border-amber-500 bg-amber-500/10 text-white'
                        : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-sm font-bold text-white">
                      {lang === 'ar' ? cat.titleAr : cat.titleEn}
                    </span>
                    <span className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {lang === 'ar' ? cat.subtitleAr : cat.subtitleEn}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sub-Service Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              {UI_STRINGS.quoteTool.serviceLabel[lang]}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {activeCategory.services.map((srv) => {
                const isSelected = srv.id === selectedService;
                return (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setSelectedService(srv.id)}
                    className={`p-3 rounded-lg border text-start text-xs font-medium transition-all ${
                      isSelected
                        ? 'border-amber-400 bg-slate-800 text-amber-300 font-semibold'
                        : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                    }`}
                  >
                    {lang === 'ar' ? srv.titleAr : srv.titleEn}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Location & Scale */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="quote-emirate"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1"
              >
                {UI_STRINGS.quoteTool.locationLabel[lang]}
              </label>
              <select
                id="quote-emirate"
                value={emirate}
                onChange={(e) => setEmirate(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none"
              >
                <option value="Abu Dhabi">Abu Dhabi (أبوظبي - المقر الرئيسي)</option>
                <option value="Dubai">Dubai (دبي)</option>
                <option value="Al Ain">Al Ain (العين)</option>
                <option value="Sharjah">Sharjah (الشارقة)</option>
                <option value="Other UAE Emirates">Other UAE Emirates (بقية الإمارات)</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="quote-scale"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1"
              >
                {isAr ? 'حجم ونطاق المشروع' : 'Project Scope & Scale'}
              </label>
              <select
                id="quote-scale"
                value={projectScale}
                onChange={(e) => setProjectScale(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none"
              >
                <option value="Single Property / Villa">
                  {isAr ? 'عقار فردي / فيلا خاصة' : 'Single Property / Private Villa'}
                </option>
                <option value="Commercial Facility / Tower">
                  {isAr ? 'منشأة تجارية / برج مكاتب' : 'Commercial Facility / Office Tower'}
                </option>
                <option value="Industrial Plant / Warehouse">
                  {isAr ? 'مستودع لوجستي / مجمع صناعي' : 'Industrial Plant / Warehouse'}
                </option>
                <option value="Annual Maintenance Contract (AMC)">
                  {isAr ? 'عقد صيانة دوري سنوي شامل' : 'Annual Maintenance Contract (AMC)'}
                </option>
              </select>
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div>
              <label
                htmlFor="quote-name"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1"
              >
                {UI_STRINGS.quoteTool.nameLabel[lang]} *
              </label>
              <input
                id="quote-name"
                type="text"
                required
                value={contactInfo.name}
                onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                placeholder={isAr ? 'الاسم أو الشركة' : 'Your name or organization'}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="quote-phone"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1"
              >
                {UI_STRINGS.quoteTool.phoneLabel[lang]} *
              </label>
              <input
                id="quote-phone"
                type="tel"
                required
                value={contactInfo.phone}
                onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                placeholder="050 000 0000"
                dir="ltr"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-sm text-white focus:border-amber-500 focus:outline-none text-start"
              />
            </div>

            <div>
              <label
                htmlFor="quote-email"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1"
              >
                {UI_STRINGS.quoteTool.emailLabel[lang]}
              </label>
              <input
                id="quote-email"
                type="email"
                value={contactInfo.email}
                onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                placeholder="info@yourcompany.ae"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <button
              id="quote-submit-btn"
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-amber-600 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-amber-500 transition-colors shadow-md"
            >
              <span>{UI_STRINGS.quoteTool.submitBtn[lang]}</span>
              <ArrowIcon className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>
                {isAr
                  ? 'يتم الرد والتنسيق المباشر عبر مهندسينا في أبوظبي'
                  : 'Reviewed directly by certified Aqar Land engineers in Abu Dhabi'}
              </span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
