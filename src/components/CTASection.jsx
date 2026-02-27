import { useState } from 'react'
import { Send, Phone, MapPin, Clock, CheckCircle } from 'lucide-react'

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    urgency: 'standard',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would send to a backend
    setSubmitted(true)
  }

  const services = [
    'Tree Removal',
    'Trimming & Pruning',
    'Emergency Service',
    'Stump Grinding',
    'Tree Planting',
    'Tree Health Assessment',
    'Other',
  ]

  return (
    <section id="contact" className="bg-gray-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-900/20 border border-green-700/30 text-green-400 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-6">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Request Your Free Estimate
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            No pressure. No obligation. Just honest advice from a certified arborist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white/3 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-5">Contact Information</h3>
              <div className="space-y-4">
                <a href="tel:+15125550123" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-green-900/30 border border-green-700/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-900/50 transition-colors">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs">Call or Text</div>
                    <div className="text-white font-medium">(512) 555-0123</div>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-900/30 border border-green-700/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs">Service Area</div>
                    <div className="text-white font-medium">Austin & Surrounding Areas</div>
                    <div className="text-gray-500 text-xs">Round Rock, Cedar Park, Pflugerville, Georgetown</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-900/30 border border-green-700/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs">Hours</div>
                    <div className="text-white font-medium">Mon–Sat: 7am – 7pm</div>
                    <div className="text-gray-500 text-xs">24/7 Emergency Response</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why choose us */}
            <div className="bg-green-900/10 border border-green-700/20 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Why Choose Omni?</h3>
              <ul className="space-y-3">
                {[
                  'Free, no-pressure estimates',
                  'Written proposals within 24 hours',
                  'Licensed & insured ($2M coverage)',
                  'ISA Certified Arborists',
                  '30-day labor warranty',
                  'Senior & veteran discounts',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-green-900/10 border border-green-700/20 rounded-2xl">
                <div className="w-16 h-16 bg-green-900/40 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Request Received!</h3>
                <p className="text-gray-400 max-w-sm">
                  We'll contact you within 2 business hours to schedule your free estimate. 
                  For urgent needs, call us directly at (512) 555-0123.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/3 border border-white/10 rounded-2xl p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-500/50 focus:bg-white/8 transition-all text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-500/50 transition-all text-sm"
                      placeholder="(512) 555-0000"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-500/50 transition-all text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Service Needed</label>
                    <select
                      value={formData.service}
                      onChange={e => setFormData({...formData, service: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500/50 transition-all text-sm appearance-none"
                    >
                      <option value="" className="bg-gray-900">Select a service...</option>
                      {services.map(s => (
                        <option key={s} value={s} className="bg-gray-900">{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block text-gray-400 text-sm mb-2">Urgency</label>
                  <div className="flex gap-3">
                    {[{value:'standard', label:'Standard'},{value:'soon', label:'Within a week'},{value:'urgent', label:'Urgent / Emergency'}].map(opt => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setFormData({...formData, urgency: opt.value})}
                        className={`flex-1 py-2.5 rounded-lg text-xs font-medium border transition-all ${
                          formData.urgency === opt.value
                            ? 'bg-green-900/40 border-green-600/50 text-green-300'
                            : 'bg-white/3 border-white/10 text-gray-400 hover:border-white/20'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-400 text-sm mb-2">Tell us about your trees</label>
                  <textarea
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-500/50 transition-all text-sm resize-none"
                    placeholder="Describe what you need help with (size, location, any concerns)..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-green-700 hover:bg-green-600 text-white py-4 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-green-700/30 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  Send Estimate Request
                </button>
                <p className="text-gray-600 text-xs text-center mt-4">We respond within 2 business hours. No spam, ever.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
