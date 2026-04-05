export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-xl font-bold">
            <span className="text-white">Flow</span>
            <span className="text-[#3b82f6]">Krafts</span>
          </p>
          <p className="text-zinc-500 text-sm mt-1">We build systems that work while you sleep</p>
        </div>
        <a
          href="mailto:info@flowkrafts.com"
          className="text-zinc-400 text-sm hover:text-white transition-colors"
        >
          info@flowkrafts.com
        </a>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-white/[0.04]">
        <p className="text-zinc-600 text-xs text-center">
          © 2026 FlowKrafts. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
