import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Sparkles, User, Info, Calendar } from 'lucide-react';

const locationsData = [
  {
    id: 'amritsar',
    name: 'Amritsar (Punjab)',
    event: 'Jallianwala Bagh Massacre',
    year: '1919',
    fighters: 'Saifuddin Kitchlew, Satyapal, Udham Singh',
    details: 'The focal point of General Dyer\'s brutal suppression of political gatherings, which outraged the world and hardened national resolve toward total independence.',
    coordinates: { x: 42, y: 18 } // Estimated percentages on map SVG
  },
  {
    id: 'sabarmati',
    name: 'Sabarmati Ashram (Gujarat)',
    event: 'Base of Satyagraha',
    year: '1917 - 1930',
    fighters: 'Mahatma Gandhi, Kasturba Gandhi',
    details: 'Gandhi\'s primary residence and headquarters from where he launched training in non-violence and organized campaigns like the Salt Satyagraha.',
    coordinates: { x: 26, y: 44 }
  },
  {
    id: 'dandi',
    name: 'Dandi (Gujarat)',
    event: 'The Salt Satyagraha Terminus',
    year: '1930',
    fighters: 'Mahatma Gandhi, Sarojini Naidu, Satyagrahis',
    details: 'The coastal village where Mahatma Gandhi broke the salt monopoly by boiling seawater, launching the nationwide Civil Disobedience Movement.',
    coordinates: { x: 26, y: 51 }
  },
  {
    id: 'delhi',
    name: 'Delhi',
    event: 'Assembly Bombing & Independence Declarations',
    year: '1929 / 1947',
    fighters: 'Bhagat Singh, Jawaharlal Nehru, Batukeshwar Dutt',
    details: 'Site of the Central Legislative Assembly where Bhagat Singh threw leaflets, and the Red Fort where Nehru first hoisted the free Indian flag on 15 August 1947.',
    coordinates: { x: 44, y: 26 }
  },
  {
    id: 'mumbai',
    name: 'Mumbai (Bombay)',
    event: 'Quit India & Navy Revolt',
    year: '1942 / 1946',
    fighters: 'Aruna Asaf Ali, Royal Naval Ratings',
    details: 'Where the historic Quit India resolution was passed at Gowalia Tank Maidan, and the starting point of the Royal Indian Navy mutiny.',
    coordinates: { x: 28, y: 64 }
  },
  {
    id: 'kolkata',
    name: 'Kolkata (Calcutta)',
    event: 'Partition Protests & INA Support',
    year: '1905 / 1945',
    fighters: 'Netaji Subhas Chandra Bose, Rabindranath Tagore, Aurobindo Ghosh',
    details: 'The capital of Bengal, the epicenter of anti-partition Swadeshi protests, and Netaji\'s home where he conducted his dramatic escape in 1941.',
    coordinates: { x: 74, y: 46 }
  },
  {
    id: 'jhansi',
    name: 'Jhansi (Uttar Pradesh)',
    event: 'Center of 1857 Uprising',
    year: '1857 - 1858',
    fighters: 'Rani Lakshmibai, Tatya Tope',
    details: 'The fortress city defended with legendary courage by Rani Lakshmibai against sieges led by British general Hugh Rose.',
    coordinates: { x: 46, y: 40 }
  },
  {
    id: 'chittagong',
    name: 'Chittagong (Bengal/Bangladesh)',
    event: 'Chittagong Armoury Raid',
    year: '1930',
    fighters: 'Surya Sen (Masterda), Pritilata Waddedar, Kalpana Datta',
    details: 'A daring raid carried out by young revolutionaries under Surya Sen, capturing the government armouries to assert provisional independence.',
    coordinates: { x: 86, y: 48 }
  },
  {
    id: 'champaran',
    name: 'Champaran (Bihar)',
    event: 'The First Satyagraha in India',
    year: '1917',
    fighters: 'Mahatma Gandhi, Rajendra Prasad',
    details: 'Gandhi\'s first successful non-violent campaign in India, defending peasant indigo farmers against exploitative British plantation owners.',
    coordinates: { x: 62, y: 35 }
  }
];

export default function IndiaMap() {
  const [activeLocation, setActiveLocation] = useState(locationsData[0]);

  return (
    <section className="py-24 bg-indiaBlue-deep relative border-t border-white/5 overflow-hidden">
      {/* Background Saffron/Green ambient glow */}
      <div className="absolute top-[20%] right-[-15%] w-[450px] h-[450px] rounded-full bg-saffron/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[450px] h-[450px] rounded-full bg-indiaGreen/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-saffron bg-saffron/10 px-3 py-1 rounded-full border border-saffron/20 inline-block mb-3">
            Geographical Epicenters
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            A Nation That Rose Together
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Click on the glowing hotspots across the subcontinental map to trace how different corners of India united to claim their freedom.
          </p>
        </div>

        {/* Map and Details layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive Map (7 cols) */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div className="relative w-full max-w-[500px] aspect-[4/5] bg-white/[0.02] border border-white/5 rounded-3xl p-6 sm:p-10 shadow-2xl flex items-center justify-center overflow-hidden">
              
              {/* Map grid lines overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] opacity-30 pointer-events-none" />

              {/* Simplified Minimalist SVG India Map */}
              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full text-white/5 stroke-white/10 stroke-1 fill-white/[0.01] transition-colors duration-500 hover:text-white/10"
              >
                {/* Outlines of India Subcontinent (Abstract representation for educational UI) */}
                <path 
                  d="M 40 8 
                     C 42 7, 45 6, 48 5 
                     C 50 6, 52 8, 54 11 
                     C 55 13, 53 16, 52 18 
                     C 55 20, 60 21, 64 22 
                     C 68 23, 72 25, 75 28 
                     C 79 30, 83 31, 86 33
                     C 88 35, 87 38, 85 39
                     C 81 40, 77 41, 75 42
                     C 74 43, 74 45, 76 46
                     C 79 48, 83 50, 87 51
                     C 89 53, 86 56, 83 55
                     C 80 54, 76 52, 73 53
                     C 71 54, 70 56, 68 59
                     C 66 61, 62 63, 58 64
                     C 55 66, 51 69, 49 72
                     C 48 76, 49 80, 48 83
                     C 47 86, 45 90, 44 94
                     C 43 96, 42 96, 41 93
                     C 39 88, 36 82, 33 77
                     C 30 72, 27 68, 24 64
                     C 22 60, 19 56, 17 52
                     C 15 48, 14 44, 15 40
                     C 16 36, 19 32, 23 30
                     C 26 28, 30 27, 33 26
                     C 35 24, 34 21, 33 18
                     C 32 15, 33 12, 35 10
                     Z" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>

              {/* Pulsing Markers */}
              {locationsData.map((loc) => {
                const isActive = activeLocation.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setActiveLocation(loc)}
                    className="absolute group z-20 focus:outline-none -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}
                    aria-label={`Show ${loc.name}`}
                  >
                    {/* Ring Pulse */}
                    <span className={`absolute inline-flex h-6 w-6 rounded-full opacity-75 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 ${
                      isActive 
                        ? 'animate-ping bg-saffron' 
                        : 'animate-pulse bg-indigo-400 group-hover:bg-saffron'
                    }`} />
                    
                    {/* Core pin */}
                    <div className={`relative p-1.5 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'bg-saffron text-white scale-110 shadow-lg border-glow-saffron' 
                        : 'bg-indigo-950 text-indigo-300 border border-indigo-400 group-hover:bg-saffron group-hover:text-white group-hover:scale-110'
                    }`}>
                      <MapPin className="w-3.5 h-3.5" />
                    </div>

                    {/* Simple Tooltip Label (Desktop only) */}
                    <span className="hidden sm:block absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-stone-900 border border-stone-800 text-[10px] text-white px-2 py-0.5 rounded font-medium whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {loc.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Location Details (5 cols) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="glassmorphism rounded-3xl p-6 md:p-8 border border-white/5 text-left relative overflow-hidden shadow-2xl"
              >
                {/* Tricolor corner indicator */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-saffron/15 to-transparent rounded-tr-3xl" />

                {/* Location Title */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-black font-serif text-white">
                      {activeLocation.name}
                    </h3>
                    <span className="text-xs text-saffron uppercase font-bold tracking-widest flex items-center gap-1.5 mt-1">
                      <Calendar className="w-3.5 h-3.5" /> Year: {activeLocation.year}
                    </span>
                  </div>
                </div>

                {/* Historic Event */}
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5 mb-6">
                  <div className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider flex items-center gap-1">
                    <Info className="w-3 h-3" /> Historical Significance
                  </div>
                  <h4 className="text-md sm:text-lg font-bold text-white font-serif mt-1">
                    {activeLocation.event}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                    {activeLocation.details}
                  </p>
                </div>

                {/* Fighters Involved */}
                {activeLocation.fighters && (
                  <div className="space-y-1.5">
                    <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-indiaGreen" /> Major Figures Involved
                    </h5>
                    <p className="text-xs sm:text-sm font-semibold text-indiaGreen leading-relaxed bg-indiaGreen/5 p-3 rounded-xl border border-indiaGreen/10">
                      {activeLocation.fighters}
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* List fallback for simple clicks on mobile */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
              {locationsData.map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setActiveLocation(loc)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-all duration-300 ${
                    activeLocation.id === loc.id
                      ? 'bg-saffron text-white border-saffron'
                      : 'bg-white/5 text-gray-400 border-white/5 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {loc.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
