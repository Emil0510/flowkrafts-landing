import { render, screen } from '@testing-library/react'
import Services from '@/components/sections/Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders core service blocks from the template', () => {
    render(<Services />)
    expect(screen.getByText('Workflow Automation')).toBeInTheDocument()
    expect(screen.getAllByText('Customer Support').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Sales / CRM Automations').length).toBeGreaterThan(0)
    expect(screen.getByRole('heading', { name: /content creation/i })).toBeInTheDocument()
    expect(screen.getByText('All Tasks')).toBeInTheDocument()
  })
})
