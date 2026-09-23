import React from 'react';
import { Shield, ChevronRight, Zap } from 'lucide-react';

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  onSelectTab: (tab: string) => void;
  onOpenQuoteModal?: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
  onSelectTab,
  onOpenQuoteModal,
}) => {
  return (
    <div className="bg-gradient-to-b from-blue-950 via-slate-900 to-red-950 text-white pt-10 pb-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden shadow-inner">
      {/* Background glow & subtle patterns */}
      <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center space-y-3">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-blue-200/90 mb-1">
          <button 
            onClick={() => onSelectTab('home')} 
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
          >
            <Shield className="w-3.5 h-3.5 text-red-400" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-blue-300/60" />
          <span className="text-white font-bold">{badge}</span>
        </nav>

        {/* Title & Subtitle */}
        <h1 className="px-1 text-2xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        <p className="text-blue-100/90 text-sm sm:text-base max-w-2xl leading-relaxed">
          {subtitle}
        </p>

        {onOpenQuoteModal && (
          <div className="pt-2">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-blue-900 hover:from-red-500 hover:to-blue-800 text-white text-xs font-bold shadow-lg shadow-blue-950/40 cursor-pointer transition-all"
            >
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              <span>Request Custom SLA Quote</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
