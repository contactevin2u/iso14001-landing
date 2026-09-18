export default function ProblemSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-red-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Why Malaysian Businesses Look at ISO 14001
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-14">
          Customers, investors and regulators increasingly ask companies to show how they manage their
          environmental impact. ISO 14001 gives you a recognised, auditable framework to do that.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Without ISO 14001 */}
          <div className="bg-white rounded-2xl p-8 border-2 border-red-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-700">Without a Structured EMS</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
                <div>
                  <span className="font-medium text-gray-900">Supplier questionnaires that are hard to answer</span>
                  <p className="text-sm text-gray-500 mt-1">Larger buyers and listed companies increasingly send environmental and ESG questionnaires to their suppliers.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
                <div>
                  <span className="font-medium text-gray-900">Compliance obligations managed ad hoc</span>
                  <p className="text-sm text-gray-500 mt-1">DOE requirements under the Environmental Quality Act 1974 — scheduled waste, emissions, effluent — tracked informally rather than systematically.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
                <div>
                  <span className="font-medium text-gray-900">No independent evidence of environmental management</span>
                  <p className="text-sm text-gray-500 mt-1">Without third-party certification, your environmental commitments rest on your own statements.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
                <div>
                  <span className="font-medium text-gray-900">Limited environmental data</span>
                  <p className="text-sm text-gray-500 mt-1">No consistent tracking of energy, waste or emissions to share with customers, investors or auditors.</p>
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
              <h3 className="text-xl font-bold text-green-700">With an ISO 14001 EMS</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-medium text-gray-900">Ready when a customer or tender asks for ISO 14001</span>
                  <p className="text-sm text-gray-500 mt-1">You can provide a certificate issued by an accredited certification body when buyers or tenders request one.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-medium text-gray-900">A documented environmental management system</span>
                  <p className="text-sm text-gray-500 mt-1">Environmental policy, aspects and impacts register, legal register, objectives and operational controls built around your operations.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-medium text-gray-900">Environmental data for ESG and stakeholder reporting</span>
                  <p className="text-sm text-gray-500 mt-1">Track energy, waste, emissions and environmental KPIs that can support sustainability reporting and customer questionnaires.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <span className="font-medium text-gray-900">Independent verification</span>
                  <p className="text-sm text-gray-500 mt-1">Your certificate is issued by an accredited certification body after its Stage 1 and Stage 2 audits. We prepare you for those audits.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
