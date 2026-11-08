import React, { useState, useEffect } from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { Headphones, BookOpen, Shield, ArrowUpRight, Play, Pause, Sparkles, Volume2 } from 'lucide-react';

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
    <section id="lectures" className="py-20 sm:py-24 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Chapter Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-stone-200/80 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#e8559a] mb-2 font-semibold">
            <BookOpen className="w-4 h-4" />
            <span>[ 03 / АВТОРСКИЙ АРХИВ ]</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight">
            Лекции, аудиогид <span className="italic font-light text-stone-600">& оберег</span>
          </h2>
        </div>
        <p className="text-xs uppercase tracking-widest text-stone-500 font-mono max-w-xs sm:text-right">
          Приватные материалы для самостоятельного погружения
        </p>
      </div>

      {/* Grid: 3 Pillars in Light Luxury Aesthetic */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

        {/* 1. Merch: Оберег от хейтеров */}
        <div className="relative flex flex-col justify-between rounded-[2.2rem] p-7 bg-white/95 border border-stone-200/90 shadow-xl shadow-stone-900/5 group hover:border-[#f878b3]/50 transition-all duration-500">
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdf2f7] border border-[#f878b3]/30 text-[#e8559a] text-[10px] font-mono font-semibold uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5 text-[#e8559a]" />
                Лимитированный артефакт
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">Мерч</span>
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-stone-100 border border-stone-200/80 relative">
              <img
                src={merch.image}
                alt={merch.title}
                loading="lazy"
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-mono text-[#c5a059] border border-stone-200 shadow-2xs">
                ★ Заряжен на вкус
              </div>
            </div>

            <h3 className="font-serif text-3xl font-medium text-stone-900 mb-2">
              {merch.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mb-6 leading-relaxed font-light">
              {merch.description}
            </p>

            {/* Feature Bullets */}
            <div className="space-y-2 mb-6">
              {merch.features?.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                  <Sparkles className="w-3 h-3 text-[#e8559a] flex-none" />
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
            className="btn-glow-rose w-full py-3.5 rounded-full text-center text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 shadow-md"
          >
            <span>Заказать оберег</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 2. Exclusive Masterclass Lectures */}
        <div className="relative flex flex-col justify-between rounded-[2.2rem] p-7 bg-white/95 border border-stone-200/90 shadow-xl shadow-stone-900/5 group hover:border-stone-300 transition-all duration-500">
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-[10px] font-mono uppercase tracking-wider font-semibold">
                <BookOpen className="w-3.5 h-3.5 text-[#c5a059]" />
                Видеолекции
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">Dossier</span>
            </div>

            <div className="space-y-3.5 mb-6">
              {lectures.map((lec) => (
                <a
                  key={lec.id}
                  href={lec.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEngine.playClick()}
                  className="block p-3.5 rounded-2xl bg-stone-50 hover:bg-stone-100/90 border border-stone-200/80 hover:border-[#f878b3]/40 transition-all group/lec shadow-2xs"
                >
                  <div className="flex gap-3.5 items-start">
                    <img
                      src={lec.image}
                      alt={lec.title}
                      loading="lazy"
                      width={80}
                      height={60}
                      className="w-16 h-14 object-cover rounded-xl border border-stone-200 flex-none"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-stone-500 mb-0.5">
                        {lec.format}
                      </div>
                      <h4 className="text-xs sm:text-sm font-serif font-medium text-stone-900 group-hover/lec:text-[#e8559a] transition-colors line-clamp-2">
                        {lec.title}
                      </h4>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-200/60">
                        <span className="text-xs font-mono font-bold text-stone-900">{lec.price}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover/lec:text-stone-900 transition-colors" />
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
            className="btn-luxury-glass w-full py-3.5 rounded-full text-center text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 shadow-xs"
          >
            <span>Каталог лекций</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3. Audio Guide with Interactive Waveform Demo */}
        <div className="relative flex flex-col justify-between rounded-[2.2rem] p-7 bg-white/95 border border-stone-200/90 shadow-xl shadow-stone-900/5 group hover:border-[#f878b3]/50 transition-all duration-500 md:col-span-2 lg:col-span-1">
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdf2f7] border border-[#f878b3]/30 text-[#e8559a] text-[10px] font-mono uppercase tracking-wider font-semibold">
                <Headphones className="w-3.5 h-3.5 text-[#e8559a]" />
                In-Ear Experience
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400">30–40 Мин</span>
            </div>

            {audioGuides.map((guide) => (
              <div key={guide.id} className="mb-4">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4 bg-stone-100 border border-stone-200">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    loading="lazy"
                    width={400}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-stone-900/30 flex items-center justify-center">
                    {/* Interactive Demo Play Button */}
                    <button
                      onClick={toggleAudioDemo}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white hover:bg-stone-50 text-stone-900 flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      title={isPlayingDemo ? "Остановить демо" : "Прослушать фрагмент аудиогида"}
                    >
                      {isPlayingDemo ? (
                        <Pause className="w-5 h-5 fill-current text-[#e8559a]" />
                      ) : (
                        <Play className="w-5 h-5 ml-0.5 fill-current text-stone-900" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Animated Audio Equalizer Waveform & Playhead */}
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 mb-4">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-stone-500 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Volume2 className={`w-3.5 h-3.5 ${isPlayingDemo ? 'text-[#e8559a] animate-pulse' : 'text-stone-400'}`} />
                      <span>{isPlayingDemo ? 'Воспроизведение...' : 'Фрагмент аудиогида'}</span>
                    </span>
                    <span className="text-[#e8559a] font-semibold">
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
                          (i / 16) <= (demoSec / 25) ? 'bg-[#f878b3]' : 'bg-stone-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Progress Line */}
                  <div className="w-full h-1 bg-stone-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#f878b3] to-[#c5a059] transition-all duration-300"
                      style={{ width: `${(demoSec / 25) * 100}%` }}
                    />
                  </div>
                </div>

                <h3 className="font-serif text-3xl font-medium text-stone-900 mb-2">
                  {guide.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed font-light">
                  {guide.description}
                </p>

                <div className="flex items-baseline gap-2.5 mb-2">
                  <span className="font-mono text-2xl font-bold text-stone-900">{guide.price}</span>
                  {guide.oldPrice && (
                    <span className="font-mono text-xs line-through text-stone-400">
                      {guide.oldPrice}
                    </span>
                  )}
                  <span className="text-[10px] font-mono uppercase text-[#c5a059] bg-[#fef8ee] border border-[#c5a059]/30 px-2 py-0.5 rounded-full font-semibold">
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
            className="btn-glow-rose w-full py-3.5 rounded-full text-center text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 shadow-md"
          >
            <span>Купить аудиогид</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
