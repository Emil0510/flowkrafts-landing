import Button from '@/components/ui/Button'
import HeroSkyBackground from '@/components/sections/HeroSkyBackground'

export default function Hero() {
  return (
    <section className="relative min-h-[64vh] overflow-hidden bg-[rgb(0,0,0)] scroll-mt-0 sm:min-h-[70vh] md:min-h-[62vh]">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
        style={{ background: 'rgb(0, 0, 0)' }}
      />
      <HeroSkyBackground />
      <div
        className="xtract-float-slow pointer-events-none absolute left-1/2 top-1/2 z-[2] opacity-60"
        aria-hidden
      >
        <div
          className="absolute left-1/2 top-1/2 h-[406px] w-[406px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
          style={{
            background:
              'radial-gradient(circle, rgba(129, 74, 200, 0.45) 0%, rgba(223, 122, 254, 0.2) 50%, transparent 70%)',
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 z-[1] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[60px]"
          style={{
            background:
              'radial-gradient(circle, rgba(223, 122, 254, 0.35) 0%, rgba(129, 74, 200, 0.15) 55%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-[3] mx-auto flex max-w-[1200px] flex-col items-center gap-[22px] px-10 pb-[18px] pt-[110px] text-center sm:pb-[22px] sm:pt-[120px] md:pb-[6px] md:pt-[86px]">
        <span className="xtract-hero-entrance xtract-hero-entrance--1 xtract-badge text-[rgb(255,255,255)]">
          New
        </span>
        <h1 className="xtract-hero-entrance xtract-hero-entrance--2 xtract-h1 max-w-[900px] text-[rgb(255,255,255)]">
          Intelligent Automation for Modern Businesses.
        </h1>
        <p className="xtract-hero-entrance xtract-hero-entrance--3 xtract-body-xxl max-w-[600px]">
          FlowKrafts brings AI automation to your fingertips and streamlines your work.
        </p>
        <div className="xtract-hero-entrance xtract-hero-entrance--4 flex flex-col items-center justify-center gap-[15px] px-0.5 sm:flex-row">
          <Button href="/contact" variant="primary">
            Get in touch
          </Button>
          <Button href="/#services" variant="secondary">
            View services
          </Button>
        </div>
      </div>
    </section>
  )
}
