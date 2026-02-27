import { Leaf, Heart, Mountain, Recycle } from 'lucide-react'

const pillars = [
  {
    icon: Leaf,
    title: 'Tree-First Approach',
    description: 'We only recommend removal when absolutely necessary. Our certified arborists explore every option to preserve and rehabilitate trees before considering removal.',
    accent: 'text-green-400',
    bg: 'bg-green-900/20',
    border: 'border-green-700/20',
  },
  {
    icon: Heart,
    title: 'Property Respect',
    description: 'Your property is treated like our own. We use protective ground coverings, careful rigging systems, and meticulous cleanup protocols to leave your yard better than we found it.',
    accent: 'text-rose-400',
    bg: 'bg-rose-900/20',
    border: 'border-rose-700/20',
  },
  {
    icon: Mountain,
    title: 'Safety Above All',
    description: 'Every job follows ANSI Z133 safety standards. Our team is fully equipped with professional PPE, and we carry $2M in liability insurance so you\'re fully protected.',
    accent: 'text-blue-400',
    bg: 'bg-blue-900/20',
    border: 'border-blue-700/20',
  },
  {
    icon: Recycle,
    title: 'Environmental Stewardship',
    description: 'Wood waste is chipped for mulch, logs are repurposed for firewood, and we partner with local nurseries to replant native species whenever trees are removed.',
    accent: 'text-teal-400',
    bg: 'bg-teal-900/20',
    border: 'border-teal-700/20',
  },
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-gray-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-green-900/20 border border-green-700/30 text-green-400 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-6">
              Our Philosophy
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              We Don't Just
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                Cut Trees.
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Omni Tree Service was built on a simple belief: every tree has value. 
              Our job is to help you understand that value, care for it properly, 
              and only act when truly necessary — with precision, care, and respect.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Founded by ISA Certified Arborists with over 15 years of combined experience, 
              we approach every project as stewards of the urban forest — balancing the needs 
              of property owners with the long-term health of the trees in our community.
            </p>
          </div>

          {/* Right: Pillar cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <div
                  key={i}
                  className={`${pillar.bg} border ${pillar.border} rounded-2xl p-6 hover:scale-105 transition-transform duration-200`}
                >
                  <div className={`w-10 h-10 ${pillar.bg} rounded-xl flex items-center justify-center mb-4 border ${pillar.border}`}>
                    <Icon className={`w-5 h-5 ${pillar.accent}`} />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
