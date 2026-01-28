import type { Metadata } from 'next'
import './globals.css'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL('https://iso14001.my'),
  title: {
    default: 'ISO 14001 Certification Malaysia | Environmental Management System',
    template: '%s | ISO 14001 Malaysia'
  },
  description: 'Get ISO 14001 certified in Malaysia from RM 13,000. Expert EMS consultants help you achieve environmental management certification. Free consultation available.',
  keywords: [
    'ISO 14001 certification Malaysia',
    'ISO 14001 Malaysia',
    'environmental management system',
    'EMS certification',
    'ISO 14001 consultant Malaysia',
    'ISO 14001 cost Malaysia',
    'environmental certification',
    'ISO 14001:2015',
    'green certification Malaysia'
  ],
  authors: [{ name: 'ISO 14001 Malaysia' }],
  creator: 'ISO 14001 Malaysia',
  publisher: 'ISO 14001 Malaysia',
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
    siteName: 'ISO 14001 Malaysia',
    title: 'ISO 14001 Certification Malaysia | Environmental Management System',
    description: 'Get ISO 14001 certified in Malaysia from RM 13,000. Expert EMS consultants help you achieve environmental management certification.',
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
    title: 'ISO 14001 Certification Malaysia | Environmental Management System',
    description: 'Get ISO 14001 certified in Malaysia from RM 13,000. Expert EMS consultants help you achieve environmental management certification.',
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
      </head>
      <body className="bg-white text-gray-900">
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
