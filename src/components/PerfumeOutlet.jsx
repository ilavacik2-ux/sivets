import React from 'react';
import { SITE_DATA } from '../data/content';
import { Send, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export default function PerfumeOutlet() {
  const { outlet } = SITE_DATA;

  return (
    <section id="outlet" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-24">
      <div className="relative rounded-[2.5rem] p-8 sm:p-12 glass-panel border border-white/90 shadow-xl overflow-hidden group">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Outlet Info */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f878b3]/20 border border-[#f878b3]/30 text-xs font-semibold uppercase tracking-widest text-neutral-900 mb-4">
              <Zap className="w-3.5 h-3.5 text-[#f878b3]" />
              <span>{outlet.badge}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 tracking-tight mb-4">
              {outlet.title}
            </h2>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal mb-6 max-w-xl">
              {outlet.description} Закрытый Telegram-канал для ценителей: проверенные лоты, редкие винтажи, распивы и безопасные сделки без риска нарваться на подделку.
            </p>

            {/* Benefit Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs font-medium text-neutral-700">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#f878b3]" />
                <span>Строгая верификация оригиналов</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f878b3]" />
                <span>Прямая связь между покупателями</span>
              </div>
            </div>

            <a
              href={outlet.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pink py-3.5 px-8 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-2.5 shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>{outlet.buttonText}</span>
            </a>
          </div>

          {/* Visual Avatar / Mascot */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs aspect-square rounded-[2rem] overflow-hidden shadow-xl border-4 border-white/80 bg-neutral-100 group-hover:scale-105 transition-transform duration-500">
              <img
                src={outlet.image}
                alt="Парфюмерный аутлет"
                loading="lazy"
                width={350}
                height={350}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-center text-xs font-semibold text-white tracking-wider uppercase">
                @parfoutlet
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
