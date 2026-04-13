import Link from 'next/link'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] pt-28 px-6 pb-16 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-4">About</h1>
        <p className="text-zinc-400 mb-8">
          This page mirrors the Framer template structure. Replace with your company story.
        </p>
        <Link href="/" className="text-violet-400 hover:text-violet-300 text-sm">
          ← Back to home
        </Link>
      </main>
      <Footer />
    </>
  )
}
