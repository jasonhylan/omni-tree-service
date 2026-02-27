import { useEffect, useRef, useState } from 'react'
import { gsap } from '../gsapUtils'

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const TIMES = ['8am', '10am', '12pm', '2pm', '4pm']

export default function CursorScheduler() {
  const cursorRef = useRef(null)
  const [selectedCell, setSelectedCell] = useState(null)
  const [saved, setSaved] = useState(false)
  const tlRef = useRef(null)

  useEffect(() => {
    const startLoop = () => {
      setSaved(false)
      setSelectedCell(null)
      if (!cursorRef.current) return

      try {
        const tl = gsap.timeline({ delay: 0.5 })
        tl.to(cursorRef.current, { x: 110, y: 25, duration: 0.9, ease: 'power2.inOut' })
          .call(() => setSelectedCell(9))
          .to(cursorRef.current, { scale: 0.85, duration: 0.12, ease: 'power2.out' })
          .to(cursorRef.current, { scale: 1, duration: 0.15, ease: 'back.out(2)' })
          .to(cursorRef.current, { x: 165, y: 25, duration: 0.7, ease: 'power2.inOut', delay: 0.4 })
          .call(() => setSelectedCell(10))
          .to(cursorRef.current, { scale: 0.85, duration: 0.12, ease: 'power2.out' })
          .to(cursorRef.current, { scale: 1, duration: 0.15, ease: 'back.out(2)' })
          .to(cursorRef.current, { x: 155, y: 95, duration: 0.9, ease: 'power2.inOut', delay: 0.5 })
          .to(cursorRef.current, { scale: 0.85, duration: 0.12, ease: 'power2.out' })
          .call(() => setSaved(true))
          .to(cursorRef.current, { scale: 1, duration: 0.15, ease: 'back.out(2)' })
          .to(cursorRef.current, { x: 0, y: 0, duration: 0.5, ease: 'power2.inOut', delay: 2.5 })
          .call(() => {
            setSaved(false)
            setSelectedCell(null)
            setTimeout(startLoop, 500)
          })
        tlRef.current = tl
      } catch (e) {
        console.warn('CursorScheduler anim:', e)
        setSelectedCell(9)
      }
    }
    startLoop()
    return () => { try { tlRef.current?.kill() } catch (e) {} }
  }, [])

  return (
    <div style={{ background: '#FAF8F5', borderRadius: '2rem', border: '1px solid rgba(201,168,76,0.1)', boxShadow: '0 4px 40px rgba(0,0,0,0.15)', overflow: 'hidden', padding: '2rem', minHeight: '340px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: 'auto' }}>
        <span style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.22em', marginBottom: '0.75rem', padding: '0.25rem 0.625rem', borderRadius: '999px', background: 'rgba(201,168,76,0.12)', color: '#C9A84C' }}>Scheduling</span>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, color: '#2A2A35', lineHeight: 1.3, letterSpacing: '-0.02em', margin: '0 0 0.5rem' }}>Complete Property Care</h3>
        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', color: 'rgba(42,42,53,0.6)', margin: 0 }}>Thorough cleanup and safe disposal after every service.</p>
      </div>
      <div style={{ marginTop: '1.5rem', position: 'relative' }}>
        <div ref={cursorRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 10, pointerEvents: 'none', width: 18, height: 18 }}>
          <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
            <path d="M2 2L2 14L5.5 10.5L8 16L10 15L7.5 9.5L12 9.5L2 2Z" fill="#0D0D12" stroke="white" strokeWidth="1"/>
          </svg>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '3px', marginBottom: '8px' }}>
          {DAYS.map((d, i) => <div key={i} style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.55rem', fontWeight: 600, color: 'rgba(42,42,53,0.4)', padding: '4px 0' }}>{d}</div>)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '3px' }}>
          {Array.from({ length: 35 }, (_, i) => (
            <div key={i} style={{ aspectRatio: '1', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 500, transition: 'all 0.2s', background: selectedCell === i ? '#C9A84C' : selectedCell !== null && Math.abs(i - selectedCell) <= 1 ? 'rgba(201,168,76,0.15)' : 'rgba(42,42,53,0.06)', color: selectedCell === i ? '#0D0D12' : 'rgba(42,42,53,0.5)', transform: selectedCell === i ? 'scale(1.1)' : 'scale(1)' }}>
              {i + 1 <= 28 ? i + 1 : ''}
            </div>
          ))}
        </div>
        {saved && (
          <div style={{ marginTop: '12px', padding: '8px 12px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22C55E', display: 'inline-block' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#22C55E', fontWeight: 500 }}>Appointment saved</span>
          </div>
        )}
      </div>
    </div>
  )
}
