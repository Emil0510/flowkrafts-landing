import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import WhatWeDo from '@/components/sections/WhatWeDo'
import Services from '@/components/sections/Services'
import HowItWorks from '@/components/sections/HowItWorks'
import WhoWeWorkWith from '@/components/sections/WhoWeWorkWith'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <Services />
        <HowItWorks />
        <WhoWeWorkWith />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
