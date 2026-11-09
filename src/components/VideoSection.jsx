import React, { useState } from 'react';
import { SITE_DATA } from '../data/content';
import { IconYouTube, IconVKVideo } from './Icons';
import { soundEngine } from '../utils/audio';
import { Play, Film, ArrowUpRight } from 'lucide-react';

export default function VideoSection() {
  const { videos } = SITE_DATA;
  const [activeFilter, setActiveFilter] = useState('all');

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
    <section id="videos" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto scroll-mt-24">
      {/* Chapter Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-stone-200/80 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans uppercase tracking-[0.16em] text-[#e8559a] mb-2 font-bold">
            <Film className="w-4 h-4" />
            <span>Видеорасследования</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight">
            Видеоисследования <span className="italic font-light text-stone-500">& кинематограф</span>
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
        <div className="mb-20 pb-20 border-b border-stone-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
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
                  loading="lazy"
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
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs sm:text-sm font-sans uppercase tracking-[0.14em] text-[#e8559a] font-bold">
                ГЛАВНОЕ РАССЛЕДОВАНИЕ &bull; СПЕЦПРОЕКТ
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-stone-900 leading-tight">
                {featuredVideo.title}
              </h3>

              <p className="text-stone-700 font-normal leading-relaxed text-base sm:text-lg">
                Глубокое исследование теневого рынка парфюмерии: почему копии стали визуально неотличимы от оригинала, как молекулярная экспертиза раскрывает подделки и что попадает в дыхательные пути при использовании реплик.
              </p>

              {/* Watch Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={featuredVideo.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  className="editorial-btn-dark px-7 py-4 rounded-full flex items-center gap-2.5 shadow-xs cursor-pointer hover:scale-105 transition-all text-xs sm:text-sm font-semibold"
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
                  className="editorial-btn-light px-7 py-4 rounded-full flex items-center gap-2.5 cursor-pointer hover:scale-105 transition-all shadow-2xs text-xs sm:text-sm font-semibold"
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

      {/* Film Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {filteredVideos.map((vid) => (
          <div key={vid.id} className="editorial-card rounded-2xl overflow-hidden border border-stone-200/90 hover:border-stone-400/80 bg-white transition-all duration-300 hover:shadow-lg flex flex-col justify-between group p-5 sm:p-6">
            <div>
              <a
                href={vid.youtube}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="block relative aspect-[16/9] overflow-hidden rounded-xl mb-4 bg-stone-100 border border-stone-200/60 cursor-pointer shadow-2xs"
              >
                <img
                  src={vid.image}
                  alt={vid.title}
                  loading="lazy"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white text-stone-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 ml-0.5 fill-current text-[#e8559a]" />
                  </div>
                </div>
              </a>

              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs sm:text-sm font-sans uppercase tracking-wider text-[#e8559a] font-bold">
                  {vid.tag}
                </span>
                <span className="text-xs text-stone-500 font-sans font-medium">
                  {vid.duration || 'Видео'}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-medium text-stone-900 leading-snug mb-3 group-hover:text-[#e8559a] transition-colors">
                {vid.title}
              </h3>
            </div>

            {/* Clear, Prominent Interactive Platform Buttons */}
            <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-stone-100 mt-2">
              <a
                href={vid.youtube}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="px-4 py-3 rounded-xl border border-stone-200 hover:border-red-500/50 bg-stone-50/70 hover:bg-red-50/40 text-stone-900 hover:text-red-600 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm font-sans font-semibold group/btn shadow-2xs cursor-pointer hover:scale-105"
                title="Смотреть на YouTube"
              >
                <IconYouTube className="w-4 h-4 text-red-600 group-hover/btn:scale-110 transition-transform" />
                <span>YouTube</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover/btn:text-red-500" />
              </a>

              <a
                href={vid.vk}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="px-4 py-3 rounded-xl border border-stone-200 hover:border-blue-500/50 bg-stone-50/70 hover:bg-blue-50/40 text-stone-900 hover:text-blue-600 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm font-sans font-semibold group/btn shadow-2xs cursor-pointer hover:scale-105"
                title="Смотреть в VK Видео"
              >
                <IconVKVideo className="w-4 h-4 text-[#0077FF] group-hover/btn:scale-110 transition-transform" />
                <span>VK Видео</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover/btn:text-blue-500" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
