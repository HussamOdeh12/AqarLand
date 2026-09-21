import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans, Noto_Sans_Arabic } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/language-context';
import { ThemeProvider } from '@/lib/theme-context';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Aqar Land | General Contracting, Maintenance & Support Services UAE',
  description:
    "Aqar Land: Premier general contracting, building maintenance, and support services in Abu Dhabi and across the UAE. Architectural precision and enduring execution.",
  keywords: [
    'Aqar Land',
    'عقار لاند',
    'General Contracting Abu Dhabi',
    'Building Maintenance UAE',
    'Project Execution UAE',
    'Design and Structural Analysis',
    'Project Management Abu Dhabi',
    'Support Services UAE',
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
    title: 'Aqar Land | General Contracting, Maintenance & Support Services UAE',
    description:
      "Aqar Land: Premier general contracting, building maintenance, and support services in Abu Dhabi and across the UAE. Architectural precision and enduring execution.",
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
    title: 'Aqar Land | General Contracting, Maintenance & Support Services UAE',
    description:
      "Aqar Land: Premier general contracting, building maintenance, and support services in Abu Dhabi and across the UAE. Architectural precision and enduring execution.",
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
  themeColor: '#181A1B',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${playfair.variable} ${plusJakarta.variable} ${notoSansArabic.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col font-sans bg-[#F7F5F0] text-[#181A1B] dark:bg-[#181A1B] dark:text-[#F7F5F0] transition-colors duration-200"
      >
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main id="main-content" className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
