import React from 'react';
import { ArrowUpRight, ShoppingBag, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

const Shop: React.FC = () => {
  return (
    <section id="shop" className="bg-charcoal-900 border-t border-white/5">
      {/* 1. The Gentle Reminder */}
      <div className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase mb-4 block">Shop</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">The Gentle Reminder</h2>

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

      {/* 2. Shop & Events - Redesigned */}
      <div className="grid md:grid-cols-2">

        {/* Shop With Me */}
        <div className="relative group bg-charcoal-950 border-t border-white/10 md:border-r overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="relative p-12 md:p-24 h-full flex flex-col justify-between items-start min-h-[600px]">
            <div className="w-full">
              <div className="flex items-center gap-3 mb-8 text-gold-500">
                <ShoppingBag size={18} />
                <span className="text-xs font-sans tracking-[0.3em] uppercase">Lifestyle</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Shop With Me</h3>
              <p className="text-gold-400 italic mb-8 text-2xl font-serif">Curated tools for a refined life.</p>

              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
                From wardrobe essentials to hosting pieces, books, travel accessories and elegant lifestyle products. Sofia shares only what meets her standards.
              </p>

              <ul className="space-y-4 mb-10 border-t border-white/5 pt-8 w-full">
                {['Exclusive discounts', 'Selected with intention', 'Updated seasonally'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-400 text-sm font-sans tracking-wider uppercase group-hover:text-gold-200 transition-colors">
                    <span className="w-1 h-1 bg-gold-500 rounded-full mr-4"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-gray-600 text-sm mb-2 italic">(Products to be added)</p>
            </div>

            <Link
              to="/shop-with-me"
              className="mt-8 flex items-center gap-3 text-white border-b border-gold-500 pb-1 hover:text-gold-400 hover:border-white transition-all uppercase tracking-widest text-xs"
            >
              View Collection <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Events & Travels */}
        <div className="relative group bg-charcoal-900 border-t border-white/10 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="https://picsum.photos/seed/travel/800/1200?grayscale"
              alt="Travel Ambience"
              className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-all duration-1000 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-900/95 to-charcoal-900/80"></div>
          </div>

          <div className="relative p-12 md:p-24 h-full flex flex-col justify-between items-start min-h-[600px]">
            <div className="w-full">
              <div className="flex items-center gap-3 mb-8 text-gold-500">
                <Plane size={18} />
                <span className="text-xs font-sans tracking-[0.3em] uppercase">Experiences</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-serif text-white mb-2">Events & Travels</h3>
              <span className="text-gold-500 text-2xl font-serif italic block mb-10">with Sofia Marbella</span>

              <div className="space-y-8">
                <ul className="grid gap-5">
                  {['Workshops', 'International seminars', 'Private retreats', 'Travel experiences in Marbella and beyond'].map((item, i) => (
                    <li key={i} className="text-gray-300 text-lg flex items-baseline gap-4 group-hover:translate-x-1 transition-transform duration-300">
                      <span className="text-gold-500 text-xs">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="py-8">
                  <p className="text-2xl font-serif italic text-gray-400 border-l-2 border-gold-500 pl-6 leading-tight">
                    "Refinement is best learned in experience."
                  </p>
                </div>
              </div>
            </div>

            <Link
              to="/events-and-travels"
              className="mt-8 inline-flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
              </span>
              <span className="text-gold-100 text-xs tracking-widest uppercase font-bold">Upcoming dates coming soon</span>
              <ArrowUpRight size={16} className="text-gold-500" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Shop;