export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ISO 14001 Malaysia',
    url: 'https://iso14001.my',
    logo: 'https://iso14001.my/logo.png',
    description: 'Expert ISO 14001 environmental management system certification consultants in Malaysia.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+60-11-2410-2070',
      contactType: 'customer service',
      availableLanguage: ['English', 'Malay'],
    },
    sameAs: [
      'https://www.facebook.com/iso14001my',
      'https://www.linkedin.com/company/iso14001my',
    ],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://iso14001.my/#business',
    name: 'ISO 14001 Malaysia',
    image: 'https://iso14001.my/logo.png',
    url: 'https://iso14001.my',
    telephone: '+60-11-2410-2070',
    email: 'contact@evin2u.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1, Jalan Perusahaan 4, Kawasan Industri Batu Caves',
      addressLocality: 'Batu Caves',
      addressRegion: 'Selangor',
      postalCode: '68100',
      addressCountry: 'MY',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 3.2374,
      longitude: 101.6839,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: 'RM13,000 - RM50,000',
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://iso14001.my/#service',
    name: 'ISO 14001 Certification Consulting',
    provider: {
      '@type': 'Organization',
      name: 'ISO 14001 Malaysia',
    },
    serviceType: 'ISO Certification Consulting',
    description: 'Complete ISO 14001:2015 environmental management system certification consulting services including gap analysis, documentation, implementation, and audit preparation.',
    areaServed: {
      '@type': 'Country',
      name: 'Malaysia',
    },
    offers: {
      '@type': 'Offer',
      price: '13000',
      priceCurrency: 'MYR',
      priceValidUntil: '2025-12-31',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}
