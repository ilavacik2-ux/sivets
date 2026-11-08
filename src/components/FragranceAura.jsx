import React, { useEffect, useRef } from 'react';

/**
 * FragranceAura Canvas
 * Ethereal, sunlit olfactive atmosphere.
 * Renders microscopic rose petal dust, champagne pollen, and gentle scent mist
 * that gracefully disperses on cursor movement across a luminous warm alabaster canvas.
 */
export default function FragranceAura() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    let animationFrameId;
    const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Mouse tracking for fluid aroma dispersal
    const mouse = { x: width * 0.5, y: height * 0.4, targetX: width * 0.5, targetY: height * 0.4 };
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Click ripples
    const ripples = [];
    const handleClick = (e) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 8,
        maxRadius: 200,
        alpha: 0.4,
      });
      if (ripples.length > 5) ripples.shift();
    };
    window.addEventListener('click', handleClick);

    // Dynamic Scent Particles
    const PARTICLE_COUNT = Math.min(38, Math.floor(width / 40));
    const particles = Array.from({ length: PARTICLE_COUNT }, () => {
      const type = Math.random();
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 0.9,
        baseAlpha: Math.random() * 0.35 + 0.15,
        alpha: 0.25,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -Math.random() * 0.4 - 0.08, // Rising warm diffusion
        colorType: type > 0.6 ? 'gold' : type > 0.2 ? 'rose' : 'warmTaupe',
        pulseSpeed: Math.random() * 0.02 + 0.01,
        phase: Math.random() * Math.PI * 2,
      };
    });

    // Ambient floating warm sunlit vapor orbs
    const orbs = [
      { x: width * 0.15, y: height * 0.2, r: 280, color: 'rgba(248, 120, 179, 0.08)', vx: 0.08, vy: 0.04 },
      { x: width * 0.85, y: height * 0.55, r: 340, color: 'rgba(197, 160, 89, 0.07)', vx: -0.06, vy: -0.05 },
      { x: width * 0.5, y: height * 0.8, r: 300, color: 'rgba(232, 85, 154, 0.06)', vx: 0.05, vy: -0.06 },
    ];

    let time = 0;

    const render = () => {
      time += 0.01;
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // 1. Draw soft ambient light orbs
      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;
        if (orb.x < -orb.r) orb.x = width + orb.r;
        if (orb.x > width + orb.r) orb.x = -orb.r;
        if (orb.y < -orb.r) orb.y = height + orb.r;
        if (orb.y > height + orb.r) orb.y = -orb.r;

        const g = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        g.addColorStop(0, orb.color);
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Click ripples (mist dispersal)
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rip = ripples[i];
        rip.radius += 3.2;
        rip.alpha *= 0.94;

        ctx.strokeStyle = `rgba(232, 85, 154, ${rip.alpha})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.stroke();

        if (rip.alpha < 0.01 || rip.radius > rip.maxRadius) {
          ripples.splice(i, 1);
        }
      }

      // 3. Render Micro Scent Dust
      particles.forEach((p) => {
        p.x += p.vx + Math.sin(time + p.phase) * 0.25;
        p.y += p.vy;

        // Wrap boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Gentle cursor push (scent dispersal)
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 200;
        if (dist < maxDist && dist > 0) {
          const force = (1 - dist / maxDist) * 1.6;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        // Shimmering alpha
        const currentAlpha = p.baseAlpha * (0.65 + 0.35 * Math.sin(time * 2.5 + p.phase));

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        if (p.colorType === 'gold') {
          ctx.fillStyle = `rgba(197, 160, 89, ${currentAlpha})`;
        } else if (p.colorType === 'rose') {
          ctx.fillStyle = `rgba(232, 85, 154, ${currentAlpha})`;
        } else {
          ctx.fillStyle = `rgba(120, 113, 108, ${currentAlpha * 0.7})`;
        }
        ctx.fill();
      });

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-90"
      aria-hidden="true"
    />
  );
}
