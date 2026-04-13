'use client'

const steps = [
  {
    n: '01',
    title: 'Discovery & Analysis',
    body: 'We conduct an in-depth examination of your business processes. We identify steps suitable for automation, consult with your team, analyze existing workflows, and pinpoint where artificial intelligence can create the greatest impact.',
  },
  {
    n: '02',
    title: 'Design & Development',
    body: 'In this phase, we design and build solutions tailored specifically to you. We create interfaces and automation scenarios that integrate seamlessly into your workflows, and gradually embed advanced AI technologies into your system.',
  },
  {
    n: '03',
    title: 'Installation & Deployment',
    body: 'We integrate the solutions into your operations, train your team, and stay by your side to ensure a smooth transition. Even after processes are running stably, we continue monitoring performance and making necessary improvements.',
  },
]

export default function IntegrationTimeline() {
  return (
    <section
      id="timeline"
      className="xtract-section scroll-mt-24 border-t border-[rgb(34,34,34)] bg-[rgb(0,0,0)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <p className="xtract-badge mx-auto mb-6 block w-fit">Integration Timeline</p>
        <h2 className="xtract-h2 mx-auto mb-4 max-w-2xl text-center text-white">
          Integration Timeline
        </h2>
        <p className="xtract-body-xxl mx-auto mb-16 max-w-2xl text-center">
          A simple, guided rollout from analysis to deployment—built to fit your workflows.
        </p>

        <div className="relative mx-auto max-w-4xl">
          {/* Glow behind the track */}
          <div
            className="pointer-events-none absolute -left-24 -top-10 h-64 w-64 rounded-full blur-[90px]"
            aria-hidden
            style={{
              background:
                'radial-gradient(circle, rgba(129, 74, 200, 0.28) 0%, rgba(223, 122, 254, 0.14) 45%, transparent 70%)',
            }}
          />

          {/* Track */}
          <div
            className="pointer-events-none absolute left-[18px] top-2 bottom-2 w-px opacity-70"
            aria-hidden
            style={{
              background:
                'linear-gradient(180deg, rgba(223,122,254,0.55) 0%, rgba(129,74,200,0.45) 42%, rgba(255,255,255,0.06) 100%)',
            }}
          />

          <div className="grid gap-6">
            {steps.map((s) => (
              <div key={s.n} className="relative pl-[64px]">
                <div className="absolute left-0 top-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgb(34,34,34)] bg-[rgba(13,13,13,0.9)] text-xs font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]">
                    {s.n}
                  </div>
                </div>

                <div className="xtract-lift-hover rounded-[18px] border border-[rgb(34,34,34)] bg-[rgba(13,13,13,0.65)] p-6">
                  <h3 className="xtract-h3 mb-3 text-white">{s.title}</h3>
                  <p className="xtract-card-content">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

