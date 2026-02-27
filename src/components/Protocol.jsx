import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '../gsapUtils'
import { ArrowRight, TreePine, Shield, Scissors, Truck, Zap, Leaf } from 'lucide-react'

const SERVICES = [
  {
    id: 'removal',
    icon: TreePine,
    label: 'Tree Removal',
    tag: 'Most Requested',
    headline: 'Precision removal, zero drama.',
    body: 'From towering oaks to tight urban lots, we remove trees safely and cleanly — protecting structures, utilities, and your peace of mind.',
    specs: ['Fully insured & bonded', 'Stump grinding available', 'Same-day emergency response'],
  },
  {
    id: 'trimming',
    icon: Scissors,
    label: 'Trimming & Pruning',
    tag: 'Year-Round',
    headline: 'Shape. Strengthen. Sustain.',
    body: 'ISA-certified pruning techniques that improve structure, light penetration, and long-term tree health — not just aesthetics.',
    specs: ['Crown thinning & raising', 'Deadwood removal', 'Vista pruning'],
  },
  {
    id: 'emergency',
    icon: Zap,
    label: 'Emergency Service',
    tag: '24 / 7',
    headline: 'Storm damage. Right now.',
    body: 'Downed trees, split limbs, blocked driveways. We mobilize fast so you can move on. Available nights, weekends, and holidays.',
    specs: ['24/7 availability', 'Rapid dispatch', 'Insurance documentation'],
  },
  {
    id: 'health',
    icon: Leaf,
    label: 'Tree Health & Diagnosis',
    tag: 'ISA Certified',
    headline: 'Healthy trees, healthy property.',
    body: 'Soil analysis, disease treatment, deep root fertilization, and pest management — prescribed by certified arborists who know your trees.',
    specs: ['Disease & pest ID', 'Deep root fertilization', 'Soil health assessment'],
  },
  {
    id: 'stump',
    icon: Truck,
    label: 'Stump Grinding',
    tag: 'Add-On',
    headline: 'Gone. Completely.',
    body: 'Mechanical stump grinding down to grade — no chemicals, no waiting. Ready to replant or sod over same day.',
    specs: ['Below-grade grinding', 'Debris hauled away', 'Replant-ready finish'],
  },
  {
    id: 'consulting',
    icon: Shield,
    label: 'Arborist Consulting',
    tag: 'Expert Advice',
    headline: 'Know before you act.',
    body: 'Pre-construction assessments, risk evaluations, HOA reports, and expert witness services. Written reports available.',
    specs: ['Risk & hazard reports', 'Pre-construction surveys', 'HOA & city documentation'],
  },
]

export default function Protocol() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    let ctx = null
    try {
      ctx = gsap.context(() => {
        try {
          gsap.from('[data-proto-header]', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '[data-proto-header]', start: 'top 85%', toggleActions: 'play none none none' } })
        } catch (e) {}
      }, sectionRef)
    } catch (e) {}
    return () => { try { ctx?.revert() } catch (e) {} }
  }, [])

  const activeService = SERVICES[active]
  const Icon = activeService.icon

  return (
    <section ref={sectionRef} className="section-pad" style={{ background: '#0D0D12' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div data-proto-header style={{ marginBottom: '3.5rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A84C' }}>Services</span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#FAF8F5', letterSpacing: '-0.03em', marginTop: '0.75rem', marginBottom: 0 }}>Everything your trees need.</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
          {/* Service List */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem' }}>
            {SERVICES.map((svc, i) => {
              const SvcIcon = svc.icon
              return (
                <button key={svc.id} onClick={() => setActive(i)}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem', padding: '1.25rem', borderRadius: '1.25rem', border: `1px solid ${active === i ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.06)'}`, background: active === i ? 'rgba(201,168,76,0.08)' : 'rgba(255,255,255,0.02)', cursor: 'pointer', transition: 'all 0.2s', textAlign: 'left' }}
                  onMouseEnter={(e) => { if (active !== i) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' } }}
                  onMouseLeave={(e) => { if (active !== i) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)' } }}>
                  <SvcIcon size={18} color={active === i ? '#C9A84C' : 'rgba(250,248,245,0.4)'} />
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', fontWeight: 600, color: active === i ? '#FAF8F5' : 'rgba(250,248,245,0.5)', lineHeight: 1.3 }}>{svc.label}</span>
                  {svc.tag && <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: active === i ? '#C9A84C' : 'rgba(250,248,245,0.25)' }}>{svc.tag}</span>}
                </button>
              )
            })}
          </div>

          {/* Active Service Detail */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '2rem', padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '3rem', height: '3rem', borderRadius: '0.875rem', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={20} color="#C9A84C" />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#C9A84C', margin: '0 0 0.25rem' }}>{activeService.tag}</p>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.25rem, 3vw, 2rem)', fontWeight: 800, color: '#FAF8F5', letterSpacing: '-0.02em', margin: 0 }}>{activeService.headline}</h3>
              </div>
            </div>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'rgba(250,248,245,0.6)', lineHeight: 1.75, marginBottom: '2rem' }}>{activeService.body}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', marginBottom: '2rem' }}>
              {activeService.specs.map(spec => (
                <span key={spec} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 500, color: 'rgba(250,248,245,0.6)', padding: '0.375rem 0.875rem', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}>{spec}</span>
              ))}
            </div>
            <a href="#contact" className="btn-primary" style={{ fontSize: '0.8rem', padding: '0.75rem 1.75rem' }}>Get a Free Estimate <ArrowRight size={14} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
