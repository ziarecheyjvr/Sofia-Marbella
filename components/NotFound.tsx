import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Home, ShoppingBag } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <section className="bg-charcoal-950 min-h-screen pt-36 pb-24 flex items-center justify-center text-gray-200 selection:bg-gold-500 selection:text-black relative">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gold-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-xl w-full mx-auto px-6 text-center space-y-8 relative z-10">
        
        {/* Gold Badge */}
        <div className="inline-flex items-center justify-center space-x-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs uppercase tracking-[0.25em] font-sans">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Page Not Found</span>
        </div>

        {/* 404 Title */}
        <div className="space-y-3">
          <h1 className="text-7xl md:text-8xl font-serif text-gold-400 font-bold tracking-widest">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif text-white">
            Path Uncharted
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-sans font-light leading-relaxed max-w-md mx-auto">
            The page you are seeking does not exist or has been relocated. Return to our signature essentials or main navigation.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4 font-sans text-xs uppercase tracking-[0.2em]">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-gold-600 hover:bg-gold-500 text-white px-8 py-3.5 rounded transition-all shadow-lg font-semibold"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 bg-charcoal-900 hover:bg-charcoal-800 border border-white/20 text-gray-200 hover:text-white px-8 py-3.5 rounded transition-all"
          >
            <ShoppingBag className="w-4 h-4 text-gold-400" />
            <span>Explore Shop</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default NotFound;
