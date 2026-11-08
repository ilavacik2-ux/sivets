import React, { useState } from 'react';
import FragranceAura from './components/FragranceAura';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OlfactivePersona from './components/OlfactivePersona';
import VideoSection from './components/VideoSection';
import EducationAndMasterclasses from './components/EducationAndMasterclasses';
import SluuBrand from './components/SluuBrand';
import Collaboration from './components/Collaboration';
import Footer from './components/Footer';
import PublicOfferModal from './components/PublicOfferModal';
import SupportBot from './components/SupportBot';

export default function App() {
  const [isOfferOpen, setIsOfferOpen] = useState(false);
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
      <Navbar />

      {/* Editorial Content Experience */}
      <main className="relative z-10">
        {/* Editorial Hero Monograph */}
        <Hero />

        {/* Section: The Olfactive Persona */}
        <OlfactivePersona />

        {/* Education & Masterclasses (Course, Lectures, Audio Guide & Merch) */}
        <EducationAndMasterclasses />

        {/* Section: Selected Video Investigations */}
        <VideoSection />

        {/* SLUU Aromatherapy Atelier */}
        <SluuBrand />

        {/* PR & Collaboration */}
        <Collaboration />
      </main>

      {/* Footer & Colophon */}
      <Footer onOpenOffer={() => setIsOfferOpen(true)} />

      {/* Floating Interactive Care / Support Bot (just like on Nastya's site) */}
      <SupportBot />

      {/* Public Legal Offer Modal */}
      <PublicOfferModal
        isOpen={isOfferOpen}
        onClose={() => setIsOfferOpen(false)}
      />
    </div>
  );
}
