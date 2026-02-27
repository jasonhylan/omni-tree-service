import { useEffect, useRef, useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const heroEl = document.getElementById('hero')
    if (!heroEl) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting)
      },
      { threshold: 0.05 }
    )
    observer.observe(heroEl)
    return () => observer.disconnect()
  }, [])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#philosophy' },
    { label: 'Areas We Serve', href: '#features' },
    { label: 'Contact', href: '#cta' },
  ]

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: '1.25rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        width: 'calc(100% - 2rem)',
        maxWidth: '1000px',
        transition: 'all 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        borderRadius: '9999px',
        padding: scrolled ? '0.6rem 1.5rem' : '0.9rem 2rem',
        background: scrolled ? 'rgba(250, 247, 242, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        border: scrolled ? '1px solid rgba(184, 145, 58, 0.2)' : '1px solid transparent',
        boxShadow: scrolled ? '0 8px 32px rgba(27, 42, 74, 0.12)' : 'none',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: '0.72rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: scrolled ? 'var(--navy)' : 'rgba(255,255,255,0.9)',
            transition: 'color 0.4s ease',
          }}>
            OMNI TREE SERVICE
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 400,
            fontSize: '0.55rem',
            letterSpacing: '0.08em',
            color: scrolled ? 'var(--gold)' : 'rgba(184,145,58,0.85)',
            transition: 'color 0.4s ease',
            opacity: 0.8,
          }}>
            EST. 2003
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hide-mobile">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: '0.88rem',
                letterSpacing: '0.02em',
                textDecoration: 'none',
                color: scrolled ? 'var(--espresso)' : 'rgba(255,255,255,0.85)',
                transition: 'color 0.3s ease, transform 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.color = scrolled ? 'var(--navy)' : 'white' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.color = scrolled ? 'var(--espresso)' : 'rgba(255,255,255,0.85)' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href="tel:6363919944"
            className="hide-mobile"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: '0.82rem',
              textDecoration: 'none',
              color: scrolled ? 'var(--gold)' : 'rgba(184,145,58,0.95)',
              letterSpacing: '0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <Phone size={13} />
            636-391-9944
          </a>

          <a
            href="#cta"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: '0.82rem',
              textDecoration: 'none',
              padding: '0.55rem 1.2rem',
              borderRadius: '9999px',
              background: 'var(--gold)',
              color: 'white',
              letterSpacing: '0.02em',
              transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.3s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(184,145,58,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            Free Estimate
          </a>

          {/* Mobile menu button */}
          <button
            className="show-mobile"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: scrolled ? 'var(--navy)' : 'white',
              display: 'none',
              alignItems: 'center',
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          marginTop: '1rem',
          borderTop: '1px solid rgba(0,0,0,0.08)',
          paddingTop: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
        }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: '1rem',
                textDecoration: 'none',
                color: scrolled ? 'var(--espresso)' : 'rgba(255,255,255,0.9)',
                padding: '0.25rem 0',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:6363919944"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '1.1rem',
              color: 'var(--gold)',
              textDecoration: 'none',
            }}
          >
            📞 636-391-9944
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
