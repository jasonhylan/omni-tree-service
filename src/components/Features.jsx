import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Card 1: 20+ Years of Experience — Animated counter + timeline milestones
function ExperienceCard() {
  const [count, setCount] = useState(0)
  const cardRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let start = 0
          const end = 20
          const duration = 2000
          const stepTime = duration / end
          const timer = setInterval(() => {
            start++
            setCount(start)
            if (start >= end) clearInterval(timer)
          }, stepTime)
        }
      },
      { threshold: 0.3 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  const milestones = [
    { year: '2003', label: 'Founded in Ellisville' },
    { year: '2008', label: 'ISA Certification' },
    { year: '2015', label: '3 Certified Arborists' },
    { year: '2025', label: '20+ Years Strong' },
  ]

  return (
    <div ref={cardRef} style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1.25rem' }}>
      {/* Header */}
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.18em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          01 — EXPERIENCE
        </div>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.35rem', color: 'var(--navy)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
          Two Decades of Trust
        </h3>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: '#6B6460', lineHeight: 1.6, marginTop: '0.5rem' }}>
          Serving Greater St. Louis families since 2003.
        </p>
      </div>

      {/* Large counter */}
      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: '0.35rem',
        padding: '1.25rem 0 0.75rem',
      }}>
        <span style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 800,
          fontSize: '4.5rem',
          lineHeight: 1,
          color: 'var(--navy)',
          letterSpacing: '-0.04em',
        }}>
          {count}+
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'var(--gold)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}>
          Years
        </span>
      </div>

      {/* Timeline milestones */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0' }}>
        {milestones.map((m, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.55rem 0',
              borderTop: i === 0 ? '1px solid rgba(27,42,74,0.08)' : 'none',
              borderBottom: '1px solid rgba(27,42,74,0.08)',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--gold)',
              fontWeight: 600,
              minWidth: '36px',
              letterSpacing: '0.02em',
            }}>
              {m.year}
            </span>
            <div style={{
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              background: i === milestones.length - 1 ? 'var(--gold)' : 'rgba(27,42,74,0.2)',
              flexShrink: 0,
            }} />
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.82rem',
              color: i === milestones.length - 1 ? 'var(--navy)' : '#6B6460',
              fontWeight: i === milestones.length - 1 ? 600 : 400,
            }}>
              {m.label}
            </span>
          </div>
        ))}
      </div>

      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#9E9E9E', letterSpacing: '0.08em' }}>
        EST. 2003 · ELLISVILLE, MO
      </p>
    </div>
  )
}


// Card 2: ISA Certified Arborists — Credential-focused with what it means
function CertifiedCard() {
  const shieldRef = useRef(null)
  const checkRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(shieldRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: shieldRef.current,
            start: 'top 80%',
          }
        }
      )
      gsap.fromTo(checkRef.current,
        { strokeDashoffset: 30, strokeDasharray: 30 },
        {
          strokeDashoffset: 0,
          duration: 0.6,
          delay: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: shieldRef.current,
            start: 'top 80%',
          }
        }
      )
    })
    return () => ctx.revert()
  }, [])

  const credentials = [
    'Tree risk assessment qualified',
    'Science-based pruning methods',
    'Species-specific treatment plans',
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1.25rem' }}>
      {/* Header */}
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.18em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          02 — CERTIFIED
        </div>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.35rem', color: 'var(--navy)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
          ISA Certified Arborists
        </h3>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: '#6B6460', lineHeight: 1.6, marginTop: '0.5rem' }}>
          3 certified professionals on staff year-round.
        </p>
      </div>

      {/* Shield badge */}
      <div
        ref={shieldRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          opacity: 0,
        }}
      >
        <div style={{
          width: '100px',
          height: '110px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <svg width="100" height="110" viewBox="0 0 100 110" fill="none">
            {/* Shield shape */}
            <path
              d="M50 6L12 22V50C12 76 28 96 50 104C72 96 88 76 88 50V22L50 6Z"
              fill="rgba(27,42,74,0.05)"
              stroke="var(--navy)"
              strokeWidth="2.5"
            />
            {/* Inner shield */}
            <path
              d="M50 16L22 28V50C22 70 34 86 50 92C66 86 78 70 78 50V28L50 16Z"
              fill="rgba(184,145,58,0.08)"
              stroke="var(--gold)"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            {/* ISA text */}
            <text x="50" y="48" textAnchor="middle" style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 800, fill: 'var(--navy)', letterSpacing: '0.1em' }}>ISA</text>
            {/* Checkmark */}
            <path
              ref={checkRef}
              d="M36 60L46 70L66 48"
              stroke="var(--gold)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* CERTIFIED text */}
            <text x="50" y="84" textAnchor="middle" style={{ fontFamily: 'var(--font-mono)', fontSize: '7px', fill: 'var(--gold)', letterSpacing: '0.2em' }}>CERTIFIED</text>
          </svg>
        </div>
      </div>

      {/* What it means */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: '#9E9E9E',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '0.25rem',
        }}>
          What this means for you
        </div>
        {credentials.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.6rem',
              padding: '0.4rem 0',
            }}
          >
            <div style={{
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              background: 'rgba(184,145,58,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              marginTop: '1px',
            }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5L4 7L8 3" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.84rem',
              color: '#6B6460',
              lineHeight: 1.5,
            }}>
              {item}
            </span>
          </div>
        ))}
      </div>

      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: '#9E9E9E', letterSpacing: '0.08em' }}>
        INTERNATIONAL SOCIETY OF ARBORICULTURE
      </p>
    </div>
  )
}


// Card 3: Complete Property Care — Service promise with visual checklist
function CleanupCard() {
  const stepsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      stepsRef.current.forEach((step, i) => {
        if (!step) return
        gsap.fromTo(step,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: i * 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 85%',
            }
          }
        )
      })
    })
    return () => ctx.revert()
  }, [])

  const services = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="9" stroke="var(--gold)" strokeWidth="1.5"/>
          <path d="M11 6V11L14 14" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Same-day estimates',
      desc: 'Call by noon, we assess by evening.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M3 11C3 6.6 6.6 3 11 3C15.4 3 19 6.6 19 11" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M19 11C19 15.4 15.4 19 11 19C6.6 19 3 15.4 3 11" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"/>
          <path d="M8 11L10 13L14 9" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Full debris removal',
      desc: 'We haul everything. No exceptions.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M4 18L8 14L12 16L18 4" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="18" cy="4" r="2" fill="var(--gold)"/>
        </svg>
      ),
      title: 'Property left pristine',
      desc: 'Your yard, better than we found it.',
    },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '1.25rem' }}>
      {/* Header */}
      <div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.18em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          03 — SERVICE PROMISE
        </div>
        <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.35rem', color: 'var(--navy)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
          Complete Property Care
        </h3>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: '#6B6460', lineHeight: 1.6, marginTop: '0.5rem' }}>
          Thorough cleanup after every service, guaranteed.
        </p>
      </div>

      {/* Service items */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {services.map((svc, i) => (
          <div
            key={i}
            ref={el => stepsRef.current[i] = el}
            style={{
              display: 'flex',
              gap: '0.85rem',
              padding: '0.85rem',
              borderRadius: '1rem',
              background: 'rgba(27,42,74,0.03)',
              border: '1px solid rgba(27,42,74,0.06)',
              alignItems: 'flex-start',
              opacity: 0,
            }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '0.75rem',
              background: 'rgba(184,145,58,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              {svc.icon}
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '0.88rem',
                color: 'var(--navy)',
                lineHeight: 1.3,
                marginBottom: '0.2rem',
              }}>
                {svc.title}
              </div>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.8rem',
                color: '#6B6460',
                lineHeight: 1.5,
              }}>
                {svc.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Service area note */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.65rem 0.85rem',
        borderRadius: '9999px',
        background: 'rgba(184,145,58,0.08)',
        border: '1px solid rgba(184,145,58,0.15)',
        alignSelf: 'flex-start',
      }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 1C4.24 1 2 3.24 2 6C2 9.5 7 13 7 13C7 13 12 9.5 12 6C12 3.24 9.76 1 7 1Z" stroke="var(--gold)" strokeWidth="1.2" fill="rgba(184,145,58,0.15)"/>
          <circle cx="7" cy="6" r="1.5" fill="var(--gold)"/>
        </svg>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: 'var(--gold)',
          letterSpacing: '0.08em',
          fontWeight: 500,
        }}>
          SERVING GREATER ST. LOUIS & SURROUNDING AREAS
        </span>
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
            WHY OMNI
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
          {[ExperienceCard, CertifiedCard, CleanupCard].map((CardComponent, i) => (
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
