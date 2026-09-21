'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { UI_STRINGS } from '@/lib/translations';
import { COMPANY_DETAILS, SERVICE_CATEGORIES } from '@/lib/company-data';
import { Send, CheckCircle2, AlertCircle, Phone, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const { lang, isAr } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    division: 'general-contracting',
    enquiry: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.enquiry.trim()) {
      setStatus('error');
      setErrorMessage(
        isAr
          ? 'يرجى ملء جميع الحقول الإلزامية (الاسم، البريد الإلكتروني، وتفاصيل الاستفسار).'
          : 'Please fill in all required fields (Name, Email, and Enquiry).'
      );
      return;
    }

    // Basic email format check
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('error');
      setErrorMessage(
        isAr
          ? 'يرجى إدخال عنوان بريد إلكتروني صحيح.'
          : 'Please enter a valid email address.'
      );
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        division: 'general-contracting',
        enquiry: '',
      });
    }, 600);
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
      <div className="mb-6 border-b border-slate-100 pb-4">
        <h3 className="text-xl font-bold text-slate-900 font-serif">
          {UI_STRINGS.contact.formTitle[lang]}
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          {isAr
            ? 'أرسل تفاصيل مشروعك أو استفسارك مباشرة إلى فريقنا في أبوظبي.'
            : 'Submit your project details or enquiry directly to our Abu Dhabi engineering team.'}
        </p>
      </div>

      {status === 'success' ? (
        <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-6 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600 mb-3" />
          <h4 className="text-lg font-bold text-emerald-900">
            {isAr ? 'تم استلام استفساركم بنجاح' : 'Enquiry Received Successfully'}
          </h4>
          <p className="mt-2 text-sm text-emerald-700">
            {UI_STRINGS.quoteTool.successMsg[lang]}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              id="contact-form-reset-btn"
              type="button"
              onClick={() => setStatus('idle')}
              className="rounded-md border border-emerald-300 bg-white px-4 py-2 text-xs font-semibold text-emerald-800 hover:bg-emerald-50 transition-colors"
            >
              {isAr ? 'إرسال استفسار آخر' : 'Submit Another Message'}
            </button>
            <a
              id="contact-whatsapp-btn"
              href={COMPANY_DETAILS.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700 transition-colors"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>{UI_STRINGS.quoteTool.directWhatsapp[lang]}</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {status === 'error' && (
            <div className="flex items-center gap-2 rounded-md bg-rose-50 border border-rose-200 p-3 text-sm text-rose-700">
              <AlertCircle className="h-4 w-4 shrink-0 text-rose-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
              >
                {UI_STRINGS.contact.nameField[lang]}
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={isAr ? 'مثال: محمد الشامسي' : 'e.g. John Doe / Gulf Trading LLC'}
                className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
              >
                {UI_STRINGS.contact.emailField[lang]}
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@company.ae"
                className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-phone"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
              >
                {UI_STRINGS.contact.phoneField[lang]}
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+971 50 000 0000"
                dir="ltr"
                className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 focus:outline-none text-start"
              />
            </div>

            <div>
              <label
                htmlFor="contact-division"
                className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
              >
                {UI_STRINGS.quoteTool.divisionLabel[lang]}
              </label>
              <select
                id="contact-division"
                value={formData.division}
                onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 focus:outline-none bg-white"
              >
                {SERVICE_CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {lang === 'ar' ? cat.titleAr : cat.titleEn}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-enquiry"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1"
            >
              {UI_STRINGS.contact.enquiryField[lang]}
            </label>
            <textarea
              id="contact-enquiry"
              required
              rows={4}
              value={formData.enquiry}
              onChange={(e) => setFormData({ ...formData, enquiry: e.target.value })}
              placeholder={
                isAr
                  ? 'يرجى كتابة تفاصيل مشروعك أو موقع العقار ونطاق الأعمال المطلوبة...'
                  : 'Please specify your project scope, location, or facility maintenance requirements...'
              }
              className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 focus:outline-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <button
              id="contact-form-submit-btn"
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-amber-600 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm hover:bg-amber-500 focus:outline-none transition-colors disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
              <span>
                {status === 'submitting'
                  ? UI_STRINGS.quoteTool.submitting[lang]
                  : UI_STRINGS.contact.submit[lang]}
              </span>
            </button>

            <span className="text-xs text-slate-500 text-center sm:text-end">
              {UI_STRINGS.contact.disclaimer[lang]}
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
