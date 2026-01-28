const benefits = [
  {
    title: 'Reduce Environmental Impact',
    description: 'Systematically identify and control your environmental footprint across all operations.',
  },
  {
    title: 'Meet Legal Requirements',
    description: 'Stay compliant with environmental regulations and avoid costly fines or penalties.',
  },
  {
    title: 'Cut Operational Costs',
    description: 'Reduce waste, lower energy consumption, and optimize resource usage to save money.',
  },
  {
    title: 'Win Green Contracts',
    description: 'Many organizations require ISO 14001 from suppliers. Access new business opportunities.',
  },
  {
    title: 'Enhance Brand Reputation',
    description: 'Show customers and stakeholders your genuine commitment to environmental responsibility.',
  },
  {
    title: 'Drive Continuous Improvement',
    description: 'Build a culture of ongoing environmental performance improvement across your organization.',
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
          Certification delivers real, measurable benefits for your business and the environment
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
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
