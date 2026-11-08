import React, { useState, useEffect, useRef } from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { Sparkles, Layers, Compass, Quote, Droplets, Wand2, ArrowRight, RotateCcw, Check } from 'lucide-react';

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

  // High-DPI Liquid Canvas Physics inside Flacon
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
      r: Math.random() * 3 + 1,
      speed: Math.random() * 0.9 + 0.4,
      alpha: Math.random() * 0.6 + 0.2,
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
        : (layeredBase.color || '#e5c18a');

      // 1. LIQUID MENISCUS & BODY
      ctx.save();
      ctx.beginPath();
      // Flacon chamber clip (x: 45, y: 110, w: 170, h: 200, rounded bottom corners)
      ctx.roundRect(46, 112, 168, 196, [6, 6, 26, 26]);
      ctx.clip();

      // Liquid gradient
      const liquidGrad = ctx.createLinearGradient(0, 140, 0, 310);
      liquidGrad.addColorStop(0, `${primaryColor}55`);
      liquidGrad.addColorStop(0.5, `${primaryColor}aa`);
      liquidGrad.addColorStop(1, `${secondaryColor}dd`);
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
      sheenGrad.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
      sheenGrad.addColorStop(0.2, 'rgba(255, 255, 255, 0.08)');
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

      // 2. CRYSTAL FLACON GEOMETRY (Haute Parfumerie Monolith)
      // Crystal Stopper
      ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(96, 26, 68, 36, [8, 8, 4, 4]);
      ctx.fill();
      ctx.stroke();

      // Gold / Rose Gold Collar Ring
      const collarGrad = ctx.createLinearGradient(100, 64, 160, 78);
      collarGrad.addColorStop(0, '#fbeec8');
      collarGrad.addColorStop(0.5, '#e5c18a');
      collarGrad.addColorStop(1, '#b38446');
      ctx.fillStyle = collarGrad;
      ctx.beginPath();
      ctx.roundRect(102, 64, 56, 16, 2);
      ctx.fill();

      // Crystal Neck
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.beginPath();
      ctx.rect(108, 80, 44, 30);
      ctx.stroke();

      // Outer Flacon Body Glass Contour
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.roundRect(44, 110, 172, 200, [8, 8, 28, 28]);
      ctx.stroke();

      // Internal Glass Wall Facets (Heavy luxury crystal bottom)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(52, 118, 156, 176, [4, 4, 20, 20]);
      ctx.stroke();

      // Left specular vertical gleam
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(54, 122);
      ctx.lineTo(54, 284);
      ctx.stroke();

      // Monogram inside flacon label
      ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('SIVETS • ATELIER', 130, 296);

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [activeTab, selectedNote, layeredTop, layeredHeart, layeredBase]);

  const activeTier = olfactivePyramid.tiers[selectedTierIndex];

  return (
    <section id="pyramid" className="py-24 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-24">
      {/* Chapter Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#f878b3] mb-2">
            <Compass className="w-4 h-4" />
            <span>[ 01 / ОЛЬФАКТОРНАЯ ЛАБОРАТОРИЯ ]</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight">
            Пирамида нот <span className="italic font-light text-neutral-300">& ателье лееринга</span>
          </h2>
        </div>

        {/* Dual Mode Switcher */}
        <div className="flex items-center p-1.5 rounded-full bg-white/[0.05] border border-white/15">
          <button
            onClick={() => {
              soundEngine.playClick();
              setActiveTab('pyramid');
            }}
            className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all cursor-pointer ${
              activeTab === 'pyramid'
                ? 'bg-[#f878b3] text-black shadow-lg font-semibold'
                : 'text-neutral-400 hover:text-white'
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
                ? 'bg-[#f878b3] text-black shadow-lg font-semibold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Wand2 className="w-3.5 h-3.5" />
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
              <div className="text-xs uppercase font-mono tracking-widest text-neutral-400 mb-1 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#f878b3]" />
                <span>Уровни раскрытия пирамиды</span>
              </div>

              {olfactivePyramid.tiers.map((tier, tIdx) => {
                const isTierActive = selectedTierIndex === tIdx;
                return (
                  <div
                    key={tier.tierName}
                    className={`p-4 rounded-2xl transition-all duration-300 border ${
                      isTierActive
                        ? 'bg-white/[0.08] border-[#f878b3]/60 shadow-[0_0_30px_rgba(248,120,179,0.18)]'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                        {tier.tierName}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500">{tier.timing}</span>
                    </div>

                    <div className="text-sm font-serif font-medium text-white mb-2.5">
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
                              borderColor: isSelected ? note.color : 'rgba(255,255,255,0.1)',
                              backgroundColor: isSelected ? `${note.color}25` : 'rgba(255,255,255,0.03)',
                            }}
                            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                              isSelected ? 'text-white shadow-sm scale-105 font-semibold' : 'text-neutral-300 hover:text-white'
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
              <div className="text-xs uppercase font-mono tracking-widest text-[#f878b3] mb-1 flex items-center gap-2">
                <Wand2 className="w-3.5 h-3.5" />
                <span>Соберите ваш авторский микс:</span>
              </div>

              {/* 1. Pick Top Note */}
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-[10px] font-mono uppercase text-neutral-400 mb-2">
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
                      className={`px-3 py-1 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                        layeredTop.id === note.id
                          ? 'bg-[#f878b3]/25 border-[#f878b3] text-white shadow-sm'
                          : 'bg-white/[0.02] border-white/10 text-neutral-300 hover:text-white'
                      }`}
                    >
                      {note.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Pick Heart Note */}
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-[10px] font-mono uppercase text-neutral-400 mb-2">
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
                      className={`px-3 py-1 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                        layeredHeart.id === note.id
                          ? 'bg-[#f878b3]/25 border-[#f878b3] text-white shadow-sm'
                          : 'bg-white/[0.02] border-white/10 text-neutral-300 hover:text-white'
                      }`}
                    >
                      {note.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Pick Base Note */}
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-[10px] font-mono uppercase text-neutral-400 mb-2">
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
                      className={`px-3 py-1 rounded-full text-xs font-medium border transition-all cursor-pointer ${
                        layeredBase.id === note.id
                          ? 'bg-[#f878b3]/25 border-[#f878b3] text-white shadow-sm'
                          : 'bg-white/[0.02] border-white/10 text-neutral-300 hover:text-white'
                      }`}
                    >
                      {note.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Author Recipes Shortcuts */}
              <div className="pt-2">
                <div className="text-[10px] font-mono uppercase text-neutral-400 mb-2">
                  Фирменные формулы Насти:
                </div>
                <div className="flex flex-col gap-1.5">
                  {olfactivePyramid.layeringFormulas.map((formula) => (
                    <button
                      key={formula.id}
                      onClick={() => handleApplyPreset(formula)}
                      className="p-2 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 text-left text-xs text-neutral-300 hover:text-white transition-all flex items-center justify-between cursor-pointer"
                    >
                      <span className="font-serif italic">&laquo;{formula.name}&raquo;</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#f878b3]" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Center Column: The Interactive Flacon with Liquid Slosh */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center relative py-6">
          {/* Ambient Olfactive Glow */}
          <div
            className="absolute w-72 h-72 rounded-full blur-3xl pointer-events-none transition-colors duration-700"
            style={{
              backgroundColor: activeTab === 'pyramid'
                ? (selectedNote.glowColor || 'rgba(248,120,179,0.3)')
                : 'rgba(248, 120, 179, 0.35)',
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
              className="relative z-10 filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] cursor-pointer transition-transform group-hover:scale-[1.02]"
              title="Интерактивный флакон духов: наведите для волны, нажмите для распыления"
              onClick={triggerSpray}
            />

            <div className="text-center mt-3">
              <button
                onClick={triggerSpray}
                className="btn-luxury-glass px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-300 hover:text-white inline-flex items-center gap-1.5 shadow-md cursor-pointer"
              >
                <Droplets className="w-3.5 h-3.5 text-[#f878b3]" />
                <span>Нажмите для распыления</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Note Sensory Profile OR Layering Lab Verdict */}
        <div className="lg:col-span-4">
          {activeTab === 'pyramid' ? (
            /* Pyramid Note Dossier */
            <div className="glass-luxury rounded-3xl p-6 sm:p-7 border border-white/15 relative overflow-hidden shadow-2xl">
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-colors duration-500"
                style={{ backgroundColor: selectedNote.color }}
              />

              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                  {activeTier.tierRu} &bull; Профиль
                </span>
                <span
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider"
                  style={{
                    backgroundColor: `${selectedNote.color}25`,
                    color: selectedNote.color,
                    border: `1px solid ${selectedNote.color}55`,
                  }}
                >
                  Активно
                </span>
              </div>

              <h3 className="font-serif text-3xl font-medium text-white mb-1">
                {selectedNote.name}
              </h3>

              <div className="text-xs font-mono italic text-neutral-400 mb-4 tracking-wider">
                {selectedNote.latin}
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed font-light mb-6">
                {selectedNote.desc}
              </p>

              {/* Nastya's Curation Comment */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 relative">
                <Quote className="w-4 h-4 text-[#f878b3] mb-1.5 opacity-80" />
                <div className="text-xs text-neutral-200 italic font-serif leading-relaxed mb-2">
                  &laquo;{selectedNote.nastyaNote}&raquo;
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#f878b3] font-semibold">
                  — Настя Сивец
                </div>
              </div>

              <a
                href="#course"
                onClick={() => soundEngine.playClick()}
                className="mt-6 w-full py-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-xs text-center font-medium tracking-wider uppercase text-white flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#e5c18a]" />
                <span>Изучить в онлайн-курсе</span>
              </a>
            </div>
          ) : (
            /* Layering Lab Result Dossier */
            <div className="glass-luxury rounded-3xl p-6 sm:p-7 border border-[#f878b3]/30 relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#f878b3]">
                  Авторская формула
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-white/10 text-white">
                  3 Слоя
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white mb-2 leading-tight">
                {layeredTop.name} + {layeredHeart.name} + {layeredBase.name}
              </h3>

              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 mb-4 text-xs text-neutral-200 leading-relaxed font-light">
                {layeringVerdict?.vibe || "Уникальное сочетание искристого верха, телесного сердца и чувственного шлейфа."}
              </div>

              <div className="p-3.5 rounded-2xl bg-[#f878b3]/10 border border-[#f878b3]/25 mb-6">
                <div className="text-[10px] font-mono uppercase text-[#f878b3] font-semibold mb-1">
                  Правило лееринга Насти:
                </div>
                <div className="text-xs italic font-serif text-neutral-200">
                  {layeringVerdict?.rule || "Наносите более плотную молекулярную базу первой, а легкий аккорд распыляйте поверх с расстояния 20 см."}
                </div>
              </div>

              <button
                onClick={testLayeredFormula}
                className="btn-glow-rose w-full py-3 rounded-full text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-black" />
                <span>Прослушать аккорд & распылить</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
