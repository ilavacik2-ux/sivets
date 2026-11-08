import React, { useEffect, useRef } from 'react';

/**
 * FragranceAura Canvas
 * Renders ethereal, ambient scent particles and mist floating gently,
 * subtly responding to cursor movement to evoke the sense of fragrance diffusion.
 */
export default function FragranceAura() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return; // Do not run animation if user prefers reduced motion
    }

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse tracking for subtle fragrance breeze
    const mouse = { x: width * 0.5, y: height * 0.3, targetX: width * 0.5, targetY: height * 0.3 };
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scent particles definition
    const PARTICLE_COUNT = Math.min(28, Math.floor(width / 50));
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 80 + 40,
      baseRadius: Math.random() * 80 + 40,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.25 - 0.1, // gently rising like warm aroma
      hue: Math.random() > 0.4 ? 335 : 30, // Pinkish rose or warm amber/sand
      alpha: Math.random() * 0.08 + 0.03,
      phase: Math.random() * Math.PI * 2
    }));

    let time = 0;

    const render = () => {
      time += 0.015;
      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.03;
      mouse.y += (mouse.targetY - mouse.y) * 0.03;

      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, i) => {
        // Drift
        p.x += p.vx + Math.sin(time + p.phase) * 0.3;
        p.y += p.vy;

        // Wrap edges smoothly
        if (p.x < -p.radius * 2) p.x = width + p.radius * 2;
        if (p.x > width + p.radius * 2) p.x = -p.radius * 2;
        if (p.y < -p.radius * 2) p.y = height + p.radius * 2;
        if (p.y > height + p.radius * 2) p.y = -p.radius * 2;

        // Distance to cursor
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 300;
        let repel = 0;
        if (dist < maxDist && dist > 0) {
          repel = (1 - dist / maxDist) * 1.5;
          p.x += (dx / dist) * repel;
          p.y += (dy / dist) * repel;
        }

        // Draw soft fragrance aura gradient
        const currentRadius = p.baseRadius + Math.sin(time * 0.8 + p.phase) * 12;
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, currentRadius);
        
        if (p.hue === 335) {
          // Soft peony pink
          grad.addColorStop(0, `rgba(248, 120, 179, ${p.alpha * 1.4})`);
          grad.addColorStop(0.6, `rgba(248, 120, 179, ${p.alpha * 0.4})`);
          grad.addColorStop(1, 'rgba(248, 120, 179, 0)');
        } else {
          // Warm sand / amber
          grad.addColorStop(0, `rgba(215, 195, 185, ${p.alpha * 1.2})`);
          grad.addColorStop(0.6, `rgba(215, 195, 185, ${p.alpha * 0.3})`);
          grad.addColorStop(1, 'rgba(215, 195, 185, 0)');
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
      aria-hidden="true"
    />
  );
}
