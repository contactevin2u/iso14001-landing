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
            <p className="text-sm">
              Your trusted partner for ISO 14001 certification in Malaysia.
              We help businesses achieve environmental excellence.
            </p>
          </div>

          <div>
            <div className="font-medium text-white mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm">
              <li><a href="/#what-is-iso" className="hover:text-white transition-colors">What is ISO 14001</a></li>
              <li><a href="/#benefits" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="/#process" className="hover:text-white transition-colors">Certification Process</a></li>
              <li><a href="/#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <div className="font-medium text-white mb-4">Resources</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/iso-14001-certification-malaysia" className="hover:text-white transition-colors">
                  ISO 14001 Malaysia
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
                  Certification Process
                </Link>
              </li>
              <li>
                <Link href="/iso-14001-cost-malaysia" className="hover:text-white transition-colors">
                  Certification Cost
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-medium text-white mb-4">Contact</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@iso14001pro.com" className="hover:text-white transition-colors">
                  info@iso14001pro.com
                </a>
              </li>
              <li>
                <a href="tel:+60123456789" className="hover:text-white transition-colors">
                  +60 12-345 6789
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/60123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="pt-2 text-xs text-gray-500">
                Level 15, Menara KEN TTDI<br />
                Kuala Lumpur, Malaysia
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} ISO14001 Malaysia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
