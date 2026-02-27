import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Philosophy() {
  const sectionRef = useRef(null)
  const bgRef = useRef(null)
  const line1Ref = useRef(null)
  const line2aRef = useRef(null)
  const line2bRef = useRef(null)
  const line2cRef = useRef(null)
  const badgesRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax bg
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      })

      // Line 1 reveal
      gsap.fromTo(line1Ref.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      )

      // Line 2 parts staggered
      const parts = [line2aRef.current, line2bRef.current, line2cRef.current]
      gsap.fromTo(parts,
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.15,
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      )

      // Badges
      gsap.fromTo(badgesRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: badgesRef.current,
            start: 'top 80%',
          }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      style={{
        position: 'relative',
        background: 'var(--espresso)',
        padding: '9rem 1.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Background texture image */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: '-15%',
          backgroundImage: `url('https://images.unsplash.com/photo-1588392382834-a891154bca4d?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.08,
          zIndex: 0,
        }}
      />

      {/* Gold horizontal rule */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
        opacity: 0.5,
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto' }}>

        {/* Eyebrow */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          letterSpacing: '0.2em',
          color: 'var(--gold)',
          textTransform: 'uppercase',
          marginBottom: '2.5rem',
          opacity: 0.8,
        }}>
          Our Philosophy
        </div>

        {/* Line 1: The hook */}
        <div
          ref={line1Ref}
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: 'clamp(1.25rem, 3vw, 1.8rem)',
            color: 'rgba(255,255,255,0.85)',
            letterSpacing: '-0.01em',
            marginBottom: '1.25rem',
            opacity: 0,
          }}
        >
          Your trees matter.
        </div>

        {/* Line 2: The big statement */}
        <div style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 'clamp(1.75rem, 5vw, 3.75rem)',
          lineHeight: 1.2,
          letterSpacing: '-0.01em',
          marginBottom: '3.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0 0.35em',
          alignItems: 'baseline',
        }}>
          <span ref={line2aRef} style={{ color: 'rgba(255,255,255,0.88)', opacity: 0 }}>
            That's why we show up with
          </span>
          <span ref={line2bRef} style={{ color: 'var(--gold)', opacity: 0 }}>
            certified arborists
          </span>
          <span ref={line2cRef} style={{ color: 'rgba(255,255,255,0.88)', opacity: 0 }}>
            — not day laborers.
          </span>
        </div>

        {/* Supporting copy */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1.05rem',
          color: 'rgba(255,255,255,0.5)',
          maxWidth: '520px',
          lineHeight: 1.75,
          marginBottom: '3rem',
        }}>
          Every property is different. That's why every job starts with a certified arborist — not a clipboard estimate. We assess, we plan, we execute. Then we leave your yard cleaner than we found it.
        </p>

        {/* Trust badges */}
        <div ref={badgesRef} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {[
            { label: 'ISA Member', icon: '🌳' },
            { label: 'TCIA Member', icon: '✓' },
            { label: 'Licensed & Insured', icon: '🛡' },
            { label: '20+ Years', icon: '★' },
          ].map((badge, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 1.1rem',
                borderRadius: '9999px',
                border: '1px solid rgba(184,145,58,0.3)',
                background: 'rgba(184,145,58,0.08)',
                opacity: 0,
              }}
            >
              <span style={{ fontSize: '0.85rem' }}>{badge.icon}</span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.7)',
                textTransform: 'uppercase',
              }}>
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gold rule */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
        opacity: 0.5,
      }} />
    </section>
  )
}
