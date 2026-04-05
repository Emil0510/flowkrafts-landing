import { render, screen } from '@testing-library/react'
import CTA from '@/components/sections/CTA'

describe('CTA', () => {
  it('renders the heading', () => {
    render(<CTA />)
    expect(screen.getByText('Ready to automate?')).toBeInTheDocument()
  })

  it('renders the subtext', () => {
    render(<CTA />)
    expect(
      screen.getByText(/let's find the highest-leverage system for your business/i)
    ).toBeInTheDocument()
  })

  it('renders a CTA link to cal.com', () => {
    render(<CTA />)
    const link = screen.getByRole('link', { name: /book a free call/i })
    expect(link).toHaveAttribute('href', 'https://cal.com/emil-abdurahmanli')
  })
})
