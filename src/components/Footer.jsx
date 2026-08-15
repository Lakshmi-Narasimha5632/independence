import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    // Stage-based text reveal triggers
    const timers = [
      setTimeout(() => setActiveStep(1), 1500),
      setTimeout(() => setActiveStep(2), 3000),
      setTimeout(() => setActiveStep(3), 4500),
      setTimeout(() => setActiveStep(4), 6000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <footer className="relative bg-black border-t border-white/5 py-20 overflow-hidden text-center">
      {/* Background waving flag glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex justify-center items-center z-0">
        <svg viewBox="0 0 100 100" className="w-[60vw] h-[60vw] text-white flag-wave">
          <path fill="currentColor" d="M10,20 Q25,10 40,20 T70,20 T100,20 L100,80 Q85,70 70,80 T40,80 T10,80 Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col justify-between min-h-[350px]">
        
        {/* Cinematic Text Stream */}
        <div className="space-y-4 my-8">
          <p className={`text-base sm:text-lg font-serif italic text-gray-450 transition-all duration-1000 ${
            activeStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
            "They dreamed of freedom."
          </p>
          <p className={`text-base sm:text-lg font-serif italic text-gray-450 transition-all duration-1000 ${
            activeStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
            "They fought for freedom."
          </p>
          <p className={`text-base sm:text-lg font-serif italic text-gray-450 transition-all duration-1000 ${
            activeStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
            "They sacrificed for freedom."
          </p>
          
          <div className="h-4" />
          
          <h3 className={`text-lg sm:text-2xl font-serif text-white font-medium max-w-xl mx-auto transition-all duration-1000 ${
            activeStep >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            Now, it is our responsibility to carry that freedom forward.
          </h3>
        </div>

        {/* Big Reveal Jai Hind */}
        <div className={`transition-all duration-[2000ms] ${
          activeStep >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h2 className="text-5xl sm:text-7xl font-black font-serif tracking-[0.2em] bg-gradient-to-r from-saffron via-white to-indiaGreen bg-clip-text text-transparent text-glow-saffron">
            जय हिन्द
          </h2>
          <span className="text-2xl mt-2 block">🇮🇳</span>
        </div>

        {/* Legal and credits footers */}
        <div className="mt-16 pt-8 border-t border-white/5 text-[10px] text-gray-600 space-y-2">
          <p className="tracking-wider">
            स्वतंत्रता संग्राम — The Journey to Freedom © 2026. Built with Respect & Pride.
          </p>
          <p className="text-gray-700">
            This website is an educational resource commemorating India's freedom fighters and historical struggle.
          </p>
        </div>

      </div>
    </footer>
  );
}
