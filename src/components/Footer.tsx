import React from 'react';
import { Phone, Mail, MapPin, CheckCircle2, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { Logo } from './Logo';

interface FooterProps {
  onSelectTab?: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const handleNav = (tab: string) => (e: React.MouseEvent) => {
    if (onSelectTab) {
      e.preventDefault();
      onSelectTab(tab);
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-ink text-xs text-ivory/65">
      <div className="gold-hairline" />

      <div className="mx-auto max-w-[96rem] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <a href="#home" onClick={handleNav('home')} className="inline-block">
              <Logo size="md" showText={true} textColor="text-ivory" />
            </a>

            <p className="max-w-md text-xs leading-relaxed text-ivory/60">
              Ayudh Vikas Manpower Solutions delivers police-verified security, professional deep cleaning, facility support, and corporate manpower across{' '}
              <strong className="font-semibold text-ivory">Hanamkonda, Warangal, and Kazipet</strong>.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-ivory/75">
                <Phone className="h-3.5 w-3.5 text-gold" />
                <span>
                  Helpline: <strong className="text-ivory">{COMPANY_INFO.phoneDisplay}</strong>,{' '}
                  <strong className="text-ivory">{COMPANY_INFO.phoneDisplay2}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 text-ivory/75">
                <Mail className="h-3.5 w-3.5 text-gold" />
                <span className="min-w-0 break-all">
                  Email: <strong className="text-ivory">{COMPANY_INFO.email}</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" onClick={handleNav('home')} className="transition-colors hover:text-gold">Home</a></li>
              <li><a href="#services" onClick={handleNav('services')} className="transition-colors hover:text-gold">Services Portfolio</a></li>
              <li className="font-semibold text-gold-soft">AyudhKlin</li>
              <li><a href="#ayudhklin-products" onClick={handleNav('ayudhklin-products')} className="pl-3 transition-colors hover:text-gold">AyudhKlin Products</a></li>
              <li><a href="#ayudhklin-services" onClick={handleNav('ayudhklin-services')} className="pl-3 transition-colors hover:text-gold">AyudhKlin Services</a></li>
              <li><a href="#why-us" onClick={handleNav('why-us')} className="transition-colors hover:text-gold">Why Ayudh Vikas</a></li>
              <li><a href="#faq" onClick={handleNav('faq')} className="transition-colors hover:text-gold">Frequently Asked Questions</a></li>
              <li><a href="#contact" onClick={handleNav('contact')} className="transition-colors hover:text-gold">Contact Headquarters</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Core Offerings
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" onClick={handleNav('services')} className="font-semibold text-ivory transition-colors hover:text-gold">Security &amp; Guarding</a></li>
              <li><a href="#services" onClick={handleNav('services')} className="font-semibold text-ivory transition-colors hover:text-gold">Professional Deep Cleaning</a></li>
              <li><a href="#ayudhklin-services" onClick={handleNav('ayudhklin-services')} className="transition-colors hover:text-gold">AyudhKlin Deep Cleaning</a></li>
              <li><a href="#services" onClick={handleNav('services')} className="transition-colors hover:text-gold">Integrated Facility Management</a></li>
              <li><a href="#services" onClick={handleNav('services')} className="transition-colors hover:text-gold">Corporate Support Staff</a></li>
              <li><a href="#services" onClick={handleNav('services')} className="transition-colors hover:text-gold">Event &amp; VIP Escort</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              Registered Office
            </h4>
            <div className="space-y-2 leading-relaxed text-ivory/60">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  Km Complex, Hunter Road, Warangal Railway Gate, Warangal - 506002, Telangana, India.
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gold-soft">
                <Navigation className="h-3.5 w-3.5 text-gold" />
                <span>Opposite Kasam Janata Sale</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-[10px] font-semibold text-gold-soft">
                <CheckCircle2 className="h-3 w-3 text-gold" /> Verified &amp; Compliant Agency
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 text-[11px] text-ivory/40 sm:flex-row">
          <div>© 2026 Web-Devs Solutions. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-6">
            <a href="#privacy" className="transition-colors hover:text-gold">Privacy Policy</a>
            <a href="#terms" className="transition-colors hover:text-gold">Terms of Service</a>
            <a href="#compliance" className="transition-colors hover:text-gold">Statutory Compliance</a>
            <a href="#sitemap" className="transition-colors hover:text-gold">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
