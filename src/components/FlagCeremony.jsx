import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Star, Heart, Volume2 } from 'lucide-react';

export default function FlagCeremony({ onHoisted }) {
  const [hoistState, setHoistState] = useState('lowered'); // 'lowered' | 'hoisting' | 'hoisted'
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);

  const startHoisting = () => {
    if (hoistState !== 'lowered') return;
    setHoistState('hoisting');
    
    // Simulate a slow, dignified hoisting over 6 seconds
    const interval = 50; // ms
    const duration = 6000; // 6 seconds
    const step = (interval / duration) * 100;
    
    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timerRef.current);
          setHoistState('hoisted');
          if (onHoisted) onHoisted(); // Notify parent to transition or show anthem
          return 100;
        }
        return prev + step;
      });
    }, interval);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleReset = () => {
    setHoistState('lowered');
    setProgress(0);
  };

  return (
    <section id="flag-ceremony" className="py-24 bg-indiaBlue-deep relative border-t border-white/5 overflow-hidden">
      {/* Dynamic background changes based on state */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        hoistState === 'hoisted' 
          ? 'bg-gradient-to-b from-saffron/10 via-white/[0.02] to-indiaGreen/10' 
          : 'bg-transparent'
      }`} />
      
      {/* Decorative sunburst behind flagpole */}
      <div className={`absolute left-1/2 -translate-x-1/2 top-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full transition-all duration-1000 blur-[120px] pointer-events-none ${
        hoistState === 'hoisted' 
          ? 'bg-saffron/20 scale-125' 
          : 'bg-saffron/5 scale-100'
      }`} />

      {/* Flower Petals falling animation (Canvas or DOM-based. Let's do DOM-based particles for precision) */}
      {hoistState === 'hoisted' && (
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          {[...Array(30)].map((_, i) => {
            const colors = ['#FF9933', '#FFFFFF', '#128807', '#FFD700'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const randomDelay = Math.random() * 5;
            const randomDuration = Math.random() * 5 + 5;
            const randomLeft = Math.random() * 100;
            const randomSize = Math.random() * 10 + 6;

            return (
              <motion.div
                key={i}
                initial={{ y: -20, x: `${randomLeft}vw`, rotate: 0, opacity: 0.8 }}
                animate={{ 
                  y: '100vh', 
                  x: `${randomLeft + (Math.random() * 20 - 10)}vw`,
                  rotate: 360,
                  opacity: 0
                }}
                transition={{ 
                  duration: randomDuration, 
                  delay: randomDelay, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute rounded-full"
                style={{ 
                  backgroundColor: randomColor, 
                  width: randomSize, 
                  height: randomSize,
                  boxShadow: '0 2px 5px rgba(0,0,0,0.15)'
                }}
              />
            );
          })}
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-saffron bg-saffron/10 px-3 py-1 rounded-full border border-saffron/20 inline-block mb-3">
            Digital Celebration
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white">
            The Moment India Rose
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-3 text-sm sm:text-base">
            Participate in the symbolic hoisting of the Indian Tricolor. Experience the journey from submission to supreme independence.
          </p>
        </div>

        {/* Flagpole & Crowd Arena */}
        <div className="relative h-[450px] sm:h-[500px] w-full max-w-md mx-auto mb-8 border border-white/5 rounded-3xl bg-white/[0.01] overflow-hidden flex flex-col justify-end">
          
          {/* Sky background sun/clouds */}
          <div className="absolute inset-x-0 top-0 h-44 flex items-center justify-center">
            <div className={`w-28 h-28 rounded-full transition-all duration-[4000ms] ${
              hoistState === 'hoisted'
                ? 'bg-gradient-to-b from-amber-400 to-saffron shadow-[0_0_50px_rgba(255,153,51,0.5)] scale-110'
                : 'bg-orange-900/20 scale-90'
            }`} />
          </div>

          {/* Flagpole Stand */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-20 h-5 bg-stone-700 rounded border-t border-stone-500 z-10" />
          <div className="absolute bottom-11 left-1/2 -translate-x-1/2 w-14 h-5 bg-stone-600 rounded border-t border-stone-500 z-10" />
          
          {/* Flagpole */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-1.5 h-[380px] bg-gradient-to-r from-stone-400 to-stone-600 rounded-t z-10">
            {/* Pulley block at top */}
            <div className="absolute -top-1.5 -left-1 w-3.5 h-3.5 rounded-full bg-amber-500 shadow border border-amber-300" />
          </div>

          {/* Waving Flag Container */}
          <div 
            className="absolute left-1/2 z-20 transition-all duration-75"
            style={{ 
              bottom: `${64 + (progress / 100) * 270}px`, // Rises along the 380px pole
              transform: 'translateX(2.5px)' 
            }}
          >
            {/* The flag itself */}
            <div className={`w-28 sm:w-36 h-20 sm:h-24 flex flex-col flag-wave shadow-lg origin-left ${
              hoistState === 'lowered' ? 'opacity-30 scale-90 blur-[1px]' : 'opacity-100 scale-100'
            }`}>
              {/* Saffron Strip */}
              <div className="h-1/3 bg-[#FF9933] w-full" />
              {/* White Strip + Chakra */}
              <div className="h-1/3 bg-white w-full flex items-center justify-center relative">
                {/* Ashoka Chakra SVG */}
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-900 spin-chakra">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  {/* spokes */}
                  {[...Array(24)].map((_, i) => (
                    <line 
                      key={i} 
                      x1="12" 
                      y1="12" 
                      x2="12" 
                      y2="2" 
                      stroke="currentColor" 
                      strokeWidth="0.3" 
                      transform={`rotate(${i * 15} 12 12)`} 
                    />
                  ))}
                </svg>
              </div>
              {/* Green Strip */}
              <div className="h-1/3 bg-[#128807] w-full" />
            </div>
          </div>

          {/* Crowd Silhouettes in foreground */}
          <div className="w-full h-16 bg-gradient-to-t from-stone-950 to-stone-900 z-30 border-t border-stone-800 relative flex items-end justify-center px-4">
            <svg viewBox="0 0 100 20" className="w-full h-8 text-black fill-current opacity-90">
              <path d="M 0 20 L 0 15 Q 5 10 10 15 T 20 15 T 30 15 T 40 15 T 50 15 T 60 15 T 70 15 T 80 15 T 90 15 T 100 15 L 100 20 Z" />
            </svg>
            <span className="absolute bottom-2 text-[10px] text-gray-500 font-medium tracking-wider">
              Gathered Citizens of a Free India
            </span>
          </div>

        </div>

        {/* Action Controls */}
        <div className="space-y-6">
          <AnimatePresence mode="wait">
            {hoistState === 'lowered' && (
              <motion.button
                key="btn-hoist"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={startHoisting}
                className="px-8 py-4 bg-gradient-to-r from-saffron to-indiaGreen hover:from-saffron-dark hover:to-indiaGreen-dark text-white rounded-full text-lg font-bold transition-all duration-300 shadow-2xl hover:scale-105 border border-white/10"
              >
                Hoist the Tricolour 🇮🇳
              </motion.button>
            )}

            {hoistState === 'hoisting' && (
              <motion.div 
                key="hoisting-progress"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-xs mx-auto"
              >
                <div className="text-xs font-bold text-saffron uppercase tracking-widest mb-2 animate-pulse">
                  Hoisting... {Math.round(progress)}%
                </div>
                <div className="w-full h-2 bg-stone-850 rounded-full overflow-hidden border border-white/5">
                  <div 
                    className="h-full bg-gradient-to-r from-saffron via-white to-indiaGreen transition-all duration-75"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </motion.div>
            )}

            {hoistState === 'hoisted' && (
              <motion.div 
                key="hoisted-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4"
              >
                {/* Jai Hind Reveal */}
                <h3 className="text-4xl sm:text-6xl font-black font-serif tracking-widest bg-gradient-to-b from-saffron via-white to-indiaGreen bg-clip-text text-transparent text-glow-saffron animate-bounce">
                  जय हिन्द 🇮🇳
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                  The Indian Tricolor flies high at the summit, signifying sovereignty, honor, and the eternal memories of those who made it possible.
                </p>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-xl text-xs font-semibold transition-colors"
                  >
                    Lower Flag (Reset)
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
