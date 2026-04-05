const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We learn your workflow and identify the highest-leverage automation.',
  },
  {
    number: '02',
    title: 'Build',
    description: 'We build and test the system end-to-end, no black boxes.',
  },
  {
    number: '03',
    title: 'Hand Over',
    description: 'You get full ownership: documentation, training and source files.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-16">How It Works</h2>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dashed connector line — desktop only */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-6 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] border-t border-dashed border-[#3b82f6]/30"
          />
          {steps.map((step) => (
            <div key={step.number} className="text-center relative">
              <div className="w-12 h-12 rounded-full bg-[#3b82f6]/20 border border-[#3b82f6]/40 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#3b82f6] font-bold text-sm">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-zinc-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
