import { render, screen } from '@testing-library/react'
import Hero from '@/components/sections/Hero'

describe('Hero', () => {
  it('renders the template headline', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { name: /intelligent automation for modern businesses/i }),
    ).toBeInTheDocument()
  })

  it('renders the FlowKrafts subcopy', () => {
    render(<Hero />)
    expect(screen.getByText(/flowkrafts brings ai automation/i)).toBeInTheDocument()
  })

  it('renders Get in touch and View services links', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /get in touch/i })).toHaveAttribute('href', '/contact')
    expect(screen.getByRole('link', { name: /view services/i })).toHaveAttribute('href', '/#services')
  })
})
