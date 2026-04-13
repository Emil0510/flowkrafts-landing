import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import ContactSection from '@/components/sections/ContactSection'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[rgb(0,0,0)] pt-16">
        <ContactSection showBackLink />
      </main>
      <Footer />
    </>
  )
}
