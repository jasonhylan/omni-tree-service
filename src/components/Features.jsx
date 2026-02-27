import { useState } from 'react'
import {
  TreePine,
  Scissors,
  AlertTriangle,
  Stump,
  Sprout,
  Eye,
  ChevronRight,
  Shield,
  Clock,
  Award,
  Users,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    id: 'removal',
    icon: TreePine,
    title: 'Tree Removal',
    tagline: 'Safe, complete removal with zero property damage',
    color: 'from-green-900/40 to-green-800/20',
    borderColor: 'border-green-700/30',
    accentColor: 'text-green-400',
    bgAccent: 'bg-green-900/30',
    description: 'Our certified arborists execute precise tree removals using industry-leading techniques and equipment. Whether it\'s a hazardous tree threatening your home or clearing land for construction, we handle every job with surgical precision.',
    features: [
      'Certified arborist assessment',
      'Crane-assisted removal for large trees',
      'Complete debris cleanup & hauling',
      'Property protection protocols',
      'Same-day emergency service available',
      'Insurance documentation provided'
    ],
    stats: { value: '500+', label: 'Trees Removed' },
    price: 'From $350',
  },
  {
    id: 'trimming',
    icon: Scissors,
    title: 'Trimming & Pruning',
    tagline: 'Shape, health, and beauty — expertly balanced',
    color: 'from-emerald-900/40 to-emerald-800/20',
    borderColor: 'border-emerald-700/30',
    accentColor: 'text-emerald-400',
    bgAccent: 'bg-emerald-900/30',
    description: 'Proper pruning is an art and a science. Our arborists understand tree biology, ensuring every cut promotes healthy growth, improves structure, and enhances your property\'s aesthetic appeal.',
    features: [
      'Crown thinning & elevation',
      'Deadwood removal',
      'Vista & view pruning',
      'Fruit tree pruning',
      'Storm damage pruning',
      'ISA pruning standards'
    ],
    stats: { value: '1,200+', label: 'Trees Pruned' },
    price: 'From $150',
  },
  {
    id: 'emergency',
    icon: AlertTriangle,
    title: 'Emergency Services',
    tagline: '24/7 rapid response for storm damage',
    color: 'from-red-900/30 to-orange-900/20',
    borderColor: 'border-red-700/30',
    accentColor: 'text-red-400',
    bgAccent: 'bg-red-900/30',
    description: 'When storms strike or trees fall unexpectedly, every minute counts. Our emergency response team is available around the clock to secure your property, prevent further damage, and restore safety.',
    features: [
      '24/7 availability, 365 days',
      'Rapid response within 2 hours',
      'Hazard tree stabilization',
      'Insurance claim assistance',
      'Roof & structure clearing',
      'Road & driveway clearing'
    ],
    stats: { value: '< 2hr', label: 'Response Time' },
    price: 'Call for pricing',
  },
  {
    id: 'stump',
    icon: Stump,
    title: 'Stump Grinding',
    tagline: 'Complete removal, ground to below grade',
    color: 'from-amber-900/30 to-yellow-900/20',
    borderColor: 'border-amber-700/30',
    accentColor: 'text-amber-400',
    bgAccent: 'bg-amber-900/30',
    description: 'Left-behind stumps are eyesores, trip hazards, and pest magnets. Our commercial-grade grinders eliminate stumps completely, grinding 12\'\' below grade and leaving your lawn ready for replanting or landscaping.',
    features: [
      'Ground 12\'\'+ below grade',
      'Commercial-grade equipment',
      'Root flare treatment',
      'Mulch left or hauled away',
      'Lawn restoration included',
      'Multiple stump discounts'
    ],
    stats: { value: '800+', label: 'Stumps Ground' },
    price: 'From $125',
  },
  {
    id: 'planting',
    icon: Sprout,
    title: 'Tree Planting',
    tagline: 'The right tree, in the right place, done right',
    color: 'from-teal-900/30 to-cyan-900/20',
    borderColor: 'border-teal-700/30',
    accentColor: 'text-teal-400',
    bgAccent: 'bg-teal-900/30',
    description: 'A properly planted tree is an investment that pays dividends for generations. We assess your soil, light, and space conditions to recommend the ideal species, then plant and establish it correctly from day one.',
    features: [
      'Species selection consulting',
      'Soil analysis & amendment',
      'Proper depth & positioning',
      'Staking & support systems',
      '1-year establishment warranty',
      'Native species specialists'
    ],
    stats: { value: '300+', label: 'Trees Planted' },
    price: 'From $200',
  },
  {
    id: 'health',
    icon: Eye,
    title: 'Tree Health & Diagnosis',
    tagline: 'Expert diagnosis, targeted treatment plans',
    color: 'from-violet-900/30 to-purple-900/20',
    borderColor: 'border-violet-700/30',
    accentColor: 'text-violet-400',
    bgAccent: 'bg-violet-900/30',
    description: 'Trees communicate distress in subtle ways. Our ISA Certified Arborists can diagnose diseases, pest infestations, nutritional deficiencies, and structural issues before they become emergencies — saving your trees and your investment.',
    features: [
      'ISA Certified Arborist assessment',
      'Disease identification & treatment',
      'Pest & insect management',
      'Soil nutrient analysis',
      'Cabling & bracing systems',
      'Long-term care planning'
    ],
    stats: { value: '95%', label: 'Treatment Success' },
    price: 'From $125',
  },
]

const trustBadges = [
  { icon: Shield, label: 'Fully Insured', sub: '$2M liability' },
  { icon: Award, label: 'ISA Certified', sub: 'Arborists on staff' },
  { icon: Clock, label: '24/7 Emergency', sub: 'Always available' },
  { icon: Users, label: 'Family Owned', sub: 'Since 2008' },
]

export default function Features() {
  const [activeService, setActiveService] = useState('removal')
  const active = services.find(s => s.id === activeService)

  return (
    <section id="services" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-900/20 border border-green-700/30 text-green-400 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-6">
            What We Do
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Complete Tree Care Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From emergency response to long-term tree health, we handle every aspect
            of professional arboriculture for Austin and surrounding areas.
          </p>
        </div>

        {/* Interactive Service Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Service Selector */}
          <div className="lg:col-span-1 flex flex-col gap-2">
            {services.map(service => {
              const Icon = service.icon
              const isActive = service.id === activeService
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 ${
                    isActive
                      ? `bg-gradient-to-r ${service.color} ${service.borderColor} shadow-lg`
                      : 'bg-white/3 border-white/10 hover:bg-white/5 hover:border-white/20'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isActive ? service.bgAccent : 'bg-white/5'
                  }`}>
                    <Icon className={`w-5 h-5 ${isActive ? service.accentColor : 'text-gray-400'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-semibold text-sm ${
                      isActive ? 'text-white' : 'text-gray-300'
                    }`}>{service.title}</div>
                    <div className="text-xs text-gray-500 truncate">{service.tagline}</div>
                  </div>
                  {isActive && <ChevronRight className={`w-4 h-4 flex-shrink-0 ${service.accentColor}`} />}
                </button>
              )
            })}
          </div>

          {/* Service Detail Panel */}
          {active && (
            <div className={`lg:col-span-2 bg-gradient-to-br ${active.color} border ${active.borderColor} rounded-2xl p-8`}>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className={`inline-flex items-center gap-2 ${active.bgAccent} border ${active.borderColor} ${active.accentColor} text-xs font-semibold px-3 py-1.5 rounded-full mb-3`}>
                    <active.icon className="w-3.5 h-3.5" />
                    {active.title}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{active.tagline}</h3>
                  <p className="text-gray-300 leading-relaxed">{active.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {/* Features list */}
                <div>
                  <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">What's Included</h4>
                  <ul className="space-y-2.5">
                    {active.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${active.accentColor}`} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats & pricing */}
                <div className="flex flex-col gap-4">
                  <div className={`${active.bgAccent} border ${active.borderColor} rounded-xl p-5 text-center`}>
                    <div className={`text-3xl font-bold ${active.accentColor} mb-1`}>{active.stats.value}</div>
                    <div className="text-gray-400 text-sm">{active.stats.label}</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">Starting Price</div>
                    <div className="text-2xl font-bold text-white">{active.price}</div>
                    <div className="text-gray-500 text-xs mt-1">Free estimates always</div>
                  </div>
                  <a
                    href="#contact"
                    className="flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Get Estimate
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustBadges.map((badge, i) => {
            const Icon = badge.icon
            return (
              <div key={i} className="bg-white/3 border border-white/10 rounded-xl p-5 text-center hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-green-400" />
                </div>
                <div className="text-white font-semibold text-sm">{badge.label}</div>
                <div className="text-gray-500 text-xs mt-1">{badge.sub}</div>
              </div>
            )
          })}
        </div>

        {/* Social proof strip */}
        <div className="mt-8 bg-white/3 border border-white/10 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div>
                <div className="text-white font-semibold">4.9 / 5.0 Rating</div>
                <div className="text-gray-500 text-sm">Based on 200+ Google Reviews</div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">15+</div>
                <div className="text-gray-500">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">2,000+</div>
                <div className="text-gray-500">Jobs Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">100%</div>
                <div className="text-gray-500">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
