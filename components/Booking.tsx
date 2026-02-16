import React from 'react';
import { ArrowLeft, Calendar, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Booking: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black pt-32 pb-24 px-6 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-600/[0.05] rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gold-900/[0.03] rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <button
                    onClick={() => navigate('/')}
                    className="group flex items-center gap-3 text-gold-500/60 hover:text-gold-400 transition-all uppercase tracking-[0.3em] text-[10px] mb-12 font-bold"
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </button>

                <header className="mb-16 border-b border-white/10 pb-12">
                    <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase mb-4 block">Reservation</span>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Book a Private Session</h1>
                    <p className="text-xl text-gray-400 font-serif italic max-w-2xl leading-relaxed">
                        Refinement is an investment in your most valuable asset: yourself. Secure your time for a private consultation with Sofia Marbella.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Booking Info */}
                    <div className="space-y-12">
                        <section>
                            <h2 className="text-gold-400 font-sans text-xs tracking-widest uppercase mb-6 font-bold">Contact Inquiries</h2>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-500 group-hover:border-gold-500/50 transition-colors">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <span className="text-[10px] text-gray-500 uppercase tracking-widest block">Email</span>
                                        <a href="mailto:concierge@sofiamarbella.com" className="text-white hover:text-gold-400 transition-colors">concierge@sofiamarbella.com</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-500 group-hover:border-gold-500/50 transition-colors">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <span className="text-[10px] text-gray-500 uppercase tracking-widest block">Phone</span>
                                        <span className="text-white">+34 600 000 000</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-500 group-hover:border-gold-500/50 transition-colors">
                                        <MapPin size={18} />
                                    </div>
                                    <div>
                                        <span className="text-[10px] text-gray-500 uppercase tracking-widest block">Location</span>
                                        <span className="text-white">Marbella, Spain | Worldwide Digital</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="p-8 bg-gold-600/5 border border-gold-600/20 rounded-sm">
                            <div className="flex items-center gap-3 mb-4 text-gold-500">
                                <Calendar size={20} />
                                <h3 className="font-serif italic text-lg text-white">Scheduling Note</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Sofia's private calendar is limited. For urgent requests or international travel bookings for teams or families, please contact the concierge directly via email.
                            </p>
                        </section>
                    </div>

                    {/* Booking Form Simulation */}
                    <div className="bg-charcoal-900 border border-white/5 p-8 md:p-10 relative shadow-2xl">
                        <div className="absolute top-0 right-0 w-1 h-16 bg-gold-500"></div>

                        <h3 className="text-2xl font-serif text-white mb-8 text-center uppercase tracking-widest">Inquiry Form</h3>

                        <form className="space-y-6">
                            <div>
                                <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 block">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 block">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 block">Subject of Inquiry</label>
                                <select className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors appearance-none">
                                    <option className="bg-charcoal-900">Private Etiquette Session</option>
                                    <option className="bg-charcoal-900">Professional Refinement</option>
                                    <option className="bg-charcoal-900">Youth Excellence</option>
                                    <option className="bg-charcoal-900">Special Event/Travel</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2 block">Additional Details</label>
                                <textarea
                                    className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-gold-500/50 transition-colors h-32"
                                    placeholder="How can Sofia assist you?"
                                ></textarea>
                            </div>

                            <button className="w-full bg-gold-600 text-charcoal-950 py-5 font-bold uppercase tracking-[0.3em] text-xs hover:bg-gold-500 transition-all mt-4">
                                Submit Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
