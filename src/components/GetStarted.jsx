import { useEffect, useRef } from 'react'
import { gsap } from '../gsapUtils'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

export default function GetStarted() {
  const sectionRef = useRef(null)

  useEffect(() => {
    let ctx = null
    try {
      ctx = gsap.context(() => {
        try {
          gsap.from('[data-gs]', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' } })
        } catch (e) {}
      }, sectionRef)
    } catch (e) {}
    return () => { try { ctx?.revert() } catch (e) {} }
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="section-pad" style={{ background: '#0D0D12' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.06) 0%, rgba(201,168,76,0.02) 100%)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '3rem', padding: 'clamp(2.5rem, 6vw, 5rem)', textAlign: 'center' }}>
          <span data-gs style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '1.5rem' }}>Get Started</span>
          <h2 data-gs style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 6vw, 4.5rem)', fontWeight: 900, color: '#FAF8F5', letterSpacing: '-0.03em', lineHeight: 1.05, margin: '0 auto 1.5rem', maxWidth: '16ch' }}>Your trees deserve the best care.</h2>
          <p data-gs style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'rgba(250,248,245,0.5)', lineHeight: 1.7, maxWidth: '38ch', margin: '0 auto 3rem' }}>Call or email for a free on-site estimate. We serve Greater St. Louis and surrounding counties — typically on-site within 24 hours.</p>
          <div data-gs style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3.5rem' }}>
            <a href="tel:6363919944" className="btn-primary"><Phone size={15} /> 636-391-9944</a>
            <a href="mailto:info@omnitreeservice.com" className="btn-outline"><Mail size={14} /> Email Us</a>
          </div>
          <div data-gs style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem' }}>
            {[
              { icon: Phone, text: 'Mon–Sat, 7am–7pm' },
              { icon: MapPin, text: 'Greater St. Louis, MO' },
              { icon: ArrowRight, text: 'Free on-site estimates' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Icon size={14} color="#C9A84C" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 500, color: 'rgba(250,248,245,0.45)', letterSpacing: '0.05em' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
