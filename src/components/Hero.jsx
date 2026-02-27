const Hero = () => {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, #0f1f0f 0%, #1a2e1a 30%, #2d5a2d 70%, #1a3d1a 100%)',
    }}>
      {/* Organic texture overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          radial-gradient(ellipse at 20% 50%, rgba(74, 140, 74, 0.15) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(212, 130, 26, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 60% 80%, rgba(45, 90, 45, 0.2) 0%, transparent 50%)
        `,
      }} />

      {/* Subtle grid pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        opacity: 0.5,
      }} />

      {/* Tree silhouette decorative element */}
      <div style={{
        position: 'absolute',
        right: '-5%',
        bottom: '-10%',
        width: '55%',
        height: '110%',
        background: 'radial-gradient(ellipse at center, rgba(74, 140, 74, 0.06) 0%, transparent 70%)',
        transform: 'rotate(-10deg)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '8rem 2rem 5rem',
        width: '100%',
      }}>
        <div style={{ maxWidth: '720px' }}>
          {/* Trust badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(74, 140, 74, 0.15)',
            border: '1px solid rgba(74, 140, 74, 0.3)',
            borderRadius: '100px',
            padding: '0.4rem 1rem',
            marginBottom: '2rem',
          }}>
            <span style={{ fontSize: '0.75rem', color: '#a0c8a0', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif" }}>
              Serving Our Community Since 2009
            </span>
          </div>

          {/* Main headline */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            fontWeight: '700',
            color: '#ffffff',
            lineHeight: 1.05,
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
          }}>
            Your Trees Deserve
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #6ab86a 0%, #a0c8a0 50%, #d4821a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Expert Hands.
            </span>
          </h1>

          {/* Sub-headline */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: 'rgba(255,255,255,0.72)',
            lineHeight: 1.75,
            marginBottom: '2.5rem',
            maxWidth: '560px',
          }}>
            We're a local crew that takes pride in every cut. Certified arborists,
            honest pricing, and the kind of care your property deserves.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem',
          }}>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #d4821a 0%, #b86e14 100%)',
                color: '#ffffff',
                padding: '0.9rem 2rem',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '600',
                fontFamily: "'Inter', sans-serif",
                boxShadow: '0 4px 20px rgba(212, 130, 26, 0.4)',
                transition: 'all 0.3s ease',
                letterSpacing: '0.02em',
              }}
            >
              Get a Free Estimate
              <span style={{ fontSize: '1.1rem' }}>→</span>
            </a>
            <a
              href="#services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.9)',
                padding: '0.9rem 2rem',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '500',
                fontFamily: "'Inter', sans-serif",
                border: '1px solid rgba(255,255,255,0.15)',
                transition: 'all 0.3s ease',
              }}
            >
              See Our Services
            </a>
          </div>

          {/* Trust signals row */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
          }}>
            {[
              { icon: '✓', label: 'Licensed & Insured' },
              { icon: '✓', label: 'ISA Certified Arborists' },
              { icon: '✓', label: 'Free Estimates' },
              { icon: '✓', label: '24/7 Emergency Service' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'rgba(255,255,255,0.65)',
                fontSize: '0.85rem',
                fontFamily: "'Inter', sans-serif",
                fontWeight: '500',
              }}>
                <span style={{ color: '#6ab86a', fontWeight: '700', fontSize: '1rem' }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'rgba(255,255,255,0.4)',
        fontSize: '0.75rem',
        fontFamily: "'Inter', sans-serif",
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}>
        <span>Scroll</span>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
        }} />
      </div>
    </section>
  )
}

export default Hero
