import React from 'react';

const Shop: React.FC = () => {
  return (
    <section id="shop" className="bg-charcoal-900 border-t border-white/5 pt-40 pb-24 min-h-screen">
      {/* Page Header */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-16">
        <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase mb-4 block">Signature Tools</span>
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Refinement Essentials</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Because details define distinction. Tools and journals designed to integrate refinement into daily life.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Featured Signature Tool */}
        <div className="py-12">
           <div className="relative bg-charcoal-950 p-8 md:p-16 border border-white/10 shadow-2xl mx-auto max-w-4xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="aspect-[4/5] overflow-hidden border border-gray-800">
                  <img
                    src="/assets/images/gentle-reminder.jpg"
                    alt="The Gentle Reminder Journal"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="text-left space-y-6">
                  <span className="text-gold-500 font-sans text-[10px] tracking-[0.3em] uppercase">The Original Journal</span>
                  <h3 className="text-3xl font-serif text-white">The Gentle Reminder</h3>
                  <p className="text-gray-400 leading-relaxed">
                    A velvet-bound discipline journal featuring 52 essential etiquette principles, designed to integrate refinement into daily life through structure and self-awareness.
                  </p>
                  <div className="pt-4">
                    <a
                      href="https://sofia.style/products/gentle-reminder"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gold-600 text-white px-8 py-4 font-sans uppercase tracking-[0.2em] text-[10px] hover:bg-gold-500 transition-colors w-full md:w-auto text-center"
                    >
                      Shop The Essential Journal
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