import React, { useState } from 'react';
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('submitting');

    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/DAREyY4qKRwXiecRQr7f/webhook-trigger/5d774976-63b7-4315-be90-f7a5a945ef38', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <footer className="bg-charcoal-950 text-white pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Quote Image Section */}
        <div className="mb-24 px-4 sm:px-0">
          <div className="relative group max-w-4xl mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gold-500/5 blur-3xl rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-1000"></div>
            <div className="relative z-10 p-1 border border-gold-500/30 group-hover:border-gold-500/60 transition-colors duration-1000 rounded-sm">
              <img
                src="/assets/images/sofia-marbella-quote.webp"
                alt="Sofia Marbella Quote"
                className="w-full h-auto object-contain mx-auto transform transition-transform duration-1000 hover:scale-[1.01]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Top Section: Checklist CTA */}
        <div id="guide-form" className="grid md:grid-cols-2 gap-12 pb-20 border-b border-white/5 items-center">
          <div>
            <h3 className="text-3xl font-serif text-white mb-6">First Steps in Etiquette &amp; Manners Guide</h3>
            <div className="text-gray-400 mb-6 leading-relaxed text-lg space-y-4">
              <p className="max-w-2xl">Grace, presence, and confidence are built through the smallest details.</p>
              <p className="max-w-sm">This introductory guide reveals the subtle etiquette standards that shape how you are perceived in everyday life.</p>
            </div>

          </div>
          <div className="bg-charcoal-900 p-8 border border-white/10 relative">
            <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-gold-600 text-xs font-bold px-3 py-1 text-black">FREE</div>
            <h4 className="text-white text-lg font-serif mb-4">Begin refining your presence today.</h4>
            {status === 'success' ? (
              <div className="bg-charcoal-950/50 border border-gold-500/30 p-6 text-center">
                <p className="text-gold-500 font-serif text-lg mb-2">Thank you for joining.</p>
                <p className="text-gray-400 text-sm">Your guide is on its way to your inbox.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-xs text-gray-500 underline hover:text-gold-500 transition-colors uppercase tracking-widest"
                >
                  Send to another email
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  disabled={status === 'submitting'}
                  className="w-full bg-charcoal-900 border border-white/20 px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors text-sm disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-gold-600 text-black py-3 font-bold uppercase tracking-widest text-xs hover:bg-gold-500 transition-colors disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Sending...' : 'Download the Free Guide'}
                </button>
                {status === 'error' && (
                  <p className="text-red-400 text-xs text-center mt-2">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
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
              <a href="https://www.facebook.com/profile.php?id=100009653418224" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors"><Facebook size={20} /></a>
              <a href="https://www.linkedin.com/in/sofiamarbella/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors"><Linkedin size={20} /></a>
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
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-700 uppercase tracking-widest pt-8 border-t border-white/5">
          <p>&copy; {new Date().getFullYear()} Sofia Marbella. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-gold-400 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;