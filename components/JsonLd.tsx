import React from 'react';
import { COMPANY_DETAILS, STITCH_SERVICES } from '@/lib/company-data';

export default function JsonLd() {
  const schemaOrganization = {
    '@context': 'https://schema.org',
    '@type': ['GeneralContractor', 'Organization'],
    name: COMPANY_DETAILS.brandNameEn,
    alternateName: [COMPANY_DETAILS.brandNameAr, COMPANY_DETAILS.legalNameEn, COMPANY_DETAILS.legalNameAr],
    legalName: COMPANY_DETAILS.legalNameEn,
    url: 'https://aqarland.ae',
    logo: 'https://aqarland.ae/icons/icons_0/aqarland%20logo.ico',
    description:
      'Premier general contracting, building maintenance, and project execution services in Abu Dhabi and across the UAE.',
    telephone: '+971-2-6588909',
    email: COMPANY_DETAILS.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: COMPANY_DETAILS.headquarters.cityEn,
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_DETAILS.headquarters.coordinates.lat,
      longitude: COMPANY_DETAILS.headquarters.coordinates.lng,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+971-50-4754070',
        contactType: 'customer service',
        areaServed: 'AE',
        availableLanguage: ['en', 'ar'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+971-2-6588909',
        contactType: 'customer service',
        areaServed: 'AE',
        availableLanguage: ['en', 'ar'],
      },
    ],
    sameAs: [
      COMPANY_DETAILS.social.facebook,
      COMPANY_DETAILS.social.instagram,
      COMPANY_DETAILS.social.twitter,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Aqar Land Engineering & Contracting Services',
      itemListElement: STITCH_SERVICES.map((cat) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: cat.titleEn,
          description: cat.shortDescEn,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
    />
  );
}
