const services = [
  {
    id: 'trimming',
    icon: '✂️',
    title: 'Tree Trimming & Pruning',
    tagline: 'Shape, health, and beauty — all in one visit.',
    description: 'Our certified arborists don't just cut — they read each tree's growth pattern and prune with purpose. We remove deadwood, improve structure, and enhance the natural form while promoting long-term health.',
    highlights: ['Crown thinning & lifting', 'Deadwood removal', 'Vista pruning', 'Clearance pruning'],
    accent: '#4a8c4a',
  },
  {
    id: 'removal',
    icon: '🪓',
    title: 'Tree Removal',
    tagline: 'Safe, clean, and complete.',
    description: 'Sometimes a tree has to come down. We do it right — with the equipment, technique, and cleanup that leaves your property looking better than we found it. No shortcuts, no surprises.',
    highlights: ['Full tree removal', 'Stump grinding', 'Section felling', 'Debris hauling'],
    accent: '#6b4c3b',
  },
  {
    id: 'emergency',
    icon: '⚡',
    title: 'Emergency Storm Service',
    tagline: 'When minutes matter, we answer.',
    description: 'Storms don't wait — neither do we. Our emergency crew is available around the clock to handle fallen trees, hazardous limbs, and damage threatening your home or family.',
    highlights: ['24/7 rapid response', 'Hazard mitigation', 'Insurance documentation', 'Damage assessment'],
    accent: '#d4821a',
  },
  {
    id: 'health',
    icon: '🌿',
    title: 'Tree Health & Care',
    tagline: 'Prevention costs less than removal.',
    description: 'A declining tree is often saveable. We diagnose disease, pest issues, and soil problems early — and build a treatment plan that protects your investment and extends the life of your trees.',
    highlights: ['Disease diagnosis', 'Pest management', 'Deep root fertilization', 'Soil aeration'],
    accent: '#2d5a2d',
  },
  {
    id: 'stump',
    icon: '⚙️',
    title: 'Stump Grinding',
    tagline: 'Out of sight, out of mind.',
    description: 'Stumps are more than an eyesore — they attract pests and take up valuable space. Our grinding equipment handles stumps of any size, leaving your lawn clear and ready for what's next.',
    highlights: ['Any size stump', 'Below-grade grinding', 'Clean chip removal', 'Lawn-ready finish'],
    accent: '#4a8c4a',
  },
  {
    id: 'consulting',
    icon: '📋',
    title: 'Arborist Consulting',
    tagline: 'Expert guidance when stakes are high.',
    description: 'Buying a property? Planning a build? Need a certified report? Our ISA-certified arborists provide written assessments, risk evaluations, and expert witness documentation when you need it in writing.',
    highlights: ['Property assessments', 'Risk evaluations', 'Written reports', 'Expert witness docs'],
    accent: '#6b4c3b',
  },
]

const Features = () => {
  return (
    <section id="services" style={{
      padding: '6rem 1.5rem',
      background: 'var(--cream-base)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ marginBottom: '4rem' }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--amber-warm)',
            marginBottom: '0.75rem',
          }}>What We Do</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--forest-deep)',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}>Complete Tree Care,
          <br />Done Right.</h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.1rem',
            color: 'var(--gray-warm)',
            maxWidth: '560px',
            lineHeight: 1.7,
          }}>
            From routine pruning to emergency response — every service backed by
            certified expertise and local accountability.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.5rem',
        }}>
          {services.map((service) => (
            <div
              key={service.id}
              style={{
                background: '#ffffff',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid var(--parchment)',
                boxShadow: 'var(--shadow-soft)',
                transition: 'var(--transition-smooth)',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-medium)'
                e.currentTarget.style.borderColor = service.accent + '40'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'var(--shadow-soft)'
                e.currentTarget.style.borderColor = 'var(--parchment)'
              }}
            >
              {/* Accent line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: `linear-gradient(90deg, ${service.accent}, ${service.accent}66)`,
                borderRadius: '16px 16px 0 0',
              }} />

              {/* Icon & Title */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '0.75rem',
                  lineHeight: 1,
                }}>{ service.icon}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.3rem',
                  color: 'var(--forest-deep)',
                  marginBottom: '0.25rem',
                  lineHeight: 1.3,
                }}>{service.title}</h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  color: service.accent,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}>{service.tagline}</p>
              </div>

              {/* Description */}
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.925rem',
                color: 'var(--gray-warm)',
                lineHeight: 1.7,
                marginBottom: '1.25rem',
              }}>{service.description}</p>

              {/* Highlights */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}>
                {service.highlights.map((h, i) => (
                  <span
                    key={i}
                    style={{
                      background: service.accent + '12',
                      color: service.accent,
                      border: `1px solid ${service.accent}25`,
                      padding: '0.3rem 0.7rem',
                      borderRadius: '100px',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
