const clients = [
  {
    icon: '💼',
    type: 'Consultants & Coaches',
    pain: 'Drowning in manual follow-ups and scattered client data.',
  },
  {
    icon: '🏪',
    type: 'Small Business Owners',
    pain: 'Running operations on spreadsheets and WhatsApp groups.',
  },
  {
    icon: '🚀',
    type: 'B2B Founders',
    pain: 'Spending hours on content and outreach that should run itself.',
  },
]

export default function WhoWeWorkWith() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-16">Who We Work With</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clients.map((client) => (
            <div
              key={client.type}
              className="border border-white/[0.08] rounded-xl p-6 bg-white/[0.03] text-center"
            >
              <div className="text-4xl mb-4">{client.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{client.type}</h3>
              <p className="text-zinc-400 text-sm">{client.pain}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
