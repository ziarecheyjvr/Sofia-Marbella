import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { QUIZ_QUESTIONS, QUIZ_RESULTS } from '../constants';
import { ArrowRight, CheckCircle2, ChevronRight, Mail, User, Loader2 } from 'lucide-react';

const Quiz: React.FC = () => {
    const [step, setStep] = useState<'quiz' | 'lead' | 'success'>('quiz');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const [leadData, setLeadData] = useState({ name: '', email: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleOptionClick = (option: string) => {
        if (isAnswered) return;
        setSelectedOption(option);
        setIsAnswered(true);

        if (option === QUIZ_QUESTIONS[currentQuestion].correctAnswer) {
            setScore(prev => prev + 1);
        }

        setTimeout(() => {
            if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
                setCurrentQuestion(prev => prev + 1);
                setSelectedOption(null);
                setIsAnswered(false);
            } else {
                setStep('lead');
            }
        }, 800);
    };

    const getResult = () => {
        if (score === 7) return QUIZ_RESULTS.EXECUTIVE;
        if (score >= 4) return QUIZ_RESULTS.COMPOSED;
        return QUIZ_RESULTS.ASCENDING;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const result = getResult();

        try {
            const response = await fetch('https://services.leadconnectorhq.com/hooks/DAREyY4qKRwXiecRQr7f/webhook-trigger/abcd857a-6882-4cc3-9f8a-88aea6e1d78c', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: leadData.name,
                    email: leadData.email,
                    score: `${score} / ${QUIZ_QUESTIONS.length}`,
                    resultTitle: result.title,
                    resultSubtitle: result.subtitle,
                    timestamp: new Date().toISOString()
                }),
            });

            if (!response.ok) {
                throw new Error('Submission failed. Please try again.');
            }

            setStep('success');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-charcoal-950 pt-48 pb-24 px-6 overflow-hidden">
            <div className="max-w-3xl mx-auto">
                {step === 'quiz' && (
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        {/* Header */}
                        <div className="text-center space-y-6">
                            <h2 className="text-4xl md:text-5xl font-serif text-white">The Presence Audit</h2>
                            <p className="text-gray-400 text-lg mx-auto font-light leading-relaxed italic">
                                A strategic assessment of your composure, communication, and social intelligence.
                            </p>
                            <div className="w-12 h-[1px] bg-gold-500/30 mx-auto mt-6"></div>
                        </div>

                        {/* Progress */}
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-500 text-xs tracking-widest uppercase font-medium">Question {currentQuestion + 1} / {QUIZ_QUESTIONS.length}</span>
                            <div className="flex gap-1">
                                {QUIZ_QUESTIONS.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-1 w-8 rounded-full transition-all duration-500 ${idx <= currentQuestion ? 'bg-gold-500' : 'bg-charcoal-800'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Question Card */}
                        <div className="bg-charcoal-900/50 border border-white/5 p-8 md:p-12 rounded-lg backdrop-blur-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>

                            <div className="relative z-10 space-y-10">
                                <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight">
                                    {QUIZ_QUESTIONS[currentQuestion].text}
                                </h3>

                                <div className="grid gap-4">
                                    {QUIZ_QUESTIONS[currentQuestion].options.map((option, idx) => {
                                        const isSelected = selectedOption === option;
                                        const isCorrect = option === QUIZ_QUESTIONS[currentQuestion].correctAnswer;

                                        let buttonClass = "group flex items-center justify-between p-6 text-left bg-charcoal-900/80 border transition-all duration-300 rounded-sm ";

                                        if (!isAnswered) {
                                            buttonClass += "border-white/10 hover:border-gold-500/50 hover:bg-charcoal-800";
                                        } else if (isSelected) {
                                            buttonClass += isCorrect ? "border-green-500/50 bg-green-500/5" : "border-red-500/50 bg-red-500/5";
                                        } else if (isCorrect) {
                                            buttonClass += "border-green-500/30 bg-green-500/5 opacity-50";
                                        } else {
                                            buttonClass += "border-white/5 opacity-30";
                                        }

                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => handleOptionClick(option)}
                                                disabled={isAnswered}
                                                className={buttonClass}
                                            >
                                                <span className={`text-lg transition-colors ${isSelected ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                                                    {option}
                                                </span>
                                                {isAnswered && isCorrect && <CheckCircle2 size={20} className="text-green-500" />}
                                                {!isAnswered && <ChevronRight size={20} className="text-gold-500 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all" />}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {step === 'lead' && (
                    <div className="animate-in fade-in zoom-in-95 duration-700 space-y-12">
                        <div className="text-center space-y-6">
                            <span className="text-gold-500 text-sm tracking-[0.4em] font-bold uppercase">Final Step</span>
                            <h2 className="text-5xl md:text-6xl font-serif text-white">Secure Your Report</h2>
                            <p className="text-gray-400 text-xl max-w-xl mx-auto font-light leading-relaxed">
                                Your assessment is complete. Provide your details below to receive your personalized refinement analysis.
                            </p>
                        </div>

                        <div className="bg-charcoal-900 border border-white/5 p-10 md:p-14 rounded-lg shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>

                            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                <div className="space-y-6">
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                        <input
                                            required
                                            type="text"
                                            placeholder="Your Full Name"
                                            value={leadData.name}
                                            onChange={(e) => setLeadData(prev => ({ ...prev, name: e.target.value }))}
                                            className="w-full bg-charcoal-950 border border-white/10 p-5 pl-12 focus:border-gold-500 outline-none transition-all rounded-sm text-white placeholder:text-gray-600"
                                        />
                                    </div>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                        <input
                                            required
                                            type="email"
                                            placeholder="Your Email Address"
                                            value={leadData.email}
                                            onChange={(e) => setLeadData(prev => ({ ...prev, email: e.target.value }))}
                                            className="w-full bg-charcoal-950 border border-white/10 p-5 pl-12 focus:border-gold-500 outline-none transition-all rounded-sm text-white placeholder:text-gray-600"
                                        />
                                    </div>
                                </div>

                                {error && <p className="text-red-500 text-sm">{error}</p>}

                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="w-full bg-gold-600 text-charcoal-900 px-12 py-5 font-bold uppercase tracking-widest hover:bg-gold-500 transition-all text-center rounded-sm flex items-center justify-center gap-3 disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="animate-spin" size={20} /> Processing...
                                        </>
                                    ) : (
                                        <>
                                            Get My Results <ArrowRight size={20} />
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-gray-600 text-xs tracking-widest uppercase">
                                    Privacy is guaranteed. Your results remain confidential.
                                </p>
                            </form>
                        </div>
                    </div>
                )}

                {step === 'success' && (
                    <div className="animate-in fade-in zoom-in-95 duration-700 text-center space-y-12 py-12">
                        <div className="flex justify-center">
                            <div className="w-24 h-24 bg-gold-500/10 rounded-full flex items-center justify-center border border-gold-500/20">
                                <CheckCircle2 className="text-gold-500" size={48} />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <span className="text-gold-500 text-sm tracking-[0.4em] font-bold uppercase">Submission Successful</span>
                            <h2 className="text-5xl md:text-6xl font-serif text-white">Check Your Inbox</h2>
                            <p className="text-gray-400 text-xl max-w-xl mx-auto font-light leading-relaxed">
                                Your refinement report is being prepared. It will arrive in your inbox within the next few minutes.
                            </p>
                        </div>

                        <div className="pt-8">
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 text-gold-500 hover:text-white transition-colors uppercase tracking-[0.2em] text-sm font-bold border-b border-gold-500/30 pb-1"
                            >
                                Return to Home <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;
