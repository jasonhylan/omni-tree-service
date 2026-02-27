import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, MapPin, Clock } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function CTASection() {
  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      )
      gsap.fromTo(rightRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="cta"
      ref={sectionRef}
      style={{
        background: 'var(--navy)',
        padding: '8rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background geometric accent */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(184,145,58,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-15%',
        left: '-5%',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(184,145,58,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '4rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Left: Copy */}
        <div ref={leftRef} style={{ opacity: 0 }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            color: 'var(--gold)',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
            opacity: 0.8,
          }}>
            Free Estimate
          </div>

          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontWeight: 500,
            fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
            color: 'white',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            marginBottom: '1.5rem',
          }}>
            Get Your Free<br />Estimate.
          </h2>

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            maxWidth: '420px',
          }}>
            Call us today or fill out the form. We respond within 24 hours. Fast, honest estimates — no pressure, no obligation.
          </p>

          {/* Phone callout */}
          <a
            href="tel:6363919944"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.9rem',
              textDecoration: 'none',
              marginBottom: '1.5rem',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(184,145,58,0.15)',
              border: '1px solid rgba(184,145,58,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Phone size={20} color="var(--gold)" />
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '1.5rem',
                color: 'var(--gold)',
                letterSpacing: '-0.01em',
              }}>
                636-391-9944
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                Mon-Fri 7am–6pm · Sat 8am–2pm
              </div>
            </div>
          </a>

          {/* Location */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            color: 'rgba(255,255,255,0.45)',
          }}>
            <MapPin size={15} />
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem' }}>
              415 Old State Road, Ellisville, MO 63021
            </span>
          </div>
        </div>

        {/* Right: Form Mockup */}
        <div
          ref={rightRef}
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '2rem',
            padding: '2.25rem',
            opacity: 0,
            backdropFilter: 'blur(10px)',
          }}
        >
          <div style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            fontSize: '1.1rem',
            color: 'white',
            marginBottom: '1.75rem',
            letterSpacing: '-0.01em',
          }}>
            Request a Free Estimate
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: 'Your Name', placeholder: 'John Smith', type: 'text' },
              { label: 'Phone Number', placeholder: '(636) 000-0000', type: 'tel' },
              { label: 'Service Address', placeholder: 'Ellisville, MO', type: 'text' },
            ].map((field, i) => (
              <div key={i}>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: '0.4rem',
                  letterSpacing: '0.03em',
                }}>
                  {field.label}
                </label>
                <div style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.92rem',
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.01em',
                }}>
                  {field.placeholder}
                </div>
              </div>
            ))}

            {/* Textarea */}
            <div>
              <label style={{
                display: 'block',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.78rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.6)',
                marginBottom: '0.4rem',
                letterSpacing: '0.03em',
              }}>
                Brief Description
              </label>
              <div style={{
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.92rem',
                color: 'rgba(255,255,255,0.3)',
                height: '90px',
                letterSpacing: '0.01em',
              }}>
                e.g. "Large oak needs trimming, also have a dead elm..."
              </div>
            </div>

            {/* Submit button */}
            <button
              style={{
                padding: '1rem',
                borderRadius: '9999px',
                border: 'none',
                background: 'var(--gold)',
                color: 'white',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '0.03em',
                cursor: 'pointer',
                width: '100%',
                transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.3s ease',
                marginTop: '0.5rem',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(184,145,58,0.5)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Send Estimate Request →
            </button>

            <p style={{
              textAlign: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.08em',
            }}>
              We respond within 24 hours · Licensed & Insured
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
