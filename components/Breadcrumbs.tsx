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
    <nav aria-label="Breadcrumb" className="py-3 px-6 lg:px-12 border-b border-[#E2DED6] dark:border-[#2C2F33] bg-[#EFECE6]/50 dark:bg-[#181A1B] text-xs">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbListSchema) }}
      />
      <div className="mx-auto max-w-7xl flex items-center gap-2 text-[#3B3E42] dark:text-[#DCD8CF] overflow-x-auto whitespace-nowrap font-sans font-medium">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 hover:text-[#A8421D] dark:hover:text-[#E2774E] transition-colors"
        >
          <Home className="h-3.5 w-3.5" />
          <span>{lang === 'ar' ? 'الرئيسية' : 'Home'}</span>
        </Link>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              <ChevronIcon className="h-3 w-3 text-[#3B3E42] dark:text-[#DCD8CF] shrink-0" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-[#A8421D] dark:hover:text-[#E2774E] transition-colors"
                >
                  {isAr ? item.labelAr : item.labelEn}
                </Link>
              ) : (
                <span className="text-[#181A1B] dark:text-[#F7F5F0] font-semibold">
                  {isAr ? item.labelAr : item.labelEn}
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
