import React from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CarTaxiFront,
  Check,
  Clock,
  Headphones,
  Newspaper,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Utensils,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem } from '../types';
import ecosystemHeroImg from '../assets/images/ayudh-ecosystem-hero.png';
import securityImg from '../assets/images/service_security_guard_1784719456979.jpg';
import staffingImg from '../assets/images/service_corporate_staffing_1784719493174.jpg';
import deepCleaningImg from '../assets/images/service_deep_cleaning_1784719519754.jpg';
import avFoodImg from '../assets/images/av-food-hero.png';
import avRideImg from '../assets/images/av-ride-hero.png';
import avNewsImg from '../assets/images/service-av-news.png';
import cleaningProductsImg from '../assets/images/service-cleaning-products-delivery.png';

interface ServicesBentoProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

const servicePillClass = 'inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-extrabold text-white backdrop-blur-md';

export const ServicesBento: React.FC<ServicesBentoProps> = ({
  onSelectService,
  onOpenQuoteModal,
}) => {
  const operationalCatalog = SERVICES_DATA.slice(0, 6);

  const ecosystemServices = [
    {
      title: 'Security Services',
      eyebrow: 'Verified guarding',
      desc: 'Police-verified guards, executive protection, gate control, night patrols, and emergency response support for homes, offices, events, and industrial sites.',
      image: securityImg,
      icon: ShieldCheck,
      accent: 'text-blue-800',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      bullets: ['Manned guarding', 'VIP & event security', '24/7 supervisor checks'],
      action: 'Request security quote',
      onAction: () => onOpenQuoteModal('Security Services'),
    },
    {
      title: 'Jobs & Manpower',
      eyebrow: 'AV Manpower',
      desc: 'Staffing support for job seekers and businesses, including front-office staff, office boys, pantry helpers, field support, and verified operational manpower.',
      image: staffingImg,
      icon: BriefcaseBusiness,
      accent: 'text-slate-800',
      bg: 'bg-slate-100',
      border: 'border-slate-200',
      bullets: ['Job matching support', 'Corporate staffing', 'Verified manpower pipeline'],
      action: 'Explore manpower',
      href: 'https://ayudh-vikas-manpower.vercel.app',
    },
    {
      title: 'AV News',
      eyebrow: 'AV Life local updates',
      desc: 'A local media wing planned for community stories, public updates, event coverage, civic awareness, business features, and regional video news.',
      image: avNewsImg,
      icon: Newspaper,
      accent: 'text-red-700',
      bg: 'bg-red-50',
      border: 'border-red-200',
      bullets: ['Local reporting', 'Event coverage', 'Community updates'],
      action: 'Register media interest',
      onAction: () => onOpenQuoteModal('AV News / AV Life'),
      soon: true,
    },
    {
      title: 'AV Food Delivery',
      eyebrow: 'Coming soon',
      desc: 'Food delivery and office meal ordering for Warangal teams, homes, and events, with scheduled lunch boxes, bulk meals, and hygienic delivery workflows.',
      image: avFoodImg,
      icon: Utensils,
      accent: 'text-red-700',
      bg: 'bg-red-50',
      border: 'border-red-200',
      bullets: ['Office lunch boxes', 'Bulk food orders', 'Scheduled local delivery'],
      action: 'Preview AV Food',
      href: '#av-food',
      soon: true,
    },
    {
      title: 'House Cleaning Products Delivery',
      eyebrow: 'AyudhKlin supplies',
      desc: 'Doorstep delivery for home hygiene products, floor cleaners, sprays, microfiber cloths, brushes, and cleaning essentials supported by AyudhKlin know-how.',
      image: cleaningProductsImg,
      icon: PackageCheck,
      accent: 'text-emerald-700',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      bullets: ['Cleaning kits', 'Home hygiene supplies', 'Doorstep delivery'],
      action: 'Request product supply',
      onAction: () => onOpenQuoteModal('House Cleaning Products Delivery'),
    },
    {
      title: 'AV Ride',
      eyebrow: 'Coming soon',
      desc: 'A safer local ride experience for Warangal, Hanamkonda, and Kazipet with verified drivers, managed pickup flows, and women-safety-focused travel planning.',
      image: avRideImg,
      icon: CarTaxiFront,
      accent: 'text-blue-800',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      bullets: ['Verified drivers', 'Women safety focus', 'Local route familiarity'],
      action: 'Preview AV Ride',
      href: '#av-ride',
      soon: true,
    },
  ];

  const handleCardAction = (service: typeof ecosystemServices[number]) => {
    if (service.onAction) {
      service.onAction();
    }
  };

  return (
    <section id="services" className="bg-slate-50">
      <div className="relative overflow-hidden bg-slate-950 text-white">
        <img
          src={ecosystemHeroImg}
          alt="Ayudh Vikas service ecosystem"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/82 to-slate-950/20" />
        <div className="relative mx-auto grid max-w-[96rem] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.82fr_1fr] lg:py-16 xl:px-8 2xl:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1.5 text-xs font-extrabold text-emerald-100">
              <BadgeCheck className="h-3.5 w-3.5" />
              Ayudh Vikas Service Ecosystem
            </div>
            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              One regional platform for protection, work, daily essentials, mobility, meals, and media.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              The services page now brings together the expanded Ayudh Vikas portfolio, from core security and manpower operations to upcoming AV Food, AV Ride, AV News, and cleaning-product delivery.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                ['Security', ShieldCheck],
                ['Jobs', BriefcaseBusiness],
                ['AV News', Newspaper],
                ['AV Food', Utensils],
                ['Cleaning Products', PackageCheck],
                ['AV Ride', CarTaxiFront],
              ].map(([label, Icon]) => {
                const ServiceIcon = Icon as typeof ShieldCheck;

                return (
                  <span key={label as string} className={servicePillClass}>
                    <ServiceIcon className="h-3.5 w-3.5 text-emerald-300" />
                    {label as string}
                  </span>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-[96rem] px-4 py-12 sm:px-6 lg:py-16 xl:px-8 2xl:px-10">
        <div className="grid gap-5 lg:grid-cols-3">
          {ecosystemServices.map((service, index) => {
            const Icon = service.icon;
            const isWide = index === 0 || index === 1;
            const cardClass = isWide ? 'lg:col-span-3 xl:col-span-1' : '';

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.2) }}
                className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/10 ${cardClass}`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className={`grid h-10 w-10 place-items-center rounded-xl ${service.bg} ${service.accent} border ${service.border} shadow-sm`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    {service.soon && (
                      <span className="rounded-full bg-amber-300 px-2.5 py-1 text-[10px] font-black uppercase text-slate-950">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[11px] font-extrabold uppercase text-white/70">{service.eyebrow}</p>
                    <h3 className="mt-1 text-2xl font-black text-white">{service.title}</h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-sm leading-relaxed text-slate-600">{service.desc}</p>
                  <div className="mt-5 grid gap-2">
                    {service.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <Check className={`h-4 w-4 ${service.accent}`} />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                    <span className="text-[11px] font-bold uppercase text-slate-400">Warangal focused</span>
                    {service.href ? (
                      <a
                        href={service.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-slate-950 px-3.5 py-2 text-xs font-extrabold text-white hover:bg-slate-800"
                      >
                        <span>{service.action}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <button
                        onClick={() => handleCardAction(service)}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-slate-950 px-3.5 py-2 text-xs font-extrabold text-white hover:bg-slate-800"
                      >
                        <span>{service.action}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 grid gap-5 border-y border-slate-200 py-8 md:grid-cols-4">
          {[
            ['24/7 desk', 'Emergency support for security and field operations', Headphones],
            ['Verified teams', 'Identity checks and statutory compliance for core manpower', BadgeCheck],
            ['Fast launch', 'Quick onboarding for quotes, staffing, cleaning, and delivery pilots', Zap],
            ['Local zones', 'Warangal, Hanamkonda, Kazipet, Hunter Road, and nearby areas', Clock],
          ].map(([title, desc, Icon]) => {
            const StatIcon = Icon as typeof ShieldCheck;

            return (
              <div key={title as string} className="flex gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-blue-900 shadow-sm ring-1 ring-slate-200">
                  <StatIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-black text-slate-950">{title as string}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-slate-600">{desc as string}</span>
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-14">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase text-blue-800">Detailed operations catalog</p>
              <h3 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Core service packages</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                For security, cleaning, facility support, and staffing, these packages include detailed specifications and can still be opened for service-level details.
              </p>
            </div>
            <button
              onClick={() => onOpenQuoteModal('Integrated Service Package')}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-blue-900 px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-red-900/20"
            >
              <Sparkles className="h-4 w-4 text-amber-300" />
              <span>Request combined quote</span>
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {operationalCatalog.map((service) => (
              <article key={service.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-blue-300 hover:shadow-md">
                <div className="flex gap-4">
                  {service.image && (
                    <img src={service.image} alt={service.title} className="h-24 w-28 shrink-0 rounded-xl object-cover" />
                  )}
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-black uppercase text-slate-500">
                        {service.badge}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase text-amber-700">
                        <Clock className="h-3 w-3" />
                        {service.specs.deploymentTime}
                      </span>
                    </div>
                    <h4 className="mt-2 text-base font-black text-slate-950">{service.title}</h4>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-600">{service.shortDesc}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-black text-blue-900 hover:text-blue-700"
                  >
                    View details
                  </button>
                  <button
                    onClick={() => onOpenQuoteModal(service.id)}
                    className="inline-flex items-center gap-1 rounded-lg bg-blue-950 px-3 py-2 text-xs font-black text-white hover:bg-blue-900"
                  >
                    Quote
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
