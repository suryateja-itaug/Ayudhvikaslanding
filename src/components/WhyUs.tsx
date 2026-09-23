import React, { useState } from 'react';
import { 
  UserCheck, BadgeCheck, Smartphone, Siren, Receipt, Headphones,
  CheckCircle2, XCircle, ShieldCheck, Award
} from 'lucide-react';
import { WHY_AZS4S_ITEMS } from '../data/mockData';
import { motion } from 'motion/react';
import brandTeamworkImg from '../assets/images/brand_teamwork_quote_1784802669697.jpg';
import brandJustdialImg from '../assets/images/brand_justdial_award_1784802699150.jpg';

export const WhyUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'grid' | 'comparison'>('grid');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-blue-900" />;
      case 'BadgeCheck': return <BadgeCheck className="w-6 h-6 text-red-600" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-blue-800" />;
      case 'Siren': return <Siren className="w-6 h-6 text-red-600" />;
      case 'Receipt': return <Receipt className="w-6 h-6 text-blue-900" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-red-600" />;
      default: return <ShieldCheck className="w-6 h-6 text-blue-900" />;
    }
  };

  const comparisonData = [
    {
      feature: "Personnel Verification",
      azs4s: "Biometric + Local Police Clearance + Address Verification",
      traditional: "Basic unverified verbal references",
      highlight: true
    },
    {
      feature: "Statutory Compliance",
      azs4s: "100% EPF, ESIC, Minimum Wages & Monthly Proof Statements",
      traditional: "Frequent statutory non-compliance risk",
      highlight: true
    },
    {
      feature: "Duty Attendance & Patrols",
      azs4s: "NFC/QR Code Patrol Tracking & Digital Attendance App",
      traditional: "Manual paper logs prone to duty sleeping",
      highlight: false
    },
    {
      feature: "Emergency Guard Replacement",
      azs4s: "Within 60 Minutes via 24/7 Standing Reserve QRT",
      traditional: "Unstaffed gates or hours of delay",
      highlight: true
    },
    {
      feature: "Certifications",
      azs4s: "Statutory Compliant Agency",
      traditional: "Unregistered or local temporary vendors",
      highlight: false
    },
    {
      feature: "Account Management",
      azs4s: "Dedicated Operations Manager + Direct Line",
      traditional: "No single point of contact",
      highlight: false
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden border-y border-slate-100">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 border border-red-300 text-xs font-bold text-red-950">
            <Award className="w-3.5 h-3.5 text-red-600" />
            <span>THE AYUDH VIKAS ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
  Why Top Enterprises Trust{' '}
  <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-800 to-red-600">
    Ayudh Vikas
  </span>
</h2>

          <p className="text-slate-600 text-base sm:text-lg">
            We bridge security &amp; professional deep cleaning with digital supervision, legal compliance, and rapid emergency response.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex justify-center my-8">
          <div className="bg-slate-100 p-1.5 rounded-2xl border border-slate-200 inline-flex gap-2">
            <button
              onClick={() => setActiveTab('grid')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'grid'
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Core Differentiators
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'comparison'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Ayudh Vikas vs Local Vendors
            </button>
          </div>
        </div>

        {/* Core Differentiators Grid View */}
        {activeTab === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_AZS4S_ITEMS.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 w-fit mb-5 group-hover:scale-110 transition-transform shadow-sm">
                    {getIcon(item.icon)}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs font-semibold text-blue-900 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-800" />
                  <span>Guaranteed Standard</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Comparison Matrix Table View */}
        {activeTab === 'comparison' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-xl"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[40rem] text-left text-sm text-slate-700">
                <thead className="bg-slate-50 text-xs text-slate-800 uppercase font-bold border-b border-slate-200">
                  <tr>
                    <th scope="col" className="py-4 px-6">Service Standard</th>
                    <th scope="col" className="py-4 px-6 text-blue-950 bg-blue-50/80 border-x border-blue-200 font-bold">
                      Ayudh Vikas Solutions
                    </th>
                    <th scope="col" className="py-4 px-6 text-slate-500">Traditional Local Vendors</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-900">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 bg-blue-50/30 border-x border-blue-100 text-slate-900 font-semibold">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0" />
                          <span>{row.azs4s}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-slate-500">
                        <div className="flex items-center gap-2">
                          <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                          <span>{row.traditional}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 text-center text-xs text-slate-500 border-t border-slate-200 font-medium">
              *All Ayudh Vikas clients receive monthly statutory proof filings alongside itemized invoices.
            </div>
          </motion.div>
        )}

        {/* Brand Culture & Justdial Rating Banner Showcase */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
              <span>★ EXCELLENCE & LEADERSHIP PHILOSOPHY</span>
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Verified Excellence & Corporate Culture
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Our commitment to teamwork, customer satisfaction, and registered enterprise quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Award Poster */}
            <div className="rounded-2xl border border-amber-200 overflow-hidden bg-amber-50/30 shadow-sm hover:shadow-md transition-all group flex flex-col">
              <div className="h-60 overflow-hidden relative bg-white">
                <img
                  src={brandJustdialImg}
                  alt="Justdial Users' Choice Award 2026 5 Stars"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 bg-white flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold mb-1">
                    VOTED #1 IN WARANGAL & TRI-CITIES
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Justdial 5-Star Users' Choice Award 2026</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Recognized with 5-star ratings across Warangal Railway Gate and surrounding industrial zones for high-integrity security guarding and facility management.
                  </p>
                </div>
              </div>
            </div>

            {/* Teamwork Quote Poster */}
            <div className="rounded-2xl border border-blue-200 overflow-hidden bg-blue-50/30 shadow-sm hover:shadow-md transition-all group flex flex-col">
              <div className="h-60 overflow-hidden relative bg-white">
                <img
                  src={brandTeamworkImg}
                  alt="Teamwork & Productivity Culture - Ayudh Vikas"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 bg-white flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-900 text-[10px] font-bold mb-1">
                    CORPORATE VALUES & PHILOSOPHY
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Teamwork & Leadership Culture</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    "Great things in business are never done by one person. They're done by a team of people." Powered by leadership, mindfulness, and dedicated workforce care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
