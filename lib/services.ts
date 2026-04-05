export interface Service {
  icon: string
  title: string
  description: string
  tools: string[]
  deliverables: string[]
}

export const services: Service[] = [
  {
    icon: '⚙️',
    title: 'CRM System',
    description:
      'For consultants, coaches and sales teams who need a simple client pipeline without bloated CRM tools.',
    tools: ['Notion', 'Bolt'],
    deliverables: ['Notion/Bolt template', 'Pipeline diagram', 'Training video'],
  },
  {
    icon: '📦',
    title: 'Order System',
    description:
      'For restaurants, boutique shops and small e-commerce — automated order intake, confirmation and email notifications.',
    tools: ['Bolt', 'N8N'],
    deliverables: ['Form link', 'Flow diagram', 'Demo video'],
  },
  {
    icon: '📣',
    title: 'Marketing Automation',
    description:
      'For B2B founders on LinkedIn or email — post calendars, cold email sequences and content generation on autopilot.',
    tools: ['Notion', 'Apollo/Instantly', 'GPT'],
    deliverables: ['Content templates', 'Email sequence', 'Auto-publish plan'],
  },
  {
    icon: '🎬',
    title: 'Visual & Video Production (AI-Automated)',
    description:
      'For influencer agencies and content consultants — automated image/video generation and publishing workflows.',
    tools: ['Fal.ai', 'N8N'],
    deliverables: ['Prompt templates', 'Automated output system', 'Demo video'],
  },
  {
    icon: '🤖',
    title: 'Text-Based Bot (GPT + RAG)',
    description:
      'For educators, product owners and support teams — a chatbot that answers questions from your own documents.',
    tools: ['GPT', 'RAG architecture'],
    deliverables: ['Embedded bot', 'Demo', 'PDF upload instructions'],
  },
  {
    icon: '🎓',
    title: 'Training & Onboarding System',
    description:
      'For any service business with a client onboarding process — video series, quizzes and automated follow-up reminders.',
    tools: ['Loom', 'Notion', 'Email automation'],
    deliverables: ['Training flow', 'Email sequence', 'Onboarding page design'],
  },
]
