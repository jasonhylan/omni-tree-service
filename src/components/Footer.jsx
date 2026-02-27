import { TreePine, Phone, Mail, MapPin, Facebook, Instagram, Star } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Tree Removal', href: '#services' },
    { label: 'Trimming & Pruning', href: '#services' },
    { label: 'Emergency Services', href: '#services' },
    { label: 'Stump Grinding', href: '#services' },
    { label: 'Tree Planting', href: '#services' },
    { label: 'Health Assessment', href: '#services' },
  ],
  Company: [
    { label: 'Our Philosophy', href: '#philosophy' },
    { label: 'Our Protocol', href: '#protocol' },
    { label: 'Free Estimate', href: '#contact' },
    { label: 'Emergency Line', href: 'tel:+15125550123' },
  ],
  'Service Areas': [
    { label: 'Austin, TX', href: '#' },
    { label: 'Round Rock', href: '#' },
    { label: 'Cedar Park', href: '#' },
    { label: 'Pflugerville', href: '#' },
    { label: 'Georgetown', href: '#' },
    { label: 'Lakeway', href: '#' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 border-t border-white/5">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 bg-gradient-to-br from-green-700 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                <TreePine className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-white font-bold text-lg leading-none block">Omni Tree</span>
                <span className="text-green-400 text-xs font-medium tracking-wider uppercase">Service</span>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Austin's trusted tree care professionals since 2008. ISA Certified Arborists 
              serving residential and commercial clients across Central Texas.
            </p>
            
            {/* Contact */}
            <div className="space-y-3 mb-6">
              <a href="tel:+15125550123" className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors group">
                <Phone className="w-4 h-4 text-green-400" />
                (512) 555-0123
              </a>
              <a href="mailto:hello@omnitreeservice.com" className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4 text-green-400" />
                hello@omnitreeservice.com
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                Austin, TX & Surrounding Areas
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-all hover:border-white/20">
                <Facebook className="w-4 h-4 text-gray-400" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-all hover:border-white/20">
                <Instagram className="w-4 h-4 text-gray-400" />
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 h-9 transition-all hover:border-white/20"
              >
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-gray-400 text-xs">4.9 Google</span>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {currentYear} Omni Tree Service. All rights reserved. Licensed & Insured.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Terms of Service</a>
            <span className="text-gray-700 text-xs">TX License #12345</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
