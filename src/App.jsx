import React, { useState } from 'react';
import FragranceAura from './components/FragranceAura';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OlfactivePersona from './components/OlfactivePersona';
import OlfactivePyramid from './components/OlfactivePyramid';
import VideoSection from './components/VideoSection';
import EducationAndMasterclasses from './components/EducationAndMasterclasses';
import SluuBrand from './components/SluuBrand';
import PerfumeOutlet from './components/PerfumeOutlet';
import BirthdayCapsule from './components/BirthdayCapsule';
import Collaboration from './components/Collaboration';
import Footer from './components/Footer';
import BirthdayModal from './components/BirthdayModal';

export default function App() {
  const [birthdayOpen, setBirthdayOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#FAF8F5] text-[#1C1917] selection:bg-[#F878B3] selection:text-white overflow-hidden">
      {/* Subtle warm architectural ambient light */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[45vw] h-[45vw] max-w-[650px] max-h-[650px] bg-gradient-to-br from-[#FDF2F7]/40 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute top-[45vh] -left-[10vw] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-gradient-to-tr from-[#FDF8EE]/50 to-transparent rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-[45vw] h-[45vw] max-w-[650px] max-h-[650px] bg-gradient-to-tl from-[#FCE7F3]/30 to-transparent rounded-full blur-3xl opacity-40" />
      </div>

      {/* Living Ambient Fragrance Atmosphere Canvas */}
      <FragranceAura />

      {/* Floating Architectural Header */}
      <Navbar onOpenBirthday={() => setBirthdayOpen(true)} />

      {/* High-Fashion Editorial Monograph Experience */}
      <main className="relative z-10">
        {/* Editorial Hero Monograph */}
        <Hero onOpenBirthday={() => setBirthdayOpen(true)} />

        {/* Chapter 01: The Olfactive Persona */}
        <OlfactivePersona />

        {/* Chapter 02: The Scent Archive & Notes */}
        <OlfactivePyramid />

        {/* Chapter 03: Selected Video Investigations */}
        <VideoSection />

        {/* Chapter 04: Education & Masterclasses */}
        <EducationAndMasterclasses />

        {/* Chapter 05: SLUU Aromatherapy Atelier */}
        <SluuBrand />

        {/* Chapter 06: Perfume Outlet */}
        <PerfumeOutlet />

        {/* Chapter 07: 14 November Capsule */}
        <BirthdayCapsule onOpenBirthday={() => setBirthdayOpen(true)} />

        {/* Chapter 08: PR & Collaboration */}
        <Collaboration />
      </main>

      {/* Footer & Colophon */}
      <Footer />

      {/* Interactive November 14 Birthday Experience Modal */}
      <BirthdayModal
        isOpen={birthdayOpen}
        onClose={() => setBirthdayOpen(false)}
      />
    </div>
  );
}
