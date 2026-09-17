import React, { useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  CarTaxiFront,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Utensils,
  Headphones,
  Route,
  Share2,
  UserCheck,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import avRideHero from '../assets/images/av-ride-hero.png';
import avFoodHero from '../assets/images/av-food-hero.png';
import avRideSafety from '../assets/images/av-ride-safety.png';

interface ComingSoonAppProps {
  type: 'ride' | 'food';
  onSelectTab: (tab: string) => void;
  onOpenQuoteModal: () => void;
}

const warangalLocations = [
  'Hunter Road, Warangal',
  'Hanamkonda Bus Station',
  'Kazipet Railway Station',
  'NIT Warangal',
  'Warangal Fort Road',
];

const rideVehicles = [
  { name: 'City Mini', fare: 189, eta: '8 min' },
  { name: 'Prime Sedan', fare: 249, eta: '11 min' },
  { name: 'Team SUV', fare: 399, eta: '14 min' },
];

const foodMenus = [
  { name: 'Warangal Corporate Lunch Box', price: 149, detail: 'Rice, dal, curry, curd, pickle' },
  { name: 'Hyderabadi Biryani Pack', price: 229, detail: 'Biryani, raita, salan, sweet' },
  { name: 'Executive Tiffin Combo', price: 99, detail: 'Idli, dosa, vada, chutneys' },
];

const rideDifferentiators = [
  {
    title: 'Women safety-first rides',
    desc: 'Planned safety checks, trusted pickup points, and respectful driver conduct for women passengers and evening travel.',
    icon: ShieldCheck,
  },
  {
    title: 'Verified local drivers',
    desc: 'Driver onboarding is designed around identity checks, local references, and Ayudh Vikas operating standards.',
    icon: UserCheck,
  },
  {
    title: 'Warangal route familiarity',
    desc: 'Built for Hunter Road, Hanamkonda, Kazipet, NIT Warangal, Fort Road, offices, schools, and local guest pickup needs.',
    icon: Route,
  },
  {
    title: 'Trip sharing for families',
    desc: 'Ride details are planned to be easy to share with family, office admins, or site supervisors before the vehicle moves.',
    icon: Share2,
  },
  {
    title: 'Operations desk support',
    desc: 'Ayudh Vikas support is intended to help with commute coordination instead of leaving passengers only to app automation.',
    icon: Headphones,
  },
];

const appContent = {
  ride: {
    badge: 'AV Ride',
    title: 'Book trusted rides across Warangal',
    subtitle: 'A coming-soon ride booking experience for staff commute, guest pickup, school drops, and managed city travel.',
    Icon: CarTaxiFront,
    hero: avRideHero,
    accent: 'text-blue-700',
    softBg: 'bg-blue-50',
    border: 'border-blue-200',
    primary: 'from-blue-950 to-emerald-600',
    footerBg: 'bg-blue-950',
  },
  food: {
    badge: 'AV Food',
    title: 'Order office meals in Warangal',
    subtitle: 'A coming-soon food ordering experience for office lunches, team meals, catering packs, and scheduled delivery.',
    Icon: Utensils,
    hero: avFoodHero,
    accent: 'text-red-700',
    softBg: 'bg-red-50',
    border: 'border-red-200',
    primary: 'from-red-600 to-blue-950',
    footerBg: 'bg-red-950',
  },
};

const ComingSoonHeader: React.FC<{ type: 'ride' | 'food'; onSelectTab: (tab: string) => void }> = ({ type, onSelectTab }) => {
  const content = appContent[type];
  const Icon = content.Icon;
  const goHome = () => onSelectTab('home');

  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={goHome}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-300 bg-white text-slate-800 shadow-sm hover:bg-slate-100"
            aria-label="Go back"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button onClick={goHome} className="flex items-center gap-3 text-left">
          <span className={`grid h-10 w-10 place-items-center rounded-xl ${content.softBg} ${content.accent} ring-1 ring-inset ring-current/15`}>
            <Icon className="h-5 w-5" />
          </span>
          <span>
            <span className="flex items-center gap-2">
              <span className="block text-sm font-extrabold text-slate-950">{content.badge}</span>
              <span className={`hidden rounded-full border ${content.border} ${content.softBg} px-2 py-0.5 text-[9px] font-extrabold uppercase ${content.accent} sm:inline-flex`}>
                Coming Soon
              </span>
            </span>
            <span className="block text-[10px] font-bold uppercase text-slate-500">Ayudh Vikas</span>
          </span>
          </button>
        </div>

        <nav className="hidden items-center gap-6 text-xs font-bold text-slate-600 md:flex">
          <a href="#booking" className="hover:text-slate-950">Booking</a>
          {type === 'ride' && <a href="#features" className="hover:text-slate-950">Why AV Ride</a>}
          <a href="#coverage" className="hover:text-slate-950">Warangal Coverage</a>
          <a href="#status" className="hover:text-slate-950">Launch Status</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className={`inline-flex items-center gap-2 rounded-xl border ${content.border} ${content.softBg} px-3 py-2 text-xs font-bold ${content.accent}`}
          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{COMPANY_INFO.phoneDisplay}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>
    </header>
  );
};

const ComingSoonFooter: React.FC<{ type: 'ride' | 'food'; onSelectTab: (tab: string) => void }> = ({ type, onSelectTab }) => {
  const content = appContent[type];

  return (
    <footer className={`${content.footerBg} text-white`}>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="text-lg font-extrabold">{content.badge}</p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75">
            Coming soon under Ayudh Vikas for Warangal, Hanamkonda, Kazipet, and nearby operating zones.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:items-center">
          <span className="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2.5 text-sm font-extrabold text-white ring-1 ring-white/20">
            Coming Soon
          </span>
          <button
            onClick={() => onSelectTab('contact')}
            className="inline-flex items-center justify-center rounded-xl border border-white/25 px-4 py-2.5 text-sm font-bold text-white hover:bg-white/10"
          >
            Contact Ayudh Vikas
          </button>
        </div>
      </div>
    </footer>
  );
};

const RideBookingPreview: React.FC = () => {
  const [pickup, setPickup] = useState(warangalLocations[0]);
  const [drop, setDrop] = useState(warangalLocations[1]);
  const [vehicle, setVehicle] = useState(rideVehicles[1].name);
  const [confirmed, setConfirmed] = useState(false);

  const selectedVehicle = rideVehicles.find((item) => item.name === vehicle) ?? rideVehicles[0];
  const estimate = pickup === drop ? selectedVehicle.fare : selectedVehicle.fare + 36;

  return (
    <div id="booking" className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-950/10 sm:p-5">
      <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
            <p className="text-xs font-bold uppercase text-blue-700">Ride booking preview</p>
            <h2 className="text-xl font-extrabold text-slate-950">Plan a Warangal ride</h2>
            <p className="mt-1 text-xs font-bold text-blue-700">Coming Soon - preview only</p>
          </div>
        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-extrabold text-blue-700">Coming Soon</span>
      </div>

      <div className="mt-5 grid gap-4">
        <label className="grid gap-1.5 text-xs font-bold text-slate-600">
          Pickup
          <select value={pickup} onChange={(event) => setPickup(event.target.value)} className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 text-sm font-bold text-slate-950">
            {warangalLocations.map((location) => <option key={location}>{location}</option>)}
          </select>
        </label>
        <label className="grid gap-1.5 text-xs font-bold text-slate-600">
          Drop
          <select value={drop} onChange={(event) => setDrop(event.target.value)} className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 text-sm font-bold text-slate-950">
            {warangalLocations.map((location) => <option key={location}>{location}</option>)}
          </select>
        </label>
        <div className="grid gap-2">
          <p className="text-xs font-bold text-slate-600">Vehicle</p>
          <div className="grid gap-2 sm:grid-cols-3">
            {rideVehicles.map((item) => (
              <button
                key={item.name}
                onClick={() => setVehicle(item.name)}
                className={`rounded-xl border px-3 py-3 text-left transition-all ${vehicle === item.name ? 'border-blue-700 bg-blue-50 text-blue-950' : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300'}`}
              >
                <span className="block text-sm font-extrabold">{item.name}</span>
                <span className="mt-1 block text-xs font-bold">ETA {item.eta}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div id="status" className="mt-5 rounded-2xl bg-slate-950 p-4 text-white">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase text-blue-200">Estimated fare</p>
            <p className="text-3xl font-extrabold">Rs. {estimate}</p>
          </div>
          <div className="text-right text-xs font-bold text-white/70">
            <p>{selectedVehicle.eta} driver ETA</p>
            <p>Warangal pilot zone</p>
          </div>
        </div>
        <button
          onClick={() => setConfirmed(true)}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-extrabold text-slate-950 hover:bg-blue-50"
        >
          <CarTaxiFront className="h-4 w-4" />
          <span>Preview Ride Booking</span>
        </button>
        {confirmed && (
          <p className="mt-3 rounded-xl bg-emerald-500/15 px-3 py-2 text-sm font-bold text-emerald-100">
            Ride request preview created. AV Ride is coming soon for Warangal.
          </p>
        )}
      </div>
    </div>
  );
};

const FoodOrderPreview: React.FC = () => {
  const [menu, setMenu] = useState(foodMenus[0].name);
  const [quantity, setQuantity] = useState(10);
  const [area, setArea] = useState('Hanamkonda Office');
  const [confirmed, setConfirmed] = useState(false);

  const selectedMenu = foodMenus.find((item) => item.name === menu) ?? foodMenus[0];
  const total = useMemo(() => selectedMenu.price * quantity + 49, [quantity, selectedMenu.price]);

  return (
    <div id="booking" className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-950/10 sm:p-5">
      <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
            <p className="text-xs font-bold uppercase text-red-700">Food ordering preview</p>
            <h2 className="text-xl font-extrabold text-slate-950">Schedule a Warangal meal order</h2>
            <p className="mt-1 text-xs font-bold text-red-700">Coming Soon - preview only</p>
          </div>
        <span className="rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-extrabold text-red-700">Coming Soon</span>
      </div>

      <div className="mt-5 grid gap-4">
        <label className="grid gap-1.5 text-xs font-bold text-slate-600">
          Menu
          <select value={menu} onChange={(event) => setMenu(event.target.value)} className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 text-sm font-bold text-slate-950">
            {foodMenus.map((item) => <option key={item.name}>{item.name}</option>)}
          </select>
        </label>
        <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-semibold text-slate-700">
          {selectedMenu.detail}
        </div>
        <label className="grid gap-1.5 text-xs font-bold text-slate-600">
          Delivery Area
          <select value={area} onChange={(event) => setArea(event.target.value)} className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 text-sm font-bold text-slate-950">
            {['Hanamkonda Office', 'Warangal Fort Road', 'Kazipet Team Site', 'Hunter Road Branch'].map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="grid gap-1.5 text-xs font-bold text-slate-600">
          Quantity
          <input
            type="number"
            min={1}
            max={200}
            value={quantity}
            onChange={(event) => setQuantity(Math.max(1, Number(event.target.value)))}
            className="rounded-xl border border-slate-300 bg-slate-50 px-3 py-3 text-sm font-bold text-slate-950"
          />
        </label>
      </div>

      <div id="status" className="mt-5 rounded-2xl bg-slate-950 p-4 text-white">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase text-red-200">Order preview</p>
            <p className="text-3xl font-extrabold">Rs. {total}</p>
          </div>
          <div className="text-right text-xs font-bold text-white/70">
            <p>{quantity} meals</p>
            <p>{area}</p>
          </div>
        </div>
        <button
          onClick={() => setConfirmed(true)}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-extrabold text-slate-950 hover:bg-red-50"
        >
          <ShoppingBag className="h-4 w-4" />
          <span>Preview Food Order</span>
        </button>
        {confirmed && (
          <p className="mt-3 rounded-xl bg-emerald-500/15 px-3 py-2 text-sm font-bold text-emerald-100">
            Food order preview created. AV Food is coming soon for Warangal.
          </p>
        )}
      </div>
    </div>
  );
};

export const ComingSoonApp: React.FC<ComingSoonAppProps> = ({ type, onSelectTab, onOpenQuoteModal }) => {
  const content = appContent[type];
  const Icon = content.Icon;
  const isRide = type === 'ride';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <ComingSoonHeader type={type} onSelectTab={onSelectTab} />

      <main>
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <img src={content.hero} alt={`${content.badge} Warangal service preview`} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/78 to-slate-950/15" />
          <div className="relative mx-auto grid min-h-[520px] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_0.85fr] lg:px-8">
            <div>
              <div className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur`}>
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                <span>Coming Soon in Warangal</span>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid h-13 w-13 place-items-center rounded-2xl bg-white text-slate-950">
                  <Icon className="h-7 w-7" />
                </span>
                <p className="text-sm font-extrabold uppercase tracking-wide text-white/70">{content.badge}</p>
              </div>
              <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                {content.title}
              </h1>
              <p className="mt-4 inline-flex rounded-full bg-amber-400 px-4 py-1.5 text-xs font-extrabold uppercase text-slate-950 shadow-lg shadow-amber-500/20">
                Coming Soon
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/78">
                {content.subtitle}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href="#booking" className={`inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${content.primary} px-5 py-3 text-sm font-extrabold text-white shadow-xl shadow-slate-950/30`}>
                  <span>{isRide ? 'Preview Ride Booking' : 'Preview Food Order'}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <button onClick={onOpenQuoteModal} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-slate-950 hover:bg-slate-100">
                  <Bell className="h-4 w-4" />
                  <span>Notify Me</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.78fr_1fr] lg:px-8 lg:py-14">
          <div id="coverage" className="space-y-5">
            <div>
              <p className={`text-xs font-bold uppercase ${content.accent}`}>Warangal specified</p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-950">Built around local demand</h2>
              <span className={`mt-3 inline-flex rounded-full ${content.softBg} px-3 py-1 text-[11px] font-extrabold uppercase ${content.accent} ring-1 ring-inset ring-current/15`}>
                Coming Soon
              </span>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                The template focuses on Hunter Road, Hanamkonda, Kazipet, NIT Warangal, and Warangal Fort Road as initial service zones.
              </p>
            </div>
            <div className="grid gap-3">
              {warangalLocations.slice(0, 4).map((location) => (
                <div key={location} className="flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-3">
                  <MapPin className={`h-4 w-4 ${content.accent}`} />
                  <span className="text-sm font-bold text-slate-800">{location}</span>
                </div>
              ))}
            </div>
            <div className={`flex items-center gap-3 rounded-2xl ${content.softBg} ${content.accent} px-4 py-4 text-sm font-bold`}>
              <ShieldCheck className="h-5 w-5" />
              <span>{isRide ? 'Verified driver and managed commute flow planned.' : 'Hygienic packing and scheduled office delivery flow planned.'}</span>
            </div>
          </div>

          {isRide ? <RideBookingPreview /> : <FoodOrderPreview />}
        </section>

        {isRide && (
          <section id="features" className="border-y border-slate-200 bg-white">
            <div className="mx-auto grid max-w-7xl gap-9 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
              <div className="overflow-hidden rounded-3xl bg-slate-950 shadow-2xl shadow-slate-950/15">
                <img
                  src={avRideSafety}
                  alt="AV Ride women safety and verified driver preview in Warangal"
                  className="h-full min-h-[360px] w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-xs font-bold uppercase text-blue-700">Why AV Ride differs</p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                  Safety-led local rides, coming soon for Warangal
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600">
                  AV Ride is being shaped for managed travel where trust, women safety, local coverage, and human support matter as much as the fare.
                </p>

                <div className="mt-7 grid gap-3">
                  {rideDifferentiators.map((feature) => {
                    const FeatureIcon = feature.icon;

                    return (
                      <div key={feature.title} className="grid gap-3 border-b border-slate-200 pb-4 sm:grid-cols-[auto_1fr]">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-700">
                          <FeatureIcon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block text-sm font-extrabold text-slate-950">{feature.title}</span>
                          <span className="mt-1 block text-sm leading-relaxed text-slate-600">{feature.desc}</span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
            {[
              ['Pilot Area', 'Warangal, Hanamkonda, Kazipet'],
              ['Launch State', 'Coming Soon'],
              ['Support Desk', COMPANY_INFO.phoneDisplay],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-slate-200 pb-4">
                <p className="text-xs font-bold uppercase text-slate-400">{label}</p>
                <p className="mt-1 text-sm font-extrabold text-slate-950">{value}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <ComingSoonFooter type={type} onSelectTab={onSelectTab} />
    </div>
  );
};
