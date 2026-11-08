import React, { useState } from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { ArrowDown, Droplets, ArrowUpRight } from 'lucide-react';

export default function Hero({ onOpenBirthday }) {
  const { hero, socials } = SITE_DATA;
  const [isSpraying, setIsSpraying] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const triggerSpray = () => {
    soundEngine.playSpray();
    setIsSpraying(true);
    setTimeout(() => setIsSpraying(false), 1400);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto">
      {/* 1. Archival Lookbook Header Ledger */}
      <div className="flex items-center justify-between pb-6 border-b border-stone-200/80 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.28em] text-stone-500">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f878b3]" />
          <span>N° 01 &bull; L'ART OLFATIF</span>
        </div>
        <div className="hidden sm:block text-stone-400">
          GRASSE &bull; PARIS &bull; MOSCOU
        </div>
        <div className="flex items-center gap-2">
          <span>ÉDITION PRIVÉE 2026</span>
        </div>
      </div>

      {/* 2. Grand Masthead Typographic Display */}
      <div className="pt-10 sm:pt-14 pb-8 sm:pb-12 border-b border-stone-200/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
          <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#e8559a] font-medium">
            Парфюмерный исследователь &bull; Создательница SLUU
          </div>
          <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-stone-400">
            {hero.coordinates || "43°39′36″N 6°55′30″E • Grasse"}
          </div>
        </div>

        <h1 className="font-serif text-[13vw] sm:text-[11vw] lg:text-[7.5rem] xl:text-[8.5rem] font-light leading-[0.88] tracking-tight text-stone-900 select-none">
          НАСТЯ <span className="italic font-extralight text-stone-400">СИВЕЦ</span>
        </h1>
      </div>

      {/* 3. Grand Asymmetric Lookbook Composition */}
      <div className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Natural Unconstrained Museum-Grade Portrait */}
        <div className="lg:col-span-6 xl:col-span-6 relative">
          <div className="relative aspect-[3/4] sm:aspect-[4/5] max-h-[720px] overflow-hidden bg-stone-100 group shadow-sm">
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

            {/* Scent Mist Bloom Animation Overlay */}
            {isSpraying && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                <div className="w-80 h-80 rounded-full bg-radial from-[#f878b3]/50 via-[#f878b3]/20 to-transparent animate-mist" />
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.25em] text-white bg-stone-900/85 px-4 py-2 rounded-full backdrop-blur-md shadow-lg">
                  ✨ Ольфакторный шлейф
                </div>
              </div>
            )}

            {/* Refined Atomizer Spray Trigger */}
            <button
              onClick={triggerSpray}
              className="absolute bottom-5 right-5 z-20 px-4 py-2.5 rounded-full bg-stone-900/85 hover:bg-stone-900 text-white backdrop-blur-md text-[11px] font-mono uppercase tracking-[0.2em] flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
              title="Распылить авторский аромат Насти Сивец"
            >
              <Droplets className="w-3.5 h-3.5 text-[#f878b3]" />
              <span>Распылить аромат</span>
            </button>
          </div>

          {/* Museum Caption */}
          <div className="mt-3.5 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.22em] text-stone-400">
            <span>FIG. 01 — NASTYA SIVETS</span>
            <span>SLUU ATELIER &bull; ARCHIVE 2026</span>
          </div>
        </div>

        {/* Right Column: Editorial Bio, Curated Accords & Pure Architectural Navigation */}
        <div className="lg:col-span-6 xl:col-span-6 space-y-10 lg:pt-4">
          {/* Editorial Lead Paragraphs */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] text-stone-900 font-light leading-[1.25]">
              Исследование невидимой архитектуры ароматов, редких селективных формул и ольфакторной памяти.
            </h2>
            <p className="text-stone-600 font-light leading-relaxed text-sm sm:text-base">
              {hero.shortBio}
            </p>
          </div>

          {/* Curated Scent Chords (High-Fashion Index Ledger, no tacky pills) */}
          <div className="pt-6 border-t border-stone-200/80 space-y-2.5">
            <div className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-mono">
              Ольфакторный фокус &bull; Авторские аккорды:
            </div>
            <div className="text-sm text-stone-800 font-serif italic tracking-wide leading-relaxed">
              Filippo Sorcinelli &bull; Zoologist &bull; Orris Butter &bull; Lactonic Accords &bull; Iso E Super &bull; Ambroxan &bull; Byredo &bull; Niche Layering
            </div>
          </div>

          {/* Architectural Action Links */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#pyramid"
              onClick={() => soundEngine.playClick()}
              className="editorial-btn-dark px-8 py-4 rounded-full flex items-center justify-center gap-2.5 shadow-sm text-center"
            >
              <span>Атлас редких нот</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#f878b3]" />
            </a>

            <a
              href="#education"
              onClick={() => soundEngine.playClick()}
              className="editorial-btn-light px-7 py-4 rounded-full flex items-center justify-center gap-2.5 shadow-2xs text-center"
            >
              <span>Курс с Синхронизацией</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#c5a059]" />
            </a>

            <a
              href="#sluu"
              onClick={() => soundEngine.playClick()}
              className="px-6 py-4 text-stone-600 hover:text-stone-900 text-xs font-mono uppercase tracking-[0.2em] transition-colors underline underline-offset-8 decoration-stone-300 hover:decoration-[#f878b3] text-center"
            >
              Ателье SLUU &rarr;
            </a>
          </div>

          {/* Mini Credential Summary */}
          <div className="pt-8 border-t border-stone-200/80 grid grid-cols-2 gap-6 text-xs">
            <div>
              <div className="font-serif text-2xl font-light text-stone-900 mb-0.5">48 000+</div>
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-stone-400">
                Читателей в Telegram
              </div>
            </div>
            <div>
              <div className="font-serif text-2xl font-light text-stone-900 mb-0.5">120 000+</div>
              <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-stone-400">
                Просмотров расследований
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Lookbook Ledger: Socials & Chapter 01 Prompt */}
      <div className="pt-6 border-t border-stone-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-mono uppercase tracking-[0.2em] text-stone-500">
        <div className="flex flex-wrap items-center gap-6 sm:gap-8">
          {socials.map((soc) => (
            <a
              key={soc.name}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="text-stone-600 hover:text-stone-900 transition-colors flex items-center gap-1.5"
            >
              <span>{soc.name}</span>
              <span className="text-[10px] text-stone-400 lowercase">({soc.handle})</span>
            </a>
          ))}
        </div>

        <a
          href="#persona"
          onClick={() => soundEngine.playClick()}
          className="hidden md:flex items-center gap-2 text-stone-400 hover:text-stone-800 transition-colors"
        >
          <span>Chapitre 01 &bull; Persona</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#e8559a]" />
        </a>
      </div>
    </section>
  );
}
