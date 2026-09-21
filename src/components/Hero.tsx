import React from 'react';
import {
  Activity,
  ArrowRight,
  BriefcaseBusiness,
  CarTaxiFront,
  Newspaper,
  ShieldCheck,
  Sparkles,
  Star,
  Utensils,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/mockData';
import { Logo } from './Logo';
import ecosystemHeroBg from '../assets/images/ayudh-ecosystem-hero.png';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onSelectTab?: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onSelectTab }) => {
  const ecosystemServices = [
    { label: 'Security', icon: ShieldCheck },
    { label: 'Jobs', icon: BriefcaseBusiness },
    { label: 'AV Life News', icon: Newspaper },
    { label: 'Food Delivery', icon: Utensils },
    { label: 'Cleaning Products', icon: Sparkles },
    { label: 'AV Ride', icon: CarTaxiFront },
  ];

  const heroAppLinks = [
    {
      label: 'AV Manpower',
      icon: BriefcaseBusiness,
      href: 'https://ayudh-vikas-manpower.vercel.app',
    },
    {
      label: 'AV Food',
      icon: Utensils,
      href: '#av-food',
    },
    {
      label: 'AV Ride',
      icon: CarTaxiFront,
      href: '#av-ride',
    },
  ];

  return (
    <section id="hero" className="relative min-h-[48vh] py-6 sm:py-8 lg:py-10 flex items-center overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={ecosystemHeroBg}
          alt="Ayudh Vikas ecosystem covering security, jobs, AV Life news, food delivery, cleaning products, and AV Ride"
          referrerPolicy="no-referrer"
          className="h-full w-full scale-[1.02] object-cover object-center brightness-95 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/62 to-slate-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />
      </div>

      <div
        className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="relative z-20 mx-auto flex w-full max-w-[96rem] flex-col gap-4 px-4 sm:px-6 xl:px-8 2xl:px-10">
        <div className="flex w-full flex-col items-stretch space-y-4 text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex w-full flex-col items-center justify-center gap-2 text-center"
          >
            <Logo size="lg" showText={false} className="justify-center" />
            <p className="text-xl font-black tracking-tight text-white sm:text-2xl lg:text-3xl">
              Ayudh Vikas Group
            </p>
            <p className="text-xs font-semibold tracking-wide text-slate-300 sm:text-sm">
              Security, Staffing, Media & Local Services
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-none text-2xl font-black leading-[1.15] tracking-tight text-white sm:text-3xl lg:text-4xl xl:text-[2.65rem]"
          >
            One Ayudh Vikas ecosystem for{' '}
            <span className="bg-gradient-to-r from-blue-400 via-red-400 to-amber-300 bg-clip-text text-transparent">
              safety, jobs, mobility, food, news & care
            </span>{' '}
            across Warangal
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap gap-2"
          >
            {ecosystemServices.map((service) => {
              const Icon = service.icon;

              return (
                <span
                  key={service.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-extrabold text-white backdrop-blur-md"
                >
                  <Icon className="h-3.5 w-3.5 text-emerald-300" />
                  {service.label}
                </span>
              );
            })}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-none text-sm leading-relaxed text-slate-300 sm:text-base lg:max-w-5xl"
          >
            From police-verified security and manpower jobs to AV Ride, food delivery, AV Life local news, and house-cleaning product delivery, we are building a practical service network for{' '}
            <strong className="font-semibold text-white">Warangal, Hanamkonda, and Kazipet</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex w-full flex-col gap-3 pt-1 lg:flex-row lg:items-stretch"
          >
            <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <button
                onClick={onOpenQuoteModal}
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-blue-900 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-red-950/60 transition-all duration-300 hover:-translate-y-0.5 hover:from-red-500 hover:to-blue-800"
              >
                <Zap className="h-4 w-4 text-amber-300" />
                <span>Request 24-Hour Quote</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onSelectTab?.('services')}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-500/60 bg-blue-950/80 px-6 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-blue-900"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-4 w-4 text-blue-300" />
              </button>

              {heroAppLinks.map((app) => {
                const Icon = app.icon;

                return (
                  <a
                    key={app.label}
                    href={app.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-extrabold text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-white/15"
                  >
                    <Icon className="h-4 w-4 text-emerald-300" />
                    <span>{app.label}</span>
                  </a>
                );
              })}
            </div>

            <aside className="w-full shrink-0 lg:w-[17.5rem]">
              <button
                type="button"
                onClick={() => onSelectTab?.('ayudhklin-products')}
                className="group flex h-full w-full flex-col justify-between rounded-2xl border border-emerald-300/40 bg-emerald-950/70 p-3.5 text-left shadow-lg shadow-emerald-950/40 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-emerald-300/70"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-emerald-200">
                    Ad · AyudhKlin
                  </span>
                  <Sparkles className="h-4 w-4 text-emerald-300" />
                </div>
                <div className="mt-2">
                  <p className="text-sm font-extrabold leading-snug text-white">
                    Professional cleaning products for home & industry
                  </p>
                  <p className="mt-1 text-[11px] leading-relaxed text-emerald-100/80">
                    Order hygiene supplies on WhatsApp. Same-city delivery across Warangal.
                  </p>
                </div>
                <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-emerald-200">
                  Shop catalog
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </button>
            </aside>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid w-full grid-cols-1 gap-3 border-t border-slate-800/80 pt-3 text-xs font-medium text-slate-300 sm:grid-cols-3"
          >
            <div className="flex items-center justify-start gap-2 rounded-xl border border-slate-800 bg-slate-900/80 p-3 shadow-sm backdrop-blur-md">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                ))}
              </div>
              <div className="text-left">
                <span className="font-bold text-white">{COMPANY_INFO.rating}</span>
                <span className="ml-1 text-slate-400">({COMPANY_INFO.reviewCount} Reviews)</span>
              </div>
            </div>

            <div className="flex items-center justify-start gap-2 rounded-xl border border-slate-800 bg-slate-900/80 p-3 shadow-sm backdrop-blur-md">
              <div className="rounded-lg border border-red-800/50 bg-red-950 p-1.5 text-red-400">
                <Activity className="h-4 w-4" />
              </div>
              <div className="text-left">
                <span className="font-bold text-white">24/7 Emergency</span>
                <span className="block text-[11px] text-slate-400">Command Center Active</span>
              </div>
            </div>

            <div className="flex items-center justify-start gap-2 rounded-xl border border-slate-800 bg-slate-900/80 p-3 shadow-sm backdrop-blur-md">
              <div className="rounded-lg border border-blue-800/50 bg-blue-950 p-1.5 text-blue-400">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div className="text-left">
                <span className="font-bold text-white">100% Police Verified</span>
                <span className="block text-[11px] text-slate-400">Vetted Staff Deployment</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
