import React from 'react';

const Shop: React.FC = () => {
  return (
    <section id="shop" className="bg-charcoal-900 border-t border-white/5 pt-40 pb-24">
      {/* Page Header */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-4">
        <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase mb-4 block">Shop</span>
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Refinement Essentials</h1>
        <p className="text-gray-400 text-lg">Because details define distinction.</p>
      </div>

      {/* The Gentle Reminder */}
      <div className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">The Gentle Reminder</h2>

          <div className="relative bg-charcoal-950 p-8 md:p-16 border border-white/10 shadow-2xl mx-auto max-w-3xl">
            <div className="absolute top-4 right-4 text-gold-500 opacity-20">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="shadow-lg overflow-hidden border border-gray-800">
                <img
                  src="/assets/images/gentle-reminder.jpg"
                  alt="The Gentle Reminder Journal"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-left space-y-6">
                <p className="text-gray-400 text-base leading-relaxed">
                  A velvet-bound discipline journal featuring 52 essential etiquette principles, designed to integrate refinement into daily life through structure and self-awareness.
                </p>
                <div className="pt-4">
                  <a
                    href="https://sofia.style/products/gentle-reminder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gold-700 text-white px-8 py-3 font-sans uppercase tracking-widest text-xs hover:bg-gold-600 transition-colors w-full md:w-auto text-center"
                  >
                    Shop The Gentle Reminder
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;