import React, { useState } from 'react';
import { SITE_DATA } from '../data/content';
import { IconTelegram, IconYouTube, IconInstagram, IconTikTok, IconVKVideo } from './Icons';
import { Sparkles, ArrowDown, Droplets, Compass, Flame, Cake, Heart, Feather } from 'lucide-react';
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
  const [imgLoaded, setImgLoaded] = useState(false);

  const triggerSpray = () => {
    soundEngine.playSpray();
    setIsSpraying(true);
    setTimeout(() => setIsSpraying(false), 1300);
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Top Lookbook Editorial Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-stone-200/80">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100/90 border border-stone-200 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-stone-700">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f878b3] animate-pulse" />
            <span>{hero.editorialIssue}</span>
          </div>

          {/* Birthday Wax Seal pill */}
          <button
            onClick={() => {
              soundEngine.playChime(659, 1.4);
              if (onOpenBirthday) onOpenBirthday();
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#fdf2f7] to-[#fef8ee] border border-[#f878b3]/40 hover:border-[#f878b3] text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#e8559a] transition-all hover:scale-105 cursor-pointer shadow-xs"
            title="Открыть праздничную капсулу 14 Ноября"
          >
            <Cake className="w-3.5 h-3.5 text-[#e8559a]" />
            <span>14 Ноября</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-stone-500 font-mono">
          <span className="font-light">{hero.coordinates}</span>
        </div>
      </div>

      {/* Editorial Lookbook Layout: French High-Fashion Magazine Composition */}
      <div className="my-auto py-8 sm:py-12">
        {/* Grand Editorial Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="h-[1px] w-8 bg-[#f878b3]" />
            <span className="text-xs uppercase tracking-[0.28em] font-semibold text-[#e8559a]">
              Парфюмерный исследователь &bull; SLUU Aromatherapy
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal leading-[0.92] tracking-tight text-stone-900">
                Настя <span className="italic font-light text-stone-700">Сивец</span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-stone-500">
                Ольфакторный исследователь <br />& основательница бренда SLUU
              </p>
            </div>
          </div>
        </div>

        {/* Magazine Spread Content: Asymmetric Lookbook Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Portrait presentation with archival matting */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-3xl sm:rounded-[2.5rem] p-3 sm:p-4 bg-white/95 border border-stone-200/90 shadow-xl shadow-stone-900/5 group">
              {/* Outer Matting Accent */}
              <div className="relative w-full aspect-[4/5] rounded-2xl sm:rounded-[2rem] overflow-hidden bg-stone-100">
                <img
                  src={hero.image}
                  alt="Настя Сивец — парфюмерный исследователь"
                  fetchPriority="high"
                  width={600}
                  height={750}
                  onLoad={() => setImgLoaded(true)}
                  className={`w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.02] group-hover:scale-[1.03] transition-all duration-700 ease-out ${
                    imgLoaded ? 'opacity-100' : 'opacity-80'
                  }`}
                />

                {/* Delicate Sunlit Warm Sheen */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-stone-100/10 pointer-events-none" />

                {/* Mist Spray Effect */}
                {isSpraying && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    <div className="w-64 h-64 rounded-full bg-radial from-[#f878b3]/60 via-[#f878b3]/25 to-transparent animate-mist" />
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-xs font-mono uppercase tracking-widest text-white bg-stone-900/75 px-3 py-1.5 rounded-full backdrop-blur-md shadow-lg animate-pulse">
                      ✨ Ольфакторный шлейф
                    </div>
                  </div>
                )}

                {/* Interactive Atomizer Spray Button */}
                <button
                  onClick={triggerSpray}
                  className="absolute top-3.5 right-3.5 z-30 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-stone-800 border border-stone-200 shadow-md backdrop-blur-md text-[11px] font-medium tracking-wider flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  title="Нажмите, чтобы распылить аромат"
                >
                  <Droplets className="w-3.5 h-3.5 text-[#e8559a]" />
                  <span>Распылить</span>
                </button>

                {/* Monogram Stamp Top Left */}
                <div className="absolute top-3.5 left-3.5 z-20 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md border border-stone-200/80 text-[10px] font-mono uppercase tracking-widest text-stone-700 font-semibold shadow-xs">
                  NASTYA SIVETS
                </div>

                {/* Bottom Overlay Pill */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-stone-200/80 text-xs text-stone-800 flex items-center justify-between shadow-sm">
                  <div>
                    <div className="font-serif text-sm font-semibold tracking-wide text-stone-900">
                      Настя Сивец
                    </div>
                    <div className="text-[11px] text-stone-500">Парфюмерный исследователь</div>
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#e8559a] font-bold">
                    @sivets
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative, Manifesto & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6">
              <p className="text-base sm:text-xl text-stone-700 font-light leading-relaxed">
                {hero.shortBio}
              </p>

              {/* Editorial Manifesto Quote Box (French Salon Style) */}
              <div className="relative p-6 sm:p-7 rounded-3xl bg-white/90 border border-stone-200/90 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e8559a] mb-2.5">
                  <Feather className="w-3.5 h-3.5" />
                  <span>Ольфакторный манифест</span>
                </div>
                <p className="font-serif italic text-lg sm:text-xl text-stone-800 leading-snug mb-3">
                  &laquo;{manifesto.quote}&raquo;
                </p>
                <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500">
                  — {manifesto.author}, {manifesto.role}
                </div>
              </div>

              {/* Action CTAs in Luminous Luxury Style */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <a
                  href="#course"
                  onClick={() => soundEngine.playClick()}
                  className="btn-glow-rose px-7 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2 shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Курс с Синхронизацией</span>
                </a>

                <a
                  href="#pyramid"
                  onClick={() => soundEngine.playClick()}
                  className="btn-luxury-glass px-6 py-3.5 rounded-full text-xs uppercase tracking-wider font-medium inline-flex items-center gap-2 shadow-xs"
                >
                  <Compass className="w-4 h-4 text-[#c5a059]" />
                  <span>Пирамида нот</span>
                </a>

                <a
                  href="#sluu"
                  onClick={() => soundEngine.playClick()}
                  className="btn-luxury-glass px-6 py-3.5 rounded-full text-xs uppercase tracking-wider font-medium inline-flex items-center gap-2 shadow-xs"
                >
                  <Flame className="w-4 h-4 text-[#e8559a]" />
                  <span>Бренд SLUU</span>
                </a>
              </div>
            </div>

            {/* Olfactive Chords / Table of Contents */}
            <div className="mt-8 pt-6 border-t border-stone-200/80">
              <div className="text-[10px] uppercase tracking-widest text-stone-500 font-mono mb-2">
                Ольфакторный фокус & любимые аккорды:
              </div>
              <div className="flex flex-wrap gap-2">
                {hero.perfumeChords?.map((chord, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/80 border border-stone-200/80 text-xs font-mono text-stone-700 shadow-2xs hover:border-[#f878b3]/50 transition-colors"
                  >
                    {chord}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Bar: Socials + Scroll Cue */}
      <div className="pt-5 border-t border-stone-200/80 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Social Badges */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-2.5">
          {socials.map((soc) => {
            const Icon = iconMap[soc.icon] || IconTelegram;
            return (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 hover:bg-white border border-stone-200 hover:border-[#f878b3]/50 text-xs font-medium text-stone-700 hover:text-stone-900 transition-all hover:-translate-y-0.5 shadow-2xs"
              >
                <Icon className="w-3.5 h-3.5 text-[#e8559a] group-hover:scale-110 transition-transform" />
                <span>{soc.name}</span>
                <span className="text-[10px] font-mono text-stone-400 group-hover:text-stone-600 hidden sm:inline">
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
          className="hidden md:flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-stone-500 hover:text-stone-900 transition-colors font-mono"
        >
          <span>Исследовать коллекцию</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#e8559a] animate-bounce" />
        </a>
      </div>
    </section>
  );
}
