import React from 'react';
import { COMPANY_DETAILS, SERVICE_CATEGORIES } from '@/lib/company-data';

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
      'Premier general contracting, building maintenance, and support services in Abu Dhabi and across the UAE. Constructing tomorrow’s landmarks with Emirati pride.',
    foundingDate: '2000',
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
        contactType: 'emergency',
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
      itemListElement: SERVICE_CATEGORIES.map((cat) => ({
        '@type': 'OfferCatalog',
        name: cat.titleEn,
        itemListElement: cat.services.map((srv) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: srv.titleEn,
            description: srv.shortDescEn,
          },
        })),
      })),
    },
  };

  const schemaWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Aqar Land - Contracting & Maintenance Services UAE',
    url: 'https://aqarland.ae',
    inLanguage: ['en', 'ar'],
    publisher: {
      '@type': 'Organization',
      name: COMPANY_DETAILS.brandNameEn,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }}
      />
    </>
  );
}
