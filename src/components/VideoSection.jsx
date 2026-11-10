import React, { useState, useRef } from 'react';
import { SITE_DATA } from '../data/content';
import { IconYouTube, IconVKVideo } from './Icons';
import { soundEngine } from '../utils/audio';
import { Play, Film, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function VideoSection() {
  const { videos } = SITE_DATA;
  const [activeFilter, setActiveFilter] = useState('all');
  const videoScrollRef = useRef(null);

  const scrollVideos = (direction) => {
    if (videoScrollRef.current) {
      soundEngine.playClick();
      const scrollAmount = direction === 'left' ? -360 : 360;
      videoScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const categories = [
    { id: 'all', label: 'Все фильмы' },
    { id: 'investigation', label: 'Расследования' },
    { id: 'review', label: 'Обзоры' },
    { id: 'interview', label: 'Интервью' },
  ];

  const filteredVideos = activeFilter === 'all'
    ? videos
    : videos.filter((v) => v.category === activeFilter || (activeFilter === 'interview' && (v.category === 'interview' || v.category === 'expo')));

  const featuredVideo = videos[0]; // Sadovod investigation

  return (
    <section id="videos" className="py-12 sm:py-14 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto scroll-mt-24">
      {/* Chapter Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-stone-200/80 gap-6">
        <div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight">
            Видеоисследования <span className="italic font-light text-stone-400">& кинематограф</span>
          </h2>
        </div>

        {/* Minimalist Typographic Category Filter */}
        <div className="flex flex-wrap items-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundEngine.playClick();
                setActiveFilter(cat.id);
              }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-sans uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-stone-900 text-white font-bold shadow-xs'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-stone-100/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Investigation: Widescreen Billboard */}
      {activeFilter === 'all' && (
        <div className="mb-14 pb-14 border-b border-stone-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Cinematic Widescreen Frame */}
            <div className="lg:col-span-7">
              <a
                href={featuredVideo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="block relative aspect-[16/9] overflow-hidden rounded-2xl bg-stone-100 border border-stone-200/80 cursor-pointer group shadow-sm"
              >
                <img
                  src={featuredVideo.image}
                  alt={featuredVideo.title}
                  loading="eager"
                  decoding="async"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-stone-900/15 group-hover:bg-stone-900/25 flex items-center justify-center transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white/95 text-stone-900 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 ml-1 fill-current text-[#e8559a]" />
                  </div>
                </div>
              </a>
            </div>

            {/* Editorial Information */}
            <div className="lg:col-span-5 space-y-5">
              <div className="text-xs sm:text-sm font-sans uppercase tracking-[0.14em] text-[#e8559a] font-bold">
                ГЛАВНОЕ РАССЛЕДОВАНИЕ &bull; СПЕЦПРОЕКТ
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-stone-900 leading-tight">
                {featuredVideo.title}
              </h3>

              <p className="text-stone-700 font-normal leading-relaxed text-base sm:text-lg">
                Глубокое исследование теневого рынка парфюмерии: почему копии стали визуально неотличимы от оригинала, как молекулярная экспертиза раскрывает подделки и что попадает в дыхательные пути при использовании реплик.
              </p>

              <div className="text-xs font-mono text-stone-500 font-medium pt-1">
                {featuredVideo.stats || '120 000+ просмотров • Лабораторный тест'}
              </div>

              {/* Watch Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={featuredVideo.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  className="editorial-btn-dark px-7 py-3.5 rounded-full flex items-center gap-2.5 shadow-xs cursor-pointer hover:scale-105 transition-all text-xs sm:text-sm font-semibold whitespace-nowrap"
                >
                  <IconYouTube className="w-4 h-4 text-red-500" />
                  <span>Смотреть на YouTube</span>
                  <ArrowUpRight className="w-4 h-4 text-stone-400" />
                </a>

                <a
                  href={featuredVideo.vk}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  className="editorial-btn-light px-7 py-3.5 rounded-full flex items-center gap-2.5 cursor-pointer hover:scale-105 transition-all shadow-2xs text-xs sm:text-sm font-semibold whitespace-nowrap"
                >
                  <IconVKVideo className="w-4 h-4 text-[#0077FF]" />
                  <span>VK Видео</span>
                  <ArrowUpRight className="w-4 h-4 text-stone-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Film Catalog Header with Controls */}
      <div className="mt-8 mb-5 flex items-center justify-between gap-3 pb-3 border-b border-stone-200/80">
        <div>
          <div className="text-xs sm:text-sm font-sans uppercase tracking-[0.16em] text-stone-900 font-bold">
            Каталог фильмов & расследований
          </div>
          <p className="text-xs text-stone-500 font-sans mt-0.5">
            Листайте вбок для просмотра всех выпусков
          </p>
        </div>

        {/* Carousel arrows */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => scrollVideos('left')}
            className="w-9 h-9 rounded-full border border-stone-300 hover:border-stone-800 bg-white text-stone-700 hover:text-stone-900 flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
            aria-label="Предыдущее видео"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollVideos('right')}
            className="w-9 h-9 rounded-full border border-stone-300 hover:border-stone-800 bg-white text-stone-700 hover:text-stone-900 flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:scale-105 active:scale-95"
            aria-label="Следующее видео"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Film Catalog Horizontal Track - Seamless Gallery with edge bleed and card peek */}
      <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
        <div
          ref={videoScrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 px-4 sm:px-6 lg:px-8 no-scrollbar snap-x snap-mandatory scroll-smooth gallery-carousel-track"
        >
          {filteredVideos.map((vid) => (
            <div
              key={vid.id}
              className="w-[82vw] sm:w-[340px] lg:w-[360px] shrink-0 snap-start editorial-card rounded-2xl overflow-hidden border border-stone-200/70 hover:border-stone-400/80 bg-white transition-all duration-300 hover:shadow-lg shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] flex flex-col justify-between group p-4 sm:p-5"
            >
              <div>
                <a
                  href={vid.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  className="block relative aspect-[16/9] overflow-hidden rounded-xl mb-3.5 bg-stone-100 border border-stone-200/60 cursor-pointer shadow-2xs"
                >
                  <img
                    src={vid.image}
                    alt={vid.title}
                    loading="eager"
                    decoding="async"
                    width={400}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />

                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-11 h-11 rounded-full bg-white text-stone-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 ml-0.5 fill-current text-[#e8559a]" />
                    </div>
                  </div>
                </a>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-sans uppercase tracking-wider text-[#e8559a] font-bold">
                    {vid.tag}
                  </span>
                  <span className="text-[11px] text-stone-400 font-sans font-medium">
                    {vid.duration || 'Видео'}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-medium text-stone-900 leading-snug mb-2 group-hover:text-[#e8559a] transition-colors line-clamp-2">
                  {vid.title}
                </h3>

                {vid.synopsis && (
                  <p className="text-xs text-stone-600 font-sans font-normal leading-relaxed mb-3 line-clamp-2">
                    {vid.synopsis}
                  </p>
                )}
              </div>

              {/* Platform Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-3.5 border-t border-stone-100 mt-auto">
                <a
                  href={vid.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  className="px-3 py-2 rounded-xl border border-stone-200 hover:border-red-500/50 bg-stone-50/70 hover:bg-red-50/40 text-stone-900 hover:text-red-600 transition-all flex items-center justify-center gap-1.5 text-xs font-sans font-semibold group/btn shadow-2xs cursor-pointer hover:scale-105 whitespace-nowrap"
                  title="Смотреть на YouTube"
                >
                  <IconYouTube className="w-3.5 h-3.5 text-red-600 group-hover/btn:scale-110 transition-transform" />
                  <span>YouTube</span>
                </a>

                <a
                  href={vid.vk}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  className="px-3 py-2 rounded-xl border border-stone-200 hover:border-blue-500/50 bg-stone-50/70 hover:bg-blue-50/40 text-stone-900 hover:text-blue-600 transition-all flex items-center justify-center gap-1.5 text-xs font-sans font-semibold group/btn shadow-2xs cursor-pointer hover:scale-105 whitespace-nowrap"
                  title="Смотреть в VK Видео"
                >
                  <IconVKVideo className="w-3.5 h-3.5 text-[#0077FF] group-hover/btn:scale-110 transition-transform" />
                  <span>VK Видео</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
