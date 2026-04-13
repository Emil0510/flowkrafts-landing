'use client'

import { useEffect, useRef, useSyncExternalStore } from 'react'

function subscribeMotionPreference(cb: () => void) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  mq.addEventListener('change', cb)
  return () => mq.removeEventListener('change', cb)
}

function motionPreferenceSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

type Star = {
  x: number
  y: number
  r: number
  hue: number
  phase: number
  speed: number
  glow: boolean
}

function buildStars(width: number, height: number, count: number): Star[] {
  const stars: Star[] = []
  const area = width * height
  const n = Math.min(count, Math.max(140, Math.floor(area / 5800)))
  for (let i = 0; i < n; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.35 + 0.25,
      hue: 195 + Math.random() * 165,
      phase: Math.random() * Math.PI * 2,
      speed: 0.55 + Math.random() * 1.25,
      glow: Math.random() < 0.16,
    })
  }
  return stars
}

export default function HeroSkyBackground() {
  const reduceMotion = useSyncExternalStore(
    subscribeMotionPreference,
    motionPreferenceSnapshot,
    () => false,
  )
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])

  useEffect(() => {
    if (reduceMotion) return
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    const start = performance.now()

    const applySize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      if (w < 1 || h < 1) return
      const dpr = Math.min(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, 2)
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      starsRef.current = buildStars(w, h, 380)
    }

    applySize()
    const ro = new ResizeObserver(applySize)
    ro.observe(container)

    const frame = (now: number) => {
      const t = (now - start) / 1000
      const w = container.clientWidth
      const h = container.clientHeight
      ctx.clearRect(0, 0, w, h)

      for (const s of starsRef.current) {
        const tw = 0.5 + 0.5 * Math.sin(t * s.speed + s.phase)
        const baseA = s.glow ? 0.14 : 0.08
        const alpha = baseA + tw * (s.glow ? 0.3 : 0.2)

        const dx = Math.sin(t * 0.25 + s.phase) * 1.8
        const dy = Math.cos(t * 0.2 + s.phase * 1.1) * 1.8
        const x = s.x + dx
        const y = s.y + dy

        if (s.glow) {
          ctx.shadowBlur = 12 + tw * 10
          ctx.shadowColor = `hsla(${s.hue}, 75%, 62%, ${alpha * 0.9})`
        } else {
          ctx.shadowBlur = 0
        }

        ctx.fillStyle = `hsla(${s.hue}, 72%, 74%, ${alpha})`
        ctx.beginPath()
        ctx.arc(x, y, s.r + (s.glow ? tw * 0.35 : 0), 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.shadowBlur = 0
      raf = requestAnimationFrame(frame)
    }

    raf = requestAnimationFrame(frame)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [reduceMotion])

  if (reduceMotion) return null

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          background:
            'linear-gradient(180deg, rgba(30, 20, 70, 0.55) 0%, rgba(45, 15, 55, 0.28) 28%, transparent 62%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.42]"
        style={{
          background:
            'radial-gradient(ellipse 120% 70% at 50% -15%, rgba(129, 74, 200, 0.34) 0%, transparent 52%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.32]"
        style={{
          background:
            'radial-gradient(ellipse 90% 50% at 80% 20%, rgba(223, 122, 254, 0.26) 0%, transparent 45%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.26]"
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 15% 35%, rgba(56, 189, 248, 0.2) 0%, transparent 42%)',
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />
    </div>
  )
}
