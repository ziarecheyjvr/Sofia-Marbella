import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <section id="programs" className="py-24 pt-40 bg-charcoal-900 relative">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase mb-4 block">Programs</span>
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Private Etiquette &amp; Presence Programs</h1>
        <p className="text-gray-400 text-lg">Tailored refinement for adults and youth.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-charcoal-950 border border-white/5 p-8 hover:border-gold-500/40 transition-all duration-500 flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="mb-6">
                <span className="text-sm font-sans tracking-[0.2em] text-gold-500/70 uppercase block mb-2">{service.audience}</span>
                <h3 className="text-2xl font-serif text-white mb-2">{service.title}</h3>
                <span className="text-base text-gray-500 font-sans border-b border-white/10 pb-4 block">{service.duration}</span>
              </div>

              <p className="text-gray-400 text-base leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {service.features.length > 0 && (
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-base text-gray-500">
                      <span className="text-gold-500 mr-2">✦</span> {feature}
                    </li>
                  ))}
                </ul>
              )}

              {service.href ? (
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 border border-white/10 text-white font-sans uppercase tracking-widest text-xs hover:bg-gold-600 hover:text-charcoal-950 hover:border-gold-600 transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(217,167,74,0.15)]"
                >
                  {service.cta} <ArrowUpRight size={14} />
                </a>
              ) : (
                <Link to="/booking" className="w-full py-4 border border-white/10 text-white font-sans uppercase tracking-widest text-xs hover:bg-gold-600 hover:text-charcoal-950 hover:border-gold-600 transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(217,167,74,0.15)]">
                  {service.cta} <ArrowUpRight size={14} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;