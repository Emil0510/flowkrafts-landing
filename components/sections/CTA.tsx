import Button from '@/components/ui/Button'

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center border border-[#3b82f6]/20 rounded-2xl p-16 bg-[#3b82f6]/[0.04]">
        <h2 className="text-4xl font-bold text-white mb-4">Ready to automate?</h2>
        <p className="text-zinc-400 mb-10">
          Let&apos;s find the highest-leverage system for your business.
        </p>
        <Button href="https://cal.com/emil-abdurahmanli">Book a Free Call</Button>
      </div>
    </section>
  )
}
