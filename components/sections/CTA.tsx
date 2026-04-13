import Button from '@/components/ui/Button'
import { CAL_BOOKING_URL } from '@/lib/cal-booking'

export default function CTA() {
  return (
    <section className="xtract-section border-t border-[rgb(34,34,34)] bg-[rgb(0,0,0)]">
      <div className="mx-auto max-w-4xl rounded-[24px] border border-[rgb(129,74,200)]/35 bg-gradient-to-b from-[rgba(129,74,200,0.12)] to-transparent px-8 py-16 text-center md:px-16">
        <h2 className="xtract-h2 mb-4 text-white">
          Let AI do the Work so you can Scale Faster
        </h2>
        <p className="xtract-body-xxl mb-10">Book a Call Today and Start Automating</p>
        <Button href={CAL_BOOKING_URL}>Book a free call</Button>
      </div>
    </section>
  )
}
