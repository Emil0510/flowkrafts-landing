import { render, screen } from '@testing-library/react'
import CTA from '@/components/sections/CTA'
import { CAL_BOOKING_URL } from '@/lib/cal-booking'

describe('CTA', () => {
  it('renders the heading', () => {
    render(<CTA />)
    expect(screen.getByRole('heading', { name: /let ai do the work/i })).toBeInTheDocument()
  })

  it('renders the subtext', () => {
    render(<CTA />)
    expect(screen.getByText(/book a call today and start automating/i)).toBeInTheDocument()
  })

  it('renders a CTA link to Cal.com booking', () => {
    render(<CTA />)
    const link = screen.getByRole('link', { name: /book a free call/i })
    expect(link).toHaveAttribute('href', CAL_BOOKING_URL)
  })
})
