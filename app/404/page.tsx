import Link from 'next/link'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'

export default function FourOhFourPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] pt-28 px-6 pb-16 max-w-2xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-white mb-4">404</h1>
        <p className="text-zinc-400 mb-8">This page could not be found.</p>
        <Link href="/" className="text-violet-400 hover:text-violet-300">
          Return home
        </Link>
      </main>
      <Footer />
    </>
  )
}
