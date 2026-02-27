// Safe GSAP utilities - static imports but wrapped safely
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function initScrollTrigger() {
  try {
    gsap.registerPlugin(ScrollTrigger)
    return true
  } catch (e) {
    return false
  }
}

export function safeContext(fn, scope) {
  try {
    return gsap.context(fn, scope)
  } catch (e) {
    return { revert: () => {} }
  }
}

export { gsap, ScrollTrigger }
