import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL('https://esgiso.com'),
  title: {
    default: 'ISO 14001 Certification Malaysia | From RM13,000',
    template: '%s | ISO 14001 Malaysia'
  },
  description: 'Get ISO 14001 certified in Malaysia from RM 13,000 in 30 days. 500+ companies certified, 98% pass rate. Free consultation.',
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
    url: 'https://esgiso.com',
    siteName: 'ISO 14001 Malaysia',
    title: 'ISO 14001 Certification Malaysia | From RM13,000',
    description: 'Get ISO 14001 certified in Malaysia from RM 13,000 in 30 days. 500+ companies certified, 98% pass rate.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ISO 14001 Certification Malaysia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISO 14001 Certification Malaysia | From RM13,000',
    description: 'Get ISO 14001 certified in Malaysia from RM 13,000 in 30 days. 500+ companies certified, 98% pass rate.',
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
