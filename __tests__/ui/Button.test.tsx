import { render, screen } from '@testing-library/react'
import Button from '@/components/ui/Button'

describe('Button', () => {
  it('renders children as link text', () => {
    render(<Button href="https://cal.com/emil-abdurahmanli">Book a Free Call</Button>)
    expect(screen.getByText('Book a Free Call')).toBeInTheDocument()
  })

  it('sets the correct href', () => {
    render(<Button href="https://cal.com/emil-abdurahmanli">Book a Free Call</Button>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://cal.com/emil-abdurahmanli')
  })

  it('opens in a new tab', () => {
    render(<Button href="https://cal.com/emil-abdurahmanli">Book a Free Call</Button>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
