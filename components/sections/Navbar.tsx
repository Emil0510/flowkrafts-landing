'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          <span className="text-white">Flow</span>
          <span className="text-[#3b82f6]">Krafts</span>
        </Link>

        <div className="hidden md:block">
          <Button href="https://cal.com/flowkrafts">Book a Free Call</Button>
        </div>

        <button
          className="md:hidden text-white text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="md:hidden px-6 pb-4 bg-[#0a0a0a]/95 border-t border-white/[0.06]"
        >
          <Button href="https://cal.com/flowkrafts">Book a Free Call</Button>
        </div>
      )}
    </nav>
  )
}
