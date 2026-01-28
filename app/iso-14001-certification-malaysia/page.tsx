import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata: Metadata = {
  title: 'ISO 14001 Certification Malaysia | EMS Certification Experts',
  description: 'Get ISO 14001 certification in Malaysia with expert guidance. Our EMS consultants have helped 100+ Malaysian companies achieve environmental management system certification.',
  keywords: ['ISO 14001 certification Malaysia', 'EMS certification Malaysia', 'environmental management system Malaysia', 'ISO 14001 consultant Malaysia'],
  openGraph: {
    title: 'ISO 14001 Certification Malaysia | EMS Certification Experts',
    description: 'Get ISO 14001 certification in Malaysia with expert guidance. Our EMS consultants have helped 100+ Malaysian companies achieve environmental management system certification.',
    url: 'https://iso14001.my/iso-14001-certification-malaysia',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISO 14001 Certification Malaysia | EMS Certification Experts',
    description: 'Get ISO 14001 certification in Malaysia with expert guidance.',
  },
  alternates: {
    canonical: 'https://iso14001.my/iso-14001-certification-malaysia',
  },
}

export default function ISO14001CertificationMalaysia() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'ISO 14001 Certification Malaysia', href: '/iso-14001-certification-malaysia' },
          ]}
        />

        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              ISO 14001 Certification in Malaysia
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your complete guide to achieving ISO 14001 environmental management system certification in Malaysia.
              Learn about requirements, process, costs, and how our expert consultants can help your organization.
            </p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Why Malaysian Businesses Need ISO 14001 Certification
              </h2>
              <p className="text-gray-600 mb-4">
                In today&apos;s environmentally conscious business landscape, ISO 14001 certification has become
                essential for Malaysian companies looking to demonstrate their commitment to sustainability.
                As Malaysia continues its journey towards becoming a developed nation, environmental responsibility
                is no longer optional—it&apos;s a business imperative.
              </p>
              <p className="text-gray-600 mb-4">
                The Department of Environment (DOE) Malaysia has increasingly stringent requirements under the
                Environmental Quality Act 1974. ISO 14001 certification provides a structured framework to ensure
                compliance while driving operational efficiency and cost savings.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                What is ISO 14001 Certification?
              </h2>
              <p className="text-gray-600 mb-4">
                ISO 14001 is an internationally recognized standard for Environmental Management Systems (EMS).
                Published by the International Organization for Standardization (ISO), it provides a framework
                for organizations to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Identify and control environmental impacts of their activities</li>
                <li>Continuously improve environmental performance</li>
                <li>Implement a systematic approach to setting and achieving environmental objectives</li>
                <li>Demonstrate compliance with applicable legal requirements</li>
              </ul>
              <p className="text-gray-600 mb-4">
                The current version, ISO 14001:2015, was updated to align with other management system standards
                and places greater emphasis on leadership commitment, lifecycle perspective, and risk-based thinking.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Industries in Malaysia Requiring ISO 14001
              </h2>
              <p className="text-gray-600 mb-4">
                While ISO 14001 is applicable to any organization regardless of size or industry, certain sectors
                in Malaysia particularly benefit from certification:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Manufacturing</h3>
                  <p className="text-sm text-gray-600">Electronics, automotive, plastics, chemicals, and food processing industries</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Oil & Gas</h3>
                  <p className="text-sm text-gray-600">Petronas contractors, refineries, and service providers</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Construction</h3>
                  <p className="text-sm text-gray-600">Building contractors, civil engineering, and infrastructure projects</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Services</h3>
                  <p className="text-sm text-gray-600">Logistics, hospitality, healthcare, and professional services</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                The Certification Process in Malaysia
              </h2>
              <p className="text-gray-600 mb-4">
                Achieving ISO 14001 certification in Malaysia typically follows these steps:
              </p>
              <ol className="list-decimal pl-6 text-gray-600 space-y-3 mb-4">
                <li><strong>Gap Analysis:</strong> Assess current environmental practices against ISO 14001 requirements</li>
                <li><strong>EMS Development:</strong> Create environmental policy, identify aspects/impacts, set objectives</li>
                <li><strong>Documentation:</strong> Develop required procedures and records</li>
                <li><strong>Implementation:</strong> Put the EMS into practice across the organization</li>
                <li><strong>Internal Audit:</strong> Verify system effectiveness and identify improvements</li>
                <li><strong>Management Review:</strong> Top management evaluates EMS performance</li>
                <li><strong>Certification Audit:</strong> External audit by accredited certification body</li>
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Accredited Certification Bodies in Malaysia
              </h2>
              <p className="text-gray-600 mb-4">
                ISO 14001 certification must be issued by an accredited certification body. In Malaysia,
                organizations can choose from various certification bodies accredited by:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li><strong>SIRIM QAS:</strong> Malaysia&apos;s national certification body</li>
                <li><strong>BSI (British Standards Institution):</strong> Internationally recognized</li>
                <li><strong>TUV:</strong> German certification body with global presence</li>
                <li><strong>Bureau Veritas:</strong> French certification and inspection company</li>
                <li><strong>SGS:</strong> Swiss multinational certification company</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Benefits for Malaysian Companies
              </h2>
              <p className="text-gray-600 mb-4">
                ISO 14001 certification provides numerous benefits for Malaysian businesses:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Meet DOE compliance requirements more effectively</li>
                <li>Qualify for green procurement programs by government agencies</li>
                <li>Access contracts with multinational corporations requiring certified suppliers</li>
                <li>Reduce operational costs through improved resource efficiency</li>
                <li>Enhance corporate image and stakeholder confidence</li>
                <li>Prepare for future environmental regulations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Investment and Timeline
              </h2>
              <p className="text-gray-600 mb-4">
                The investment for ISO 14001 certification in Malaysia varies based on organization size and complexity.
                Our consulting packages start from <strong>RM 13,000</strong>, which includes gap analysis, documentation
                development, implementation support, and audit preparation. Most organizations achieve certification
                within 30 days.
              </p>
              <p className="text-gray-600 mb-4">
                Learn more about <a href="/iso-14001-cost-malaysia" className="text-primary-600 hover:underline">ISO 14001 certification costs in Malaysia</a>.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Why Choose Our Consulting Services
              </h2>
              <p className="text-gray-600 mb-4">
                With over a decade of experience helping Malaysian companies achieve ISO 14001 certification,
                our team of certified consultants brings:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                <li>Deep understanding of Malaysian regulatory requirements</li>
                <li>Practical, business-focused approach to EMS implementation</li>
                <li>100% success rate in certification audits</li>
                <li>Ongoing support for surveillance audits and continuous improvement</li>
              </ul>
            </div>

            <div className="mt-12 p-8 bg-primary-50 rounded-xl border border-primary-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Ready to Get ISO 14001 Certified?
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Contact us today for a free consultation and customized proposal for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Get Free Consultation
                </a>
                <a
                  href="https://wa.me/60112410207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
                >
                  WhatsApp Us
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
