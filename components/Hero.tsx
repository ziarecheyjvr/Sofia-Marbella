import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-black overflow-hidden pt-20">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(217,167,74,0.05),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left: Text Content */}
        <div className="space-y-8 z-10 relative">
          {/* Wax Seal Image */}
          <img
            src="/assets/images/waxseal.png"
            alt="Wax Seal"
            className="absolute -top-10 -left-10 w-24 h-24 object-contain opacity-100 drop-shadow-2xl z-20"
          />
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
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 flex-wrap pb-12">
            <a
              href="#checklist"
              className="bg-gold-600 text-charcoal-950 px-6 py-4 font-sans uppercase tracking-widest text-xs font-bold hover:bg-gold-500 transition-all shadow-[0_0_20px_rgba(217,167,74,0.2)] inline-block text-center"
            >
              Get The Free Checklist
            </a>
            <Link to="/booking" className="border border-white/20 text-white px-6 py-4 font-sans uppercase tracking-widest text-xs font-bold hover:border-gold-500 hover:text-gold-500 transition-all backdrop-blur-sm text-center">
              Book A Private Session
            </Link>
          </div>

          {/* Quote Box - Moved to Bottom */}
          <div className="pt-auto pb-5">
            <p className="border-l-2 border-gold-500 pl-4 italic text-gray-300 text-lg">
              Etiquette is not rigidity.<br />
              It is self-respect—made visible.<br />
              It is social intelligence in motion.
            </p>
          </div>
        </div>

        {/* Right: Modern Portrait Overlay Style */}
        <div className="relative lg:h-[800px] md:h-[600px] hidden md:block group">
          {/* Subtle Gold Aura behind the portrait - Backlit effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gold-600/20 rounded-full blur-[120px] opacity-40 group-hover:opacity-60 transition-opacity duration-1000 z-0"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gold-500/5 rounded-full blur-[80px] opacity-30 mix-blend-color-dodge z-0"></div>

          <img
            src="/assets/images/hero-1.png"
            alt="Sofia Marbella"
            className="relative w-full h-full object-contain filter brightness-110 contrast-105 z-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;