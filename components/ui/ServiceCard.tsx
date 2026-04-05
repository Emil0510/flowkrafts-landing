interface ServiceCardProps {
  icon: string
  title: string
  description: string
  tools: string[]
  deliverables: string[]
}

export default function ServiceCard({ icon, title, description, tools, deliverables }: ServiceCardProps) {
  return (
    <div className="border border-white/[0.08] rounded-xl p-6 bg-white/[0.03] transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 flex flex-col gap-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-zinc-400 text-sm">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span key={tool} className="text-xs bg-white/10 text-zinc-300 px-2 py-1 rounded-md">
            {tool}
          </span>
        ))}
      </div>
      <ul className="space-y-1.5">
        {deliverables.map((item) => (
          <li key={item} className="text-xs text-zinc-500 flex items-start gap-1.5">
            <span className="text-[#3b82f6] mt-0.5 shrink-0">→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
