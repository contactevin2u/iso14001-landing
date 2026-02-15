export default function CaseStudy() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Real Results: Malaysian Businesses We&apos;ve Helped Certify
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-14">
          Don&apos;t just take our word for it — here&apos;s what happened when these companies partnered with us for ISO 14001 certification.
        </p>

        {/* Case Study 1 */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-200 mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Case Study — Manufacturing
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            From Zero Environmental System to Full ISO 14001 Certification in 28 Days
          </h3>
          <p className="text-gray-600 mb-8 max-w-3xl">
            A mid-sized manufacturing company in Shah Alam with 120 employees had no formal environmental management system.
            They were losing bids on government contracts and facing pressure from their largest client (a Japanese MNC)
            to obtain ISO 14001 certification within 2 months — or risk losing the account worth RM 2.4M annually.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-red-700 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Before Working With Us
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">-</span>
                  <span>No environmental policy or documented EMS procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">-</span>
                  <span>3 DOE compliance warnings in the past 18 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">-</span>
                  <span>Lost 4 tender opportunities due to missing ISO 14001</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">-</span>
                  <span>RM 180,000/year in waste disposal and energy inefficiency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">-</span>
                  <span>Staff had zero training on environmental responsibilities</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                After 28 Days With Us
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span>
                  <span>Full ISO 14001:2015 certification achieved — zero non-conformities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span>
                  <span>Retained RM 2.4M Japanese MNC account — contract extended 3 years</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span>
                  <span>Won 2 new government contracts worth RM 1.8M in first 6 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span>
                  <span>Reduced waste disposal costs by 32% (saving RM 57,600/year)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span>
                  <span>Full DOE compliance — zero warnings since certification</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <div className="text-2xl font-bold text-primary-600">28 days</div>
              <div className="text-xs text-gray-500 mt-1">Time to certification</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <div className="text-2xl font-bold text-primary-600">RM 4.2M</div>
              <div className="text-xs text-gray-500 mt-1">New contracts won</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <div className="text-2xl font-bold text-primary-600">32%</div>
              <div className="text-xs text-gray-500 mt-1">Waste cost reduction</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <div className="text-2xl font-bold text-primary-600">0</div>
              <div className="text-xs text-gray-500 mt-1">Non-conformities at audit</div>
            </div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-200 mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Case Study — Oil & Gas Services
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Oil & Gas Service Provider Unlocks Petronas Vendor Status With ISO 14001
          </h3>
          <p className="text-gray-600 mb-8 max-w-3xl">
            A Terengganu-based oil & gas service company with 85 employees needed ISO 14001 certification
            to qualify for Petronas&apos;s vendor panel. They had basic environmental controls but nothing
            formal. The Petronas vendor registration deadline was 45 days away.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-red-700 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                The Challenge
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">-</span>
                  <span>Not on Petronas vendor panel — locked out of RM 50M+ annual contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">-</span>
                  <span>Informal environmental controls — nothing documented</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">-</span>
                  <span>Tight 45-day deadline for vendor registration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">-</span>
                  <span>Staff unfamiliar with ISO standards and audit requirements</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-700 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                The Results
              </h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span>
                  <span>ISO 14001 certified in 25 days — 20 days before the deadline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span>
                  <span>Approved on Petronas vendor panel within 60 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span>
                  <span>Won first Petronas subcontract worth RM 3.2M in month 4</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">+</span>
                  <span>Now bidding on Shell and Murphy Oil tenders — projected RM 8M pipeline</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <div className="text-2xl font-bold text-primary-600">25 days</div>
              <div className="text-xs text-gray-500 mt-1">Time to certification</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <div className="text-2xl font-bold text-primary-600">RM 3.2M</div>
              <div className="text-xs text-gray-500 mt-1">First contract won</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <div className="text-2xl font-bold text-primary-600">RM 8M</div>
              <div className="text-xs text-gray-500 mt-1">Current pipeline</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <div className="text-2xl font-bold text-primary-600">3</div>
              <div className="text-xs text-gray-500 mt-1">Oil majors now bidding</div>
            </div>
          </div>
        </div>

        {/* Case Study 3 - shorter */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-200">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Case Study — Food & Beverage
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            F&B Manufacturer Cuts Waste Costs by 41% and Wins Export Contracts
          </h3>
          <p className="text-gray-600 mb-6 max-w-3xl">
            A Johor-based food manufacturer exporting to Singapore and Thailand was told by their distributor
            that ISO 14001 would be mandatory for 2025 contracts. With our help, they achieved certification
            in 30 days and saw immediate operational improvements.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <div className="text-2xl font-bold text-primary-600">30 days</div>
              <div className="text-xs text-gray-500 mt-1">Time to certification</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <div className="text-2xl font-bold text-primary-600">41%</div>
              <div className="text-xs text-gray-500 mt-1">Waste cost reduction</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <div className="text-2xl font-bold text-primary-600">RM 96K</div>
              <div className="text-xs text-gray-500 mt-1">Annual savings</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <div className="text-2xl font-bold text-primary-600">2</div>
              <div className="text-xs text-gray-500 mt-1">New export markets</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
