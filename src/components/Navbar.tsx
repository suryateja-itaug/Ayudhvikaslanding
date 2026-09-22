import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, Clock } from 'lucide-react';
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
    { id: 'about-us', name: 'About' },
    { id: 'services', name: 'Services' },
    { id: 'ayudhklin-products', name: 'Ayudhklin Products' },
    { id: 'ayudhklin-services', name: 'Ayudhklin Services' },
    { id: 'why-us', name: 'Why Us' },
    { id: 'faq', name: 'FAQ' },
    { id: 'contact', name: 'Contact' },
  ];

  const navItemClass = (isActive: boolean) =>
    `px-2.5 2xl:px-3 py-1.5 text-[11px] font-bold rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
      isActive
        ? 'bg-gradient-to-r from-blue-900 to-blue-950 text-white shadow-md shadow-blue-950/20'
        : 'text-slate-800 hover:text-blue-900 hover:bg-white'
    }`;

  const appButtons = [
    {
      name: 'AV Manpower',
      href: 'https://ayudh-vikas-manpower.vercel.app',
    },
    {
      name: 'AV Ride',
      href: '#av-ride',
    },
    {
      name: 'AV Food',
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
        <div className="max-w-[96rem] mx-auto px-3 sm:px-4 xl:px-6 flex items-center justify-between gap-2 xl:gap-3">
          {/* Logo */}
          <button 
            onClick={() => onSelectTab('home')}
            className="flex shrink-0 items-center group text-left cursor-pointer border-none bg-transparent"
          >
            <Logo size="sm" showText={true} />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex min-w-0 items-center gap-0.5 bg-slate-100/90 p-1 rounded-full border border-blue-200/80 shadow-inner">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onSelectTab(link.id)}
                className={navItemClass(activeTab === link.id)}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Actions & Call Button */}
          <div className="hidden sm:flex shrink-0 items-center gap-1.5">
            <div className="hidden 2xl:flex items-center gap-0.5 bg-slate-100/90 p-1 rounded-full border border-blue-200/80">
              {appButtons.map((app) => (
                <a
                  key={app.name}
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={navItemClass(false)}
                >
                  {app.name}
                </a>
              ))}
            </div>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-blue-900 border border-blue-200 hover:bg-white"
              aria-label={`Call ${COMPANY_INFO.phoneDisplay}`}
            >
              <Phone className="h-4 w-4" />
            </a>

            <button
              onClick={onOpenQuoteModal}
              className={navItemClass(true)}
            >
              Get Quote
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
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onSelectTab(link.id);
                    }}
                    className={`px-4 py-2.5 text-sm font-bold rounded-full transition-colors flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-900 to-blue-950 text-white shadow-sm'
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
                {appButtons.map((app) => (
                  <a
                    key={app.name}
                    href={app.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center py-2.5 rounded-full text-sm font-bold text-slate-800 bg-slate-100 hover:bg-white"
                  >
                    {app.name}
                  </a>
                ))}
              </div>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-bold text-slate-800 bg-slate-100"
                aria-label={`Call ${COMPANY_INFO.phoneDisplay}`}
              >
                <Phone className="h-4 w-4 text-blue-900" />
                {COMPANY_INFO.phoneDisplay}
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center py-3 rounded-full text-sm font-bold bg-gradient-to-r from-blue-900 to-blue-950 text-white"
              >
                Get Instant Quote
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
