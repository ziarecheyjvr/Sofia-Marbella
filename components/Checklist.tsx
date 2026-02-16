import React from 'react';
import { Check } from 'lucide-react';

const Checklist: React.FC = () => {
  return (
    <section id="checklist" className="py-24 bg-charcoal-900 relative overflow-hidden border-t border-white/5">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase mb-4 block">Start Here (Free)</span>
        
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
          The Unspoken Rules <br/>
          <span className="text-gold-500 italic">Checklist</span>
        </h2>

        <p className="text-gray-400 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
          A simple, modern checklist of the everyday etiquette signals that quietly elevate how you’re received—at work, online, at dinner, and on dates.
        </p>

        <div className="bg-charcoal-950 border border-white/10 p-8 md:p-12 rounded-sm mb-12 text-left relative shadow-2xl">
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-charcoal-900 px-6 py-1 text-gold-400 text-xs tracking-widest uppercase border border-white/10 whitespace-nowrap">
                Inside you’ll find fast, practical standards for
             </div>
             
             <div className="grid md:grid-cols-2 gap-y-6 gap-x-12 pt-4">
                {[
                    "Dining protocol and public presence",
                    "Digital etiquette (messages, email, calls)",
                    "First impressions and introductions",
                    "Social boundaries and composure"
                ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                        <div className="mt-1 w-5 h-5 rounded-full border border-gold-500/30 flex items-center justify-center group-hover:border-gold-500 transition-colors flex-shrink-0">
                            <div className="w-2.5 h-2.5 bg-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <span className="text-gray-300 text-base group-hover:text-white transition-colors">{item}</span>
                    </div>
                ))}
             </div>
        </div>

        <div className="space-y-6">
            <p className="text-white font-serif text-2xl italic">Get it free and start refining today.</p>
            <button className="bg-gold-600 text-charcoal-950 px-8 py-4 font-sans uppercase tracking-widest text-xs font-bold hover:bg-gold-500 transition-all shadow-[0_0_20px_rgba(217,167,74,0.2)]">
              Get the Free Checklist
            </button>
        </div>

      </div>
    </section>
  );
};

export default Checklist;