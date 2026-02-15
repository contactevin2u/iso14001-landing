export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://iso14001.my/#organization',
    name: 'AA Alive Sdn Bhd',
    legalName: 'AA Alive Sdn. Bhd.',
    url: 'https://iso14001.my',
    logo: 'https://iso14001.my/logo.png',
    description: 'Malaysia\'s trusted ISO 14001 environmental management system certification consultants. 500+ companies certified with 98% success rate since 2016.',
    foundingDate: '2016-10-06',
    founder: {
      '@type': 'Person',
      name: 'Evin Lim',
      jobTitle: 'Managing Director & Founder',
      url: 'https://my.linkedin.com/in/evin-lim-362a84258',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+601124102070',
        contactType: 'customer service',
        availableLanguage: ['English', 'Malay', 'Chinese'],
        areaServed: 'MY',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+601124102070',
        contactType: 'sales',
        availableLanguage: ['English', 'Malay', 'Chinese'],
        areaServed: 'MY',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1, Jalan Perusahaan 4, Pusat Industri Amari',
      addressLocality: 'Batu Caves',
      addressRegion: 'Selangor',
      postalCode: '68100',
      addressCountry: 'MY',
    },
    sameAs: [
      'https://www.facebook.com/katilhospitalmy',
      'https://www.instagram.com/katilhospitalmy',
      'https://www.tiktok.com/@katilhospitalprihatin_',
      'https://www.linkedin.com/company/aa-alive',
      'https://my.linkedin.com/in/evin-lim-362a84258',
    ],
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 11,
      maxValue: 50,
    },
  }

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://iso14001.my/#founder',
    name: 'Evin Lim',
    jobTitle: 'Managing Director & Founder',
    description: 'Founder of AA Alive Sdn Bhd since 2016, expert in ISO certification and environmental management systems in Malaysia.',
    url: 'https://my.linkedin.com/in/evin-lim-362a84258',
    worksFor: {
      '@type': 'Organization',
      name: 'AA Alive Sdn Bhd',
      url: 'https://iso14001.my',
    },
    sameAs: [
      'https://my.linkedin.com/in/evin-lim-362a84258',
    ],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://iso14001.my/#business',
    name: 'ISO 14001 Malaysia — AA Alive Sdn Bhd',
    image: 'https://iso14001.my/logo.png',
    url: 'https://iso14001.my',
    telephone: '+601124102070',
    email: 'contact@evin2u.com',
    founder: {
      '@id': 'https://iso14001.my/#founder',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1, Jalan Perusahaan 4, Pusat Industri Amari',
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
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '13:00',
      },
    ],
    priceRange: 'RM13,000 - RM50,000',
    areaServed: {
      '@type': 'Country',
      name: 'Malaysia',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'ISO 14001 Certification Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ISO 14001 Certification Consulting',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ISO 14001 Gap Analysis',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'EMS Documentation Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Internal Audit Training',
          },
        },
      ],
    },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://iso14001.my/#service',
    name: 'ISO 14001 Certification Consulting Malaysia',
    provider: {
      '@id': 'https://iso14001.my/#organization',
    },
    serviceType: 'ISO Certification Consulting',
    description: 'Complete ISO 14001:2015 environmental management system certification consulting — gap analysis, EMS documentation, staff training, internal audit, and certification audit preparation. Get certified in 30 days.',
    areaServed: {
      '@type': 'Country',
      name: 'Malaysia',
    },
    offers: {
      '@type': 'Offer',
      price: '13000',
      priceCurrency: 'MYR',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      description: 'Complete ISO 14001 certification package starting from RM 13,000',
    },
    termsOfService: 'https://iso14001.my/terms',
    providerMobility: 'dynamic',
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://iso14001.my/#website',
    name: 'ISO 14001 Malaysia',
    url: 'https://iso14001.my',
    publisher: {
      '@id': 'https://iso14001.my/#organization',
    },
    description: 'ISO 14001 environmental management system certification consulting in Malaysia by AA Alive Sdn Bhd.',
    inLanguage: 'en-MY',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
