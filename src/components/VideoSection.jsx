import React, { useState } from 'react';
import { SITE_DATA } from '../data/content';
import { IconYouTube, IconVKVideo } from './Icons';
import { soundEngine } from '../utils/audio';
import { Play, Film, ShieldAlert, Award } from 'lucide-react';

export default function VideoSection() {
  const { videos } = SITE_DATA;
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Все видео' },
    { id: 'investigation', label: 'Расследования' },
    { id: 'review', label: 'Обзоры' },
    { id: 'interview', label: 'Интервью' },
  ];

  const filteredVideos = activeFilter === 'all'
    ? videos
    : videos.filter((v) => v.category === activeFilter || (activeFilter === 'interview' && (v.category === 'interview' || v.category === 'expo')));

  const featuredVideo = videos[0]; // Sadovod investigation

  return (
    <section id="videos" className="py-20 sm:py-24 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Chapter Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-stone-200/80 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#e8559a] mb-2 font-semibold">
            <Film className="w-4 h-4" />
            <span>[ 04 / КИНЕМАТОГРАФ & РАССЛЕДОВАНИЯ ]</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight">
            Видео, расследования <span className="italic font-light text-stone-600">& интервью</span>
          </h2>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundEngine.playClick();
                setActiveFilter(cat.id);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all cursor-pointer shadow-2xs ${
                activeFilter === cat.id
                  ? 'bg-stone-900 text-white font-semibold'
                  : 'bg-white/80 text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-stone-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Investigation Cinematic Billboard */}
      {activeFilter === 'all' && (
        <div className="relative rounded-[2.5rem] p-6 sm:p-10 bg-white/95 border border-stone-200/90 overflow-hidden shadow-xl shadow-stone-900/5 mb-12 group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Thumbnail with cinematic letterbox */}
            <div className="lg:col-span-7">
              <a
                href={featuredVideo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="block relative aspect-[16/9] rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-100 cursor-pointer group/billboard"
              >
                <img
                  src={featuredVideo.image}
                  alt={featuredVideo.title}
                  loading="lazy"
                  width={700}
                  height={394}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-red-600/90 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest font-semibold flex items-center gap-1.5 shadow-md">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Главное расследование</span>
                </div>
                <div className="absolute inset-0 bg-stone-900/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white/95 text-stone-900 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 ml-1 fill-current text-[#e8559a]" />
                  </div>
                </div>
              </a>
            </div>

            {/* Editorial Info */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c5a059] mb-2 font-semibold">
                <Award className="w-4 h-4" />
                <span>Резонансный спецпроект Насти Сивец</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 mb-4 leading-tight">
                {featuredVideo.title}
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-6">
                Масштабное исследование черного рынка парфюмерии: как китайские и турецкие копии маскируют под селектив, чем они опасны для здоровья и как отличить оригинальный флакон от профессиональной реплики.
              </p>

              {/* Dual Watch Platforms */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={featuredVideo.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  className="btn-glow-rose py-3 px-6 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-md"
                >
                  <IconYouTube className="w-4 h-4 text-white" />
                  <span>Смотреть на YouTube</span>
                </a>

                <a
                  href={featuredVideo.vk}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  className="btn-luxury-glass py-3 px-6 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-2 shadow-xs"
                >
                  <IconVKVideo className="w-4 h-4 text-[#e8559a]" />
                  <span>VK Видео</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Other Video Investigations & Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredVideos.map((vid) => (
          <div
            key={vid.id}
            className="flex flex-col justify-between rounded-[2rem] p-5 bg-white/95 border border-stone-200/90 hover:border-[#f878b3]/50 shadow-lg shadow-stone-900/5 transition-all duration-300 group"
          >
            <div>
              {/* Thumbnail */}
              <a
                href={vid.youtube}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="block relative aspect-[16/9] rounded-2xl overflow-hidden mb-4 bg-stone-100 border border-stone-200 cursor-pointer shadow-xs"
              >
                <img
                  src={vid.image}
                  alt={vid.title}
                  loading="lazy"
                  width={350}
                  height={197}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-stone-800 text-[10px] font-mono uppercase tracking-wider font-semibold border border-stone-200 shadow-2xs">
                  {vid.tag}
                </div>
                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/35 flex items-center justify-center transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white text-stone-900 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 ml-0.5 fill-current text-[#e8559a]" />
                  </div>
                </div>
              </a>

              {/* Title */}
              <h3 className="font-serif text-lg sm:text-xl font-medium text-stone-900 mb-4 line-clamp-2 leading-snug group-hover:text-[#e8559a] transition-colors">
                {vid.title}
              </h3>
            </div>

            {/* Platform watch buttons */}
            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-stone-200/70">
              <a
                href={vid.youtube}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="py-2 px-3 rounded-full bg-stone-50 hover:bg-[#fdf2f7] hover:border-[#f878b3] text-stone-700 hover:text-[#e8559a] transition-all text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 border border-stone-200 shadow-2xs"
              >
                <IconYouTube className="w-3.5 h-3.5 text-red-600" />
                <span>YouTube</span>
              </a>

              <a
                href={vid.vk}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playClick()}
                className="py-2 px-3 rounded-full bg-stone-50 hover:bg-stone-100 text-stone-700 hover:text-stone-900 transition-all text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 border border-stone-200 shadow-2xs"
              >
                <IconVKVideo className="w-3.5 h-3.5 text-[#e8559a]" />
                <span>VK</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
