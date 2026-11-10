import React, { useState } from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { IconTelegram, IconYouTube, IconInstagram, IconTikTok, IconVKVideo } from './Icons';

export default function Hero() {
  const { hero, socials } = SITE_DATA;
  const [imgLoaded, setImgLoaded] = useState(false);
  const [activeChord, setActiveChord] = useState(null);

  const getSocialIcon = (name) => {
    switch (name) {
      case 'Telegram':
        return <IconTelegram className="w-4 h-4 text-[#229ED9]" />;
      case 'YouTube':
        return <IconYouTube className="w-4 h-4 text-[#FF0000]" />;
      case 'Instagram':
      case 'Instagram*':
        return <IconInstagram className="w-4 h-4 text-[#E4405F]" />;
      case 'TikTok':
        return <IconTikTok className="w-4 h-4 text-stone-900" />;
      case 'VK Видео':
        return <IconVKVideo className="w-4 h-4 text-[#0077FF]" />;
      default:
        return null;
    }
  };

  const chords = [
    { name: 'Filippo Sorcinelli', freq: 440, note: 'Дымный ладан & готика' },
    { name: 'Zoologist', freq: 528, note: 'Анималистичный авангард' },
    { name: 'Orris Butter', freq: 587, note: 'Масло корня ириса' },
    { name: 'Lactonic Accords', freq: 659, note: 'Сливочные молочные ноты' },
    { name: 'Iso E Super', freq: 740, note: 'Древесно-бархатная аура' },
    { name: 'Ambroxan', freq: 784, note: 'Минеральное тепло кожи' },
    { name: 'Byredo', freq: 880, note: 'Шведский минимализм' },
    { name: 'Niche Layering', freq: 988, note: 'Искусство наслоения' }
  ];

  return (
    <section className="relative flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto">
      {/* 1. Grand Masthead Typographic Display */}
      <div className="pt-1 sm:pt-2 pb-6 sm:pb-8 border-b border-stone-200/60 flex flex-col md:flex-row md:items-end justify-between gap-3">
        <h1 className="font-serif text-[12vw] sm:text-[10vw] lg:text-[7.2rem] xl:text-[8.2rem] font-light leading-[0.88] tracking-tight text-stone-900 select-none">
          НАСТЯ <span className="italic font-extralight text-stone-400">СИВЕЦ</span>
        </h1>
        <div className="text-xs sm:text-sm font-sans uppercase tracking-[0.14em] text-stone-600 font-semibold md:pb-2 whitespace-nowrap">
          Москва &bull; Париж &bull; Грас
        </div>
      </div>

      {/* 2. Composition Grid */}
      <div className="py-7 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Natural Museum-Grade Portrait with Floating Label */}
        <div className="lg:col-span-6 xl:col-span-6 relative">
          <div className="relative aspect-[3/4] sm:aspect-[4/5] max-h-[660px] overflow-hidden bg-stone-100 group rounded-3xl shadow-md border border-stone-200/80">
            <img
              src={hero.image}
              alt="Настя Сивец — парфюмерный исследователь"
              fetchPriority="high"
              width={800}
              height={1000}
              onLoad={() => setImgLoaded(true)}
              className={`w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.01] transition-all duration-1000 ease-out group-hover:scale-[1.02] ${
                imgLoaded ? 'opacity-100' : 'opacity-85'
              }`}
            />

            {/* Subtle clean frame border without obstructive overlays */}
          </div>
        </div>

        {/* Right Column: Editorial Bio, Interactive Scent Accords & Immediate Action Links */}
        <div className="lg:col-span-6 xl:col-span-6 space-y-8">
          {/* Editorial Lead Paragraphs */}
          <div className="space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-stone-900 font-normal leading-[1.22] tracking-tight">
              Исследование невидимой архитектуры ароматов, редких композиций и ольфакторной памяти.
            </h2>
            <p className="text-stone-700 font-normal leading-relaxed text-base sm:text-lg">
              {hero.shortBio}
            </p>
          </div>

          {/* Interactive Sensory Scent Accords — Refined Haute Parfumerie Design */}
          <div className="pt-6 border-t border-stone-200/90 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f878b3]" />
              <span className="text-xs uppercase tracking-[0.18em] text-stone-900 font-sans font-bold">
                Ольфакторный фокус &bull; Авторские аккорды
              </span>
            </div>

            {/* Interactive Accord Chips — Haute Couture pill styling */}
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {chords.map((chord, idx) => {
                const isActive = activeChord === chord.name;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      soundEngine.playChime(chord.freq, 0.8);
                      setActiveChord(isActive ? null : chord.name);
                    }}
                    className={`group relative px-4 py-2.5 rounded-full text-xs sm:text-sm font-sans tracking-wide transition-all duration-300 cursor-pointer border ${
                      isActive
                        ? 'bg-stone-900 text-white border-stone-900 shadow-md ring-2 ring-[#f878b3]/40'
                        : 'bg-white hover:bg-stone-50 text-stone-800 border-stone-200 hover:border-stone-400 shadow-2xs'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        isActive ? 'bg-[#f878b3]' : 'bg-stone-300 group-hover:bg-[#f878b3]'
                      }`} />
                      <span className="font-medium">{chord.name}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Chord Detail Card — Elegant luxury drawer */}
            {activeChord && (
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FAF8F5] to-white border border-[#f878b3]/30 text-stone-900 animate-in fade-in duration-300 flex items-center justify-between shadow-sm">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-sans font-bold text-[#e8559a] uppercase tracking-widest">
                      Нота композиции
                    </span>
                    <span className="text-stone-300">&bull;</span>
                    <span className="font-serif italic text-stone-900 font-medium text-base sm:text-lg">
                      {activeChord}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans font-normal">
                    {chords.find(c => c.name === activeChord)?.note}
                  </p>
                </div>
                <button
                  onClick={() => setActiveChord(null)}
                  className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-400 hover:text-stone-700 flex items-center justify-center transition-colors cursor-pointer shrink-0 ml-4"
                  aria-label="Закрыть"
                >
                  &times;
                </button>
              </div>
            )}
          </div>

          {/* Architectural Action Links - Clean, Prominent & Immediately Visible */}
          <div className="pt-3 flex flex-wrap items-center gap-3.5">
            <a
              href="#course"
              onClick={() => soundEngine.playClick()}
              className="editorial-btn-dark px-7 py-4 rounded-full inline-flex items-center justify-center gap-2.5 shadow-sm text-center whitespace-nowrap cursor-pointer hover:scale-105 transition-all text-xs sm:text-sm font-semibold"
            >
              <span>Курс с Синхронизацией</span>
              <ArrowUpRight className="w-4 h-4 text-[#f878b3]" />
            </a>

            <a
              href="#sluu"
              onClick={() => soundEngine.playClick()}
              className="editorial-btn-light px-7 py-4 rounded-full inline-flex items-center justify-center gap-2.5 shadow-2xs text-center whitespace-nowrap cursor-pointer hover:scale-105 transition-all text-xs sm:text-sm font-semibold"
            >
              <span>Ателье SLUU</span>
              <ArrowDown className="w-4 h-4 text-[#c5a059]" />
            </a>

            <a
              href="#persona"
              onClick={() => soundEngine.playClick()}
              className="px-6 py-4 rounded-full border border-stone-300 hover:border-stone-500 bg-white text-stone-800 hover:text-stone-900 text-xs sm:text-sm font-sans font-semibold uppercase tracking-[0.12em] transition-all inline-flex items-center justify-center whitespace-nowrap cursor-pointer shadow-2xs hover:scale-105"
            >
              Философия &rarr;
            </a>
          </div>

          {/* Mini Credential Summary - Large, legible numbers and text */}
          <div className="pt-6 border-t border-stone-200/90 grid grid-cols-2 gap-6">
            <div>
              <div className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 mb-1">
                48 000+
              </div>
              <div className="text-xs sm:text-sm font-sans uppercase tracking-[0.12em] text-stone-600 font-semibold">
                Читателей в Telegram
              </div>
            </div>
            <div>
              <div className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 mb-1">
                120 000+
              </div>
              <div className="text-xs sm:text-sm font-sans uppercase tracking-[0.12em] text-stone-600 font-semibold">
                Просмотров расследований
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Ledger: Sleek Luxury Social Links */}
      <div className="pt-6 border-t border-stone-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="text-xs sm:text-sm font-sans uppercase tracking-[0.14em] text-stone-700 font-bold">
          ОФИЦИАЛЬНЫЕ РЕСУРСЫ:
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {socials.map((soc) => (
            <a
              key={soc.name}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-stone-300 hover:border-stone-500 hover:shadow-xs transition-all text-xs sm:text-sm font-sans font-semibold uppercase tracking-[0.08em] text-stone-900 cursor-pointer hover:scale-105"
            >
              <span className="transition-transform group-hover:scale-110">
                {getSocialIcon(soc.name)}
              </span>
              <span className="font-semibold text-stone-900">{soc.name}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-900 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
