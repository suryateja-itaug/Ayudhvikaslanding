import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Sparkles, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface FloatingActionsProps {
  onOpenQuoteModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenQuoteModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pointer-events-none fixed right-3 z-40 flex flex-col items-end gap-2 sm:right-6 sm:gap-3" style={{ bottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}>
      
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto group cursor-pointer rounded-full border border-gold/30 bg-ink/90 p-2.5 text-gold shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-gold hover:text-ink sm:p-3"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
        </button>
      )}

      {showScrollTop && (
        <button
          onClick={onOpenQuoteModal}
          className="pointer-events-auto relative hidden cursor-pointer items-center gap-2 overflow-hidden rounded-full px-4 py-2.5 text-xs font-semibold text-ink shadow-xl shadow-gold/20 transition-transform duration-300 hover:scale-105 sm:flex"
        >
          <span className="btn-gold absolute inset-0" />
          <Sparkles className="relative h-3.5 w-3.5" />
          <span className="relative">Get Quote</span>
        </button>
      )}

      {/* WhatsApp Quick Button */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative flex items-center justify-center rounded-full bg-red-600 p-3 text-white shadow-2xl shadow-red-600/40 transition-all duration-300 hover:scale-110 hover:bg-red-500 group sm:p-3.5"
        aria-label="Chat on WhatsApp"
        title={`WhatsApp Direct Inquiry (${COMPANY_INFO.phoneDisplay})`}
      >
        <MessageSquare className="w-5 h-5 fill-white" />
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white" />

        {/* Hover tooltip */}
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-xl border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100 lg:block">
          WhatsApp Us ({COMPANY_INFO.phoneDisplay})
        </span>
      </a>

      {/* Direct Emergency Call Button */}
      <a
        href={`tel:${COMPANY_INFO.phone}`}
        className="pointer-events-auto relative flex items-center justify-center rounded-full bg-blue-900 p-3 text-white shadow-2xl shadow-blue-900/40 transition-all duration-300 hover:scale-110 hover:bg-blue-800 group sm:p-3.5"
        aria-label="Call 24/7 Helpline"
        title={`Call 24/7 Operations Desk (${COMPANY_INFO.phoneDisplay})`}
      >
        <Phone className="w-5 h-5" />

        {/* Hover tooltip */}
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-xl border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100 lg:block">
          Call 24/7 Operations ({COMPANY_INFO.phoneDisplay})
        </span>
      </a>

    </div>
  );
};
