import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, IBM_Plex_Sans_Thai, Krub, Manrope } from 'next/font/google';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyCTA } from '@/components/layout/MobileStickyCTA';
import { DeferredGoogleAnalytics } from '@/components/analytics/DeferredGoogleAnalytics';
import { SchemaMarkup, getOrganizationSchema, getWebSiteSchema } from '@/components/seo/SchemaMarkup';
import { CLINIC } from '@/data/clinic';
import { clampSeoDescription } from '@/lib/seo';
import './globals.css';

// Self-hosted via next/font: no layout shift, no render-blocking Google Fonts CSS.
const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

const plexThai = IBM_Plex_Sans_Thai({
  variable: '--font-plex-thai',
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const krub = Krub({
  variable: '--font-krub',
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(CLINIC.website),
  title: {
    default: 'Refinehaus Clinic คลินิกความงามโคราช ดูแลโดยแพทย์',
    template: '%s | Refinehaus Clinic',
  },
  description: clampSeoDescription(CLINIC.description),
  applicationName: CLINIC.name,
  alternates: {
    canonical: '/',
    languages: {
      'th-TH': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    siteName: CLINIC.name,
    url: CLINIC.website,
  },
  twitter: {
    card: 'summary_large_image',
  },
  ...(CLINIC.searchConsoleId ? { verification: { google: CLINIC.searchConsoleId } } : {}),
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
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#39463B',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${cormorant.variable} ${manrope.variable} ${plexThai.variable} ${krub.variable}`}>
      <head>
        <SchemaMarkup schema={getWebSiteSchema()} />
        <SchemaMarkup schema={getOrganizationSchema()} />
        {/* Without JS, show scroll-reveal content immediately */}
        <noscript>
          <style>{'.reveal{opacity:1!important;transform:none!important}'}</style>
        </noscript>
      </head>
      <body>
        <SiteHeader />
        <main className="pb-[76px] lg:pb-0">{children}</main>
        <Footer />
        <MobileStickyCTA />
        <DeferredGoogleAnalytics gaId={CLINIC.gaId} />
      </body>
    </html>
  );
}
