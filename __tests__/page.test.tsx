import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home page', () => {
  it('renders all major sections on the home page', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', { name: /intelligent automation for modern businesses/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/over 50\+ business trust us/i)).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /integration timeline/i })).toBeInTheDocument()
    expect(screen.getByText('Case Studies')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /the key benefits of ai for your business growth/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /why businesses love our ai solutions/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /we've got the answers you're looking for/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /let ai do the work/i })).toBeInTheDocument()
    expect(screen.getAllByText('FlowKrafts').length).toBeGreaterThan(0)
  })
})
