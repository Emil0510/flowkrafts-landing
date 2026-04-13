const tasks = [
  { title: 'Payroll management', meta: 'Due on 2nd july', dot: 'bg-amber-400' },
  { title: 'Employee Tracking', meta: '2 days ago', dot: 'bg-emerald-400' },
  { title: 'Social media post', meta: 'Cancelled by user', dot: 'bg-red-400' },
  { title: 'Lead list', meta: '70% prepared', dot: 'bg-violet-400' },
  { title: 'Payment reminder', meta: 'sent to selected clients', dot: 'bg-blue-400' },
]

const founders = [
  { name: 'Jack Daniel', role: 'Founder', email: 'justin@main.com', company: 'Xavier LLC' },
  { name: 'Gorge Chapel', role: 'Founder', email: 'gorge@mail.com', company: 'Chapel LLC' },
  { name: 'Mike Tylor', role: 'Founder', email: 'mike@Cmb.com', company: 'CMB LLC' },
  { name: 'Thomas Shelby', role: 'Founder', email: 'Thimas@Sby.com', company: 'Shelby.co' },
]

function FramerBadge({ children }: { children: React.ReactNode }) {
  return <span className="xtract-badge">{children}</span>
}

function DarkChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex w-fit rounded-full border border-[rgb(34,34,34)] bg-[rgb(13,13,13)] px-3 py-1.5 text-[12px] font-medium leading-none tracking-[-0.04em] text-[rgba(255,255,255,0.9)]">
      {children}
    </span>
  )
}

function ServiceTile({
  badge,
  title,
  description,
  chips,
  preview,
}: {
  badge: string
  title: string
  description: string
  chips: string[]
  preview: React.ReactNode
}) {
  return (
    <div className="xtract-lift-hover overflow-hidden rounded-[18px] border border-[rgb(34,34,34)] bg-[rgba(13,13,13,0.55)]">
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          aria-hidden
          style={{
            background:
              'radial-gradient(ellipse 90% 60% at 30% 15%, rgba(129, 74, 200, 0.24) 0%, transparent 58%), radial-gradient(ellipse 70% 50% at 80% 35%, rgba(223, 122, 254, 0.16) 0%, transparent 52%)',
          }}
        />
        <div className="relative border-b border-[rgb(34,34,34)] bg-[rgba(0,0,0,0.35)] p-5">
          <div className="min-h-[220px] w-full overflow-hidden rounded-[14px] border border-[rgb(34,34,34)] bg-[rgba(0,0,0,0.55)]">
            {preview}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <FramerBadge>{badge}</FramerBadge>
          <div className="flex flex-wrap gap-2">
            {chips.map((c) => (
              <DarkChip key={c}>{c}</DarkChip>
            ))}
          </div>
        </div>
        <h3 className="xtract-h3 mb-3 text-white">{title}</h3>
        <p className="xtract-card-content">{description}</p>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="xtract-section scroll-mt-24 bg-[rgb(0,0,0)]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-[60px]">
        <header className="flex w-full flex-col items-center gap-[25px] text-center">
          <FramerBadge>Our Services</FramerBadge>
          <div className="flex w-full flex-col items-center gap-[15px]">
            <h2 className="xtract-h2 max-w-[700px] text-[rgb(255,255,255)]">
              Next‑Gen Artificial Intelligence Solutions
            </h2>
            <p className="xtract-body-xxl max-w-[600px]">
              End-to-end automation and AI solutions tailored to your business needs.
            </p>
          </div>
        </header>

        <div className="grid w-full gap-6 md:grid-cols-2">
          <ServiceTile
            badge="Workflow Automation"
            title="Workflow"
            description="We analyze your processes and automate repetitive steps. By connecting tools and workflows end to end, you save time and reduce operational cost."
            chips={['Automation', 'Workflows']}
            preview={
              <div className="flex h-full w-full flex-col">
                <div className="flex items-center justify-between border-b border-[rgb(34,34,34)] px-5 py-4">
                  <span className="text-[14px] font-medium text-white">All Tasks</span>
                  <span className="rounded-full bg-[rgba(255,255,255,0.05)] px-2 py-0.5 text-[10px] text-amber-400">
                    Waiting for approval
                  </span>
                </div>
                <ul className="divide-y divide-[rgb(34,34,34)]">
                  {tasks.map((t) => (
                    <li key={t.title} className="flex items-start gap-3 px-5 py-3">
                      <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${t.dot}`} />
                      <div>
                        <p className="text-[12px] font-medium text-white">{t.title}</p>
                        <p className="text-[10px] text-[rgb(204,204,204)]">{t.meta}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            }
          />

          <ServiceTile
            badge="Customer Support"
            title="Customer Support"
            description="We build AI chat and voice assistants for your messaging channels. While your customers get 24/7 answers, your team focuses on more complex requests."
            chips={['Chat', 'Voice', '24/7']}
            preview={
              <div className="flex h-full w-full flex-col gap-3 p-4">
                <div className="rounded-lg border border-[rgb(129,74,200)]/30 bg-[rgba(129,74,200,0.08)] p-3">
                  <p className="mb-1 text-[12px] font-medium text-[rgb(223,122,254)]">
                    Hello! How can I help?
                  </p>
                  <p className="text-[11px] leading-snug text-[rgba(255,255,255,0.75)]">
                    Hi, I’d like to learn more about your services.
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-2 rounded-full border border-[rgb(34,34,34)] bg-[rgba(255,255,255,0.03)] px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[rgb(129,74,200)]" aria-hidden />
                  <span className="text-[11px] text-[rgb(204,204,204)]">Type a message…</span>
                  <span className="ml-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(129,74,200,0.2)] text-[rgb(223,122,254)]">
                    ▶
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 text-[10px] text-[rgb(204,204,204)]">
                  {[
                    'Add document',
                    'Analyze',
                    'Generate Image',
                    'research',
                    'E-mail Sending..',
                    'LinkedIn',
                    'IT services',
                    'Founders',
                  ].map((x) => (
                    <span key={x} className="rounded bg-[rgba(255,255,255,0.05)] px-2 py-0.5">
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            }
          />

          <ServiceTile
            badge="Sales / CRM Automations"
            title="Sales / CRM Automations"
            description="We automate lead sourcing, follow-ups, and email responses. Integrated with your CRM, you don’t miss opportunities—and your team stays focused on closing."
            chips={['Leads', 'CRM', 'Follow-ups']}
            preview={
              <div className="flex h-full w-full flex-col justify-center gap-3 p-4">
                <p className="text-[11px] text-[rgb(204,204,204)]">Draft · Schedule · Sent</p>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {founders.map((f) => (
                    <div
                      key={f.email}
                      className="w-40 shrink-0 rounded-lg border border-[rgb(34,34,34)] bg-[rgb(13,13,13)] p-3"
                    >
                      <p className="text-sm font-medium text-white">{f.name}</p>
                      <p className="text-[10px] text-[rgb(204,204,204)]">{f.role}</p>
                      <p className="mt-1 text-[10px] text-emerald-400">Verified</p>
                      <p className="mt-2 text-[10px] text-[rgb(204,204,204)]">E-mail</p>
                      <p className="truncate text-[11px] text-[rgb(223,122,254)]">{f.email}</p>
                      <p className="mt-1 text-[10px] text-[rgb(204,204,204)]">Company</p>
                      <p className="text-xs text-[rgba(255,255,255,0.9)]">{f.company}</p>
                    </div>
                  ))}
                </div>
              </div>
            }
          />

          <ServiceTile
            badge="Content Creation"
            title="Content Creation"
            description="We scale AI content pipelines for text, visuals, and video. From copy to product assets, we help you generate brand-aligned content faster."
            chips={['Copy', 'Creative', 'Pipelines']}
            preview={
              <div className="flex h-full w-full flex-col gap-3 p-4">
                <div className="rounded-lg border border-[rgb(34,34,34)] bg-[rgba(255,255,255,0.03)] p-3">
                  <div className="mb-2 h-2 w-24 rounded bg-[rgba(255,255,255,0.08)]" />
                  <div className="space-y-2">
                    <div className="h-2 w-[90%] rounded bg-[rgba(255,255,255,0.07)]" />
                    <div className="h-2 w-[78%] rounded bg-[rgba(255,255,255,0.07)]" />
                    <div className="h-2 w-[84%] rounded bg-[rgba(255,255,255,0.07)]" />
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="h-10 rounded bg-[rgba(129,74,200,0.18)]" />
                    <div className="h-10 rounded bg-[rgba(223,122,254,0.14)]" />
                    <div className="h-10 rounded bg-[rgba(56,189,248,0.12)]" />
                  </div>
                </div>
                <div className="mt-auto flex items-center gap-2">
                  <span className="rounded-full bg-[rgba(255,255,255,0.05)] px-2 py-1 text-[10px] text-[rgb(204,204,204)]">
                    Draft
                  </span>
                  <span className="rounded-full bg-[rgba(255,255,255,0.05)] px-2 py-1 text-[10px] text-[rgb(204,204,204)]">
                    Generate
                  </span>
                  <span className="rounded-full bg-[rgba(255,255,255,0.05)] px-2 py-1 text-[10px] text-[rgb(204,204,204)]">
                    Publish
                  </span>
                  <span className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(129,74,200,0.2)] text-[rgb(223,122,254)]">
                    →
                  </span>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  )
}
