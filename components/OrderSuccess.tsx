import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Check, 
  Sparkles, 
  Mail, 
  HelpCircle, 
  ChevronRight, 
  ArrowRight
} from 'lucide-react';
import { OrderDetails } from '../types';

const OrderSuccess: React.FC = () => {
  const location = useLocation();
  const order: OrderDetails = location.state?.order || {};

  const emailDisplay = order.email || 'your email address';

  return (
    <section className="bg-charcoal-950 min-h-screen pt-36 pb-24 flex items-center justify-center text-gray-200 selection:bg-gold-500 selection:text-black relative">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gold-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6 relative z-10 text-center space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center justify-center space-x-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs uppercase tracking-[0.25em] font-sans">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Order Confirmed</span>
        </div>

        {/* Luxury Wax Seal */}
        <div className="flex justify-center my-4">
          <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-b from-gold-500/20 to-gold-700/10 border border-gold-500/40 shadow-[0_0_50px_rgba(217,167,74,0.25)]">
            <img 
              src="/assets/images/waxseal.png" 
              alt="Sofia Marbella Wax Seal" 
              className="w-16 h-16 object-contain opacity-90"
            />
            <div className="absolute -bottom-1 -right-1 bg-gold-500 text-black p-1.5 rounded-full shadow-lg">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
          </div>
        </div>

        {/* Title & Email Confirmation Message */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-wide">
            Thank You For Your Order
          </h1>

          <div className="bg-charcoal-900/90 border border-gold-500/20 rounded-xl p-6 sm:p-8 shadow-xl max-w-lg mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2 text-gold-400 font-sans text-xs uppercase tracking-widest font-semibold">
              <Mail className="w-4 h-4 text-gold-400" />
              <span>Email Confirmation Dispatched</span>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans font-light">
              An email confirmation with your purchase details and receipt will be sent to{' '}
              <span className="text-gold-300 font-medium">{emailDisplay}</span> shortly.
            </p>
          </div>
        </div>

        {/* Navigation & Action Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 font-sans text-xs uppercase tracking-[0.2em]">
          <Link
            to="/shop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold-600 hover:bg-gold-500 text-white px-8 py-3.5 rounded transition-all shadow-lg font-semibold"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            <span>Return to Shop</span>
          </Link>

          <a
            href="mailto:concierge@sofia.marbella?subject=Inquiry%20Regarding%20My%20Order"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-charcoal-900 hover:bg-charcoal-800 border border-white/20 text-gray-200 hover:text-white px-8 py-3.5 rounded transition-all"
          >
            <HelpCircle className="w-4 h-4 text-gold-500" />
            <span>Contact Concierge</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default OrderSuccess;
