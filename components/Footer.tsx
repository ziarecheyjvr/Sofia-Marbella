import React from 'react';
import { Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-950 text-white pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section: Checklist CTA */}
        <div className="grid md:grid-cols-2 gap-12 pb-20 border-b border-white/5 items-center">
          <div>
            <h3 className="text-3xl font-serif text-white mb-6">The Unspoken Rules Checklist</h3>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed text-lg">
              A simple, modern checklist of the everyday etiquette signals that quietly elevate how you’re received—at work, online, at dinner, and on dates.
            </p>
            <div className="text-base text-gray-500 mb-8 space-y-2">
              <p className="font-bold text-gray-400">Inside you’ll find fast, practical standards for:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li>• Dining protocol and public presence</li>
                <li>• Digital etiquette (messages, email, calls)</li>
                <li>• First impressions and introductions</li>
                <li>• Social boundaries and composure</li>
              </ul>
            </div>
          </div>
          <div className="bg-charcoal-900 p-8 border border-white/10 relative">
            <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-gold-600 text-xs font-bold px-3 py-1 text-black">FREE</div>
            <h4 className="text-white text-lg font-serif mb-4">Get it free and start refining today.</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full bg-charcoal-900 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors text-sm"
              />
              <button className="w-full bg-gold-600 text-black py-3 font-bold uppercase tracking-widest text-xs hover:bg-gold-500 transition-colors">
                Get the Free Checklist
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid md:grid-cols-4 gap-12 py-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="text-2xl font-display font-bold text-gold-500 tracking-wider">SOFIA MARBELLA</div>
            <p className="text-gray-500 text-base leading-relaxed max-w-xs italic">
              "Your manners are your silent business card. Elegance is not inherited. It is practiced."
            </p>
          </div>

          <div className="space-y-4">
            <h5 className="text-white text-sm uppercase tracking-widest font-bold">Programs</h5>
            <ul className="space-y-2 text-base text-gray-500">
              <li><a href="#" className="hover:text-gold-400 transition-colors">1:1 Private Session</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Private Short Course</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Youth Excellence</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">Youth Short Course</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-white text-sm uppercase tracking-widest font-bold">Connect</h5>
            <div className="flex space-x-4 text-gray-500">
              <a href="https://www.instagram.com/sofia.marbella" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gold-400 transition-colors"><Twitter size={20} /></a>
              <a href="https://www.tiktok.com/@sofia.marbella" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a href="mailto:ceo@sofia.style" className="hover:text-gold-400 transition-colors"><Mail size={20} /></a>
            </div>
            <div className="text-base text-gray-500 pt-2 space-y-1">
              <p>ceo@sofia.style</p>
              <p>Private Appointment Only</p>
              <p>Online Worldwide | In-person by arrangement</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-700 uppercase tracking-widest pt-8">
          &copy; {new Date().getFullYear()} Sofia Marbella. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;