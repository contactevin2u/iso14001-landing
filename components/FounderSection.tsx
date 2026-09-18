import WhatsAppAnchor from '@/components/WhatsAppAnchor'

export default function FounderSection() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-primary-100 rounded-2xl flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-bold text-primary-600">EL</span>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Meet Evin Lim
                </h2>
                <a
                  href="https://my.linkedin.com/in/evin-lim-362a84258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                  aria-label="Evin Lim LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <p className="text-primary-600 font-medium mb-4">
                Founder & Managing Director, AA Alive Sdn. Bhd.
              </p>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I founded AA Alive Sdn. Bhd. in 2016 with a simple mission: make compliance <em>accessible</em> for
                  Malaysian businesses, with practical documentation built around how each company actually operates.
                </p>
                <p>
                  With ISO 14001, I work a different way. <strong className="text-gray-900">You deal with me and my team directly</strong> —
                  no subcontractors, no layers of bureaucracy. We understand your operations first, then build an
                  environmental management system that actually works for your business — not just one that passes the audit.
                </p>
                <p>
                  We prepare organisations for ISO 14001 certification audits, which are carried out by accredited
                  certification bodies. As more customers and investors ask about ESG, we have added{' '}
                  <strong className="text-gray-900">ESG reporting frameworks, carbon baseline measurement and
                  MGTC/GTFS green financing guidance</strong> to our services. Our approach is hands-on preparation
                  with your team.
                </p>
                <p className="font-medium text-gray-900">
                  If you&apos;re considering ISO 14001, I&apos;m happy to have a no-obligation chat about
                  your situation. No hard sell — just honest advice on whether ISO 14001 makes sense for your business right now.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <WhatsAppAnchor
                  href="https://wa.me/60102062070?text=Hi%20Evin%2C%20I%20want%20to%20discuss%20ISO%2014001%20certification%20for%20my%20business."
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat With Evin Directly
                </WhatsAppAnchor>
                <a
                  href="mailto:contact@evin2u.com"
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  or email contact@evin2u.com
                </a>
                <a
                  href="/about"
                  className="text-sm text-primary-600 hover:text-primary-700 underline transition-colors"
                >
                  About AA Alive &amp; Evin Lim
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-gray-900">2016</div>
                    <div className="text-xs text-gray-500">Founded</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">14001</div>
                    <div className="text-xs text-gray-500">ISO 14001:2015</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">ESG</div>
                    <div className="text-xs text-gray-500">Reporting Support</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">MY</div>
                    <div className="text-xs text-gray-500">Nationwide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
