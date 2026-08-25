import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Check, ArrowRight, ShieldCheck, CreditCard, X, ExternalLink } from 'lucide-react';
import { OrderDetails } from '../types';

interface ShopProduct {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  image: string;
  objectPosition?: string;
  type: 'physical' | 'digital' | 'service';
  description: string;
  badge?: string;
  features: string[];
  href: string;
}

const SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: 'gentle-reminder-notebook',
    title: 'Gentle Reminder → Notebook with 52 Rules of Etiquette and Manner',
    subtitle: 'Velvet Gold Embossed Edition • 52 Principles of Etiquette',
    price: 49.99,
    image: '/assets/images/gentle-reminder.jpg',
    type: 'physical',
    badge: 'Signature Notebook',
    href: 'https://link.fastpaydirect.com/payment-link/6a8d6296d6768df054447d08',
    description: 'A velvet-bound discipline journal featuring 52 essential etiquette principles, designed to integrate refinement into daily life through structure and self-awareness.',
    features: [
      '52 Weekly Discipline Prompts & Reflection Grids',
      'Hardcover Italian Velvet with 24k Gold Foil Stamping',
      'High-Grade 120gsm Archival Cream Paper',
      'Includes Silk Ribbon Bookmark & Storage Sleeve'
    ]
  },
  {
    id: '1-1-adult-lesson',
    title: '1-1 Lesson on Etiquette & Manners (60min)',
    subtitle: '60 Minutes Personal Coaching with Sofia Marbella',
    price: 150.00,
    image: '/assets/images/bc3b83bf-f49b-4639-a5ba-9cec59f638d5.jpg',
    objectPosition: 'object-top',
    type: 'service',
    badge: 'Adult Lesson',
    href: 'https://link.fastpaydirect.com/payment-link/6a8d61eed6768df054447d07',
    description: 'A focused private session to refine your presence in real time—whether you’re preparing for business, dating, travel, public visibility, or a personal reinvention.',
    features: [
      'Body language and posture calibration',
      'First impressions and introductions mastery',
      'Social and executive conduct optimization',
      'Personalized Action Blueprint PDF delivered after session'
    ]
  },
  {
    id: 'adult-short-course',
    title: 'One to One Etiquette & Manners Short Course (for Adults)',
    subtitle: '3 Private Intensive Sessions (60 Mins Each)',
    price: 400.00,
    image: '/assets/images/adults.jpg',
    type: 'service',
    badge: 'Adult Short Course',
    href: 'https://link.fastpaydirect.com/payment-link/6a8d61c4d6768df054447d06',
    description: 'A structured 3-part transformation for adults covering Personal Grace, Professional Authority, and High-Society Protocol.',
    features: [
      'Session 1: Posture, Voice Tone & Personal Presence',
      'Session 2: Business Etiquette & Executive Composure',
      'Session 3: Fine Dining & High-Society Protocol',
      'Direct WhatsApp Access to Sofia during the course'
    ]
  },
  {
    id: 'youth-private-lesson',
    title: 'Etiquette & Manners Private Lesson for Kids/Young Adults (60min)',
    subtitle: '60 Minutes Private Personalized Youth Coaching',
    price: 140.00,
    image: '/assets/images/young adults.PNG',
    type: 'service',
    badge: 'Youth Private Lesson',
    href: 'https://link.fastpaydirect.com/payment-link/6a8d6257f9c8c807930b9e54',
    description: 'Private Youth Lesson designed to instill self-respect, respectful greetings, poise, and polite communication from an early age.',
    features: [
      'First impressions & respectful greetings',
      'Posture & body awareness calibration',
      'Dining confidence & table manners',
      'Polite communication and digital respect'
    ]
  },
  {
    id: 'youth-short-course',
    title: 'Etiquette & Manners Course (3 Lessons / 50 min each) for Kids/Young Adults',
    subtitle: '3 Foundation Sessions (50 Mins Each)',
    price: 360.00,
    image: '/assets/images/ettiquette.jpg',
    type: 'service',
    badge: 'Youth Short Course',
    href: 'https://link.fastpaydirect.com/payment-link/6a8d5d66d6768df054447cfb',
    description: 'A structured foundation in first impressions, social graces, and essential table manners—designed to build confidence and poise for young adults.',
    features: [
      'Lesson 1: Greetings, Eye Contact & Introduction Etiquette',
      'Lesson 2: Posture, Body Language & Social Graces',
      'Lesson 3: Fine Dining Etiquette & Table Manners'
    ]
  }
];

const Shop: React.FC = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<ShopProduct | null>(null);
  
  // Checkout Form State
  const [fullName, setFullName] = useState('Eleanor Vance');
  const [email, setEmail] = useState('eleanor.vance@luxury-lifestyle.com');
  const [phone, setPhone] = useState('+34 612 345 678');
  const [street, setStreet] = useState('Calle Serrano 45, Suite 4B');
  const [city, setCity] = useState('Madrid');
  const [postalCode, setPostalCode] = useState('28001');
  const [country, setCountry] = useState('Spain');
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenCheckout = (product: ShopProduct) => {
    setSelectedProduct(product);
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'SOFIA-GOLD' || promoCode.trim().toUpperCase() === 'VIP10') {
      setDiscountApplied(true);
    } else {
      alert('Invalid code. Try "SOFIA-GOLD" for 10% off.');
    }
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const discount = discountApplied ? selectedProduct.price * 0.10 : 0;
      const tax = (selectedProduct.price - discount) * 0.21;
      const total = selectedProduct.price - discount + tax;

      const newOrder: OrderDetails = {
        orderId: `SM-${Math.floor(100000 + Math.random() * 900000)}`,
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        customerName: fullName || 'Valued Client',
        email: email || 'client@sofia.marbella',
        phone: phone || '+34 600 000 000',
        shippingAddress: {
          street: street || 'Private Residence',
          city: city || 'Marbella',
          state: city || 'Malaga',
          postalCode: postalCode || '29600',
          country: country || 'Spain',
        },
        paymentMethod: {
          type: 'Visa Platinum',
          last4: '4242',
        },
        items: [
          {
            id: selectedProduct.id,
            title: selectedProduct.title,
            subtitle: selectedProduct.subtitle,
            price: selectedProduct.price,
            quantity: 1,
            image: selectedProduct.image,
            type: selectedProduct.type,
          }
        ],
        subtotal: selectedProduct.price,
        shipping: 0,
        discount: discount,
        tax: tax,
        total: total,
        status: 'confirmed'
      };

      setIsSubmitting(false);
      setSelectedProduct(null);
      navigate('/order-success', { state: { order: newOrder } });
    }, 1200);
  };

  const handleDirectDemoOrder = () => {
    navigate('/order-success');
  };

  return (
    <section id="shop" className="bg-charcoal-900 border-t border-white/5 pt-36 pb-24 min-h-screen text-gray-200">
      
      {/* Page Header */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-16 space-y-4">
        <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase block">Signature Tools & Curated Lessons</span>
        <h1 className="text-4xl md:text-5xl font-serif text-white">Refinement Essentials</h1>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
          Because details define distinction. Journals, books, and private lessons designed to integrate grace and composure into daily life.
        </p>
      </div>

      {/* Featured Signature Item (Hero Product) */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <div className="relative bg-charcoal-950 p-8 md:p-12 border border-gold-500/30 shadow-2xl rounded-xl overflow-hidden">
          <div className="absolute top-0 right-0 bg-gold-500 text-black text-[10px] font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-bl">
            Featured Distinction
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="aspect-[4/5] overflow-hidden border border-white/10 rounded bg-charcoal-900 relative group">
              <img
                src={SHOP_PRODUCTS[0].image}
                alt={SHOP_PRODUCTS[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="space-y-6 text-left">
              <span className="text-gold-500 font-sans text-[10px] tracking-[0.3em] uppercase block">
                {SHOP_PRODUCTS[0].badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-white">{SHOP_PRODUCTS[0].title}</h2>
              <p className="text-gold-400 font-serif text-2xl font-semibold">€{SHOP_PRODUCTS[0].price.toFixed(2)} EUR</p>
              <p className="text-gray-400 leading-relaxed font-sans text-sm">
                {SHOP_PRODUCTS[0].description}
              </p>

              <ul className="space-y-2 text-xs text-gray-300 font-sans border-t border-white/10 pt-4">
                {SHOP_PRODUCTS[0].features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-gold-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <a
                  href={SHOP_PRODUCTS[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gold-600 hover:bg-gold-500 text-white px-8 py-4 font-sans uppercase tracking-[0.2em] text-xs transition-colors rounded shadow-lg text-center font-semibold flex items-center justify-center gap-2"
                >
                  <span>Buy Now</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of All Products & Services */}
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="text-2xl font-serif text-white mb-8 border-b border-white/10 pb-4">
          All Refinement Products & Programs
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {SHOP_PRODUCTS.slice(1).map((product) => (
            <div 
              key={product.id}
              className="bg-charcoal-950 border border-white/10 hover:border-gold-500/40 rounded-xl p-6 flex flex-col justify-between transition-all duration-300 shadow-xl group"
            >
              <div className="space-y-4">
                <div className="aspect-[16/9] rounded overflow-hidden border border-white/10 relative">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className={`w-full h-full object-cover ${product.objectPosition || 'object-center'} group-hover:scale-105 transition-transform duration-500`}
                    onError={(e) => {
                      (e.target as HTMLElement).setAttribute('src', '/assets/images/ettiquette.jpg');
                    }}
                  />
                  {product.badge && (
                    <span className="absolute top-2 right-2 bg-charcoal-900/90 text-gold-400 border border-gold-500/30 text-[9px] uppercase tracking-wider px-2.5 py-1 rounded font-sans font-semibold">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block font-sans">{product.type}</span>
                  <h4 className="text-xl font-serif text-white leading-snug">{product.title}</h4>
                  <p className="text-xs text-gray-400 font-sans">{product.subtitle}</p>
                </div>

                <p className="text-gold-400 font-serif text-2xl font-bold">€{product.price.toFixed(2)} EUR</p>
                
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  {product.description}
                </p>

                <ul className="space-y-1.5 text-xs text-gray-400 font-sans pt-2 border-t border-white/5">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-gold-500 text-[10px]">✦</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gold-600 hover:bg-gold-500 text-white py-3.5 rounded text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-2 shadow-md text-center"
                >
                  <span>Book Now</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* ================= CHECKOUT MODAL ================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-charcoal-900 border border-gold-500/40 rounded-xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8 text-gray-200">
            
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-1 border-b border-white/10 pb-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 block font-sans">Secure Checkout</span>
              <h3 className="text-2xl font-serif text-white">Complete Your Order</h3>
            </div>

            {/* Selected Item Recap */}
            <div className="flex items-center gap-4 bg-charcoal-950 p-4 rounded-lg border border-white/10">
              <div className="w-16 h-16 rounded overflow-hidden border border-white/10 shrink-0">
                <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 space-y-1">
                <h4 className="text-base font-serif text-white">{selectedProduct.title}</h4>
                <p className="text-xs text-gray-400">{selectedProduct.subtitle}</p>
              </div>
              <span className="text-gold-400 font-serif font-bold text-lg">€{selectedProduct.price.toFixed(2)}</span>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleCompleteOrder} className="space-y-4 font-sans text-xs">
              <div>
                <label className="block text-gray-300 font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-charcoal-950 border border-white/15 text-white p-3 rounded focus:border-gold-400 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-charcoal-950 border border-white/15 text-white p-3 rounded focus:border-gold-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-1">Phone Number</label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-charcoal-950 border border-white/15 text-white p-3 rounded focus:border-gold-400 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-1">Shipping Street Address</label>
                <input
                  type="text"
                  required
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full bg-charcoal-950 border border-white/15 text-white p-3 rounded focus:border-gold-400 outline-none"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-gray-300 font-medium mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-charcoal-950 border border-white/15 text-white p-3 rounded focus:border-gold-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-1">Postal Code</label>
                  <input
                    type="text"
                    required
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="w-full bg-charcoal-950 border border-white/15 text-white p-3 rounded focus:border-gold-400 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-1">Country</label>
                  <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-charcoal-950 border border-white/15 text-white p-3 rounded focus:border-gold-400 outline-none"
                  />
                </div>
              </div>

              {/* Promo Code Input */}
              <div className="pt-2">
                <label className="block text-gray-300 font-medium mb-1">Promo / VIP Code (Optional)</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code (e.g. SOFIA-GOLD)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 bg-charcoal-950 border border-white/15 text-white p-3 rounded focus:border-gold-400 outline-none uppercase"
                  />
                  <button
                    type="button"
                    onClick={handleApplyPromo}
                    className="px-4 bg-charcoal-800 hover:bg-gold-600 text-white rounded transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {discountApplied && (
                  <p className="text-[11px] text-emerald-400 mt-1">✓ VIP Code Applied! 10% Discount will be deducted.</p>
                )}
              </div>

              {/* Payment Method Badge */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-gray-400 text-[11px]">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>256-Bit SSL Encrypted Checkout</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CreditCard className="w-4 h-4 text-gold-400" />
                  <span>Visa / Apple Pay</span>
                </div>
              </div>

              {/* Action Buttons */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold-600 hover:bg-gold-500 text-white py-4 font-sans uppercase tracking-[0.2em] text-xs font-semibold rounded shadow-xl transition-all flex items-center justify-center gap-2 mt-4"
              >
                {isSubmitting ? (
                  <span>Processing VIP Order...</span>
                ) : (
                  <>
                    <span>Pay €{(selectedProduct.price * (discountApplied ? 0.9 : 1.0) * 1.21).toFixed(2)} & Complete Order</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};

export default Shop;