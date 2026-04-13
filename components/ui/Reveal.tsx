'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Extra delay after the block enters the viewport (ms) */
  delayMs?: number
}

export default function Reveal({ children, className = '', delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const ob = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            timeoutId = setTimeout(() => setVisible(true), delayMs)
            ob.disconnect()
            break
          }
        }
      },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' },
    )

    ob.observe(el)
    return () => {
      ob.disconnect()
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [delayMs])

  return (
    <div
      ref={ref}
      className={`xtract-reveal ${visible ? 'xtract-reveal-visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  )
}
