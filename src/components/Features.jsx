import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Card 1: Before/After Slider
function BeforeAfterCard() {
  const [sliderPos, setSliderPos] = useState(65)
  const isDragging = useRef(false)
  const containerRef = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    // Auto animate from 70/30 to 30/70 loop
    let pos = 65
    let dir = -1
    animRef.current = setInterval(() => {
      pos += dir * 0.4
      if (pos <= 30) dir = 1
      if (pos >= 70) dir = -1
      setSliderPos(pos)
    }, 30)
    return () => clearInterval(animRef.current)
  }, [])

  const handleMouseDown = (e) => {
    isDragging.current = true
    clearInterval(animRef.current)
  }

  const handleMouseMove = (e) => {
    if (!isDragging.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width * 100
    setSliderPos(Math.max(15, Math.min(85, x)))
  }

  const handleMouseUp = () => { isDragging.current = false }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1.5rem' }}>
      {/* Header */}
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.18em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>01 — EXPERTISE</div>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.35rem', color: 'var(--navy)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>20+ Years of Expertise</h3>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: '#6B6460', lineHeight: 1.6, marginTop: '0.5rem' }}>Two decades of trusted tree care across Greater St. Louis.</p>
      </div>

      {/* Slider */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          position: 'relative',
          flex: 1,
          minHeight: '180px',
          borderRadius: '1.25rem',
          overflow: 'hidden',
          cursor: 'ew-resize',
          userSelect: 'none',
          border: '1px solid rgba(184,145,58,0.15)',
        }}
      >
        {/* "After" side (right, full width) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 50%, #a5d6a7 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: '1.25rem',
        }}>
          {/* Tree illustration - After */}
          <svg width="100" height="140" viewBox="0 0 100 140" style={{ position: 'absolute', right: '10%', bottom: 0, opacity: 0.7 }}>
            <rect x="44" y="90" width="12" height="50" fill="#795548" />
            <ellipse cx="50" cy="60" rx="38" ry="42" fill="#4CAF50" />
            <ellipse cx="50" cy="55" rx="28" ry="32" fill="#66BB6A" />
            <ellipse cx="50" cy="48" rx="18" ry="22" fill="#81C784" />
          </svg>
          <div style={{
            position: 'absolute',
            bottom: '0.75rem',
            right: '0.75rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            color: '#2E7D32',
            background: 'rgba(255,255,255,0.85)',
            padding: '0.3rem 0.7rem',
            borderRadius: '999px',
            textTransform: 'uppercase',
          }}>
            After
          </div>
        </div>

        {/* "Before" side (left, clipped) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
          background: 'linear-gradient(135deg, #efebe9 0%, #d7ccc8 50%, #bcaaa4 100%)',
          display: 'flex',
          alignItems: 'flex-end',
        }}>
          {/* Overgrown tree - Before */}
          <svg width="100" height="140" viewBox="0 0 100 140" style={{ position: 'absolute', left: '10%', bottom: 0, opacity: 0.65 }}>
            <rect x="44" y="95" width="12" height="45" fill="#5D4037" />
            {/* Scraggly branches */}
            <line x1="50" y1="80" x2="20" y2="50" stroke="#5D4037" strokeWidth="4" />
            <line x1="50" y1="70" x2="78" y2="42" stroke="#5D4037" strokeWidth="3.5" />
            <line x1="35" y1="60" x2="12" y2="38" stroke="#5D4037" strokeWidth="2.5" />
            <line x1="65" y1="55" x2="88" y2="30" stroke="#5D4037" strokeWidth="2.5" />
            <ellipse cx="25" cy="45" rx="16" ry="14" fill="#8D6E63" opacity="0.7" />
            <ellipse cx="76" cy="38" rx="15" ry="13" fill="#795548" opacity="0.7" />
            <ellipse cx="50" cy="60" rx="30" ry="28" fill="#9E9E9E" opacity="0.55" />
          </svg>
          <div style={{
            position: 'absolute',
            bottom: '0.75rem',
            left: '0.75rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            color: '#4E342E',
            background: 'rgba(255,255,255,0.85)',
            padding: '0.3rem 0.7rem',
            borderRadius: '999px',
            textTransform: 'uppercase',
          }}>
            Before
          </div>
        </div>

        {/* Divider Line */}
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: `${sliderPos}%`,
          width: '2px',
          background: 'white',
          boxShadow: '0 0 12px rgba(255,255,255,0.8)',
          zIndex: 3,
          transform: 'translateX(-50%)',
        }}>
          {/* Handle */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'white',
            boxShadow: '0 2px 16px rgba(0,0,0,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path d="M1 5H15M5 1L1 5L5 9M11 1L15 5L11 9" stroke="#B8913A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#9E9E9E', letterSpacing: '0.08em' }}>DRAG TO COMPARE · EST. 2003</p>
    </div>
  )
}

// Card 2: Service Area Map
function ServiceAreaCard() {
  const svgRef = useRef(null)
  const dotsRef = useRef([])

  const locations = [
    { name: 'Ellisville', x: 42, y: 58 },
    { name: 'Wildwood', x: 22, y: 45 },
    { name: 'Chesterfield', x: 55, y: 38 },
    { name: 'Ballwin', x: 38, y: 68 },
    { name: 'Creve Coeur', x: 68, y: 30 },
    { name: 'Clayton', x: 80, y: 50 },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      dotsRef.current.forEach((dotGroup, i) => {
        if (!dotGroup) return
        const dot = dotGroup.querySelector('.dot-core')
        const ring = dotGroup.querySelector('.dot-ring')

        gsap.fromTo(dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            delay: i * 0.18,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: svgRef.current,
              start: 'top 80%',
            }
          }
        )

        gsap.fromTo(ring,
          { scale: 0, opacity: 0.6 },
          {
            scale: 3.5,
            opacity: 0,
            duration: 1.8,
            delay: i * 0.18 + 0.4,
            ease: 'power2.out',
            repeat: -1,
            repeatDelay: 1.5,
            scrollTrigger: {
              trigger: svgRef.current,
              start: 'top 80%',
            }
          }
        )
      })
    }, svgRef)

    return () => ctx.revert()
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1.5rem' }}>
      {/* Header */}
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.18em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>02 — COVERAGE</div>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.35rem', color: 'var(--navy)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>3 Certified Arborists</h3>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: '#6B6460', lineHeight: 1.6, marginTop: '0.5rem' }}>ISA-certified professionals on staff year-round.</p>
      </div>

      {/* Map */}
      <div style={{ flex: 1, position: 'relative', minHeight: '180px' }}>
        <svg
          ref={svgRef}
          viewBox="0 0 120 100"
          style={{ width: '100%', height: '100%', maxHeight: '200px' }}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Region blob */}
          <path
            d="M15,25 Q8,35 12,55 Q16,72 25,80 Q38,90 55,88 Q72,86 85,78 Q98,68 102,52 Q106,36 98,22 Q90,8 73,6 Q56,4 38,8 Q22,12 15,25 Z"
            fill="rgba(27,42,74,0.06)"
            stroke="rgba(27,42,74,0.18)"
            strokeWidth="0.8"
          />

          {/* Dots */}
          {locations.map((loc, i) => (
            <g
              key={loc.name}
              ref={el => dotsRef.current[i] = el}
              transform={`translate(${loc.x}, ${loc.y})`}
            >
              <circle className="dot-ring" r="4" fill="none" stroke="var(--gold)" strokeWidth="1.5" style={{ transformOrigin: 'center' }} />
              <circle className="dot-core" r="3.5" fill="var(--gold)" style={{ transformOrigin: 'center' }} />
              <text x="6" y="1" style={{ fontSize: '5.5px', fontFamily: 'var(--font-sans)', fill: 'var(--navy)', fontWeight: 600 }}>{loc.name}</text>
            </g>
          ))}
        </svg>
      </div>

      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#9E9E9E', letterSpacing: '0.08em' }}>SERVING GREATER ST. LOUIS &amp; SURROUNDING AREAS</p>
    </div>
  )
}

// Card 3: Availability Checker
function AvailabilityCard() {
  const cursorRef = useRef(null)
  const animatingRef = useRef(false)
  const [selectedDay, setSelectedDay] = useState(null)
  const [clickedCTA, setClickedCTA] = useState(false)

  const days = [
    { label: 'M', available: true },
    { label: 'T', available: false },
    { label: 'W', available: true },
    { label: 'T', available: false },
    { label: 'F', available: true },
    { label: 'S', available: true },
  ]

  const dayRefs = useRef([])
  const btnRef = useRef(null)

  useEffect(() => {
    let timeout1, timeout2, timeout3, timeout4, timeout5

    const runAnimation = () => {
      setSelectedDay(null)
      setClickedCTA(false)

      // Move cursor to Wednesday (index 2)
      timeout1 = setTimeout(() => {
        const dayEl = dayRefs.current[2]
        if (dayEl && cursorRef.current) {
          const rect = dayEl.getBoundingClientRect()
          const containerRect = dayEl.closest('[data-avail-container]')?.getBoundingClientRect()
          if (containerRect) {
            const x = rect.left - containerRect.left + rect.width / 2
            const y = rect.top - containerRect.top + rect.height / 2
            gsap.to(cursorRef.current, {
              x: x - 8,
              y: y - 8,
              duration: 0.8,
              ease: 'power2.inOut',
            })
          }
        }
      }, 800)

      // Click day
      timeout2 = setTimeout(() => {
        setSelectedDay(2)
        if (cursorRef.current) {
          gsap.to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        }
      }, 1800)

      // Move cursor to button
      timeout3 = setTimeout(() => {
        const btnEl = btnRef.current
        if (btnEl && cursorRef.current) {
          const rect = btnEl.getBoundingClientRect()
          const containerRect = btnEl.closest('[data-avail-container]')?.getBoundingClientRect()
          if (containerRect) {
            const x = rect.left - containerRect.left + rect.width / 2
            const y = rect.top - containerRect.top + rect.height / 2
            gsap.to(cursorRef.current, {
              x: x - 8,
              y: y - 8,
              duration: 0.9,
              ease: 'power2.inOut',
            })
          }
        }
      }, 2800)

      // Click CTA
      timeout4 = setTimeout(() => {
        setClickedCTA(true)
        if (cursorRef.current) {
          gsap.to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        }
      }, 3900)

      // Reset
      timeout5 = setTimeout(() => {
        setSelectedDay(null)
        setClickedCTA(false)
        if (cursorRef.current) {
          gsap.set(cursorRef.current, { x: -20, y: -20 })
        }
        runAnimation()
      }, 5500)
    }

    const startTimeout = setTimeout(runAnimation, 500)

    return () => {
      clearTimeout(startTimeout)
      clearTimeout(timeout1)
      clearTimeout(timeout2)
      clearTimeout(timeout3)
      clearTimeout(timeout4)
      clearTimeout(timeout5)
    }
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1.5rem' }}>
      {/* Header */}
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.18em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>03 — AVAILABILITY</div>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.35rem', color: 'var(--navy)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Complete Property Care</h3>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: '#6B6460', lineHeight: 1.6, marginTop: '0.5rem' }}>Thorough cleanup after every service — your yard left pristine.</p>
      </div>

      {/* Checker UI */}
      <div data-avail-container="true" style={{ flex: 1, position: 'relative', minHeight: '160px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {/* Animated cursor */}
        <div
          ref={cursorRef}
          style={{
            position: 'absolute',
            width: '16px',
            height: '16px',
            zIndex: 10,
            pointerEvents: 'none',
            transform: 'translate(-20px, -20px)',
          }}
        >
          <svg viewBox="0 0 16 16" fill="none">
            <path d="M1 1L14 6L8 8L6 14L1 1Z" fill="var(--navy)" stroke="white" strokeWidth="1" />
          </svg>
        </div>

        {/* Week label */}
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#9E9E9E', letterSpacing: '0.1em' }}>NEXT WEEK — CHECK AVAILABILITY</div>

        {/* Day grid */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {days.map((day, i) => (
            <div
              key={i}
              ref={el => dayRefs.current[i] = el}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.6rem 0.3rem',
                borderRadius: '0.75rem',
                border: `2px solid ${selectedDay === i ? 'var(--gold)' : day.available ? 'rgba(76,175,80,0.25)' : 'rgba(0,0,0,0.08)'}`,
                background: selectedDay === i ? 'rgba(184,145,58,0.12)' : day.available ? 'rgba(76,175,80,0.06)' : 'rgba(0,0,0,0.03)',
                transition: 'all 0.25s ease',
                cursor: day.available ? 'pointer' : 'default',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 600,
                color: selectedDay === i ? 'var(--gold)' : day.available ? 'var(--navy)' : '#BDBDBD',
                letterSpacing: '0.05em',
              }}>
                {day.label}
              </span>
              <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: selectedDay === i ? 'var(--gold)' : day.available ? '#4CAF50' : '#E0E0E0',
                transition: 'background 0.25s ease',
              }} />
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6rem',
                color: day.available ? '#4CAF50' : '#BDBDBD',
                fontWeight: 600,
              }}>
                {day.available ? 'OPEN' : 'FULL'}
              </span>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <button
          ref={btnRef}
          style={{
            padding: '0.75rem 1.25rem',
            borderRadius: '9999px',
            border: 'none',
            background: clickedCTA ? 'var(--navy)' : 'var(--gold)',
            color: 'white',
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.02em',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            width: '100%',
          }}
        >
          {clickedCTA ? '✓ Request Sent!' : 'Get Your Free Estimate'}
        </button>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#4CAF50', letterSpacing: '0.08em' }}>● AVAILABLE</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#BDBDBD', letterSpacing: '0.08em' }}>● BOOKED</span>
        </div>
      </div>
    </div>
  )
}

// Main Features section
export default function Features() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            delay: i * 0.15,
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
            }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="features"
      ref={sectionRef}
      style={{
        background: 'var(--linen)',
        padding: '7rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ marginBottom: '3.5rem', maxWidth: '500px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            PROOF OF WORK
          </div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'var(--navy)', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            Why homeowners trust Omni
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: '#6B6460', marginTop: '0.75rem', lineHeight: 1.65 }}>
            20 years of honest work, certified experts, and thorough cleanup every time.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          alignItems: 'stretch',
        }}>
          {[BeforeAfterCard, ServiceAreaCard, AvailabilityCard].map((CardComponent, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              style={{
                background: 'white',
                borderRadius: '2rem',
                padding: '1.75rem',
                border: '1px solid rgba(184,145,58,0.12)',
                boxShadow: '0 4px 24px rgba(27,42,74,0.06), 0 1px 4px rgba(0,0,0,0.04)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                opacity: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(27,42,74,0.1), 0 2px 8px rgba(0,0,0,0.06)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(27,42,74,0.06), 0 1px 4px rgba(0,0,0,0.04)'
              }}
            >
              <CardComponent />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
