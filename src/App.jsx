import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FreedomTimeline from './components/FreedomTimeline';
import FreedomFighters from './components/FreedomFighters';
import QuoteSection from './components/QuoteSection';
import InspirationSection from './components/InspirationSection';
import OrdinaryIndians from './components/OrdinaryIndians';
import IndiaMap from './components/IndiaMap';
import FlagCeremony from './components/FlagCeremony';
import NationalAnthem from './components/NationalAnthem';
import Celebration from './components/Celebration';
import FreedomToday from './components/FreedomToday';
import FreedomPledge from './components/FreedomPledge';
import Footer from './components/Footer';

export default function App() {
  const [flagHoisted, setFlagHoisted] = useState(false);

  return (
    <div className="relative min-h-screen bg-indiaBlue-deep text-white font-sans selection:bg-saffron/30 overflow-x-hidden">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Section: The Dawn of Freedom */}
      <Hero />

      {/* Narrative Section 1: The Timeline of Struggle */}
      <div className="relative">
        {/* Subtle decorative dividing section text */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent pointer-events-none" />
        <FreedomTimeline />
      </div>

      {/* Narrative Section 2: Freedom Fighters */}
      <FreedomFighters />

      {/* Narrative Section 3: Cinematic Quotes */}
      <QuoteSection />

      {/* Narrative Section 4: Engine of Inspiration */}
      <InspirationSection />

      {/* Narrative Section 5: Unsung Million Heroes */}
      <OrdinaryIndians />

      {/* Narrative Section 6: Interactive Geography Map */}
      <IndiaMap />

      {/* Narrative Section 7: Flag Hoisting Ceremony */}
      <FlagCeremony onHoisted={() => setFlagHoisted(true)} />

      {/* Narrative Section 8: National Anthem Experience */}
      <div id="anthem-container" className="scroll-mt-20">
        <NationalAnthem />
      </div>

      {/* Narrative Section 9: Grand Jubilee Celebration */}
      <Celebration />

      {/* Narrative Section 10: What Freedom Means Today */}
      <FreedomToday />

      {/* Narrative Section 11: Interactive Freedom Pledge */}
      <FreedomPledge />

      {/* Narrative Section 12: Cinematic Credits Footer */}
      <Footer />
    </div>
  );
}
