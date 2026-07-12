import Header from '@/components/Header'
import UrgencyBanner from '@/components/UrgencyBanner'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ProblemSection from '@/components/ProblemSection'
import CostOfInaction from '@/components/CostOfInaction'
import ESGSection from '@/components/ESGSection'
import Benefits from '@/components/Benefits'
import CaseStudy from '@/components/CaseStudy'
import WhatsAppCTA from '@/components/WhatsAppCTA'
import Pricing from '@/components/Pricing'
import GreenContracts from '@/components/GreenContracts'
import Process from '@/components/Process'
import ComparisonTable from '@/components/ComparisonTable'
import WhyChooseUs from '@/components/WhyChooseUs'
import FounderSection from '@/components/FounderSection'
import GreenIncentives from '@/components/GreenIncentives'
import Testimonials from '@/components/Testimonials'
import IndustriesServed from '@/components/IndustriesServed'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      <Header />
      <UrgencyBanner />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <CostOfInaction />
        <ESGSection />
        <Benefits />
        <CaseStudy />
        <WhatsAppCTA />
        <Pricing />
        <GreenContracts />
        <Process />
        <ComparisonTable />
        <WhyChooseUs />
        <FounderSection />
        <GreenIncentives />
        <Testimonials />
        <IndustriesServed />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
