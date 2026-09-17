import React from 'react';
import { 
  ShieldCheck, Building2, ArrowRight, Award, UserCheck,
  BadgeCheck, Smartphone, Siren, HelpCircle, MapPin, Phone, Sparkles, Zap,
  ClipboardCheck, Timer, UsersRound
} from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/mockData';
import bodyguardImg from '../assets/images/bodyguard_security_section_1784716099006.jpg';
import brandTeamworkImg from '../assets/images/brand_teamwork_quote_1784802669697.jpg';
import brandRegImg from '../assets/images/brand_reg_banner_1784802685075.jpg';
import brandJustdialImg from '../assets/images/brand_justdial_award_1784802699150.jpg';
import brandPosterImg from '../assets/images/brand_official_poster_1784802712788.jpg';

interface HomePreviewsProps {
  onSelectTab: (tab: string) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const HomePreviews: React.FC<HomePreviewsProps> = ({ onSelectTab, onOpenQuoteModal }) => {
  return (
    <div className="space-y-16 py-12 bg-slate-50">
      
      {/* 1. Featured Services Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-300 text-xs font-bold text-blue-900">
            <span>🛡️ CORE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Integrated Security & Facility Solutions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Professional manned guarding, executive protection bodyguards, deep cleaning, and commercial property upkeep.
          </p>
        </div>

        {/* Featured Bodyguard & Executive Protection Visual Showcase */}
        <div className="mb-10 rounded-2xl overflow-hidden border border-blue-900/30 bg-slate-950 shadow-lg relative group">
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
          {/* Card 1 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:border-blue-500 hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 w-fit text-blue-900">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Guarding & Security</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Biometric-tracked, police-verified security officers, industrial gatekeepers, and executive protection.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-blue-900">24-48 Hr Deployment</span>
              <button
                onClick={() => onSelectTab('services')}
                className="text-xs font-bold text-blue-900 hover:text-blue-950 flex items-center gap-1 cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:border-emerald-500 hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 w-fit text-emerald-700">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">AyudhKlin Deep Cleaning</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Detailed home, office, commercial, and industrial deep cleaning with trained teams and professional supplies.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-emerald-700">Same Day / Next Day</span>
              <button
                onClick={() => onSelectTab('ayudhklin-services')}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:border-blue-500 hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 w-fit text-blue-900">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Facility Management SLA</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comprehensive property upkeep, MEP electrical/plumbing maintenance, and janitorial sanitization.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-blue-900">Dedicated SLA Manager</span>
              <button
                onClick={() => onSelectTab('services')}
                className="text-xs font-bold text-blue-900 hover:text-blue-950 flex items-center gap-1 cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-300 text-xs font-bold text-blue-900">
            <BadgeCheck className="w-3.5 h-3.5 text-blue-700" />
            <span>OFFICIAL TELANGANA LICENSE & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Verified Telangana Operations & Enterprise Credentials
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Govt. Licensed under Reg. No. 417/2025, Telangana. Explore our official awards, company values, and service posters across the application.
          </p>
        </div>

        {/* Featured Registration Banner + Direct Links to Images on Other Pages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Main Featured Image: Telangana Government Registration Banner */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col group">
            <div className="bg-slate-950 p-5 sm:p-6">
              <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr] items-center">
                <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/15 bg-white p-2 shadow-2xl shadow-slate-950/30">
                  <img
                    src={brandRegImg}
                    alt="Ayudh Vikas Telangana Reg. No. 417/2025 License Banner"
                    referrerPolicy="no-referrer"
                    className="w-full max-h-52 object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-900/95 backdrop-blur-md text-white text-[10px] font-bold shadow-md border border-blue-400/30">
                    Reg. 417/2025
                  </div>
                </div>

                <div className="text-white space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-extrabold text-emerald-200 ring-1 ring-emerald-400/30">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Licensed, Verified & Field Ready
                  </div>
                  <h3 className="text-2xl font-extrabold leading-tight">
                    One registered team for security, cleaning, staffing, and facility care.
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                    Ayudh Vikas combines statutory compliance with fast local execution from Warangal HQ for homes, apartments, offices, schools, hospitals, events, and industrial sites.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  Government Registered Operations (Warangal HQ)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Headquartered at # 12-8-287, KM Complex, Hunter Road, Warangal. Operating under official license Reg. No. 417/2025, Telangana with 100% EPF, ESIC, and statutory compliance.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { icon: ShieldCheck, title: 'Security Guarding', desc: 'Manned guarding, gate control, VIP/event security, and night patrol support.' },
                  { icon: Sparkles, title: 'AyudhKlin Cleaning', desc: 'Homes, offices, commercial spaces, post-construction, and industrial cleaning.' },
                  { icon: Building2, title: 'Facility Support', desc: 'Housekeeping, maintenance coordination, and daily site upkeep with SLA discipline.' },
                  { icon: UsersRound, title: 'Corporate Manpower', desc: 'Screened support staff and operational manpower for business requirements.' },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-2.5">
                      <div className="flex items-start gap-2.5">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-900 border border-blue-100">
                          <Icon className="w-4 h-4" />
                        </span>
                        <span>
                          <span className="block text-xs font-extrabold text-slate-900">{item.title}</span>
                          <span className="mt-0.5 block text-[11px] leading-snug text-slate-600">{item.desc}</span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className="rounded-xl bg-emerald-50 px-3 py-2 text-emerald-800 border border-emerald-200">
                  <ClipboardCheck className="w-4 h-4 mb-0.5" />
                  <p className="text-[11px] font-extrabold">EPF / ESIC Ready</p>
                </div>
                <div className="rounded-xl bg-blue-50 px-3 py-2 text-blue-900 border border-blue-200">
                  <Timer className="w-4 h-4 mb-0.5" />
                  <p className="text-[11px] font-extrabold">Fast Deployment</p>
                </div>
                <div className="rounded-xl bg-red-50 px-3 py-2 text-red-800 border border-red-200">
                  <Siren className="w-4 h-4 mb-0.5" />
                  <p className="text-[11px] font-extrabold">24/7 Support</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => onSelectTab('contact')}
                  className="px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <ShieldCheck className="w-4 h-4 text-blue-300" />
                  <span>Verify Contact & Office Address</span>
                </button>
                <button
                  onClick={() => onSelectTab('services')}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-emerald-100" />
                  <span>Explore Services</span>
                </button>
              </div>
            </div>
          </div>

          {/* Side Cards: Direct navigation to the other 3 official image artwork locations */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {/* Card 1: Justdial Award -> Why Choose Us */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-50/80 to-white border border-amber-200/80 hover:border-amber-400 transition-all shadow-sm flex items-center justify-between gap-3 group">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold">
                  <span>★ 5-Star Award Artwork</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">Justdial Users' Choice 2026</h4>
                <p className="text-xs text-slate-500">
                  Featured on the <strong>Why Choose Us</strong> page.
                </p>
              </div>
              <button
                onClick={() => onSelectTab('why-us')}
                className="px-3 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center gap-1 shrink-0 transition-all cursor-pointer shadow-sm"
                aria-label="View Justdial Award"
              >
                <span>View Award</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 2: Teamwork Quote -> Why Choose Us */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-50/80 to-white border border-blue-200/80 hover:border-blue-400 transition-all shadow-sm flex items-center justify-between gap-3 group">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-900 text-[10px] font-bold">
                  <span>Leadership Culture</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">Teamwork & Productivity Quote</h4>
                <p className="text-xs text-slate-500">
                  Featured on the <strong>Why Choose Us</strong> page.
                </p>
              </div>
              <button
                onClick={() => onSelectTab('why-us')}
                className="px-3 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs flex items-center gap-1 shrink-0 transition-all cursor-pointer shadow-sm"
                aria-label="View Culture Quote"
              >
                <span>View Culture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 3: Operations Poster -> Services */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-r from-red-50/80 to-white border border-red-200/80 hover:border-red-400 transition-all shadow-sm flex items-center justify-between gap-3 group">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-100 text-red-900 text-[10px] font-bold">
                  <span>Official Services Poster</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">Official Operations Poster</h4>
                <p className="text-xs text-slate-500">
                  Featured on the <strong>Services</strong> page.
                </p>
              </div>
              <button
                onClick={() => onSelectTab('services')}
                className="px-3 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-1 shrink-0 transition-all cursor-pointer shadow-sm"
                aria-label="View Operations Poster"
              >
                <span>View Poster</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
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
