const cases = [
  {
    quote: 'AI-driven forecasting cut inventory waste by 40% for TrailForge',
    company:
      'TrailForge, a suitcase brand, faced stock issues and inefficiencies. Our AI forecasting optimized inventory and production cycles, helping them save costs and deliver faster.',
    metrics: [
      '40% Less Inventory Waste',
      '35% Faster Production',
      '20% More Accurate Forecasting',
      '25% Faster Fulfillment',
    ],
  },
  {
    quote: 'AI-powered workflows reduced error rate by 80% in daily operations',
    company:
      'MedixChain, a healthcare logistics company, was dealing with frequent data errors and delays. We introduced AI validation and live tracking to improve accuracy and speed across their supply chain.',
    metrics: [
      '80% Error reduction',
      '90% Accuracy in Data Logs',
      '30% Faster Delivery',
      '60+ Hours Saved',
    ],
  },
  {
    quote: 'Automating 50% of operations saved 20% in costs within 2 months',
    company:
      'FinSolve, a financial services firm, was overloaded with repetitive admin tasks. By automating internal workflows and integrating data systems, they streamlined operations and reduced overhead.',
    metrics: [
      '50% Operations Automated',
      '20% Cost Reduction',
      '70+ Hours Saved/Month',
      '2x Faster Client Onboarding',
    ],
  },
  {
    quote: 'AI integration helped ScaleByte close 3x more deals in less time',
    company:
      'ScaleByte’s sales team struggled with follow-up delays. Our AI sales assistant automated outreach, lead scoring, and CRM updates—resulting in faster responses and more closed deals.',
    metrics: ['3x More Deals', '40% Faster Responses', '95% Lead Accuracy', 'CRM Fully Synced'],
  },
]

export default function CaseStudies() {
  const [featured, ...rest] = cases
  return (
    <section
      id="cases"
      className="xtract-section scroll-mt-24 border-t border-[rgb(34,34,34)] bg-[rgb(0,0,0)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <p className="xtract-badge mx-auto mb-6 block w-fit">Case Studies</p>
        <h2 className="xtract-h2 mx-auto mb-4 max-w-2xl text-center text-white">
          See How Smart AI Automation Transforms Businesses
        </h2>
        <p className="xtract-body-xxl mx-auto mb-4 max-w-xl text-center">
          See how AI automation streamlines operations, boosts and drives growth.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="xtract-lift-hover relative overflow-hidden rounded-[18px] border border-[rgb(34,34,34)] bg-[rgba(13,13,13,0.65)] p-7 lg:col-span-2">
            <div
              className="pointer-events-none absolute inset-0 opacity-70"
              aria-hidden
              style={{
                background:
                  'radial-gradient(ellipse 90% 60% at 25% 15%, rgba(129, 74, 200, 0.22) 0%, transparent 58%), radial-gradient(ellipse 70% 55% at 80% 30%, rgba(223, 122, 254, 0.14) 0%, transparent 55%)',
              }}
            />
            <div className="relative">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[rgb(204,204,204)]">
                Featured
              </p>
              <h3 className="xtract-h3 mb-4 text-white">&ldquo;{featured.quote}&rdquo;</h3>
              <p className="xtract-card-content mb-7 max-w-2xl">{featured.company}</p>

              <div className="grid gap-3 sm:grid-cols-2">
                {featured.metrics.map((m) => (
                  <div
                    key={m}
                    className="rounded-[14px] border border-[rgb(34,34,34)] bg-[rgba(0,0,0,0.35)] px-4 py-3"
                  >
                    <p className="text-sm font-medium text-[rgb(223,122,254)]">{m}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <div className="grid gap-6">
            {rest.slice(0, 2).map((c) => (
              <article
                key={c.quote}
                className="xtract-lift-hover overflow-hidden rounded-[18px] border border-[rgb(34,34,34)] bg-[rgba(13,13,13,0.55)] p-6"
              >
                <h3 className="xtract-card-title mb-3 leading-snug text-white">&ldquo;{c.quote}&rdquo;</h3>
                <p className="xtract-card-content mb-5">{c.company}</p>
                <div className="flex flex-wrap gap-2">
                  {c.metrics.slice(0, 3).map((m) => (
                    <span
                      key={m}
                      className="inline-flex items-center rounded-full border border-[rgb(34,34,34)] bg-[rgba(0,0,0,0.35)] px-3 py-1 text-xs text-[rgb(223,122,254)]"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
