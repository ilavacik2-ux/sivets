import React, { useState } from 'react';
import FragranceAura from './components/FragranceAura';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OlfactivePyramid from './components/OlfactivePyramid';
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
    <div className="relative min-h-screen bg-[#09080a] text-[#f5f2f1] selection:bg-[#f878b3] selection:text-black">
      {/* Living Ambient Fragrance Atmosphere Canvas */}
      <FragranceAura />

      {/* Floating Haute Parfumerie Header */}
      <Navbar onOpenBirthday={() => setBirthdayOpen(true)} />

      {/* Editorial Content Exhibition */}
      <main className="relative z-10">
        <Hero onOpenBirthday={() => setBirthdayOpen(true)} />
        <OlfactivePyramid />
        <OnlineCourse />
        <LecturesAndGuides />
        <VideoSection />
        <SluuBrand />
        <PerfumeOutlet />
        <Collaboration />
      </main>

      {/* Footer & Legal Dossier */}
      <Footer />

      {/* Interactive November 14 Birthday Experience Modal */}
      <BirthdayModal
        isOpen={birthdayOpen}
        onClose={() => setBirthdayOpen(false)}
      />
    </div>
  );
}
