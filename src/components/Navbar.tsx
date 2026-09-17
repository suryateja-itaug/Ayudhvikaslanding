import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, Sparkles, Clock, BriefcaseBusiness, CarTaxiFront, Utensils } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { Logo } from './Logo';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab, onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'services', name: 'Services' },
    { id: 'ayudhklin-products', name: 'AyudhKlin' },
    { id: 'about-us', name: 'About Us' },
    { id: 'why-us', name: 'Why Ayudh Vikas' },
    { id: 'faq', name: 'FAQ' },
    { id: 'contact', name: 'Contact' },
  ];

  const appButtons = [
    {
      name: 'AV Manpower',
      icon: BriefcaseBusiness,
      href: 'https://ayudh-vikas-manpower.vercel.app',
    },
    {
      name: 'AV Ride',
      icon: CarTaxiFront,
      href: '#av-ride',
    },
    {
      name: 'AV Food',
      icon: Utensils,
      href: '#av-food',
    },
  ];

  return (
    <>
      {/* Top emergency announcement bar with Blue-Green-Red combo */}
      <div className="bg-slate-950 border-b border-blue-900/60 text-xs py-1.5 px-4 text-slate-100">
        <div className="max-w-[96rem] mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-red-950 text-red-200 px-2.5 py-0.5 rounded-full font-bold text-[11px] border border-red-700">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              24/7 Emergency Operations
            </span>
            <span className="hidden sm:inline text-slate-200 text-[11px] font-medium">
              Security & Professional Deep Cleaning Solutions across Telangana & South India
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-100">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="hover:text-red-400 transition-colors flex items-center gap-1 font-bold text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-red-400" />
              <span>Call: {COMPANY_INFO.phoneDisplay}</span>
            </a>
            <a 
              href={`tel:${COMPANY_INFO.phone2}`} 
              className="hover:text-red-400 transition-colors flex items-center gap-1 font-bold text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-red-400" />
              <span>, {COMPANY_INFO.phoneDisplay2}</span>
            </a>
            <span className="text-slate-700">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-200 text-xs">
              <Clock className="w-3 h-3 text-amber-400" />
              Response Time: &lt; 15 Mins
            </span>
          </div>
        </div>
      </div>

      {/* Main translucent sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-md shadow-blue-950/10 py-2.5'
            : 'bg-white/85 backdrop-blur-sm border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 xl:px-8 2xl:px-10 flex items-center justify-between gap-4 xl:gap-6">
          {/* Logo */}
          <button 
            onClick={() => onSelectTab('home')}
            className="flex shrink-0 items-center group text-left cursor-pointer border-none bg-transparent"
          >
            <Logo size="md" showText={true} />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex shrink-0 items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-blue-200/80 shadow-inner">
            {navLinks.map((link) => {
              const isAyudhKlin = link.id === 'ayudhklin-products';
              const isActive = isAyudhKlin ? activeTab.startsWith('ayudhklin-') : activeTab === link.id;
              
              // Special style for AyudhKlin tab (Green) vs general tabs (Navy/Red)
              let activeBg = 'bg-gradient-to-r from-blue-900 to-blue-950 text-white shadow-md shadow-blue-950/20';
              if (isAyudhKlin && isActive) {
                activeBg = 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30';
              }

              if (isAyudhKlin) return (
                <div key={link.id} className="relative group">
                  <button className={`px-3.5 xl:px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${isActive ? activeBg : 'text-slate-800 hover:text-emerald-700 hover:bg-white'}`}>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block mr-1.5" />AyudhKlin
                  </button>
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 top-full pt-2 z-50 w-52">
                    <div className="rounded-xl border border-emerald-200 bg-white p-1.5 shadow-xl">
                      <button onClick={() => onSelectTab('ayudhklin-products')} className={`w-full rounded-lg px-3 py-2 text-left text-xs font-bold ${activeTab === 'ayudhklin-products' ? 'bg-emerald-600 text-white' : 'text-slate-700 hover:bg-emerald-50'}`}>AyudhKlin Products</button>
                      <button onClick={() => onSelectTab('ayudhklin-services')} className={`w-full rounded-lg px-3 py-2 text-left text-xs font-bold ${activeTab === 'ayudhklin-services' ? 'bg-emerald-600 text-white' : 'text-slate-700 hover:bg-emerald-50'}`}>AyudhKlin Services</button>
                    </div>
                  </div>
                </div>
              );

              return (
                <button
                  key={link.id}
                  onClick={() => onSelectTab(link.id)}
                  className={`px-3.5 xl:px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? activeBg
                      : 'text-slate-800 hover:text-blue-900 hover:bg-white'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Actions & Call Button */}
          <div className="hidden sm:flex shrink-0 items-center gap-2 xl:gap-2.5">
            <div className="hidden xl:flex items-center gap-1.5 2xl:gap-2">
              {appButtons.map((app) => {
                const Icon = app.icon;
                const classes = 'inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border border-emerald-300 bg-white px-2.5 text-[11px] font-bold leading-none text-blue-950 shadow-sm shadow-emerald-900/5 transition-all hover:border-emerald-500 hover:bg-emerald-50';

                return (
                  <a key={app.name} href={app.href} target="_blank" rel="noopener noreferrer" className={classes}>
                    <Icon className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="whitespace-nowrap">{app.name}</span>
                  </a>
                );
              })}
            </div>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-800 bg-blue-50 border border-blue-200 hover:border-blue-400 hover:bg-blue-100/80 transition-all group"
            >
              <div className="relative">
                <Phone className="w-3.5 h-3.5 text-blue-800 group-hover:rotate-12 transition-transform" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <span className="hidden xl:inline">{COMPANY_INFO.phoneDisplay}</span>
              <span className="xl:hidden">Call Now</span>
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-white rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-blue-900 hover:from-red-500 hover:to-blue-800 shadow-md shadow-red-600/20 hover:shadow-red-600/35 transition-all duration-300 cursor-pointer overflow-hidden group"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Get Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-red-600"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-blue-200 px-4 pt-3 pb-6 mt-3 space-y-3 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isAyudhKlin = link.id === 'ayudhklin-products';
                const isActive = isAyudhKlin ? activeTab.startsWith('ayudhklin-') : activeTab === link.id;
                let activeMobileStyle = 'bg-blue-900 text-white shadow-sm';
                if (isAyudhKlin && isActive) {
                  activeMobileStyle = 'bg-emerald-600 text-white shadow-sm';
                }

                if (isAyudhKlin) return (
                  <div key={link.id} className="rounded-lg border border-emerald-200 bg-emerald-50 p-2">
                    <div className="px-2 pb-1 text-sm font-bold text-emerald-800">AyudhKlin</div>
                    <button onClick={() => { setMobileMenuOpen(false); onSelectTab('ayudhklin-products'); }} className={`w-full px-3 py-2 text-left text-sm font-bold rounded-lg ${activeTab === 'ayudhklin-products' ? 'bg-emerald-600 text-white' : 'text-slate-700'}`}>AyudhKlin Products</button>
                    <button onClick={() => { setMobileMenuOpen(false); onSelectTab('ayudhklin-services'); }} className={`w-full px-3 py-2 text-left text-sm font-bold rounded-lg ${activeTab === 'ayudhklin-services' ? 'bg-emerald-600 text-white' : 'text-slate-700'}`}>AyudhKlin Services</button>
                  </div>
                );

                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onSelectTab(link.id);
                    }}
                    className={`px-4 py-2.5 text-sm font-bold rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                      isActive
                        ? activeMobileStyle
                        : 'text-slate-800 hover:bg-blue-50 hover:text-blue-900'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {appButtons.map((app) => {
                  const Icon = app.icon;
                  const classes = 'flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold bg-white text-blue-950 border border-emerald-300';

                  return (
                    <a
                      key={app.name}
                      href={app.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className={classes}
                    >
                      <Icon className="w-4 h-4 text-emerald-600" />
                      <span>{app.name}</span>
                    </a>
                  );
                })}
              </div>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-blue-50 text-blue-900 border border-blue-200"
              >
                <Phone className="w-4 h-4 text-blue-800" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-red-600 via-red-500 to-blue-900 text-white shadow-md shadow-red-600/20"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Get Instant Quote</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
