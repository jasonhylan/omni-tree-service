import { useEffect, useRef, useState } from 'react'
import { gsap } from '../gsapUtils'

const DIAGNOSES = ['Disease Diagnosis', 'Risk Assessment', 'Growth Analysis']
const CARD_STYLES = [
  { bg: '#0D0D12', color: '#FAF8F5' },
  { bg: '#2A2A35', color: '#C9A84C' },
  { bg: '#C9A84C', color: '#0D0D12' },
]

export default function DiagnosticShuffler() {
  const [active, setActive] = useState(0)
  const cardsRef = useRef([])

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % DIAGNOSES.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return
      const offset = (i - active + DIAGNOSES.length) % DIAGNOSES.length
      const y = offset === 0 ? 0 : offset === 1 ? 18 : 36
      const scale = offset === 0 ? 1 : offset === 1 ? 0.96 : 0.92
      const zIndex = offset === 0 ? 3 : offset === 1 ? 2 : 1
      const opacity = offset === 0 ? 1 : offset === 1 ? 0.65 : 0.3
      try {
        gsap.to(card, { y, scale, zIndex, opacity, duration: 0.55, ease: 'back.out(1.4)' })
      } catch (e) {
        card.style.transform = `translateY(${y}px) scale(${scale})`
        card.style.opacity = opacity
        card.style.zIndex = zIndex
      }
    })
  }, [active])

  return (
    <div style={{ background: '#FAF8F5', borderRadius: '2rem', border: '1px solid rgba(201,168,76,0.1)', boxShadow: '0 4px 40px rgba(0,0,0,0.15)', overflow: 'hidden', padding: '2rem', minHeight: '340px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: 'auto' }}>
        <span style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: '0.75rem', padding: '0.25rem 0.625rem', borderRadius: '999px', background: 'rgba(201,168,76,0.12)', color: '#C9A84C' }}>Diagnostics</span>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, color: '#2A2A35', lineHeight: 1.3, letterSpacing: '-0.02em', margin: '0 0 0.5rem' }}>20+ Years of Expertise</h3>
        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', color: 'rgba(42,42,53,0.6)', margin: 0 }}>Two decades of trusted tree care across Greater St. Louis.</p>
      </div>
      <div style={{ position: 'relative', marginTop: '2rem', height: '64px' }}>
        {DIAGNOSES.map((label, i) => (
          <div key={label} ref={el => cardsRef.current[i] = el} style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0.875rem 1.25rem', borderRadius: '1rem', background: CARD_STYLES[i].bg, opacity: i === 0 ? 1 : 0.3, zIndex: 3 - i }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 600, color: CARD_STYLES[i].color }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
