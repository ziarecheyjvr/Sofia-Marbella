import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import FreeGuideForm from './FreeGuideForm';

interface FreeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FreeGuideModal: React.FC<FreeGuideModalProps> = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-charcoal-950/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative bg-charcoal-900 border border-white/10 w-full max-w-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        {/* Glow effect */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-gold-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gold-600/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gold-500 transition-colors z-20"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12 relative z-10">
          <div className="text-center mb-8">
            <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase mb-2 block">Start Here (Free)</span>
          </div>
          <FreeGuideForm layout="single" />
        </div>
      </div>
    </div>
  );
};

export default FreeGuideModal;
