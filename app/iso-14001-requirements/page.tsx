import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata: Metadata = {
  title: 'ISO 14001 Requirements | Complete Checklist & Guide',
  description: 'Complete guide to ISO 14001:2015 requirements. Understand every clause, from context and leadership to operations and continuous improvement. Free checklist included.',
  keywords: ['ISO 14001 requirements', 'ISO 14001 checklist', 'ISO 14001:2015 clauses', 'EMS requirements'],
  openGraph: {
    title: 'ISO 14001 Requirements | Complete Checklist & Guide',
    description: 'Complete guide to ISO 14001:2015 requirements. Understand every clause and what you need for certification.',
    url: 'https://iso14001.my/iso-14001-requirements',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISO 14001 Requirements | Complete Checklist & Guide',
    description: 'Complete guide to ISO 14001:2015 requirements and clauses.',
  },
  alternates: {
    canonical: 'https://iso14001.my/iso-14001-requirements',
  },
}

export default function ISO14001Requirements() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'ISO 14001 Requirements', href: '/iso-14001-requirements' },
          ]}
        />

        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              ISO 14001 Requirements
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A comprehensive guide to the requirements of ISO 14001:2015. Understand what your organization
              needs to implement for successful Environmental Management System certification.
            </p>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Understanding ISO 14001:2015 Structure
              </h2>
              <p className="text-gray-600 mb-4">
                ISO 14001:2015 follows the High-Level Structure (HLS) common to all modern ISO management
                system standards. The standard contains 10 clauses, with clauses 1-3 providing introduction
                and definitions, and clauses 4-10 containing the requirements for certification.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Clause 4: Context of the Organization
              </h2>
              <p className="text-gray-600 mb-4">
                This clause requires you to understand your organization&apos;s context and stakeholder needs:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">4.1 Understanding the Organization and Its Context</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Identify external issues (regulatory, economic, environmental conditions)</li>
                  <li>Identify internal issues (organizational culture, capabilities, resources)</li>
                  <li>Consider environmental conditions affected by or affecting the organization</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">4.2 Understanding Needs and Expectations of Interested Parties</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Identify relevant interested parties (regulators, customers, community, employees)</li>
                  <li>Determine their relevant needs and expectations</li>
                  <li>Identify which become compliance obligations</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">4.3 Determining the Scope of the EMS</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Define boundaries and applicability of the EMS</li>
                  <li>Consider external and internal issues, compliance obligations</li>
                  <li>Include all activities, products, and services within scope</li>
                  <li>Document and make available to interested parties</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">4.4 Environmental Management System</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Establish, implement, maintain, and continually improve the EMS</li>
                  <li>Include processes needed and their interactions</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Clause 5: Leadership
              </h2>
              <p className="text-gray-600 mb-4">
                Leadership requirements ensure top management commitment and accountability:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">5.1 Leadership and Commitment</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Take accountability for EMS effectiveness</li>
                  <li>Ensure policy and objectives are established and compatible with strategic direction</li>
                  <li>Ensure integration of EMS requirements into business processes</li>
                  <li>Ensure resources are available</li>
                  <li>Communicate importance of effective environmental management</li>
                  <li>Promote continual improvement</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">5.2 Environmental Policy</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Appropriate to purpose and context of organization</li>
                  <li>Provides framework for setting environmental objectives</li>
                  <li>Includes commitment to environmental protection</li>
                  <li>Includes commitment to fulfil compliance obligations</li>
                  <li>Includes commitment to continual improvement</li>
                  <li>Documented, communicated, and available to interested parties</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">5.3 Organizational Roles, Responsibilities and Authorities</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Assign and communicate responsibilities and authorities</li>
                  <li>Ensure EMS conforms to standard requirements</li>
                  <li>Report on EMS performance to top management</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Clause 6: Planning
              </h2>
              <p className="text-gray-600 mb-4">
                Planning requirements address risks, environmental aspects, and objectives:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">6.1 Actions to Address Risks and Opportunities</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Determine environmental aspects of activities, products, and services</li>
                  <li>Identify significant environmental aspects using established criteria</li>
                  <li>Determine compliance obligations (legal and other requirements)</li>
                  <li>Plan actions to address significant aspects, compliance obligations, risks and opportunities</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">6.2 Environmental Objectives and Planning to Achieve Them</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Establish objectives at relevant functions and levels</li>
                  <li>Objectives must be consistent with policy, measurable, monitored, communicated, and updated</li>
                  <li>Plan what will be done, resources required, responsibility, timeline, and evaluation method</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Clause 7: Support
              </h2>
              <p className="text-gray-600 mb-4">
                Support requirements ensure adequate resources and documentation:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">7.1-7.4 Resources, Competence, Awareness, Communication</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Determine and provide necessary resources</li>
                  <li>Ensure competence of persons affecting environmental performance</li>
                  <li>Ensure awareness of policy, significant aspects, contributions, and implications of non-conformance</li>
                  <li>Establish processes for internal and external communication</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">7.5 Documented Information</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Include documented information required by the standard</li>
                  <li>Include documented information needed for EMS effectiveness</li>
                  <li>Control creation, updating, and control of documents</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Clause 8: Operation
              </h2>
              <p className="text-gray-600 mb-4">
                Operational requirements address planning, controls, and emergency preparedness:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">8.1 Operational Planning and Control</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Plan, implement, and control processes to meet requirements</li>
                  <li>Establish criteria for processes</li>
                  <li>Implement control of processes in accordance with criteria</li>
                  <li>Control planned changes and review unintended changes</li>
                  <li>Consider lifecycle perspective for products and services</li>
                  <li>Communicate relevant environmental requirements to external providers</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">8.2 Emergency Preparedness and Response</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Prepare for and respond to potential emergency situations</li>
                  <li>Plan actions to prevent or mitigate adverse environmental impacts</li>
                  <li>Periodically test planned response actions</li>
                  <li>Review and revise plans after incidents or tests</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Clause 9: Performance Evaluation
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">9.1 Monitoring, Measurement, Analysis and Evaluation</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Determine what needs to be monitored and measured</li>
                  <li>Determine methods, timing, and criteria for evaluation</li>
                  <li>Evaluate environmental performance and EMS effectiveness</li>
                  <li>Evaluate compliance with legal and other requirements</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">9.2 Internal Audit</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Conduct internal audits at planned intervals</li>
                  <li>Verify EMS conforms to requirements and is effectively implemented</li>
                  <li>Plan, establish, and maintain audit program(s)</li>
                  <li>Ensure auditor objectivity and impartiality</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">9.3 Management Review</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Review EMS at planned intervals</li>
                  <li>Consider status of previous actions, changes in context, performance and compliance information</li>
                  <li>Determine opportunities for continual improvement</li>
                  <li>Document outputs including decisions and actions</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Clause 10: Improvement
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">10.1-10.3 Nonconformity, Corrective Action, and Continual Improvement</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>React to nonconformities and take action to control and correct them</li>
                  <li>Evaluate need for action to eliminate causes of nonconformity</li>
                  <li>Implement corrective action and review effectiveness</li>
                  <li>Continually improve EMS suitability, adequacy, and effectiveness</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                Required Documented Information
              </h2>
              <p className="text-gray-600 mb-4">
                ISO 14001:2015 requires the following documented information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                <li>Scope of the EMS (4.3)</li>
                <li>Environmental policy (5.2)</li>
                <li>Risks and opportunities to be addressed (6.1.1)</li>
                <li>Environmental aspects and associated impacts (6.1.2)</li>
                <li>Criteria for determining significant aspects (6.1.2)</li>
                <li>Significant environmental aspects (6.1.2)</li>
                <li>Compliance obligations (6.1.3)</li>
                <li>Environmental objectives (6.2.1)</li>
                <li>Evidence of competence (7.2)</li>
                <li>Evidence of communication (7.4.1)</li>
                <li>Results of monitoring and measurement (9.1.1)</li>
                <li>Internal audit program and results (9.2.2)</li>
                <li>Management review outputs (9.3)</li>
                <li>Nature of nonconformities and actions taken (10.2)</li>
                <li>Results of corrective actions (10.2)</li>
              </ul>
            </div>

            <div className="mt-12 p-8 bg-primary-50 rounded-xl border border-primary-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Need Help Meeting ISO 14001 Requirements?
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Our consultants will guide you through every requirement and help you build a compliant EMS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Get Free Gap Analysis
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
