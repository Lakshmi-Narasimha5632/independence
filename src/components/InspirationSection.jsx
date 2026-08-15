import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Shield, Users, Compass, Flame, Gift, ArrowRight } from 'lucide-react';

const flowSteps = [
  {
    stage: 'IDEA',
    icon: Lightbulb,
    color: 'text-amber-400 border-amber-400/20 bg-amber-400/10 shadow-amber-400/10',
    title: 'The Spark',
    desc: 'Self-rule (Swaraj) and fundamental freedom conceived in the minds of early intellectuals.'
  },
  {
    stage: 'COURAGE',
    icon: Shield,
    color: 'text-saffron border-saffron/20 bg-saffron/10 shadow-saffron/10',
    title: 'The Standing up',
    desc: 'Fearless defiance against colonial laws, printing banned literature, and refusing compliance.'
  },
  {
    stage: 'UNITY',
    icon: Users,
    color: 'text-blue-400 border-blue-400/20 bg-blue-400/10 shadow-blue-400/10',
    title: 'The Bond',
    desc: 'Unifying diverse religions, regions, languages, and classes under a single flag of liberation.'
  },
  {
    stage: 'MOVEMENT',
    icon: Compass,
    color: 'text-teal-400 border-teal-400/20 bg-teal-400/10 shadow-teal-400/10',
    title: 'The Resolute Action',
    desc: 'Nationwide campaigns like Non-Cooperation, Swadeshi boycotts, and the Civil Disobedience march.'
  },
  {
    stage: 'SACRIFICE',
    icon: Flame,
    color: 'text-red-400 border-red-400/20 bg-red-400/10 shadow-red-400/10',
    title: 'The Ultimate Cost',
    desc: 'Enduring jail terms, property confiscation, police lathi-charges, and laydowns of young lives.'
  },
  {
    stage: 'FREEDOM',
    icon: Gift,
    color: 'text-indiaGreen border-indiaGreen/20 bg-indiaGreen/10 shadow-indiaGreen/10',
    title: 'The Dawn',
    desc: 'A sovereign democratic nation emerges, lighting the path for post-colonial independence worldwide.'
  }
];

const paths = [
  {
    leader: 'Mahatma Gandhi',
    medium: 'Satyagraha (Truth-force)',
    outcome: 'Mass peasant and labor participation in non-violent defiance.'
  },
  {
    leader: 'Subhas Chandra Bose',
    medium: 'INA (Indian National Army)',
    outcome: 'Armed military struggle from abroad, sparking rebellion in British-Indian forces.'
  },
  {
    leader: 'Bhagat Singh',
    medium: 'Revolutionary Youth Movements',
    outcome: 'Electrifying the young generation to reject fear of torture and imprisonment.'
  },
  {
    leader: 'Sarojini Naidu',
    medium: 'Women\'s Rights & Leadership',
    outcome: 'Mobilizing millions of women to step out of their homes and picket colonial monopolies.'
  },
  {
    leader: 'Bal Gangadhar Tilak',
    medium: 'Swaraj & Cultural Festivals',
    outcome: 'Converting political ideology into mass cultural awakening across communities.'
  }
];

export default function InspirationSection() {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <section className="py-24 bg-indiaBlue-deep relative border-t border-white/5 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] rounded-full bg-saffron/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-indiaGreen/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-saffron bg-saffron/10 px-3 py-1 rounded-full border border-saffron/20 inline-block mb-3">
            Inspiration Engine
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            How One Voice Became Millions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Witness the cyclical chain of inspiration that turned single patriotic whispers into an unstoppable national avalanche of freedom.
          </p>
        </div>

        {/* The Core Flow Nodes (Animated Path) */}
        <div className="relative mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            {flowSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.stage}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={`flex flex-col items-center p-5 rounded-2xl border transition-all duration-300 relative select-none cursor-default ${
                    hoveredStep === idx
                      ? 'border-saffron/30 bg-white/5 shadow-lg translate-y-[-4px]'
                      : 'border-white/5 bg-white/[0.02]'
                  }`}
                >
                  <div className={`p-4 rounded-xl border shadow-[0_0_15px_rgba(0,0,0,0.2)] mb-4 ${step.color}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  
                  {/* Step Name */}
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-gray-500 mb-1">
                    Stage {idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-white font-serif">
                    {step.stage}
                  </h3>
                  <h4 className="text-xs text-saffron font-medium mt-0.5">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Flow Arrow */}
                  {idx < 5 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3.5 transform -translate-y-1/2 text-white/20 z-20 pointer-events-none">
                      <ArrowRight className="w-5 h-5 animate-pulse" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* The Action Pathways Grid */}
        <div className="mt-16">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white text-center mb-8">
            The Historical Catalysts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paths.map((path, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-white/[0.02] hover:bg-white/5 border border-white/5 rounded-2xl relative overflow-hidden group transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-saffron transition-all duration-300 group-hover:bg-indiaGreen" />
                <h4 className="text-lg font-bold text-white font-serif group-hover:text-saffron transition-colors">
                  {path.leader}
                </h4>
                <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mt-1.5">
                  {path.medium}
                </div>
                <p className="text-xs sm:text-sm text-gray-400 mt-3 leading-relaxed">
                  {path.outcome}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
