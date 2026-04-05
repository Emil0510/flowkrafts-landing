import { services } from '@/lib/services'

describe('services', () => {
  it('contains exactly 6 services', () => {
    expect(services).toHaveLength(6)
  })

  it('each service has required fields', () => {
    services.forEach((s) => {
      expect(s).toHaveProperty('icon')
      expect(s).toHaveProperty('title')
      expect(s).toHaveProperty('description')
      expect(s.tools.length).toBeGreaterThan(0)
      expect(s.deliverables.length).toBeGreaterThan(0)
    })
  })

  it('has the correct service titles in order', () => {
    expect(services.map((s) => s.title)).toEqual([
      'CRM System',
      'Order System',
      'Marketing Automation',
      'Visual & Video Production (AI-Automated)',
      'Text-Based Bot (GPT + RAG)',
      'Training & Onboarding System',
    ])
  })
})
