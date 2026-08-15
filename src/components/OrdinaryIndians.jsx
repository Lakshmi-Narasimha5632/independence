import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, GraduationCap, Flame, Hammer, ShieldAlert, Globe, Newspaper, HelpCircle } from 'lucide-react';

const ordinaryHeroes = [
  {
    role: "Farmers",
    icon: Sprout,
    desc: "Refused excessive colonial land taxes, organized massive strikes in Kheda, Champaran, and Bardoli, and kept the local agricultural economy resilient."
  },
  {
    role: "Students",
    icon: GraduationCap,
    desc: "Abandoned British-run colleges and schools, printed and distributed underground revolutionary flyers, and led courageous city-wide rallies."
  },
  {
    role: "Women",
    icon: Flame,
    desc: "Stepped out of household seclusion to picket foreign shops, manufacture illegal salt, run clandestine radio transmitters, and lead local congress branches."
  },
  {
    role: "Industrial Workers",
    icon: Hammer,
    desc: "Staged coordinated strikes in textile mills, railway yards, and steel plants, paralyzing the transport and manufacturing power of the colonial government."
  },
  {
    role: "Soldiers & Sailors",
    icon: ShieldAlert,
    desc: "Initiated mutinies (such as the Royal Indian Navy Revolt of 1946) and formed underground networks, sending a clear message that colonial forces could no longer rely on Indian compliance."
  },
  {
    role: "Tribal Communities",
    icon: Globe,
    desc: "Fought persistent guerilla wars in forest belts (led by icons like Birsa Munda and Alluri Sitarama Raju) to defend ancestral lands against restrictive British forest laws."
  },
  {
    role: "Journalists & Printers",
    icon: Newspaper,
    desc: "Published nationalistic sheets in regional languages, defying harsh censorship laws and risking arrest to report colonial atrocities and coordinate protests."
  },
  {
    role: "Ordinary Citizens",
    icon: HelpCircle,
    desc: "Provided shelter, food, and safe transit to underground revolutionaries, shut down markets in mourning (hartals), and stood in silent, powerful protest."
  }
];

export default function OrdinaryIndians() {
  return (
    <section className="py-24 bg-indiaBlue-deep relative border-t border-white/5 overflow-hidden">
      {/* Tricolor background dots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indiaGreen/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-indiaGreen bg-indiaGreen/10 px-3 py-1 rounded-full border border-indiaGreen/20 inline-block mb-3">
            The Unsung Millions
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Freedom Was Built By Millions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            The story of independence belongs not only to famous leaders, but also to countless ordinary Indians who sacrificed comfort, safety, and sometimes their lives for a free nation.
          </p>
        </div>

        {/* Heroes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ordinaryHeroes.map((hero, idx) => {
            const IconComponent = hero.icon;
            return (
              <motion.div
                key={hero.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 bg-white/[0.02] hover:bg-white/5 border border-white/5 hover:border-indiaGreen/30 rounded-2xl transition-all duration-300 group hover:shadow-[0_10px_25px_rgba(18,136,7,0.1)] flex flex-col justify-start"
              >
                <div className="p-3 bg-indiaGreen/10 border border-indiaGreen/20 rounded-xl text-indiaGreen w-fit mb-4 group-hover:scale-110 group-hover:bg-indiaGreen group-hover:text-white transition-all duration-300 shadow-md">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-serif group-hover:text-indiaGreen transition-colors mb-2">
                  {hero.role}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {hero.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
