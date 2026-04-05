import { render, screen } from '@testing-library/react'
import WhatWeDo from '@/components/sections/WhatWeDo'

describe('WhatWeDo', () => {
  it('renders the section heading', () => {
    render(<WhatWeDo />)
    expect(screen.getByText('What We Do')).toBeInTheDocument()
  })

  it('renders the body copy', () => {
    render(<WhatWeDo />)
    expect(
      screen.getByText(/we don't just consult\. we build, test and hand over working systems\./i)
    ).toBeInTheDocument()
  })
})
