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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const darkNav = false;

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [activeTab]);

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about-us', name: 'About' },
    { id: 'services', name: 'Services' },
    { id: 'ayudhklin-products', name: 'AyudhKlin Products' },
    { id: 'ayudhklin-services', name: 'AyudhKlin Services' },
    { name: 'AV Jobs', href: 'https://ayudh-vikas-manpower.vercel.app' },
    { id: 'av-ride', name: 'AV Ride' },
    { id: 'av-food', name: 'AV Food' },
    { id: 'why-us', name: 'Why Us' },
    { id: 'faq', name: 'FAQ' },
    { id: 'contact', name: 'Contact' },
  ];

  const navItemClass = (isActive: boolean) =>
    `px-3 2xl:px-3.5 py-2 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
      isActive
        ? darkNav
          ? 'bg-gold text-ink shadow-md shadow-gold/20'
          : 'bg-ink text-ivory shadow-md'
        : darkNav
          ? 'text-ivory/80 hover:text-gold-soft hover:bg-white/8'
          : 'text-slate-700 hover:text-ink hover:bg-ivory'
    }`;


  return (
    <>
      <div className="border-b border-slate-200 bg-white text-xs text-slate-950">
        <div className="mx-auto flex max-w-[96rem] items-center justify-between gap-2 px-3 py-2 sm:px-4 sm:py-2.5">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 sm:px-2.5 sm:text-[11px]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-gold" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              <span className="sm:hidden">24/7 Ops</span>
              <span className="hidden sm:inline">24/7 Emergency Operations</span>
            </span>
            <span className="hidden min-w-0 truncate text-[11px] font-medium tracking-wide text-slate-600 lg:inline">
              Security & professional deep cleaning · Telangana
            </span>
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1 text-[11px] font-semibold text-slate-950 transition-colors hover:text-emerald-700 sm:text-xs"
            >
              <Phone className="h-3.5 w-3.5 text-gold" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone2}`}
              className="hidden items-center gap-1 text-xs font-semibold text-slate-950 transition-colors hover:text-emerald-700 md:flex"
            >
              <span>{COMPANY_INFO.phoneDisplay2}</span>
            </a>
            <span className="hidden items-center gap-1 text-xs text-slate-600 xl:flex">
              <Clock className="h-3 w-3 text-gold" />
              Response under 15 mins
            </span>
          </div>
        </div>
      </div>

      <header
        className="sticky top-0 z-40 border-b border-ink/8 bg-ivory/92 py-4 shadow-[0_10px_40px_rgba(7,9,15,0.08)] backdrop-blur-xl transition-all duration-500"
      >
        <div className="mx-auto flex max-w-[96rem] items-center justify-between gap-3 px-3 sm:px-4 xl:px-6">
          <button
            onClick={() => onSelectTab('home')}
            className="group flex min-w-0 shrink-0 cursor-pointer items-center border-none bg-transparent text-left"
          >
            <Logo size="md" showText={true} textColor={darkNav ? 'text-ivory' : 'text-ink'} />
          </button>

          <nav
            className={`hidden min-w-0 items-center gap-0.5 overflow-x-auto rounded-full border p-1 lg:flex ${
              darkNav ? 'border-white/10 bg-white/5' : 'border-ink/8 bg-white/70'
            }`}
          >
            {navLinks.map((link) =>
              link.href ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={navItemClass(false)}
                >
                  {link.name}
                </a>
              ) : (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => onSelectTab(link.id!)}
                  className={navItemClass(activeTab === link.id)}
                >
                  {link.name}
                </button>
              )
            )}
          </nav>

          <div className="hidden shrink-0 items-center gap-1.5 md:flex">

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className={`grid h-10 w-10 place-items-center rounded-full border ${
                darkNav
                  ? 'border-white/15 text-ivory hover:border-gold/50 hover:text-gold'
                  : 'border-ink/10 text-ink hover:border-gold hover:text-gold'
              }`}
              aria-label={`Call ${COMPANY_INFO.phoneDisplay}`}
            >
              <Phone className="h-4 w-4" />
            </a>

            <button
              onClick={onOpenQuoteModal}
              className="relative overflow-hidden rounded-full px-5 py-2.5 text-xs font-semibold text-ink"
            >
              <span className="btn-gold absolute inset-0" />
              <span className="relative">Get Quote</span>
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`rounded-xl border p-2.5 lg:hidden ${
              darkNav ? 'border-white/15 text-ivory' : 'border-ink/10 text-ink'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mt-4 max-h-[min(80dvh,36rem)] space-y-4 overflow-y-auto border-t border-ink/10 bg-ivory px-4 pb-7 pt-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = Boolean(link.id) && activeTab === link.id;
                const itemClass = `flex cursor-pointer items-center justify-between rounded-full px-4 py-3 text-sm font-semibold transition-colors ${
                  isActive ? 'bg-ink text-ivory' : 'text-slate-800 hover:bg-ink/5'
                }`;
                if (link.href) {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className={itemClass}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                    </a>
                  );
                }
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onSelectTab(link.id!);
                    }}
                    className={itemClass}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className={`h-3.5 w-3.5 ${isActive ? 'text-gold' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col gap-2 border-t border-ink/10 pt-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center justify-center gap-2 rounded-full bg-white py-3 text-sm font-semibold text-ink"
                aria-label={`Call ${COMPANY_INFO.phoneDisplay}`}
              >
                <Phone className="h-4 w-4 text-gold" />
                {COMPANY_INFO.phoneDisplay}
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="relative w-full overflow-hidden rounded-full py-3.5 text-sm font-semibold text-ink"
              >
                <span className="btn-gold absolute inset-0" />
                <span className="relative">Get Instant Quote</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
