import React from 'react';
import { CheckCircle2, Clock3, Sparkles, SprayCan, UsersRound } from 'lucide-react';
import { Logo } from './Logo';

interface AyudhKlinServicesProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

const services = [
  {
    title: 'Residential Deep Cleaning',
    description: 'Detailed kitchen, bathroom, floor, glass, and furniture care for a fresher, healthier home.',
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Office & Commercial Cleaning',
    description: 'Reliable cleaning teams for workplaces, retail spaces, common areas, and high-touch surfaces.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Industrial & Post-Construction Cleaning',
    description: 'Heavy-duty cleaning for warehouses, factories, renovation sites, and move-in-ready handovers.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85',
  },
];

export const AyudhKlinServices: React.FC<AyudhKlinServicesProps> = ({ onOpenQuoteModal }) => (
  <div className="min-h-screen bg-white pb-8 text-slate-900">
    <section className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="mb-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <div className="inline-flex h-14 items-center rounded-full border border-white/20 bg-white/10 px-4 backdrop-blur-md">
              <Logo size="md" showText textColor="text-ivory" />
            </div>
            <div className="inline-flex h-14 items-center gap-2 rounded-full bg-white/15 px-5 text-sm font-bold">
              <Sparkles className="w-4 h-4" />
              AyudhKlin Services
            </div>
          </div>
          <h1 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">Deep cleaning that makes every space feel cared for.</h1>
          <p className="mt-5 text-base leading-relaxed text-emerald-50 sm:text-lg">From homes and offices to industrial sites, our trained teams deliver systematic deep cleaning with professional equipment and hygiene-focused products.</p>
          <button onClick={() => onOpenQuoteModal('AyudhKlin Deep Cleaning Service')} className="mt-7 w-full rounded-xl bg-white px-6 py-3 font-bold text-emerald-700 shadow-lg transition-colors hover:bg-emerald-50 sm:w-auto">Request a deep-cleaning quote</button>
        </div>
        <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85" alt="Professional deep cleaning team at work" className="h-56 w-full rounded-3xl border border-white/25 object-cover shadow-2xl sm:h-72 lg:h-96" />
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="text-center max-w-2xl mx-auto mb-10"><p className="text-emerald-600 font-bold uppercase tracking-wider text-sm">Complete care for every setting</p><h2 className="mt-2 text-3xl font-extrabold">Our deep-cleaning services</h2></div>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => <article key={service.title} className="overflow-hidden rounded-3xl border border-emerald-200 bg-white shadow-sm hover:shadow-lg transition-shadow"><img src={service.image} alt={service.title} className="h-52 w-full object-cover" /><div className="p-6"><SprayCan className="w-6 h-6 text-emerald-600 mb-3" /><h3 className="text-xl font-extrabold">{service.title}</h3><p className="mt-2 text-slate-600 leading-relaxed">{service.description}</p><button onClick={() => onOpenQuoteModal(service.title)} className="mt-5 text-emerald-700 font-bold hover:text-emerald-900">Get a quote →</button></div></article>)}
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="rounded-3xl bg-emerald-50 border border-emerald-200 p-7 sm:p-10 grid md:grid-cols-3 gap-6">
      <div className="flex items-center gap-3 text-slate-800"><UsersRound className="w-7 h-7 text-emerald-600" /><span className="font-bold">Trained cleaning teams</span><CheckCircle2 className="ml-auto w-5 h-5 text-emerald-500" /></div>
      <div className="flex items-center gap-3 text-slate-800"><SprayCan className="w-7 h-7 text-emerald-600" /><span className="font-bold">Professional tools & supplies</span><CheckCircle2 className="ml-auto w-5 h-5 text-emerald-500" /></div>
      <div className="flex items-center gap-3 text-slate-800"><Clock3 className="w-7 h-7 text-emerald-600" /><span className="font-bold">Flexible scheduled visits</span><CheckCircle2 className="ml-auto w-5 h-5 text-emerald-500" /></div>
    </div></section>
  </div>
);
