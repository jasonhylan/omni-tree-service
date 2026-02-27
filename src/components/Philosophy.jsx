import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../gsapUtils'

export default function Philosophy() {
  const sectionRef = useRef(null)

  useEffect(() => {
    let ctx = null
    try {
      ctx = gsap.context(() => {
        try {
          gsap.utils.toArray('[data-phil]').forEach((el, i) => {
            gsap.from(el, { y: 30, opacity: 0, duration: 0.7, ease: 'power3.out', delay: i * 0.1, scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' } })
          })
        } catch (e) {}
      }, sectionRef)
    } catch (e) {}
    return () => { try { ctx?.revert() } catch (e) {} }
  }, [])

  const pillars = [
    { num: '01', title: 'Certified Expertise', body: 'Three ISA-certified arborists on staff, year-round. We diagnose, prescribe, and execute with scientific rigor.' },
    { num: '02', title: 'Safety First', body: 'Fully insured with rigorous safety protocols on every job. We protect your property and our crew.' },
    { num: '03', title: 'Complete Cleanup', body: 'We haul everything away. Your property is left spotless — no debris, no surprises.' },
  ]

  return (
    <section id="philosophy" ref={sectionRef} className="section-pad" style={{ background: '#0D0D12' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}>
          <div data-phil>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A84C' }}>Our Approach</span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#FAF8F5', letterSpacing: '-0.03em', marginTop: '0.75rem', marginBottom: '1rem', maxWidth: '20ch' }}>Rooted in science. Grown from trust.</h2>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'rgba(250,248,245,0.55)', lineHeight: 1.75, maxWidth: '42ch' }}>Every tree tells a story. Our certified arborists read the signs — from soil to canopy — and prescribe care that keeps your trees healthy for decades.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {pillars.map((p) => (
              <div key={p.num} data-phil style={{ borderTop: '1px solid rgba(201,168,76,0.2)', paddingTop: '2rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: '#C9A84C', letterSpacing: '0.15em' }}>{p.num}</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: '#FAF8F5', letterSpacing: '-0.02em', margin: '0.75rem 0 0.5rem' }}>{p.title}</h3>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', color: 'rgba(250,248,245,0.5)', lineHeight: 1.7, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
