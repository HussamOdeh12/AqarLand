'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { UI_STRINGS } from '@/lib/translations';
import { COMPANY_DETAILS } from '@/lib/company-data';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ShieldCheck, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const { lang, isAr } = useLanguage();

  const breadcrumbItems = [
    {
      labelEn: UI_STRINGS.footer.privacyNotice.en,
      labelAr: UI_STRINGS.footer.privacyNotice.ar,
      href: '/privacy-policy',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <Breadcrumbs items={breadcrumbItems} />

      <section className="bg-slate-950 text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400 mb-3">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>{isAr ? 'السياسات والشفافية' : 'Governance & Privacy'}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            {UI_STRINGS.footer.privacyNotice[lang]}
          </h1>
          <p className="mt-2 text-sm text-slate-300">
            {isAr
              ? 'التزام عقار لاند بحماية خصوصيتك ومعلوماتك الشخصية وفق القوانين المعمول بها في دولة الإمارات العربية المتحدة.'
              : "Aqar Land's Commitment to Your Privacy and Data Protection under UAE Regulations."}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-12 shadow-sm space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-2">
              {isAr ? '1. مقدمة' : '1. Introduction'}
            </h2>
            <p>
              {isAr
                ? 'تلتزم مؤسسة عقارلاند للمقاولات العامة والنقل (عقار لاند) بحماية خصوصية وأمان معلوماتكم الشخصية. يوضح إشعار الخصوصية هذا كيفية جمع واستخدام المعلومات الشخصية المتعلقة بكم خلال وبعد علاقتكم معنا، وفقاً لقوانين حماية البيانات المعمول بها في دولة الإمارات العربية المتحدة.'
                : 'Aqarland Contracting & Transporting Est. (Aqar Land) is committed to protecting the privacy and security of your personal information. This privacy notice describes how we collect and use personal information about you during and after your relationship with us, in accordance with applicable UAE privacy laws.'}
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-2">
              {isAr ? '2. المعلومات التي نجمعها' : '2. Information We Collect'}
            </h2>
            <p>
              {isAr
                ? 'نقوم بجمع ومعالجة المعلومات الشخصية التي تقدمونها طواعية، مثل اسمكم، وتفاصيل الاتصال (الهاتف، البريد الإلكتروني)، والمعلومات المتعلقة بطلبات عروض الأسعار أو الاستفسارات الهندسية. تعد هذه المعلومات ضرورية لتقديم خدمات المقاولات والصيانة والوفاء بالتزاماتنا التعاقدية.'
                : 'We collect and process personal information about you such as your name, contact details (phone, email), and information related to your contracting, engineering, or maintenance requests. This information is necessary for the provision of our services to you and to fulfill our contractual obligations.'}
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-2">
              {isAr ? '3. استخدام معلوماتكم' : '3. Use of Your Information'}
            </h2>
            <p>
              {isAr
                ? 'يتم استخدام معلوماتكم الشخصية لتقديم الخدمات المطلوبة، وإدارة العلاقة معكم، والتواصل بشأن الاستشارات الهندسية أو جداول الصيانة، والامتثال للمتطلبات القانونية والتنظيمية في الدولة.'
                : 'Your personal information will be used to provide the contracting and maintenance services requested, manage our client relationship with you, communicate regarding your projects or maintenance schedules, and comply with legal and regulatory requirements in the UAE.'}
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-2">
              {isAr ? '4. مشاركة المعلومات' : '4. Sharing of Your Information'}
            </h2>
            <p>
              {isAr
                ? 'لن نشارك معلوماتكم الشخصية مع أي أطراف ثالثة إلا وفق ما يقتضيه القانون، أو بناءً على موافقتكم الصريحة، أو لتسهيل التراخيص الرسمية لدى الدوائر البلدية والحكومية ذات الصلة بالمشروع.'
                : 'We will not share your personal information with third parties except as required by law, with your explicit consent, or to facilitate official municipality and regulatory permits directly required for your project.'}
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-2">
              {isAr ? '5. أمان البيانات' : '5. Data Security'}
            </h2>
            <p>
              {isAr
                ? 'لقد وضعنا تدابير أمنية تنظيمية وتقنية مناسبة لمنع فقدان معلوماتكم الشخصية عن طريق الخطأ، أو استخدامها أو الوصول إليها بطريقة غير مصرح بها.'
                : 'We have put in place appropriate security measures to prevent your personal information from being accidentally lost, used, or accessed in an unauthorized way.'}
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-2">
              {isAr ? '6. حقوقكم' : '6. Your Rights'}
            </h2>
            <p>
              {isAr
                ? 'يحق لكم طلب الوصول إلى بياناتكم الشخصية أو تصحيحها أو حذفها، كما يحق لكم الاستفسار حول كيفية معالجة بياناتكم.'
                : 'You have the right to request access to, correction of, or deletion of your personal data, or to request restriction of processing in accordance with relevant statutory standards.'}
            </p>
          </div>

          {/* Contact Box */}
          <div className="pt-4 border-t border-slate-200">
            <h2 className="font-serif text-xl font-bold text-slate-900 mb-2">
              {isAr ? '7. معلومات الاتصال' : '7. Contact Information'}
            </h2>
            <p className="mb-4">
              {isAr
                ? 'إذا كانت لديكم أي أسئلة حول إشعار الخصوصية هذا أو كيفية تعاملنا مع بياناتكم، يرجى التواصل معنا عبر البريد الإلكتروني الرسمي:'
                : 'If you have any questions regarding this privacy notice or how we handle your personal data, please contact us:'}
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
