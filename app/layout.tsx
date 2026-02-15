import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL('https://iso14001.my'),
  title: {
    default: 'ISO 14001 Certification Malaysia | Get Certified in 30 Days (2026)',
    template: '%s | ISO 14001 Certification Malaysia'
  },
  description: 'ISO 14001 certification Malaysia from RM 13,000. AA Alive Sdn Bhd — 500+ companies certified, 98% success rate. Expert EMS consultants guide you from gap analysis to certification audit in 30 days. Free consultation.',
  keywords: [
    'ISO 14001 certification Malaysia',
    'ISO 14001 Malaysia',
    'ISO 14001 consultant Malaysia',
    'environmental management system Malaysia',
    'EMS certification Malaysia',
    'ISO 14001 cost Malaysia',
    'ISO 14001:2015 certification',
    'environmental certification Malaysia',
    'green certification Malaysia',
    'ISO 14001 consultant Kuala Lumpur',
    'ISO 14001 consultant Selangor',
    'ISO 14001 audit Malaysia',
    'environmental management system certification',
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
    url: 'https://iso14001.my',
    siteName: 'ISO 14001 Malaysia — AA Alive Sdn Bhd',
    title: 'ISO 14001 Certification Malaysia | Get Certified in 30 Days (2026)',
    description: 'ISO 14001 certification from RM 13,000. 500+ companies certified with 98% success rate. Expert environmental management consultants — gap analysis to certification in 30 days.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ISO 14001 Certification Malaysia — AA Alive Sdn Bhd',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISO 14001 Certification Malaysia | Get Certified in 30 Days (2026)',
    description: 'ISO 14001 certification from RM 13,000. 500+ companies certified with 98% success rate. Expert environmental management consultants — gap analysis to certification in 30 days.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://iso14001.my',
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#16a34a" />
        <link rel="icon" href="/favicon.ico" />
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
        {children}
      </body>
    </html>
  )
}
