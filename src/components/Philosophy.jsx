const Philosophy = () => {
  const values = [
    {
      number: '01',
      title: 'We Show Up',
      body: 'On time, prepared, and ready to work. We respect your time because we know you have a life to run.',
    },
    {
      number: '02',
      title: 'We Explain, Not Just Execute',
      body: 'Before we touch a single branch, we walk you through what we see, what we recommend, and why. No guesswork, no surprises.',
    },
    {
      number: '03',
      title: 'We Leave It Better',
      body: 'Every job ends with a thorough cleanup. Your yard should look better after we leave than when we arrived.',
    },
    {
      number: '04',
      title: 'We Stand Behind Our Work',
      body: 'If something isn't right, we make it right. That's not a policy — it's just how we were raised to do business.',
    },
  ]

  return (
    <section id="philosophy" style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(160deg, var(--forest-deep) 0%, var(--forest-mid) 50%, #1a3d2a 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(ellipse at 80% 20%, rgba(212, 130, 26, 0.06) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(74, 140, 74, 0.08) 0%, transparent 50%)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'start',
        }} className="philosophy-grid">
          {/* Left: Intro text */}
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              fontWeight: '700',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--amber-warm)',
              marginBottom: '0.75rem',
            }}>Our Approach</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              color: '#ffffff',
              marginBottom: '1.5rem',
              lineHeight: 1.2,
            }}>Good Work Speaks
            <br />for Itself.</h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.8,
              marginBottom: '1.5rem',
            }}>
              We've been doing this long enough to know that the best marketing
              is a satisfied neighbor. That's why we focus on the work — not the
              upsell.
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.8,
            }}>
              Every crew member is trained to the same standard: do it right,
              explain it clearly, and clean up completely. No exceptions.
            </p>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
              marginTop: '3rem',
            }}>
              {[
                { value: '15+', label: 'Years in Business' },
                { value: '2,400+', label: 'Trees Cared For' },
                { value: '98%', label: 'Customer Satisfaction' },
                { value: '24/7', label: 'Emergency Available' },
              ].map((stat, i) => (
                <div key={i} style={{
                  borderLeft: '2px solid rgba(212, 130, 26, 0.4)',
                  paddingLeft: '1rem',
                }}>
                  <div style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    lineHeight: 1,
                    marginBottom: '0.25rem',
                  }}>{stat.value}</div>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.55)',
                    letterSpacing: '0.05em',
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Values list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {values.map((v, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
              >
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                }}>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'rgba(212, 130, 26, 0.5)',
                    lineHeight: 1,
                    minWidth: '2.5rem',
                  }}>{v.number}</span>
                  <div>
                    <h4 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.1rem',
                      color: '#ffffff',
                      marginBottom: '0.5rem',
                    }}>{v.title}</h4>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9rem',
                      color: 'rgba(255,255,255,0.6)',
                      lineHeight: 1.7,
                      margin: 0,
                    }}>{v.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .philosophy-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Philosophy
