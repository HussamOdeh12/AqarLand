'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { ChevronRight, ChevronLeft, Home } from 'lucide-react';

export interface BreadcrumbItem {
  labelEn: string;
  labelAr: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const { lang, isAr } = useLanguage();
  const ChevronIcon = isAr ? ChevronLeft : ChevronRight;

  const breadcrumbListSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://aqarland.ae',
      },
      ...items.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 2,
        name: item.labelEn,
        item: item.href ? `https://aqarland.ae${item.href}` : undefined,
      })),
    ],
  };

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 bg-slate-50/70 text-xs">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
      />
      <div className="mx-auto max-w-7xl flex items-center gap-1.5 text-slate-500 overflow-x-auto whitespace-nowrap">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-slate-600 hover:text-amber-700 transition-colors"
        >
          <Home className="h-3.5 w-3.5" />
          <span>{lang === 'ar' ? 'الرئيسية' : 'Home'}</span>
        </Link>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              <ChevronIcon className="h-3 w-3 text-slate-400 shrink-0" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-slate-600 hover:text-amber-700 transition-colors"
                >
                  {lang === 'ar' ? item.labelAr : item.labelEn}
                </Link>
              ) : (
                <span className="font-semibold text-slate-900" aria-current="page">
                  {lang === 'ar' ? item.labelAr : item.labelEn}
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
