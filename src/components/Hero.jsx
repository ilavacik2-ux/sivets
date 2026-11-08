import React, { useState, useRef } from 'react';
import { SITE_DATA } from '../data/content';
import { IconTelegram, IconYouTube, IconInstagram, IconTikTok, IconVKVideo } from './Icons';
import { Sparkles, ArrowDown, Droplets, Compass, Flame, CheckCircle2, Cake, Heart } from 'lucide-react';
import { soundEngine } from '../utils/audio';

const iconMap = {
  Send: IconTelegram,
  Youtube: IconYouTube,
  Instagram: IconInstagram,
  Video: IconTikTok,
  PlaySquare: IconVKVideo,
};

export default function Hero({ onOpenBirthday }) {
  const { hero, socials, manifesto } = SITE_DATA;
  const [isSpraying, setIsSpraying] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0, sheenX: 50, sheenY: 50 });
  const [imgLoaded, setImgLoaded] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: x * 14,
      y: -y * 14,
      sheenX: ((e.clientX - rect.left) / rect.width) * 100,
      sheenY: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, sheenX: 50, sheenY: 50 });
  };

  const triggerSpray = () => {
    soundEngine.playSpray();
    setIsSpraying(true);
    setTimeout(() => setIsSpraying(false), 1300);
  };

  return (
    <section className="relative min-h-[94vh] flex flex-col justify-between pt-28 sm:pt-32 pb-10 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Top Editorial Status Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-pill-dark text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-[#f878b3] shadow-[0_0_8px_#f878b3] animate-pulse" />
            <span>{hero.editorialIssue}</span>
          </div>

          {/* Birthday Wax Seal pill in Hero */}
          <button
            onClick={() => {
              soundEngine.playChime(659, 1.4);
              if (onOpenBirthday) onOpenBirthday();
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#f878b3]/20 to-[#e5c18a]/20 border border-[#f878b3]/40 hover:border-[#f878b3] text-[11px] font-mono uppercase tracking-wider text-[#f878b3] transition-all hover:scale-105 cursor-pointer shadow-sm"
            title="Открыть праздничную капсулу 14 Ноября"
          >
            <Cake className="w-3.5 h-3.5 text-[#f878b3]" />
            <span>14 Ноября</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-neutral-400 font-mono">
          <span className="text-neutral-500 font-light">{hero.coordinates}</span>
        </div>
      </div>

      {/* Main Grid: Haute Parfumerie Narrative + 3D Interactive Portrait */}
      <div className="my-auto py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Big Typography & Story */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-[1px] w-8 bg-[#f878b3]" />
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-rose-gradient">
              Парфюмерный исследователь & Основательница SLUU
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal leading-[0.92] tracking-tight text-white mb-6">
            Настя <br />
            <span className="italic font-light text-neutral-200">Сивец</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-xl mb-6">
            {hero.shortBio}
          </p>

          {/* Editorial Manifesto Quote Box */}
          <div className="relative mb-8 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border-l-2 border-[#f878b3] border-y border-r border-white/5">
            <p className="font-serif italic text-base sm:text-lg text-neutral-200 leading-snug">
              &laquo;{manifesto.quote}&raquo;
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            <a
              href="#course"
              onClick={() => soundEngine.playClick()}
              className="btn-glow-rose px-7 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Курс с Синхронизацией</span>
            </a>

            <a
              href="#pyramid"
              onClick={() => soundEngine.playClick()}
              className="btn-luxury-glass px-6 py-3.5 rounded-full text-xs uppercase tracking-wider font-medium inline-flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#e5c18a]" />
              <span>Лаборатория нот</span>
            </a>

            <a
              href="#sluu"
              onClick={() => soundEngine.playClick()}
              className="btn-luxury-glass px-6 py-3.5 rounded-full text-xs uppercase tracking-wider font-medium inline-flex items-center gap-2"
            >
              <Flame className="w-4 h-4 text-[#f878b3]" />
              <span>Бренд SLUU</span>
            </a>
          </div>

          {/* Running Fragrance Notes & Houses Ticker */}
          <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono overflow-hidden">
            <span className="text-[10px] uppercase tracking-widest text-[#f878b3] flex-none">
              Ольфакторный фокус:
            </span>
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap">
              {hero.perfumeChords?.map((chord, idx) => (
                <span key={idx} className="inline-flex items-center gap-2 text-neutral-300">
                  <span>{chord}</span>
                  {idx < hero.perfumeChords.length - 1 && <span className="text-white/20">&bull;</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: 3D Interactive Portrait Glass Monolith */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-[2.5rem] p-2 glass-luxury border border-white/20 shadow-2xl shadow-black group"
          >
            {/* The Inner Image Frame with Gradient Fallback */}
            <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-950">
              <img
                src={hero.image}
                alt="Настя Сивец — парфюмерный исследователь"
                fetchPriority="high"
                width={600}
                height={750}
                onLoad={() => setImgLoaded(true)}
                className={`w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-all duration-700 ease-out ${
                  imgLoaded ? 'opacity-100' : 'opacity-80'
                }`}
              />

              {/* Dynamic Glass Specular Reflection Highlight */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${tilt.sheenX}% ${tilt.sheenY}%, rgba(255,255,255,0.18) 0%, transparent 60%)`,
                }}
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09080a] via-transparent to-transparent opacity-80 pointer-events-none" />

              {/* Mist Spray Burst Effect */}
              {isSpraying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                  <div className="w-64 h-64 rounded-full bg-radial from-[#f878b3]/50 via-[#f878b3]/20 to-transparent animate-mist" />
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-xs font-mono uppercase tracking-widest text-white/90 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md animate-pulse">
                    ✨ Ольфакторный диффуз
                  </div>
                </div>
              )}

              {/* Interactive Atomizer Spray Button on Photo */}
              <button
                onClick={triggerSpray}
                className="absolute top-4 right-4 z-30 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/25 backdrop-blur-md text-white text-[11px] font-medium tracking-wider flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
                title="Нажмите, чтобы распылить аромат"
              >
                <Droplets className="w-3.5 h-3.5 text-[#f878b3]" />
                <span>Распылить</span>
              </button>

              {/* Monogram Stamp Top Left */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-widest text-[#e5c18a]">
                SIVETS ARCHIVE
              </div>

              {/* Bottom Floating Glass Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-luxury border border-white/20 text-xs text-white flex items-center justify-between">
                <div>
                  <div className="font-semibold tracking-wide flex items-center gap-1.5">
                    <span>Парфюмерный исследователь</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#f878b3]" />
                  </div>
                  <div className="text-[11px] text-neutral-400">Создатель ароматерапии SLUU</div>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#f878b3] font-bold">
                  @sivets
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Social Channels Bar + Scroll Prompt */}
      <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Social Badges */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3">
          {socials.map((soc) => {
            const Icon = iconMap[soc.icon] || IconTelegram;
            return (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-[#f878b3]/40 text-xs font-medium text-neutral-300 hover:text-white transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <Icon className="w-3.5 h-3.5 text-[#f878b3] group-hover:scale-110 transition-transform" />
                <span>{soc.name}</span>
                <span className="text-[10px] font-mono text-neutral-500 group-hover:text-neutral-400 hidden sm:inline">
                  {soc.count}
                </span>
              </a>
            );
          })}
        </div>

        {/* Scroll cue */}
        <a
          href="#pyramid"
          onClick={() => soundEngine.playClick()}
          className="hidden md:flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-neutral-400 hover:text-white transition-colors"
        >
          <span>Исследовать лабораторию</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#f878b3] animate-bounce" />
        </a>
      </div>
    </section>
  );
}
