'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { UI_STRINGS } from '@/lib/translations';
import { COMPANY_DETAILS, STITCH_SERVICES } from '@/lib/company-data';
import { Check, ArrowRight, ArrowLeft, Mail, Phone, MessageSquare, Loader2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const { lang, isAr } = useLanguage();
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    discipline: 'general-contracting',
    message: '',
    botField: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const selectedService = STITCH_SERVICES.find((s) => s.slug === formData.discipline) || STITCH_SERVICES[0];

  const emailSubject = `Inquiry: ${selectedService.titleEn} - ${formData.name || 'Client'}`;
  const emailBody = `Name: ${formData.name}\nCompany: ${formData.company || 'N/A'}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nDiscipline: ${selectedService.titleEn} (${selectedService.number})\n\nProject Specifications / Message:\n${formData.message}`;

  const mailtoLink = `mailto:${COMPANY_DETAILS.contact.email}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Client-side quick checks
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage(
        isAr
          ? 'يرجى ملء جميع الحقول المطلوبة (الاسم، البريد الإلكتروني، وتفاصيل المشروع).'
          : 'Please fill in all required fields (Name, Email, and Project Details).'
      );
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('error');
      setErrorMessage(
        isAr ? 'يرجى إدخال عنوان بريد إلكتروني صحيح.' : 'Please enter a valid email address.'
      );
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          company: formData.company.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: formData.discipline,
          message: formData.message.trim(),
          botField: formData.botField,
          lang,
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setStatus('success');
        // Clear form only on confirmed success
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          discipline: 'general-contracting',
          message: '',
          botField: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(
          data?.message || UI_STRINGS.contact.errorMsg[lang]
        );
      }
    } catch {
      setStatus('error');
      setErrorMessage(UI_STRINGS.contact.errorMsg[lang]);
    }
  };

  return (
    <div className="border border-[#E2DED6] dark:border-[#2C2F33] bg-[#EFECE6]/40 dark:bg-[#2C2F33]/20 p-8 sm:p-10">
      <div className="mb-8 border-b border-[#E2DED6] dark:border-[#2C2F33] pb-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#C85A32] block mb-2">
          {isAr ? 'نموذج الاستشارة والمشاريع' : 'DIRECT SPECIFICATION FORM'}
        </span>
        <h3 className="text-2xl font-serif font-normal text-[#181A1B] dark:text-[#F7F5F0]">
          {UI_STRINGS.contact.formTitle[lang]}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-[#2C2F33]/80 dark:text-[#E2DED6]/80 font-sans">
          {isAr
            ? 'أدخل تفاصيل مشروعك للتواصل المباشر مع فريقنا الهندسي في أبوظبي.'
            : 'Enter your project specifications for direct communication with our Abu Dhabi engineering team.'}
        </p>
      </div>

      {status === 'success' ? (
        <div className="border border-[#C85A32] bg-[#F7F5F0] dark:bg-[#181A1B] p-8 text-center space-y-6">
          <div className="h-12 w-12 bg-[#C85A32] text-white flex items-center justify-center mx-auto">
            <Check className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <h4 className="font-serif text-2xl text-[#181A1B] dark:text-[#F7F5F0]">
              {isAr ? 'تم إرسال الاستفسار بنجاح' : 'Inquiry Sent Successfully'}
            </h4>
            <p className="text-sm text-[#2C2F33]/80 dark:text-[#E2DED6]/80 max-w-md mx-auto leading-relaxed">
              {UI_STRINGS.contact.successMsg[lang]}
            </p>
          </div>

          <div className="pt-2 border-t border-[#E2DED6] dark:border-[#2C2F33]">
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="inline-flex items-center gap-2 border border-[#E2DED6] dark:border-[#2C2F33] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#181A1B] dark:text-[#F7F5F0] hover:border-[#C85A32] hover:text-[#C85A32] transition-colors"
            >
              <span>{isAr ? 'إرسال استفسار آخر' : 'Send Another Inquiry'}</span>
              <ArrowIcon className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Honeypot hidden input */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="contact-botField">Do not fill this field</label>
            <input
              id="contact-botField"
              name="botField"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formData.botField}
              onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
            />
          </div>

          {status === 'error' && (
            <div
              role="alert"
              aria-live="polite"
              className="border border-red-500/50 bg-red-500/10 p-4 text-xs text-red-600 dark:text-red-400 font-medium space-y-3"
            >
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>

              {/* Direct fallback contacts if delivery is interrupted */}
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-red-500/20 text-xs">
                <span className="font-bold text-[#181A1B] dark:text-[#F7F5F0]">
                  {isAr ? 'قنوات الاتصال المباشرة:' : 'Direct channels:'}
                </span>
                <a
                  href={mailtoLink}
                  className="inline-flex items-center gap-1 underline underline-offset-2 hover:text-[#C85A32]"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>{COMPANY_DETAILS.contact.email}</span>
                </a>
                <a
                  href={COMPANY_DETAILS.contact.landlineTel}
                  className="inline-flex items-center gap-1 underline underline-offset-2 hover:text-[#C85A32]"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span dir="ltr">{COMPANY_DETAILS.contact.landlineFormatted}</span>
                </a>
                <a
                  href={COMPANY_DETAILS.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 underline underline-offset-2 hover:text-[#C85A32]"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="contact-name"
                className="block text-xs font-semibold uppercase tracking-wider text-[#2C2F33] dark:text-[#E2DED6]"
              >
                {UI_STRINGS.contact.nameField[lang]}
              </label>
              <input
                id="contact-name"
                type="text"
                required
                aria-required="true"
                disabled={status === 'submitting'}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-[#E2DED6] dark:border-[#2C2F33] bg-[#F7F5F0] dark:bg-[#181A1B] px-4 py-3 text-sm text-[#181A1B] dark:text-[#F7F5F0] focus:border-[#C85A32] focus:outline-none transition-colors disabled:opacity-60"
                placeholder={isAr ? 'الاسم الكريم' : 'e.g. Tariq Al-Nuaimi'}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-company"
                className="block text-xs font-semibold uppercase tracking-wider text-[#2C2F33] dark:text-[#E2DED6]"
              >
                {UI_STRINGS.contact.companyField[lang]}
              </label>
              <input
                id="contact-company"
                type="text"
                disabled={status === 'submitting'}
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full border border-[#E2DED6] dark:border-[#2C2F33] bg-[#F7F5F0] dark:bg-[#181A1B] px-4 py-3 text-sm text-[#181A1B] dark:text-[#F7F5F0] focus:border-[#C85A32] focus:outline-none transition-colors disabled:opacity-60"
                placeholder={isAr ? 'اسم المؤسسة أو العقار (اختياري)' : 'Company or Property (Optional)'}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="contact-email"
                className="block text-xs font-semibold uppercase tracking-wider text-[#2C2F33] dark:text-[#E2DED6]"
              >
                {UI_STRINGS.contact.emailField[lang]}
              </label>
              <input
                id="contact-email"
                type="email"
                required
                aria-required="true"
                disabled={status === 'submitting'}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-[#E2DED6] dark:border-[#2C2F33] bg-[#F7F5F0] dark:bg-[#181A1B] px-4 py-3 text-sm text-[#181A1B] dark:text-[#F7F5F0] focus:border-[#C85A32] focus:outline-none transition-colors disabled:opacity-60"
                placeholder="name@domain.ae"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-phone"
                className="block text-xs font-semibold uppercase tracking-wider text-[#2C2F33] dark:text-[#E2DED6]"
              >
                {UI_STRINGS.contact.phoneField[lang]}
              </label>
              <input
                id="contact-phone"
                type="tel"
                disabled={status === 'submitting'}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full border border-[#E2DED6] dark:border-[#2C2F33] bg-[#F7F5F0] dark:bg-[#181A1B] px-4 py-3 text-sm text-[#181A1B] dark:text-[#F7F5F0] focus:border-[#C85A32] focus:outline-none transition-colors disabled:opacity-60"
                placeholder="+971 50 000 0000"
                dir="ltr"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="contact-discipline"
              className="block text-xs font-semibold uppercase tracking-wider text-[#2C2F33] dark:text-[#E2DED6]"
            >
              {UI_STRINGS.contact.serviceField[lang]}
            </label>
            <select
              id="contact-discipline"
              disabled={status === 'submitting'}
              value={formData.discipline}
              onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
              className="w-full border border-[#E2DED6] dark:border-[#2C2F33] bg-[#F7F5F0] dark:bg-[#181A1B] px-4 py-3 text-sm text-[#181A1B] dark:text-[#F7F5F0] focus:border-[#C85A32] focus:outline-none transition-colors disabled:opacity-60"
            >
              {STITCH_SERVICES.map((s) => (
                <option key={s.id} value={s.slug}>
                  {s.number} - {isAr ? s.titleAr : s.titleEn}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="contact-message"
              className="block text-xs font-semibold uppercase tracking-wider text-[#2C2F33] dark:text-[#E2DED6]"
            >
              {UI_STRINGS.contact.messageField[lang]}
            </label>
            <textarea
              id="contact-message"
              rows={4}
              required
              aria-required="true"
              disabled={status === 'submitting'}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full border border-[#E2DED6] dark:border-[#2C2F33] bg-[#F7F5F0] dark:bg-[#181A1B] px-4 py-3 text-sm text-[#181A1B] dark:text-[#F7F5F0] focus:border-[#C85A32] focus:outline-none transition-colors resize-none disabled:opacity-60"
              placeholder={
                isAr
                  ? 'يرجى تقديم تفاصيل المشروع، نطاق العمل المطلوب، أو استفسارات الصيانة والتنفيذ...'
                  : 'Please outline project scope, location, required disciplines, or specific engineering requirements...'
              }
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C85A32] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white hover:bg-[#B84D28] transition-colors disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-[#C85A32] focus-visible:outline-offset-2"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>{UI_STRINGS.contact.submitting[lang]}</span>
                </>
              ) : (
                <>
                  <span>{UI_STRINGS.contact.submitBtn[lang]}</span>
                  <ArrowIcon className="h-4 w-4" />
                </>
              )}
            </button>

            {/* Direct fallback links */}
            <div className="flex items-center gap-4 text-xs text-[#2C2F33]/70 dark:text-[#E2DED6]/70">
              <span>{isAr ? 'أو عبر المراسلة المباشرة:' : 'Or reach us via:'}</span>
              <a
                href={COMPANY_DETAILS.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C85A32] font-semibold flex items-center gap-1"
                aria-label="WhatsApp"
              >
                <MessageSquare className="h-3.5 w-3.5 text-[#C85A32]" />
                <span>WhatsApp</span>
              </a>
              <a
                href={COMPANY_DETAILS.contact.landlineTel}
                className="hover:text-[#C85A32] font-semibold flex items-center gap-1"
                aria-label="Phone"
              >
                <Phone className="h-3.5 w-3.5 text-[#C85A32]" />
                <span dir="ltr">{COMPANY_DETAILS.contact.landlineFormatted}</span>
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
