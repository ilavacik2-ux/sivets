import React, { useState, useEffect, useRef } from 'react';
import { SITE_DATA } from '../data/content';
import { soundEngine } from '../utils/audio';
import { Sparkles, Compass, Droplets, Wand2, ArrowRight, Volume2 } from 'lucide-react';

export default function OlfactivePyramid() {
  const { olfactivePyramid } = SITE_DATA;
  const [activeTab, setActiveTab] = useState('pyramid'); // 'pyramid' | 'layering'

  // Pyramid state: Default to Lactonic (Heart Notes)
  const [selectedTierIndex, setSelectedTierIndex] = useState(1);
  const [selectedNote, setSelectedNote] = useState(olfactivePyramid.tiers[1].notes[0]);

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
    mouseSlosh.current.target = Math.max(-1, Math.min(1, normalizedX)) * 12;
  };

  const handleMouseLeave = () => {
    mouseSlosh.current.target = 0;
  };

  // High-DPI Crystal Flacon Canvas Rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let time = 0;

    const cssWidth = 260;
    const cssHeight = 350;
    const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 2, 2.5) : 2;

    canvas.width = cssWidth * dpr;
    canvas.height = cssHeight * dpr;
    canvas.style.width = `${cssWidth}px`;
    canvas.style.height = `${cssHeight}px`;

    const bubbles = Array.from({ length: 16 }, () => ({
      x: Math.random() * 130 + 65,
      y: Math.random() * 150 + 160,
      r: Math.random() * 2.4 + 0.8,
      speed: Math.random() * 0.7 + 0.3,
      alpha: Math.random() * 0.45 + 0.25,
    }));

    const render = () => {
      time += 0.035;

      mouseSlosh.current.current += (mouseSlosh.current.target - mouseSlosh.current.current) * 0.08;
      const currentSlosh = mouseSlosh.current.current;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, cssWidth, cssHeight);

      const primaryColor = activeTab === 'pyramid'
        ? (selectedNote.color || '#f878b3')
        : (layeredHeart.color || '#f878b3');
      
      const secondaryColor = activeTab === 'pyramid'
        ? (selectedNote.color || '#f878b3')
        : (layeredBase.color || '#c5a059');

      // 1. LIQUID MENISCUS & BODY
      ctx.save();
      ctx.beginPath();
      // Flacon chamber clip (rounded luxury crystal flacon)
      ctx.roundRect(46, 114, 168, 194, [6, 6, 24, 24]);
      ctx.clip();

      const liquidGrad = ctx.createLinearGradient(0, 140, 0, 310);
      liquidGrad.addColorStop(0, `${primaryColor}35`);
      liquidGrad.addColorStop(0.5, `${primaryColor}75`);
      liquidGrad.addColorStop(1, `${secondaryColor}bb`);
      ctx.fillStyle = liquidGrad;

      const waveBaseY = 165;
      ctx.beginPath();
      ctx.moveTo(30, 320);
      ctx.lineTo(30, waveBaseY - currentSlosh);

      for (let x = 30; x <= 230; x += 8) {
        const tOffset = (x - 30) / 200;
        const sloshOffset = (tOffset - 0.5) * currentSlosh * 2;
        const wave = Math.sin(time + x * 0.04) * 4.5 + Math.cos(time * 0.7 + x * 0.025) * 2.5;
        ctx.lineTo(x, waveBaseY + wave + sloshOffset);
      }

      ctx.lineTo(230, 320);
      ctx.closePath();
      ctx.fill();

      // Specular highlight on liquid
      const sheenGrad = ctx.createLinearGradient(50, 130, 150, 310);
      sheenGrad.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
      sheenGrad.addColorStop(0.25, 'rgba(255, 255, 255, 0.1)');
      sheenGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = sheenGrad;
      ctx.fill();

      // Rising scent bubbles
      bubbles.forEach((b) => {
        b.y -= b.speed;
        const currentWaveAtX = waveBaseY + Math.sin(time + b.x * 0.04) * 4.5;
        if (b.y < currentWaveAtX + 8) {
          b.y = 300;
          b.x = Math.random() * 130 + 65;
        }
        const wobbleX = b.x + Math.sin(time * 2 + b.y * 0.05) * 1.5;
        ctx.beginPath();
        ctx.arc(wobbleX, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b.alpha})`;
        ctx.fill();
      });

      ctx.restore();

      // 2. CRYSTAL FLACON ARCHITECTURE (Sleek High-End Atelier Aesthetic)
      // Crystal Stopper
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.strokeStyle = 'rgba(28, 25, 23, 0.2)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.roundRect(96, 28, 68, 34, [4, 4, 2, 2]);
      ctx.fill();
      ctx.stroke();

      // Polished Gold Collar
      const collarGrad = ctx.createLinearGradient(100, 62, 160, 76);
      collarGrad.addColorStop(0, '#fef3c7');
      collarGrad.addColorStop(0.5, '#c5a059');
      collarGrad.addColorStop(1, '#92400e');
      ctx.fillStyle = collarGrad;
      ctx.beginPath();
      ctx.roundRect(102, 62, 56, 16, 1);
      ctx.fill();

      // Crystal Neck
      ctx.strokeStyle = 'rgba(28, 25, 23, 0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.rect(108, 78, 44, 34);
      ctx.stroke();

      // Outer Flacon Body Contour
      ctx.strokeStyle = 'rgba(28, 25, 23, 0.22)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(44, 112, 172, 198, [6, 6, 26, 26]);
      ctx.stroke();

      // Internal Glass Wall Facets
      ctx.strokeStyle = 'rgba(28, 25, 23, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(52, 120, 156, 176, [2, 2, 18, 18]);
      ctx.stroke();

      // Specular Gleam
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(52, 124);
      ctx.lineTo(52, 280);
      ctx.stroke();

      // Atelier Monogram Label
      ctx.fillStyle = 'rgba(28, 25, 23, 0.4)';
      ctx.font = '9px monospace';
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
    <section id="pyramid" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto scroll-mt-24">
      {/* Chapter Editorial Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-stone-200/80 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#e8559a] mb-2 font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>[ CHAPITRE 02 / THE SCENT ARCHIVE & NOTES ]</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight">
            Ольфакторный атлас <span className="italic font-light text-stone-500">& искусство лееринга</span>
          </h2>
        </div>

        {/* Dual Mode Switcher (Clean Minimalist Tabs) */}
        <div className="flex items-center p-1 rounded-full bg-stone-100 border border-stone-200/80">
          <button
            onClick={() => {
              soundEngine.playClick();
              setActiveTab('pyramid');
            }}
            className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'pyramid'
                ? 'bg-stone-900 text-white font-medium shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Каталог нот
          </button>

          <button
            onClick={() => {
              soundEngine.playClick();
              setActiveTab('layering');
            }}
            className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'layering'
                ? 'bg-stone-900 text-white font-medium shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Wand2 className="w-3.5 h-3.5 text-[#f878b3]" />
            <span>Микшер лееринга</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Showcase */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
      >
        {/* Left Column: Fragrance Index Catalogue OR Layering Composer */}
        <div className="lg:col-span-5 space-y-8">
          {activeTab === 'pyramid' ? (
            /* Luxury Byredo/Aesop Catalogue Index */
            <div className="space-y-6">
              <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-stone-400">
                ОГЛАВЛЕНИЕ АТЛАСА НОТ (3 УРОВНЯ РАСКРЫТИЯ)
              </div>

              {olfactivePyramid.tiers.map((tier, tIdx) => (
                <div key={tier.tierName} className="space-y-2">
                  <div className="flex items-center justify-between pb-1.5 border-b border-stone-200/70 text-xs font-mono uppercase tracking-wider">
                    <span className="text-stone-900 font-semibold">{tier.tierRu}</span>
                    <span className="text-stone-400 text-[10px] lowercase">({tier.timing})</span>
                  </div>

                  <div className="divide-y divide-stone-100">
                    {tier.notes.map((note) => {
                      const isSelected = selectedNote.id === note.id;
                      return (
                        <button
                          key={note.id}
                          onClick={() => handleSelectNote(note, tIdx)}
                          className={`w-full py-3 px-3 rounded-lg text-left transition-all flex items-center justify-between cursor-pointer group ${
                            isSelected
                              ? 'bg-stone-100/90 text-stone-900 font-medium'
                              : 'hover:bg-stone-50 text-stone-600'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`w-2 h-2 rounded-full transition-transform ${
                                isSelected ? 'scale-125' : 'group-hover:scale-110 opacity-70'
                              }`}
                              style={{ backgroundColor: note.color }}
                            />
                            <div>
                              <div className="text-sm font-serif">{note.name}</div>
                              <div className="text-[10px] font-mono text-stone-400 italic">
                                {note.latin}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            {isSelected && (
                              <span className="text-[10px] font-mono uppercase tracking-wider text-[#e8559a]">
                                В фокусе &rarr;
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Layering Atelier Formula Sheet */
            <div className="space-y-6">
              <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e8559a] font-semibold flex items-center gap-1.5">
                <Wand2 className="w-3.5 h-3.5" />
                <span>ФОРМУЛЯР ЛЕЕРИНГА: СОБЕРИТЕ ТРИО</span>
              </div>

              {/* 1. Top Note Selector */}
              <div className="space-y-1.5 pb-4 border-b border-stone-200/70">
                <div className="text-[10px] font-mono uppercase text-stone-400 tracking-wider">
                  01. ВЕРХНИЙ СТАРТ:
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {olfactivePyramid.tiers[0].notes.map((note) => (
                    <button
                      key={note.id}
                      onClick={() => {
                        setLayeredTop(note);
                        soundEngine.playChime(note.freq, 0.8);
                      }}
                      className={`p-2.5 rounded-lg text-xs font-serif text-center transition-all cursor-pointer border ${
                        layeredTop.id === note.id
                          ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                          : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                      }`}
                    >
                      {note.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Heart Note Selector */}
              <div className="space-y-1.5 pb-4 border-b border-stone-200/70">
                <div className="text-[10px] font-mono uppercase text-stone-400 tracking-wider">
                  02. СЕРДЦЕ АРОМАТА:
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {olfactivePyramid.tiers[1].notes.map((note) => (
                    <button
                      key={note.id}
                      onClick={() => {
                        setLayeredHeart(note);
                        soundEngine.playChime(note.freq, 0.8);
                      }}
                      className={`p-2.5 rounded-lg text-xs font-serif text-center transition-all cursor-pointer border ${
                        layeredHeart.id === note.id
                          ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                          : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                      }`}
                    >
                      {note.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Base Note Selector */}
              <div className="space-y-1.5 pb-4 border-b border-stone-200/70">
                <div className="text-[10px] font-mono uppercase text-stone-400 tracking-wider">
                  03. ШЛЕЙФОВАЯ БАЗА:
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {olfactivePyramid.tiers[2].notes.map((note) => (
                    <button
                      key={note.id}
                      onClick={() => {
                        setLayeredBase(note);
                        soundEngine.playChime(note.freq, 0.8);
                      }}
                      className={`p-2.5 rounded-lg text-xs font-serif text-center transition-all cursor-pointer border ${
                        layeredBase.id === note.id
                          ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                          : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                      }`}
                    >
                      {note.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Signature Recipes */}
              <div className="pt-2">
                <div className="text-[10px] font-mono uppercase text-stone-400 tracking-wider mb-2">
                  ФИРМЕННЫЕ ФОРМУЛЫ НАСТИ:
                </div>
                <div className="space-y-1.5">
                  {olfactivePyramid.layeringFormulas.map((formula) => (
                    <button
                      key={formula.id}
                      onClick={() => handleApplyPreset(formula)}
                      className="w-full p-3 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200 text-left transition-all flex items-center justify-between cursor-pointer group"
                    >
                      <span className="font-serif italic text-stone-900 group-hover:text-[#e8559a] transition-colors">
                        &laquo;{formula.name}&raquo;
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#e8559a] transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Center Column: The Architectural Crystal Flacon */}
        <div className="lg:col-span-3 flex flex-col items-center justify-center relative py-6">
          <div
            className="absolute w-64 h-64 rounded-full blur-3xl pointer-events-none transition-colors duration-700 opacity-50"
            style={{
              backgroundColor: activeTab === 'pyramid'
                ? (selectedNote.glowColor || 'rgba(248,120,179,0.3)')
                : 'rgba(248, 120, 179, 0.25)',
            }}
          />

          <div className="relative group flex flex-col items-center">
            {isSprayed && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
                <div className="w-64 h-64 rounded-full bg-radial from-[#f878b3]/50 via-[#f878b3]/20 to-transparent animate-mist" />
              </div>
            )}

            <canvas
              ref={canvasRef}
              className="relative z-10 cursor-pointer transition-transform group-hover:scale-[1.02]"
              title="Интерактивный кристальный флакон: наведите для волны, нажмите для распыления"
              onClick={triggerSpray}
            />

            <div className="text-center mt-3">
              <button
                onClick={triggerSpray}
                className="editorial-btn-light px-4 py-2 rounded-full text-[10px] inline-flex items-center gap-1.5 shadow-2xs cursor-pointer"
              >
                <Droplets className="w-3.5 h-3.5 text-[#e8559a]" />
                <span>Распылить аромат</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Sensory Dossier Plate OR Formula Analysis */}
        <div className="lg:col-span-4">
          {activeTab === 'pyramid' ? (
            /* Pure Museum Dossier Plate */
            <div className="editorial-card p-8 rounded-2xl relative space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-stone-200/70">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-stone-400">
                  {activeTier.tierRu} &bull; ДОСЬЕ
                </span>
                <span
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-semibold"
                  style={{
                    backgroundColor: `${selectedNote.color}15`,
                    color: selectedNote.color,
                  }}
                >
                  {selectedNote.freq ? `${selectedNote.freq} Hz` : 'Active'}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl font-normal text-stone-900 mb-1">
                  {selectedNote.name}
                </h3>
                <div className="text-xs font-mono italic text-stone-500 tracking-wider">
                  {selectedNote.latin}
                </div>
              </div>

              <p className="text-sm text-stone-600 font-light leading-relaxed">
                {selectedNote.desc}
              </p>

              {/* Nastya's Quote Plate */}
              <div className="p-5 rounded-xl bg-stone-50 border-l-2 border-[#f878b3] space-y-2">
                <div className="text-xs text-stone-800 italic font-serif leading-relaxed">
                  &laquo;{selectedNote.nastyaNote}&raquo;
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#e8559a] font-semibold">
                  — Настя Сивец
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#course"
                  onClick={() => soundEngine.playClick()}
                  className="w-full py-3 rounded-full bg-stone-100 hover:bg-stone-200/80 text-stone-800 text-xs font-mono uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Изучить в онлайн-курсе</span>
                </a>
              </div>
            </div>
          ) : (
            /* Layering Composition Dossier */
            <div className="editorial-card p-8 rounded-2xl relative space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-stone-200/70">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#e8559a] font-semibold">
                  АВТОРСКИЙ СИНТЕЗ
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-stone-100 text-stone-600">
                  3 Аккорда
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-normal text-stone-900 leading-tight mb-2">
                  {layeredTop.name} &bull; {layeredHeart.name} &bull; {layeredBase.name}
                </h3>
                <div className="text-xs text-stone-600 font-light leading-relaxed">
                  {layeringVerdict?.vibe || "Гармоничное сочетание искристого верха, глубокого сердца и чувственного шлейфа."}
                </div>
              </div>

              {/* Nastya's Rule */}
              <div className="p-4 rounded-xl bg-[#fdf2f7] border border-[#f878b3]/30 space-y-1.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#e8559a] font-semibold">
                  ПРАВИЛО НАНЕСЕНИЯ ОТ НАСТИ:
                </div>
                <div className="text-xs font-serif italic text-stone-800 leading-relaxed">
                  {layeringVerdict?.rule || "Наносите более плотную базу первой, а легкий аккорд распыляйте поверх с расстояния 20 см."}
                </div>
              </div>

              <button
                onClick={testLayeredFormula}
                className="editorial-btn-dark w-full py-4 rounded-full flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <Volume2 className="w-4 h-4 text-[#f878b3]" />
                <span>Прослушать аккорд & распылить</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
