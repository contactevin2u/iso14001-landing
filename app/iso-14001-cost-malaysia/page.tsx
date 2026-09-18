import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import RelatedGuides from '@/components/RelatedGuides'
import { CONTENT_LAST_UPDATED } from '@/lib/constants'
import { PRICING_TIERS } from '@/lib/pricing'
import WhatsAppAnchor from '@/components/WhatsAppAnchor'

export const metadata: Metadata = {
  title: 'ISO 14001 Cost Malaysia | From RM5,000 (2026)',
  description: 'ISO 14001 certification cost in Malaysia: consulting from RM 5,000, certification body audit from RM 5,000. Full breakdown of consulting, audit and maintenance.',
  keywords: ['ISO 14001 cost Malaysia', 'ISO 14001 price', 'ISO 14001 certification cost', 'EMS certification price Malaysia'],
  openGraph: {
    title: 'ISO 14001 Cost Malaysia | From RM5,000 (2026)',
    description: 'ISO 14001 cost in Malaysia: consulting from RM 5,000 + certification body audit from RM 5,000.',
    url: 'https://esgiso.com/iso-14001-cost-malaysia',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISO 14001 Cost Malaysia | From RM5,000 (2026)',
    description: 'ISO 14001 cost Malaysia: consulting from RM 5,000 + audit from RM 5,000.',
  },
  alternates: {
    canonical: 'https://esgiso.com/iso-14001-cost-malaysia',
  },
}

export default function ISO14001CostMalaysia() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'ISO 14001 Cost Malaysia', href: '/iso-14001-cost-malaysia' },
          ]}
        />

        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              ISO 14001 Certification Cost in Malaysia
            </h1>
            <p className="text-sm text-gray-500 mb-4">Last updated: {CONTENT_LAST_UPDATED}</p>
            <p className="text-xl text-gray-600 mb-8">
              ISO 14001 certification consulting in Malaysia costs from RM 5,000. The timeline depends
              on your organisation&apos;s readiness and the certification body&apos;s audit schedule, and a
              target date is agreed with you at gap analysis. The certification body audit is charged
              separately and starts from RM 5,000, depending on the size of your premises. Below is the full
              breakdown of every investment component — consulting fees, certification body costs,
              and ongoing maintenance.
            </p>

            <div className="prose prose-lg max-w-none">
              <div className="bg-primary-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-2 mt-0">Consulting From RM 5,000, Certification Audit From RM 5,000</h2>
                <p className="text-gray-600 mb-0">
                  Consulting includes gap analysis, documentation development, implementation support, training,
                  and audit preparation. The certification body&apos;s audit is a separate line and depends on the
                  size of your premises. Both are fixed in writing after the gap analysis.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Understanding ISO 14001 Certification Costs
              </h2>
              <p className="text-gray-600 mb-4">
                The total investment for ISO 14001 certification in Malaysia comprises several components.
                Being aware of all cost elements helps you budget effectively and avoid surprises.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                1. Consulting and Implementation Costs
              </h2>
              <p className="text-gray-600 mb-4">
                Consulting fees cover the expertise and support needed to develop and implement your
                Environmental Management System (EMS). Our packages include:
              </p>

              <div className="grid gap-6 mb-8">
                {PRICING_TIERS.map((tier) => (
                  <div
                    key={tier.name}
                    className={`border rounded-lg overflow-hidden ${
                      tier.highlight ? 'border-primary-200 bg-primary-50' : 'border-gray-200'
                    }`}
                  >
                    <div
                      className={`p-4 border-b ${
                        tier.highlight ? 'bg-primary-100 border-primary-200' : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <h3 className="font-bold text-gray-900 mb-1">{tier.name} Package</h3>
                      <p className="text-2xl font-bold text-primary-600">
                        {tier.price === 'Custom' ? 'Custom Quote' : tier.price}
                      </p>
                      {tier.priceNote && (
                        <p className="text-sm font-medium text-primary-700">{tier.priceNote}</p>
                      )}
                      <p className="text-sm text-gray-600">{tier.description}</p>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2 text-gray-600">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                2. Certification Body Fees
              </h2>
              <p className="text-gray-600 mb-4">
                Certification body fees are separate from consulting fees. When we arrange the audit, the
                initial certification audit starts from RM 5,000, depending on the size of your premises.
                Across the market, certification body fees typically include:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <table className="w-full text-gray-600">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 font-semibold text-gray-900">Fee Type</th>
                      <th className="text-right py-2 font-semibold text-gray-900">Typical Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3">Application Fee</td>
                      <td className="text-right">RM 500 - RM 1,500</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3">Initial Certification Audit (Stage 1 & 2)</td>
                      <td className="text-right">RM 4,000 - RM 12,000</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3">Annual Surveillance Audit</td>
                      <td className="text-right">RM 2,500 - RM 6,000</td>
                    </tr>
                    <tr>
                      <td className="py-3">Recertification Audit (every 3 years)</td>
                      <td className="text-right">RM 3,500 - RM 10,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 mb-4">
                Certification body fees vary based on organization size, number of employees, complexity
                of operations, and the certification body selected. We can provide guidance on selecting
                an appropriate certification body and help obtain competitive quotes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                3. Internal Costs to Consider
              </h2>
              <p className="text-gray-600 mb-4">
                Beyond consulting and certification fees, consider these internal costs:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li><strong>Staff Time:</strong> Time for EMS coordinator, management, and employees participating in implementation</li>
                <li><strong>Training:</strong> Additional specialized training if required</li>
                <li><strong>Equipment:</strong> Monitoring equipment, waste storage, or other infrastructure improvements</li>
                <li><strong>Operational Changes:</strong> Costs for implementing environmental controls</li>
                <li><strong>Documentation Systems:</strong> Software or systems for document control if needed</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                4. Ongoing Maintenance Costs
              </h2>
              <p className="text-gray-600 mb-4">
                Maintaining ISO 14001 certification requires ongoing investment:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li><strong>Annual Surveillance Audits:</strong> RM 2,500 - RM 6,000 per year</li>
                <li><strong>Internal Audits:</strong> Internal resources or external support</li>
                <li><strong>Monitoring and Measurement:</strong> Environmental testing and monitoring costs</li>
                <li><strong>Training:</strong> Refresher and new employee training</li>
                <li><strong>Regulatory Updates:</strong> Keeping legal register current</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Factors Affecting Total Investment
              </h2>
              <p className="text-gray-600 mb-4">
                Several factors influence your total ISO 14001 certification investment:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Organization Size</h3>
                  <p className="text-sm text-gray-600">Larger organizations require more documentation, training, and audit time</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Complexity of Operations</h3>
                  <p className="text-sm text-gray-600">Manufacturing and high-risk industries require more controls</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Number of Sites</h3>
                  <p className="text-sm text-gray-600">Multi-site certification increases audit days and coordination</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Current Maturity</h3>
                  <p className="text-sm text-gray-600">Organizations with existing systems require less development work</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Return on Investment
              </h2>
              <p className="text-gray-600 mb-4">
                Organisations usually weigh the investment in ISO 14001 against factors such as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>Energy, waste and material savings identified through the EMS</li>
                <li>Reduced risk of fines and penalties under DOE enforcement of the Environmental Quality Act 1974</li>
                <li>Being able to respond when customers or tenders ask for ISO 14001</li>
                <li>Improved operational efficiency</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Any savings and the payback period depend on your organisation and the actions you take. Learn more about the <a href="/iso-14001-benefits" className="text-primary-600 hover:underline">benefits of ISO 14001 certification</a>.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Payment Terms
              </h2>
              <p className="text-gray-600 mb-4">
                We offer flexible payment arrangements to suit your cash flow:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                <li>Milestone-based payments aligned with project phases</li>
                <li>50% upon commencement, 50% upon audit preparation</li>
                <li>Monthly payment plans for larger projects</li>
                <li>Corporate billing arrangements available</li>
              </ul>
            </div>

            <div className="mt-12 p-8 bg-primary-50 rounded-xl border border-primary-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Get Your Custom Quote
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Every organization is unique. Contact us for a detailed proposal tailored to your
                specific requirements and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Get Free Quote
                </a>
                <WhatsAppAnchor
                  href="https://wa.me/60102062070"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
                >
                  WhatsApp Us
                </WhatsAppAnchor>
              </div>
            </div>
          </div>
        </section>
        <RelatedGuides current="/iso-14001-cost-malaysia" />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
