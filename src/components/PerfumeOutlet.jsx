import React from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { Send, CheckCircle2, ShieldCheck, Zap, ArrowUpRight, TrendingUp, Check } from 'lucide-react';

export default function PerfumeOutlet() {
  const { outlet } = SITE_DATA;

  return (
    <section id="outlet" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Chapter Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#f878b3] mb-2">
            <Zap className="w-4 h-4 text-[#e5c18a]" />
            <span>[ 06 / КОМЬЮНИТИ & АУТЛЕТ ]</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight">
            Парфюмерный <span className="italic font-light text-neutral-300">аутлет</span>
          </h2>
        </div>
        <div className="text-xs uppercase tracking-widest text-neutral-400 font-mono sm:text-right">
          Безопасная площадка для коллекционеров
        </div>
      </div>

      {/* Main Syndicate Card */}
      <div className="relative rounded-[2.5rem] p-8 sm:p-12 glass-luxury border border-white/15 overflow-hidden shadow-2xl group">
        {/* Subtle Ambient Glow */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Live Drops Ticker Bar */}
        <div className="mb-8 p-3 rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f878b3]/20 text-[#f878b3] text-[10px] font-mono uppercase font-bold tracking-wider flex-none">
            <TrendingUp className="w-3 h-3" />
            <span>Живой поток лотов</span>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar whitespace-nowrap text-xs text-neutral-300 font-mono">
            {outlet.liveDrops?.map((drop, i) => (
              <span key={i} className="inline-flex items-center gap-2">
                <span>{drop.name}</span>
                <span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full font-sans">
                  {drop.status}
                </span>
                {i < outlet.liveDrops.length - 1 && <span className="text-white/20">•</span>}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Outlet Info */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/15 text-[11px] font-mono uppercase tracking-widest text-[#f878b3] mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{outlet.badge}</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white mb-4 leading-tight">
              Оригинальные флаконы, редкие винтажи и проверенные распивы
            </h3>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light mb-6 max-w-xl">
              {outlet.description} Все лоты строго модерируются, а участники проходят проверку репутации. Никаких подделок, реплик и обмана.
            </p>

            {/* Authenticity Verification Steps */}
            <div className="space-y-2.5 mb-8">
              {outlet.verificationSteps?.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 font-light">
                  <CheckCircle2 className="w-4 h-4 text-[#f878b3] flex-none mt-0.5" />
                  <div>
                    <strong className="font-medium text-white">{step.title}</strong> — {step.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {outlet.stats?.map((st, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
                  <div className="font-mono text-lg font-bold text-white mb-0.5">{st.value}</div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">{st.label}</div>
                </div>
              ))}
            </div>

            {/* Direct Telegram Button */}
            <a
              href={outlet.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="btn-glow-rose py-4 px-8 rounded-full text-xs font-mono uppercase tracking-widest inline-flex items-center gap-2.5 shadow-xl"
            >
              <Send className="w-4 h-4" />
              <span>{outlet.buttonText}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Visual Avatar Monolith */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs aspect-square rounded-[2.5rem] overflow-hidden border-2 border-white/20 shadow-2xl bg-neutral-900 group-hover:scale-105 transition-transform duration-500">
              <img
                src={outlet.image}
                alt="Парфюмерный аутлет Насти Сивец"
                loading="lazy"
                width={350}
                height={350}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <div className="text-xs font-mono font-bold text-white tracking-widest uppercase">
                  @parfoutlet
                </div>
                <div className="text-[10px] font-mono text-[#f878b3]">
                  Официальное сообщество
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
