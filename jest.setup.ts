import '@testing-library/jest-dom'

jest.mock('@/components/sections/HeroSkyBackground', () => ({
  __esModule: true,
  default: () => null,
}))

const entryFor = (target: Element): IntersectionObserverEntry => ({
  isIntersecting: true,
  target,
  boundingClientRect: {} as DOMRectReadOnly,
  intersectionRatio: 1,
  intersectionRect: {} as DOMRectReadOnly,
  rootBounds: null,
  time: Date.now(),
})

globalThis.IntersectionObserver = class IntersectionObserverMock implements IntersectionObserver {
  readonly root: Element | null = null
  readonly rootMargin = ''
  readonly thresholds = [0]
  constructor(private readonly callback: IntersectionObserverCallback) {}
  disconnect() {}
  observe(target: Element) {
    queueMicrotask(() => this.callback([entryFor(target)], this))
  }
  takeRecords() {
    return []
  }
  unobserve() {}
} as unknown as typeof IntersectionObserver
