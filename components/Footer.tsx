import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <div className="text-2xl font-bold text-white leading-tight">ISO 14001</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-500">Environmental Management Begins Here</div>
            </div>
            <p className="text-sm mb-3">
              ISO 14001 environmental management system consulting in Malaysia. We prepare
              organisations for certification audits by accredited certification bodies.
            </p>
            <p className="text-xs text-gray-500 mb-4">
              A service by <strong className="text-gray-400">AA Alive Sdn. Bhd.</strong><br />
              SSM: 1204108-D
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/aa-alive"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <div className="font-medium text-white mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm">
              <li><a href="/#what-is-iso" className="hover:text-white transition-colors">What is ISO 14001</a></li>
              <li><a href="/#benefits" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="/#process" className="hover:text-white transition-colors">Certification Process</a></li>
              <li><a href="/#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-white transition-colors">
                  Media Coverage
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-medium text-white mb-4">Resources</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/iso-14001-certification-malaysia" className="hover:text-white transition-colors">
                  ISO 14001 Certification Malaysia
                </Link>
              </li>
              <li>
                <Link href="/iso-14001-benefits" className="hover:text-white transition-colors">
                  ISO 14001 Benefits
                </Link>
              </li>
              <li>
                <Link href="/iso-14001-requirements" className="hover:text-white transition-colors">
                  ISO 14001 Requirements
                </Link>
              </li>
              <li>
                <Link href="/iso-14001-certification-process" className="hover:text-white transition-colors">
                  Certification Process Guide
                </Link>
              </li>
              <li>
                <Link href="/iso-14001-cost-malaysia" className="hover:text-white transition-colors">
                  Certification Cost Malaysia
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-medium text-white mb-4">Contact</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:contact@evin2u.com" className="hover:text-white transition-colors">
                  contact@evin2u.com
                </a>
              </li>
              <li>
                <a href="tel:+60102062070" className="hover:text-white transition-colors">
                  +6010-206 2070
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/60102062070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="pt-2 text-xs text-gray-500">
                AA Alive Sdn. Bhd. (1204108-D)<br />
                1, Jalan Perusahaan 4,<br />
                Pusat Industri Amari,<br />
                68100 Batu Caves, Selangor
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-8 text-sm">
          <span className="font-medium text-white">Our other services: </span>
          <a
            href="https://isoconsultantmalaysia.com"
            rel="noopener"
            className="hover:text-white transition-colors underline decoration-gray-700"
          >
            ISO 9001 certification Malaysia (isoconsultantmalaysia.com)
          </a>
          <span className="mx-2 text-gray-600">&middot;</span>
          <a
            href="https://iso13485.my"
            rel="noopener"
            className="hover:text-white transition-colors underline decoration-gray-700"
          >
            ISO 13485 &amp; medical device consulting (iso13485.my)
          </a>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} AA Alive Sdn. Bhd. (1204108-D). All rights reserved.</p>
          <p className="text-xs text-gray-600">
            ISO 14001 &amp; ESG consulting for Malaysian businesses.
          </p>
        </div>
      </div>
    </footer>
  )
}
