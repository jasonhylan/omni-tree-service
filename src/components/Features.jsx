import { useEffect, useRef } from 'react'
import { ScrollTrigger, gsap } from '../gsapUtils'
import DiagnosticShuffler from './DiagnosticShuffler'
import TelemetryTypewriter from './TelemetryTypewriter'
import CursorScheduler from './CursorScheduler'

export default function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    let ctx = null
    try {
      ctx = gsap.context(() => {
        try {
          gsap.utils.toArray('.feature-card').forEach((card) => {
            gsap.from(card, { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' } })
          })
        } catch (e) {}
      }, sectionRef)
    } catch (e) {}
    return () => { try { ctx?.revert() } catch (e) {} }
  }, [])

  return (
    <section id="services" ref={sectionRef} className="section-pad" style={{ background: '#0D0D12', maxWidth: '80rem', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A84C' }}>What We Do</span>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#FAF8F5', letterSpacing: '-0.03em', marginTop: '0.75rem', marginBottom: 0 }}>Tree Care, Elevated.</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        <div className="feature-card"><DiagnosticShuffler /></div>
        <div className="feature-card"><TelemetryTypewriter /></div>
        <div className="feature-card"><CursorScheduler /></div>
      </div>
    </section>
  )
}
