import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Quote, Calendar, Award, X, Sparkles } from 'lucide-react';

const fightersData = [
  {
    id: 'subhas',
    name: 'Subhas Chandra Bose',
    years: '1897 - 1945',
    title: 'Netaji & The Azad Hind Fauj',
    contribution: 'Formed the Indian National Army (INA) to fight British forces militarily from abroad. Promoted self-rule through absolute revolutionary mobilization.',
    quote: 'Give me blood, and I will give you freedom!',
    bio: 'Subhas Chandra Bose was one of the most dynamic and charismatic leaders of India\'s independence movement. Believing that non-violence alone could not dislodge the British Empire, he traveled secretly to Europe and East Asia during World War II to organize the Indian National Army (Azad Hind Fauj). Comprising Indian prisoners of war and volunteers, the INA launched an armed campaign near the Indian borders, showing the world that Indians were prepared to sacrifice their lives on the battlefield for independence. Netaji\'s slogan "Jai Hind" and his revolutionary spirit continue to inspire generations.',
    timeline: [
      { year: '1920', text: 'Resigned from the elite Indian Civil Service (ICS) in London to join the freedom movement.' },
      { year: '1938', text: 'Elected President of the Indian National Congress, advocating radical resistance.' },
      { year: '1941', text: 'Escaped house arrest in Calcutta, traveling through Kabul and Moscow to reach Germany.' },
      { year: '1943', text: 'Arrived in Singapore and assumed leadership of the Indian National Army (INA).' }
    ],
    image: '/images/netaji.jpg'
  },
  {
    id: 'bhagat',
    name: 'Bhagat Singh',
    years: '1907 - 1931',
    title: 'The Young Revolutionary',
    contribution: 'Symbol of ultimate youth sacrifice. Influenced the revolutionary movement with his socialist philosophy and fearless defiance.',
    quote: 'They may kill me, but they cannot kill my ideas.',
    bio: 'Bhagat Singh was a brilliant intellectual and revolutionary whose martyrdom at age 23 electrified the nation. He co-founded the Naujawan Bharat Sabha and joined the Hindustan Socialist Republican Association (HSRA). In protest of repressive laws like the Public Safety Bill, he and Batukeshwar Dutt threw non-lethal bombs and distributed leaflets in the Central Legislative Assembly, voluntarily surrendering to use the trial as a platform to spread their ideals. During his imprisonment, he wrote extensively on nationalism and socialism, facing execution with legendary calmness.',
    timeline: [
      { year: '1926', text: 'Founded the Naujawan Bharat Sabha to mobilize youth and workers.' },
      { year: '1928', text: 'Participated in protests against the Simon Commission.' },
      { year: '1929', text: 'Threw pamphlets in the Legislative Assembly to "make the deaf hear".' },
      { year: '1931', text: 'Hanged in Lahore Jail, becoming an immortal icon of Indian sacrifice.' }
    ],
    image: '/images/bhagath-singh.jpg'
  },
  {
    id: 'sardar',
    name: 'Sardar Vallabhbhai Patel',
    years: '1875 - 1950',
    title: 'The Iron Man of India',
    contribution: 'Led Bardoli Satyagraha, earning the title "Sardar". Successfully integrated 562 princely states into a unified independent India.',
    quote: 'Manpower without unity is not a strength unless it is harmonized and united properly.',
    bio: 'Sardar Vallabhbhai Patel was an exceptional organizer and political statesman who led non-violent peasant protests in Kheda and Bardoli. After independence, he served as India\'s first Deputy Prime Minister and Home Minister. The partition left India fragmented, with hundreds of independent princely states. Through a masterful combination of diplomacy, political wisdom, and iron resolve, Patel integrated 562 states, establishing the political and administrative integrity of modern India.',
    timeline: [
      { year: '1918', text: 'Led Kheda Satyagraha against high taxes during famine.' },
      { year: '1928', text: 'Led Bardoli Satyagraha, where women bestowed the title "Sardar" upon him.' },
      { year: '1947', text: 'Became Home Minister, overseeing the integration of princely states.' },
      { year: '1950', text: 'Passed away, leaving a unified administrative structure.' }
    ],
    image: '/images/sardar.jpg'
  },
  {
    id: 'sarojini',
    name: 'Sarojini Naidu',
    years: '1879 - 1949',
    title: 'The Nightingale of India',
    contribution: 'Pioneering poet and activist. Led the Dharasana Salt Works protest and championed women\'s rights and national integration.',
    quote: 'We want deeper sincerity of motive, a greater courage in speech and earnestness in action.',
    bio: 'Sarojini Naidu was a brilliant poet and orator who became a leading voice in the freedom movement. She was the first Indian woman to serve as President of the Indian National Congress (1925) and the first female Governor in independent India. Alongside Mahatma Gandhi, she participated in the Salt Satyagraha, famously leading the Dharasana Satyagraha after Gandhi\'s arrest, demonstrating unwavering courage in the face of violent police crackdowns.',
    timeline: [
      { year: '1905', text: 'Joined the national movement in Bengal, advocating for Hindu-Muslim unity.' },
      { year: '1925', text: 'Elected President of the Indian National Congress.' },
      { year: '1930', text: 'Marched alongside Gandhi and led the Dharasana protest.' },
      { year: '1947', text: 'Appointed Governor of United Provinces.' }
    ],
    image: '/images/sarojini-naidu.jpg'
  },
  {
    id: 'azad',
    name: 'Chandrashekhar Azad',
    years: '1906 - 1931',
    title: 'The Fearless Leader of HSRA',
    contribution: 'Reorganized the revolutionary HSRA. Engaged in armed resistance and vowed to remain free, never letting the British capture him alive.',
    quote: 'If your blood does not rage, it is water that flows in your veins.',
    bio: 'Chandrashekhar Azad was a revolutionary who reorganized the Hindustan Socialist Republican Association (HSRA) after the collapse of the Non-Cooperation Movement. When arrested at age 15, he declared his name as "Azad" (Free). He trained revolutionaries, funded operations through political actions, and remained a constant threat to colonial authorities. True to his vow of never being captured alive, he fought a fierce gun battle in Allahabad\'s Alfred Park, using his last bullet on himself.',
    timeline: [
      { year: '1921', text: 'Arrested during non-cooperation; declared his name as Azad in court.' },
      { year: '1925', text: 'Involved in the Kakori Train action to acquire funds for weapons.' },
      { year: '1928', text: 'Reorganized HSRA with Bhagat Singh and Sukhdev.' },
      { year: '1931', text: 'Martyred in Alfred Park, Allahabad, remaining free until his last breath.' }
    ],
    image: '/images/azad.jpg'
  },
  {
    id: 'lakshmibai',
    name: 'Rani Lakshmibai',
    years: '1828 - 1858',
    title: 'The Warrior Queen of Jhansi',
    contribution: 'Fought against annexation under the Doctrine of Lapse, becoming a symbol of resistance during the Great Revolt of 1857.',
    quote: 'I will not surrender my Jhansi!',
    bio: 'Rani Lakshmibai of Jhansi is one of the most revered figures of Indian history. Following the British annexation of Jhansi under the unjust "Doctrine of Lapse", she refused to yield her kingdom. During the Great Uprising of 1857, she raised a volunteer army, fortified her palace, and fought British forces with outstanding military skill, escaping Jhansi on horseback with her infant son. She died fighting valiantly on the battlefield near Gwalior.',
    timeline: [
      { year: '1842', text: 'Married the Maharaja of Jhansi, becoming the Queen.' },
      { year: '1853', text: 'The British East India Company annexed Jhansi, rejecting her adopted heir.' },
      { year: '1857', text: 'Proclaimed Jhansi\'s independence and took command of its defenses.' },
      { year: '1858', text: 'Martyred on the battlefield near Gwalior, immortalized as a national hero.' }
    ],
    image: '/images/lakshmibhai.jpg'
  },
  {
    id: 'tilak',
    name: 'Bal Gangadhar Tilak',
    years: '1856 - 1920',
    title: 'The Father of Indian Unrest',
    contribution: 'Assertive nationalist leader. Coined the slogan of "Swaraj" and mobilized the masses through cultural festivals and national newspapers.',
    quote: 'Swaraj is my birthright and I shall have it.',
    bio: 'Bal Gangadhar Tilak was one of the first and strongest advocates of "Swaraj" (Self-Rule). A scholar and editor, he published the radical Marathi newspaper "Kesari" to critique colonial exploitation. He popularized public celebrations of Ganesh Utsav and Shivaji Jayanti to build nationalist unity across caste divisions. Tilak was imprisoned multiple times for sedition, but his fiery call for self-rule galvanized millions and paved the way for mass national movements.',
    timeline: [
      { year: '1881', text: 'Founded the newspapers Kesari (Marathi) and Mahratta (English).' },
      { year: '1893', text: 'Transformed Ganesh Utsav into a public festival to bypass British bans on political meetings.' },
      { year: '1907', text: 'Led the assertive wing of the Congress demanding complete self-governance.' },
      { year: '1916', text: 'Co-founded the Home Rule League, campaigning widely for Swaraj.' }
    ],
    image: '/images/tilak.jpg'
  },
  {
  id: 'alluri-sitarama-raju',
  name: 'Alluri Sitarama Raju',
  years: '1897 - 1924',
  title: 'The Hero of the Rampa Rebellion',
  contribution: 'Revolutionary freedom fighter who led tribal communities in the Rampa Rebellion against British colonial rule in the Madras Presidency. He opposed British forest policies and inspired tribal resistance through his leadership, courage, and guerrilla warfare.',
  quote: 'I am prepared to sacrifice my life for the freedom of my people.',
  bio: 'Alluri Sitarama Raju was a revolutionary leader who became a symbol of resistance among the tribal communities of the Eastern Ghats. He led the Rampa Rebellion of 1922–1924 against British colonial rule, particularly opposing forest laws and policies that severely restricted the traditional rights and livelihoods of tribal communities. Raju organized and led guerrilla attacks against British police stations and captured weapons to strengthen the resistance. Known for his courage, leadership, and connection with the tribal people, he became popularly known as "Manyam Veerudu" (Hero of the Forests). He was captured and executed by British forces in 1924, becoming an enduring symbol of sacrifice and resistance.',
  timeline: [
    { year: '1897', text: 'Born on 4 July 1897 in Pandrangi village in the present-day Andhra Pradesh region.' },
    { year: '1922', text: 'Led the Rampa Rebellion against British colonial rule and oppressive forest policies.' },
    { year: '1922-1924', text: 'Organized tribal resistance and conducted guerrilla operations against British forces in the Eastern Ghats.' },
    { year: '1924', text: 'Captured by British forces and executed on 7 May 1924, becoming a lasting symbol of courage and sacrifice.' }
  ],
  image: '/images/alluri.jpg'
}
];

export default function FreedomFighters() {
  const [selectedFighter, setSelectedFighter] = useState(null);

  return (
    <section id="heroes" className="py-24 bg-indiaBlue-deep relative border-t border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-indiaGreen/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-indiaGreen bg-indiaGreen/10 px-3 py-1 rounded-full border border-indiaGreen/20 inline-block mb-3">
            The Flame of Freedom
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            The Heroes Who Lit the Flame of Freedom
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Hover over their cards to feel their presence, and click "Read Their Story" to step back in time and witness their unparalleled sacrifices.
          </p>
        </div>

        {/* Fighters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {fightersData.map((fighter) => (
            <motion.div
              key={fighter.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="group relative bg-white/5 rounded-2xl border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-saffron/30 hover:shadow-[0_10px_30px_rgba(255,153,51,0.15)] flex flex-col justify-between"
            >
              {/* Card Header & Portrait */}
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={fighter.image}
                    alt={fighter.name}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                    loading="lazy"
                  />
                  {/* Saffron & Green overlays that blend on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indiaBlue-deep via-transparent to-transparent opacity-90" />
                  <div className="absolute top-3 right-3 text-xs bg-saffron/20 border border-saffron/30 px-2.5 py-1 rounded-md text-saffron font-semibold font-serif">
                    {fighter.years}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-serif text-white group-hover:text-saffron transition-colors">
                    {fighter.name}
                  </h3>
                  <p className="text-xs text-indigo-400 font-semibold uppercase tracking-wider mt-1">
                    {fighter.title}
                  </p>
                  <p className="text-gray-300 text-sm mt-3 leading-relaxed line-clamp-3">
                    {fighter.contribution}
                  </p>
                </div>
              </div>

              {/* Card Footer Quote & Action Button */}
              <div className="p-6 pt-0 border-t border-white/5 mt-4">
                {fighter.quote && (
                  <div className="my-4 relative">
                    <Quote className="w-4 h-4 text-saffron/40 absolute -top-1.5 -left-1" />
                    <p className="text-xs italic text-gray-400 pl-4 font-serif leading-relaxed line-clamp-2">
                      "{fighter.quote}"
                    </p>
                  </div>
                )}
                <button
                  onClick={() => setSelectedFighter(fighter)}
                  className="w-full mt-2 py-2.5 bg-white/5 hover:bg-gradient-to-r hover:from-saffron hover:to-indiaGreen hover:text-white border border-white/10 hover:border-transparent text-gray-300 rounded-xl text-sm font-semibold transition-all duration-300"
                >
                  Read Their Story
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Biography Fullscreen/Large Overlay Modal */}
      <AnimatePresence>
        {selectedFighter && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl bg-stone-900 rounded-3xl border border-stone-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedFighter(null)}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/50 hover:bg-black/80 text-gray-400 hover:text-white border border-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Large Portrait & Quote overlay */}
              <div className="w-full md:w-2/5 relative h-72 md:h-auto min-h-[300px]">
                <img
                  src={selectedFighter.image}
                  alt={selectedFighter.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-stone-950/30 md:bg-gradient-to-r md:from-stone-950/20 md:to-stone-950" />
                
                {/* Years badge */}
                <div className="absolute top-4 left-4 bg-saffron px-3 py-1.5 rounded-lg text-white font-bold font-serif text-sm border-glow-saffron">
                  {selectedFighter.years}
                </div>

                {/* Floating Quotes Overlay */}
                {selectedFighter.quote && (
                  <div className="absolute bottom-6 left-6 right-6 p-4 glassmorphism rounded-2xl border border-white/10 shadow-lg">
                    <Quote className="w-5 h-5 text-saffron mb-1.5" />
                    <p className="text-sm font-serif italic text-white leading-relaxed">
                      "{selectedFighter.quote}"
                    </p>
                  </div>
                )}
              </div>

              {/* Right Side: Details & Biography Text */}
              <div className="w-full md:w-3/5 p-6 md:p-10 overflow-y-auto flex flex-col justify-between h-[50vh] md:h-auto">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-saffron" />
                    <span className="text-xs font-bold text-saffron uppercase tracking-widest">
                      National Legend
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black font-serif text-white mb-1">
                    {selectedFighter.name}
                  </h3>
                  <h4 className="text-sm text-indigo-400 font-semibold tracking-wide uppercase mb-6">
                    {selectedFighter.title}
                  </h4>

                  {/* Biography */}
                  <div className="space-y-4">
                    <h5 className="text-xs uppercase font-bold text-gray-400 tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-indiaGreen" /> The Life & Legacy
                    </h5>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {selectedFighter.bio}
                    </p>
                  </div>

                  {/* Micro-Timeline */}
                  <div className="mt-8">
                    <h5 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-4 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-saffron" /> Key Historical Milestones
                    </h5>
                    <div className="relative border-l-2 border-stone-800 ml-2 space-y-4">
                      {selectedFighter.timeline.map((item, idx) => (
                        <div key={idx} className="relative pl-6">
                          <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-saffron border-2 border-stone-900" />
                          <span className="text-xs font-bold text-saffron font-serif bg-saffron/10 px-2 py-0.5 rounded border border-saffron/20">
                            {item.year}
                          </span>
                          <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-stone-800 flex justify-end">
                  <button
                    onClick={() => setSelectedFighter(null)}
                    className="px-6 py-2 bg-stone-800 hover:bg-stone-700 text-white rounded-xl text-sm font-semibold transition-colors"
                  >
                    Close Biography
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
