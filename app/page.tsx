import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import LogoStrip from '@/components/sections/LogoStrip'
import Services from '@/components/sections/Services'
import IntegrationTimeline from '@/components/sections/IntegrationTimeline'
import CaseStudies from '@/components/sections/CaseStudies'
import Benefits from '@/components/sections/Benefits'
import Testimonials from '@/components/sections/Testimonials'
import FAQs from '@/components/sections/FAQs'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'
import Reveal from '@/components/ui/Reveal'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reveal delayMs={0}>
          <LogoStrip />
        </Reveal>
        <Reveal delayMs={55}>
          <Services />
        </Reveal>
        <Reveal delayMs={110}>
          <IntegrationTimeline />
        </Reveal>
        <Reveal delayMs={165}>
          <CaseStudies />
        </Reveal>
        <Reveal delayMs={220}>
          <Benefits />
        </Reveal>
        <Reveal delayMs={275}>
          <Testimonials />
        </Reveal>
        <Reveal delayMs={330}>
          <FAQs />
        </Reveal>
        <Reveal delayMs={385}>
          <CTA />
        </Reveal>
      </main>
      <Reveal delayMs={440}>
        <Footer />
      </Reveal>
    </>
  )
}
