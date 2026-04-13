import Link from 'next/link'

interface ButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  /** Opens in new tab; omit or false for internal navigation */
  external?: boolean
  /** Framer CTA Button: primary = rgb(129, 74, 200), secondary = card bg */
  variant?: 'primary' | 'secondary' | 'ghost'
}

export default function Button({
  href,
  children,
  className = '',
  external,
  variant = 'primary',
}: ButtonProps) {
  const isExternal =
    external ??
    (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:'))

  const base =
    'inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-200'
  const variants = {
    primary:
      'bg-[rgb(129,74,200)] text-white hover:bg-[rgb(145,95,212)] shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]',
    secondary:
      'bg-[rgba(13,13,13,0.8)] text-white border border-[rgb(34,34,34)] hover:bg-[rgba(22,22,22,0.95)]',
    ghost: 'text-white hover:bg-[rgba(255,255,255,0.05)]',
  }

  const cls = `${base} ${variants[variant]} ${className}`.trim()

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  )
}
