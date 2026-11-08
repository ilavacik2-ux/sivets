import React from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { Flame, ShoppingBag, ArrowUpRight, Wind, Droplets } from 'lucide-react';

export default function SluuBrand() {
  const { sluuBrand } = SITE_DATA;

  // Visual ambiance presets for each artisanal product
  const productThemes = [
    {
      icon: Flame,
      gradient: 'from-[#FDF2E9] to-[#FBF8F5]',
      borderHover: 'hover:border-[#E8A572]/60',
      badgeBg: 'bg-[#FBE8DB] text-[#C26B38]',
      accentColor: '#C26B38',
      typeLabel: 'Ароматическая свеча',
      noteTags: ['Амбра', 'Бурбонская ваниль', 'Сандал', 'Сухой кедр'],
    },
    {
      icon: Wind,
      gradient: 'from-[#F0F5EC] to-[#FBF8F5]',
      borderHover: 'hover:border-[#8EAA7B]/60',
      badgeBg: 'bg-[#E5EFE0] text-[#557B43]',
      accentColor: '#557B43',
      typeLabel: 'Интерьерный диффузор',
      noteTags: ['Инжирный лист', 'Зелёный чай', 'Белый кедр', 'Амброксан'],
    },
    {
      icon: Droplets,
      gradient: 'from-[#EDF6F8] to-[#FBF8F5]',
      borderHover: 'hover:border-[#7AB9C7]/60',
      badgeBg: 'bg-[#DEEFF2] text-[#347A8B]',
      accentColor: '#347A8B',
      typeLabel: 'Ботанический мист',
      noteTags: ['Цветы нероли', 'Морская соль', 'Бергамот', 'Белый мускус'],
    },
  ];

  return (
    <section id="sluu" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto scroll-mt-24">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-stone-200/80 gap-6">
        <div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight">
            SLUU <span className="italic font-light text-stone-500">Aromatherapy</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-stone-600 font-light max-w-md sm:text-right">
          {sluuBrand.description}
        </p>
      </div>

      {/* Prominent Direct Store & Marketplace Access Strip */}
      <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-stone-900 text-white relative overflow-hidden shadow-md">
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-md">
            <div className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-[#f878b3]">
              ОФИЦИАЛЬНЫЕ ТОЧКИ ПРОДАЖ
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-light text-white">
              Приобрести продукцию SLUU
            </h4>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Фирменная эстетичная упаковка, экспресс-доставка по всей России и официальная гарантия качества.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            {/* 1. Official Boutique */}
            <a
              href={sluuBrand.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="flex-1 sm:flex-none px-6 py-3.5 rounded-full bg-white text-stone-900 hover:bg-[#FAF8F5] transition-all flex items-center justify-center gap-2 text-xs font-sans font-medium uppercase tracking-wider shadow-sm group"
            >
              <ShoppingBag className="w-4 h-4 text-[#e8559a]" />
              <span>Официальный бутик sluu.club</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-900 transition-colors" />
            </a>

            {/* 2. Ozon */}
            <a
              href={sluuBrand.links[1].url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all flex items-center justify-center gap-2.5 text-xs font-sans font-medium uppercase tracking-wider"
            >
              <img
                src={sluuBrand.links[1].logo}
                alt="Ozon"
                className="w-4 h-4 rounded-full object-contain bg-white p-0.5"
              />
              <span>Ozon</span>
              <ArrowUpRight className="w-3 h-3 text-stone-400" />
            </a>

            {/* 3. Wildberries */}
            <a
              href={sluuBrand.links[2].url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all flex items-center justify-center gap-2.5 text-xs font-sans font-medium uppercase tracking-wider"
            >
              <img
                src={sluuBrand.links[2].logo}
                alt="Wildberries"
                className="w-4 h-4 rounded-full object-contain bg-white p-0.5"
              />
              <span>Wildberries</span>
              <ArrowUpRight className="w-3 h-3 text-stone-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Aesthetic Artisanal Collection Showcase */}
      <div>
        <div className="text-[11px] font-sans uppercase tracking-[0.2em] text-stone-400 mb-8 pb-3 border-b border-stone-200/60 font-medium flex items-center justify-between">
          <span>КОЛЛЕКЦИЯ АТЕЛЬЕ &bull; АВТОРСКИЕ КОМПОЗИЦИИ</span>
          <span className="hidden sm:inline text-stone-400 text-[10px]">100% Соевый воск & Натуральные масла</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sluuBrand.products?.map((prod, idx) => {
            const theme = productThemes[idx] || productThemes[0];
            const IconComponent = theme.icon;

            return (
              <div
                key={idx}
                className={`editorial-card rounded-2xl overflow-hidden border border-stone-200/90 ${theme.borderHover} bg-white transition-all duration-300 hover:shadow-lg flex flex-col justify-between group`}
              >
                <div>
                  {/* Visual Header Banner */}
                  <div className={`p-6 pb-5 bg-gradient-to-b ${theme.gradient} border-b border-stone-100 relative`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-sans uppercase tracking-wider font-semibold ${theme.badgeBg}`}>
                        {prod.badge}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/90 shadow-2xs flex items-center justify-center text-stone-700">
                        <IconComponent className="w-4 h-4" style={{ color: theme.accentColor }} />
                      </div>
                    </div>

                    <div className="text-[11px] font-sans uppercase tracking-wider text-stone-400 mb-1 font-medium">
                      {theme.typeLabel}
                    </div>
                    <h4 className="font-serif text-2xl font-normal text-stone-900 leading-snug group-hover:text-[#e8559a] transition-colors">
                      {prod.name}
                    </h4>
                  </div>

                  {/* Body Content & Olfactive Notes */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="text-[10px] font-sans uppercase tracking-wider text-stone-400 mb-2 font-medium">
                        Ольфакторная композиция:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {theme.noteTags.map((note, nIdx) => (
                          <span
                            key={nIdx}
                            className="px-2.5 py-1 rounded-full bg-stone-50 border border-stone-200/70 text-[11px] font-sans text-stone-700"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-sans">
                      <span>Спецификация:</span>
                      <span className="font-mono text-stone-700 font-medium">{prod.specs}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Price & Order Action */}
                <div className="p-6 pt-0 mt-auto">
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="font-mono text-lg font-semibold text-stone-900">
                      {prod.price}
                    </span>

                    <a
                      href={prod.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundEngine.playClick()}
                      className="editorial-btn-dark px-4 py-2 rounded-lg text-xs font-sans font-medium uppercase tracking-wider flex items-center gap-1.5 shadow-xs hover:scale-105 transition-all"
                    >
                      <span>Заказать</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#f878b3]" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
