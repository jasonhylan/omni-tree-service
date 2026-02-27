import { Phone, MapPin, Clock, Shield, TreePine } from 'lucide-react'

const services = [
  'Plant Health Care', 'Tree Injections', 'Pest Control',
  'Deep Root Fertilization', 'Tree Trimming & Pruning', 'Tree Removal',
  'Cabling & Bracing', 'Disease Treatment', 'Large Tree Maintenance',
  'Crane & Bucket Services', 'Emergency Storm Damage', 'Stump Removal',
]

const serviceAreas = [
  'Ellisville', 'Wildwood', 'Chesterfield', 'Ballwin',
  'Creve Coeur', 'Ladue', 'Des Peres', 'Clayton',
]

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--navy)',
      borderRadius: '4rem 4rem 0 0',
      padding: '5rem 1.5rem 2.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Gold accent top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '40%',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
      }} />

      {/* Background radial glow */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '300px',
        background: 'radial-gradient(ellipse, rgba(184,145,58,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Top: Logo + Phone */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '2rem',
          marginBottom: '4rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
          {/* Logo block */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '1.25rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'white',
              marginBottom: '0.3rem',
            }}>
              Omni Tree Service, Inc.
            </div>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '0.9rem',
              color: 'var(--gold)',
              marginBottom: '1rem',
            }}>
              Serving Greater St. Louis Since 2003
            </div>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.88rem',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.65,
            }}>
              Expert tree care professionals serving the Greater St. Louis area for over 20 years. 3 ISA certified arborists on staff.
            </p>

            {/* Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
              {['ISA Member', 'TCIA Member', 'Licensed & Insured'].map((b, i) => (
                <div key={i} style={{
                  padding: '0.35rem 0.8rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(184,145,58,0.25)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.1em',
                  color: 'rgba(255,255,255,0.55)',
                  textTransform: 'uppercase',
                }}>
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Phone prominent display */}
          <div style={{ textAlign: 'right' }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.35)',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}>
              Call Us Today
            </div>
            <a
              href="tel:6363919944"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                color: 'var(--gold)',
                textDecoration: 'none',
                display: 'block',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#D4A84B'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--gold)'}
            >
              636-391-9944
            </a>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.1em',
              marginTop: '0.5rem',
            }}>
              Mon–Fri 7am–6pm · Sat 8am–2pm
            </div>

            <a
              href="#cta"
              style={{
                display: 'inline-block',
                marginTop: '1.25rem',
                padding: '0.75rem 1.75rem',
                borderRadius: '9999px',
                background: 'var(--gold)',
                color: 'white',
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '0.88rem',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(184,145,58,0.45)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Free Estimate →
            </a>
          </div>
        </div>

        {/* Middle: Services + Areas + Hours */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3.5rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
          {/* Services */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}>
              Our Services
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {services.map((s, i) => (
                <span key={i} style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.4,
                  transition: 'color 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}>
              Service Areas
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {serviceAreas.map((area, i) => (
                <span key={i} style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}>
                  <span style={{ color: 'var(--gold)', fontSize: '0.5rem' }}>●</span>
                  {area}
                </span>
              ))}
            </div>

            {/* Address */}
            <div style={{ marginTop: '1.5rem' }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                color: 'var(--gold)',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}>
                Address
              </div>
              <address style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.45)',
                fontStyle: 'normal',
                lineHeight: 1.6,
              }}>
                415 Old State Road<br />
                Ellisville, MO 63021
              </address>
            </div>
          </div>

          {/* Hours + Nav */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}>
              Hours of Operation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
              {[
                { day: 'MON – FRI', hours: '7:00am – 6:00pm' },
                { day: 'SATURDAY', hours: '8:00am – 2:00pm' },
                { day: 'SUNDAY', hours: 'Closed' },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'rgba(255,255,255,0.35)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}>
                    {row.day}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: i === 2 ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.6)',
                    letterSpacing: '0.05em',
                  }}>
                    {row.hours}
                  </span>
                </div>
              ))}
            </div>

            {/* Nav links */}
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}>
              Navigate
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['Services', 'About', 'Areas We Serve', 'Contact', 'Free Estimate'].map((link, i) => (
                <a key={i} href={i === 4 ? '#cta' : '#'} style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.45)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease, transform 0.2s ease',
                  display: 'inline-block',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Legal */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'rgba(255,255,255,0.25)',
            letterSpacing: '0.08em',
          }}>
            © {new Date().getFullYear()} Omni Tree Service, Inc. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service'].map((link, i) => (
              <a key={i} href="#" style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'rgba(255,255,255,0.25)',
                textDecoration: 'none',
                letterSpacing: '0.08em',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}
              >
                {link}
              </a>
            ))}
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            color: 'rgba(255,255,255,0.2)',
            letterSpacing: '0.08em',
          }}>
            🛡 Licensed · Insured · ISA Certified
          </div>
        </div>
      </div>
    </footer>
  )
}
