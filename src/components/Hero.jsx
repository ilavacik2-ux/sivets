import React, { useState } from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { IconTelegram, IconYouTube, IconInstagram, IconTikTok, IconVKVideo } from './Icons';

export default function Hero({ onOpenBirthday }) {
  const { hero, socials } = SITE_DATA;
  const [imgLoaded, setImgLoaded] = useState(false);

  const getSocialIcon = (name) => {
    switch (name) {
      case 'Telegram':
        return <IconTelegram className="w-4 h-4 text-[#229ED9]" />;
      case 'YouTube':
        return <IconYouTube className="w-4 h-4 text-[#FF0000]" />;
      case 'Instagram':
        return <IconInstagram className="w-4 h-4 text-[#E4405F]" />;
      case 'TikTok':
        return <IconTikTok className="w-4 h-4 text-stone-900" />;
      case 'VK Видео':
        return <IconVKVideo className="w-4 h-4 text-[#0077FF]" />;
      default:
        return null;
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto">
      {/* 1. Grand Masthead Typographic Display */}
      <div className="pt-4 sm:pt-8 pb-8 sm:pb-12 border-b border-stone-200/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
          <div className="text-[12px] sm:text-xs font-sans uppercase tracking-[0.24em] text-[#e8559a] font-semibold">
            Парфюмерный исследователь &bull; Создательница SLUU
          </div>
        </div>

        <h1 className="font-serif text-[13vw] sm:text-[11vw] lg:text-[7.5rem] xl:text-[8.5rem] font-light leading-[0.88] tracking-tight text-stone-900 select-none">
          НАСТЯ <span className="italic font-extralight text-stone-400">СИВЕЦ</span>
        </h1>
      </div>

      {/* 2. Composition Grid */}
      <div className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Natural Museum-Grade Portrait */}
        <div className="lg:col-span-6 xl:col-span-6 relative">
          <div className="relative aspect-[3/4] sm:aspect-[4/5] max-h-[720px] overflow-hidden bg-stone-100 group rounded-2xl shadow-sm border border-stone-200/60">
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
          </div>

          {/* Museum Caption */}
          <div className="mt-3.5 flex items-center justify-between text-[11px] font-sans uppercase tracking-[0.2em] text-stone-400 font-medium">
            <span>NASTYA SIVETS</span>
            <span>SLUU ATELIER</span>
          </div>
        </div>

        {/* Right Column: Editorial Bio, Curated Accords & Pure Architectural Navigation */}
        <div className="lg:col-span-6 xl:col-span-6 space-y-10 lg:pt-4">
          {/* Editorial Lead Paragraphs */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] text-stone-900 font-light leading-[1.25]">
              Исследование невидимой архитектуры ароматов, редких композиций и ольфакторной памяти.
            </h2>
            <p className="text-stone-600 font-light leading-relaxed text-sm sm:text-base">
              {hero.shortBio}
            </p>
          </div>

          {/* Curated Scent Chords with larger font, distinct styling */}
          <div className="pt-6 border-t border-stone-200/80 space-y-3">
            <div className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-stone-900 font-sans font-semibold">
              ОЛЬФАКТОРНЫЙ ФОКУС &bull; АВТОРСКИЕ АККОРДЫ:
            </div>
            <div className="text-xl sm:text-2xl text-stone-900 font-serif italic tracking-wide leading-relaxed font-normal">
              Filippo Sorcinelli &bull; Zoologist &bull; Orris Butter &bull; Lactonic Accords &bull; Iso E Super &bull; Ambroxan &bull; Byredo &bull; Niche Layering
            </div>
          </div>

          {/* Architectural Action Links - Clean, single-line, perfectly balanced */}
          <div className="pt-4 flex flex-wrap items-center gap-3.5">
            <a
              href="#course"
              onClick={() => soundEngine.playClick()}
              className="editorial-btn-dark px-6 sm:px-7 py-3.5 rounded-full inline-flex items-center justify-center gap-2 shadow-sm text-center whitespace-nowrap cursor-pointer"
            >
              <span>Курс с Синхронизацией</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#f878b3]" />
            </a>

            <a
              href="#sluu"
              onClick={() => soundEngine.playClick()}
              className="editorial-btn-light px-6 sm:px-7 py-3.5 rounded-full inline-flex items-center justify-center gap-2 shadow-2xs text-center whitespace-nowrap cursor-pointer"
            >
              <span>Ателье SLUU</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#c5a059]" />
            </a>

            <a
              href="#persona"
              onClick={() => soundEngine.playClick()}
              className="px-5 py-3.5 rounded-full border border-stone-200 hover:border-stone-400 bg-white text-stone-700 hover:text-stone-900 text-xs font-sans font-medium uppercase tracking-[0.14em] transition-colors inline-flex items-center justify-center whitespace-nowrap"
            >
              О Насте &rarr;
            </a>
          </div>

          {/* Mini Credential Summary */}
          <div className="pt-8 border-t border-stone-200/80 grid grid-cols-2 gap-6 text-xs">
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
        <div className="flex flex-wrap items-center gap-3">
          {socials.map((soc) => (
            <a
              key={soc.name}
              href={soc.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-stone-200 hover:border-stone-400 hover:shadow-xs transition-all text-xs font-sans font-medium uppercase tracking-[0.12em] text-stone-800"
            >
              <span className="transition-transform group-hover:scale-110">
                {getSocialIcon(soc.name)}
              </span>
              <span className="font-medium text-stone-900">{soc.name}</span>
              <ArrowUpRight className="w-3 h-3 text-stone-400 group-hover:text-stone-900 transition-colors" />
            </a>
          ))}
        </div>

        <a
          href="#persona"
          onClick={() => soundEngine.playClick()}
          className="hidden md:inline-flex items-center gap-2 text-stone-400 hover:text-stone-800 transition-colors text-xs font-sans font-medium uppercase tracking-[0.14em]"
        >
          <span>Исследовать далее</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#e8559a]" />
        </a>
      </div>
    </section>
  );
}
