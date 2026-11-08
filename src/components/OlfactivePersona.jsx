import React from 'react';
import { SITE_DATA } from '../data/content';
import { Compass } from 'lucide-react';

export default function OlfactivePersona() {
  const { manifesto } = SITE_DATA;

  return (
    <section id="persona" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto scroll-mt-24">
      {/* Chapter Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-stone-200/80 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#e8559a] mb-2 font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>[ CHAPITRE 01 / THE OLFACTIVE PERSONA ]</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight">
            Ольфакторная персона <span className="italic font-light text-stone-500">& философия</span>
          </h2>
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-stone-400 font-mono sm:text-right">
          Манифест независимого исследователя &bull; 2026
        </div>
      </div>

      {/* Editorial Grand Quote / Manifesto */}
      <div className="relative mb-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-8">
          <div className="w-8 h-[1px] bg-[#f878b3] mx-auto mb-8" />
          <blockquote className="font-serif italic text-2xl sm:text-4xl lg:text-[2.6rem] font-light text-stone-900 leading-[1.3] mb-6">
            &laquo;{manifesto.quote}&raquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] font-mono text-stone-500">
            <span className="text-[#e8559a] font-semibold">{manifesto.author}</span>
            <span>&bull;</span>
            <span>{manifesto.role}</span>
          </div>
        </div>
      </div>

      {/* Three High-Fashion Editorial Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 pt-8 border-t border-stone-200/80">
        {/* Column 01 */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#c5a059]">
            <span>01 / ПСИХОЛОГИЯ</span>
          </div>
          <h3 className="font-serif text-2xl text-stone-900 font-medium leading-snug">
            Архитектура невидимого присутствия
          </h3>
          <p className="text-sm text-stone-600 font-light leading-relaxed">
            Обоняние — единственный сенсорный канал человека, сигналы которого попадают напрямую в лимбическую систему мозга, минуя рациональные фильтры. Мы влюбляемся в аромат до того, как успеваем его осмыслить. Запах конструирует память, ауру доверия и интимное пространство.
          </p>
        </div>

        {/* Column 02 */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#e8559a]">
            <span>02 / ЭКСПЕДИЦИИ</span>
          </div>
          <h3 className="font-serif text-2xl text-stone-900 font-medium leading-snug">
            Нишевый авангард от Граса до Милана
          </h3>
          <p className="text-sm text-stone-600 font-light leading-relaxed">
            От вековых цветочных полей французского Граса и частных лабораторий Парижа до стендов мировой выставки Esxence в Милане. Я исследую смелые дома, раздвигающие границы ольфакторного языка: монументальный ладан Сорчинелли, смелый анимализм Zoologist и тонкую лактонную молекулярную химию.
          </p>
        </div>

        {/* Column 03 */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-stone-500">
            <span>03 / ЭСТЕТИКА</span>
          </div>
          <h3 className="font-serif text-2xl text-stone-900 font-medium leading-snug">
            Осознанность & парфюмерный гардероб
          </h3>
          <p className="text-sm text-stone-600 font-light leading-relaxed">
            Парфюмерия заслуживает столь же чуткого понимания, как архитектура, современное искусство или высокая литература. Читать формулы нот, сочетать молекулы в технике лееринга и собирать флаконы, созвучные внутренней идентичности — навык новой эстетической культуры.
          </p>
        </div>
      </div>

      {/* Understated Editorial Milestones Ledger */}
      <div className="mt-20 pt-10 border-t border-stone-200/80 grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 mb-1">
            48 000+
          </div>
          <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-stone-500">
            Читателей в Telegram
          </div>
        </div>

        <div>
          <div className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 mb-1">
            120 000+
          </div>
          <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-stone-500">
            Просмотров расследований
          </div>
        </div>

        <div>
          <div className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 mb-1">
            100+
          </div>
          <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-stone-500">
            Исследованных брендов ниши
          </div>
        </div>

        <div>
          <div className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 mb-1">
            100%
          </div>
          <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-stone-500">
            Честная независимая экспертиза
          </div>
        </div>
      </div>
    </section>
  );
}
