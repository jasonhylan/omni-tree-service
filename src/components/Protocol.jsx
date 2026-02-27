import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// SVG Animation 1: Wrench rotation
function WrenchAnimation() {
  const wrenchRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })
    tl.to(wrenchRef.current, {
      rotation: 90,
      duration: 0.6,
      ease: 'power2.inOut',
      transformOrigin: '50% 80%',
    })
    .to(wrenchRef.current, {
      rotation: 0,
      duration: 0.6,
      ease: 'power2.inOut',
      transformOrigin: '50% 80%',
      delay: 0.3,
    })
    return () => tl.kill()
  }, [])

  return (
    <div style={{
      width: '80px',
      height: '80px',
      background: 'rgba(184,145,58,0.12)',
      borderRadius: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <svg ref={wrenchRef} width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M27.5 5C23.5 5 20.3 7.7 19.4 11.3L8.5 22.2C7.5 22.1 6.5 22.3 5.6 22.8C3.4 24 2.7 26.8 3.9 29C5.1 31.2 7.9 31.9 10.1 30.7C12.3 29.5 13 26.7 11.8 24.5L22.7 13.6C26.3 12.7 29 9.5 29 5.8" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="7.5" cy="26" r="2.5" fill="var(--gold)" />
        <path d="M30 8L32 6L36 10L34 12" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  )
}

// SVG Animation 2: Expanding radius pulse
function RadiusPulseAnimation() {
  const ring1 = useRef(null)
  const ring2 = useRef(null)
  const ring3 = useRef(null)

  useEffect(() => {
    const rings = [ring1.current, ring2.current, ring3.current]
    rings.forEach((ring, i) => {
      gsap.fromTo(ring,
        { scale: 0, opacity: 0.8, transformOrigin: 'center' },
        {
          scale: 2.5 + i * 0.5,
          opacity: 0,
          duration: 2.2,
          delay: i * 0.55,
          ease: 'power2.out',
          repeat: -1,
          repeatDelay: 0.2,
        }
      )
    })
    return () => rings.forEach(r => gsap.killTweensOf(r))
  }, [])

  return (
    <div style={{
      width: '80px',
      height: '80px',
      background: 'rgba(184,145,58,0.12)',
      borderRadius: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'visible',
    }}>
      <svg width="80" height="80" viewBox="0 0 80 80" style={{ overflow: 'visible' }}>
        <circle ref={ring1} cx="40" cy="40" r="12" fill="none" stroke="var(--gold)" strokeWidth="1.5" style={{ transformOrigin: '40px 40px' }} />
        <circle ref={ring2} cx="40" cy="40" r="12" fill="none" stroke="var(--gold)" strokeWidth="1.5" style={{ transformOrigin: '40px 40px' }} />
        <circle ref={ring3} cx="40" cy="40" r="12" fill="none" stroke="var(--gold)" strokeWidth="1.5" style={{ transformOrigin: '40px 40px' }} />
        <circle cx="40" cy="40" r="7" fill="var(--gold)" />
        <circle cx="40" cy="40" r="3.5" fill="var(--espresso)" />
      </svg>
    </div>
  )
}

// SVG Animation 3: Checklist draw
function ChecklistAnimation() {
  const check1 = useRef(null)
  const check2 = useRef(null)
  const check3 = useRef(null)
  const flash1 = useRef(null)
  const flash2 = useRef(null)
  const flash3 = useRef(null)

  useEffect(() => {
    const checks = [check1, check2, check3]
    const flashes = [flash1, flash2, flash3]

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })

    checks.forEach((checkRef, i) => {
      if (!checkRef.current) return
      const len = checkRef.current.getTotalLength?.() || 20
      gsap.set(checkRef.current, { strokeDasharray: len, strokeDashoffset: len })

      tl.to(checkRef.current, {
        strokeDashoffset: 0,
        duration: 0.4,
        ease: 'power2.out',
        delay: i === 0 ? 0.3 : 0,
      }, i === 0 ? 0 : `>`)
      .to(flashes[i].current, {
        opacity: 0.6,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut',
      }, '<0.2')
    })

    return () => tl.kill()
  }, [])

  const items = ['Inspection complete', 'Service delivered', 'Yard cleaned']

  return (
    <div style={{
      width: '80px',
      height: '80px',
      background: 'rgba(184,145,58,0.12)',
      borderRadius: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        {/* Row 1 */}
        <rect x="4" y="6" width="14" height="10" rx="2.5" fill="rgba(27,42,74,0.08)" stroke="rgba(27,42,74,0.2)" strokeWidth="1"/>
        <path ref={check1} d="M6.5 11L9 13.5L13 8" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect ref={flash1} x="4" y="6" width="14" height="10" rx="2.5" fill="var(--gold)" opacity="0"/>
        <line x1="21" y1="11" x2="44" y2="11" stroke="rgba(27,42,74,0.15)" strokeWidth="1.5" strokeLinecap="round"/>

        {/* Row 2 */}
        <rect x="4" y="20" width="14" height="10" rx="2.5" fill="rgba(27,42,74,0.08)" stroke="rgba(27,42,74,0.2)" strokeWidth="1"/>
        <path ref={check2} d="M6.5 25L9 27.5L13 22" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect ref={flash2} x="4" y="20" width="14" height="10" rx="2.5" fill="var(--gold)" opacity="0"/>
        <line x1="21" y1="25" x2="44" y2="25" stroke="rgba(27,42,74,0.15)" strokeWidth="1.5" strokeLinecap="round"/>

        {/* Row 3 */}
        <rect x="4" y="34" width="14" height="10" rx="2.5" fill="rgba(27,42,74,0.08)" stroke="rgba(27,42,74,0.2)" strokeWidth="1"/>
        <path ref={check3} d="M6.5 39L9 41.5L13 36" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect ref={flash3} x="4" y="34" width="14" height="10" rx="2.5" fill="var(--gold)" opacity="0"/>
        <line x1="21" y1="39" x2="44" y2="39" stroke="rgba(27,42,74,0.15)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  )
}

const steps = [
  {
    number: '01',
    title: 'Inspection',
    description: 'Our certified arborists walk your property, assess every tree, and identify risks before they become problems. You get a clear plan \u2014 not a sales pitch.',
    Animation: WrenchAnimation,
    bg: 'var(--linen)',
    textColor: 'var(--navy)',
    mutedColor: '#6B6460',
    accentColor: 'var(--navy)',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80',
  },
  {
    number: '02',
    title: 'Precision Service',
    description: 'From trimming and pruning to full removal, we bring the right equipment and the right crew for the job. Every cut is intentional. Every action safe.',
    Animation: RadiusPulseAnimation,
    bg: 'var(--navy)',
    textColor: 'white',
    mutedColor: 'rgba(255,255,255,0.6)',
    accentColor: 'var(--gold)',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80',
  },
  {
    number: '03',
    title: 'Clean Finish',
    description: 'Complete debris removal, stump grinding, and full yard cleanup. We haul everything away. You walk outside to a property that looks better than when we arrived.',
    Animation: ChecklistAnimation,
    bg: 'var(--espresso)',
    textColor: 'white',
    mutedColor: 'rgba(255,255,255,0.55)',
    accentColor: 'var(--gold)',
    imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80',
  },
]

export default function Protocol() {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    // We'll do a simple scroll-triggered reveal without complex stacking
    // to avoid GSAP pin issues with certain layouts
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return

        if (i === 0) {
          gsap.fromTo(card,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
              }
            }
          )
        } else {
          gsap.fromTo(card,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
              }
            }
          )
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        background: '#F5F2EC',
        padding: '7rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '4rem', maxWidth: '500px' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            HOW WE WORK
          </div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'var(--navy)', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
            A process built for your property
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: '#6B6460', marginTop: '0.75rem', lineHeight: 1.65 }}>
            Three steps. Every time. No shortcuts.
          </p>
        </div>

        {/* Steps */}
        <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {steps.map((step, i) => {
            const AnimComponent = step.Animation
            return (
              <div
                key={i}
                ref={el => cardsRef.current[i] = el}
                style={{
                  background: step.bg,
                  borderRadius: '3rem',
                  overflow: 'hidden',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  minHeight: '380px',
                  opacity: 0,
                  boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.01)'
                  e.currentTarget.style.boxShadow = '0 12px 48px rgba(0,0,0,0.14)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = '0 4px 32px rgba(0,0,0,0.08)'
                }}
              >
                {/* Content Side */}
                <div style={{
                  padding: 'clamp(2rem, 5vw, 3.5rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                  <div>
                    <AnimComponent />
                    <div style={{ marginTop: '2rem' }}>
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        letterSpacing: '0.18em',
                        color: step.accentColor,
                        textTransform: 'uppercase',
                        display: 'block',
                        marginBottom: '0.6rem',
                        opacity: 0.8,
                      }}>
                        Step {step.number}
                      </span>
                      <h3 style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 700,
                        fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                        color: step.textColor,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1,
                        marginBottom: '1rem',
                      }}>
                        {step.title}
                      </h3>
                      <p style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1rem',
                        color: step.mutedColor,
                        lineHeight: 1.7,
                        maxWidth: '360px',
                      }}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '5rem',
                    fontWeight: 600,
                    color: step.accentColor,
                    opacity: 0.08,
                    lineHeight: 1,
                    marginTop: '1rem',
                    letterSpacing: '-0.05em',
                  }}>
                    {step.number}
                  </div>
                </div>

                {/* Image Side */}
                <div style={{
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url('${step.imageUrl}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.7,
                    transition: 'transform 0.6s ease',
                  }} />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(to right, ${step.bg}, transparent 40%)`,
                  }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
