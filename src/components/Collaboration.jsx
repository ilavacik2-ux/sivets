import React, { useState } from 'react';
import { SITE_DATA } from '../data/content';
import { Mail, Send, Check, Copy, ArrowUpRight } from 'lucide-react';

export default function Collaboration() {
  const { collaboration } = SITE_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(collaboration.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="cooperation" className="py-20 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-24">
      <div className="relative rounded-[2.5rem] p-8 sm:p-12 glass-panel border border-white/90 shadow-xl overflow-hidden text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f878b3] mb-3 block">
          Партнерство & Мероприятия
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-neutral-900 tracking-tight mb-4">
          {collaboration.title}
        </h2>

        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-lg mx-auto mb-8">
          {collaboration.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={collaboration.botUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pink w-full sm:w-auto py-3.5 px-8 rounded-full text-sm font-semibold tracking-wide inline-flex items-center justify-center gap-2 shadow-md"
          >
            <Send className="w-4 h-4" />
            <span>{collaboration.botLabel}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            onClick={copyEmail}
            className="w-full sm:w-auto py-3.5 px-7 rounded-full text-sm font-medium tracking-wide bg-white hover:bg-neutral-50 text-neutral-900 border border-black/10 inline-flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
          >
            <Mail className="w-4 h-4 text-neutral-500" />
            <span>{collaboration.email}</span>
            {copiedEmail ? (
              <Check className="w-4 h-4 text-green-600 ml-1" />
            ) : (
              <Copy className="w-4 h-4 text-neutral-400 ml-1" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
