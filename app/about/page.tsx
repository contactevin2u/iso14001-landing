import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata: Metadata = {
  title: 'About Us — AA Alive Sdn Bhd',
  description:
    'ISO 14001 & ESG Malaysia (esgiso.com) is the environmental and ESG consulting service of AA Alive Sdn Bhd (1204108-D), founded in 2016 by Evin Lim. 500+ businesses certified, 98% pass rate.',
  openGraph: {
    title: 'About Us — AA Alive Sdn Bhd | ISO 14001 & ESG Malaysia',
    description:
      'ISO 14001 & ESG Malaysia is the environmental consulting service of AA Alive Sdn Bhd (1204108-D), founded in 2016 by Evin Lim.',
    url: 'https://esgiso.com/about',
    type: 'website',
  },
  alternates: {
    canonical: 'https://esgiso.com/about',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://esgiso.com/#founder',
  name: 'Evin Lim',
  jobTitle: 'Managing Director & Founder',
  description:
    'Founder of AA Alive Sdn Bhd since 2016, expert in ISO certification, environmental management systems and ESG readiness in Malaysia.',
  url: 'https://esgiso.com/about',
  worksFor: {
    '@id': 'https://esgiso.com/#organization',
  },
  sameAs: [
    'https://my.linkedin.com/in/evin-lim-362a84258',
    'https://www.linkedin.com/company/aa-alive',
  ],
  subjectOf: [
    {
      '@type': 'VideoObject',
      name: 'Ruang Bicara: Aspirasi Ekonomi — BERNAMA TV (3 Julai 2026)',
      description:
        'Panel discussion on the direction of the Malaysian pharmaceutical and medical device industry, with Datuk Lau Tiam Kwee (ACCCIM) and Evin Lim, founder of AA Alive Sdn Bhd, as industry consultant.',
      thumbnailUrl: 'https://i.ytimg.com/vi/p0rcj7kaqpQ/hq720.jpg',
      uploadDate: '2026-07-03',
      url: 'https://www.youtube.com/watch?v=p0rcj7kaqpQ',
      embedUrl: 'https://www.youtube.com/embed/p0rcj7kaqpQ',
      publisher: { '@type': 'Organization', name: 'BERNAMA TV' },
    },
    {
      '@type': 'NewsArticle',
      headline: 'Krisis tenaga global, peraturan ketat beri kesan kos perubatan',
      datePublished: '2026-07-04',
      url: 'https://berita.rtm.gov.my/nasional/senarai-berita-nasional/senarai-artikel/krisis-tenaga-global-peraturan-ketat-beri-kesan-kos-perubatan/',
      publisher: { '@type': 'Organization', name: 'Portal Berita RTM' },
    },
    {
      '@type': 'VideoObject',
      name: 'Superbrands Malaysia CEO Interviews 2025 — Evin Lim',
      description:
        'Superbrands Malaysia CEO Interviews 2025 with Evin Lim on the official Superbrands Limited channel. AA Alive Sdn Bhd is a Superbrands Malaysia 2025 (Malaysia’s Choice) award recipient.',
      thumbnailUrl: 'https://i.ytimg.com/vi/4Y7hNFsM3Jk/hqdefault.jpg',
      uploadDate: '2025-12-09',
      url: 'https://www.youtube.com/watch?v=4Y7hNFsM3Jk',
      embedUrl: 'https://www.youtube.com/embed/4Y7hNFsM3Jk',
      publisher: { '@type': 'Organization', name: 'Superbrands Limited' },
    },
  ],
}

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://esgiso.com/about#webpage',
  url: 'https://esgiso.com/about',
  name: 'About ISO 14001 & ESG Malaysia — AA Alive Sdn Bhd',
  inLanguage: 'en-MY',
  mainEntity: { '@id': 'https://esgiso.com/#organization' },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <Header />
      <main className="pt-20">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'About Us', href: '/about' },
          ]}
        />

        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About ISO 14001 &amp; ESG Malaysia
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              esgiso.com is the environmental management and ESG consulting service of{' '}
              <strong className="text-gray-900">AA Alive Sdn Bhd</strong> (SSM 1204108-D), founded
              in 2016 by <strong className="text-gray-900">Evin Lim</strong>. We help Malaysian
              businesses implement and certify ISO 14001:2015 environmental management systems,
              build ESG reporting frameworks, measure carbon baselines and qualify for MGTC/GTFS
              green financing.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Our founder</h2>
            <p className="text-gray-600 mb-4">
              Evin Lim founded AA Alive Sdn Bhd in 2016 and has grown it into a portfolio spanning
              ISO certification consulting, medical device regulatory consulting and medical
              equipment supply. He personally leads client engagements — you deal with the founder
              and his senior team directly. His industry commentary has been featured in national
              media:
            </p>
            <ul className="space-y-2 mb-4 text-gray-600 list-disc pl-6">
              <li>
                <strong className="text-gray-900">BERNAMA TV</strong> — panelist,{' '}
                <em>Ruang Bicara: Aspirasi Ekonomi</em>, on the pharmaceutical and medical device
                industry (3 July 2026)
              </li>
              <li>
                <strong className="text-gray-900">RTM</strong> — quoted in Portal Berita RTM on
                regulation and medical costs, alongside <em>Selamat Pagi Malaysia</em> coverage
                (July 2026)
              </li>
              <li>
                <strong className="text-gray-900">Superbrands Malaysia</strong> — CEO Interviews
                2025 on the official Superbrands Limited channel (December 2025)
              </li>
            </ul>
            <p className="text-gray-600 mb-4">
              Watch the appearances on our{' '}
              <Link href="/media" className="text-primary-600 hover:text-primary-700 underline">
                media coverage page
              </Link>
              .
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
              Credentials &amp; recognition
            </h2>
            <ul className="space-y-2 mb-4 text-gray-600 list-disc pl-6">
              <li>AA Alive Sdn Bhd — registered with SSM Malaysia (1204108-D), operating since 2016</li>
              <li>500+ Malaysian businesses certified across manufacturing, oil &amp; gas, construction, F&amp;B, healthcare and logistics</li>
              <li>98% first-time certification audit pass rate</li>
              <li>Superbrands Malaysia 2025 (Malaysia&apos;s Choice) award recipient</li>
              <li>Nationwide service across Malaysia — remote-friendly engagements</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What we do</h2>
            <ul className="space-y-2 mb-4 text-gray-600 list-disc pl-6">
              <li>
                <Link href="/iso-14001-certification-malaysia" className="text-primary-600 hover:text-primary-700 underline">
                  ISO 14001 certification consulting
                </Link>{' '}
                — gap analysis to certificate, from RM 13,000
              </li>
              <li>ESG reporting frameworks, carbon baseline measurement and MGTC/GTFS green financing guidance</li>
              <li>
                ISO 9001 quality management via{' '}
                <a href="https://isoconsultantmalaysia.com" className="text-primary-600 hover:text-primary-700 underline" rel="noopener">
                  isoconsultantmalaysia.com
                </a>
              </li>
              <li>
                ISO 13485 &amp; medical device compliance via{' '}
                <a href="https://iso13485.my" className="text-primary-600 hover:text-primary-700 underline" rel="noopener">
                  iso13485.my
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Contact</h2>
            <p className="text-gray-600 mb-8">
              AA Alive Sdn Bhd — 1, Jalan Perusahaan 4, Pusat Industri Amari, 68100 Batu Caves,
              Selangor, Malaysia
              <br />
              Phone:{' '}
              <a href="tel:+601124102070" className="text-primary-600 hover:text-primary-700 underline">
                +60 11-2410 2070
              </a>{' '}
              · Email:{' '}
              <a href="mailto:contact@evin2u.com" className="text-primary-600 hover:text-primary-700 underline">
                contact@evin2u.com
              </a>
            </p>

            <a
              href="https://wa.me/601124102070?text=Hi%2C%20I%20want%20to%20discuss%20ISO%2014001%20certification%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
            >
              WhatsApp Us for a Free Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
