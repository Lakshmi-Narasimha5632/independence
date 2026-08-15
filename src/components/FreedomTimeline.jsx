import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronDown, ChevronUp, User, BookOpen } from 'lucide-react';

const timelineEvents = [
  {
    year: '1857',
    title: 'The First War of Independence',
    subtitle: 'Revolt of 1857',
    summary: 'The historic uprising that shook the foundations of the British East India Company.',
    description: 'Triggered by the introduction of greased cartridges in the sepoy army, the rebellion erupted in Meerut and quickly swept through northern and central India. It marked the first unified, armed resistance against British rule, transforming the struggle from localized revolts into a national awakening.',
    fighters: 'Mangal Pandey, Rani Lakshmibai of Jhansi, Bahadur Shah Zafar, Tatya Tope, Begum Hazrat Mahal',
    image: '/images/first_war.jpg'
  },
  {
    year: '1885',
    title: 'Formation of Indian National Congress',
    subtitle: 'Organizing the Political Front',
    summary: 'The birth of a unified political organization to channel Indian demands.',
    description: 'Founded in Bombay by retired civil servant Allan Octavian Hume and prominent Indian leaders, the Indian National Congress (INC) started as a forum for educated elites to petition for civic representation. It eventually evolved into the primary platform driving the mass movement for full independence.',
    fighters: 'Womesh Chandra Bonnerjee (First President), Dadabhai Naoroji, Dinshaw Wacha, Allan Octavian Hume',
    image: '/images/inc.jpg'
  },
  {
    year: '1905',
    title: 'The Swadeshi Movement',
    subtitle: 'Economic Boycott & Self-Reliance',
    summary: 'A fierce nationalistic response to the Partition of Bengal by the British.',
    description: 'In response to Lord Curzon\'s strategic partition of Bengal along religious lines, nationalist leaders launched the Swadeshi movement. Ordinary citizens publicly burned British goods, boycotted imported clothing, and set up indigenous schools, mills, and businesses, demonstrating the power of economic self-reliance.',
    fighters: 'Bal Gangadhar Tilak, Lala Lajpat Rai, Bipin Chandra Pal (Lal Bal Pal), Aurobindo Ghosh',
    image: '/images/Swadeshi-Movement.webp'
  },
  {
    year: '1919',
    title: 'Jallianwala Bagh Massacre',
    subtitle: 'The Turning Point of British Brutality',
    summary: 'A cold-blooded massacre of peaceful gatherers in Amritsar that outraged the nation.',
    description: 'On Baisakhi, Brigadier-General Reginald Dyer ordered troops to block the exits and open fire without warning on thousands of unarmed families gathered at Jallianwala Bagh to protest the Rowlatt Act. Hundreds died, prompting Rabindranath Tagore to renounce his British Knighthood and permanently shifting India\'s stance toward complete self-determination.',
    fighters: 'Dr. Saifuddin Kitchlew, Dr. Satyapal, Udham Singh (who later avenged the massacre)',
    image: '/images/jallianwalabagh.jpg'
  },
  {
    year: '1930',
    title: 'Dandi March & Salt Satyagraha',
    subtitle: 'Defying the Empire with Salt',
    summary: 'A historic 240-mile march that challenged the British salt monopoly.',
    description: 'In a brilliant symbolic gesture, Mahatma Gandhi led 78 followers from Sabarmati Ashram to the coastal village of Dandi. There, he boiled seawater to break the British salt tax laws, inspiring millions across India to manufacture their own salt and triggering arrest campaigns that captured global headlines.',
    fighters: 'Mahatma Gandhi, Sarojini Naidu, C. Rajagopalachari, Abbas Tyabji',
    image: '/images/salt.jpg'
  },
  {
    year: '1942',
    title: 'Quit India Movement',
    subtitle: 'The Ultimate Ultimatum: "Do or Die"',
    summary: 'The final, massive struggle demanding immediate British departure from India.',
    description: 'During the heights of World War II, the All India Congress Committee passed the "Quit India" resolution. Gandhi issued a clarion call: "Do or Die" (करो या मरो). Despite immediate arrests of all top leaders, the movement spread spontaneously as youth and underground networks ran parallel governments in rural districts.',
    fighters: 'Mahatma Gandhi, Aruna Asaf Ali, Jayaprakash Narayan, Ram Manohar Lohia, Usha Mehta',
    image: '/images/qiut-india.avif'
  },

  {
  year: '1943',
  title: 'Azad Hind Fauj',
  subtitle: 'The Army That Fought for a Free India',
  summary: 'An armed liberation force led by Subhas Chandra Bose that sought to drive British rule out of India and establish an independent nation.',
  description: 'The Azad Hind Fauj, also known as the Indian National Army (INA), was reorganized under the leadership of Subhas Chandra Bose in 1943. Bose sought to unite Indian soldiers and civilians in Southeast Asia around the goal of India’s independence. The INA fought alongside Japanese forces during the Burma campaign and advanced toward India, reaching areas near Imphal and Kohima. Although the military campaign ultimately failed, the INA trials after the Second World War generated widespread public sympathy and intensified nationalist sentiment across India.',
  fighters: 'Subhas Chandra Bose, Captain Lakshmi Sahgal, Shah Nawaz Khan, Prem Kumar Sahgal, Gurbaksh Singh Dhillon',
  image: '/images/ina.webp'
},
  {
    year: '1947',
    title: 'Independence Day',
    subtitle: 'Tryst with Destiny',
    summary: 'The culmination of centuries of struggle, sacrifice, and resilience.',
    description: 'At the stroke of midnight on 15 August 1947, India broke free from nearly two centuries of British rule. Jawaharlal Nehru delivered his legendary "Tryst with Destiny" speech, hoisting the Indian tricolor at the Red Fort, marking the birth of a free, sovereign democratic nation.',
    fighters: 'Jawaharlal Nehru, Sardar Vallabhbhai Patel, Subhas Chandra Bose (Legacy), Maulana Abul Kalam Azad, and Millions of Citizens',
    image: '/images/first-independence.avif'
  }
];

export default function FreedomTimeline() {
  const [expandedEventIndex, setExpandedEventIndex] = useState(null);

  const toggleExpand = (index) => {
    if (expandedEventIndex === index) {
      setExpandedEventIndex(null);
    } else {
      setExpandedEventIndex(index);
    }
  };

  return (
    <section id="timeline" className="py-24 bg-indiaBlue-deep relative">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-saffron/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.2em] font-semibold text-saffron bg-saffron/10 px-3 py-1 rounded-full border border-saffron/20 inline-block mb-3"
          >
            The Timeline of Courage
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4"
          >
            Journey to Freedom (1857 - 1947)
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base"
          >
            Click on any historical landmark to delve deeper into the events, the leaders, and the turning points that forged the destiny of India.
          </motion.p>
        </div>

        {/* Timeline Line & Cards */}
        <div className="relative">
          {/* Vertical central line (hidden on small mobile, visible sm+) */}
          <div className="absolute left-8 sm:left-1/2 transform sm:-translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-saffron via-white to-indiaGreen opacity-30" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedEventIndex === index;

              return (
                <motion.div 
                  key={event.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col sm:flex-row items-stretch ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } relative`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-8 sm:left-1/2 transform -translate-x-[15px] sm:-translate-x-1/2 w-[30px] h-[30px] rounded-full border-4 border-indiaBlue-deep z-20 flex items-center justify-center bg-gradient-to-r from-saffron to-indiaGreen shadow-lg">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  </div>

                  {/* Left side empty space (for desktop alignment) */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Card Container */}
                  <div className="w-full sm:w-1/2 pl-16 sm:pl-8 sm:pr-8">
                    <div 
                      onClick={() => toggleExpand(index)}
                      className={`glassmorphism rounded-2xl p-6 border transition-all duration-500 cursor-pointer text-left select-none relative group hover:scale-[1.01] ${
                        isExpanded 
                          ? 'border-saffron/50 shadow-[0_0_20px_rgba(255,153,51,0.15)] bg-white/5' 
                          : 'border-white/5 hover:border-white/20 hover:bg-white/5'
                      }`}
                    >
                      {/* Interactive Tricolor Ribbon Glow on hover */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-saffron via-white to-indiaGreen scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl origin-left" />

                      {/* Header row (Year & Mini Info) */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="flex items-center gap-2 text-xl font-bold font-serif text-saffron bg-saffron/10 px-3 py-1 rounded-lg border border-saffron/20">
                          <Calendar className="w-4 h-4" />
                          {event.year}
                        </span>
                        <div className="text-gray-400 group-hover:text-white transition-colors">
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold font-serif text-white group-hover:text-saffron transition-colors">
                        {event.title}
                      </h3>
                      
                      {/* Subtitle */}
                      <h4 className="text-xs sm:text-sm font-semibold text-indigo-400 mt-1 italic uppercase tracking-wider">
                        {event.subtitle}
                      </h4>

                      {/* Short Summary */}
                      <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                        {event.summary}
                      </p>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 pt-4 border-t border-white/10 space-y-4">
                              
                              {/* Detailed Historical Image */}
                              <div className="relative w-full h-44 rounded-xl overflow-hidden shadow-lg border border-white/10">
                                <img 
                                  src={event.image} 
                                  alt={event.title}
                                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <span className="absolute bottom-2 right-3 text-[10px] text-gray-400 tracking-wider flex items-center gap-1">
                                  <BookOpen className="w-3 h-3" /> Historical Concept
                                </span>
                              </div>

                              {/* Deep Description */}
                              <p className="text-gray-300 text-sm leading-relaxed">
                                {event.description}
                              </p>

                              {/* Freedom Fighters Involved */}
                              <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex items-start gap-2.5">
                                <User className="w-4 h-4 text-saffron mt-0.5 flex-shrink-0" />
                                <div>
                                  <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                    Prominent Leaders / Voices
                                  </h5>
                                  <p className="text-xs text-saffron font-medium mt-1 leading-relaxed">
                                    {event.fighters}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
