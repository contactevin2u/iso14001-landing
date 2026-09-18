/**
 * Consulting package tiers — the single source of truth for package names,
 * sizes, prices and inclusions. Rendered by the homepage Pricing section and
 * the /iso-14001-cost-malaysia page so the two can never disagree.
 *
 * Certification body (CB) audit fees are NOT included; they are quoted
 * separately. SME pricing set by the owner 18 Sep 2026: "ISO14001 my cost
 * RM5000, CAB Cost RM5000" - shown as FROM prices; the CB audit depends on
 * premises size. Professional and Enterprise unchanged.
 */
export interface PricingTier {
  name: string
  price: string
  /** Optional line under the price (e.g. the separate CB audit fee). */
  priceNote?: string
  description: string
  highlight: boolean
  features: string[]
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'SME',
    price: 'From RM 5,000',
    priceNote: '+ certification body audit from RM 5,000 (depends on premises size)',
    description: 'For small businesses under 50 employees, single site',
    highlight: false,
    features: [
      'Complete gap analysis assessment',
      'Core EMS documentation package',
      '2 on-site consultation visits',
      'Basic staff training workshop',
      'Internal audit support',
      'Certification audit preparation',
      'Audit day support',
      '3-month post-certification support',
    ],
  },
  {
    name: 'Professional',
    price: 'RM 22,000',
    description: 'For mid-sized businesses, 50–200 employees, up to 3 sites',
    highlight: true,
    features: [
      'Comprehensive gap analysis',
      'Full custom EMS documentation',
      '5 on-site consultation visits',
      'Full staff training + internal auditor training',
      'ESG reporting framework setup',
      'Carbon baseline measurement',
      'MGTC/GTFS application guidance',
      'Certification audit preparation',
      'Audit day support',
      '6-month post-certification support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations, 200+ employees, multi-site operations',
    highlight: false,
    features: [
      'Enterprise-wide gap analysis',
      'Integrated Management System (9001+14001+45001)',
      'Unlimited on-site visits',
      'Full staff + management training',
      'Complete ESG strategy & implementation',
      'Board-level ESG briefing',
      'Carbon neutrality roadmap',
      'MGTC/GTFS + GITA/GITE guidance',
      'Multi-CB audit coordination',
      '12-month post-certification support',
    ],
  },
]
