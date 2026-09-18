import React, { useEffect, useState } from 'react';
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
import ecosystemHeroBg from '../assets/images/ayudh-ecosystem-hero.png';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onSelectTab?: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onSelectTab }) => {
  const [livePulse, setLivePulse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLivePulse((prev) => !prev);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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
    <section id="hero" className="relative min-h-[64vh] py-10 sm:py-14 lg:py-16 flex items-center overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={ecosystemHeroBg}
          alt="Ayudh Vikas ecosystem covering security, jobs, AV Life news, food delivery, cleaning products, and AV Ride"
          referrerPolicy="no-referrer"
          className="h-full w-full scale-[1.02] object-cover object-center brightness-95 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/82 via-transparent to-slate-950/25" />
      </div>

      <div
        className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="relative z-20 mx-auto grid w-full max-w-[96rem] grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.82fr_1fr] xl:px-8 2xl:px-10">
        <div className="flex max-w-3xl flex-col items-start space-y-5 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-blue-950/90 px-4 py-2 shadow-lg backdrop-blur-md"
          >
            <div className="relative flex items-center justify-center">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              <span className={`absolute h-3 w-3 rounded-full bg-red-500/50 ${livePulse ? 'animate-ping' : ''}`} />
            </div>
            <span className="text-xs font-bold tracking-wide text-blue-100 sm:text-sm">
              Ayudh Vikas Group | <span className="font-bold text-red-400">Security, Staffing, Media & Local Services</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-black leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl"
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
            className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base"
          >
            From police-verified security and manpower jobs to AV Ride, food delivery, AV Life local news, and house-cleaning product delivery, we are building a practical service network for{' '}
            <strong className="font-semibold text-white">Warangal, Hanamkonda, and Kazipet</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex w-full flex-col items-center justify-start gap-3 pt-1 sm:w-auto sm:flex-row"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="w-full sm:w-auto"
          >
            <div className="grid w-full grid-cols-1 gap-2 sm:w-auto sm:grid-cols-3">
              {heroAppLinks.map((app) => {
                const Icon = app.icon;

                return (
                  <a
                    key={app.label}
                    href={app.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-extrabold text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-white/15 sm:min-w-32"
                  >
                    <Icon className="h-4 w-4 text-emerald-300" />
                    <span>{app.label}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid w-full grid-cols-1 gap-3 border-t border-slate-800/80 pt-4 text-xs font-medium text-slate-300 sm:grid-cols-3"
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

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden min-h-[24rem] lg:block"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};
