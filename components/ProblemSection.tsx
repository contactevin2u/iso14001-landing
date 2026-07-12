export default function ProblemSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-red-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          The ESG Gap Is Costing Malaysian Businesses Millions
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-14">
          While you&apos;re still thinking about it, your competitors are winning ESG-mandated contracts,
          accessing green financing, and becoming preferred MNC suppliers — because they have ISO 14001.
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
              <h3 className="text-xl font-bold text-red-700">Without ISO 14001 & ESG</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
                <div>
                  <span className="font-medium text-gray-900">Disqualified from ESG-mandated tenders</span>
                  <p className="text-sm text-gray-500 mt-1">Bursa-listed companies and government agencies now require ESG compliance from supply chain partners. No cert = no bid.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
                <div>
                  <span className="font-medium text-gray-900">Locked out of green financing at 2% interest</span>
                  <p className="text-sm text-gray-500 mt-1">MGTC&apos;s Green Technology Financing Scheme offers 2% interest subsidy — but requires environmental certification to qualify.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
                <div>
                  <span className="font-medium text-gray-900">MNCs dropping non-ESG suppliers</span>
                  <p className="text-sm text-gray-500 mt-1">Samsung, Toyota, Shell, and Nestle are actively removing suppliers without environmental credentials from their vendor panels.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
                <div>
                  <span className="font-medium text-gray-900">Zero ESG reporting capability</span>
                  <p className="text-sm text-gray-500 mt-1">No carbon tracking, no waste data, no environmental KPIs — nothing to show investors, stakeholders, or ESG auditors.</p>
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
                  <span className="font-medium text-gray-900">Qualify for ESG-mandated tenders & MNC supply chains</span>
                  <p className="text-sm text-gray-500 mt-1">Petronas, Tenaga Nasional, Sime Darby, and 100+ multinationals now accept you as a qualified vendor.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-medium text-gray-900">Access green financing at 2% interest via MGTC/GTFS</span>
                  <p className="text-sm text-gray-500 mt-1">Unlock subsidized green loans up to RM 100M and position your company for sustainability-linked financing.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-medium text-gray-900">Generate ESG data for investor & stakeholder reporting</span>
                  <p className="text-sm text-gray-500 mt-1">Track carbon emissions, waste metrics, and environmental KPIs that satisfy Bursa sustainability reporting requirements.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-medium text-gray-900">Become a preferred supplier with sustainability credentials</span>
                  <p className="text-sm text-gray-500 mt-1">Third-party certified proof of your environmental commitment — trusted by 300,000+ organizations worldwide.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            The Numbers Don&apos;t Lie
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-red-600">RM 50K–500K+</div>
              <div className="text-sm text-gray-600 mt-2">Lost Revenue Per Year</div>
              <div className="text-xs text-gray-400 mt-1">Without ESG-mandated tenders</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary-600">2%</div>
              <div className="text-sm text-gray-600 mt-2">Lower Interest Rate</div>
              <div className="text-xs text-gray-400 mt-1">Via MGTC green financing</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-primary-600">73%</div>
              <div className="text-sm text-gray-600 mt-2">Investors Screen for ESG</div>
              <div className="text-xs text-gray-400 mt-1">Global institutional investors</div>
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
