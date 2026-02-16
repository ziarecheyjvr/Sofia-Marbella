import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-charcoal-800 to-transparent opacity-30"></div>

      {/* Abstract Gold Line Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L100 100 M100 0 L0 100" stroke="#D9A74A" strokeWidth="0.1" />
          <path d="M50 0 L50 100" stroke="#D9A74A" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center pt-20">

        {/* Left: Text Content */}
        <div className="space-y-8 z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
            THE UNSPOKEN <br />
            <span className="text-gold-500 italic">RULES</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gold-100 font-sans tracking-wide">
            Refine your presence. Master your influence. <br /> Become unforgettable.
          </h2>

          <div className="text-lg text-gray-400 font-light leading-relaxed max-w-lg font-sans space-y-4">
            <p>
              In a world that rewards noise, refined women stand out through restraint, structure, and grace.
            </p>
            <p>
              Sofia Marbella brings etiquette back into modern life—not as decoration, but as an advantage in business, dating, social settings, and digital communication.
            </p>
            <p className="border-l-2 border-gold-500 pl-4 italic text-gray-300">
              Etiquette is not rigidity.<br />
              It is self-respect—made visible.<br />
              It is social intelligence in motion.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 flex-wrap">
            <a
              href="#checklist"
              className="bg-gold-600 text-charcoal-950 px-6 py-4 font-sans uppercase tracking-widest text-xs font-bold hover:bg-gold-500 transition-all shadow-[0_0_20px_rgba(217,167,74,0.2)] inline-block text-center"
            >
              Get the Free Checklist
            </a>
            <Link to="/booking" className="border border-white/20 text-white px-6 py-4 font-sans uppercase tracking-widest text-xs font-bold hover:border-gold-500 hover:text-gold-500 transition-all backdrop-blur-sm text-center">
              Book a Private Session
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative h-[600px] hidden md:block group">
          {/* Gold Glow Backlight */}
          <div className="absolute -inset-10 bg-gold-600/20 rounded-full blur-[100px] opacity-50 group-hover:opacity-70 transition-opacity duration-1000"></div>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
          <img
            src="/assets/images/hero.jpg"
            alt="Sofia Marbella Hero"
            className="w-full h-full object-cover rounded-sm opacity-90 filter contrast-110 drop-shadow-[0_0_30px_rgba(217,167,74,0.3)] transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;