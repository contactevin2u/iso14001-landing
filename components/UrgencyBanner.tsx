'use client'

import { getWhatsAppUrlWithBeacon } from '@/lib/beacon'

import { useState, useEffect } from 'react'

declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean
  }
}

export default function UrgencyBanner() {
  // CLS fix: default to visible so the banner is part of the server-rendered
  // HTML and occupies its space from the first paint. Previously it defaulted
  // to hidden and was inserted after hydration, pushing <main> down (0.136 CLS
  // on mobile). The inline <script> below hides it pre-paint for sessions
  // where it was already dismissed, so those visitors get no flash either.
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('urgency-banner-dismissed')) {
      setDismissed(true)
    }
  }, [])

  const handleDismiss = () => {
    setDismissed(true)
    sessionStorage.setItem('urgency-banner-dismissed', 'true')
  }

  const waUrl = 'https://wa.me/60102062070?text=Hi%2C%20I%20want%20to%20secure%20one%20of%20the%20remaining%20ISO%2014001%20%26%20ESG%20certification%20slots%20this%20month.'

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const taggedUrl = getWhatsAppUrlWithBeacon(waUrl)
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion(taggedUrl)
    } else {
      window.open(taggedUrl, '_blank')
    }
  }

  if (dismissed) return null

  return (
    <>
    <div id="urgency-banner" className="bg-amber-600 text-white py-2.5 px-4 text-center text-sm relative">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span className="font-medium">
          MNCs Are Dropping Non-ESG Suppliers. Only 5 Slots Left This Month.
        </span>
        <a
          href={waUrl}
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 bg-white text-amber-700 font-semibold px-3 py-1 rounded text-xs hover:bg-amber-50 transition-colors"
        >
          Secure Your Slot
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <button
        onClick={handleDismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-200 hover:text-white transition-colors"
        aria-label="Dismiss banner"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    {/* Runs during HTML parse, before first paint: hides the SSR'd banner for
        sessions where it was already dismissed (avoids flash + reverse shift). */}
    <script
      dangerouslySetInnerHTML={{
        __html:
          "try{if(sessionStorage.getItem('urgency-banner-dismissed')){var u=document.getElementById('urgency-banner');if(u)u.style.display='none'}}catch(e){}",
      }}
    />
    </>
  )
}
