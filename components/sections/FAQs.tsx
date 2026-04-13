'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'How can AI automation help my business?',
    a: 'AI automation handles repetitive work, reduces errors, and frees your team to focus on strategy and customer relationships—often with measurable time and cost savings.',
  },
  {
    q: 'Is AI automation difficult to integrate?',
    a: 'We design integrations around your existing tools and workflows so adoption is gradual, documented, and supported—you do not need to rebuild everything at once.',
  },
  {
    q: 'What industries can benefit from AI automation?',
    a: 'Any industry with repeatable processes—operations, sales, support, finance, and logistics are common examples. We tailor solutions to your context and compliance needs.',
  },
  {
    q: 'Do I need technical knowledge to use AI automation?',
    a: 'No. We build clear interfaces and handover documentation so your team can run day-to-day operations without writing code.',
  },
  {
    q: 'What kind of support do you offer?',
    a: 'We provide clear communication channels, documentation, and ongoing help as you adopt automation—including monitoring, updates, and optimization as your usage grows.',
  },
]

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="xtract-section border-t border-[rgb(34,34,34)] bg-[rgb(0,0,0)]">
      <div className="mx-auto max-w-3xl">
        <p className="xtract-badge mx-auto mb-6 block w-fit">FAQs</p>
        <h2 className="xtract-h2 mb-4 text-center text-white">
          We&apos;ve Got the Answers You&apos;re Looking For
        </h2>
        <p className="xtract-body-xxl mb-12 text-center">
          Quick answers to your AI automation questions.
        </p>
        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-[18px] border border-[rgb(34,34,34)] bg-[rgba(13,13,13,0.8)]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-white transition-colors hover:bg-[rgba(255,255,255,0.03)]"
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span className="shrink-0 text-[rgb(204,204,204)]">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="xtract-card-content border-t border-[rgb(34,34,34)] px-5 pb-4 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
