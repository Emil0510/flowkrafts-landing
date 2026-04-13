'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { CAL_BOOKING_URL } from '@/lib/cal-booking'

const navAnchors = [
  { href: '/#services', label: 'Services' },
  { href: '/#cases', label: 'Case studies' },
  { href: '/#benefits', label: 'Benefits' },
]

const navPages = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[rgb(34,34,34)] bg-[rgb(0,0,0)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-10">
        <Link
          href="/"
          className="xtract-nav-enter xtract-nav-enter-1 text-lg font-bold tracking-tight shrink-0"
        >
          <span className="text-white">FlowKrafts</span>
        </Link>

        <div className="xtract-nav-enter xtract-nav-enter-2 hidden lg:flex items-center gap-5 text-sm text-zinc-400 flex-wrap justify-end">
          {navPages.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[rgb(204,204,204)] transition-colors hover:text-white"
            >
              {label}
            </Link>
          ))}
          {navAnchors.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[rgb(204,204,204)] transition-colors hover:text-white"
            >
              {label}
            </Link>
          ))}
          <Button href={CAL_BOOKING_URL} className="!py-2 !px-4 !text-xs">
            Book a call
          </Button>
        </div>

        <div className="xtract-nav-enter xtract-nav-enter-3 lg:hidden flex items-center gap-3">
          <Button href={CAL_BOOKING_URL} className="!py-2 !px-3 !text-xs">
            Book a call
          </Button>
          <button
            type="button"
            className="text-white text-xl p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="flex flex-col gap-3 border-t border-[rgb(34,34,34)] bg-[rgb(0,0,0)] px-10 py-4 text-sm lg:hidden"
        >
          {[...navPages, ...navAnchors].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-zinc-300 py-1"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Button href={CAL_BOOKING_URL} className="w-full justify-center mt-2">
            Book a call
          </Button>
        </div>
      )}
    </nav>
  )
}
