import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { QUIZ_QUESTIONS } from '../constants';
import { ArrowRight, RefreshCcw } from 'lucide-react';

const Assessment: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShowResult(false);
  };

  return (
    <section id="assessment" className="py-24 bg-charcoal-900 relative">
      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-charcoal-800 border border-white/5 p-8 md:p-12 rounded-lg shadow-2xl relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl"></div>

          {!showResult ? (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center mb-8 border-b border-white/5 pb-8">
                <h3 className="text-2xl font-serif text-gold-400 mb-2">A Quick Private Assessment</h3>
                <p className="text-gray-400 text-lg">Before you scroll further—be honest:</p>
              </div>

              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <span className="text-gold-500 text-sm tracking-widest font-bold">QUESTION {currentQuestion + 1} OF {QUIZ_QUESTIONS.length}</span>
                <div className="h-1 bg-charcoal-950 w-24 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gold-500 transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif text-white leading-relaxed">
                {QUIZ_QUESTIONS[currentQuestion].text}
              </h3>

              <div className="grid gap-4 mt-8">
                {QUIZ_QUESTIONS[currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={handleAnswer}
                    className="group flex items-center justify-between p-6 text-left bg-charcoal-900 border border-white/10 hover:border-gold-500/50 hover:bg-charcoal-950 transition-all rounded-sm"
                  >
                    <span className="text-gray-300 group-hover:text-gold-100 transition-colors text-lg">{option}</span>
                    <ArrowRight className="text-gold-500 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" size={20} />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6 py-8 animate-in zoom-in-95 duration-500">
              <h3 className="text-3xl font-serif text-gold-400">The Verdict</h3>
              <p className="text-gray-300 leading-relaxed text-xl">
                Most people fail these.<br />
                And these are the basics.<br />
                <span className="font-bold text-white block mt-6 text-2xl">If this feels elementary—good. You’re ready for the next level.</span>
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
                <button onClick={resetQuiz} className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest">
                  <RefreshCcw size={16} /> Retake
                </button>
                <Link to="/booking" className="bg-gold-600 text-charcoal-900 px-8 py-3 font-bold uppercase tracking-widest hover:bg-gold-500">
                  Book A Private Session
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Assessment;