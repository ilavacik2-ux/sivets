import React from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { Send, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function PerfumeOutlet() {
  const { outlet } = SITE_DATA;

  return (
    <section id="outlet" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto scroll-mt-24">
      {/* Chapter Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-stone-200/80 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#e8559a] mb-2 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Комьюнити & Аутлет</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight">
            Парфюмерный аутлет <span className="italic font-light text-stone-500">& комьюнити</span>
          </h2>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-stone-400 font-mono sm:text-right">
          Приватный клуб коллекционеров в Telegram
        </div>
      </div>

      {/* Main Editorial Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
        <div className="lg:col-span-7 space-y-7">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#c5a059] font-medium">
            БЕЗОПАСНЫЙ РЫНОК ОРИГИНАЛЬНОЙ ПАРФЮМЕРИИ
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 leading-tight">
            Оригинальные флаконы, редкие винтажи и проверенные распивы
          </h3>

          <p className="text-stone-600 font-light leading-relaxed text-sm sm:text-base">
            {outlet.description} Все объявления проходят строгую предварительную модерацию. Мы исключаем любой риск реплик и подделок, создавая прозрачную среду для покупки, обмена и продажи редких флаконов.
          </p>

          {/* Verification Standards Manifesto */}
          <div className="space-y-4 pt-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400">
              СТАНДАРТЫ ВЕРИФИКАЦИИ СООБЩЕСТВА:
            </div>
            {outlet.verificationSteps?.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3.5 text-xs sm:text-sm text-stone-700 font-light">
                <CheckCircle2 className="w-4 h-4 text-[#e8559a] flex-none mt-0.5" />
                <div>
                  <strong className="font-medium text-stone-900">{step.title}</strong> — {step.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Telegram Action Button */}
          <div className="pt-4">
            <a
              href={outlet.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="editorial-btn-dark px-8 py-4 rounded-full inline-flex items-center gap-2.5 shadow-sm"
            >
              <Send className="w-3.5 h-3.5 text-[#f878b3]" />
              <span>{outlet.buttonText}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right: Archival Collector Standards Card & Stats */}
        <div className="lg:col-span-5 space-y-6">
          <div className="editorial-card p-8 rounded-2xl bg-[#FAF8F5] space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#e8559a] font-semibold">
                КЛУБНЫЙ РЕЕСТР
              </span>
              <span className="text-[10px] font-mono text-stone-400">@parfoutlet</span>
            </div>

            <div className="font-serif text-2xl font-light text-stone-900">
              Пространство для ценителей, коллекционеров и исследователей ароматов
            </div>

            <p className="text-xs text-stone-600 font-light leading-relaxed">
              Отливанты от 2 до 10 мл для безопасного первого знакомства, винтажные выпуски ароматов до переформулировок IFRA и остатки во флаконах по честной цене.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-3 pt-2 border-t border-stone-200/80">
              {outlet.stats?.map((st, i) => (
                <div key={i} className="text-center">
                  <div className="font-serif text-2xl font-light text-stone-900 mb-0.5">
                    {st.value}
                  </div>
                  <div className="text-[9px] uppercase font-mono tracking-wider text-stone-400">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Community Offerings Ledger */}
      <div className="pt-10 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-4 gap-8">
        {outlet.communityPillars?.map((pil, i) => (
          <div key={i} className="space-y-1.5">
            <div className="text-xs font-mono uppercase tracking-wider text-stone-900 font-semibold">
              {pil.name}
            </div>
            <div className="text-xs text-stone-500 font-light leading-relaxed">
              {pil.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
