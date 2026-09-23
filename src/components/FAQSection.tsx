import React, { useState } from 'react';
import { HelpCircle, ChevronDown, PhoneCall } from 'lucide-react';
import { FAQ_ITEMS, COMPANY_INFO } from '../data/mockData';
import { motion, AnimatePresence } from 'motion/react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-300 text-xs font-bold text-blue-900">
            <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clear Answers on Security & Facility Operations
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Everything you need to know about SLAs, police verification, guard replacement, and billing compliance.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base font-bold text-slate-900 flex items-center gap-3">
                    <span className="text-xs font-mono text-red-700 font-bold px-2 py-0.5 rounded bg-red-100 border border-red-300">
                      Q{idx + 1}
                    </span>
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-red-600' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Help Banner */}
        <div className="mt-12 flex flex-col items-stretch justify-between gap-4 rounded-2xl border border-red-800 bg-gradient-to-r from-blue-950 via-blue-900 to-red-950 p-5 text-center shadow-lg shadow-blue-950/10 sm:flex-row sm:items-center sm:p-6 sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">Have specific security audit questions?</h4>
            <p className="text-xs text-blue-100">Speak directly with our Warangal & South India Operations Desk.</p>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-red-700 shadow-md transition-colors hover:bg-red-50 sm:w-auto"
          >
            <PhoneCall className="w-4 h-4 text-red-600" />
            <span>Call {COMPANY_INFO.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
