import Link from 'next/link'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] pt-28 px-6 pb-16 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-4">Blog</h1>
        <p className="text-zinc-400 mb-8">Posts coming soon.</p>
        <Link href="/" className="text-violet-400 hover:text-violet-300 text-sm">
          ← Back to home
        </Link>
      </main>
      <Footer />
    </>
  )
}
