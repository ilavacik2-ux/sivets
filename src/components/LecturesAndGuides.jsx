import React, { useState, useEffect } from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { Headphones, BookOpen, Shield, ArrowUpRight, Play, Pause, Sparkles, Check, Volume2 } from 'lucide-react';

export default function LecturesAndGuides() {
  const { lectures, audioGuides, merch } = SITE_DATA;
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const [demoSec, setDemoSec] = useState(0);

  useEffect(() => {
    let interval;
    if (isPlayingDemo) {
      interval = setInterval(() => {
        setDemoSec((prev) => {
          if (prev >= 25) {
            setIsPlayingDemo(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      setDemoSec(0);
    }
    return () => clearInterval(interval);
  }, [isPlayingDemo]);

  const toggleAudioDemo = () => {
    if (!isPlayingDemo) {
      soundEngine.playLayeredChord([528, 659, 784], 3.5);
      setIsPlayingDemo(true);
    } else {
      setIsPlayingDemo(false);
    }
  };

  return (
    <section id="lectures" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Chapter Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#f878b3] mb-2">
            <BookOpen className="w-4 h-4" />
            <span>[ 03 / АВТОРСКИЙ АРХИВ ]</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight">
            Лекции, аудиогид <span className="italic font-light text-neutral-300">& оберег</span>
          </h2>
        </div>
        <p className="text-xs uppercase tracking-widest text-neutral-400 font-mono max-w-xs sm:text-right">
          Приватные материалы для самостоятельного погружения
        </p>
      </div>

      {/* Grid: 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

        {/* 1. Merch: Оберег от хейтеров */}
        <div className="relative flex flex-col justify-between rounded-[2.2rem] p-7 glass-luxury border border-white/15 shadow-2xl group hover:border-[#f878b3]/40 transition-all duration-500">
          {/* Subtle Pink Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#f878b3]/15 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />

          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f878b3]/20 border border-[#f878b3]/30 text-white text-[10px] font-mono font-semibold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5 text-[#f878b3]" />
                Лимитированный артефакт
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Мерч</span>
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-neutral-900 border border-white/10 relative">
              <img
                src={merch.image}
                alt={merch.title}
                loading="lazy"
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-[#e5c18a]">
                ★ Заряжен на вкус
              </div>
            </div>

            <h3 className="font-serif text-3xl font-medium text-white mb-2">
              {merch.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mb-6 leading-relaxed font-light">
              {merch.description}
            </p>

            {/* Feature Bullets */}
            <div className="space-y-2 mb-6">
              {merch.features?.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                  <Sparkles className="w-3 h-3 text-[#f878b3]" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href={merch.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEngine.playClick()}
            className="btn-glow-rose w-full py-3.5 rounded-full text-center text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Заказать оберег</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 2. Exclusive Masterclass Lectures */}
        <div className="relative flex flex-col justify-between rounded-[2.2rem] p-7 glass-luxury border border-white/15 shadow-2xl group hover:border-white/30 transition-all duration-500">
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white text-[10px] font-mono uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5 text-[#e5c18a]" />
                Видеолекции
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Dossier</span>
            </div>

            <div className="space-y-4 mb-6">
              {lectures.map((lec) => (
                <a
                  key={lec.id}
                  href={lec.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  className="block p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#f878b3]/30 transition-all group/lec"
                >
                  <div className="flex gap-3.5 items-start">
                    <img
                      src={lec.image}
                      alt={lec.title}
                      loading="lazy"
                      width={80}
                      height={60}
                      className="w-16 h-14 object-cover rounded-xl border border-white/15 flex-none"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-0.5">
                        {lec.format}
                      </div>
                      <h4 className="text-xs sm:text-sm font-serif font-medium text-white group-hover/lec:text-[#f878b3] transition-colors line-clamp-2">
                        {lec.title}
                      </h4>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                        <span className="text-xs font-mono font-bold text-[#e5c18a]">{lec.price}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover/lec:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <a
            href={lectures[0].link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEngine.playClick()}
            className="btn-luxury-glass w-full py-3.5 rounded-full text-center text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Каталог лекций</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3. Audio Guide with Interactive Waveform Demo */}
        <div className="relative flex flex-col justify-between rounded-[2.2rem] p-7 glass-luxury border border-white/15 shadow-2xl group hover:border-[#f878b3]/40 transition-all duration-500 md:col-span-2 lg:col-span-1">
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white text-[10px] font-mono uppercase tracking-wider">
                <Headphones className="w-3.5 h-3.5 text-[#f878b3]" />
                In-Ear Experience
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">30–40 Мин</span>
            </div>

            {audioGuides.map((guide) => (
              <div key={guide.id} className="mb-4">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4 bg-neutral-900 border border-white/10">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    loading="lazy"
                    width={400}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    {/* Interactive Demo Play Button */}
                    <button
                      onClick={toggleAudioDemo}
                      className="w-13 h-13 rounded-full bg-white/95 hover:bg-white text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
                      title={isPlayingDemo ? "Остановить демо" : "Прослушать фрагмент аудиогида"}
                    >
                      {isPlayingDemo ? (
                        <Pause className="w-5 h-5 fill-current text-[#f878b3]" />
                      ) : (
                        <Play className="w-5 h-5 ml-0.5 fill-current text-black" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Animated Audio Equalizer Waveform & Playhead */}
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 mb-4">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Volume2 className={`w-3.5 h-3.5 ${isPlayingDemo ? 'text-[#f878b3] animate-pulse' : 'text-neutral-500'}`} />
                      <span>{isPlayingDemo ? 'Воспроизведение...' : 'Фрагмент аудиогида'}</span>
                    </span>
                    <span className="text-[#f878b3] font-semibold">
                      00:{demoSec < 10 ? `0${demoSec}` : demoSec} / 35:20
                    </span>
                  </div>

                  {/* Waveform Bars */}
                  <div className="flex items-end gap-1 h-5 mb-2">
                    {[10, 16, 8, 20, 14, 22, 12, 18, 9, 21, 15, 7, 19, 13, 24, 11].map((barH, i) => (
                      <span
                        key={i}
                        style={{
                          height: isPlayingDemo ? `${Math.sin(i * 0.8 + demoSec * 2) * 8 + 12}px` : '4px',
                          transition: 'height 0.15s ease',
                        }}
                        className={`flex-1 rounded-full ${
                          (i / 16) <= (demoSec / 25) ? 'bg-[#f878b3]' : 'bg-white/20'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Progress Line */}
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#f878b3] to-[#e5c18a] transition-all duration-300"
                      style={{ width: `${(demoSec / 25) * 100}%` }}
                    />
                  </div>
                </div>

                <h3 className="font-serif text-3xl font-medium text-white mb-2">
                  {guide.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mb-4 leading-relaxed font-light">
                  {guide.description}
                </p>

                <div className="flex items-baseline gap-2.5 mb-2">
                  <span className="font-mono text-2xl font-bold text-white">{guide.price}</span>
                  {guide.oldPrice && (
                    <span className="font-mono text-xs line-through text-neutral-500">
                      {guide.oldPrice}
                    </span>
                  )}
                  <span className="text-[10px] font-mono uppercase text-[#e5c18a] bg-[#e5c18a]/10 px-2 py-0.5 rounded-full">
                    Выгода
                  </span>
                </div>
              </div>
            ))}
          </div>

          <a
            href={audioGuides[0].link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEngine.playClick()}
            className="btn-glow-rose w-full py-3.5 rounded-full text-center text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Купить аудиогид</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
