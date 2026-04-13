import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://flowkrafts.com'),
  title: 'FlowKrafts — Intelligent Automation for Modern Businesses',
  description:
    'FlowKrafts brings AI automation to your fingertips and streamlines work. AI solutions that take your business to the next level.',
  openGraph: {
    title: 'FlowKrafts — Intelligent Automation for Modern Businesses',
    description:
      'AI automation, workflow automation, AI assistants, and custom AI projects for modern businesses.',
    url: 'https://flowkrafts.com',
    siteName: 'FlowKrafts',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlowKrafts',
    description: 'Intelligent automation for modern businesses.',
  },
  alternates: {
    canonical: 'https://flowkrafts.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${figtree.className} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
