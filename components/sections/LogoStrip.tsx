const placeholderLogos = Array.from({ length: 12 }, (_, i) => `Brand ${i + 1}`)

export default function LogoStrip() {
  return (
    <section
      className="w-full overflow-hidden border-y border-[rgb(34,34,34)] bg-[rgb(0,0,0)] py-[28px]"
      aria-label="Trusted by logos"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-[25px] px-10">
        <p className="xtract-body-l text-center">Over 50+ business trust us</p>
        <div className="relative h-[50px] w-full max-w-[700px] overflow-hidden">
          <div className="xtract-marquee-track items-center">
            {[...placeholderLogos, ...placeholderLogos].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="h-10 shrink-0 rounded-md border border-[rgb(34,34,34)] bg-[rgba(255,255,255,0.05)] px-6 py-2 text-xs font-medium text-[rgba(255,255,255,0.75)]"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
