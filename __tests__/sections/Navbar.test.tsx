import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '@/components/sections/Navbar'

describe('Navbar', () => {
  it('renders the FlowKrafts logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('Flow')).toBeInTheDocument()
    expect(screen.getByText('Krafts')).toBeInTheDocument()
  })

  it('renders the desktop CTA button', () => {
    render(<Navbar />)
    const links = screen.getAllByRole('link', { name: /book a free call/i })
    expect(links.length).toBeGreaterThan(0)
    expect(links[0]).toHaveAttribute('href', 'https://cal.com/emil-abdurahmanli')
  })

  it('toggles mobile menu on hamburger click', () => {
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
    fireEvent.click(toggle)
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
  })
})
