import React from 'react';
import { SITE_DATA } from '../data/content';
import { IconTelegram, IconYouTube, IconInstagram, IconTikTok, IconVKVideo } from './Icons';
import { ArrowDown, Sparkles } from 'lucide-react';

const iconMap = {
  Send: IconTelegram,
  Youtube: IconYouTube,
  Instagram: IconInstagram,
  Video: IconTikTok,
  PlaySquare: IconVKVideo,
};

export default function Hero() {
  const { hero, socials } = SITE_DATA;

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* Top Tagline & Status Pill */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-sm text-xs font-medium tracking-wider text-neutral-800 uppercase">
          <span className="w-2 h-2 rounded-full bg-[#f878b3] animate-ping" />
          <span>{hero.badge}</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 font-medium">
          <span>Москва &bull; Париж &bull; Милан</span>
        </div>
      </div>

      {/* Main Center Grid: Editorial Portrait + Grand Typography */}
      <div className="my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left: Grand Headline & Subtitle */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#f878b3] mb-3 block">
            Ольфакторное искусство &bull; Брендинг
          </span>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal leading-[0.95] tracking-tight text-neutral-900 mb-6">
            Настя <br />
            <span className="italic font-light text-neutral-800">Сивец</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-700 font-normal leading-relaxed max-w-xl mb-8">
            {hero.title}. {hero.shortBio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#course"
              className="btn-pink px-7 py-3 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-2 shadow-sm"
            >
              <span>Смотреть курс</span>
              <Sparkles className="w-4 h-4" />
            </a>

            <a
              href="#sluu"
              className="px-7 py-3 rounded-full text-sm font-medium tracking-wide bg-white/70 hover:bg-white text-neutral-900 border border-white/80 backdrop-blur-md transition-all inline-flex items-center gap-2"
            >
              <span>Бренд SLUU</span>
            </a>
          </div>
        </div>

        {/* Right: Editorial Portrait Frame */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10 border-4 border-white/80 bg-neutral-200 group">
            {/* LCP candidate image with fetchpriority="high" and no loading="lazy" */}
            <img
              src={hero.image}
              alt="Настя Сивец"
              fetchpriority="high"
              width={600}
              height={750}
              className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle atmospheric vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

            {/* Bottom floating badge inside photo */}
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl glass-pill text-xs text-neutral-800 flex items-center justify-between">
              <span className="font-semibold tracking-wide">Парфюмерный исследователь</span>
              <span className="text-[10px] uppercase tracking-widest text-[#f878b3] font-bold">@sivets</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row: Social Channels Bar + Scroll Cue */}
      <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Social Pills */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
          {socials.map((soc) => {
            const Icon = iconMap[soc.icon] || IconTelegram;
            return (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/60 hover:bg-white border border-white/80 text-xs font-medium text-neutral-800 hover:text-black transition-all hover:-translate-y-0.5 shadow-sm"
              >
                <Icon className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#f878b3] transition-colors" />
                <span>{soc.name}</span>
              </a>
            );
          })}
        </div>

        {/* Scroll anchor prompt */}
        <a
          href="#course"
          className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <span>Листать вниз</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
