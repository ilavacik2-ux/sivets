import React, { useState } from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
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
    <section className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto">
      {/* 1. Grand Masthead Typographic Display */}
      <div className="pt-2 sm:pt-4 pb-8 sm:pb-10 border-b border-stone-200/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-3">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.24em] text-[#e8559a] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Парфюмерный исследователь &bull; Создательница SLUU</span>
          </div>
          <div className="text-[11px] font-sans uppercase tracking-[0.18em] text-stone-400 font-medium">
            Москва &bull; Париж &bull; Грас
          </div>
        </div>

        <h1 className="font-serif text-[12vw] sm:text-[10vw] lg:text-[7.2rem] xl:text-[8.2rem] font-light leading-[0.88] tracking-tight text-stone-900 select-none">
          НАСТЯ <span className="italic font-extralight text-stone-400">СИВЕЦ</span>
        </h1>
      </div>

      {/* 2. Composition Grid */}
      <div className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
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

            {/* Architectural Glass Label on Portrait */}
            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/60 shadow-lg flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#f878b3] animate-pulse" />
                <span className="text-[11px] font-sans font-medium uppercase tracking-[0.16em] text-stone-900">
                  Архив формул & исследований
                </span>
              </div>
              <span className="text-[10px] font-mono text-stone-400">
                2026
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Bio, Interactive Scent Accords & Immediate Action Links */}
        <div className="lg:col-span-6 xl:col-span-6 space-y-8">
          {/* Editorial Lead Paragraphs */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.2rem] text-stone-900 font-light leading-[1.25]">
              Исследование невидимой архитектуры ароматов, редких композиций и ольфакторной памяти.
            </h2>
            <p className="text-stone-600 font-light leading-relaxed text-sm sm:text-base">
              {hero.shortBio}
            </p>
          </div>

          {/* Interactive Sensory Scent Accords (WOW Factor) */}
          <div className="pt-5 border-t border-stone-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.2em] text-stone-900 font-sans font-semibold">
                ОЛЬФАКТОРНЫЙ ФОКУС &bull; АВТОРСКИЕ АККОРДЫ:
              </span>
              <span className="text-[10px] text-stone-400 font-sans">
                нажмите для отклика
              </span>
            </div>

            {/* Interactive Accord Chips */}
            <div className="flex flex-wrap gap-2">
              {chords.map((chord, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    soundEngine.playChime(chord.freq, 0.8);
                    setActiveChord(activeChord === chord.name ? null : chord.name);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-serif italic tracking-wide transition-all duration-300 cursor-pointer border ${
                    activeChord === chord.name
                      ? 'bg-stone-900 text-white border-stone-900 shadow-sm scale-105'
                      : 'bg-white hover:bg-[#FAF8F5] text-stone-800 border-stone-200/90 hover:border-stone-400 hover:scale-105'
                  }`}
                  title={chord.note}
                >
                  <span>{chord.name}</span>
                </button>
              ))}
            </div>

            {/* Active Chord Micro-Note */}
            {activeChord && (
              <div className="p-3 rounded-xl bg-[#fdf2f7] border border-[#f878b3]/30 text-xs font-sans text-stone-700 animate-in fade-in duration-200 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-[#e8559a] mr-2">НОТА:</span>
                  <span>{chords.find(c => c.name === activeChord)?.note}</span>
                </div>
                <button
                  onClick={() => setActiveChord(null)}
                  className="text-stone-400 hover:text-stone-700 text-xs"
                >
                  &times;
                </button>
              </div>
            )}
          </div>

          {/* Architectural Action Links - Clean, Prominent & Immediately Visible */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#course"
              onClick={() => soundEngine.playClick()}
              className="editorial-btn-dark px-6 py-3.5 rounded-full inline-flex items-center justify-center gap-2 shadow-sm text-center whitespace-nowrap cursor-pointer hover:scale-105 transition-all"
            >
              <span>Курс с Синхронизацией</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#f878b3]" />
            </a>

            <a
              href="#sluu"
              onClick={() => soundEngine.playClick()}
              className="editorial-btn-light px-6 py-3.5 rounded-full inline-flex items-center justify-center gap-2 shadow-2xs text-center whitespace-nowrap cursor-pointer hover:scale-105 transition-all"
            >
              <span>Ателье SLUU</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#c5a059]" />
            </a>

            <a
              href="#persona"
              onClick={() => soundEngine.playClick()}
              className="px-5 py-3.5 rounded-full border border-stone-200 hover:border-stone-400 bg-white text-stone-700 hover:text-stone-900 text-xs font-sans font-medium uppercase tracking-[0.14em] transition-all inline-flex items-center justify-center whitespace-nowrap cursor-pointer"
            >
              Философия &rarr;
            </a>
          </div>

          {/* Mini Credential Summary */}
          <div className="pt-6 border-t border-stone-200/80 grid grid-cols-2 gap-6 text-xs">
            <div>
              <div className="font-serif text-2xl font-light text-stone-900 mb-0.5">48 000+</div>
              <div className="text-[10px] font-sans uppercase tracking-[0.16em] text-stone-400 font-medium">
                Читателей в Telegram
              </div>
            </div>
            <div>
              <div className="font-serif text-2xl font-light text-stone-900 mb-0.5">120 000+</div>
              <div className="text-[10px] font-sans uppercase tracking-[0.16em] text-stone-400 font-medium">
                Просмотров расследований
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Ledger: Sleek Luxury Social Links */}
      <div className="pt-8 border-t border-stone-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="text-[11px] font-sans uppercase tracking-[0.18em] text-stone-400 font-semibold">
          ОФИЦИАЛЬНЫЕ РЕСУРСЫ:
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          {socials.map((soc) => (
            <a
              key={soc.name}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-stone-200/90 hover:border-stone-400 hover:shadow-xs transition-all text-xs font-sans font-medium uppercase tracking-[0.1em] text-stone-800 cursor-pointer"
            >
              <span className="transition-transform group-hover:scale-110">
                {getSocialIcon(soc.name)}
              </span>
              <span className="font-medium text-stone-900">{soc.name}</span>
              <ArrowUpRight className="w-3 h-3 text-stone-400 group-hover:text-stone-900 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
