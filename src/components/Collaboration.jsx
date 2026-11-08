import React, { useState } from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { Mail, Send, Check, Copy, ArrowUpRight, MessageSquare, Handshake } from 'lucide-react';

export default function Collaboration() {
  const { collaboration } = SITE_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    soundEngine.playChime(659, 1.2);
    navigator.clipboard.writeText(collaboration.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="cooperation" className="py-20 sm:py-24 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Chapter Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-stone-200/80 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#e8559a] mb-2 font-semibold">
            <Handshake className="w-4 h-4 text-[#e8559a]" />
            <span>[ 07 / ПАРТНЕРСТВО & PR ]</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight">
            Сотрудничество <span className="italic font-light text-stone-600">& спецпроекты</span>
          </h2>
        </div>
        <div className="text-xs uppercase tracking-widest text-stone-500 font-mono sm:text-right">
          Коммерческие интеграции &bull; Лекции
        </div>
      </div>

      <div className="relative rounded-[2.5rem] p-8 sm:p-14 bg-white/95 border border-stone-200/90 overflow-hidden text-center max-w-3xl mx-auto shadow-xl shadow-stone-900/5">
        {/* Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#f878b3]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-[11px] font-mono uppercase tracking-widest text-[#c5a059] mb-5 font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Прямой канал связи с командой</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 mb-4">
            Создадим незабываемую ольфакторную историю
          </h3>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light max-w-lg mx-auto mb-8">
            {collaboration.description}
          </p>

          {/* Formats Grid */}
          {collaboration.formats && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left">
              {collaboration.formats.map((fmt, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/70 shadow-2xs">
                  <div className="text-xs font-semibold text-stone-900 mb-1">{fmt.title}</div>
                  <div className="text-[11px] text-stone-500 font-light leading-snug">{fmt.desc}</div>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={collaboration.botUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="btn-glow-rose w-full sm:w-auto py-4 px-8 rounded-full text-xs font-mono uppercase tracking-widest inline-flex items-center justify-center gap-2.5 shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>{collaboration.botLabel}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={copyEmail}
              className="btn-luxury-glass w-full sm:w-auto py-4 px-7 rounded-full text-xs font-mono uppercase tracking-widest inline-flex items-center justify-center gap-2.5 cursor-pointer shadow-xs"
            >
              <Mail className="w-4 h-4 text-[#e8559a]" />
              <span>{collaboration.email}</span>
              {copiedEmail ? (
                <Check className="w-4 h-4 text-emerald-600 ml-1" />
              ) : (
                <Copy className="w-4 h-4 text-stone-400 ml-1" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
