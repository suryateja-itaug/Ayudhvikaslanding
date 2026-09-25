import React, { useRef } from 'react';
import {
  ArrowRight,
  BriefcaseBusiness,
  CarTaxiFront,
  Newspaper,
  ShieldCheck,
  Sparkles,
  Star,
  Utensils,
} from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Logo } from './Logo';
import securityHeroBg from '../assets/images/security_hero_bg_1784715806151.jpg';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onSelectTab?: (tab: string) => void;
}

const ecosystemServices = [
  { label: 'Security', icon: ShieldCheck },
  { label: 'Jobs', icon: BriefcaseBusiness },
  { label: 'AV Life News', icon: Newspaper },
  { label: 'Food Delivery', icon: Utensils },
  { label: 'AyudhKlin', icon: Sparkles },
  { label: 'AV Ride', icon: CarTaxiFront },
];

const headlineLines = [
  { italic: false, words: ['The', 'Private', 'Standard'] },
  { italic: true, words: ['Of', 'Public', 'Service.'] },
];

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal, onSelectTab }) => {
  const stageRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 40, damping: 18, mass: 0.6 });
  const imgX = useTransform(sx, [-0.5, 0.5], ['2.4%', '-2.4%']);
  const imgY = useTransform(sy, [-0.5, 0.5], ['1.6%', '-1.6%']);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return;
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="hero"
      ref={stageRef}
      onMouseMove={handleMove}
      className="relative flex min-h-[34rem] items-end overflow-hidden bg-ink text-ivory sm:min-h-[38rem] lg:min-h-[42rem]"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={securityHeroBg}
          alt="Ayudh Vikas officers securing a premium corporate campus at dusk"
          referrerPolicy="no-referrer"
          style={{ x: imgX, y: imgY }}
          className="ken-burns h-[112%] w-[112%] max-w-none object-cover object-[center_30%] brightness-[0.62] contrast-110 saturate-[0.9]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(16,185,129,0.16),transparent_55%)]" />
        <div className="grain-overlay" />
      </div>

      <div className="pointer-events-none absolute inset-6 z-10 hidden border border-gold/15 lg:block">
        <span className="absolute -left-px -top-px h-8 w-8 border-l-2 border-t-2 border-gold/70" />
        <span className="absolute -right-px -top-px h-8 w-8 border-r-2 border-t-2 border-gold/70" />
        <span className="absolute -bottom-px -left-px h-8 w-8 border-b-2 border-l-2 border-gold/70" />
        <span className="absolute -bottom-px -right-px h-8 w-8 border-b-2 border-r-2 border-gold/70" />
      </div>

      <div className="pointer-events-none absolute right-[12%] top-[22%] z-10 hidden h-2 w-2 rounded-full bg-gold/80 lg:block">
        <span className="orbit-glow absolute left-0 top-0 h-24 w-24 rounded-full bg-gradient-to-br from-gold/25 to-transparent blur-xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 mx-auto mb-1 flex max-w-[calc(100vw-2rem)] items-center justify-center rounded-full border border-white/12 bg-ink/45 px-3 py-2 shadow-2xl shadow-black/20 backdrop-blur-md sm:absolute sm:left-1/2 sm:top-7 sm:mb-0 sm:-translate-x-1/2 sm:px-5 sm:py-2.5"
      >
        <Logo size="md" showText textColor="text-ivory" />
      </motion.div>

      <div className="relative z-20 mx-auto flex w-full max-w-[96rem] flex-col gap-5 px-4 pb-6 pt-2 sm:px-6 sm:pb-10 sm:pt-10 lg:pb-12 xl:px-10">
        <div className="flex w-full max-w-6xl flex-col gap-4 sm:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex max-w-full flex-wrap items-center gap-4"
          >
            <div className="flex min-w-0 max-w-full items-start gap-3 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-gold-soft sm:items-center sm:text-[11px] sm:tracking-[0.28em]">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="live-ring relative h-2 w-2 rounded-full bg-gold" />
              </span>
              Command center live · Warangal HQ
            </div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold sm:mb-4 sm:text-[11px] sm:tracking-[0.32em]"
            >
              License 417/2025 · Telangana
            </motion.p>

            <h1 className="font-display w-full text-[clamp(2.35rem,7vw,6.1rem)] font-medium leading-[0.94] tracking-tight text-ivory">
              {headlineLines.map((line, lineIndex) => (
                <span key={line.words.join('-')} className={`block w-full ${line.italic ? 'italic text-gold-soft' : ''}`}>
                  {line.words.map((word, wordIndex) => (
                    <motion.span
                      key={`${word}-${wordIndex}`}
                      initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{
                        duration: 0.75,
                        delay: 0.18 + (lineIndex * 3 + wordIndex) * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="mr-[0.22em] inline-block last:mr-0"
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="max-w-4xl text-base leading-relaxed text-ivory/78 sm:text-lg lg:text-xl"
          >
            Security guards, manpower, facility support, and deep-cleaning teams for apartments, offices, schools, hospitals, events, and industries across{' '}
            <span className="text-ivory">Warangal, Hanamkonda, and Kazipet</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.68 }}
            className="flex flex-wrap gap-2"
          >
            {ecosystemServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.span
                  key={service.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.72 + i * 0.05 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-ivory/90 backdrop-blur-md"
                >
                  <Icon className="h-3.5 w-3.5 text-gold" />
                  {service.label}
                </motion.span>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
          >
            <button
              onClick={onOpenQuoteModal}
              className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_12px_40px_rgba(16,185,129,0.28)] transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
            >
              <span className="btn-gold absolute inset-0" />
              <span className="relative">Get contract quote</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onSelectTab?.('services')}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium text-ivory backdrop-blur-md transition-all duration-300 hover:border-gold/50 hover:bg-white/10 sm:w-auto"
            >
              Explore services
              <ArrowRight className="h-4 w-4 text-gold" />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="grid grid-cols-1 gap-2 border-t border-white/10 pt-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 backdrop-blur-md">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-gold" />
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-ivory">Tender Docs Ready</p>
              <p className="text-xs text-ivory/60">License, EPF, ESIC & profiles</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 backdrop-blur-md">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ivory">100% Police Verified</p>
              <p className="text-xs text-ivory/60">Biometric & address cleared</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 backdrop-blur-md">
            <span className="relative grid h-9 w-9 place-items-center rounded-full border border-crimson/40 bg-crimson/15 text-red-300">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-red-400" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ivory">24/7 SLA Support</p>
              <p className="text-xs text-ivory/60">Escalation desk & standby teams</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelectTab?.('ayudhklin-products')}
            className="group flex items-center justify-between gap-3 rounded-2xl border border-gold/25 bg-gold/10 px-4 py-3 text-left backdrop-blur-md transition-all duration-300 hover:border-gold/50 hover:bg-gold/15"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">AyudhKlin</p>
              <p className="text-sm font-semibold text-ivory">Shop Professional Care</p>
            </div>
            <ArrowRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

    </section>
  );
};
