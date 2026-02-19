import React from 'react';

const Bio: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-charcoal-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div className="relative order-2 md:order-1 flex items-center justify-center">
          <div className="relative z-10 w-full">
            <img
              src="/assets/images/founder1.png"
              alt="Sofia Marbella"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="order-1 md:order-2 space-y-8">
          <h2 className="text-sm font-sans tracking-[0.3em] text-gold-500 uppercase">Founder & Educator</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white">Why Listen to Sofia Marbella</h3>

          <div className="space-y-6 text-gray-400 leading-relaxed font-light text-lg">
            <p>
              Sofia Marbella (legal name Sofia Ilieva) rebuilt etiquette for the modern world—turning old-world protocol into a practical refinement system for a digital age.
            </p>
            <ul className="space-y-4 border-l border-gold-500/20 pl-6">
              <li className="flex flex-col">
                <span className="text-white font-bold text-xl">3M+</span>
                <span className="text-base uppercase tracking-wider">Followers across TikTok and Instagram</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-bold text-xl">Background</span>
                <span className="text-base">Trained as a professional ice skater; degrees in Sport Management and Acting</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-bold text-xl">Creator</span>
                <span className="text-base">“The Gentle Reminder” methodology and private educational curriculum</span>
              </li>
            </ul>
            <p className="italic text-gold-200/80 text-xl">
              "She doesn’t teach you how to pretend. She teaches you how to refine what’s already there—so your presence becomes consistent everywhere."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Bio;