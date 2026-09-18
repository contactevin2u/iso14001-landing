const benefits = [
  {
    title: 'Respond to Customer & Tender Requests',
    description: 'Be ready when customers, listed companies or tenders ask suppliers for ISO 14001.',
    details: 'ISO 14001 is often requested by larger buyers and supply chains, and some tenders and vendor-registration processes ask for it. A certificate issued by an accredited certification body gives you a recognised way to show how you manage environmental impact.',
  },
  {
    title: 'Green Financing & Incentive Guidance',
    description: 'Guidance on green financing and tax incentive schemes such as MGTC GTFS, GITA and GITE.',
    details: 'Malaysia offers green financing and tax incentive schemes for qualifying green technology projects. Each scheme sets and assesses its own eligibility criteria. Our Professional package includes MGTC/GTFS application guidance; the Enterprise package adds GITA/GITE guidance.',
  },
  {
    title: 'Build Your ESG Reporting Framework',
    description: 'Organise the environmental data that investors, customers and stakeholders ask for.',
    details: 'Bursa Malaysia requires listed issuers to publish sustainability statements, and many listed companies ask their suppliers for environmental information. ISO 14001 gives you a systematic way to track energy use, waste, emissions and environmental KPIs for that reporting.',
  },
  {
    title: 'Use Resources More Efficiently',
    description: 'Identify opportunities to reduce waste, energy and material use.',
    details: 'Reviewing your environmental aspects often highlights waste, energy and material use that can be reduced. Any savings depend on your operations and the actions you decide to take.',
  },
  {
    title: 'DOE & Environmental Compliance',
    description: 'Manage your obligations under Malaysian environmental law systematically.',
    details: 'In Malaysia, compliance with DOE regulations is mandatory. ISO 14001 provides a framework for tracking and meeting requirements under the Environmental Quality Act 1974, including scheduled waste management, air emissions and effluent discharge standards, helping reduce the risk of enforcement action.',
  },
  {
    title: 'Sustainability Credentials for Stakeholders',
    description: 'Show customers, investors and partners how you manage environmental responsibility.',
    details: 'ISO 14001 certification is issued by an accredited certification body after an independent audit, giving investors, procurement teams and customers third-party verification of your environmental management system.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Why Malaysian Businesses Implement ISO 14001
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          ISO 14001 supports environmental compliance, customer and supply-chain requests, and ESG
          reporting. Here is what it can help with.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 mb-3">{benefit.description}</p>
              <p className="text-sm text-gray-500">{benefit.details}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/iso-14001-benefits"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            Learn more about ISO 14001 benefits
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
