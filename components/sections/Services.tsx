import ServiceCard from '@/components/ui/ServiceCard'
import { services } from '@/lib/services'

export default function Services() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Our Services</h2>
        <p className="text-zinc-400 text-center mb-16">Six systems. Real deliverables. No fluff.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
