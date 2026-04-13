import { render, screen, within } from '@testing-library/react'
import ContactPage from '@/app/contact/page'

describe('Contact page', () => {
  it('renders the contact section, form, and book a call action', () => {
    render(<ContactPage />)
    expect(screen.getByRole('heading', { name: /get in touch with us/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit form/i })).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(within(main).getByRole('link', { name: /book a call/i })).toHaveAttribute(
      'href',
      expect.stringContaining('cal.com'),
    )
    expect(screen.getByText('info@flowkrafts.com')).toBeInTheDocument()
  })
})
