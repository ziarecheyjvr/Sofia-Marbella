import React from 'react';
import { ArrowLeft, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ComingSoonProps {
    title: string;
    subtitle?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title, subtitle }) => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden px-6">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-600/[0.05] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-900/[0.03] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #D9A74A 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="relative z-10 max-w-2xl w-full text-center space-y-12">
                <div className="inline-flex items-center gap-3 px-4 py-2 border border-gold-500/20 bg-gold-500/5 text-gold-400 rounded-full mb-4">
                    <Clock size={16} />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-bold">Coming Soon</span>
                </div>

                <div className="space-y-6">
                    <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-xl md:text-2xl text-gold-200/60 font-serif italic">
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className="w-24 h-[1px] bg-gold-500/30 mx-auto"></div>

                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto">
                    We are currently refining this experience to ensure it meets the highest standards of excellence.
                    Thank you for your patience.
                </p>

                <button
                    onClick={() => navigate('/')}
                    className="group inline-flex items-center gap-4 text-white hover:text-gold-400 transition-all duration-500 uppercase tracking-[0.4em] text-xs pt-8"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform duration-500" />
                    <span>Return Home</span>
                </button>
            </div>

            {/* Signature Wax Seal Style Decorative Element */}
            <div className="mt-24 opacity-20 filter grayscale contrast-125">
                {/* You can add a logo or an icon here */}
            </div>
        </div>
    );
};

export default ComingSoon;
