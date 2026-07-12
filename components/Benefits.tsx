const benefits = [
  {
    title: 'Win ESG-Mandated Contracts',
    description: 'Qualify for Petronas vendor panels, government green procurement, and Bursa-listed supply chains.',
    details: 'Major corporations and government agencies increasingly require ISO 14001 and ESG credentials from suppliers. Without certification, you\'re automatically disqualified from RM billions in annual contracts across manufacturing, oil & gas, construction, and services sectors.',
  },
  {
    title: 'Unlock Green Financing & Tax Incentives',
    description: 'Access MGTC GTFS at 2% interest subsidy, GITA 100% tax allowance, and GITE 70% tax exemption.',
    details: 'The Malaysian government offers substantial financial incentives for environmentally certified companies. ISO 14001 is your gateway to the Green Technology Financing Scheme, Green Investment Tax Allowance, and Green Income Tax Exemption — saving hundreds of thousands in financing costs and taxes.',
  },
  {
    title: 'Build Your ESG Reporting Framework',
    description: 'Generate the environmental data investors, stakeholders, and regulators now demand.',
    details: 'Bursa Malaysia mandates sustainability reporting. ISO 14001 gives you the systematic framework to track carbon emissions, waste metrics, energy consumption, and environmental KPIs — exactly what ESG auditors, institutional investors, and FTSE4Good assessments require.',
  },
  {
    title: 'Cut Operational Costs 10–20%',
    description: 'Reduce waste, lower energy consumption, and optimize resource usage to save money.',
    details: 'Studies show ISO 14001 certified organizations save an average of 10-15% on operational costs through improved resource efficiency. This includes reduced raw material consumption, lower utility bills, and decreased waste disposal costs — real savings that show up in your bottom line within the first year.',
  },
  {
    title: 'Full DOE & Environmental Compliance',
    description: 'Stay compliant with environmental regulations and avoid fines up to RM 500,000.',
    details: 'In Malaysia, compliance with DOE regulations is mandatory. ISO 14001 provides a framework for tracking and meeting requirements under the Environmental Quality Act 1974, including scheduled waste management, air emissions, and effluent discharge standards — protecting you from enforcement action.',
  },
  {
    title: 'Sustainability Credentials for Stakeholders',
    description: 'Show customers, investors, and partners your verified commitment to environmental responsibility.',
    details: '73% of institutional investors now screen for ESG performance. ISO 14001 certification provides third-party verification of your environmental commitment, enhancing credibility with ESG-focused investors, MNC procurement teams, and environmentally-conscious consumers.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Why Malaysian Businesses Are Rushing to Get ISO 14001 & ESG Certified
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          It&apos;s not just about the environment anymore — ISO 14001 is now a business growth strategy.
          Here&apos;s the real ROI.
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
