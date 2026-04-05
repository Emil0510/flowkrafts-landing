import { render, screen } from '@testing-library/react'
import ServiceCard from '@/components/ui/ServiceCard'

const props = {
  icon: '⚙️',
  title: 'CRM System',
  description: 'For consultants and coaches.',
  tools: ['Notion', 'Bolt'],
  deliverables: ['Notion template', 'Training video'],
}

describe('ServiceCard', () => {
  it('renders the title', () => {
    render(<ServiceCard {...props} />)
    expect(screen.getByText('CRM System')).toBeInTheDocument()
  })

  it('renders all tools as badges', () => {
    render(<ServiceCard {...props} />)
    expect(screen.getByText('Notion')).toBeInTheDocument()
    expect(screen.getByText('Bolt')).toBeInTheDocument()
  })

  it('renders all deliverables', () => {
    render(<ServiceCard {...props} />)
    expect(screen.getByText('Notion template')).toBeInTheDocument()
    expect(screen.getByText('Training video')).toBeInTheDocument()
  })

  it('renders the icon', () => {
    render(<ServiceCard {...props} />)
    expect(screen.getByText('⚙️')).toBeInTheDocument()
  })
})
