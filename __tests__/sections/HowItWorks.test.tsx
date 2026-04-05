import { render, screen } from '@testing-library/react'
import HowItWorks from '@/components/sections/HowItWorks'

describe('HowItWorks', () => {
  it('renders the section heading', () => {
    render(<HowItWorks />)
    expect(screen.getByText('How It Works')).toBeInTheDocument()
  })

  it('renders all 3 steps', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Discover')).toBeInTheDocument()
    expect(screen.getByText('Build')).toBeInTheDocument()
    expect(screen.getByText('Hand Over')).toBeInTheDocument()
  })
})
