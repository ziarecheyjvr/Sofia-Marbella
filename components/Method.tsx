import React from 'react';
import { METHOD_DIMENSIONS } from '../constants';

const Method: React.FC = () => {
  return (
    <section id="method" className="py-24 bg-charcoal-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif text-white">
              The Sofia Method: <br />
              <span className="text-gold-500 italic">Elegance is a Skillset</span>
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed">
              Refinement is not a personality trait. It’s trained behavior.
              Sofia teaches refinement across four integrated dimensions.
              When these align, elegance stops being effort. It becomes your baseline.
            </p>

            <div className="grid gap-6 mt-8">
              {METHOD_DIMENSIONS.map((dim, idx) => (
                <div key={idx} className="flex gap-4 p-5 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-sm">
                  <div className="mt-1 flex-shrink-0 bg-charcoal-900 p-2 rounded-full h-fit border border-gold-500/20">
                    {dim.icon}
                  </div>
                  <div>
                    <h4 className="text-gold-100 font-bold uppercase tracking-wider text-sm mb-1">{dim.title}</h4>
                    <p className="text-gray-400 text-base">{dim.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-full min-h-[500px] border border-gold-500/20 p-2">
            <div className="absolute inset-0 bg-charcoal-900 m-2">
              <img
                src="/assets/images/ettiquette.jpg"
                alt="Refinement Method"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center p-8 border border-gold-500/50 bg-charcoal-950/90 backdrop-blur-sm">
                  <p className="font-serif text-2xl text-gold-400 italic mb-4">"Etiquette is not rigidity. It is self-respect made visible."</p>
                  <div className="w-12 h-[1px] bg-gold-500 mx-auto"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Method;