const contracts = [
  {
    title: 'Petronas Vendor Panel',
    requirement: 'ISO 14001 mandatory for vendor registration and HSE compliance',
    value: 'RM 50M+ annual contracts',
    industries: 'Oil & Gas, Engineering, Services',
  },
  {
    title: 'Government Green Procurement',
    requirement: 'MyHIJAU certification and environmental management system required',
    value: 'RM 30B+ government procurement',
    industries: 'All sectors supplying to government',
  },
  {
    title: 'Bursa-Listed Supply Chains',
    requirement: 'ESG reporting now mandatory — suppliers must demonstrate environmental compliance',
    value: 'RM 2.4B+ listed company supply chains',
    industries: 'Manufacturing, Services, Logistics',
  },
  {
    title: 'Japanese MNC Suppliers',
    requirement: 'Toyota, Honda, Panasonic, Sony require ISO 14001 from all tier-1 suppliers',
    value: 'RM 15B+ Japanese FDI in Malaysia',
    industries: 'Manufacturing, Electronics, Auto parts',
  },
  {
    title: 'CIDB Green Building',
    requirement: 'Green Building Index (GBI) and CIDB green projects require environmental certification',
    value: 'RM 5B+ green construction projects',
    industries: 'Construction, Property, Architecture',
  },
  {
    title: 'European Export Markets',
    requirement: 'EU CBAM and Green Deal require environmental compliance from Asian suppliers',
    value: 'RM 120B+ MY-EU trade annually',
    industries: 'Manufacturing, F&B, Electronics',
  },
  {
    title: 'Singapore & ASEAN Markets',
    requirement: 'Singapore Green Plan 2030 and ASEAN sustainability requirements',
    value: 'RM 180B+ MY-SG bilateral trade',
    industries: 'Manufacturing, Services, Logistics',
  },
  {
    title: 'Sustainable Finance',
    requirement: 'Banks require ESG credentials for green loans and sustainability-linked financing',
    value: '2% interest subsidy via GTFS',
    industries: 'All sectors seeking green financing',
  },
]

export default function GreenContracts() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Green Contracts Your Competitors Are Already Winning
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-14">
          ISO 14001 certification is the entry ticket to Malaysia&apos;s fastest-growing contract markets.
          Here&apos;s what you&apos;re missing without it.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contracts.map((contract, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">{contract.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{contract.requirement}</p>
              <div className="pt-4 border-t border-gray-200">
                <div className="text-sm font-semibold text-primary-600 mb-1">{contract.value}</div>
                <div className="text-xs text-gray-500">{contract.industries}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
