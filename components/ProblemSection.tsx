export default function ProblemSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-red-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          The Brutal Truth: Your Business Is Falling Behind Without ISO 14001
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-14">
          While you&apos;re still thinking about it, your competitors are already winning contracts,
          passing government audits, and attracting environmentally-conscious clients — because they have ISO 14001.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Without ISO 14001 */}
          <div className="bg-white rounded-2xl p-8 border-2 border-red-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-700">Without ISO 14001</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
                <div>
                  <span className="font-medium text-gray-900">Losing contracts to certified competitors</span>
                  <p className="text-sm text-gray-500 mt-1">Government tenders and MNCs increasingly require ISO 14001 from suppliers. No cert = no bid.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
                <div>
                  <span className="font-medium text-gray-900">Risk of DOE fines and enforcement action</span>
                  <p className="text-sm text-gray-500 mt-1">Environmental Quality Act 1974 penalties can reach RM 500,000 or imprisonment. Without a system, you&apos;re exposed.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
                <div>
                  <span className="font-medium text-gray-900">Wasting money on inefficient operations</span>
                  <p className="text-sm text-gray-500 mt-1">No structured approach to waste, energy, and resource management means money leaking from your business every month.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
                <div>
                  <span className="font-medium text-gray-900">Zero credibility with ESG-focused stakeholders</span>
                  <p className="text-sm text-gray-500 mt-1">Banks, investors, and large clients now evaluate ESG performance. Without ISO 14001, you have no proof.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* With ISO 14001 */}
          <div className="bg-white rounded-2xl p-8 border-2 border-green-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-700">After 30 Days With Us</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-medium text-gray-900">Qualify for government tenders and MNC supply chains</span>
                  <p className="text-sm text-gray-500 mt-1">Petronas, Tenaga Nasional, Sime Darby, and 100+ multinationals require ISO 14001 from vendors.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-medium text-gray-900">Full DOE compliance with documented proof</span>
                  <p className="text-sm text-gray-500 mt-1">Systematic tracking of scheduled waste, emissions, effluents — ready for any inspection at any time.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-medium text-gray-900">10-20% reduction in operational costs</span>
                  <p className="text-sm text-gray-500 mt-1">Structured resource management cuts energy waste, raw material usage, and disposal costs within the first year.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-medium text-gray-900">Internationally recognized environmental credibility</span>
                  <p className="text-sm text-gray-500 mt-1">Third-party certified proof of your environmental commitment — trusted by 300,000+ organizations worldwide.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Real Numbers: What Happens After ISO 14001 Certification
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary-600">20-40%</div>
              <div className="text-sm text-gray-600 mt-2">Waste Reduction in Year 1</div>
              <div className="text-xs text-gray-400 mt-1">Average across certified companies</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary-600">10-15%</div>
              <div className="text-sm text-gray-600 mt-2">Operational Cost Savings</div>
              <div className="text-xs text-gray-400 mt-1">Energy, materials, disposal</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary-600">73%</div>
              <div className="text-sm text-gray-600 mt-2">Consumers Prefer Green Companies</div>
              <div className="text-xs text-gray-400 mt-1">Nielsen Global Survey</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary-600">3X</div>
              <div className="text-sm text-gray-600 mt-2">More Tender Opportunities</div>
              <div className="text-xs text-gray-400 mt-1">With green procurement preference</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
