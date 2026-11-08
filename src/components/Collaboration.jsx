import React, { useState } from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { Mail, Send, Check, Copy, ArrowUpRight, Handshake } from 'lucide-react';

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
    <section id="cooperation" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto scroll-mt-24">
      {/* Chapter Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-stone-200/80 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#e8559a] mb-2 font-semibold">
            <Handshake className="w-3.5 h-3.5" />
            <span>[ CHAPITRE 08 / PR & COLLABORATION ]</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight">
            Сотрудничество <span className="italic font-light text-stone-500">& PR</span>
          </h2>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-stone-400 font-mono sm:text-right">
          Коммерческие спецпроекты & консалтинг
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#c5a059] font-medium">
          ПРЯМОЙ КАНАЛ СВЯЗИ С КОМАНДОЙ НАСТИ СИВЕЦ
        </div>

        <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 leading-tight">
          Создадим ольфакторную историю с безупречным вкусом
        </h3>

        <p className="text-stone-600 font-light leading-relaxed max-w-xl mx-auto text-sm sm:text-base">
          {collaboration.description}
        </p>

        {/* Formats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-left">
          {collaboration.formats?.map((fmt, idx) => (
            <div key={idx} className="editorial-card p-6 sm:p-7 rounded-2xl">
              <div className="text-xs font-mono uppercase tracking-wider text-stone-900 font-semibold mb-2">
                {fmt.title}
              </div>
              <div className="text-xs text-stone-600 font-light leading-relaxed">
                {fmt.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <a
            href={collaboration.botUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEngine.playClick()}
            className="editorial-btn-dark w-full sm:w-auto px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 shadow-xs"
          >
            <Send className="w-3.5 h-3.5 text-[#f878b3]" />
            <span>{collaboration.botLabel}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={copyEmail}
            className="editorial-btn-light w-full sm:w-auto px-7 py-4 rounded-full inline-flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
          >
            <Mail className="w-3.5 h-3.5 text-[#e8559a]" />
            <span>{collaboration.email}</span>
            {copiedEmail ? (
              <Check className="w-3.5 h-3.5 text-emerald-600 ml-1" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-stone-400 ml-1" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
