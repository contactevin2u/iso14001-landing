'use client'

declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean
  }
}

const costs = [
  {
    amount: 'RM 50K–500K+',
    label: 'Lost Tender Revenue Per Year',
    description: 'ESG-mandated tenders from Petronas, government agencies, and MNCs you can\'t even bid on without ISO 14001.',
    color: 'text-red-400',
  },
  {
    amount: 'RM 500K',
    label: 'DOE Fines & Penalties',
    description: 'Environmental Quality Act 1974 violations carry fines up to RM 500,000 and potential imprisonment.',
    color: 'text-orange-400',
  },
  {
    amount: '2% Interest',
    label: 'Green Financing You\'re Missing',
    description: 'MGTC GTFS offers 2% interest subsidy on green technology loans — only available with environmental certification.',
    color: 'text-amber-400',
  },
  {
    amount: 'Priceless',
    label: 'Reputation & Investor Confidence',
    description: '73% of institutional investors now screen for ESG. Without credentials, you\'re invisible to ESG-focused capital.',
    color: 'text-red-500',
  },
]

export default function CostOfInaction() {
  const waUrl = 'https://wa.me/60102062070?text=Hi%2C%20I%20want%20to%20stop%20losing%20money%20and%20get%20ISO%2014001%20certified.'

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion(waUrl)
    } else {
      window.open(waUrl, '_blank')
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
          The Cost of Doing Nothing
        </h2>
        <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-14">
          Every month without ISO 14001 and ESG compliance is costing your business real money.
          Here&apos;s what Malaysian companies are losing right now.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {costs.map((cost, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700"
            >
              <div className={`text-2xl sm:text-3xl font-bold mb-2 ${cost.color}`}>
                {cost.amount}
              </div>
              <div className="text-white font-semibold mb-3">{cost.label}</div>
              <p className="text-sm text-gray-400">{cost.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={waUrl}
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-lg"
          >
            Stop Losing Money — Get Certified From RM 13,000
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
