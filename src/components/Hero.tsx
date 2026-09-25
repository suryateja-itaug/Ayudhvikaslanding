import React from 'react';
import {
  ArrowRight,
  BriefcaseBusiness,
  CarTaxiFront,
  CheckCircle2,
  Newspaper,
  PhoneCall,
  ShieldCheck,
  SprayCan,
  Utensils,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Logo } from './Logo';
import securityHeroBg from '../assets/images/security_hero_bg_1784715806151.jpg';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onSelectTab?: (tab: string) => void;
}

const serviceTiles = [
  { title: 'Security', icon: ShieldCheck, tab: 'services', className: 'bg-blue-700 text-white' },
  { title: 'Jobs', icon: BriefcaseBusiness, href: 'https://ayudh-vikas-manpower.vercel.app', className: 'bg-red-600 text-white' },
  { title: 'AV Life News', icon: Newspaper, tab: 'about-us', className: 'bg-slate-900 text-white' },
  { title: 'Food Delivery', icon: Utensils, tab: 'av-food', className: 'bg-orange-500 text-white' },
  { title: 'AyudhKlin', icon: SprayCan, tab: 'ayudhklin-products', className: 'bg-cyan-600 text-white' },
  { title: 'AV Ride', icon: CarTaxiFront, tab: 'av-ride', className: 'bg-violet-700 text-white' },
];

const proofPoints = [
  'Police verified staff',
  'Tender documents ready',
  'Warangal local team',
  '24x7 support desk',
];

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onSelectTab }) => {
  const handleServiceClick = (item: (typeof serviceTiles)[number]) => {
    if (item.href) {
      window.open(item.href, '_blank', 'noopener,noreferrer');
      return;
    }
    if (item.tab) onSelectTab?.(item.tab);
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-white text-slate-950">
      <img
        src={securityHeroBg}
        alt="Ayudh Vikas security and facility operations"
        referrerPolicy="no-referrer"
        className="absolute inset-0 h-full w-full object-cover object-[center_38%] opacity-100 brightness-[1.04] contrast-105 saturate-100"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, #ffffff 0%, #ffffff 36%, rgba(255,255,255,0.92) 46%, rgba(255,255,255,0.55) 58%, rgba(255,255,255,0.18) 72%, rgba(255,255,255,0) 88%)',
        }}
      />
      <div className="relative mx-auto flex min-h-[32rem] max-w-[96rem] px-4 pb-7 pt-7 sm:min-h-[35rem] sm:px-6 lg:min-h-[37rem] lg:px-10 lg:py-9">
        <div className="flex max-w-4xl flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 inline-flex w-fit max-w-full rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 shadow-xl shadow-slate-950/10 backdrop-blur-md"
          >
            <Logo size="md" showText textColor="text-slate-950" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-800 backdrop-blur-md sm:text-xs"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-600" />
            Command center live - Warangal HQ
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-3 text-[11px] font-black uppercase tracking-[0.18em] text-orange-600 sm:text-xs"
          >
            License 417/2025 - Telangana
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-3 max-w-3xl text-5xl font-semibold leading-[0.92] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl"
          >
            The Private Standard
            <span className="block italic text-cyan-700">Of Public Service.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="mt-4 max-w-3xl text-base font-semibold leading-8 text-slate-700 sm:text-lg"
          >
            Security guards, manpower, facility support, and deep-cleaning teams for apartments, offices, schools, hospitals, events, and industries across{' '}
            <span className="font-black text-slate-950">Warangal, Hanamkonda, and Kazipet.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-5 flex flex-wrap gap-2"
          >
            {serviceTiles.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.title}
                  onClick={() => handleServiceClick(item)}
                  className={`${item.className} inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-black shadow-md shadow-slate-950/20 transition-transform hover:-translate-y-0.5`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {item.title}
                </button>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.36 }}
            className="mt-5 grid gap-3 sm:grid-cols-2"
          >
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-black text-white shadow-xl shadow-slate-950/15 hover:bg-blue-950"
            >
              <PhoneCall className="h-4 w-4 text-orange-500" />
              Get Free Quote
            </button>
            <button
              onClick={() => onSelectTab?.('services')}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white/80 px-6 py-3.5 text-sm font-black text-blue-800 shadow-sm backdrop-blur-md hover:bg-blue-50"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.44 }}
            className="mt-4 flex flex-wrap gap-2"
          >
            {proofPoints.map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs font-black text-slate-700 shadow-sm backdrop-blur-md">
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-700" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
