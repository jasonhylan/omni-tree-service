import { useState } from 'react'
import {
  ClipboardList,
  Eye as EyeIcon,
  FileText,
  HardHat,
  Leaf,
  CheckSquare,
  ChevronDown,
  ChevronUp,
  Phone,
  Calendar
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Initial Contact',
    duration: 'Same day',
    description: 'Reach out by phone, text, or our online form. Our team responds within hours to schedule your free consultation.',
    details: [
      'Available 7 days a week',
      'Emergency same-day response available',
      'Discuss your concerns and goals upfront',
      'Preliminary guidance provided immediately',
    ],
    color: 'text-sky-400',
    bg: 'bg-sky-900/20',
    border: 'border-sky-700/20',
  },
  {
    number: '02',
    icon: EyeIcon,
    title: 'On-Site Assessment',
    duration: '1-2 days',
    description: 'A certified arborist visits your property to evaluate the trees, identify risks, and understand your specific needs and concerns.',
    details: [
      'ISA Certified Arborist inspection',
      'Health and structural assessment',
      'Risk evaluation and documentation',
      'Discussion of all available options',
    ],
    color: 'text-violet-400',
    bg: 'bg-violet-900/20',
    border: 'border-violet-700/20',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Written Proposal',
    duration: 'Within 24hrs',
    description: 'You receive a detailed, itemized written proposal with clear scope of work, timeline, and transparent pricing — no hidden fees.',
    details: [
      'Itemized scope of work',
      'Clear timeline and scheduling',
      'Transparent, all-inclusive pricing',
      'Insurance certificates provided',
    ],
    color: 'text-amber-400',
    bg: 'bg-amber-900/20',
    border: 'border-amber-700/20',
  },
  {
    number: '04',
    icon: HardHat,
    title: 'Professional Execution',
    duration: 'Scheduled day',
    description: 'Our crew arrives on time, fully equipped, and executes the work exactly as scoped — safely, efficiently, and with full respect for your property.',
    details: [
      'Fully equipped, uniformed crew',
      'ANSI Z133 safety protocols',
      'Property protection measures',
      'Ongoing communication throughout',
    ],
    color: 'text-green-400',
    bg: 'bg-green-900/20',
    border: 'border-green-700/20',
  },
  {
    number: '05',
    icon: Leaf,
    title: 'Cleanup & Restoration',
    duration: 'Same day',
    description: 'Every job ends with thorough debris removal, site cleanup, and ground restoration. We leave your property cleaner than we found it.',
    details: [
      'Complete debris removal',
      'Wood chipping or haul-away',
      'Lawn blowing and raking',
      'Site walk-through with homeowner',
    ],
    color: 'text-emerald-400',
    bg: 'bg-emerald-900/20',
    border: 'border-emerald-700/20',
  },
  {
    number: '06',
    icon: CheckSquare,
    title: 'Follow-Up & Warranty',
    duration: '30 days post',
    description: 'We follow up after every job to ensure your complete satisfaction and stand behind our work with a 30-day labor warranty.',
    details: [
      'Post-job satisfaction check-in',
      '30-day labor warranty',
      'Ongoing care recommendations',
      'Priority scheduling for future work',
    ],
    color: 'text-rose-400',
    bg: 'bg-rose-900/20',
    border: 'border-rose-700/20',
  },
]

export default function Protocol() {
  const [expandedStep, setExpandedStep] = useState(null)

  return (
    <section id="protocol" className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-900/20 border border-green-700/30 text-green-400 text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-full mb-6">
            Our Protocol
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How We Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A transparent, professional process from first contact to final follow-up.
            No surprises. No pressure. Just expert work.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {steps.map((step) => {
            const Icon = step.icon
            const isExpanded = expandedStep === step.number
            return (
              <div
                key={step.number}
                className={`border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  isExpanded
                    ? `${step.bg} ${step.border} shadow-lg`
                    : 'bg-white/3 border-white/10 hover:bg-white/5 hover:border-white/20'
                }`}
                onClick={() => setExpandedStep(isExpanded ? null : step.number)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`text-4xl font-black ${isExpanded ? step.color : 'text-white/10'} leading-none`}>
                      {step.number}
                    </span>
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      isExpanded ? step.bg : 'bg-white/5'
                    }`}>
                      <Icon className={`w-5 h-5 ${isExpanded ? step.color : 'text-gray-400'}`} />
                    </div>
                  </div>
                  {isExpanded
                    ? <ChevronUp className={`w-5 h-5 ${step.color}`} />
                    : <ChevronDown className="w-5 h-5 text-gray-600" />
                  }
                </div>

                <div className={`text-xs font-semibold uppercase tracking-wider mb-1 ${
                  isExpanded ? step.color : 'text-gray-600'
                }`}>
                  {step.duration}
                </div>
                <h3 className={`font-bold text-lg mb-2 ${
                  isExpanded ? 'text-white' : 'text-gray-300'
                }`}>{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>

                {/* Expanded details */}
                {isExpanded && (
                  <div className="mt-5 pt-5 border-t border-white/10">
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full ${step.color.replace('text-', 'bg-')}`} />
                          <span className="text-gray-300 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="bg-gradient-to-r from-green-900/30 via-green-800/20 to-green-900/30 border border-green-700/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Ready to Get Started?</h3>
          <p className="text-gray-400 mb-6">Join 2,000+ satisfied Austin homeowners. Free estimates, no pressure.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="bg-green-700 hover:bg-green-600 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-green-700/30"
            >
              Schedule Free Estimate
            </a>
            <a
              href="tel:+15125550123"
              className="flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              Or call (512) 555-0123
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
