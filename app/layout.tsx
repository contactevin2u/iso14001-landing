import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import GclidTracker from '@/components/GclidTracker'

export const metadata: Metadata = {
  metadataBase: new URL('https://esgiso.com'),
  title: {
    default: 'ISO 14001 & ESG Certification Malaysia | From RM13,000',
    template: '%s | ISO 14001 & ESG Malaysia'
  },
  description: 'ISO 14001 & ESG certification in Malaysia from RM 13,000 in 30 days. ESG compliance, green financing via MGTC GTFS, ESG-mandated contracts. 500+ companies certified, 98% pass rate.',
  keywords: [
    'ISO 14001 certification Malaysia',
    'ESG certification Malaysia',
    'ESG compliance Malaysia',
    'ISO 14001 Malaysia',
    'ISO 14001 consultant Malaysia',
    'environmental management system Malaysia',
    'EMS certification Malaysia',
    'MGTC green financing',
    'Bursa Malaysia ESG',
    'green supply chain Malaysia',
    'ISO 14001 cost Malaysia',
    'ISO 14001:2015 certification',
    'environmental certification Malaysia',
    'green certification Malaysia',
    'GTFS green technology financing',
    'ESG reporting Malaysia',
    'ISO 14001 consultant Kuala Lumpur',
    'ISO 14001 consultant Selangor',
    'ISO 14001 audit Malaysia',
    'green procurement Malaysia',
    'ISO 14001 gap analysis',
    'ISO 14001 training Malaysia'
  ],
  authors: [{ name: 'Evin Lim', url: 'https://my.linkedin.com/in/evin-lim-362a84258' }],
  creator: 'AA Alive Sdn Bhd',
  publisher: 'AA Alive Sdn Bhd',
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
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: 'https://esgiso.com',
    siteName: 'ISO 14001 Malaysia',
    title: 'ISO 14001 & ESG Certification Malaysia | From RM13,000',
    description: 'ISO 14001 & ESG certification in Malaysia from RM 13,000. Win ESG-mandated contracts, unlock green financing, and build your ESG reporting framework.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ISO 14001 & ESG Certification Malaysia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISO 14001 & ESG Certification Malaysia | From RM13,000',
    description: 'ISO 14001 & ESG certification in Malaysia from RM 13,000. Win ESG-mandated contracts, unlock green financing, and build your ESG reporting framework.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://esgiso.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'theme-color': '#16a34a',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#16a34a" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#14532d" media="(prefers-color-scheme: dark)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ISO 14001 MY" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-795120559"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-795120559');
            gtag('config', 'G-Z4VTPVZ06V'); // GA4 (provisioned 2026-07-12)
          `}
        </Script>
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-795120559/_Jh2CNeQw-ADEK-nkvsC',
                'value': 1.0,
                'currency': 'MYR',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
      </head>
      <body className="bg-white text-gray-900">
        <StructuredData />
        <GclidTracker />
        {children}
      </body>
    </html>
  )
}
