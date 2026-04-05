import Link from 'next/link'

interface ButtonProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function Button({ href, children, className }: ButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block px-6 py-3 rounded-lg font-semibold text-sm bg-[#3b82f6] text-white transition-all duration-200 hover:bg-blue-500${className ? ` ${className}` : ''}`}
    >
      {children}
    </Link>
  )
}
