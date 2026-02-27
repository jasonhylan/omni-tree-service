const steps = [
  {
    number: '1',
    title: 'You Call or Request Online',
    body: 'Reach out by phone or submit a quick request. You\'ll hear from us within the hour during business hours — same day for emergencies.',
    detail: 'No automated queues. A real person picks up.',
    icon: '📞',
    color: '#4a8c4a',
  },
  {
    number: '2',
    title: 'We Come to You — Free',
    body: 'An ISA-certified arborist visits your property at no charge. We assess every tree in question and talk through what we see — in plain English.',
    detail: 'No pressure. No obligation. Just an honest look.',
    icon: '🌳',
    color: '#2d5a2d',
  },
  {
    number: '3',
    title: 'You Get a Clear, Written Quote',
    body: 'Same day, in writing. Line-by-line breakdown of every service with no vague language and no hidden fees. You know exactly what you\'re getting and what it costs.',
    detail: 'Fixed pricing. What we quote is what you pay.',
    icon: '📋',
    color: '#6b4c3b',
  },
  {
    number: '4',
    title: 'We Schedule Around You',
    body: 'Pick a day that works. We staff appropriately for the job size so it gets done right the first time — without dragging into a second visit.',
    detail: 'We don\'t overbook. Your job gets full attention.',
    icon: '📅',
    color: '#d4821a',
  },
  {
    number: '5',
    title: 'Work Done. Yard Clean.',
    body: 'Our crew completes the work, hauls every bit of debris, and does a final walkthrough with you before we leave. Your signature is our quality check.',
    detail: 'We don\'t leave until you\'re satisfied.',
    icon: '✅',
    color: '#4a8c4a',
  },
]

const Protocol = () => {
  return (
    <section id="protocol" style={{
      padding: '6rem 1.5rem',
      background: 'var(--cream-warm)',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(ellipse at 10% 50%, rgba(74, 140, 74, 0.04) 0%, transparent 60%)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ marginBottom: '4rem', maxWidth: '640px' }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--amber-warm)',
            marginBottom: '0.75rem',
          }}>Our Process</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--forest-deep)',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}>How It Works</h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.1rem',
            color: 'var(--gray-warm)',
            lineHeight: 1.7,
          }}>
            Simple, transparent, and designed around you — not our schedule.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
        }}>
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: '2rem',
                position: 'relative',
              }}
            >
              {/* Left: number + connector line */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${step.color}, ${step.color}bb)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  flexShrink: 0,
                  boxShadow: `0 4px 16px ${step.color}33`,
                  zIndex: 1,
                  position: 'relative',
                }}>{ step.icon}</div>
                {index < steps.length - 1 && (
                  <div style={{
                    width: '2px',
                    flex: 1,
                    minHeight: '2.5rem',
                    background: `linear-gradient(to bottom, ${step.color}60, ${steps[index + 1].color}40)`,
                    margin: '0.5rem 0',
                  }} />
                )}
              </div>

              {/* Right: content */}
              <div style={{
                paddingBottom: index < steps.length - 1 ? '2.5rem' : '0',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.75rem',
                  marginBottom: '0.5rem',
                }}>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    color: step.color,
                    opacity: 0.7,
                  }}>Step {step.number}</span>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.3rem',
                    color: 'var(--forest-deep)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>{step.title}</h3>
                </div>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.975rem',
                  color: 'var(--gray-warm)',
                  lineHeight: 1.75,
                  marginBottom: '0.75rem',
                  maxWidth: '600px',
                }}>{step.body}</p>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: `${step.color}10`,
                  border: `1px solid ${step.color}25`,
                  borderRadius: '100px',
                  padding: '0.3rem 0.85rem',
                }}>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    color: step.color,
                    fontStyle: 'italic',
                  }}>{step.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Protocol
