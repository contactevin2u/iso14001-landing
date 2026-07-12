const incentives = [
  {
    title: 'GTFS 3.0',
    subtitle: 'Green Technology Financing Scheme',
    body: 'Malaysian Green Technology and Climate Change Corporation (MGTC)',
    benefit: '2% interest subsidy on green technology loans up to RM 100M',
    requirements: 'ISO 14001 or equivalent environmental certification, green technology project',
    color: 'bg-green-50 border-green-200',
    accent: 'text-green-700',
    tag: 'bg-green-100 text-green-700',
  },
  {
    title: 'GITA',
    subtitle: 'Green Investment Tax Allowance',
    body: 'Malaysian Investment Development Authority (MIDA)',
    benefit: '100% tax allowance on qualifying green capital expenditure for 5 years',
    requirements: 'Green technology assets acquisition, environmental management system in place',
    color: 'bg-emerald-50 border-emerald-200',
    accent: 'text-emerald-700',
    tag: 'bg-emerald-100 text-emerald-700',
  },
  {
    title: 'GITE',
    subtitle: 'Green Income Tax Exemption',
    body: 'Malaysian Investment Development Authority (MIDA)',
    benefit: '70% tax exemption on statutory income from green services for 5 years',
    requirements: 'Green technology service provider, environmental compliance certification',
    color: 'bg-teal-50 border-teal-200',
    accent: 'text-teal-700',
    tag: 'bg-teal-100 text-teal-700',
  },
  {
    title: 'MyHIJAU',
    subtitle: 'MyHIJAU Recognition',
    body: 'Malaysian Green Technology and Climate Change Corporation (MGTC)',
    benefit: 'Priority in government green procurement (GGP) worth RM 30B+ annually',
    requirements: 'ISO 14001 certification, green product/service verification',
    color: 'bg-lime-50 border-lime-200',
    accent: 'text-lime-700',
    tag: 'bg-lime-100 text-lime-700',
  },
]

export default function GreenIncentives() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Malaysian Government Incentives for ISO 14001 Companies
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-14">
          The Malaysian government actively rewards companies with environmental certifications.
          ISO 14001 is your gateway to these incentive programs.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {incentives.map((incentive, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border ${incentive.color}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${incentive.tag}`}>
                  {incentive.title}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{incentive.subtitle}</h3>
              <p className="text-sm text-gray-500 mb-4">{incentive.body}</p>
              <div className="space-y-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Benefit</div>
                  <p className={`text-sm font-semibold ${incentive.accent}`}>{incentive.benefit}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Requirements</div>
                  <p className="text-sm text-gray-600">{incentive.requirements}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100 text-center">
          <p className="text-primary-800 font-medium text-lg">
            Our <strong>Professional</strong> and <strong>Enterprise</strong> packages include guidance on
            qualifying for these government incentives.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 mt-4 text-primary-700 font-semibold hover:text-primary-800 transition-colors"
          >
            View Pricing Packages
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
