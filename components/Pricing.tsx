import { CONTENT_LAST_UPDATED } from '@/lib/constants'

const tiers = [
  {
    name: 'SME',
    price: 'RM 13,000',
    description: 'For small businesses under 50 employees, single site',
    highlight: false,
    features: [
      'Complete gap analysis assessment',
      'Core EMS documentation package',
      '2 on-site consultation visits',
      'Basic staff training workshop',
      'Internal audit support',
      'Certification audit preparation',
      'Audit day support',
      '3-month post-certification support',
    ],
  },
  {
    name: 'Professional',
    price: 'RM 22,000',
    description: 'For mid-sized businesses, 50–200 employees, up to 3 sites',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Comprehensive gap analysis',
      'Full custom EMS documentation',
      '5 on-site consultation visits',
      'Full staff training + internal auditor training',
      'ESG reporting framework setup',
      'Carbon baseline measurement',
      'MGTC/GTFS application guidance',
      'Certification audit preparation',
      'Audit day support',
      '6-month post-certification support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations, 200+ employees, multi-site operations',
    highlight: false,
    features: [
      'Enterprise-wide gap analysis',
      'Integrated Management System (9001+14001+45001)',
      'Unlimited on-site visits',
      'Full staff + management training',
      'Complete ESG strategy & implementation',
      'Board-level ESG briefing',
      'Carbon neutrality roadmap',
      'MGTC/GTFS + GITA/GITE guidance',
      'Multi-CB audit coordination',
      '12-month post-certification support',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          ISO 14001 & ESG Certification Packages
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-4">
          Transparent pricing. No hidden fees. Choose the package that fits your business.
        </p>
        <p className="text-sm text-gray-500 text-center mb-12">Last updated: {CONTENT_LAST_UPDATED}</p>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 border-2 shadow-sm relative ${
                tier.highlight
                  ? 'border-primary-600 shadow-xl md:-mt-4 md:mb-[-1rem]'
                  : 'border-gray-200'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="text-sm font-medium text-primary-600 mb-2">{tier.name}</div>
                <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">{tier.price}</div>
                <p className="text-sm text-gray-500">{tier.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`block w-full text-center py-3 px-6 font-semibold rounded-lg transition-colors ${
                  tier.highlight
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {tier.price === 'Custom' ? 'Request Quote' : 'Get Started'}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Certification body (CB) audit fees are quoted separately based on your chosen CB.
          Flexible payment plans available for all packages.{' '}
          <a href="/iso-14001-cost-malaysia" className="text-primary-600 hover:text-primary-700 underline">
            See the full ISO 14001 cost breakdown
          </a>
        </p>
      </div>
    </section>
  )
}
