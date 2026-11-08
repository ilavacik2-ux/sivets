import React, { useEffect, useRef } from 'react';

/**
 * FragranceAura Canvas
 * Ethereal, cinematic olfactive atmosphere.
 * Renders microscopic golden scent mist particles, chromatic vapor,
 * and mouse-repelling fluid dissipation to simulate living fragrance in dark luxury space.
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
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
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
        radius: 10,
        maxRadius: 180,
        alpha: 0.35,
      });
      if (ripples.length > 5) ripples.shift();
    };
    window.addEventListener('click', handleClick);

    // Dynamic Scent Particles
    const PARTICLE_COUNT = Math.min(42, Math.floor(width / 35));
    const particles = Array.from({ length: PARTICLE_COUNT }, () => {
      const isGold = Math.random() > 0.6;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 0.8,
        baseAlpha: Math.random() * 0.45 + 0.15,
        alpha: 0.2,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.45 - 0.1, // Rising like warm diffusion
        isGold,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        phase: Math.random() * Math.PI * 2
      };
    });

    // Ambient floating vapor orbs
    const orbs = [
      { x: width * 0.2, y: height * 0.25, r: 240, color: 'rgba(248, 120, 179, 0.07)', vx: 0.1, vy: 0.05 },
      { x: width * 0.8, y: height * 0.65, r: 320, color: 'rgba(229, 193, 138, 0.06)', vx: -0.08, vy: -0.06 },
      { x: width * 0.5, y: height * 0.85, r: 280, color: 'rgba(248, 120, 179, 0.05)', vx: 0.06, vy: -0.08 }
    ];

    let time = 0;

    const render = () => {
      time += 0.01;
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

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
        rip.radius += 3.5;
        rip.alpha *= 0.94;

        ctx.strokeStyle = `rgba(248, 120, 179, ${rip.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.stroke();

        if (rip.alpha < 0.01 || rip.radius > rip.maxRadius) {
          ripples.splice(i, 1);
        }
      }

      // 3. Render Micro Scent Dust
      particles.forEach((p) => {
        p.x += p.vx + Math.sin(time + p.phase) * 0.3;
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
        const maxDist = 220;
        if (dist < maxDist && dist > 0) {
          const force = (1 - dist / maxDist) * 1.8;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        // Shimmering alpha
        const currentAlpha = p.baseAlpha * (0.6 + 0.4 * Math.sin(time * 3 + p.phase));

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        if (p.isGold) {
          ctx.fillStyle = `rgba(245, 216, 169, ${currentAlpha})`;
        } else {
          ctx.fillStyle = `rgba(248, 120, 179, ${currentAlpha})`;
        }
        ctx.fill();
      });

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
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
}
