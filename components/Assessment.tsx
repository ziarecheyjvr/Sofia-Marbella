import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Assessment: React.FC = () => {
  return (
    <section id="assessment" className="py-24 bg-charcoal-900 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-charcoal-800 border border-white/5 p-8 md:p-12 rounded-lg shadow-2xl relative overflow-hidden text-center">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold-500/5 rounded-full blur-3xl"></div>

          <div className="relative z-10 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="max-w-2xl mx-auto space-y-4">
              <h3 className="text-3xl md:text-4xl font-serif text-gold-400">Your Manners Are Your Silent Business Card.</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                This brief evaluation reveals the subtle signals that shape perception — often before you speak.
              </p>
            </div>

            <div className="flex justify-center pt-4">
              <Link
                to="/quiz"
                className="group relative flex items-center gap-3 bg-gold-600 text-charcoal-900 px-10 py-4 font-bold uppercase tracking-widest hover:bg-gold-500 transition-all rounded-sm"
              >
                Take the Quiz
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assessment;