import React, { useRef } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  HelpCircle,
  MapPin,
  Phone,
  ShieldCheck,
  Siren,
  Smartphone,
  Sparkles,
  Star,
  Timer,
  UserCheck,
  UsersRound,
} from 'lucide-react';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import { CLIENT_LOGOS, COMPANY_INFO, PROCESS_STEPS, TESTIMONIALS } from '../data/mockData';
import bodyguardImg from '../assets/images/bodyguard_security_section_1784716099006.jpg';
import brandPosterImg from '../assets/images/brand_official_poster_1784802712788.jpg';
import brandJustdialImg from '../assets/images/brand_justdial_award_1784802699150.jpg';
import securityGuardImg from '../assets/images/service_security_guard_1784719456979.jpg';
import deepCleanImg from '../assets/images/service_deep_cleaning_1784719519754.jpg';
import facilityImg from '../assets/images/service_facility_management_1784719479580.jpg';
import vipImg from '../assets/images/service_vip_event_security_1784719506450.jpg';
import avRideImg from '../assets/images/av-ride-hero.png';
import avFoodImg from '../assets/images/av-food-hero.png';
import avNewsImg from '../assets/images/service-av-news.png';
import klinDeliveryImg from '../assets/images/service-cleaning-products-delivery.png';
import staffingImg from '../assets/images/service_corporate_staffing_1784719493174.jpg';

interface HomePreviewsProps {
  onSelectTab: (tab: string) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const Eyebrow: React.FC<{ children: React.ReactNode; light?: boolean }> = ({ children, light }) => (
  <div
    className={`inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-[11px] sm:tracking-[0.28em] ${
      light ? 'text-gold-soft' : 'text-gold'
    }`}
  >
    <span className="h-px w-8 bg-current opacity-70" />
    {children}
  </div>
);

const TiltCard: React.FC<{ children: React.ReactNode; className?: string; onClick?: () => void }> = ({
  children,
  className = '',
  onClick,
}) => {
  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(1100px) rotateX(${(0.5 - y) * 7}deg) rotateY(${(x - 0.5) * 9}deg) translateY(-4px)`;
  };
  const handleLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = '';
  };

  const tiltProps = {
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    className: `tilt-card cursor-pointer ${className}`,
  };

  if (onClick) {
    return (
      <button type="button" onClick={onClick} {...tiltProps}>
        {children}
      </button>
    );
  }

  return <div {...tiltProps}>{children}</div>;
};

export const HomePreviews: React.FC<HomePreviewsProps> = ({ onSelectTab, onOpenQuoteModal }) => {
  const featuredRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: featuredRef, offset: ['start end', 'end start'] });
  const featuredY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const [quoteIndex, setQuoteIndex] = React.useState(0);
  const current = TESTIMONIALS[quoteIndex];

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, []);

  const marqueeItems = [
    ...CLIENT_LOGOS.map((c) => c.name),
    'License 417/2025',
    'EPF / ESIC Ready',
    'Justdial 5.0',
    '24/7 Command Center',
  ];

  return (
    <div className="relative overflow-hidden bg-ink text-ivory">
      {/* Trust marquee */}
      <section className="border-b border-white/8 bg-ink py-4">
        <div className="mask-fade-x overflow-hidden">
          <div className="marquee-track flex items-center gap-10 pr-10">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-10 text-[10px] font-semibold uppercase tracking-[0.26em] text-ivory/55">
                <span className="text-gold">✦</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Tender readiness */}
      <section className="relative overflow-hidden border-b border-white/8 bg-gradient-to-b from-ink to-ink-2 px-4 py-12 sm:px-6 lg:px-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="mx-auto grid max-w-[96rem] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <Eyebrow light>Tenders and contracts</Eyebrow>
            <h2 className="font-display mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-tight text-ivory sm:text-4xl lg:text-5xl">
              Ready for tenders, contracts, and site visits.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory/70">
              We keep the important details ready: company license, staff verification, EPF/ESIC support, service scope, supervisor plan, and fast deployment for security, manpower, and cleaning work.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { icon: ClipboardCheck, title: 'Documents ready', desc: 'License, address, EPF, ESIC, and service details can be shared clearly.' },
              { icon: ShieldCheck, title: 'Verified staff', desc: 'Police-verified guards and trained workers with uniform and supervisor support.' },
              { icon: Timer, title: 'Clear service plan', desc: 'Shift timing, replacement staff, escalation contact, and reporting process.' },
              { icon: Building2, title: 'Works for many sites', desc: 'Apartments, schools, hospitals, offices, events, and industrial locations.' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-80px' }}
                  className="group rounded-2xl border border-white/8 bg-white/[0.045] p-5 transition-colors hover:border-gold/35 hover:bg-gold/[0.07]"
                >
                  <div className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/25 bg-gold/10 text-gold">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-ivory">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ivory/60">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-[96rem] flex-col gap-3 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ivory/45">
            Important for tenders: documents, supervision, replacement staff, and clear service scope
          </p>
          <button
            onClick={() => onOpenQuoteModal('Tender & Contract Requirement')}
            className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-ink sm:w-auto"
          >
            <span className="btn-gold absolute inset-0" />
            <span className="relative">Get contract quote</span>
            <ArrowRight className="relative h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* Featured protection */}
      <section ref={featuredRef} className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[96rem] items-stretch lg:grid-cols-12">
          <div className="relative h-64 overflow-hidden sm:h-[26rem] lg:col-span-7 lg:h-[34rem]">
            <motion.img
              src={bodyguardImg}
              alt="Ayudh Vikas executive protection detail"
              style={{ y: featuredY }}
              className="absolute inset-0 h-[120%] w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-ink/20 lg:to-ink" />
            <div className="grain-overlay opacity-30" />
          </div>

          <div className="relative z-10 flex flex-col justify-center px-4 py-9 sm:px-8 sm:py-12 lg:col-span-5 lg:-ml-16 lg:px-12">
            <Eyebrow light>Security service</Eyebrow>
            <h2 className="font-display mt-5 text-3xl font-medium leading-[1.05] tracking-tight text-ivory sm:text-5xl lg:text-[3rem]">
              Trained guards for sites, events, and people.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/72">
              Police-verified guards for gates, apartments, offices, events, VIP movement, crowd control, and night duty.
            </p>
            <p className="hidden">
              Elite, police-verified officers and close-protection specialists trained for VIP escort, crowd control, and perimeter command — the quiet confidence of a private house.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <button
                onClick={() => onOpenQuoteModal('VIP Executive Protection & Bodyguards')}
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-ink sm:w-auto"
              >
                <span className="btn-gold absolute inset-0" />
                <span className="relative">Request security service</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => onSelectTab('services')}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-ivory/90 hover:border-gold/40 sm:w-auto"
              >
                View services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services gallery */}
      <section className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[96rem]">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <Eyebrow light>Main services</Eyebrow>
              <h2 className="font-display mt-4 text-3xl font-medium tracking-tight text-ivory sm:text-4xl lg:text-5xl">
                Services for homes, apartments, offices, and industries.
              </h2>
            </div>
            <button
              onClick={() => onSelectTab('services')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold hover:text-gold-soft"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2">
            {[
              {
                img: securityGuardImg,
                title: 'Guarding & Security',
                desc: 'Police-verified guards for gates, offices, apartments, industries, and night duty.',
                tab: 'services',
                span: 'md:col-span-3 md:row-span-2 min-h-[22rem] md:min-h-[34rem]',
                eta: '24–48 Hr Deployment',
              },
              {
                img: deepCleanImg,
                title: 'AyudhKlin Deep Cleaning',
                desc: 'Deep cleaning for homes, offices, bathrooms, floors, and commercial spaces.',
                tab: 'ayudhklin-services',
                span: 'md:col-span-3 min-h-[16rem]',
                eta: 'Same Day / Next Day',
              },
              {
                img: facilityImg,
                title: 'Facility Management',
                desc: 'Housekeeping, maintenance support, daily supervision, and site coordination.',
                tab: 'services',
                span: 'md:col-span-3 min-h-[16rem]',
                eta: 'Dedicated SLA Manager',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                className={card.span}
              >
                <TiltCard
                  onClick={() => onSelectTab(card.tab)}
                  className="group relative h-full w-full overflow-hidden rounded-[1.6rem] text-left"
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_80%,rgba(16,185,129,0.22),transparent_55%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8">
                    <span className="rounded-full border border-gold/30 bg-ink/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft backdrop-blur-md">
                      {card.eta}
                    </span>
                    <h3 className="font-display mt-3 text-2xl font-medium text-ivory sm:text-3xl">{card.title}</h3>
                    <p className="mt-2 max-w-md text-base leading-relaxed text-ivory/75">{card.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                      View service
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <TiltCard
              onClick={() => onSelectTab('services')}
              className="group relative min-h-[14rem] overflow-hidden rounded-[1.6rem] text-left"
            >
              <img src={vipImg} alt="VIP event security" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl font-medium text-ivory">Event & VIP security</h3>
                <p className="mt-1 text-base text-ivory/75">Security for events, VIP movement, entry checking, and crowd control.</p>
              </div>
            </TiltCard>
            <TiltCard
              onClick={() => onSelectTab('services')}
              className="group relative min-h-[14rem] overflow-hidden rounded-[1.6rem] text-left"
            >
              <img src={staffingImg} alt="Corporate manpower" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl font-medium text-ivory">Corporate manpower</h3>
                <p className="mt-1 text-base text-ivory/75">Staff for reception, pantry, housekeeping, office support, and daily operations.</p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="relative border-y border-white/8 bg-ink-2 px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[96rem]">
          <div className="mb-12 max-w-2xl">
            <Eyebrow light>Ayudh Vikas services</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-medium tracking-tight text-ivory sm:text-4xl lg:text-5xl">
              One company, many useful services.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ivory/70">
              Security is our main service. We are also building support for manpower, cleaning products, rides, food delivery, and local news.
            </p>
            <p className="hidden">
              Security remains the core. Around it we are building the daily life of Warangal — ride, food, jobs, news, and professional care.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {[
              { img: securityGuardImg, title: 'AV Security', status: 'Live', desc: 'Security guards and event protection.', action: () => onSelectTab('services') },
              { img: klinDeliveryImg, title: 'AyudhKlin', status: 'Live', desc: 'Deep cleaning and hygiene product delivery.', action: () => onSelectTab('ayudhklin-products') },
              { img: staffingImg, title: 'AV Manpower', status: 'Live', desc: 'Jobs and staff support for businesses.', href: 'https://ayudh-vikas-manpower.vercel.app' },
              { img: avRideImg, title: 'AV Ride', status: 'Coming soon', desc: 'Trusted local mobility for Warangal.', action: () => onSelectTab('av-ride') },
              { img: avFoodImg, title: 'AV Food', status: 'Coming soon', desc: 'Food ordering and delivery in Warangal.', action: () => onSelectTab('av-food') },
              { img: avNewsImg, title: 'AV Life News', status: 'Coming soon', desc: 'Local stories from Hanamkonda to Kazipet.', action: () => onSelectTab('about-us') },
            ].map((item, i) => (
              <motion.button
                key={item.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                onClick={() => (item.href ? window.open(item.href, '_blank', 'noopener,noreferrer') : item.action?.())}
                className="group overflow-hidden rounded-[1.4rem] border border-white/8 bg-ink text-left transition-colors hover:border-gold/35"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
                  <span className={`absolute right-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                    item.status === 'Live'
                      ? 'border border-gold/40 bg-ink/70 text-gold-soft'
                      : 'border border-white/15 bg-ink/70 text-ivory/70'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <div className="flex items-end justify-between gap-3 p-5">
                  <div>
                    <h3 className="font-display text-2xl font-medium text-ivory">{item.title}</h3>
                    <p className="mt-1 text-base leading-relaxed text-ivory/68">{item.desc}</p>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 text-gold transition-all group-hover:border-gold/50 group-hover:bg-gold group-hover:text-ink">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="relative px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-gold/8 blur-3xl" />
        <div className="mx-auto max-w-[96rem]">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <Eyebrow light>Why clients choose us</Eyebrow>
              <h2 className="font-display mt-4 text-3xl font-medium tracking-tight text-ivory sm:text-4xl lg:text-5xl">
                Clear service, verified staff, and quick support.
              </h2>
            </div>
            <button
              onClick={() => onSelectTab('why-us')}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-ivory hover:border-gold/40"
            >
              Know more
              <ArrowRight className="h-4 w-4 text-gold" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[1.6rem] border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { n: '01', icon: UserCheck, title: '100% Police Verified', desc: 'Address check, biometric record, and police verification before duty.' },
              { n: '02', icon: BadgeCheck, title: 'EPF / ESIC support', desc: 'EPF, ESIC, and wage details can be shared clearly for billing.' },
              { n: '03', icon: Smartphone, title: 'GPS patrol tracking', desc: 'QR and GPS checkpoints help track duty and patrol activity.' },
              { n: '04', icon: Siren, title: '24/7 Standby Team', desc: 'Replacement staff and emergency support are available when needed.' },
              { n: '05', icon: ClipboardCheck, title: 'Transparent ledgers', desc: 'Upfront pricing. Statutory, management, and equipment — itemised.' },
              { n: '06', icon: Phone, title: 'Direct support person', desc: 'You get a direct contact person for follow-up and site coordination.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.n}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="group bg-ink p-7 transition-colors hover:bg-ink-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl text-gold/80">{item.n}</span>
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-ivory">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-ivory/65">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="relative overflow-hidden border-y border-white/8 bg-gradient-to-b from-ink-2 to-ink px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[96rem]">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <Eyebrow light>License and proof</Eyebrow>
              <h2 className="font-display mt-4 text-3xl font-medium tracking-tight text-ivory sm:text-4xl lg:text-5xl">
                Registered, verified, and ready for work.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ivory/70">
                Government licensed under <span className="text-ivory">Reg. No. 417/2025, Telangana</span>. Statutory EPF/ESIC compliance from Warangal HQ.
              </p>
            </div>
            <div className="grid w-full grid-cols-3 gap-2 sm:w-auto sm:gap-3">
              {[
                { k: 'License', v: '417/2025' },
                { k: 'Headquarters', v: 'Warangal' },
                { k: 'Justdial', v: '5.0 ★' },
              ].map((chip) => (
                <div key={chip.k} className="rounded-2xl border border-gold/20 bg-gold/8 px-2 py-3 text-center sm:px-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">{chip.k}</p>
                  <p className="mt-1 font-display text-base text-ivory sm:text-xl">{chip.v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid overflow-hidden rounded-[1.6rem] border border-white/10 lg:grid-cols-12">
            <div className="relative bg-navy p-6 sm:p-8 lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img src={brandPosterImg} alt="Ayudh Vikas official operations poster" className="h-64 w-full object-cover object-top" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <img src={brandJustdialImg} alt="Justdial Users Choice award" className="h-24 w-full rounded-xl object-cover" />
                <img src={securityGuardImg} alt="On-ground security operations" className="h-24 w-full rounded-xl object-cover" />
              </div>
              <p className="mt-6 font-display text-2xl leading-snug text-ivory">
                One registered team for security, cleaning, staffing, and facility care.
              </p>
              <p className="mt-2 text-sm text-ivory/60"># 12-8-287, KM Complex, Hunter Road, Warangal.</p>
            </div>

            <div className="bg-ink-2 p-6 sm:p-8 lg:col-span-7">
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { icon: ShieldCheck, title: 'Security guarding', desc: 'Manned guarding, gate control, VIP/event security, and night patrol.' },
                  { icon: Sparkles, title: 'AyudhKlin cleaning', desc: 'Homes, offices, commercial spaces, and post-construction restoration.' },
                  { icon: Building2, title: 'Facility support', desc: 'Housekeeping, maintenance coordination, and daily site discipline.' },
                  { icon: UsersRound, title: 'Corporate manpower', desc: 'Screened support staff for reception, pantry, and operations.' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-2xl border border-white/8 bg-ink p-5">
                      <Icon className="h-5 w-5 text-gold" />
                      <h4 className="mt-3 text-base font-semibold text-ivory">{item.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-ivory/60">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="flex items-center gap-2 rounded-xl border border-gold/20 bg-gold/8 px-3 py-3">
                  <ClipboardCheck className="h-4 w-4 text-gold" />
                  <p className="text-xs font-semibold text-ivory">EPF / ESIC Ready</p>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-white/8 bg-ink px-3 py-3">
                  <Timer className="h-4 w-4 text-gold" />
                  <p className="text-xs font-semibold text-ivory">Fast Deployment</p>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-white/8 bg-ink px-3 py-3">
                  <Siren className="h-4 w-4 text-gold" />
                  <p className="text-xs font-semibold text-ivory">24/7 Support</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => onSelectTab('contact')}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-ivory hover:border-gold/40"
                >
                  Verify the office
                </button>
                <button
                  onClick={() => onSelectTab('services')}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-ink"
                >
                  <span className="btn-gold absolute inset-0" />
                  <span className="relative">Explore services</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[96rem]">
          <div className="mb-12 max-w-2xl">
            <Eyebrow light>How service starts</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-medium tracking-tight text-ivory sm:text-4xl lg:text-5xl">
              From site visit to staff deployment in simple steps.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative border-t border-gold/40 pt-6"
              >
                <p className="font-display text-5xl text-gold/70">{step.number}</p>
                <h3 className="mt-4 text-lg font-semibold text-ivory">{step.title}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold">{step.subtitle}</p>
                <p className="mt-3 text-base leading-relaxed text-ivory/65">{step.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10">
            <button
              onClick={() => onOpenQuoteModal()}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold text-ink"
            >
              <span className="btn-gold absolute inset-0" />
              <span className="relative">Start service request</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden border-y border-white/8 bg-ink-2 px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow light>Client feedback</Eyebrow>
          <h2 className="font-display mx-auto mt-4 max-w-2xl text-3xl font-medium tracking-tight text-ivory sm:text-4xl lg:text-5xl">
            What clients say about our service.
          </h2>

          <div className="relative mt-12 min-h-[12rem] sm:min-h-[16rem]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.5 }}
                className="font-display text-xl italic leading-snug text-ivory sm:text-3xl"
              >
                “{current.quote}”
              </motion.blockquote>
            </AnimatePresence>
            <div className="mt-8 flex flex-col items-center gap-2">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold" />
                ))}
              </div>
              <p className="text-sm font-semibold text-ivory">{current.name}</p>
              <p className="text-xs text-ivory/50">
                {current.designation} · {current.company}
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">{current.metrics}</p>
            </div>
            <div className="mt-8 flex justify-center gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setQuoteIndex(i)}
                  aria-label={`Show testimonial from ${t.name}`}
                  className={`h-1.5 rounded-full transition-all ${i === quoteIndex ? 'w-8 bg-gold' : 'w-3 bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + Contact */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[96rem] gap-4 lg:grid-cols-2">
          <div className="flex flex-col justify-between rounded-[1.6rem] border border-white/8 bg-gradient-to-br from-navy via-ink to-ink p-5 sm:p-8">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                <HelpCircle className="h-3.5 w-3.5" />
                Operations FAQ
              </div>
              <h3 className="font-display mt-4 text-3xl font-medium text-ivory">Questions of SLA, billing, and proof.</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/60">
                Deployment windows, police verification, substitute procedures, and statutory remittance — answered without theatre.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-xs text-ivory/45">Clear policies. Named owners.</span>
              <button
                onClick={() => onSelectTab('faq')}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ivory px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-ink sm:w-auto"
              >
                Read the answers
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[1.6rem] border border-gold/20 bg-gold/5 p-5 sm:p-8">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                <MapPin className="h-3.5 w-3.5" />
                Warangal headquarters
              </div>
              <h3 className="font-display mt-4 text-3xl font-medium text-ivory">A direct line. Always answered.</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/70">
                Km Complex, Hunter Road. Call <strong className="text-ivory">{COMPANY_INFO.phoneDisplay}</strong> or request a private quote.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-3 border-t border-gold/20 pt-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
              <span className="text-xs text-ivory/50">Response window under 15 minutes</span>
              <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="rounded-full border border-white/15 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-ivory hover:border-gold/40"
                >
                  Get quote
                </button>
                <button
                  onClick={() => onSelectTab('contact')}
                  className="rounded-full bg-ivory px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-ink"
                >
                  Visit contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden">
        <img src={vipImg} alt="" className="absolute inset-0 h-full w-full object-cover brightness-[0.35]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <div className="grain-overlay" />
        <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-28">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold sm:text-[11px] sm:tracking-[0.32em]">Ready when you are</p>
          <h2 className="font-display mt-4 text-3xl font-medium tracking-tight text-ivory sm:text-6xl">
            Deployed in twenty-four hours. Remembered for a decade.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm text-ivory/70">
            Brief the operations desk. We will return a tailored SLA, manpower plan, and on-site start date.
          </p>
          <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <button
              onClick={() => onOpenQuoteModal()}
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold text-ink sm:w-auto"
            >
              <span className="btn-gold absolute inset-0" />
              <span className="relative">Request 24-hour quote</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium text-ivory hover:border-gold/50 sm:w-auto"
            >
              <Phone className="h-4 w-4 text-gold" />
              {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
