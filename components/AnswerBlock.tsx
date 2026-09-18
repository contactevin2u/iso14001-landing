const answers: { question: string; answer: string }[] = [
  {
    question: 'How much does ISO 14001 certification cost in Malaysia?',
    answer:
      'ISO 14001 certification consulting in Malaysia costs from RM 5,000 for SMEs (up to 50 employees, single site), plus a certification body audit from RM 5,000 depending on premises size. The Professional package for 50–200 employees across up to 3 sites is RM 22,000 and includes an ESG reporting framework, carbon baseline measurement and MGTC/GTFS green financing guidance. Enterprise packages are custom-quoted. Certification body audit fees are charged separately.',
  },
  {
    question: 'How long does ISO 14001 certification take in Malaysia?',
    answer:
      'ISO 14001 certification timelines in Malaysia depend on your organization’s size, complexity and current environmental practices, plus the certification body’s audit availability. A target date is agreed with you at gap analysis. A consultant handles the documentation, process setup and audit preparation so your team is not pulled away from operations.',
  },
  {
    question: 'What is the ISO 14001 certification process?',
    answer:
      'ISO 14001 certification in Malaysia follows five steps: (1) a free first consultation followed by a gap analysis, (2) EMS documentation — environmental policy, aspects and impacts register, legal requirements register and operational controls, (3) implementation and staff training, (4) internal audit and management review, and (5) the certification body audit — Stage 1 reviews documentation, Stage 2 verifies implementation on-site. Accredited certification bodies include SIRIM QAS, BSI, TUV SUD, SGS, Bureau Veritas, DNV and Lloyd’s Register.',
  },
  {
    question: 'Who needs ISO 14001 certification in Malaysia?',
    answer:
      'ISO 14001 is a voluntary standard. It is often requested by larger buyers and supply chains, for example from manufacturers, oil and gas vendors and contractors, construction firms on government or Green Building Index projects, and suppliers to Bursa-listed companies that report on sustainability. ISO 9001 is not a prerequisite — ISO 14001 is standalone.',
  },
]

const answersBm: { question: string; answer: string }[] = [
  {
    question: 'Berapakah kos pensijilan ISO 14001 di Malaysia?',
    answer:
      'Kos perundingan pensijilan ISO 14001 di Malaysia bermula dari RM 5,000 untuk PKS (sehingga 50 pekerja, satu tapak), ditambah audit badan pensijilan bermula RM 5,000 bergantung pada saiz premis. Pakej Professional untuk syarikat 50–200 pekerja ialah RM 22,000 dan merangkumi rangka kerja pelaporan ESG, pengukuran garis asas karbon serta panduan pembiayaan hijau MGTC/GTFS. Yuran badan pensijilan (SIRIM, BSI, TUV, SGS) dikenakan secara berasingan.',
  },
  {
    question: 'Berapa lama tempoh untuk mendapatkan sijil ISO 14001?',
    answer:
      'Tempoh pensijilan bergantung pada tahap kesediaan organisasi anda dan jadual audit badan pensijilan. Tarikh sasaran dipersetujui bersama anda semasa analisis jurang. Konsultasi pertama adalah percuma: hubungi kami melalui WhatsApp di +60 10-206 2070.',
  },
]

export default function AnswerBlock() {
  return (
    <section id="quick-answers" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          ISO 14001 Certification Malaysia — Quick Answers
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Direct answers to the questions Malaysian businesses ask most before starting ISO 14001
          and ESG work.
        </p>

        <div className="space-y-8">
          {answers.map((item) => (
            <div key={item.question}>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.question}</h3>
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-10 border-t border-gray-200" lang="ms-MY">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Soalan Lazim dalam Bahasa Malaysia
          </h3>
          <div className="space-y-8">
            {answersBm.map((item) => (
              <div key={item.question}>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.question}</h4>
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
