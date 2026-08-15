import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const colors = [
      'rgba(255, 153, 51, 0.6)', // Saffron
      'rgba(255, 255, 255, 0.7)', // White
      'rgba(18, 136, 7, 0.6)',   // Green
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 4 + 2;
        this.speedX = Math.random() * 1.5 - 0.75;
        this.speedY = -(Math.random() * 1.5 + 0.8);
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.3;
        this.wobble = Math.random() * Math.PI;
        this.wobbleSpeed = Math.random() * 0.02 + 0.005;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.wobble) * 0.5;
        this.wobble += this.wobbleSpeed;
        if (this.opacity > 0.01) this.opacity -= 0.0005;

        // Reset particle if off-screen or faded
        if (this.y < -10 || this.opacity <= 0.01) {
          this.x = Math.random() * canvas.width;
          this.y = canvas.height + 10;
          this.speedY = -(Math.random() * 1.5 + 0.8);
          this.color = colors[Math.floor(Math.random() * colors.length)];
          this.opacity = Math.random() * 0.5 + 0.3;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    const init = () => {
      particles = [];
      const count = Math.min(Math.floor(window.innerWidth / 15), 80);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };
    init();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollDown = () => {
    const timeline = document.querySelector('#timeline');
    if (timeline) {
      const offset = 80;
      const elementPosition = timeline.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-indiaBlue-deep sunrise-glow"
    >
      {/* Background Particle Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none z-10"
      />

      {/* Decorative Waving Flag Silhouette/Background Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-center items-center z-0">
        <svg viewBox="0 0 100 100" className="w-[80vw] h-[80vw] text-white/5 flag-wave">
          <path fill="currentColor" d="M10,20 Q25,10 40,20 T70,20 T100,20 L100,80 Q85,70 70,80 T40,80 T10,80 Z" />
        </svg>
      </div>

      {/* Radiant Golden Sunrise Background element */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-saffron/10 blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-indiaGreen/5 blur-[120px] pointer-events-none z-0" />

      {/* India Map Silhouette Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=2076&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-overlay z-0" />

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Accent Ribbon/Tag */}
          <span className="inline-block text-xs sm:text-sm tracking-[0.25em] text-saffron uppercase font-semibold mb-6 px-4 py-1.5 rounded-full border border-saffron/30 bg-saffron/10 backdrop-blur-sm">
            15 August 1947 — 15 August 2026
          </span>
        </motion.div>

        {/* Primary Hindi Heading */}
        <motion.h1 
          className="text-6xl sm:text-7xl md:text-9xl font-serif font-black tracking-wide text-white mb-6 uppercase"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-b from-saffron via-white to-indiaGreen bg-clip-text text-transparent text-glow-saffron">
            स्वतंत्रता संग्राम
          </span>
        </motion.h1>

        {/* Cinematic Subheading */}
        <motion.h2 
          className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-300 font-medium max-w-3xl mx-auto mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          A Journey of Courage, Sacrifice & Freedom
        </motion.h2>

        {/* Supporting Narrative */}
        <motion.p 
          className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
        >
          From the first sparks of resistance to the dawn of 15 August 1947, millions stood together for one dream — a free India. Let us walk the path they carved.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        >
          <button
            onClick={handleScrollDown}
            className="relative group inline-flex items-center gap-2 text-white bg-gradient-to-r from-saffron to-saffron-dark hover:from-saffron-dark hover:to-indiaGreen px-8 py-4 rounded-full text-base font-medium transition-all duration-500 shadow-xl hover:shadow-saffron/20 border border-saffron/20 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Begin the Journey 
              <span className="group-hover:translate-y-1.5 transition-transform duration-300">↓</span>
            </span>
          </button>
        </motion.div>
      </div>

      {/* Decorative Bottom Shadow Blend */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-indiaBlue-deep to-transparent z-10 pointer-events-none" />
    </section>
  );
}
