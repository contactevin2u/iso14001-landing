export default function TrustBar() {
  return (
    <section className="py-8 px-4 sm:px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">14001</div>
            <div className="text-sm text-gray-400 mt-1">ISO 14001:2015</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">RM13k</div>
            <div className="text-sm text-gray-400 mt-1">Packages From</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">MY</div>
            <div className="text-sm text-gray-400 mt-1">Nationwide Visits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white">Since 2016</div>
            <div className="text-sm text-gray-400 mt-1">Trusted in Malaysia</div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800">
          <p className="text-center text-xs text-gray-500 uppercase tracking-wider mb-4">Trusted by companies certified with</p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-gray-500">
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-400">SIRIM QAS</div>
              <div className="text-[10px] text-gray-600">Certification Body</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-400">BSI</div>
              <div className="text-[10px] text-gray-600">British Standards</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-400">TUV SUD</div>
              <div className="text-[10px] text-gray-600">German Quality</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-400">Bureau Veritas</div>
              <div className="text-[10px] text-gray-600">Global Leader</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-400">SGS</div>
              <div className="text-[10px] text-gray-600">Inspection & Certification</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
