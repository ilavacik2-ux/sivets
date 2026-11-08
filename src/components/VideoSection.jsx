import React, { useRef } from 'react';
import { SITE_DATA } from '../data/content';
import { IconYouTube, IconVKVideo } from './Icons';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function VideoSection() {
  const { videos } = SITE_DATA;
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="videos" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-black/10 gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f878b3] mb-2 block">
            YouTube &bull; VK Видео
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 tracking-tight">
            Расследования, обзоры <span className="italic font-light">& интервью</span>
          </h2>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2.5 rounded-full bg-white/70 hover:bg-white border border-white/80 text-neutral-800 hover:text-black transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
            aria-label="Назад"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2.5 rounded-full bg-white/70 hover:bg-white border border-white/80 text-neutral-800 hover:text-black transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
            aria-label="Вперед"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal smooth carousel */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {videos.map((vid) => (
          <div
            key={vid.id}
            className="flex-none w-[290px] sm:w-[350px] flex flex-col justify-between rounded-[2rem] p-4 glass-panel border border-white/90 shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            <div>
              {/* Thumbnail with overlay badge */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4 bg-neutral-900 border border-black/5">
                <img
                  src={vid.image}
                  alt={vid.title}
                  loading="lazy"
                  width={350}
                  height={197}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-semibold">
                  {vid.tag}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-neutral-900 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 ml-0.5 fill-current" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg sm:text-xl font-medium text-neutral-900 mb-4 line-clamp-2 leading-snug group-hover:text-[#f878b3] transition-colors">
                {vid.title}
              </h3>
            </div>

            {/* Platform watch buttons */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-black/5">
              <a
                href={vid.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-full bg-[#f878b3]/15 hover:bg-[#f878b3] text-neutral-900 hover:text-white transition-all text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm"
              >
                <IconYouTube className="w-3.5 h-3.5" />
                <span>YouTube</span>
              </a>

              <a
                href={vid.vk}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-full bg-white/70 hover:bg-neutral-900 text-neutral-800 hover:text-white border border-white/80 transition-all text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm"
              >
                <IconVKVideo className="w-3.5 h-3.5" />
                <span>VK Видео</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
