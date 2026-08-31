const rows = [
  { feature: 'Timeline', aalive: '30 days or less', typical: '3–6 months' },
  { feature: 'Lead Consultant', aalive: 'Founder-led (Evin Lim directly)', typical: 'Junior staff or subcontractors' },
  { feature: 'Documentation', aalive: 'Custom-built for your operations', typical: 'Generic templates' },
  { feature: 'Site Visits', aalive: '3–5 on-site visits included', typical: '1–2 visits (rest remote)' },
  { feature: 'ESG Support', aalive: 'ESG reporting framework + carbon baseline', typical: 'Not included' },
  { feature: 'Staff Training', aalive: 'Full workshop + internal auditor training', typical: 'Basic awareness only' },
  { feature: 'Post-Cert Support', aalive: '3–12 months (by package)', typical: 'None after audit' },
  { feature: 'MGTC/GTFS Guidance', aalive: 'Included in Professional & Enterprise', typical: 'Not offered' },
  { feature: 'Pricing', aalive: 'From RM 13,000 (transparent)', typical: 'RM 15,000–40,000 (hidden fees)' },
  { feature: 'Audit Day Support', aalive: 'Consultant present on audit day', typical: 'You\'re on your own' },
]

export default function ComparisonTable() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          AA Alive vs Typical ISO Consultants
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Not all consultants deliver the same value. Here is how we compare.
        </p>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
            <div className="p-4 text-sm font-medium text-gray-500">Feature</div>
            <div className="p-4 text-sm font-bold text-primary-700 text-center bg-primary-50 border-x border-primary-100">
              AA Alive
            </div>
            <div className="p-4 text-sm font-medium text-gray-500 text-center">Typical Consultant</div>
          </div>

          {/* Rows */}
          {rows.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 ${index < rows.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="p-4 text-sm font-medium text-gray-900">{row.feature}</div>
              <div className="p-4 text-sm text-gray-700 text-center bg-primary-50/30 border-x border-primary-50 flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{row.aalive}</span>
              </div>
              <div className="p-4 text-sm text-gray-500 text-center flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>{row.typical}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
