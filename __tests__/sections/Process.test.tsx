import { render, screen } from '@testing-library/react'
import Process from '@/components/sections/Process'

describe('Process', () => {
  it('renders the process section label and title', () => {
    render(<Process />)
    expect(screen.getByText('Our Process')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /our simple, smart, and scalable process/i }),
    ).toBeInTheDocument()
  })

  it('renders all four steps', () => {
    render(<Process />)
    expect(screen.getByText('Smart Analyzing')).toBeInTheDocument()
    expect(screen.getByText('AI Development')).toBeInTheDocument()
    expect(screen.getByText('Seamless Integration')).toBeInTheDocument()
    expect(screen.getByText('Continuous Optimization')).toBeInTheDocument()
  })
})
