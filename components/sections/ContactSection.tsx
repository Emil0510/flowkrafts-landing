'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { CAL_BOOKING_URL } from '@/lib/cal-booking'
import { CONTACT_EMAIL } from '@/lib/contact'

const inputClass =
  'w-full rounded-lg border border-[rgb(34,34,34)] bg-[rgba(13,13,13,0.8)] px-4 py-3 text-sm text-white placeholder:text-[rgb(204,204,204)] outline-none focus:border-[rgb(129,74,200)]'

const cardClass =
  'relative overflow-hidden rounded-[18px] border border-[rgb(34,34,34)] bg-[rgba(13,13,13,0.8)] p-6 transition-colors hover:border-[rgb(129,74,200)]/35'

function IconMail({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={28}
      height={28}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  )
}

type ContactSectionProps = {
  showBackLink?: boolean
}

export default function ContactSection({ showBackLink }: ContactSectionProps) {
  const [sentHint, setSentHint] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const first = String(fd.get('firstName') ?? '').trim()
    const last = String(fd.get('lastName') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const message = String(fd.get('message') ?? '').trim()
    const body = [`Name: ${first} ${last}`, `Email: ${email}`, '', message].join('\n')
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('FlowKrafts — Contact form')}&body=${encodeURIComponent(body)}`
    setSentHint(true)
  }

  return (
    <section
      id="contact"
      className="xtract-section scroll-mt-24 border-t border-[rgb(34,34,34)] bg-[rgb(0,0,0)]"
    >
      <div className="mx-auto max-w-[960px] px-0">
        <p className="xtract-badge mx-auto mb-6 block w-fit">Contact</p>
        <h1 className="xtract-h2 mb-4 text-center text-white">Get in Touch with Us</h1>
        <p className="xtract-body-xxl mx-auto mb-12 max-w-xl text-center">
          Have questions or need AI solutions? Let us know by filling out the form, and we&apos;ll be
          in touch!
        </p>

        <div className="mb-12 flex justify-center">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={`${cardClass} block w-full max-w-md text-left no-underline`}
          >
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgb(129,74,200)]/25 to-transparent"
              aria-hidden
            />
            <IconMail className="mb-4 text-[rgb(129,74,200)]" />
            <h2 className="xtract-card-title mb-2 text-white">E-mail</h2>
            <p className="xtract-card-content text-[rgb(204,204,204)]">{CONTACT_EMAIL}</p>
          </a>
        </div>

        <div className="rounded-[18px] border border-[rgb(34,34,34)] bg-[rgba(13,13,13,0.5)] p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="sr-only">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  autoComplete="given-name"
                  placeholder="First Name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  autoComplete="family-name"
                  placeholder="Last Name"
                  className={inputClass}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Email"
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Hi, I am jane i want help with...."
                className={`${inputClass} min-h-[140px] resize-y`}
              />
            </div>

            {sentHint && (
              <p className="text-center text-sm text-[rgb(204,204,204)]" role="status">
                If your mail app did not open, email us at {CONTACT_EMAIL}.
              </p>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <button
                type="submit"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-[rgb(129,74,200)] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] transition-colors hover:bg-[rgb(145,95,212)]"
              >
                Submit Form
              </button>
              <Button href={CAL_BOOKING_URL} className="flex-1 !py-3" variant="secondary">
                Book a call
              </Button>
            </div>
          </form>
        </div>

        {showBackLink && (
          <p className="mt-12 text-center">
            <Link href="/" className="text-sm text-violet-400 transition-colors hover:text-violet-300">
              ← Back to home
            </Link>
          </p>
        )}
      </div>
    </section>
  )
}
