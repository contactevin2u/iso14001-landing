const industries = [
  {
    name: 'Manufacturing',
    description: 'Automotive parts, electronics, plastics, metal fabrication — we\'ve certified factories across all manufacturing sub-sectors in Malaysia.',
    esg: 'MNC ESG supplier audits now mandatory for tier-1 suppliers',
    clients: '200+ certified',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    name: 'Oil & Gas',
    description: 'Upstream, downstream, and services — Petronas, Shell, Murphy Oil vendor requirements. We understand PETRONAS HSE standards.',
    esg: 'Petronas requires ESG-aligned EMS for all vendor panel members',
    clients: '50+ certified',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
  },
  {
    name: 'Construction',
    description: 'Main contractors, sub-contractors, and building material suppliers. Essential for CIDB green building and GBI projects.',
    esg: 'GBI and CIDB Green now require environmental certification',
    clients: '80+ certified',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: 'Food & Beverage',
    description: 'Food processing, packaging, and distribution. Meets HACCP integration requirements and export market environmental standards.',
    esg: 'EU and Singapore export markets mandating ESG from suppliers',
    clients: '40+ certified',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.5 1.5 0 003 15.546M12 3v2m6.364.636l-1.414 1.414M21 12h-2M6.05 6.05L4.636 4.636M5 12H3m6 6l-2-2m8 2l2-2" />
      </svg>
    ),
  },
  {
    name: 'Healthcare & Medical',
    description: 'Hospitals, clinics, pharmaceutical companies, and medical device distributors. Integrates with MDA and KKM compliance.',
    esg: 'Healthcare ESG reporting increasingly required by investors',
    clients: '35+ certified',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: 'Logistics & Transport',
    description: 'Freight forwarders, warehousing, cold chain logistics. Fleet emission management and green logistics compliance.',
    esg: 'Carbon tracking now required for green supply chain certification',
    clients: '30+ certified',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    name: 'Technology & IT',
    description: 'Data centers, software companies, and tech manufacturers. E-waste management and energy-efficient operations.',
    esg: 'Global tech firms require ESG compliance from APAC vendors',
    clients: '25+ certified',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Property & Facilities',
    description: 'Property developers, facility management, and building maintenance companies. Green building certifications and township sustainability.',
    esg: 'MGTC green financing requires ISO 14001 for property projects',
    clients: '40+ certified',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
]

export default function IndustriesServed() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Industries We&apos;ve Certified Across Malaysia
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-14">
          From heavy manufacturing to tech startups — our consultants have deep expertise in
          industry-specific environmental and ESG requirements.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-xl flex items-center justify-center mb-4">
                {industry.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{industry.description}</p>
              <p className="text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded mb-3 font-medium">
                {industry.esg}
              </p>
              <span className="text-xs font-medium text-primary-600">{industry.clients}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-primary-50 rounded-xl border border-primary-100 text-center">
          <p className="text-primary-800 font-medium">
            Don&apos;t see your industry? We&apos;ve certified companies in 50+ sectors.
            <a href="https://wa.me/601124102070?text=Hi%2C%20I%20want%20to%20know%20if%20ISO%2014001%20applies%20to%20my%20industry."
               target="_blank"
               rel="noopener noreferrer"
               className="underline hover:no-underline ml-1"
            >
              Chat with us to check
            </a>.
          </p>
        </div>
      </div>
    </section>
  )
}
