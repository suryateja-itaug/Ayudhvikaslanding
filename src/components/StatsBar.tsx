import React from 'react';
import { Shield, Building, Award, Clock } from 'lucide-react';
import { STATS_LIST } from '../data/mockData';
import { motion } from 'motion/react';

export const StatsBar: React.FC = () => {
  const getIcon = (iconName: string, idx: number) => {
    switch (idx) {
      case 0: return <Shield className="w-6 h-6 text-blue-900" />;
      case 1: return <Building className="w-6 h-6 text-emerald-600" />;
      case 2: return <Award className="w-6 h-6 text-red-600" />;
      case 3: return <Clock className="w-6 h-6 text-amber-600" />;
      default: return <Shield className="w-6 h-6 text-blue-900" />;
    }
  };

  const getBgStyle = (idx: number) => {
    switch (idx) {
      case 0: return 'bg-blue-50 border-blue-200';
      case 1: return 'bg-emerald-50 border-emerald-200';
      case 2: return 'bg-red-50 border-red-200';
      case 3: return 'bg-amber-50 border-amber-200';
      default: return 'bg-blue-50 border-blue-200';
    }
  };

  return (
    <section className="relative z-30 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-xl shadow-slate-900/10 ring-1 ring-blue-100/80 backdrop-blur-sm md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {STATS_LIST.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex items-start gap-4 ${idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-6 lg:pl-8' : ''}`}
            >
              <div className={`p-3 rounded-2xl border shadow-inner flex items-center justify-center shrink-0 ${getBgStyle(idx)}`}>
                {getIcon(stat.icon, idx)}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-1">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-800 mt-0.5">{stat.label}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{stat.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
