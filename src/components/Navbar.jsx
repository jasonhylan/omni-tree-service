import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Our Approach', href: '#philosophy' },
    { label: 'Our Process', href: '#protocol' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: scrolled ? '0.75rem 2rem' : '1.25rem 2rem',
      background: scrolled
        ? 'rgba(26, 46, 26, 0.97)'
        : 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%)',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.15)' : 'none',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #4a8c4a 0%, #2d5a2d 100%)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.3rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}>
            🌳
          </div>
          <div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.2rem',
              fontWeight: '600',
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '0.01em',
            }}>
              Omni Tree
            </div>
            <div style={{
              fontSize: '0.65rem',
              fontWeight: '500',
              color: '#a0c8a0',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}>
              Service
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem',
        }} className="desktop-nav">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: '500',
                color: 'rgba(255,255,255,0.85)',
                letterSpacing: '0.03em',
                transition: 'color 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => e.target.style.color = '#a0c8a0'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.85)'}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+15551234567"
            style={{
              background: 'linear-gradient(135deg, #d4821a 0%, #b86e14 100%)',
              color: '#ffffff',
              padding: '0.55rem 1.4rem',
              borderRadius: '6px',
              fontSize: '0.875rem',
              fontWeight: '600',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '0.02em',
              boxShadow: '0 2px 8px rgba(212, 130, 26, 0.35)',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 4px 14px rgba(212, 130, 26, 0.45)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(212, 130, 26, 0.35)'
            }}
          >
            📞 Call Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: '#ffffff',
            fontSize: '1.5rem',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(26, 46, 26, 0.98)',
          padding: '1.5rem 2rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: '1rem',
                fontWeight: '500',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+15551234567"
            style={{
              background: 'linear-gradient(135deg, #d4821a 0%, #b86e14 100%)',
              color: '#ffffff',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: '600',
              textAlign: 'center',
              marginTop: '0.5rem',
            }}
          >
            📞 Call Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
