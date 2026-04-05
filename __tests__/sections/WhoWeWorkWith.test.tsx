import { render, screen } from '@testing-library/react'
import WhoWeWorkWith from '@/components/sections/WhoWeWorkWith'

describe('WhoWeWorkWith', () => {
  it('renders the section heading', () => {
    render(<WhoWeWorkWith />)
    expect(screen.getByText('Who We Work With')).toBeInTheDocument()
  })

  it('renders all 3 client types', () => {
    render(<WhoWeWorkWith />)
    expect(screen.getByText('Consultants & Coaches')).toBeInTheDocument()
    expect(screen.getByText('Small Business Owners')).toBeInTheDocument()
    expect(screen.getByText('B2B Founders')).toBeInTheDocument()
  })

  it('renders each pain point', () => {
    render(<WhoWeWorkWith />)
    expect(screen.getByText(/drowning in manual follow-ups/i)).toBeInTheDocument()
    expect(screen.getByText(/running operations on spreadsheets/i)).toBeInTheDocument()
    expect(screen.getByText(/spending hours on content/i)).toBeInTheDocument()
  })
})
