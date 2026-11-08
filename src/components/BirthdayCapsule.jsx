import React from 'react';
import { soundEngine } from '../utils/audio';
import { Cake, Sparkles, Heart } from 'lucide-react';

export default function BirthdayCapsule({ onOpenBirthday }) {
  const accords = [
    { title: 'Игристое шампанское', desc: 'Искристые пузырьки & радость открытий' },
    { title: 'Дамасская роза', desc: 'Бархатные лепестки & женская энергия' },
    { title: 'Белый кедр', desc: 'Чистота, глубина & нерушимый дзен' },
    { title: 'Бурбонская ваниль', desc: 'Теплый уют & парфюмерное счастье' },
  ];

  return (
    <section id="birthday" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto scroll-mt-24">
      {/* Chapter Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-stone-200/80 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#e8559a] mb-2 font-semibold">
            <Cake className="w-3.5 h-3.5" />
            <span>Капсула 14 Ноября</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight">
            Капсула 14 Ноября <span className="italic font-light text-stone-500">& L'Anniversaire</span>
          </h2>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-stone-400 font-mono sm:text-right">
          Праздничное ольфакторное посвящение
        </div>
      </div>

      {/* Main Editorial Presentation */}
      <div className="p-8 sm:p-16 rounded-3xl bg-[#FAF6F2] border border-stone-200/80 text-center relative overflow-hidden shadow-xs">
        {/* Soft Ambient Rose Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#f878b3]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 text-[11px] font-mono uppercase tracking-widest text-[#e8559a] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>14 Ноября &bull; День рождения Насти</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 leading-tight">
            Ольфакторный праздник & теплые пожелания
          </h3>

          <p className="text-stone-600 font-light leading-relaxed text-sm sm:text-base">
            День рождения — это повод открыть редкий винтажный флакон, вдохнуть ноты праздника и сказать слова благодарности за вдохновение, открытость и красоту, которую Настя создает каждый день.
          </p>

          {/* Festive Accords Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-left">
            {accords.map((acc, i) => (
              <div key={i} className="editorial-card p-4 rounded-xl">
                <div className="text-xs font-serif font-medium text-stone-900 mb-0.5">
                  {acc.title}
                </div>
                <div className="text-[10px] text-stone-500 font-light leading-snug">
                  {acc.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button
              onClick={() => {
                soundEngine.playChime(659, 1.4);
                if (onOpenBirthday) onOpenBirthday();
              }}
              className="editorial-btn-dark px-8 py-4 rounded-full inline-flex items-center gap-2.5 shadow-sm transition-all hover:scale-105 cursor-pointer"
            >
              <Heart className="w-4 h-4 text-[#f878b3]" />
              <span>Открыть праздничную капсулу & поздравить</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
