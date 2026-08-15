import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, BookOpen, ChevronLeft, ChevronRight, X } from 'lucide-react';

const quotesList = [
  {
    text: "Swaraj is my birthright and I shall have it.",
    author: "Bal Gangadhar Tilak",
    context: "Declared during his struggles for self-governance and swarajya under British colonial rule."
  },
  {
    text: "Give me blood, and I will give you freedom!",
    author: "Subhas Chandra Bose",
    context: "Spoken during a speech to the soldiers of the Indian National Army (INA) in Burma in 1944."
  },
  {
    text: "They may kill me, but they cannot kill my ideas. They can crush my body, but they will not be able to crush my spirit.",
    author: "Bhagat Singh",
    context: "Written during his imprisonment in Lahore Jail prior to his execution in 1931."
  },
  {
    text: "Manpower without unity is not a strength unless it is harmonized and united properly, then only it becomes a spiritual power.",
    author: "Sardar Vallabhbhai Patel",
    context: "Addressing the peasants and citizens of India during unification campaigns."
  },
  {
    text: "We want deeper sincerity of motive, a greater courage in speech and earnestness in action.",
    author: "Sarojini Naidu",
    context: "Excerpt from her national speeches advocating for civic courage and equal rights."
  },
  {
    text: "If your blood does not rage, then it is water that flows in your veins. For what is the flush of youth, if it is not dedicated to the motherland?",
    author: "Chandrashekhar Azad",
    context: "Expressing his revolutionary philosophy to young volunteers of the HSRA."
  },
  {
    text: "Satyameva Jayate (Truth alone triumphs)",
    author: "Mundaka Upanishad (Popularized by Madan Mohan Malaviya)",
    context: "Adopted as a national slogan, Malaviya popularized it during his presidency of the Indian National Congress in 1918."
  }
];

export default function QuoteSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotesList.length);
    }, 8000); // Transitions every 8 seconds
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % quotesList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + quotesList.length) % quotesList.length);
  };

  return (
    <section id="quotes" className="py-24 bg-indiaBlue-deep relative border-t border-white/5 overflow-hidden">
      {/* Cinematic Tricolor background lights */}
      <div className="absolute top-[10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-saffron/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-indiaGreen/10 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-saffron bg-saffron/10 px-3 py-1 rounded-full border border-saffron/20 inline-block mb-3">
            Voices of Patriotism
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Their Words Became Our Strength
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[250px] sm:min-h-[220px] flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6 }}
              className="px-8 sm:px-16"
            >
              <Quote className="w-10 h-10 text-saffron mx-auto mb-6 opacity-40" />
              <p className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-gray-100 leading-relaxed italic">
                "{quotesList[currentIndex].text}"
              </p>
              
              {/* Divider */}
              <div className="w-12 h-0.5 bg-gradient-to-r from-saffron to-indiaGreen mx-auto my-6" />

              <h4 className="text-md sm:text-lg font-bold text-saffron font-serif">
                — {quotesList[currentIndex].author}
              </h4>
              <p className="text-xs text-gray-500 mt-1 max-w-lg mx-auto">
                {quotesList[currentIndex].context}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-0 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            aria-label="Next quote"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* View All Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-4 px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 inline-flex items-center gap-2 hover:scale-105"
        >
          <BookOpen className="w-4 h-4 text-saffron" />
          Hear More Voices of Freedom
        </button>
      </div>

      {/* Complete Quote Collection Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-stone-900 rounded-3xl border border-stone-800 shadow-2xl p-6 md:p-10 max-h-[85vh] flex flex-col justify-between"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-gray-400 hover:text-white border border-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto pr-2">
                <div className="flex items-center gap-2.5 mb-6">
                  <Quote className="w-6 h-6 text-saffron" />
                  <h3 className="text-2xl font-bold font-serif text-white">
                    Historical Quotes of Independence
                  </h3>
                </div>

                <div className="space-y-6">
                  {quotesList.map((item, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-white/5 rounded-2xl border border-white/5 space-y-2 text-left"
                    >
                      <p className="text-base font-serif italic text-gray-200 leading-relaxed">
                        "{item.text}"
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-2 border-t border-white/5 gap-1.5">
                        <span className="text-xs font-bold text-saffron font-serif">
                          — {item.author}
                        </span>
                        <span className="text-[10px] text-gray-500 font-medium">
                          {item.context}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-800 flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 bg-stone-800 hover:bg-stone-700 text-white rounded-xl text-sm font-semibold transition-colors"
                >
                  Close Archive
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
