import { MapPin, Phone, ExternalLink } from 'lucide-react'

const SERVICES_LIST = ['Tree Removal', 'Trimming & Pruning', 'Emergency Service', 'Stump Grinding', 'Tree Health & Diagnosis', 'Arborist Consulting']
const AREAS = ['Chesterfield', 'Ballwin', 'Manchester', 'Wildwood', 'Ellisville', 'Creve Coeur', 'Town and Country', 'Kirkwood', 'Webster Groves', 'St. Louis County']

export default function Footer() {
  return (
    <footer id="areas" style={{ background: '#0A0A0F', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '5rem 1.5rem 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A84C' }}>OMNI</span>
              <span style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(250,248,245,0.3)' }}>Tree Service</span>
            </div>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', color: 'rgba(250,248,245,0.4)', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '22ch' }}>Expert tree care for Greater St. Louis since 2004. ISA Certified.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="tel:6363919944" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                <Phone size={13} color="#C9A84C" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'rgba(250,248,245,0.6)', fontWeight: 500 }}>636-391-9944</span>
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={13} color="#C9A84C" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(250,248,245,0.4)' }}>Greater St. Louis, MO</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(250,248,245,0.3)', marginBottom: '1rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {SERVICES_LIST.map(s => (
                <li key={s}><a href="#services" style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', color: 'rgba(250,248,245,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FAF8F5'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(250,248,245,0.5)'}>{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(250,248,245,0.3)', marginBottom: '1rem' }}>Areas Served</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {AREAS.map(a => (
                <li key={a} style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', color: 'rgba(250,248,245,0.35)' }}>{a}</li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(250,248,245,0.3)', marginBottom: '1rem' }}>Get In Touch</h4>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', color: 'rgba(250,248,245,0.4)', lineHeight: 1.65, marginBottom: '1.25rem' }}>Free estimates. Fast response. On-site within 24 hours.</p>
            <a href="#contact" className="btn-primary" style={{ fontSize: '0.75rem', padding: '0.625rem 1.25rem' }}>Request Estimate</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(250,248,245,0.2)', margin: 0 }}>© 2025 Omni Tree Service, Inc. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy', 'Terms', 'Sitemap'].map(item => (
              <a key={item} href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(250,248,245,0.2)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(250,248,245,0.5)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(250,248,245,0.2)'}>{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
