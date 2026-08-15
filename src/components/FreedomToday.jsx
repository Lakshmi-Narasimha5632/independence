import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Globe, GraduationCap, Vote, Landmark, Cpu, HandHelping } from 'lucide-react';

const modernValues = [
  {
    title: "Civic Responsibility",
    icon: ShieldCheck,
    color: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    desc: "Upholding our constitutional duties, obeying laws, conserving natural resources, and actively protecting the sovereignty and public property of our nation."
  },
  {
    title: "Equality & Dignity",
    icon: Scale,
    color: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
    desc: "Striving for a society free from caste, gender, class, and religious discrimination. Ensuring that every citizen has equal access to opportunities and justice."
  },
  {
    title: "Social Unity",
    icon: Globe,
    color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    desc: "Binding diverse communities together. Embracing our vast cultural plurality while defending a single collective Indian identity."
  },
  {
    title: "Universal Education",
    icon: GraduationCap,
    color: "text-saffron bg-saffron/10 border-saffron/20",
    desc: "Eradicating illiteracy and empowering every child with critical thinking. Free education acts as the ultimate tool of social liberation."
  },
  {
    title: "Active Democracy",
    icon: Vote,
    color: "text-red-400 bg-red-400/10 border-red-400/20",
    desc: "Exercising our franchise in elections, questioning public authorities constructively, and contributing to local governance beyond voting day."
  },
  {
    title: "Mutual Respect",
    icon: Landmark,
    color: "text-teal-400 bg-teal-400/10 border-teal-400/20",
    desc: "Honoring differences in thought, worship, and speech. Real freedom is coexisting with viewpoints different from our own."
  },
  {
    title: "Progress & Innovation",
    icon: Cpu,
    color: "text-pink-500 bg-pink-500/10 border-pink-500/20",
    desc: "Driving technological research, scientific temper, and clean industrialization to place India at the forefront of global development."
  },
  {
    title: "Helping Others",
    icon: HandHelping,
    color: "text-indiaGreen bg-indiaGreen/10 border-indiaGreen/20",
    desc: "Supporting the underprivileged, carrying out volunteer actions, and ensuring that the fruits of our national progress reach the last citizen."
  }
];

export default function FreedomToday() {
  return (
    <section className="py-24 bg-indiaBlue-deep relative border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indiaGreen/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-saffron bg-saffron/10 px-3 py-1 rounded-full border border-saffron/20 inline-block mb-3">
            Modern Reflections
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Freedom Is More Than a Memory
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            The struggles of the past secured our independence. Today, the preservation of that freedom lies in how we treat each other and build our future.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modernValues.map((value, idx) => {
            const IconComp = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 bg-white/[0.02] hover:bg-white/5 border border-white/5 hover:border-saffron/30 rounded-2xl transition-all duration-350 group hover:shadow-[0_10px_25px_rgba(255,153,51,0.08)] flex flex-col justify-start"
              >
                <div className={`p-3 rounded-xl border w-fit mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md ${value.color}`}>
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-serif group-hover:text-saffron transition-colors mb-2">
                  {value.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
