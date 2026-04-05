import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 pt-16">
      <div className="max-w-3xl">
        <p className="text-[#3b82f6] text-sm font-semibold uppercase tracking-widest mb-4">
          FlowKrafts
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          We build systems that work while you sleep
        </h1>
        <p className="text-zinc-400 text-lg mb-10">
          AI automation for consultants, founders and small businesses.
        </p>
        <Button href="https://cal.com/emil-abdurahmanli">Book a Free Call</Button>
      </div>
    </section>
  )
}
