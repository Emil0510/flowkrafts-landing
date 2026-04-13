import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import Button from '@/components/ui/Button'
import { CAL_BOOKING_URL } from '@/lib/cal-booking'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[rgb(0,0,0)] pt-16">
        <section className="xtract-section border-b border-[rgb(34,34,34)]">
          <div className="mx-auto max-w-[900px] text-center">
            <p className="xtract-badge mx-auto mb-6 block w-fit">About</p>
            <h1 className="xtract-h1 text-white">FlowKrafts</h1>
            <p className="xtract-body-xxl mx-auto mt-5 max-w-[720px]">
              We help teams automate work with AI—so operations run smoother, response times drop,
              and growth doesn’t require more manual effort.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={CAL_BOOKING_URL} variant="primary">
                Book a call
              </Button>
              <Button href="/contact" variant="secondary">
                Contact us
              </Button>
            </div>
          </div>
        </section>

        <section className="xtract-section border-b border-[rgb(34,34,34)]">
          <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-2">
            <div className="rounded-[18px] border border-[rgb(34,34,34)] bg-[rgba(13,13,13,0.55)] p-7">
              <h2 className="xtract-h3 mb-3 text-white">Our mission</h2>
              <p className="xtract-card-content">
                Make automation accessible, reliable, and measurable—so every business can move
                faster with confidence.
              </p>
            </div>
            <div className="rounded-[18px] border border-[rgb(34,34,34)] bg-[rgba(13,13,13,0.55)] p-7">
              <h2 className="xtract-h3 mb-3 text-white">What we do</h2>
              <ul className="space-y-2 text-[rgba(255,255,255,0.85)]">
                <li className="xtract-card-content">
                  Workflow automation across your tools (CRM, email, docs, dashboards)
                </li>
                <li className="xtract-card-content">
                  Customer support assistants for chat and voice—24/7, on-brand
                </li>
                <li className="xtract-card-content">
                  Sales / CRM automations for lead handling, follow-ups, and reporting
                </li>
                <li className="xtract-card-content">
                  Content pipelines for text, visuals, and repeatable marketing assets
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="xtract-section">
          <div className="mx-auto max-w-[1200px]">
            <div className="mx-auto mb-10 max-w-[820px] text-center">
              <p className="xtract-badge mx-auto mb-6 block w-fit">Values</p>
              <h2 className="xtract-h2 text-white">How we work</h2>
              <p className="xtract-body-xxl mx-auto mt-4 max-w-[680px]">
                Clear scope, practical delivery, and systems your team can actually run.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Clarity over complexity',
                  body: 'We define outcomes and keep the implementation understandable and maintainable.',
                },
                {
                  title: 'Security & reliability',
                  body: 'We build with safe defaults, predictable behavior, and stable integrations.',
                },
                {
                  title: 'Measurable impact',
                  body: 'Time saved, errors reduced, and response speed—tracked from the start.',
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="xtract-lift-hover rounded-[18px] border border-[rgb(34,34,34)] bg-[rgba(13,13,13,0.55)] p-7"
                >
                  <h3 className="xtract-card-title mb-3 text-white">{v.title}</h3>
                  <p className="xtract-card-content">{v.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-[18px] border border-[rgb(34,34,34)] bg-[rgba(13,13,13,0.45)] p-7 md:flex-row">
              <div>
                <p className="text-sm font-semibold text-white">Ready to automate?</p>
                <p className="xtract-card-content mt-1">
                  Tell us what you want to improve—we’ll suggest the fastest path to impact.
                </p>
              </div>
              <div className="flex gap-3">
                <Button href={CAL_BOOKING_URL} variant="primary">
                  Book a call
                </Button>
                <Button href="/#services" variant="secondary">
                  View services
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
