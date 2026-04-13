export default function CardShell({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-[18px] border border-[rgb(34,34,34)] bg-[rgba(13,13,13,0.8)] p-5 ${className}`}
    >
      {children}
    </div>
  )
}
