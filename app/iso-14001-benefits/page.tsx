import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata: Metadata = {
  title: 'ISO 14001 Benefits | Advantages of Environmental Certification',
  description: 'Discover the benefits of ISO 14001 certification: cost savings, regulatory compliance, competitive advantage, and improved environmental performance for your business.',
  keywords: ['ISO 14001 benefits', 'advantages of ISO 14001', 'environmental certification benefits', 'EMS benefits'],
  openGraph: {
    title: 'ISO 14001 Benefits | Advantages of Environmental Certification',
    description: 'Discover the benefits of ISO 14001 certification: cost savings, regulatory compliance, competitive advantage, and improved environmental performance.',
    url: 'https://iso14001.my/iso-14001-benefits',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISO 14001 Benefits | Advantages of Environmental Certification',
    description: 'Discover the benefits of ISO 14001 certification for your business.',
  },
  alternates: {
    canonical: 'https://iso14001.my/iso-14001-benefits',
  },
}

export default function ISO14001Benefits() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'ISO 14001 Benefits', href: '/iso-14001-benefits' },
          ]}
        />

        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Benefits of ISO 14001 Certification
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              ISO 14001 certification delivers measurable advantages for your organization, from cost savings
              and regulatory compliance to competitive differentiation and stakeholder trust.
            </p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                1. Significant Cost Savings
              </h2>
              <p className="text-gray-600 mb-4">
                One of the most compelling benefits of ISO 14001 is the potential for substantial cost reductions.
                Organizations implementing an effective Environmental Management System (EMS) typically achieve:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>10-20% reduction in energy consumption</strong> through improved monitoring and efficiency measures</li>
                <li><strong>20-40% decrease in waste generation</strong> through better resource utilization and waste minimization</li>
                <li><strong>Lower raw material costs</strong> through process optimization and reduced scrap</li>
                <li><strong>Reduced waste disposal expenses</strong> through recycling and waste segregation programs</li>
                <li><strong>Lower insurance premiums</strong> from demonstrating systematic risk management</li>
              </ul>
              <p className="text-gray-600 mb-4">
                A manufacturing company in Penang reported RM 450,000 in annual savings within two years of
                ISO 14001 implementation, primarily from reduced energy consumption and improved waste management.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                2. Regulatory Compliance Assurance
              </h2>
              <p className="text-gray-600 mb-4">
                ISO 14001 provides a systematic framework for identifying and meeting legal requirements. In Malaysia,
                this includes compliance with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Environmental Quality Act 1974 and its regulations</li>
                <li>Scheduled waste management requirements</li>
                <li>Air emission standards and monitoring requirements</li>
                <li>Effluent discharge standards</li>
                <li>Noise pollution control regulations</li>
              </ul>
              <p className="text-gray-600 mb-4">
                By maintaining a legal requirements register and regular compliance evaluations, organizations
                significantly reduce the risk of penalties, fines, and legal action from the Department of Environment (DOE).
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                3. Competitive Advantage
              </h2>
              <p className="text-gray-600 mb-4">
                ISO 14001 certification opens doors to new business opportunities:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Government Contracts</h3>
                  <p className="text-sm text-gray-600">Green procurement policies increasingly favor certified suppliers for government projects</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Multinational Supply Chains</h3>
                  <p className="text-sm text-gray-600">Major corporations like Petronas, Shell, and automotive manufacturers require certified suppliers</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Export Markets</h3>
                  <p className="text-sm text-gray-600">Access to European, Japanese, and other markets where environmental certification is expected</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Tender Qualification</h3>
                  <p className="text-sm text-gray-600">Many tenders now include ISO 14001 as a pre-qualification requirement</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                4. Enhanced Brand Reputation
              </h2>
              <p className="text-gray-600 mb-4">
                In an era of increasing environmental awareness, ISO 14001 certification enhances your organization&apos;s
                reputation and credibility:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Demonstrates genuine commitment to environmental responsibility</li>
                <li>Provides third-party verification of your environmental claims</li>
                <li>Differentiates your organization from competitors</li>
                <li>Appeals to environmentally conscious consumers (73% prefer eco-friendly companies)</li>
                <li>Attracts and retains environmentally conscious employees</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                5. Improved Risk Management
              </h2>
              <p className="text-gray-600 mb-4">
                ISO 14001:2015 emphasizes risk-based thinking, helping organizations identify and address
                environmental risks before they become problems:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Systematic identification of environmental aspects and impacts</li>
                <li>Emergency preparedness and response planning</li>
                <li>Reduced likelihood of environmental incidents and spills</li>
                <li>Better management of hazardous materials</li>
                <li>Protection against reputational damage from environmental issues</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                6. Operational Efficiency
              </h2>
              <p className="text-gray-600 mb-4">
                The systematic approach of ISO 14001 drives operational improvements across the organization:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Standardized processes and procedures</li>
                <li>Better monitoring and measurement of key parameters</li>
                <li>Improved communication and awareness among employees</li>
                <li>Clear roles and responsibilities for environmental management</li>
                <li>Data-driven decision making based on environmental metrics</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                7. Continuous Improvement Culture
              </h2>
              <p className="text-gray-600 mb-4">
                The Plan-Do-Check-Act (PDCA) cycle embedded in ISO 14001 creates a culture of continuous
                improvement that extends beyond environmental management:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Regular performance reviews and objective setting</li>
                <li>Internal audits identify improvement opportunities</li>
                <li>Management review ensures ongoing commitment</li>
                <li>Employee suggestions and engagement programs</li>
                <li>Benchmarking against industry best practices</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                8. Integration with Other Standards
              </h2>
              <p className="text-gray-600 mb-4">
                ISO 14001:2015 uses the High-Level Structure (HLS) common to all modern ISO management standards,
                making it easy to integrate with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>ISO 9001</strong> - Quality Management System</li>
                <li><strong>ISO 45001</strong> - Occupational Health and Safety Management</li>
                <li><strong>ISO 50001</strong> - Energy Management System</li>
              </ul>
              <p className="text-gray-600 mb-4">
                An Integrated Management System (IMS) reduces duplication, streamlines audits, and provides
                a holistic approach to organizational management.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Real Results from Malaysian Companies
              </h2>
              <div className="space-y-4 mb-8">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <p className="text-gray-600 italic mb-2">
                    &ldquo;Since achieving ISO 14001 certification, we&apos;ve reduced our waste disposal costs by 35%
                    and won three major contracts that specifically required environmental certification.&rdquo;
                  </p>
                  <p className="text-sm text-gray-500">— Manufacturing company, Selangor</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <p className="text-gray-600 italic mb-2">
                    &ldquo;The systematic approach helped us identify inefficiencies we didn&apos;t know existed.
                    Our energy costs dropped by 18% in the first year.&rdquo;
                  </p>
                  <p className="text-sm text-gray-500">— Chemical processing plant, Johor</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-primary-50 rounded-xl border border-primary-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Ready to Experience These Benefits?
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Our expert consultants will help you implement ISO 14001 and realize measurable improvements
                for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Get Free Consultation
                </a>
                <a
                  href="/iso-14001-certification-process"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
                >
                  View Certification Process
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
