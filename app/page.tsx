import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import WhatIsISO from '@/components/WhatIsISO'
import ProblemSection from '@/components/ProblemSection'
import Benefits from '@/components/Benefits'
import CaseStudy from '@/components/CaseStudy'
import Process from '@/components/Process'
import WhatsAppCTA from '@/components/WhatsAppCTA'
import Pricing from '@/components/Pricing'
import IndustriesServed from '@/components/IndustriesServed'
import WhyChooseUs from '@/components/WhyChooseUs'
import FounderSection from '@/components/FounderSection'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <WhatIsISO />
        <ProblemSection />
        <Benefits />
        <CaseStudy />
        <Process />
        <WhatsAppCTA />
        <Pricing />
        <IndustriesServed />
        <WhyChooseUs />
        <FounderSection />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
