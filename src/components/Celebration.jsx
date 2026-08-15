import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Celebration() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let fireworks = [];
    let particles = [];
    const colors = [
      '#FF9933', // Saffron
      '#FFFFFF', // White
      '#128807', // Green
      '#FFD700', // Gold
    ];

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight || 500;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Firework {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height;
        this.targetY = Math.random() * (canvas.height * 0.5) + 50;
        this.speed = Math.random() * 3 + 4;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.exploded = false;
      }

      update() {
        this.y -= this.speed;
        if (this.y <= this.targetY) {
          this.exploded = true;
          this.explode();
        }
      }

      explode() {
        const count = Math.random() * 30 + 40;
        for (let i = 0; i < count; i++) {
          particles.push(new Particle(this.x, this.y, this.color));
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fill();
      }
    }

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = Math.random() * 2.5 + 1;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 1;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.gravity = 0.05;
        this.alpha = 1;
        this.decay = Math.random() * 0.015 + 0.01;
      }

      update() {
        this.vx *= 0.98;
        this.vy *= 0.98;
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 5;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    const animate = () => {
      // Semi-transparent background redraw for trails
      ctx.fillStyle = 'rgba(3, 7, 18, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Launch fireworks occasionally
      if (Math.random() < 0.05 && fireworks.length < 5) {
        fireworks.push(new Firework());
      }

      // Update and draw fireworks
      fireworks = fireworks.filter((fw) => {
        fw.update();
        if (!fw.exploded) fw.draw();
        return !fw.exploded;
      });

      // Update and draw particles
      particles = particles.filter((p) => {
        p.update();
        p.draw();
        return p.alpha > 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      id="celebration" 
      className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-indiaBlue-deep border-t border-white/5"
    >
      {/* Interactive Fireworks Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none z-10"
      />

      {/* Decorative Tricolor Confetti Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center py-16">
        
        {/* Celebration Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-saffron bg-saffron/10 px-4 py-1.5 rounded-full border border-saffron/30 inline-block mb-6">
            Grand Jubilee
          </span>
          <h2 className="text-5xl sm:text-7xl font-serif font-black tracking-wide text-white mb-6 uppercase text-glow-saffron">
            Happy Independence Day, India!
          </h2>
        </motion.div>

        {/* Timestamps comparison */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto my-10 relative">
          {/* Dividing central border */}
          <div className="hidden sm:block absolute left-1/2 top-4 bottom-4 w-px bg-white/10 -translate-x-1/2" />
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-5 bg-white/[0.01] border border-white/5 rounded-2xl"
          >
            <h4 className="text-xs text-saffron font-bold uppercase tracking-widest">
              The Dawn of Freedom
            </h4>
            <p className="text-xl font-bold font-serif text-white mt-1">
              15 August 1947
            </p>
            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
              A dream realized in the wake of centuries of unyielding sacrifice and unity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-5 bg-white/[0.01] border border-white/5 rounded-2xl"
          >
            <h4 className="text-xs text-indiaGreen font-bold uppercase tracking-widest">
              The Modern Promise
            </h4>
            <p className="text-xl font-bold font-serif text-white mt-1">
              15 August 2026
            </p>
            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
              We remember the ancestors, celebrate our growth, and carry the fire forward.
            </p>
          </motion.div>
        </div>

        {/* Slogan */}
        <motion.h3 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-3xl sm:text-5xl font-black font-serif tracking-widest bg-gradient-to-r from-saffron via-white to-indiaGreen bg-clip-text text-transparent text-glow-green"
        >
          Jai Hind 🇮🇳
        </motion.h3>

      </div>

      {/* Decorative Bottom Shadow Blend */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-indiaBlue-deep to-transparent z-10 pointer-events-none" />
    </section>
  );
}
