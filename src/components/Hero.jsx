import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Phone, ChevronDown } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef(null)
  const headlineTopRef = useRef(null)
  const headlineBigRef = useRef(null)
  const subRef = useRef(null)
  const ctasRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      tl.fromTo(headlineTopRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
      .fromTo(headlineBigRef.current,
        { opacity: 0, y: 55, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' },
        '-=0.5'
      )
      .fromTo(subRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(ctasRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(statsRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.12 },
        '-=0.3'
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const stats = [
    { value: '20+', label: 'Years Experience' },
    { value: '3', label: 'ISA Certified Arborists' },
    { value: '100%', label: 'Satisfaction Guarantee' },
  ]

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        position: 'relative',
        height: '100dvh',
        minHeight: '700px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />

      {/* Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(27,42,74,0.97) 0%, rgba(27,42,74,0.75) 40%, rgba(27,42,74,0.2) 75%, rgba(0,0,0,0.1) 100%)',
          zIndex: 1,
        }}
      />

      {/* Warm gold accent edge */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
        zIndex: 2,
      }} />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '0 1.5rem 4rem',
          maxWidth: '1200px',
          width: '100%',
        }}
      >
        {/* Eyebrow */}
        <div
          ref={headlineTopRef}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
            opacity: 0,
          }}
        >
          Greater St. Louis · Est. 2003 · ISA Certified
        </div>

        {/* Hero Headline */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h1
            ref={headlineTopRef}
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'rgba(255,255,255,0.92)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '0.2rem',
              opacity: 0,
            }}
          >
            Protection built on
          </h1>
          <div
            ref={headlineBigRef}
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: 'clamp(4rem, 12vw, 10rem)',
              color: 'white',
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              opacity: 0,
            }}
          >
            Trust.
          </div>
        </div>

        {/* Subtext */}
        <p
          ref={subRef}
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: 'rgba(255,255,255,0.75)',
            maxWidth: '520px',
            lineHeight: 1.65,
            marginBottom: '2.5rem',
            opacity: 0,
          }}
        >
          Expert tree care for Greater St. Louis — dependable service for over 20 years. 3 certified arborists on staff.
        </p>

        {/* CTAs */}
        <div
          ref={ctasRef}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '4rem', opacity: 0 }}
        >
          <a
            href="#cta"
            className="btn-primary"
            style={{
              background: 'var(--gold)',
              color: 'white',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(184,145,58,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            Get Your Free Estimate
          </a>
          <a
            href="tel:6363919944"
            className="btn-outline"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Phone size={16} />
            636-391-9944
          </a>
        </div>

        {/* Stats Bar */}
        <div
          ref={statsRef}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem 2.5rem',
            borderTop: '1px solid rgba(255,255,255,0.12)',
            paddingTop: '2rem',
          }}
        >
          {stats.map((stat, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', opacity: 0 }}>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: 'var(--gold)',
                lineHeight: 1,
              }}>
                {stat.value}
              </span>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
                fontSize: '0.82rem',
                color: 'rgba(255,255,255,0.6)',
                letterSpacing: '0.02em',
              }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '1.5rem',
        right: '2rem',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.25rem',
        opacity: 0.5,
        animation: 'bounce 2s ease-in-out infinite',
      }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'white', letterSpacing: '0.1em' }}>SCROLL</span>
        <ChevronDown size={16} color="white" />
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  )
}
