import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Zap } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/mockData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedServiceId?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ 
  isOpen, 
  onClose,
  preSelectedServiceId 
}) => {
  const defaultService = SERVICES_DATA.find(s => s.id === preSelectedServiceId)?.title || SERVICES_DATA[0].title;

  const [submitted, setSubmitted] = useState(false);
  const [modalForm, setModalForm] = useState({
    name: '',
    phone: '',
    company: '',
    service: defaultService,
    notes: ''
  });

  if (!isOpen) return null;

  const getWhatsAppUrl = () => {
    const text = `*New Custom SLA Estimate Request - Ayudh Vikas*

👤 *Name:* ${modalForm.name}
📞 *Phone:* ${modalForm.phone}
🏢 *Company/Facility:* ${modalForm.company || 'N/A'}
🛠️ *Service Requested:* ${modalForm.service}
📝 *Notes/Requirements:* ${modalForm.notes || 'None provided'}`;

    return `https://wa.me/919000045073?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalForm.name || !modalForm.phone) {
      alert("Please provide your name and phone number.");
      return;
    }
    const url = getWhatsAppUrl();
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-slate-900 text-white shadow-lg hover:bg-red-600 transition-colors cursor-pointer"
          aria-label="Close quotation form"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>24-Hour Express Quote</span>
            </div>

            <h3 className="text-xl font-extrabold text-slate-900 mb-2">
              Request Your Custom SLA Estimate
            </h3>

            <p className="text-xs text-slate-600 mb-6">
              Fill in your requirement to get an immediate callback from our Operations Manager with exact pricing schedules.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Selected Service Category:
                </label>
                <select
                  value={modalForm.service}
                  onChange={(e) => setModalForm({ ...modalForm, service: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-500"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={modalForm.name}
                    onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="9000045073"
                    value={modalForm.phone}
                    onChange={(e) => setModalForm({ ...modalForm, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Company / Facility Name</label>
                <input
                  type="text"
                  placeholder="e.g. Apex Tech Park, Hanamkonda"
                  value={modalForm.company}
                  onChange={(e) => setModalForm({ ...modalForm, company: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Property Size / Staff Count Notes</label>
                <textarea
                  rows={2}
                  placeholder="e.g. 20,000 sq.ft IT Park, need 6 guards in 2 shifts..."
                  value={modalForm.notes}
                  onChange={(e) => setModalForm({ ...modalForm, notes: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-blue-900 hover:from-red-500 hover:to-blue-800 text-white font-bold text-xs shadow-lg shadow-red-600/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Send className="w-4 h-4 text-amber-200" />
                <span>Submit Quote Request to WhatsApp</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-red-600 mx-auto animate-bounce" />
            <h3 className="text-xl font-bold text-slate-900">Quote Request Submitted!</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Thank you, <strong className="text-slate-900">{modalForm.name}</strong>. Your estimate request for <strong className="text-blue-900">{modalForm.service}</strong> has been prepared for WhatsApp (+91 9000045073).
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Send / Open WhatsApp Message (+91 9000045073)</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200 hover:text-slate-900 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
