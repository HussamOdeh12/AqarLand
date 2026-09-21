'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { UI_STRINGS } from '@/lib/translations';
import { COMPANY_DETAILS, STITCH_SERVICES } from '@/lib/company-data';
import { Check, ArrowRight, ArrowLeft, Mail, Phone, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  const { lang, isAr } = useLanguage();
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    discipline: 'general-contracting',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'prepared' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const selectedService = STITCH_SERVICES.find((s) => s.slug === formData.discipline) || STITCH_SERVICES[0];

  const emailSubject = `Inquiry: ${selectedService.titleEn} - ${formData.name || 'Client'}`;
  const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nDiscipline: ${selectedService.titleEn} (${selectedService.number})\n\nProject Specifications / Message:\n${formData.message}`;

  const mailtoLink = `mailto:${COMPANY_DETAILS.contact.email}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

    setStatus('prepared');
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

      {status === 'prepared' ? (
        <div className="border border-[#C85A32] bg-[#F7F5F0] dark:bg-[#181A1B] p-8 text-center space-y-6">
          <div className="h-10 w-10 bg-[#C85A32] text-white flex items-center justify-center mx-auto">
            <Check className="h-5 w-5" />
          </div>
          <div className="space-y-2">
            <h4 className="font-serif text-xl text-[#181A1B] dark:text-[#F7F5F0]">
              {isAr ? 'تم تجهيز تفاصيل الاستفسار' : 'Inquiry Details Prepared'}
            </h4>
            <p className="text-xs sm:text-sm text-[#2C2F33]/80 dark:text-[#E2DED6]/80 max-w-md mx-auto leading-relaxed">
              {isAr
                ? 'يمكنك إرسال الاستفسار مباشرة عبر بريدك الإلكتروني المعتمد أو التواصل فوراً مع مكتبنا في أبوظبي.'
                : 'You can dispatch this inquiry directly via your email client or contact our Abu Dhabi office immediately.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={mailtoLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C85A32] px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white hover:bg-[#B84D28] transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>{isAr ? 'فتح في تطبيق البريد' : 'Open in Email Client'}</span>
            </a>
            <a
              href={COMPANY_DETAILS.contact.landlineTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#E2DED6] dark:border-[#2C2F33] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#181A1B] dark:text-[#F7F5F0] hover:border-[#C85A32] transition-colors"
            >
              <Phone className="h-4 w-4 text-[#C85A32]" />
              <span>{isAr ? 'اتصال بالمكتب' : 'Call Office'}</span>
            </a>
            <a
              href={COMPANY_DETAILS.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#E2DED6] dark:border-[#2C2F33] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#181A1B] dark:text-[#F7F5F0] hover:border-[#C85A32] transition-colors"
            >
              <MessageSquare className="h-4 w-4 text-[#C85A32]" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="pt-2 border-t border-[#E2DED6] dark:border-[#2C2F33]">
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="text-xs text-[#2C2F33]/70 dark:text-[#E2DED6]/70 hover:text-[#C85A32] underline underline-offset-4 transition-colors"
            >
              {isAr ? 'تعديل البيانات المدخلة' : 'Edit Inquiry Details'}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {status === 'error' && (
            <div
              role="alert"
              aria-live="polite"
              className="border border-red-500/50 bg-red-500/10 p-4 text-xs text-red-600 dark:text-red-400 font-medium"
            >
              {errorMessage}
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
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-[#E2DED6] dark:border-[#2C2F33] bg-[#F7F5F0] dark:bg-[#181A1B] px-4 py-3 text-sm text-[#181A1B] dark:text-[#F7F5F0] focus:border-[#C85A32] focus:outline-none transition-colors"
                placeholder={isAr ? 'الاسم أو اسم المؤسسة' : 'e.g. Tariq Al-Nuaimi'}
              />
            </div>

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
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-[#E2DED6] dark:border-[#2C2F33] bg-[#F7F5F0] dark:bg-[#181A1B] px-4 py-3 text-sm text-[#181A1B] dark:text-[#F7F5F0] focus:border-[#C85A32] focus:outline-none transition-colors"
                placeholder="name@domain.ae"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full border border-[#E2DED6] dark:border-[#2C2F33] bg-[#F7F5F0] dark:bg-[#181A1B] px-4 py-3 text-sm text-[#181A1B] dark:text-[#F7F5F0] focus:border-[#C85A32] focus:outline-none transition-colors"
                placeholder="+971 50 000 0000"
                dir="ltr"
              />
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
                value={formData.discipline}
                onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                className="w-full border border-[#E2DED6] dark:border-[#2C2F33] bg-[#F7F5F0] dark:bg-[#181A1B] px-4 py-3 text-sm text-[#181A1B] dark:text-[#F7F5F0] focus:border-[#C85A32] focus:outline-none transition-colors"
              >
                {STITCH_SERVICES.map((s) => (
                  <option key={s.id} value={s.slug}>
                    {s.number} - {isAr ? s.titleAr : s.titleEn}
                  </option>
                ))}
              </select>
            </div>
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
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full border border-[#E2DED6] dark:border-[#2C2F33] bg-[#F7F5F0] dark:bg-[#181A1B] px-4 py-3 text-sm text-[#181A1B] dark:text-[#F7F5F0] focus:border-[#C85A32] focus:outline-none transition-colors resize-none"
              placeholder={
                isAr
                  ? 'يرجى تقديم تفاصيل المشروع، الموقع، ونطاق العمل المطلوب...'
                  : 'Please provide project requirements, location, and desired timeline...'
              }
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C85A32] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white hover:bg-[#B84D28] transition-colors"
          >
            <span>{UI_STRINGS.contact.submitBtn[lang]}</span>
            <ArrowIcon className="h-4 w-4" />
          </button>
        </form>
      )}
    </div>
  );
}
