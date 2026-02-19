import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-black overflow-hidden pt-20">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(217,167,74,0.03),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 lg:gap-24 items-stretch relative z-10 min-h-[calc(100vh-5rem)]">

        {/* Left: Text Content */}
        <div className="order-2 md:order-1 space-y-8 z-10 relative flex flex-col justify-center py-12 text-center md:text-left">
          <h1 className="relative inline-block mx-auto md:mx-0 text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
            {/* Wax Seal Image */}
            <img
              src="/assets/images/waxseal.png"
              alt="Wax Seal"
              className="absolute -top-8 -left-4 sm:-top-12 sm:-left-16 w-14 h-14 sm:w-24 sm:h-24 object-contain opacity-100 drop-shadow-2xl z-20"
            />
            THE UNSPOKEN <br />
            <span className="text-gold-500 italic">RULES</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gold-100 font-sans tracking-wide">
            Refine your presence. Master your influence. <br /> Become unforgettable.
          </h2>

          <div className="text-lg text-gray-400 font-light leading-relaxed max-w-lg font-sans space-y-4 mx-auto md:mx-0">
            <p>
              In a world that rewards noise, refined women stand out through restraint, structure, and grace.
            </p>
            <p>
              Sofia Marbella brings etiquette back into modern life—not as decoration, but as an advantage in business, dating, social settings, and digital communication.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 flex-wrap pb-12 justify-center md:justify-start">
            <a
              href="#checklist"
              className="w-full sm:w-auto bg-gold-600 text-charcoal-950 px-6 py-4 font-sans uppercase tracking-widest text-xs font-bold hover:bg-gold-500 transition-all shadow-[0_0_20px_rgba(217,167,74,0.2)] inline-block text-center"
            >
              Get The Free Checklist
            </a>
            <Link to="/booking" className="w-full sm:w-auto border border-white/20 text-white px-6 py-4 font-sans uppercase tracking-widest text-xs font-bold hover:border-gold-500 hover:text-gold-500 transition-all backdrop-blur-sm text-center">
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

        {/* Right: GIF grounded at bottom */}
        <div className="order-1 md:order-2 relative flex items-end justify-center md:justify-end h-[40vh] md:h-full mt-8 md:mt-0">
          <img
            src="/assets/videos/hq.gif"
            alt="Sofia Marbella"
            className="w-auto h-full max-w-full md:max-w-xl max-h-[100vh] object-contain object-bottom z-20 scale-100 md:scale-135 origin-bottom md:origin-bottom-right md:translate-x-[20%] md:translate-y-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;