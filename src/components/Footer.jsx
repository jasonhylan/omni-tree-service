const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    'Tree Trimming & Pruning',
    'Tree Removal',
    'Emergency Storm Service',
    'Tree Health & Care',
    'Stump Grinding',
    'Arborist Consulting',
  ]

  const serviceAreas = [
    'Downtown & Midtown',
    'North Side',
    'South Side',
    'East End',
    'West Hills',
    'Surrounding Counties',
  ]

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0f1f0f 0%, #0a140a 100%)',
      padding: '5rem 1.5rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(74, 140, 74, 0.06) 0%, transparent 60%)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '4rem',
        }} className="footer-grid">
          
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                background: 'linear-gradient(135deg, #4a8c4a 0%, #2d5a2d 100%)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
              }}>🌳</div>
              <div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  lineHeight: 1.1,
                }}>Omni Tree Service</div>
                <div style={{
                  fontSize: '0.65rem',
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>Professional Arborists</div>
              </div>
            </div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.8,
              marginBottom: '1.5rem',
              maxWidth: '280px',
            }}>
              Local tree care you can trust. ISA-certified arborists serving
              our community with honest work and real accountability.
            </p>
            {/* Social / badges */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { label: 'ISA\nCertified', color: '#4a8c4a' },
                { label: 'Licensed\n& Insured', color: '#6b4c3b' },
                { label: 'BBB\nAccredited', color: '#2d5a2d' },
              ].map((badge, i) => (
                <div key={i} style={{
                  background: `${badge.color}20`,
                  border: `1px solid ${badge.color}40`,
                  borderRadius: '8px',
                  padding: '0.5rem 0.75rem',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.65rem',
                    fontWeight: '700',
                    color: badge.color === '#4a8c4a' ? '#6ab86a' : badge.color === '#6b4c3b' ? '#a67c6b' : '#4a8c6a',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    whiteSpace: 'pre-line',
                    lineHeight: 1.4,
                  }}>{badge.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1rem',
              color: '#ffffff',
              marginBottom: '1.25rem',
            }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {services.map((s, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.5)',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.85)'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                  >{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h4 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1rem',
              color: '#ffffff',
              marginBottom: '1.25rem',
            }}>Service Areas</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {serviceAreas.map((area, i) => (
                <li key={i} style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.5)',
                }}>{area}</li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1rem',
              color: '#ffffff',
              marginBottom: '1.25rem',
            }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', fontFamily: "'Inter', sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Phone</div>
                <a href="tel:+15551234567" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#a0c8a0', fontWeight: '500' }}>(555) 123-4567</a>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', fontFamily: "'Inter', sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Email</div>
                <a href="mailto:hello@omnitreeservice.com" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>hello@omnitreeservice.com</a>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', fontFamily: "'Inter', sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Hours</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                  Mon–Sat: 7am – 6pm<br />
                  Emergency: 24/7
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.3)',
          }}>
            © {currentYear} Omni Tree Service. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((link, i) => (
              <a
                key={i}
                href="#"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.3)',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.3)'}
              >{link}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
