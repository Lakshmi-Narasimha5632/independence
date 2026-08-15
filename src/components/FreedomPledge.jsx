import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Flag, Share2, Award } from 'lucide-react';

export default function FreedomPledge() {
  const [hasPledged, setHasPledged] = useState(false);

  const handlePledge = () => {
    setHasPledged(true);
  };

  return (
    <section className="py-24 bg-indiaBlue-deep relative border-t border-white/5 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-saffron/5 blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Box Card Container */}
        <div className="glassmorphism rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle tricolor decorative banner */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-saffron via-white to-indiaGreen" />

          <div className="mb-6">
            <Award className="w-8 h-8 text-saffron mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              My Freedom Pledge
            </h2>
            <p className="text-xs text-indigo-400 font-semibold uppercase tracking-wider mt-1">
              A commitment to the Republic of India
            </p>
          </div>

          {/* Pledge Text Box */}
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 mb-8 text-stone-300 relative select-none">
            <span className="absolute top-3 left-4 text-3xl font-serif text-white/5 pointer-events-none">“</span>
            <p className="text-base sm:text-lg font-serif italic leading-relaxed text-gray-200">
              I promise to respect my country, uphold unity, value freedom, respect every citizen, and contribute positively to India's future.
            </p>
            <span className="absolute bottom-3 right-4 text-3xl font-serif text-white/5 pointer-events-none">”</span>
          </div>

          {/* Action Trigger */}
          <AnimatePresence mode="wait">
            {!hasPledged ? (
              <motion.div
                key="pledge-button"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={handlePledge}
                  className="px-8 py-4 bg-gradient-to-r from-saffron to-indiaGreen hover:from-saffron-dark hover:to-indiaGreen-dark text-white rounded-full text-base font-bold transition-all duration-300 shadow-xl hover:scale-105 inline-flex items-center gap-2 border border-white/10"
                >
                  <Flag className="w-4 h-4" />
                  I Take the Pledge 🇮🇳
                </button>
                <p className="text-[10px] text-gray-500 mt-3 font-medium uppercase tracking-wider">
                  No personal data is collected or stored.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="pledge-taken"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", damping: 15 }}
                className="space-y-4"
              >
                {/* Success Indicator */}
                <div className="flex items-center justify-center gap-2 text-indiaGreen font-bold text-lg">
                  <CheckCircle className="w-6 h-6 animate-bounce" />
                  Pledge Taken Successfully!
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black font-serif text-white text-glow-green">
                  Together, We Build Tomorrow.
                </h3>
                
                <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
                  Thank you for renewing your commitment to India's integrity, progress, and values. Jai Hind!
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setHasPledged(false)}
                    className="px-4 py-1.5 bg-stone-850 hover:bg-stone-800 text-stone-400 rounded-lg text-[10px] font-semibold transition-colors"
                  >
                    Reset Pledge
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
