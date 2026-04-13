const benefits = [
  {
    title: 'Increased Productivity',
    body: 'Gain actionable insights with AI-driven analytics to improve decision-making and strategy.',
  },
  {
    title: 'Better Customer Experience',
    body: 'Personalized AI interactions improve response times, customer engagement, and overall satisfaction.',
  },
  {
    title: '24/7 Availability',
    body: 'AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.',
  },
  {
    title: 'Cost Reduction',
    body: 'AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.',
  },
  {
    title: 'Data-Driven Insights',
    body: 'Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.',
  },
  {
    title: 'Scalability & Growth',
    body: 'AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.',
  },
]

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="xtract-section scroll-mt-24 border-t border-[rgb(34,34,34)] bg-[rgb(0,0,0)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <p className="xtract-badge mx-auto mb-6 block w-fit">Benefits</p>
        <h2 className="xtract-h2 mx-auto mb-4 max-w-2xl text-center text-white">
          The Key Benefits of AI for Your Business Growth
        </h2>
        <p className="xtract-body-xxl mx-auto mb-14 max-w-2xl text-center">
          Discover how AI automation enhances efficiency, reduces costs, and drives business growth
          with smarter, faster processes.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="xtract-lift-hover rounded-[18px] border border-[rgb(34,34,34)] bg-[rgba(13,13,13,0.8)] p-6 transition-colors hover:border-[rgb(129,74,200)]/40"
            >
              <h3 className="xtract-card-title mb-3 text-white">{b.title}</h3>
              <p className="xtract-card-content">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
