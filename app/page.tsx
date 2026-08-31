import Header from '@/components/Header'
import UrgencyBanner from '@/components/UrgencyBanner'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ProblemSection from '@/components/ProblemSection'
import CostOfInaction from '@/components/CostOfInaction'
import ESGSection from '@/components/ESGSection'
import Benefits from '@/components/Benefits'
import WhatsAppCTA from '@/components/WhatsAppCTA'
import Pricing from '@/components/Pricing'
import GreenContracts from '@/components/GreenContracts'
import Process from '@/components/Process'
import ComparisonTable from '@/components/ComparisonTable'
import WhyChooseUs from '@/components/WhyChooseUs'
import FounderSection from '@/components/FounderSection'
import GreenIncentives from '@/components/GreenIncentives'
import IndustriesServed from '@/components/IndustriesServed'
import FAQ from '@/components/FAQ'
import AnswerBlock from '@/components/AnswerBlock'
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
        <WhatsAppCTA />
        <Pricing />
        <GreenContracts />
        <Process />
        <ComparisonTable />
        <WhyChooseUs />
        <FounderSection />
        <GreenIncentives />
        <IndustriesServed />
        <FAQ />
        <AnswerBlock />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
