import { render, screen } from '@testing-library/react'
import Footer from '@/components/sections/Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getAllByText('FlowKrafts').length).toBeGreaterThan(0)
  })

  it('renders the tagline', () => {
    render(<Footer />)
    expect(screen.getByText(/automate smarter, optimize faster/i)).toBeInTheDocument()
  })

  it('renders newsletter signup', () => {
    render(<Footer />)
    expect(screen.getByLabelText(/email for newsletter/i)).toBeInTheDocument()
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/© all right reserved/i)).toBeInTheDocument()
  })
})
