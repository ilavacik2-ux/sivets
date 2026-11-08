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
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#1C1917] selection:bg-[#F878B3] selection:text-white overflow-hidden">
      {/* Soft warm luminous background gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-[#FDF2F7]/80 via-[#FCE7F3]/40 to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute top-[35vh] -left-[10vw] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-gradient-to-tr from-[#FDF8EE]/90 via-[#F8EFE4]/50 to-transparent rounded-full blur-3xl opacity-75" />
        <div className="absolute top-[80vh] right-[5vw] w-[45vw] h-[45vw] max-w-[650px] max-h-[650px] bg-gradient-to-bl from-[#FCE7F3]/50 via-[#FAF0F5]/40 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute top-[160vh] left-[5vw] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-gradient-to-r from-[#FAF4EC]/70 to-[#FDF2F7]/50 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] max-w-[850px] max-h-[850px] bg-gradient-to-tl from-[#FCE7F3]/60 via-[#F8EFE4]/40 to-transparent rounded-full blur-3xl opacity-65" />
      </div>

      {/* Living Ambient Fragrance Atmosphere Canvas */}
      <FragranceAura />

      {/* Floating Header */}
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
