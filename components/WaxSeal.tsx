import React from 'react';

const WaxSeal: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative w-20 h-20 filter drop-shadow-lg scale-110 ${className}`}>
      {/* Wax Base */}
      <svg viewBox="0 0 100 100" className="w-full h-full fill-red-900/90">
        <path d="M50 5 C 30 5, 5 30, 5 50 C 5 70, 30 95, 50 95 C 70 95, 95 70, 95 50 C 95 30, 70 5, 50 5"
          className="animate-pulse duration-[3000ms]"
          style={{ filter: 'url(#roughness)' }} />
        <defs>
          <filter id="roughness">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Inner Circle & Initials */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full border-2 border-red-950/30 flex items-center justify-center">
          <span className="text-red-950/60 font-serif text-2xl font-bold tracking-tighter uppercase italic transform -rotate-12 select-none">
            SM
          </span>
        </div>
      </div>

      {/* Gloss Effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-full pointer-events-none"></div>
    </div>
  );
};

export default WaxSeal;
