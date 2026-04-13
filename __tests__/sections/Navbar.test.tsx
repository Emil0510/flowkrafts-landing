import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '@/components/sections/Navbar'
import { CAL_BOOKING_URL } from '@/lib/cal-booking'

describe('Navbar', () => {
  it('renders the FlowKrafts logo text', () => {
    render(<Navbar />)
    expect(screen.getAllByText('FlowKrafts').length).toBeGreaterThan(0)
  })

  it('renders Book a call links to the project Cal.com URL', () => {
    render(<Navbar />)
    const links = screen.getAllByRole('link', { name: /book a call/i })
    expect(links.length).toBeGreaterThan(0)
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', CAL_BOOKING_URL)
    })
  })

  it('toggles mobile menu on hamburger click', () => {
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
    fireEvent.click(toggle)
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
  })
})
