import React from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CarTaxiFront,
  CheckCircle2,
  ClipboardCheck,
  HelpCircle,
  MapPin,
  Newspaper,
  Phone,
  ShieldCheck,
  Siren,
  Sparkles,
  SprayCan,
  Star,
  Timer,
  Utensils,
  UsersRound,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { CLIENT_LOGOS, COMPANY_INFO, PROCESS_STEPS, TESTIMONIALS } from '../data/mockData';
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
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const SectionLabel: React.FC<{ children: React.ReactNode; tone?: string }> = ({ children, tone = 'text-blue-700 bg-blue-50 border-blue-200' }) => (
  <span className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] ${tone}`}>
    {children}
  </span>
);

const serviceCards = [
  {
    title: 'Security Guards',
    desc: 'Police-verified guards for apartments, offices, schools, industries and events.',
    img: securityGuardImg,
    tab: 'services',
    accent: 'bg-blue-700',
    badge: 'Live Service',
  },
  {
    title: 'Deep Cleaning',
    desc: 'Home, office, bathroom, floor and commercial cleaning with trained AyudhKlin teams.',
    img: deepCleanImg,
    tab: 'ayudhklin-services',
    accent: 'bg-orange-500',
    badge: 'AyudhKlin',
  },
  {
    title: 'Facility Support',
    desc: 'Housekeeping, maintenance coordination, supervisors and daily site discipline.',
    img: facilityImg,
    tab: 'services',
    accent: 'bg-cyan-600',
    badge: 'Managed Sites',
  },
  {
    title: 'Corporate Manpower',
    desc: 'Staffing support for reception, pantry, housekeeping and daily office operations.',
    img: staffingImg,
    tab: 'services',
    accent: 'bg-red-600',
    badge: 'AV Jobs',
  },
];

const ecosystemCards = [
  { title: 'AV Security', desc: 'Guards and event protection.', icon: ShieldCheck, img: securityGuardImg, color: 'bg-blue-700', tab: 'services', status: 'Live' },
  { title: 'AyudhKlin', desc: 'Cleaning products and services.', icon: SprayCan, img: klinDeliveryImg, color: 'bg-cyan-600', tab: 'ayudhklin-products', status: 'Live' },
  { title: 'AV Manpower', desc: 'Jobs and staffing support.', icon: BriefcaseBusiness, img: staffingImg, color: 'bg-red-600', href: 'https://ayudh-vikas-manpower.vercel.app', status: 'Live' },
  { title: 'AV Ride', desc: 'Trusted local rides.', icon: CarTaxiFront, img: avRideImg, color: 'bg-violet-700', tab: 'av-ride', status: 'Coming Soon' },
  { title: 'AV Food', desc: 'Warangal food delivery.', icon: Utensils, img: avFoodImg, color: 'bg-orange-500', tab: 'av-food', status: 'Coming Soon' },
  { title: 'AV Life News', desc: 'Local news and updates.', icon: Newspaper, img: avNewsImg, color: 'bg-slate-900', tab: 'about-us', status: 'Coming Soon' },
];

const tenderPoints = [
  { title: 'License Ready', desc: 'Reg. No. 417/2025, Telangana.', icon: BadgeCheck, color: 'bg-blue-700' },
  { title: 'Verified Staff', desc: 'Police verification and uniformed deployment.', icon: ShieldCheck, color: 'bg-red-600' },
  { title: 'Clear Scope', desc: 'Shift timing, manpower count and site duties.', icon: ClipboardCheck, color: 'bg-orange-500' },
  { title: 'Quick Response', desc: 'Support desk and replacement coordination.', icon: Timer, color: 'bg-violet-700' },
];

const whyItems = [
  { title: 'Single local team', desc: 'Security, cleaning, manpower and facility support coordinated from Warangal.', icon: UsersRound, color: 'text-blue-700 bg-blue-50 border-blue-200' },
  { title: 'Easy to understand', desc: 'Simple service details, clear rates, readable documents and direct contact.', icon: ClipboardCheck, color: 'text-orange-800 bg-orange-50 border-orange-200' },
  { title: 'Good for contracts', desc: 'License, staff profile, supervision plan and statutory details stay ready.', icon: Building2, color: 'text-red-700 bg-red-50 border-red-200' },
  { title: 'Fast site support', desc: 'Replacement staff, escalation desk and local follow-up for daily operations.', icon: Siren, color: 'text-violet-800 bg-violet-50 border-violet-200' },
];

export const HomePreviews: React.FC<HomePreviewsProps> = ({ onSelectTab, onOpenQuoteModal }) => {
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
    <div className="relative overflow-hidden bg-white text-slate-950">
      <section className="border-y border-slate-200 bg-slate-950 py-4 text-white">
        <div className="mask-fade-x overflow-hidden">
          <div className="marquee-track flex items-center gap-10 pr-10">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.22em] text-white/75">
                <span className={i % 4 === 0 ? 'text-blue-300' : i % 4 === 1 ? 'text-orange-300' : i % 4 === 2 ? 'text-red-300' : 'text-cyan-300'}>
                  |
                </span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[96rem] gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
            <SectionLabel tone="border-orange-300/40 bg-orange-300/10 text-orange-200">Tenders and contracts</SectionLabel>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
              Contract-ready service details without confusing words.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/75">
              We keep license, verification, staff count, shift plan, supervisor contact and billing details ready for tenders, apartments and office contracts.
            </p>
            <button
              onClick={() => onOpenQuoteModal('Tender & Contract Requirement')}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-slate-950 sm:w-auto"
            >
              Prepare Contract Quote
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {tenderPoints.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl text-white ${item.color}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-black text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8ff] px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[96rem]">
          <div className="mb-9 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <SectionLabel>Main services</SectionLabel>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Clear services with different colors, images and easy text.
              </h2>
            </div>
            <button
              onClick={() => onSelectTab('services')}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-black text-white sm:w-auto"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((card, index) => (
              <motion.button
                key={card.title}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                onClick={() => onSelectTab(card.tab)}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={card.img} alt={card.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-x-0 top-0 h-2 bg-slate-950" />
                  <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-black text-white ${card.accent}`}>
                    {card.badge}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-black text-slate-950">{card.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{card.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-blue-700">
                    Know More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[96rem]">
          <div className="mb-9 max-w-3xl">
            <SectionLabel tone="border-red-200 bg-red-50 text-red-700">Ayudh Vikas ecosystem</SectionLabel>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              More than one service, but one recognizable brand.
            </h2>
            <p className="mt-4 text-base font-semibold leading-8 text-slate-600">
              Security and deep cleaning are the main focus. AV Ride, AV Food and AV Life News are shown clearly as coming soon where relevant.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {ecosystemCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.title}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  onClick={() => (item.href ? window.open(item.href, '_blank', 'noopener,noreferrer') : onSelectTab(item.tab))}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition-transform hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                    <span className={`absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl text-white ${item.color}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase text-slate-950">
                      {item.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4 p-5">
                    <div>
                      <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
                      <p className="mt-1 text-sm font-semibold text-slate-600">{item.desc}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-700" />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-14 text-white sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[96rem]">
          <div className="mb-9 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <SectionLabel tone="border-cyan-300/40 bg-cyan-300/10 text-cyan-200">Why clients choose us</SectionLabel>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Practical service points that clients can understand quickly.
              </h2>
            </div>
            <button
              onClick={() => onSelectTab('why-us')}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-black text-white hover:bg-white/10 sm:w-auto"
            >
              Why Ayudh Vikas
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {whyItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className={`rounded-3xl border p-5 ${item.color}`}
                >
                  <Icon className="h-6 w-6" />
                  <h3 className="mt-4 text-lg font-black text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[96rem] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-950/5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="bg-slate-950 p-5 text-white sm:p-8">
            <SectionLabel tone="border-orange-300/40 bg-orange-300/10 text-orange-200">License and proof</SectionLabel>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
              Registered, verified and ready for site visits.
            </h2>
            <p className="mt-4 text-base font-semibold leading-8 text-white/70">
              Govt. licensed under Reg. No. 417/2025, Telangana. Headquartered at KM Complex, Hunter Road, Warangal.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {[
                ['License', '417/2025'],
                ['Area', 'Warangal'],
                ['Support', '24/7'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-white/10 px-3 py-3 text-center">
                  <p className="text-[10px] font-black uppercase text-white/55">{label}</p>
                  <p className="mt-1 text-sm font-black text-white sm:text-base">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-8">
            <img src={brandPosterImg} alt="Ayudh Vikas official operations poster" className="h-72 w-full rounded-2xl object-cover object-top sm:h-full" />
            <div className="grid gap-4">
              <img src={brandJustdialImg} alt="Justdial Users Choice award" className="h-40 w-full rounded-2xl object-cover" />
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <Sparkles className="h-6 w-6 text-blue-700" />
                <h3 className="mt-3 text-lg font-black text-slate-950">One registered team</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                  Security, cleaning, staffing and facility care handled with local coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff7ed] px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[96rem]">
          <div className="mb-9 max-w-3xl">
            <SectionLabel tone="border-orange-200 bg-white text-orange-700">How service starts</SectionLabel>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              From first call to staff deployment in simple steps.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="rounded-3xl border border-orange-200 bg-white p-5 shadow-sm"
              >
                <span className="text-4xl font-black text-orange-500">{step.number}</span>
                <h3 className="mt-4 text-lg font-black text-slate-950">{step.title}</h3>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-blue-700">{step.subtitle}</p>
                <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[96rem] gap-5 lg:grid-cols-[1fr_0.75fr]">
          <div className="rounded-3xl bg-blue-700 p-6 text-white sm:p-8">
            <SectionLabel tone="border-white/30 bg-white/15 text-white">Client feedback</SectionLabel>
            <div className="relative mt-8 min-h-[12rem]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={current.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45 }}
                  className="text-2xl font-black leading-snug sm:text-4xl"
                >
                  "{current.quote}"
                </motion.blockquote>
              </AnimatePresence>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex text-orange-300">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-300" />
                  ))}
                </div>
                <p className="mt-2 text-sm font-black">{current.name}</p>
                <p className="text-xs font-semibold text-white/70">{current.designation} - {current.company}</p>
              </div>
              <div className="flex gap-2">
                {TESTIMONIALS.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setQuoteIndex(index)}
                    aria-label={`Show testimonial from ${item.name}`}
                    className={`h-2 rounded-full transition-all ${index === quoteIndex ? 'w-8 bg-white' : 'w-2 bg-white/35'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-3xl border border-red-200 bg-red-50 p-6">
              <HelpCircle className="h-6 w-6 text-red-700" />
              <h3 className="mt-4 text-2xl font-black text-slate-950">Have questions?</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                Read about billing, verification, substitute staff, site visits and deployment.
              </p>
              <button onClick={() => onSelectTab('faq')} className="mt-5 inline-flex items-center gap-2 text-sm font-black text-red-700">
                Open FAQ
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="rounded-3xl border border-violet-200 bg-violet-50 p-6">
              <MapPin className="h-6 w-6 text-violet-700" />
              <h3 className="mt-4 text-2xl font-black text-slate-950">Warangal HQ</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                Call {COMPANY_INFO.phoneDisplay} or request an on-site assessment.
              </p>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <button onClick={() => onOpenQuoteModal()} className="rounded-xl bg-violet-700 px-4 py-3 text-sm font-black text-white">
                  Get Quote
                </button>
                <a href={`tel:${COMPANY_INFO.phone}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-black text-violet-800">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={vipImg} alt="" className="absolute inset-0 h-full w-full object-cover brightness-[0.48]" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />
        <div className="relative mx-auto max-w-[96rem] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-10">
          <div className="max-w-3xl">
            <SectionLabel tone="border-white/25 bg-white/10 text-white">Ready when you are</SectionLabel>
            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Tell us the site. We will plan the manpower.
            </h2>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-white/75">
              Share your location, duty requirement and service type. Ayudh Vikas will respond with a clear quote and deployment plan.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button onClick={() => onOpenQuoteModal()} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-slate-950">
                Request Quote
                <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => onSelectTab('contact')} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-black text-white hover:bg-white/10">
                Contact Office
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
