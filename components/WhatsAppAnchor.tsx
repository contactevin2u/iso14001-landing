'use client'

import type { AnchorHTMLAttributes } from 'react'
import { onWhatsAppClick } from '@/lib/whatsapp'

/**
 * A plain wa.me link with the shared WhatsApp click handling (beacon [REF] +
 * non-blocking Ads conversion). Drop-in for <a> inside server components.
 */
export default function WhatsAppAnchor(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a target="_blank" rel="noopener noreferrer" {...props} onClick={onWhatsAppClick} />
}
