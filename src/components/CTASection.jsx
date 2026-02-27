const CTASection = () => {
  return (
    <section id="contact" style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(160deg, #1a2e1a 0%, #2d5a2d 50%, #1a3d1a 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background accents */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          radial-gradient(ellipse at 0% 100%, rgba(212, 130, 26, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 100% 0%, rgba(74, 140, 74, 0.1) 0%, transparent 50%)
        `,
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'start',
        }} className="cta-grid">
          
          {/* Left: Main CTA */}
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              fontWeight: '700',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--amber-warm)',
              marginBottom: '0.75rem',
            }}>Get Started</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              color: '#ffffff',
              marginBottom: '1.25rem',
              lineHeight: 1.2,
            }}>Ready for a Free
            <br />Estimate?</h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.68)',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
              maxWidth: '420px',
            }}>
              We'll come out, assess your trees, and give you a clear written
              quote — no pressure, no obligation, no surprises.
            </p>

            {/* Contact Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              <a
                href="tel:+15551234567"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  background: 'linear-gradient(135deg, #d4821a 0%, #b86e14 100%)',
                  color: '#ffffff',
                  padding: '1rem 1.5rem',
                  borderRadius: '10px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1rem',
                  fontWeight: '600',
                  boxShadow: '0 4px 20px rgba(212, 130, 26, 0.35)',
                  transition: 'all 0.3s ease',
                  maxWidth: '320px',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 6px 25px rgba(212, 130, 26, 0.45)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(212, 130, 26, 0.35)'
                }}
              >
                <span style={{ fontSize: '1.4rem' }}>📞</span>
                <div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '0.1rem' }}>Call Us Directly</div>
                  <div style={{ fontSize: '1.1rem' }}>(555) 123-4567</div>
                </div>
              </a>

              <a
                href="mailto:hello@omnitreeservice.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  background: 'rgba(255,255,255,0.06)',
                  color: 'rgba(255,255,255,0.85)',
                  padding: '1rem 1.5rem',
                  borderRadius: '10px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1rem',
                  fontWeight: '500',
                  border: '1px solid rgba(255,255,255,0.12)',
                  transition: 'all 0.3s ease',
                  maxWidth: '320px',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
              >
                <span style={{ fontSize: '1.4rem' }}>✉️</span>
                <div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.7, marginBottom: '0.1rem' }}>Email Us</div>
                  <div>hello@omnitreeservice.com</div>
                </div>
              </a>
            </div>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.6,
            }}>
              Mon–Sat: 7am – 6pm &nbsp;·&nbsp; Emergency: 24/7
            </p>
          </div>

          {/* Right: Form */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '16px',
            padding: '2.5rem',
          }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.5rem',
              color: '#ffffff',
              marginBottom: '1.75rem',
            }}>Request an Estimate</h3>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    color: 'rgba(255,255,255,0.6)',
                    marginBottom: '0.4rem',
                    letterSpacing: '0.03em',
                  }}>First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    style={{
                      width: '100%',
                      padding: '0.7rem 1rem',
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    color: 'rgba(255,255,255,0.6)',
                    marginBottom: '0.4rem',
                    letterSpacing: '0.03em',
                  }}>Last Name</label>
                  <input
                    type="text"
                    placeholder="Smith"
                    style={{
                      width: '100%',
                      padding: '0.7rem 1rem',
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: '8px',
                      color: '#ffffff',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: '0.4rem',
                  letterSpacing: '0.03em',
                }}>Phone Number</label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  style={{
                    width: '100%',
                    padding: '0.7rem 1rem',
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: '0.4rem',
                  letterSpacing: '0.03em',
                }}>Service Needed</label>
                <select
                  style={{
                    width: '100%',
                    padding: '0.7rem 1rem',
                    background: 'rgba(30, 50, 30, 0.95)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '8px',
                    color: 'rgba(255,255,255,0.85)',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9rem',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option value="">Select a service...</option>
                  <option value="trimming">Tree Trimming & Pruning</option>
                  <option value="removal">Tree Removal</option>
                  <option value="emergency">Emergency Service</option>
                  <option value="health">Tree Health & Care</option>
                  <option value="stump">Stump Grinding</option>
                  <option value="consulting">Arborist Consulting</option>
                </select>
              </div>

              <div>
                <label style={{
                  display: 'block',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: '0.4rem',
                  letterSpacing: '0.03em',
                }}>Tell Us More (Optional)</label>
                <textarea
                  placeholder="Describe what you need help with..."
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '0.7rem 1rem',
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #d4821a 0%, #b86e14 100%)',
                  color: '#ffffff',
                  padding: '0.9rem 2rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  letterSpacing: '0.02em',
                  boxShadow: '0 4px 16px rgba(212, 130, 26, 0.35)',
                  transition: 'all 0.3s ease',
                  marginTop: '0.5rem',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 6px 22px rgba(212, 130, 26, 0.45)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(212, 130, 26, 0.35)'
                }}
              >
                Request My Free Estimate →
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default CTASection
