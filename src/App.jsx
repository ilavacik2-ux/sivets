import React, { useState } from 'react';
import FragranceAura from './components/FragranceAura';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OnlineCourse from './components/OnlineCourse';
import LecturesAndGuides from './components/LecturesAndGuides';
import VideoSection from './components/VideoSection';
import SluuBrand from './components/SluuBrand';
import PerfumeOutlet from './components/PerfumeOutlet';
import Collaboration from './components/Collaboration';
import Footer from './components/Footer';
import BirthdayModal from './components/BirthdayModal';

export default function App() {
  const [birthdayOpen, setBirthdayOpen] = useState(false);

  return (
    <div className="relative min-h-screen selection:bg-[#f878b3] selection:text-white">
      {/* Dynamic ambient fragrance particles */}
      <FragranceAura />

      {/* Floating Header */}
      <Navbar onOpenBirthday={() => setBirthdayOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <OnlineCourse />
        <LecturesAndGuides />
        <VideoSection />
        <SluuBrand />
        <PerfumeOutlet />
        <Collaboration />
      </main>

      {/* Footer */}
      <Footer />

      {/* Birthday Surprise Interactive Modal */}
      <BirthdayModal
        isOpen={birthdayOpen}
        onClose={() => setBirthdayOpen(false)}
      />
    </div>
  );
}
