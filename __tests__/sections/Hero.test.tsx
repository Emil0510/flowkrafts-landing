import { render, screen } from '@testing-library/react'
import Hero from '@/components/sections/Hero'

describe('Hero', () => {
  it('renders the tagline', () => {
    render(<Hero />)
    expect(screen.getByText(/we build systems that work while you sleep/i)).toBeInTheDocument()
  })

  it('renders the FlowKrafts label', () => {
    render(<Hero />)
    expect(screen.getByText('FlowKrafts')).toBeInTheDocument()
  })

  it('renders a CTA link to cal.com', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /book a free call/i })
    expect(link).toHaveAttribute('href', 'https://cal.com/emil-abdurahmanli')
  })
})
