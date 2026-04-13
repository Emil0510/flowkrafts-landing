'use client'

import Link from 'next/link'

const linkCols = [
  {
    title: 'Links',
    links: [
      { href: '/#services', label: 'Services' },
      { href: '/#cases', label: 'Case studies' },
      { href: '/#benefits', label: 'Benefits' },
    ],
  },
  {
    title: 'Pages',
    links: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/blog', label: 'Blog' },
      { href: '/contact', label: 'Contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-[rgb(34,34,34)] bg-[rgb(0,0,0)] px-10 py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="mb-3 text-lg font-bold text-white">FlowKrafts</p>
            <p className="mb-6 text-sm leading-relaxed text-[rgb(204,204,204)]">
              FlowKrafts — automate smarter, optimize faster, and grow stronger.
            </p>
            <p className="mb-2 text-xs font-medium text-[rgb(204,204,204)]">Join our newsletter</p>
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <input
                type="email"
                placeholder="Email"
                className="flex-1 rounded-lg border border-[rgb(34,34,34)] bg-[rgba(13,13,13,0.8)] px-3 py-2 text-sm text-white placeholder:text-[rgb(204,204,204)] outline-none focus:border-[rgb(129,74,200)]"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="rounded-full bg-[rgb(129,74,200)] px-4 py-2 text-sm font-semibold text-white hover:bg-[rgb(145,95,212)]"
              >
                Join
              </button>
            </form>
          </div>
          {linkCols.map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-[rgb(204,204,204)]">
                {col.title}
              </p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-[rgb(204,204,204)] transition-colors hover:text-white"
                      {...(l.href.startsWith('http')
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[rgb(34,34,34)] pt-8 text-center text-xs text-[rgb(204,204,204)] md:text-left">
          <p>© All right reserved</p>
        </div>
      </div>
    </footer>
  )
}
