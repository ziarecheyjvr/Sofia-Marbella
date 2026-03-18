import React from 'react';
import { ExternalLink, Tag } from 'lucide-react';

const affiliates = [
  { name: 'MOTF', url: '#', type: 'Premium Fashion' },
  { 
    name: 'Ogee', 
    url: 'https://ogee.com/en-eu', 
    code: 'SOFIAMARBELLA15', 
    note: '15% off for followers · 15% commission earned',
    type: 'Organic Luxury Skincare'
  },
  { 
    name: 'Herbal Face Food', 
    type: 'Advanced Botanicals',
    note: 'Refer your friends and earn commissions on purchases made by them. Invite others, grow your network, and earn commissions.',
    codes: [
      { discount: '30% off', value: 'Sofiamarbella' },
      { discount: '50% off', value: 'SOFIAI50' }
    ],
    links: [
      { label: 'Referral Link 35%', url: 'https://herbalfacefood.com/?ref=htnhszdy' },
      { label: 'Network Signup', url: 'https://herbalfacefood.goaffpro.com/create-account?ref=hthszdy' },
      { label: 'Affiliate Home Page', url: 'https://herbalfacefood.goaffpro.com/?ref=htnhszdy' }
    ]
  },
  { 
    name: 'Kangen Water', 
    url: '#', 
    isDM: true,
    note: 'DM for more info / landing page',
    type: 'Wellness'
  },
];

const Discounts: React.FC = () => {
  return (
    <section id="discounts" className="bg-charcoal-900 border-t border-white/5 pt-40 pb-24 min-h-screen">
      {/* Page Header */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-16">
        <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase mb-4 block">Affiliates</span>
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">Exclusive Discounts</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          A curated affiliates section featuring Sofia's recommended products across fashion, lifestyle, and home with exclusive discount codes.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {affiliates.map((brand, index) => (
            <div key={index} className="group relative bg-charcoal-950 border border-white/10 p-8 hover:border-gold-500/30 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-gold-500/10 group-hover:text-gold-500/20 transition-colors">
                <Tag size={40} />
              </div>
              
              <div className="relative">
                <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-gold-500/60 mb-2 block">{brand.type}</span>
                <h3 className="text-2xl font-serif text-white mb-4">{brand.name}</h3>
                
                {brand.code && (
                  <div className="mb-4 inline-flex items-center gap-2 bg-white/5 px-4 py-2 border border-white/10">
                    <span className="text-[10px] uppercase tracking-widest text-gray-400">Code:</span>
                    <span className="text-gold-400 font-mono tracking-wider">{brand.code}</span>
                  </div>
                )}

                {brand.codes && (
                  <div className="mb-4 flex flex-col items-start gap-2">
                    {brand.codes.map((c, i) => (
                      <div key={i} className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 border border-white/10">
                        <span className="text-[10px] uppercase tracking-widest text-gray-400">{c.discount}:</span>
                        <span className="text-gold-400 font-mono tracking-wider">{c.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {brand.note && (
                  <p className="text-gray-400 text-sm italic mb-6">{brand.note}</p>
                )}

                <div className="pt-4 border-t border-white/5">
                  {brand.isDM ? (
                    <p className="text-gold-500 text-xs uppercase tracking-[0.2em]">Contact for access</p>
                  ) : brand.links ? (
                    <div className="flex flex-col gap-3">
                      {brand.links.map((link, i) => (
                        <a 
                          key={i}
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-white text-xs uppercase tracking-widest hover:text-gold-400 transition-colors"
                        >
                          {link.label} <ExternalLink size={14} />
                        </a>
                      ))}
                    </div>
                  ) : brand.url ? (
                    <a 
                      href={brand.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white text-xs uppercase tracking-widest hover:text-gold-400 transition-colors"
                    >
                      Visit Brand <ExternalLink size={14} />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Additions */}
        <div className="mt-20 py-12 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm font-sans tracking-[0.2em] uppercase">
            Future additions: high-end lifestyle and beauty brands aligned with the brand's premium positioning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Discounts;
