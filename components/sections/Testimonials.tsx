const items = [
  {
    quote:
      'AI automation transformed our operations by eliminating repetitive tasks and improving efficiency. Scaling our workflow has never been easier!',
    name: 'James Carter',
    role: 'CEO at TechFlow Solutions',
  },
  {
    quote:
      'With AI, we cut manual work and improved accuracy. Our team now focuses on high-impact tasks while automation handles the rest!',
    name: 'Sophia Martinez',
    role: 'Operations Manager at NexaCorp',
  },
  {
    quote:
      'AI-driven insights doubled our sales efficiency. We now engage leads at the right time with smarter, data-backed decisions!',
    name: 'David Reynolds',
    role: 'Head of Sales at GrowthPeak',
  },
  {
    quote:
      'Customer support is now seamless. Our response time improved drastically, and satisfaction levels are at an all-time high, thanks to FlowKrafts',
    name: 'Emily Wong',
    role: 'Customer Success Lead at SupportHive',
  },
]

export default function Testimonials() {
  return (
    <section className="xtract-section border-t border-[rgb(34,34,34)] bg-[rgb(0,0,0)]">
      <div className="mx-auto max-w-[1200px]">
        <p className="xtract-badge mx-auto mb-6 block w-fit">Testimonials</p>
        <h2 className="xtract-h2 mx-auto mb-4 max-w-2xl text-center text-white">
          Why Businesses Love Our AI Solutions
        </h2>
        <p className="xtract-body-xxl mx-auto mb-14 max-w-xl text-center">
          Real businesses, real results with AI automation.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-[18px] border border-[rgb(34,34,34)] bg-[rgba(13,13,13,0.8)] p-6"
            >
              <p className="xtract-card-content mb-6">&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-[rgb(204,204,204)]">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
