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
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
  preload: false,
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
        url: '/images/hero/aqar-land-hero.jpg',
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
    images: ['/images/hero/aqar-land-hero.jpg'],
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('aqar_theme');
                  if (saved === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <JsonLd />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col font-sans bg-[#F7F5F0] text-[#181A1B] dark:bg-[#181A1B] dark:text-[#F7F5F0]"
      >
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#C85A32] focus:text-white focus:outline-none text-xs font-semibold uppercase tracking-wider"
              >
                Skip to content / التخطي إلى المحتوى
              </a>
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
