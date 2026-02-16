import React from 'react';

const WaxSeal: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-40 h-40 ${className}`}>
      {/* Drop Shadow Filter */}
      <svg width="0" height="0" className="absolute">
        <filter id="wax-shadow">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000" floodOpacity="0.5" />
        </filter>
        <filter id="wax-inner-shadow">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="3" />
          <feOffset dx="2" dy="4" result="offsetblur" />
          <feFlood floodColor="#380505" result="color" />
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>
      </svg>

      <svg viewBox="0 0 200 200" className="w-full h-full" style={{ filter: 'url(#wax-shadow)' }}>
        {/* Main irregular blob */}
        <path 
          fill="#590D0D" 
          d="M100,10 c-20,0 -35,10 -45,25 c-5,7 -15,5 -20,10 c-10,10 -5,25 -10,35 c-5,10 -20,15 -15,30 c5,15 0,25 5,35 c5,10 20,10 25,20 c5,10 15,20 30,20 c15,0 25,-10 40,-5 c15,5 25,0 35,-10 c10,-10 20,-15 20,-30 c0,-15 10,-25 5,-40 c-5,-15 -15,-20 -20,-30 c-5,-10 0,-25 -10,-35 c-10,-10 -25,-5 -35,-15 c-10,-10 -25,-10 -45,-10 Z"
          style={{ transform: 'scale(1.05)', transformOrigin: 'center' }}
        />
        <path 
          fill="#7A1313" 
          d="M100,15 c-18,0 -32,9 -41,23 c-4,6 -13,4 -18,9 c-9,9 -4,23 -9,32 c-4,9 -18,14 -13,27 c4,14 -1,23 4,32 c4,9 18,9 23,18 c4,9 13,18 27,18 c14,0 23,-9 36,-4 c14,4 23,0 32,-9 c9,-9 18,-14 18,-27 c0,-14 9,-23 4,-36 c-4,-14 -13,-18 -18,-27 c-4,-9 0,-23 -9,-32 c-9,-9 -23,-4 -32,-14 c-9,-9 -23,-9 -41,-9 Z"
        />

        {/* Inner impressed area */}
        <circle cx="100" cy="100" r="60" fill="none" stroke="#4A0808" strokeWidth="2" opacity="0.6" />
        <circle cx="100" cy="100" r="55" fill="none" stroke="#4A0808" strokeWidth="1" opacity="0.4" />

        {/* Text */}
        <text 
          x="100" 
          y="118" 
          textAnchor="middle" 
          fill="#4A0808" 
          fontFamily="serif" 
          fontWeight="bold" 
          fontSize="64"
          className="font-display"
          style={{ 
            textShadow: '1px 1px 0px rgba(255,255,255,0.1), -1px -1px 2px rgba(0,0,0,0.5)',
            letterSpacing: '0.05em'
          }}
        >
          SM
        </text>
        
        {/* Highlight sheen */}
        <ellipse cx="70" cy="70" rx="30" ry="15" fill="#fff" opacity="0.05" transform="rotate(-45 70 70)" />
      </svg>
    </div>
  );
};

export default WaxSeal;
