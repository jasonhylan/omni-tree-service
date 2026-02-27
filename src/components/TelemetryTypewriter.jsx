import { useEffect, useRef, useState } from 'react'
import { gsap } from '../gsapUtils'

const MESSAGES = [
  'Arborist dispatched to Chesterfield...',
  'Canopy assessment complete...',
  'Crown reduction prescribed...',
  'Treatment plan activated...',
  'Root zone analysis underway...',
]

export default function TelemetryTypewriter() {
  const [msgIndex, setMsgIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const intervalRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const currentMsg = MESSAGES[msgIndex]
    let charIndex = 0
    setDisplayed('')
    setIsTyping(true)
    intervalRef.current = setInterval(() => {
      charIndex++
      setDisplayed(currentMsg.slice(0, charIndex))
      if (charIndex >= currentMsg.length) {
        clearInterval(intervalRef.current)
        setIsTyping(false)
        timeoutRef.current = setTimeout(() => setMsgIndex(prev => (prev + 1) % MESSAGES.length), 2200)
      }
    }, 45)
    return () => { clearInterval(intervalRef.current); clearTimeout(timeoutRef.current) }
  }, [msgIndex])

  return (
    <div style={{ background: '#FAF8F5', borderRadius: '2rem', border: '1px solid rgba(201,168,76,0.1)', boxShadow: '0 4px 40px rgba(0,0,0,0.15)', overflow: 'hidden', padding: '2rem', minHeight: '340px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: 'auto' }}>
        <span style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: '0.75rem', padding: '0.25rem 0.625rem', borderRadius: '999px', background: 'rgba(42,42,53,0.08)', color: '#2A2A35' }}>Field Operations</span>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, color: '#2A2A35', lineHeight: 1.3, letterSpacing: '-0.02em', margin: '0 0 0.5rem' }}>3 Certified Arborists</h3>
        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', color: 'rgba(42,42,53,0.6)', margin: 0 }}>ISA-certified professionals on staff year-round.</p>
      </div>
      <div style={{ marginTop: '1.5rem', background: '#0D0D12', borderRadius: '1.25rem', padding: '1.25rem', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', background: '#22C55E', display: 'inline-block', animation: 'pulse-dot 1.5s ease-in-out infinite' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(34,197,94,0.8)' }}>Live Feed</span>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)' }}>{String(msgIndex + 1).padStart(2, '0')}/{String(MESSAGES.length).padStart(2, '0')}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', minHeight: '2.5rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: '#C9A84C', flexShrink: 0, marginTop: '2px' }}>›</span>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'rgba(134,239,172,0.9)', lineHeight: 1.6, flex: 1, margin: 0 }}>
            {displayed}
            {isTyping && <span style={{ display: 'inline-block', width: '2px', height: '14px', background: '#C9A84C', marginLeft: '2px', verticalAlign: 'middle', animation: 'pulse-dot 0.6s steps(2) infinite' }} />}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '6px', marginTop: '1rem' }}>
          {MESSAGES.map((_, i) => (
            <span key={i} style={{ height: '2px', borderRadius: '1px', transition: 'all 0.3s', background: i === msgIndex ? '#C9A84C' : 'rgba(255,255,255,0.15)', width: i === msgIndex ? '1.5rem' : '0.5rem' }} />
          ))}
        </div>
      </div>
    </div>
  )
}
