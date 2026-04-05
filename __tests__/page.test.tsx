import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home page', () => {
  it('renders all major sections', () => {
    render(<Home />)
    // Hero
    expect(screen.getAllByText(/we build systems that work while you sleep/i).length).toBeGreaterThan(0)
    // Services
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    // How it works
    expect(screen.getByText('How It Works')).toBeInTheDocument()
    // Who we work with
    expect(screen.getByText('Who We Work With')).toBeInTheDocument()
    // CTA
    expect(screen.getByText('Ready to automate?')).toBeInTheDocument()
    // Footer
    expect(screen.getByText(/info@flowkrafts.com/i)).toBeInTheDocument()
  })
})
