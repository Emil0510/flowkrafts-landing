import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://flowkrafts.com'),
  title: 'FlowKrafts — We build systems that work while you sleep',
  description:
    'AI automation agency. We build, test and hand over working systems for consultants, founders and small businesses.',
  openGraph: {
    title: 'FlowKrafts — We build systems that work while you sleep',
    description: 'AI automation agency. We build, test and hand over working systems.',
    url: 'https://flowkrafts.com',
    siteName: 'FlowKrafts',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlowKrafts',
    description: 'AI automation agency. We build systems that work while you sleep.',
  },
  alternates: {
    canonical: 'https://flowkrafts.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
