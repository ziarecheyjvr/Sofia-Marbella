import React, { useState } from 'react';

interface FreeGuideFormProps {
  layout?: 'columns' | 'single';
}

const FreeGuideForm: React.FC<FreeGuideFormProps> = ({ layout = 'columns' }) => {
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

  const Content = (
    <div className={layout === 'columns' ? '' : 'text-center'}>
      <h3 className="text-3xl font-serif text-white mb-6">First Steps in Etiquette & Manners Guide</h3>
      <div className="text-gray-400 mb-6 leading-relaxed text-lg space-y-4">
        <p className={layout === 'columns' ? 'max-w-2xl' : 'mx-auto max-w-2xl'}>
          Grace, presence, and confidence are built through the smallest details.
        </p>
        <p className={layout === 'columns' ? 'max-w-sm' : 'mx-auto max-w-md'}>
          This introductory guide reveals the subtle etiquette standards that shape how you are perceived in everyday life.
        </p>
      </div>
    </div>
  );

  const Form = (
    <div className={`bg-charcoal-900 p-8 border border-white/10 relative h-full flex flex-col justify-center ${layout === 'single' ? 'max-w-md mx-auto w-full' : ''}`}>
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
  );

  if (layout === 'single') {
    return (
      <div className="space-y-12">
        {Content}
        {Form}
      </div>
    );
  }

  return (
    <div id="guide-form" className="grid md:grid-cols-2 gap-12 items-stretch">
      {Content}
      {Form}
    </div>
  );
};

export default FreeGuideForm;
