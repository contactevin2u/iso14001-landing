const benefits = [
  {
    title: 'Reduce Environmental Impact',
    description: 'Systematically identify and control your environmental footprint across all operations.',
    details: 'Organizations implementing ISO 14001 typically achieve 20-40% reduction in waste generation and 10-20% improvement in energy efficiency within the first two years. The standard requires you to identify significant environmental aspects and implement controls to minimize negative impacts.',
  },
  {
    title: 'Meet Legal Requirements',
    description: 'Stay compliant with environmental regulations and avoid costly fines or penalties.',
    details: 'In Malaysia, compliance with DOE (Department of Environment) regulations is mandatory. ISO 14001 provides a framework for tracking and meeting requirements under the Environmental Quality Act 1974, including scheduled waste management, air emissions, and effluent discharge standards.',
  },
  {
    title: 'Cut Operational Costs',
    description: 'Reduce waste, lower energy consumption, and optimize resource usage to save money.',
    details: 'Studies show ISO 14001 certified organizations save an average of 10-15% on operational costs through improved resource efficiency. This includes reduced raw material consumption, lower utility bills, and decreased waste disposal costs.',
  },
  {
    title: 'Win Green Contracts',
    description: 'Many organizations require ISO 14001 from suppliers. Access new business opportunities.',
    details: 'Major corporations like Petronas, Tenaga Nasional, and multinational companies increasingly require ISO 14001 certification from their supply chain partners. Government green procurement policies also favor certified organizations.',
  },
  {
    title: 'Enhance Brand Reputation',
    description: 'Show customers and stakeholders your genuine commitment to environmental responsibility.',
    details: 'Research indicates 73% of consumers prefer to buy from environmentally responsible companies. ISO 14001 certification provides third-party verification of your environmental commitment, enhancing credibility with customers, investors, and the community.',
  },
  {
    title: 'Drive Continuous Improvement',
    description: 'Build a culture of ongoing environmental performance improvement across your organization.',
    details: 'The PDCA cycle embedded in ISO 14001 ensures your environmental management system continuously evolves. Regular internal audits and management reviews identify opportunities for improvement, keeping your organization ahead of regulatory changes and industry best practices.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Why ISO 14001 Matters
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Certification delivers real, measurable benefits for your business and the environment.
          Discover why leading Malaysian companies choose ISO 14001.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 mb-3">{benefit.description}</p>
              <p className="text-sm text-gray-500">{benefit.details}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/iso-14001-benefits"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            Learn more about ISO 14001 benefits
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
