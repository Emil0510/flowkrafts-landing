import { render, screen } from '@testing-library/react'
import Services from '@/components/sections/Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders all 6 service cards', () => {
    render(<Services />)
    expect(screen.getByText('CRM System')).toBeInTheDocument()
    expect(screen.getByText('Order System')).toBeInTheDocument()
    expect(screen.getByText('Marketing Automation')).toBeInTheDocument()
    expect(screen.getByText('Visual & Video Production (AI-Automated)')).toBeInTheDocument()
    expect(screen.getByText('Text-Based Bot (GPT + RAG)')).toBeInTheDocument()
    expect(screen.getByText('Training & Onboarding System')).toBeInTheDocument()
  })
})
