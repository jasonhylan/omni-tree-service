import { useEffect, useRef, useState } from 'react'
import { gsap } from '../gsapUtils'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#philosophy' },
  { label: 'Areas We Serve', href: '#areas' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    try {
      gsap.from(navRef.current, { y: -60, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
    } catch (e) {}

    const handleScroll = () => { try { setScrolled(window.scrollY > window.innerHeight * 0.7) } catch (e) {} }
    try { window.addEventListener('scroll', handleScroll, { passive: true }) } catch (e) {}
    return () => { try { window.removeEventListener('scroll', handleScroll) } catch (e) {} }
  }, [])

  return (
    <header ref={navRef} style={{ position: 'fixed', top: '1.25rem', left: '50%', transform: 'translateX(-50%)', zIndex: 1000, width: 'calc(100% - 2rem)', maxWidth: '60rem', borderRadius: '999px', padding: '0.75rem 1.25rem', transition: 'background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease', background: scrolled ? 'rgba(250,248,245,0.88)' : 'rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)', border: `1px solid ${scrolled ? 'rgba(250,248,245,0.2)' : 'rgba(255,255,255,0.1)'}`, boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.15)' : 'none', fontFamily: 'var(--font-heading)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', flexShrink: 0 }}>
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A84C' }}>OMNI</span>
          <span style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: scrolled ? 'rgba(42,42,53,0.5)' : 'rgba(255,255,255,0.45)', transition: 'color 0.5s' }}>Tree Service</span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: scrolled ? 'rgba(42,42,53,0.8)' : 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.2s, transform 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = scrolled ? '#2A2A35' : '#FAF8F5'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = scrolled ? 'rgba(42,42,53,0.8)' : 'rgba(255,255,255,0.7)'; e.currentTarget.style.transform = 'translateY(0)' }}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary" style={{ padding: '0.625rem 1.25rem', fontSize: '0.72rem', flexShrink: 0 }}>Free Estimate</a>
      </div>
    </header>
  )
}
