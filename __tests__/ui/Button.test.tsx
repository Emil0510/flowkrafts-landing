import { render, screen } from '@testing-library/react'
import Button from '@/components/ui/Button'
import { CAL_BOOKING_URL } from '@/lib/cal-booking'

describe('Button', () => {
  it('renders children as link text', () => {
    render(<Button href={CAL_BOOKING_URL}>Book a call</Button>)
    expect(screen.getByText('Book a call')).toBeInTheDocument()
  })

  it('sets the correct href for external URLs', () => {
    render(<Button href={CAL_BOOKING_URL}>Book a call</Button>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', CAL_BOOKING_URL)
  })

  it('opens external http links in a new tab', () => {
    render(<Button href={CAL_BOOKING_URL}>Book a call</Button>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('uses internal navigation for relative paths', () => {
    render(
      <Button href="/contact" external={false}>
        Contact
      </Button>,
    )
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/contact')
    expect(link).not.toHaveAttribute('target', '_blank')
  })
})
