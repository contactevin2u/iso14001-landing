import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ProblemSection from '@/components/ProblemSection'
import ESGSection from '@/components/ESGSection'
import Benefits from '@/components/Benefits'
import WhatsAppCTA from '@/components/WhatsAppCTA'
import Pricing from '@/components/Pricing'
import Process from '@/components/Process'
import WhyChooseUs from '@/components/WhyChooseUs'
import FounderSection from '@/components/FounderSection'
import IndustriesServed from '@/components/IndustriesServed'
import FAQ from '@/components/FAQ'
import AnswerBlock from '@/components/AnswerBlock'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import RelatedGuides from '@/components/RelatedGuides'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <ESGSection />
        <Benefits />
        <WhatsAppCTA />
        <Pricing />
        <Process />
        <WhyChooseUs />
        <FounderSection />
        <IndustriesServed />
        <FAQ />
        <AnswerBlock />
        <RelatedGuides heading="ISO 14001 guides" />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
