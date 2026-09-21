import React from 'react';
import { 
  ShieldCheck, Building2, ArrowRight, Award, UserCheck,
  BadgeCheck, Smartphone, Siren, HelpCircle, MapPin, Phone, Sparkles, Zap,
  ClipboardCheck, Timer, UsersRound
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import bodyguardImg from '../assets/images/bodyguard_security_section_1784716099006.jpg';
import brandPosterImg from '../assets/images/brand_official_poster_1784802712788.jpg';
import brandJustdialImg from '../assets/images/brand_justdial_award_1784802699150.jpg';
import securityGuardImg from '../assets/images/service_security_guard_1784719456979.jpg';
import deepCleanImg from '../assets/images/service_deep_cleaning_1784719519754.jpg';
import facilityImg from '../assets/images/service_facility_management_1784719479580.jpg';

interface HomePreviewsProps {
  onSelectTab: (tab: string) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const HomePreviews: React.FC<HomePreviewsProps> = ({ onSelectTab, onOpenQuoteModal }) => {
  return (
    <div className="relative space-y-16 overflow-hidden bg-slate-50 py-12">
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-[28rem] h-80 w-80 rounded-full bg-red-200/20 blur-3xl" />

      {/* 1. Featured Services Preview */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-300 text-xs font-bold text-blue-900">
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Integrated Security & Facility Solutions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Professional manned guarding, executive protection bodyguards, deep cleaning, and commercial property upkeep.
          </p>
        </div>

        <div className="mb-10 rounded-3xl overflow-hidden border border-blue-900/30 bg-slate-950 shadow-2xl shadow-slate-950/20 relative group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-96 overflow-hidden">
              <img 
                src={bodyguardImg} 
                alt="Ayudh Vikas Professional Bodyguards and Security Officers"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-950/40 to-slate-950 lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent lg:hidden block" />
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 space-y-4 text-white relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-red-500/50 text-red-300 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
                <span>24/7 EXECUTIVE PROTECTION & MANNED GUARDING</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
                Disciplined Bodyguards & Armed/Unarmed Security Detail
              </h3>
              
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Deploy elite, police-verified security personnel and executive bodyguards trained in crowd control, VIP escorting, facility perimeter defense, and rapid threat mitigation.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenQuoteModal('VIP Executive Protection & Bodyguards')}
                  className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-300" />
                  <span>Request Security Detail</span>
                </button>
                <button
                  onClick={() => onSelectTab('services')}
                  className="px-5 py-2.5 rounded-xl bg-blue-900/80 hover:bg-blue-900 border border-blue-700 text-white font-semibold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Explore Security Portfolio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { img: securityGuardImg, title: 'Guarding & Security', desc: 'Biometric-tracked, police-verified security officers, industrial gatekeepers, and executive protection.', tab: 'services', accent: 'blue', eta: '24-48 Hr Deployment' },
            { img: deepCleanImg, title: 'AyudhKlin Deep Cleaning', desc: 'Detailed home, office, commercial, and industrial deep cleaning with trained teams and professional supplies.', tab: 'ayudhklin-services', accent: 'emerald', eta: 'Same Day / Next Day' },
            { img: facilityImg, title: 'Facility Management SLA', desc: 'Comprehensive property upkeep, MEP electrical/plumbing maintenance, and janitorial sanitization.', tab: 'services', accent: 'navy', eta: 'Dedicated SLA Manager' },
          ].map((card) => (
            <button
              key={card.title}
              onClick={() => onSelectTab(card.tab)}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:border-blue-300"
            >
              <div className="relative h-40 overflow-hidden">
                <img src={card.img} alt={card.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-extrabold text-slate-900">{card.eta}</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{card.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-900">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => onSelectTab('services')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
          >
            <span>View Full Services Page & Filter Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 2. Why Choose AZS4S Teaser Strip */}
      <section className="bg-white py-12 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-950 text-xs font-bold mb-2">
                <Award className="w-3.5 h-3.5 text-red-600" />
                <span>THE AYUDH VIKAS PROMISE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Why Enterprises Choose Ayudh Vikas Over Local Agencies
              </h2>
            </div>

            <button
              onClick={() => onSelectTab('why-us')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shrink-0 transition-all cursor-pointer"
            >
              <span>Explore Differentiator Matrix & Comparison</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <UserCheck className="w-5 h-5 text-blue-900 mb-2" />
              <h4 className="text-xs font-bold text-slate-900">100% Police Verified</h4>
              <p className="text-[11px] text-slate-600 mt-1">Biometric & police clearance before posting.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <BadgeCheck className="w-5 h-5 text-red-600 mb-2" />
              <h4 className="text-xs font-bold text-slate-900">Statutory Compliant</h4>
              <p className="text-[11px] text-slate-600 mt-1">Full statutory EPF, ESIC, and minimum wage proof.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <Smartphone className="w-5 h-5 text-blue-800 mb-2" />
              <h4 className="text-xs font-bold text-slate-900">GPS Patrol Tracking</h4>
              <p className="text-[11px] text-slate-600 mt-1">Digital NFC QR checkpoints prevent duty sleeping.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <Siren className="w-5 h-5 text-red-600 mb-2" />
              <h4 className="text-xs font-bold text-slate-900">24/7 Standby QRT</h4>
              <p className="text-[11px] text-slate-600 mt-1">Substitute guards dispatched within 60 minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 Brand Gallery & Official Credentials Showcase */}
      <section className="relative overflow-hidden border-y border-blue-200/70 bg-gradient-to-b from-blue-50 via-white to-slate-50 py-14">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-900 via-amber-400 to-red-600" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-end">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-white px-3 py-1 text-xs font-bold text-blue-900 shadow-sm">
                <BadgeCheck className="h-3.5 w-3.5 text-blue-700" />
                <span>OFFICIAL TELANGANA LICENSE & CREDENTIALS</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-[2.15rem]">
                Verified Telangana Operations & Enterprise Credentials
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Government licensed under <span className="font-bold text-slate-900">Reg. No. 417/2025, Telangana</span>. Statutory EPF/ESIC compliance, Warangal HQ, and enterprise-ready field operations.
              </p>
            </div>
            <div className="grid w-full grid-cols-3 gap-2 sm:w-auto sm:min-w-[22rem]">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-center">
                <p className="text-[10px] font-bold uppercase tracking-wide text-emerald-700">License</p>
                <p className="mt-0.5 text-xs font-extrabold text-emerald-950">417/2025</p>
              </div>
              <div className="rounded-xl border border-blue-200 bg-blue-50 px-3 py-2.5 text-center">
                <p className="text-[10px] font-bold uppercase tracking-wide text-blue-700">HQ</p>
                <p className="mt-0.5 text-xs font-extrabold text-blue-950">Warangal</p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2.5 text-center">
                <p className="text-[10px] font-bold uppercase tracking-wide text-amber-700">Rating</p>
                <p className="mt-0.5 text-xs font-extrabold text-amber-950">5.0 Justdial</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5">
            <div className="grid lg:grid-cols-12">
              <div className="relative border-b border-slate-200 bg-slate-950 p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r">
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-900 shadow-2xl">
                  <img
                    src={brandPosterImg}
                    alt="Ayudh Vikas official operations poster"
                    referrerPolicy="no-referrer"
                    className="h-56 w-full object-cover object-top sm:h-64"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-3">
                    <p className="text-[11px] font-extrabold text-white">Official operations poster · Warangal HQ</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <img src={brandJustdialImg} alt="Justdial Users Choice award" className="h-20 w-full rounded-xl object-cover border border-white/10" />
                  <img src={securityGuardImg} alt="On-ground security operations" className="h-20 w-full rounded-xl object-cover border border-white/10" />
                </div>
                <div className="mt-5 space-y-2 text-white">
                  <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-extrabold text-emerald-200 ring-1 ring-emerald-400/30">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Licensed, verified & field ready
                  </p>
                  <h3 className="text-xl font-extrabold leading-snug">
                    One registered team for security, cleaning, staffing, and facility care.
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    # 12-8-287, KM Complex, Hunter Road, Warangal. Fast local execution for homes, offices, events, and industrial sites.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 p-6 sm:p-8">
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { icon: ShieldCheck, title: 'Security Guarding', desc: 'Manned guarding, gate control, VIP/event security, and night patrol support.' },
                    { icon: Sparkles, title: 'AyudhKlin Cleaning', desc: 'Homes, offices, commercial spaces, post-construction, and industrial cleaning.' },
                    { icon: Building2, title: 'Facility Support', desc: 'Housekeeping, maintenance coordination, and daily site upkeep with SLA discipline.' },
                    { icon: UsersRound, title: 'Corporate Manpower', desc: 'Screened support staff and operational manpower for business requirements.' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-blue-100 bg-white text-blue-900">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h4 className="text-sm font-extrabold text-slate-900">{item.title}</h4>
                          <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <div className="flex items-center gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-3">
                    <ClipboardCheck className="h-5 w-5 shrink-0 text-emerald-700" />
                    <p className="text-xs font-extrabold text-emerald-900">EPF / ESIC Ready</p>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-blue-200 bg-blue-50 px-3 py-3">
                    <Timer className="h-5 w-5 shrink-0 text-blue-800" />
                    <p className="text-xs font-extrabold text-blue-950">Fast Deployment</p>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50 px-3 py-3">
                    <Siren className="h-5 w-5 shrink-0 text-red-700" />
                    <p className="text-xs font-extrabold text-red-900">24/7 Support</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <button
                    onClick={() => onSelectTab('why-us')}
                    className="flex items-center justify-between rounded-xl border border-amber-200 bg-amber-50 px-3.5 py-3 text-left transition-colors hover:bg-amber-100"
                  >
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-wide text-amber-800">Award</span>
                      <span className="text-xs font-extrabold text-slate-900">Justdial 2026</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-amber-700" />
                  </button>
                  <button
                    onClick={() => onSelectTab('why-us')}
                    className="flex items-center justify-between rounded-xl border border-blue-200 bg-blue-50 px-3.5 py-3 text-left transition-colors hover:bg-blue-100"
                  >
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-wide text-blue-800">Culture</span>
                      <span className="text-xs font-extrabold text-slate-900">Teamwork values</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-blue-800" />
                  </button>
                  <button
                    onClick={() => onSelectTab('services')}
                    className="flex items-center justify-between rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-left transition-colors hover:bg-red-100"
                  >
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-wide text-red-800">Poster</span>
                      <span className="text-xs font-extrabold text-slate-900">Operations board</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-red-700" />
                  </button>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <button
                    onClick={() => onSelectTab('contact')}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-900 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-colors hover:bg-blue-950"
                  >
                    <ShieldCheck className="h-4 w-4 text-blue-300" />
                    Verify office address
                  </button>
                  <button
                    onClick={() => onSelectTab('services')}
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-colors hover:bg-emerald-700"
                  >
                    <Sparkles className="h-4 w-4 text-emerald-100" />
                    Explore services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ & Contact Quick Action Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* FAQ Teaser Card */}
          <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-red-950 rounded-2xl p-6 text-white flex flex-col justify-between shadow-lg">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-900/80 text-blue-100 text-xs font-bold border border-blue-700">
                <HelpCircle className="w-3.5 h-3.5 text-amber-300" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h3 className="text-xl font-bold">Have Questions About SLAs or Billing?</h3>
              <p className="text-xs text-blue-100/90 leading-relaxed">
                Find clear answers on guard deployment timelines, statutory compliance proofs, and emergency substitute procedures.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-800/80 flex items-center justify-between">
              <span className="text-[11px] text-blue-200 font-medium">Clear, Transparent Policies</span>
              <button
                onClick={() => onSelectTab('faq')}
                className="px-4 py-2 rounded-xl bg-white text-blue-950 hover:bg-blue-50 text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all"
              >
                <span>Read FAQ Answers</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-900" />
              </button>
            </div>
          </div>

          {/* Contact Teaser Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-md">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold border border-blue-200">
                <MapPin className="w-3.5 h-3.5 text-blue-800" />
                <span>WARANGAL REGIONAL HEADQUARTERS</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Direct Contact & 24/7 Helpline</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Located at Km Complex, Hunter Road, Warangal. Call <strong className="text-slate-900">{COMPANY_INFO.phoneDisplay}</strong> or send us an inquiry.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-medium">Response Window: &lt; 15 Mins</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 text-xs font-bold flex items-center gap-1 cursor-pointer transition-all border border-blue-200"
                >
                  <Sparkles className="w-3.5 h-3.5 text-blue-800" />
                  <span>Get Quote</span>
                </button>
                <button
                  onClick={() => onSelectTab('contact')}
                  className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all shadow-md shadow-red-600/20"
                >
                  <span>Go to Contact Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
