import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/language-context';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Aqar Land | Contracting & Maintenance in UAE',
  description:
    "Premier general contracting, building maintenance, and support services in Abu Dhabi and across the UAE. Constructing tomorrow's landmarks with Emirati pride.",
  keywords: [
    'Aqar Land',
    'عقار لاند',
    'General Contracting Abu Dhabi',
    'Building Maintenance UAE',
    'Residential Building Construction',
    'Commercial Building Construction',
    'Industrial Construction UAE',
    'Emergency Building Maintenance 24/7',
    'Annual Maintenance Contracts Abu Dhabi',
    'Compliance and Safety Audits UAE',
  ],
  authors: [{ name: 'Aqarland Contracting & Transporting Est.' }],
  creator: 'Aqarland Contracting & Transporting Est.',
  metadataBase: new URL('https://aqarland.ae'),
  alternates: {
    canonical: '/',
    languages: {
      'en-AE': '/',
      'ar-AE': '/?lang=ar',
    },
  },
  openGraph: {
    title: 'Aqar Land | Contracting & Maintenance in UAE',
    description:
      "Premier general contracting, building maintenance, and support services in Abu Dhabi and across the UAE. Constructing tomorrow's landmarks with Emirati pride.",
    url: 'https://aqarland.ae',
    siteName: 'Aqar Land',
    locale: 'en_AE',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Aqar Land Contracting & Maintenance Services UAE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aqar Land | Contracting & Maintenance in UAE',
    description:
      "Premier general contracting, building maintenance, and support services in Abu Dhabi and across the UAE. Constructing tomorrow's landmarks with Emirati pride.",
    site: '@AqarLand195',
    creator: '@AqarLand195',
    images: [
      'https://images.unsplash.com/photo-1541971875076-8f970d573be6?q=80&w=1200&auto=format&fit=crop',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0b1120',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-slate-950 font-sans" suppressHydrationWarning>
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
