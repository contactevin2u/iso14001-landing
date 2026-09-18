'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What is ISO 14001 certification and why is it important for Malaysian businesses?',
    answer: 'ISO 14001 is an internationally recognized standard for Environmental Management Systems (EMS). For Malaysian businesses, it demonstrates commitment to environmental responsibility, helps meet regulatory requirements from DOE (Department of Environment), and can support access to international markets and green procurement. ISO 14001 is often requested by larger buyers and supply chains.',
  },
  {
    question: 'How long does it take to get ISO 14001 certified in Malaysia?',
    answer: 'The timeline depends on your organization\'s size, complexity and current environmental practices, plus the certification body\'s audit availability. We agree a target date at kick-off and work to it. Our streamlined process keeps things moving without compromising on quality.',
  },
  {
    question: 'What is the cost of ISO 14001 certification in Malaysia?',
    answer: 'Our ISO 14001 certification consulting packages start from RM 13,000 for SMEs (under 50 employees, single site). Our Professional package for mid-sized businesses (50-200 employees, up to 3 sites) is RM 22,000 and includes ESG reporting framework, carbon baseline, and MGTC/GTFS guidance. Enterprise packages for larger organizations are custom-quoted. Certification body audit fees are separate.',
  },
  {
    question: 'What are the key requirements of ISO 14001:2015?',
    answer: 'ISO 14001:2015 requires organizations to: establish an environmental policy, identify environmental aspects and impacts, set objectives and targets, implement operational controls, conduct monitoring and measurement, perform internal audits, and undergo management review. The standard follows the Plan-Do-Check-Act (PDCA) cycle for continuous improvement.',
  },
  {
    question: 'Do I need ISO 9001 before getting ISO 14001?',
    answer: 'No, ISO 14001 is a standalone certification and does not require ISO 9001 as a prerequisite. However, if you already have ISO 9001, the implementation will be smoother as both standards share similar management system structures (Annex SL). Many organizations choose to implement an Integrated Management System (IMS) combining both standards.',
  },
  {
    question: 'How often do I need to renew ISO 14001 certification?',
    answer: 'ISO 14001 certification is valid for 3 years. During this period, you\'ll have annual surveillance audits (usually in years 1 and 2) to verify ongoing compliance. At the end of the 3-year cycle, a recertification audit is required. We provide ongoing support to help you maintain certification and prepare for each audit.',
  },
  {
    question: 'Which certification bodies do you work with in Malaysia?',
    answer: 'We prepare your company for audits by any accredited certification body including SIRIM QAS International, BSI (British Standards Institution), TUV SUD, Bureau Veritas, SGS, Lloyd\'s Register, and DNV. We help you select the most suitable certification body based on your industry, budget, and whether your clients have specific CB preferences. All certification bodies we work with are accredited by the Department of Standards Malaysia (JSM) or international accreditation bodies.',
  },
  {
    question: 'Can ISO 14001 be integrated with ISO 9001 and ISO 45001?',
    answer: 'Yes, absolutely. ISO 14001:2015 uses the same Annex SL high-level structure as ISO 9001 (Quality) and ISO 45001 (Occupational Health & Safety). This means they share common clauses like Context of Organization, Leadership, Planning, Support, and Performance Evaluation. We also set up Integrated Management Systems (IMS) — if you already have ISO 9001, ISO 14001 can build on your existing framework instead of starting from scratch.',
  },
  {
    question: 'What industries need ISO 14001 certification in Malaysia?',
    answer: 'ISO 14001 is a voluntary standard. It is often requested by larger buyers and supply chains, for example in manufacturing, oil & gas, construction and export-oriented businesses, and some tenders and vendor-registration processes ask for it. Whether your business needs it depends on your customers, tenders and markets. We can help you check this during a free first consultation.',
  },
  {
    question: 'What happens if we fail the certification audit?',
    answer: 'The certification body decides the outcome of its audit. If minor non-conformities are found, you typically get 30-90 days to address them, and we help you do that at no extra cost. Major non-conformities may require a follow-up audit. Our internal audit before the certification audit is designed to identify and resolve issues beforehand.',
  },
  {
    question: 'Do my staff need special training for ISO 14001?',
    answer: 'ISO 14001 requires that all employees understand the environmental policy, their role in the EMS, and the potential consequences of not following procedures. Our package includes comprehensive staff training workshops covering environmental awareness, waste management procedures, emergency response, and role-specific responsibilities. We also train your internal audit team so they can conduct surveillance audits independently after certification. No prior ISO knowledge is required from your staff.',
  },
  {
    question: 'How is ISO 14001 different from ISO 9001?',
    answer: 'ISO 9001 focuses on Quality Management — ensuring your products and services consistently meet customer requirements. ISO 14001 focuses on Environmental Management — minimizing your organization\'s environmental impact, managing waste, reducing emissions, and complying with environmental laws. While both follow the same management system structure (making integration easy), they address completely different aspects of your business. Many Malaysian companies hold both certifications, especially those dealing with government contracts or multinational clients.',
  },
  {
    question: 'What documents are required for ISO 14001 certification?',
    answer: 'The key mandatory documents include: Environmental Policy, Environmental Aspects & Impacts Register, Legal Requirements Register, Environmental Objectives and Targets, Operational Control Procedures, Emergency Preparedness and Response Plan, Monitoring and Measurement Records, Internal Audit Procedures and Reports, Management Review Minutes, and Corrective Action Records. Our consultants develop all these documents customized to your specific operations — you don\'t need to create anything from scratch.',
  },
  {
    question: 'How does ISO 14001 help with ESG compliance?',
    answer: 'ISO 14001 directly addresses the "E" (Environmental) pillar of ESG. It provides a systematic framework for tracking carbon emissions, waste, energy consumption and environmental KPIs, data that supports sustainability reporting and customer ESG questionnaires. Our Professional and Enterprise packages include ESG reporting framework setup and carbon baseline measurement.',
  },
  {
    question: 'Does ISO 14001 help with MGTC green financing?',
    answer: 'MGTC administers green financing schemes such as the Green Technology Financing Scheme (GTFS). Eligibility is set by each scheme and assessed by MGTC and the participating financial institutions, not by us, and ISO 14001 certification does not by itself make a company eligible. An EMS can help you document the environmental aspects of your operations, and our Professional and Enterprise packages include guidance on preparing GTFS applications.',
  },
  {
    question: 'Does ISO 14001 help with carbon neutrality goals?',
    answer: 'ISO 14001 can be a foundation for a carbon neutrality journey. It requires you to identify and measure significant environmental aspects — including carbon emissions sources. While ISO 14001 itself doesn\'t mandate carbon neutrality, the management system it creates enables you to set carbon reduction targets, track progress, and demonstrate measurable improvements. Our Enterprise package includes a carbon neutrality roadmap to guide your long-term decarbonization strategy.',
  },
  {
    question: 'What are the requirements for becoming a Bursa-listed supply chain supplier?',
    answer: 'Bursa Malaysia requires listed issuers to publish sustainability statements, and many listed companies ask their suppliers for environmental information as part of that reporting. Suppliers may be asked to show environmental credentials, provide ESG data or describe how they manage environmental impacts. ISO 14001 certification gives you a documented environmental management system, tracking processes and a certificate from an accredited certification body that you can point to.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          ISO 14001 & ESG Malaysia — Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Everything you need to know about ISO 14001 certification, ESG compliance, and green financing in Malaysia
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
