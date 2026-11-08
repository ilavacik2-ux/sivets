import React, { useState, useEffect, useRef } from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { Sparkles, Layers, Compass, Quote, Droplets, Wand2, ArrowRight } from 'lucide-react';

export default function OlfactivePyramid() {
  const { olfactivePyramid } = SITE_DATA;
  const [activeTab, setActiveTab] = useState('pyramid'); // 'pyramid' | 'layering'

  // Pyramid state
  const [selectedTierIndex, setSelectedTierIndex] = useState(1); // Heart Notes
  const [selectedNote, setSelectedNote] = useState(olfactivePyramid.tiers[1].notes[0]); // Lactonic

  // Layering Lab state
  const [layeredTop, setLayeredTop] = useState(olfactivePyramid.tiers[0].notes[0]); // pepper
  const [layeredHeart, setLayeredHeart] = useState(olfactivePyramid.tiers[1].notes[0]); // lactonic
  const [layeredBase, setLayeredBase] = useState(olfactivePyramid.tiers[2].notes[2]); // vanilla
  const [layeringVerdict, setLayeringVerdict] = useState(olfactivePyramid.layeringFormulas[0]);
  const [isSprayed, setIsSprayed] = useState(false);

  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const mouseSlosh = useRef({ current: 0, target: 0 });

  const handleSelectNote = (note, tierIdx) => {
    setSelectedTierIndex(tierIdx);
    setSelectedNote(note);
    soundEngine.playChime(note.freq || 528, 1.2);
  };

  const handleApplyPreset = (formula) => {
    const top = olfactivePyramid.tiers[0].notes.find((n) => n.id === formula.top) || olfactivePyramid.tiers[0].notes[0];
    const heart = olfactivePyramid.tiers[1].notes.find((n) => n.id === formula.heart) || olfactivePyramid.tiers[1].notes[0];
    const base = olfactivePyramid.tiers[2].notes.find((n) => n.id === formula.base) || olfactivePyramid.tiers[2].notes[0];

    setLayeredTop(top);
    setLayeredHeart(heart);
    setLayeredBase(base);
    setLayeringVerdict(formula);

    soundEngine.playLayeredChord([top.freq || 659, heart.freq || 528, base.freq || 330], 2.2);
  };

  const testLayeredFormula = () => {
    soundEngine.playLayeredChord([layeredTop.freq || 659, layeredHeart.freq || 528, layeredBase.freq || 330], 2.4);
    triggerSpray();
  };

  const triggerSpray = () => {
    soundEngine.playSpray();
    setIsSprayed(true);
    setTimeout(() => setIsSprayed(false), 1400);
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const normalizedX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    mouseSlosh.current.target = Math.max(-1, Math.min(1, normalizedX)) * 14;
  };

  const handleMouseLeave = () => {
    mouseSlosh.current.target = 0;
  };

  // High-DPI Liquid Canvas Physics inside Flacon (Light Crystal Atelier Aesthetic)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let time = 0;

    // Retina display scaling
    const cssWidth = 260;
    const cssHeight = 350;
    const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 2, 2.5) : 2;

    canvas.width = cssWidth * dpr;
    canvas.height = cssHeight * dpr;
    canvas.style.width = `${cssWidth}px`;
    canvas.style.height = `${cssHeight}px`;

    // Rising scent bubbles inside flacon
    const bubbles = Array.from({ length: 18 }, () => ({
      x: Math.random() * 140 + 60,
      y: Math.random() * 160 + 150,
      r: Math.random() * 2.8 + 1,
      speed: Math.random() * 0.8 + 0.35,
      alpha: Math.random() * 0.5 + 0.3,
      wobbleSpeed: Math.random() * 0.05 + 0.02,
    }));

    const render = () => {
      time += 0.035;

      // Smooth dampening of slosh angle
      mouseSlosh.current.current += (mouseSlosh.current.target - mouseSlosh.current.current) * 0.08;
      const currentSlosh = mouseSlosh.current.current;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, cssWidth, cssHeight);

      // Determine liquid color profile
      const primaryColor = activeTab === 'pyramid'
        ? (selectedNote.color || '#f878b3')
        : (layeredHeart.color || '#f878b3');
      
      const secondaryColor = activeTab === 'pyramid'
        ? (selectedNote.color || '#f878b3')
        : (layeredBase.color || '#c5a059');

      // 1. LIQUID MENISCUS & BODY
      ctx.save();
      ctx.beginPath();
      // Flacon chamber clip (x: 45, y: 110, w: 170, h: 200, rounded bottom corners)
      ctx.roundRect(46, 112, 168, 196, [6, 6, 26, 26]);
      ctx.clip();

      // Liquid gradient (luminous and saturated for light crystal aesthetic)
      const liquidGrad = ctx.createLinearGradient(0, 140, 0, 310);
      liquidGrad.addColorStop(0, `${primaryColor}40`);
      liquidGrad.addColorStop(0.5, `${primaryColor}88`);
      liquidGrad.addColorStop(1, `${secondaryColor}cc`);
      ctx.fillStyle = liquidGrad;

      // Wave path with slosh angle and sinusoidal motion
      const waveBaseY = 160;
      ctx.beginPath();
      ctx.moveTo(30, 320);
      ctx.lineTo(30, waveBaseY - currentSlosh);

      for (let x = 30; x <= 230; x += 8) {
        const tOffset = (x - 30) / 200;
        const sloshOffset = (tOffset - 0.5) * currentSlosh * 2;
        const wave = Math.sin(time + x * 0.04) * 5 + Math.cos(time * 0.7 + x * 0.025) * 3;
        ctx.lineTo(x, waveBaseY + wave + sloshOffset);
      }

      ctx.lineTo(230, 320);
      ctx.closePath();
      ctx.fill();

      // Caustic glass highlight
      const sheenGrad = ctx.createLinearGradient(50, 130, 150, 310);
      sheenGrad.addColorStop(0, 'rgba(255, 255, 255, 0.65)');
      sheenGrad.addColorStop(0.2, 'rgba(255, 255, 255, 0.15)');
      sheenGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = sheenGrad;
      ctx.fill();

      // Rising scent effervescence
      bubbles.forEach((b) => {
        b.y -= b.speed;
        const currentWaveAtX = waveBaseY + Math.sin(time + b.x * 0.04) * 5;
        if (b.y < currentWaveAtX + 8) {
          b.y = 300;
          b.x = Math.random() * 140 + 60;
        }
        const wobbleX = b.x + Math.sin(time * 2 + b.y * 0.05) * 2;
        ctx.beginPath();
        ctx.arc(wobbleX, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b.alpha})`;
        ctx.fill();
      });

      ctx.restore();

      // 2. CRYSTAL FLACON GEOMETRY (Light Luxury Crystal Flacon)
      // Crystal Stopper
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.strokeStyle = 'rgba(44, 38, 35, 0.35)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(96, 26, 68, 36, [8, 8, 4, 4]);
      ctx.fill();
      ctx.stroke();

      // Gold / Rose Gold Collar Ring
      const collarGrad = ctx.createLinearGradient(100, 64, 160, 78);
      collarGrad.addColorStop(0, '#fef3c7');
      collarGrad.addColorStop(0.5, '#c5a059');
      collarGrad.addColorStop(1, '#92400e');
      ctx.fillStyle = collarGrad;
      ctx.beginPath();
      ctx.roundRect(102, 64, 56, 16, 2);
      ctx.fill();

      // Crystal Neck
      ctx.strokeStyle = 'rgba(44, 38, 35, 0.25)';
      ctx.beginPath();
      ctx.rect(108, 80, 44, 30);
      ctx.stroke();

      // Outer Flacon Body Glass Contour
      ctx.strokeStyle = 'rgba(44, 38, 35, 0.35)';
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.roundRect(44, 110, 172, 200, [8, 8, 28, 28]);
      ctx.stroke();

      // Internal Glass Wall Facets (Heavy luxury crystal bottom)
      ctx.strokeStyle = 'rgba(44, 38, 35, 0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(52, 118, 156, 176, [4, 4, 20, 20]);
      ctx.stroke();

      // Left specular vertical gleam
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(54, 122);
      ctx.lineTo(54, 284);
      ctx.stroke();

      // Monogram inside flacon label
      ctx.fillStyle = 'rgba(44, 38, 35, 0.45)';
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('NASTYA SIVETS', 130, 296);

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [activeTab, selectedNote, layeredTop, layeredHeart, layeredBase]);

  const activeTier = olfactivePyramid.tiers[selectedTierIndex];

  return (
    <section id="pyramid" className="py-20 sm:py-24 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Chapter Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-stone-200/80 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#e8559a] mb-2 font-semibold">
            <Compass className="w-4 h-4" />
            <span>[ 01 / ОЛЬФАКТОРНЫЙ АТЛАС ]</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight">
            Пирамида нот <span className="italic font-light text-stone-600">& искусство лееринга</span>
          </h2>
        </div>

        {/* Dual Mode Switcher */}
        <div className="flex items-center p-1.5 rounded-full bg-stone-100/90 border border-stone-200 shadow-2xs">
          <button
            onClick={() => {
              soundEngine.playClick();
              setActiveTab('pyramid');
            }}
            className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === 'pyramid'
                ? 'bg-white text-stone-900 shadow-sm font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Пирамида нот
          </button>

          <button
            onClick={() => {
              soundEngine.playClick();
              setActiveTab('layering');
            }}
            className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'layering'
                ? 'bg-white text-stone-900 shadow-sm font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Wand2 className="w-3.5 h-3.5 text-[#e8559a]" />
            <span>Микшер лееринга</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Showcase */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
      >
        {/* Left Column: Pyramid Selector OR Layering Mixer Controls */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {activeTab === 'pyramid' ? (
            <>
              <div className="text-xs uppercase font-mono tracking-widest text-stone-500 mb-1 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#e8559a]" />
                <span>Уровни раскрытия пирамиды</span>
              </div>

              {olfactivePyramid.tiers.map((tier, tIdx) => {
                const isTierActive = selectedTierIndex === tIdx;
                return (
                  <div
                    key={tier.tierName}
                    className={`p-4 rounded-2xl transition-all duration-300 border ${
                      isTierActive
                        ? 'bg-white border-[#f878b3] shadow-md shadow-pink-500/5'
                        : 'bg-white/70 border-stone-200/80 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500">
                        {tier.tierName}
                      </span>
                      <span className="text-[10px] font-mono text-stone-400">{tier.timing}</span>
                    </div>

                    <div className="text-sm font-serif font-medium text-stone-900 mb-2.5">
                      {tier.tierRu}
                    </div>

                    {/* Note Pills */}
                    <div className="flex flex-wrap gap-2">
                      {tier.notes.map((note) => {
                        const isSelected = selectedNote.id === note.id;
                        return (
                          <button
                            key={note.id}
                            onClick={() => handleSelectNote(note, tIdx)}
                            style={{
                              borderColor: isSelected ? note.color : 'rgba(28,25,23,0.12)',
                              backgroundColor: isSelected ? '#FAF8F5' : '#FFFFFF',
                            }}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 border shadow-2xs ${
                              isSelected
                                ? 'text-stone-900 shadow-sm scale-[1.03] font-semibold'
                                : 'text-stone-600 hover:text-stone-900'
                            }`}
                          >
                            <span
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: note.color }}
                            />
                            <span>{note.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            /* Layering Mixer Note Pickers */
            <div className="space-y-4">
              <div className="text-xs uppercase font-mono tracking-widest text-[#e8559a] mb-1 flex items-center gap-2 font-semibold">
                <Wand2 className="w-3.5 h-3.5" />
                <span>Соберите ваш авторский микс:</span>
              </div>

              {/* 1. Pick Top Note */}
              <div className="p-3.5 rounded-2xl bg-white/90 border border-stone-200 shadow-2xs">
                <div className="text-[10px] font-mono uppercase text-stone-500 mb-2">
                  1. Верхний аккорд (старт):
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {olfactivePyramid.tiers[0].notes.map((note) => (
                    <button
                      key={note.id}
                      onClick={() => {
                        setLayeredTop(note);
                        soundEngine.playChime(note.freq, 0.8);
                      }}
                      className={`px-3 py-1 rounded-full text-xs font-medium border transition-all cursor-pointer shadow-2xs ${
                        layeredTop.id === note.id
                          ? 'bg-[#fdf2f7] border-[#f878b3] text-[#e8559a] font-semibold'
                          : 'bg-white border-stone-200 text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      {note.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Pick Heart Note */}
              <div className="p-3.5 rounded-2xl bg-white/90 border border-stone-200 shadow-2xs">
                <div className="text-[10px] font-mono uppercase text-stone-500 mb-2">
                  2. Нота сердца (характер):
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {olfactivePyramid.tiers[1].notes.map((note) => (
                    <button
                      key={note.id}
                      onClick={() => {
                        setLayeredHeart(note);
                        soundEngine.playChime(note.freq, 0.8);
                      }}
                      className={`px-3 py-1 rounded-full text-xs font-medium border transition-all cursor-pointer shadow-2xs ${
                        layeredHeart.id === note.id
                          ? 'bg-[#fdf2f7] border-[#f878b3] text-[#e8559a] font-semibold'
                          : 'bg-white border-stone-200 text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      {note.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Pick Base Note */}
              <div className="p-3.5 rounded-2xl bg-white/90 border border-stone-200 shadow-2xs">
                <div className="text-[10px] font-mono uppercase text-stone-500 mb-2">
                  3. Шлейф и база (стойкость):
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {olfactivePyramid.tiers[2].notes.map((note) => (
                    <button
                      key={note.id}
                      onClick={() => {
                        setLayeredBase(note);
                        soundEngine.playChime(note.freq, 0.8);
                      }}
                      className={`px-3 py-1 rounded-full text-xs font-medium border transition-all cursor-pointer shadow-2xs ${
                        layeredBase.id === note.id
                          ? 'bg-[#fdf2f7] border-[#f878b3] text-[#e8559a] font-semibold'
                          : 'bg-white border-stone-200 text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      {note.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Author Recipes Shortcuts */}
              <div className="pt-2">
                <div className="text-[10px] font-mono uppercase text-stone-500 mb-2">
                  Фирменные формулы Насти:
                </div>
                <div className="flex flex-col gap-1.5">
                  {olfactivePyramid.layeringFormulas.map((formula) => (
                    <button
                      key={formula.id}
                      onClick={() => handleApplyPreset(formula)}
                      className="p-2.5 rounded-xl bg-white/80 hover:bg-white border border-stone-200 hover:border-[#f878b3]/50 text-left text-xs text-stone-700 hover:text-stone-900 transition-all flex items-center justify-between cursor-pointer shadow-2xs"
                    >
                      <span className="font-serif italic font-medium">&laquo;{formula.name}&raquo;</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#e8559a]" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Center Column: The Interactive Flacon with Liquid Slosh */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center relative py-6">
          {/* Ambient Olfactive Warm Glow */}
          <div
            className="absolute w-72 h-72 rounded-full blur-3xl pointer-events-none transition-colors duration-700 opacity-60"
            style={{
              backgroundColor: activeTab === 'pyramid'
                ? (selectedNote.glowColor || 'rgba(248,120,179,0.3)')
                : 'rgba(248, 120, 179, 0.25)',
            }}
          />

          <div className="relative group flex flex-col items-center">
            {/* Flacon Spray Burst Overlay */}
            {isSprayed && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                <div className="w-64 h-64 rounded-full bg-radial from-[#f878b3]/50 via-[#f878b3]/20 to-transparent animate-mist" />
              </div>
            )}

            <canvas
              ref={canvasRef}
              className="relative z-10 filter drop-shadow-[0_15px_30px_rgba(28,25,23,0.12)] cursor-pointer transition-transform group-hover:scale-[1.02]"
              title="Интерактивный флакон духов: наведите для волны, нажмите для распыления"
              onClick={triggerSpray}
            />

            <div className="text-center mt-3">
              <button
                onClick={triggerSpray}
                className="btn-luxury-glass px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] text-stone-700 hover:text-stone-900 inline-flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <Droplets className="w-3.5 h-3.5 text-[#e8559a]" />
                <span>Нажмите для распыления</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Note Sensory Profile OR Layering Lab Verdict */}
        <div className="lg:col-span-4">
          {activeTab === 'pyramid' ? (
            /* Pyramid Note Dossier */
            <div className="rounded-3xl p-6 sm:p-7 bg-white/95 border border-stone-200/90 relative overflow-hidden shadow-xl shadow-stone-900/5">
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-colors duration-500"
                style={{ backgroundColor: selectedNote.color }}
              />

              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-stone-500">
                  {activeTier.tierRu} &bull; Профиль
                </span>
                <span
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider"
                  style={{
                    backgroundColor: `${selectedNote.color}15`,
                    color: selectedNote.color,
                    border: `1px solid ${selectedNote.color}40`,
                  }}
                >
                  Активно
                </span>
              </div>

              <h3 className="font-serif text-3xl font-medium text-stone-900 mb-1">
                {selectedNote.name}
              </h3>

              <div className="text-xs font-mono italic text-stone-500 mb-4 tracking-wider">
                {selectedNote.latin}
              </div>

              <p className="text-sm text-stone-600 leading-relaxed font-light mb-6">
                {selectedNote.desc}
              </p>

              {/* Nastya's Curation Comment */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 relative">
                <Quote className="w-4 h-4 text-[#e8559a] mb-1.5 opacity-80" />
                <div className="text-xs text-stone-700 italic font-serif leading-relaxed mb-2">
                  &laquo;{selectedNote.nastyaNote}&raquo;
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#e8559a] font-semibold">
                  — Настя Сивец
                </div>
              </div>

              <a
                href="#course"
                onClick={() => soundEngine.playClick()}
                className="mt-6 w-full py-2.5 rounded-full bg-stone-100 hover:bg-stone-200/80 border border-stone-200 text-xs text-center font-medium tracking-wider uppercase text-stone-800 flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-2xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Изучить в онлайн-курсе</span>
              </a>
            </div>
          ) : (
            /* Layering Lab Result Dossier */
            <div className="rounded-3xl p-6 sm:p-7 bg-white/95 border border-[#f878b3]/40 relative overflow-hidden shadow-xl shadow-stone-900/5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#e8559a] font-semibold">
                  Авторская формула
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-stone-100 text-stone-700 font-medium">
                  3 Слоя
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 mb-2 leading-tight">
                {layeredTop.name} + {layeredHeart.name} + {layeredBase.name}
              </h3>

              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 mb-4 text-xs text-stone-700 leading-relaxed font-light">
                {layeringVerdict?.vibe || "Уникальное сочетание искристого верха, телесного сердца и чувственного шлейфа."}
              </div>

              <div className="p-3.5 rounded-2xl bg-[#fdf2f7] border border-[#f878b3]/30 mb-6">
                <div className="text-[10px] font-mono uppercase text-[#e8559a] font-semibold mb-1">
                  Правило лееринга Насти:
                </div>
                <div className="text-xs italic font-serif text-stone-700">
                  {layeringVerdict?.rule || "Наносите более плотную молекулярную базу первой, а легкий аккорд распыляйте поверх с расстояния 20 см."}
                </div>
              </div>

              <button
                onClick={testLayeredFormula}
                className="btn-glow-rose w-full py-3 rounded-full text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Прослушать аккорд & распылить</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
