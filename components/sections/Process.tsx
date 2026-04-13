import CardShell from '@/components/sections/_CardShell'

const codeSample = `class AutomationTrigger:
    def __init__(self, threshold):
        self.threshold = threshold
        self.status = "inactive"

    def check_trigger(self, value):
        if value > self.threshold:
            self.status = "active"
            return "Automation triggered!"
        return "No action taken."

    def get_status(self):
        return f"Status: {self.status}"`

const steps = [
  {
    n: 'Step 1',
    title: 'Smart Analyzing',
    body: 'We assess your needs and identify AI solutions to streamline workflows and improve efficiency.',
    extra: (
      <div className="mt-4 rounded-[18px] border border-[rgb(34,34,34)] bg-[rgba(13,13,13,0.8)] p-4">
        <p className="mb-2 text-[12px] text-[rgb(204,204,204)]">Analyzing current workflow..</p>
        <div className="flex flex-wrap gap-2 text-[11px]">
          {['System check', 'Process check', 'Speed check', 'Manual work', 'Repetative task'].map(
            (x) => (
              <span
                key={x}
                className="rounded-md bg-[rgba(255,255,255,0.05)] px-2 py-1 text-[rgba(255,255,255,0.75)]"
              >
                {x}
              </span>
            ),
          )}
        </div>
      </div>
    ),
  },
  {
    n: 'Step 2',
    title: 'AI Development',
    body: 'Our team builds intelligent automation systems tailored to your business processes.',
    extra: (
      <pre className="mt-4 overflow-x-auto rounded-[18px] border border-[rgb(34,34,34)] bg-[rgb(0,0,0)] p-4 font-mono text-[10px] leading-relaxed text-emerald-300/90">
        {codeSample}
      </pre>
    ),
  },
  {
    n: 'Step 3',
    title: 'Seamless Integration',
    body: 'We smoothly integrate AI solutions into your existing infrastructure with minimal disruption.',
    extra: (
      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        <span className="rounded-xl border border-[rgb(129,74,200)]/40 bg-[rgba(129,74,200,0.12)] px-4 py-3 text-[rgb(223,122,254)]">
          Our solution
        </span>
        <span className="rounded-xl border border-[rgb(34,34,34)] bg-[rgba(255,255,255,0.05)] px-4 py-3 text-[rgba(255,255,255,0.9)]">
          Your stack
        </span>
      </div>
    ),
  },
  {
    n: 'Step 4',
    title: 'Continuous Optimization',
    body: 'We refine performance, analyze insights, and enhance automation for long-term growth.',
    extra: (
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {[
          { t: 'Chatbot system', s: 'Efficiency will increase by 20%' },
          { t: 'Workflow system', s: 'Update available..' },
          { t: 'Sales system', s: 'Up to date' },
        ].map((row) => (
          <div
            key={row.t}
            className="rounded-[18px] border border-[rgb(34,34,34)] bg-[rgba(13,13,13,0.8)] p-3 text-xs"
          >
            <p className="mb-1 font-medium text-white">{row.t}</p>
            <p className="text-[rgb(204,204,204)]">{row.s}</p>
          </div>
        ))}
      </div>
    ),
  },
]

export default function Process() {
  return (
    <section
      id="process"
      className="xtract-section scroll-mt-24 border-t border-[rgb(34,34,34)] bg-[rgb(0,0,0)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <p className="xtract-badge mx-auto mb-6 block w-fit">Our Process</p>
        <h2 className="xtract-h2 mx-auto mb-4 max-w-2xl text-center text-white">
          Our Simple, Smart, and Scalable Process
        </h2>
        <p className="xtract-body-xxl mx-auto mb-16 max-w-xl text-center">
          We design, develop, and implement automation tools that help you work smarter, not harder
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <CardShell key={step.n}>
              <p className="xtract-badge mb-3">{step.n}</p>
              <h3 className="xtract-h3 mb-3 text-white">{step.title}</h3>
              <p className="xtract-card-content">{step.body}</p>
              {step.extra}
            </CardShell>
          ))}
        </div>
      </div>
    </section>
  )
}
