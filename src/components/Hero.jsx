import { useEffect, useRef } from 'react'
import { ArrowRight, Phone } from 'lucide-react'
import { gsap } from '../gsapUtils'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    let ctx = null
    try {
      ctx = gsap.context(() => {
        try {
          // Staggered entrance - only Y and opacity from full (not hidden)
          const tl = gsap.timeline({ delay: 0.2 })
          tl.fromTo('[data-hero-eyebrow]', { y: 20 }, { y: 0, duration: 0.7, ease: 'power3.out' })
            .fromTo('[data-hero-line1]', { y: 40 }, { y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.4')
            .fromTo('[data-hero-line2]', { y: 50 }, { y: 0, duration: 1, ease: 'power3.out' }, '-=0.5')
            .fromTo('[data-hero-sub]', { y: 25 }, { y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
        } catch (e) { console.warn('Hero anim:', e) }
      }, containerRef)
    } catch (e) {}

    return () => { try { ctx?.revert() } catch (e) {} }
  }, [])

  return (
    <section id="hero" ref={containerRef} style={{ position: 'relative', minHeight: '100dvh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', background: '#0D0D12' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <img src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1920&q=80" alt="Dark forest canopy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} loading="eager" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0D0D12 0%, #0D0D12 18%, rgba(13,13,18,0.75) 50%, rgba(13,13,18,0.35) 80%, rgba(13,13,18,0.25) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(13,13,18,0.85) 0%, rgba(13,13,18,0.2) 65%, transparent 100%)' }} />
      </div>
      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '80rem', margin: '0 auto', padding: 'clamp(1.5rem, 4vw, 5rem)', paddingBottom: 'clamp(4rem, 10vw, 8rem)' }}>
        <div style={{ maxWidth: '48rem' }}>
          <div data-hero-eyebrow style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A84C' }}>Greater St. Louis · Est. 20+ Years</span>
            <span style={{ height: '1px', width: '3rem', background: '#C9A84C', opacity: 0.4 }} />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <p data-hero-line1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 5vw, 4rem)', fontWeight: 800, color: '#FAF8F5', letterSpacing: '-0.03em', lineHeight: 1.15, margin: '0 0 0.5rem' }}>Craftsmanship meets</p>
            <h1 data-hero-line2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(4rem, 13vw, 11rem)', fontWeight: 700, color: '#FAF8F5', lineHeight: 0.9, margin: 0, letterSpacing: '-0.02em' }}>Precision.</h1>
          </div>
          <p data-hero-sub style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', fontWeight: 400, color: 'rgba(250,248,245,0.6)', maxWidth: '32rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Expert tree care for Greater St. Louis — 20+ years of trusted service with ISA-certified arborists on staff year-round.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <a href="#contact" className="btn-primary">Request a Free Estimate <ArrowRight size={15} /></a>
            <a href="tel:6363919944" className="btn-outline"><Phone size={14} /> 636-391-9944</a>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            {[{ num: '20+', label: 'Years Experience' }, { num: '3', label: 'ISA Certified Arborists' }, { num: '100%', label: 'Satisfaction Guarantee' }].map(({ num, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.375rem', fontWeight: 900, color: '#C9A84C' }}>{num}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 500, color: 'rgba(250,248,245,0.45)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
