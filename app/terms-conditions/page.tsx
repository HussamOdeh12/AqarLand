'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { UI_STRINGS } from '@/lib/translations';
import { COMPANY_DETAILS } from '@/lib/company-data';
import Breadcrumbs from '@/components/Breadcrumbs';
import { FileText, Mail } from 'lucide-react';

export default function TermsConditionsPage() {
  const { lang, isAr } = useLanguage();

  const breadcrumbItems = [
    {
      labelEn: UI_STRINGS.footer.conditionsOfUse.en,
      labelAr: UI_STRINGS.footer.conditionsOfUse.ar,
      href: '/terms-conditions',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <Breadcrumbs items={breadcrumbItems} />

      <section className="bg-slate-950 text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400 mb-3">
            <FileText className="h-3.5 w-3.5" />
            <span>{isAr ? 'شروط الاستخدام' : 'User Agreement'}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            {UI_STRINGS.footer.conditionsOfUse[lang]}
          </h1>
          <p className="mt-2 text-sm text-slate-300">
            {isAr
              ? 'الشروط والأحكام الخاصة باستخدام الموقع الإلكتروني والخدمات المقدمة من مؤسسة عقارلاند للمقاولات العامة والنقل.'
              : 'Terms and Conditions Governing the Use of the Website and Services of Aqar Land Contracting & Transporting Est.'}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-12 shadow-sm space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-2">
              {isAr ? '1. قبول الشروط' : '1. Acceptance of Terms'}
            </h2>
            <p>
              {isAr
                ? 'من خلال الوصول إلى الموقع الإلكتروني لمؤسسة عقارلاند واستخدامه، فإنكم توافقون وتلتزمون ببنود وأحكام هذه الاتفاقية. عند الاستفادة من خدمات معينة، تخضعون لأي إرشادات أو قواعد سارية منصوص عليها في العقود الموقعة.'
                : 'By accessing and using the website of Aqar Land, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using particular services, you shall be subject to any posted guidelines or rules applicable to such services.'}
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-2">
              {isAr ? '2. تقديم الخدمات' : '2. Provision of Services'}
            </h2>
            <p>
              {isAr
                ? 'تقرون وتوافقون على أن عقار لاند مخولة بتعديل أو تحسين أو إيقاف أي من خدماتها ومعلوماتها المعروضة وفقاً لتقديرها الخاص ودون إشعار مسبق.'
                : 'You agree and acknowledge that Aqar Land is entitled to modify, improve, or discontinue any of its services or informational content at its sole discretion and without prior notice.'}
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-2">
              {isAr ? '3. حقوق الملكية الفكرية' : '3. Proprietary Rights'}
            </h2>
            <p>
              {isAr
                ? 'تقرون وتوافقون على أن محتويات هذا الموقع، بما في ذلك العلامة التجارية "عقار لاند" (Aqar Land) والرسومات والنصوص والمخططات، محمية بموجب قوانين الملكية الفكرية في دولة الإمارات والمعاهدات الدولية.'
                : 'You acknowledge and agree that Aqar Land contains proprietary and confidential information including trademarks, service marks, designs, and content protected by intellectual property laws and international treaties.'}
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-2">
              {isAr ? '4. حدود المسؤولية' : '4. Limitation of Liability'}
            </h2>
            <p>
              {isAr
                ? 'تُقدم المعلومات الواردة في الموقع كمعلومات عامة عن خدمات المقاولات والصيانة. لا تتحمل المؤسسة بأي حال من الأحوال أي أضرار غير مباشرة أو تبعية ناتجة عن استخدام الموقع.'
                : 'The general contracting and maintenance information provided on this website is for corporate overview purposes. Formal engineering specifications and structural warranties are governed exclusively by executed client contracts.'}
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-2">
              {isAr ? '5. الاختصاص القضائي والقانون الحاكم' : '5. Jurisdiction & Governing Law'}
            </h2>
            <p>
              {isAr
                ? 'تخضع أي نزاعات تنشأ عن أو تتعلق بهذه الشروط والأحكام لقوانين دولة الإمارات العربية المتحدة المعمول بها في إمارة أبوظبي.'
                : 'Any disputes arising out of or related to these Terms and Conditions and/or any use by you of the Aqar Land website shall be governed by and construed in accordance with the federal laws of the United Arab Emirates and the local laws applicable in the Emirate of Abu Dhabi.'}
            </p>
          </div>

          {/* Contact Box */}
          <div className="pt-4 border-t border-slate-200">
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-2">
              {isAr ? '6. التواصل والاستفسار' : '6. Contact Information'}
            </h2>
            <p className="mb-4">
              {isAr
                ? 'لأي استفسارات أو مقترحات بخصوص شروط الاستخدام، يرجى التواصل معنا:'
                : 'If you have any questions or inquiries regarding our Conditions of Use, please contact us:'}
            </p>
            <div className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 font-semibold text-slate-900">
              <Mail className="h-4 w-4 text-amber-600" />
              <a href={COMPANY_DETAILS.contact.emailMailto} className="hover:text-amber-700">
                {COMPANY_DETAILS.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
