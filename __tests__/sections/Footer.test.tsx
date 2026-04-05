import { render, screen } from '@testing-library/react'
import Footer from '@/components/sections/Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByText('Flow')).toBeInTheDocument()
    expect(screen.getByText('Krafts')).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Footer />)
    expect(screen.getByText(/we build systems that work while you sleep/i)).toBeInTheDocument()
  })

  it('renders the email as a mailto link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /info@flowkrafts.com/i })
    expect(link).toHaveAttribute('href', 'mailto:info@flowkrafts.com')
  })

  it('renders the copyright notice', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 FlowKrafts/i)).toBeInTheDocument()
  })
})
