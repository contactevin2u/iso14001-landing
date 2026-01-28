import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ISO 14001 Certification | Environmental Management Made Simple',
  description: 'Get ISO 14001 certified with expert guidance. We simplify environmental management system certification for businesses of all sizes. Free consultation available.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  )
}
