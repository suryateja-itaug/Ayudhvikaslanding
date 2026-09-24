import React, { useState } from 'react';
import { 
  Calculator, Building2, Users, ShieldCheck, Clock, ArrowRight, 
  CheckCircle2, Sparkles, Send, FileText, Phone, Download, RefreshCw
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { QuoteFormData } from '../types';
import { motion, AnimatePresence } from 'motion/react';

export const QuoteEstimator: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<QuoteFormData>({
    serviceType: 'Security Guarding & Patrol',
    propertyType: 'Commercial IT Park / Office',
    scaleSize: '10 - 25 Personnel',
    shiftRequirement: '24/7 Round the Clock (3 Shifts)',
    location: 'Warangal / Hanamkonda',
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    additionalNotes: ''
  });

  const serviceOptions = [
    { id: 'security', label: 'Security Guarding & Patrol', desc: 'Uniformed guards, supervisory visits, gate logs' },
    { id: 'deep-cleaning', label: 'AyudhKlin Deep Cleaning', desc: 'Detailed home, office, commercial & industrial cleaning' },
    { id: 'facility', label: 'Integrated Facility Management', desc: 'Commercial upkeep, janitorial & MEP maintenance' },
    { id: 'manpower', label: 'Corporate Manpower & Support', desc: 'Front office, pantry boys, warehouse staff' },
    { id: 'event', label: 'Event & VIP Escort Security', desc: 'Crowd management, DFMD scanners, VIP escorts' },
    { id: 'cleaning', label: 'Professional Deep Cleaning', desc: 'Heavy machinery scrubbing, sanitization, facade' },
  ];

  const propertyOptions = [
    'Commercial IT Park / Office',
    'Industrial Manufacturing Plant',
    'Hospital & Healthcare Institute',
    'Shopping Mall / Retail Outlet',
    'Residential Gated Community',
    'Event Venue / Convention Hall'
  ];

  const scaleOptions = [
    '1 - 5 Personnel / Up to 10k sq.ft',
    '5 - 15 Personnel / 10k - 50k sq.ft',
    '15 - 35 Personnel / 50k - 150k sq.ft',
    '35+ Large Enterprise Scale'
  ];

  const shiftOptions = [
    '24/7 Round the Clock (3 Rotating Shifts)',
    '12-Hour Day Shift',
    '12-Hour Night Guard Shift',
    'One-time Event / On-Demand'
  ];

  // Dynamic estimate calculator logic
  const calculateEstimate = () => {
    let baseTier = "Custom Enterprise SLA";
    let estGuards = "4 - 8 Guards";
    let estDeploy = "24 Hours";

    if (formData.scaleSize.includes('1 - 5')) {
      baseTier = "Standard Tier";
      estGuards = "2 - 4 Guards";
      estDeploy = "24 Hours";
    } else if (formData.scaleSize.includes('5 - 15')) {
      baseTier = "Corporate Tier";
      estGuards = "6 - 12 Guards";
      estDeploy = "24 to 36 Hours";
    } else if (formData.scaleSize.includes('15 - 35')) {
      baseTier = "Enterprise Tier";
      estGuards = "16 - 30 Guards + 1 On-Site Supervisor";
      estDeploy = "36 to 48 Hours";
    } else {
      baseTier = "Custom Industrial SLA";
      estGuards = "35+ Staff + Dedicated Command Manager";
      estDeploy = "48 Hours";
    }

    return { baseTier, estGuards, estDeploy };
  };

  const estimateInfo = calculateEstimate();

  const getEstimatorWhatsAppUrl = () => {
    const text = `*New Deployment Estimate Request - Ayudh Vikas*

👤 *Name:* ${formData.fullName}
📞 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email || 'N/A'}
🏢 *Company/Property:* ${formData.companyName || formData.propertyType}
📍 *Location:* ${formData.location || 'N/A'}
🛠️ *Service Type:* ${formData.serviceType}
📐 *Property Size:* ${formData.propertySize}
🛡️ *Security Tier:* ${formData.securityTier}
⏰ *Shifts:* ${formData.shiftRequirement}
📊 *Roster Estimate:* ${estimateInfo.estGuards}
⏱️ *Deployment SLA:* ${estimateInfo.estDeploy}
📝 *Notes:* ${formData.additionalNotes || 'None provided'}`;

    return `https://wa.me/919000045073?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert("Please provide your name and phone number so our operations manager can contact you.");
      return;
    }
    const url = getEstimatorWhatsAppUrl();
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
  };

  return (
    <section id="estimator" className="py-24 bg-slate-900/40 relative border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-semibold text-red-300">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>24-HOUR ESTIMATE CALCULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get an Instant Custom{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-red-500">
              Deployment Quote
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            Configure your property requirements in 3 simple steps to view estimated deployment timelines and receive a transparent cost breakdown.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-4 shadow-2xl sm:rounded-3xl sm:p-10">
          
          {/* Progress Indicator */}
          {!submitted && (
            <div className="mb-8">
              <div className="mb-2 flex items-center justify-between gap-2 text-[10px] font-semibold text-slate-400 sm:text-xs">
                <span className={`min-w-0 truncate ${step >= 1 ? 'text-red-400' : ''}`}>1. Service</span>
                <span className={`min-w-0 truncate ${step >= 2 ? 'text-red-400' : ''}`}>2. Scale</span>
                <span className={`min-w-0 truncate ${step >= 3 ? 'text-red-400' : ''}`}>3. Contact</span>
              </div>

              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-red-600 via-red-500 to-blue-900 transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Form Content */}
          <AnimatePresence mode="wait">
            {!submitted ? (
              <form onSubmit={handleSubmit}>
                
                {/* STEP 1: Service Type & Property Type */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-bold text-white mb-3">
                        Select Primary Service Category:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {serviceOptions.map((opt) => (
                          <div
                            key={opt.id}
                            onClick={() => setFormData({ ...formData, serviceType: opt.label })}
                            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                              formData.serviceType === opt.label
                                ? 'bg-blue-950/80 border-red-500 shadow-lg shadow-red-500/10'
                                : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-bold text-white">{opt.label}</span>
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                formData.serviceType === opt.label ? 'border-red-500 bg-red-500 text-white' : 'border-slate-600'
                              }`}>
                                {formData.serviceType === opt.label && <CheckCircle2 className="w-3 h-3 text-white" />}
                              </div>
                            </div>
                            <span className="text-[11px] text-slate-400 block">{opt.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-white mb-3">
                        Select Facility / Property Type:
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-red-500"
                      >
                        {propertyOptions.map((prop, idx) => (
                          <option key={idx} value={prop}>{prop}</option>
                        ))}
                      </select>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-blue-900 text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-red-500/25"
                      >
                        <span>Next Step: Scale & Shift</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Scale & Shift Requirements */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-bold text-white mb-3">
                        Estimated Facility Scale or Staff Count:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {scaleOptions.map((s, idx) => (
                          <div
                            key={idx}
                            onClick={() => setFormData({ ...formData, scaleSize: s })}
                            className={`p-3.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                              formData.scaleSize === s
                                ? 'bg-blue-950/80 border-red-500 text-red-300'
                                : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                            }`}
                          >
                            {s}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-white mb-3">
                        Shift & Hours Requirement:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {shiftOptions.map((sh, idx) => (
                          <div
                            key={idx}
                            onClick={() => setFormData({ ...formData, shiftRequirement: sh })}
                            className={`p-3.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                              formData.shiftRequirement === sh
                                ? 'bg-blue-950/80 border-red-500 text-red-300'
                                : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                            }`}
                          >
                            {sh}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Live Preview Card Box */}
                    <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs space-y-2">
                      <div className="text-slate-400 font-semibold flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>PRELIMINARY ESTIMATE METRICS:</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-slate-200">
                        <div>
                          <span className="text-slate-500 block">Recommended Personnel:</span>
                          <strong className="text-red-400">{estimateInfo.estGuards}</strong>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Target SLA Window:</span>
                          <strong className="text-blue-400">{estimateInfo.estDeploy}</strong>
                        </div>
                        <div>
                          <span className="text-slate-500 block">SLA Package Tier:</span>
                          <strong className="text-amber-300">{estimateInfo.baseTier}</strong>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-5 py-2.5 rounded-xl bg-slate-900 text-slate-300 text-xs font-semibold hover:text-white cursor-pointer"
                      >
                        Back
                      </button>

                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-blue-900 text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-red-500/25"
                      >
                        <span>Next Step: Contact Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Contact & Lead Submission */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="E.g. Ramesh Varma"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Company / Property Name
                        </label>
                        <input
                          type="text"
                          placeholder="E.g. Apex Tech Park"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Phone Number (WhatsApp Preferred) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 9876543210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="Name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Location / City (e.g. Hanamkonda, Warangal, Kazipet)
                      </label>
                      <input
                        type="text"
                        placeholder="E.g. Hanamkonda, Warangal"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Additional Requirements or Specific Instructions
                      </label>
                      <textarea
                        rows={2}
                        placeholder="E.g. Need 2 Guards For The Entrance Gate And A Deep-cleaning Team For The Office..."
                        value={formData.additionalNotes}
                        onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-red-500 resize-none"
                      />
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-5 py-2.5 rounded-xl bg-slate-900 text-slate-300 text-xs font-semibold hover:text-white cursor-pointer"
                      >
                        Back
                      </button>

                      <button
                        type="submit"
                        className="px-7 py-3 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-blue-900 hover:from-red-500 hover:to-blue-800 text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-xl shadow-red-600/30"
                      >
                        <Send className="w-4 h-4 text-amber-200" />
                        <span>Get Instant Official Estimate</span>
                      </button>
                    </div>
                  </motion.div>
                )}

              </form>
            ) : (
              /* Success confirmation state */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 animate-bounce" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">
                    Quote Request Received, {formData.fullName || 'Valued Client'}!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-lg mx-auto">
                    Our Senior Security Operations Manager will review your requirements for <strong className="text-red-300">{formData.companyName || formData.propertyType}</strong> and contact you at <strong className="text-white">{formData.phone}</strong> within 30 minutes.
                  </p>
                </div>

                {/* Estimate Summary Box */}
                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-left text-xs space-y-3 max-w-lg mx-auto">
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Primary Service:</span>
                    <span className="font-bold text-white">{formData.serviceType}</span>
                  </div>

                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Target Location:</span>
                    <span className="font-bold text-red-300">{formData.location}</span>
                  </div>

                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Personnel Roster:</span>
                    <span className="font-bold text-blue-400">{estimateInfo.estGuards}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-400">Deployment SLA:</span>
                    <span className="font-bold text-amber-300">{estimateInfo.estDeploy}</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                  <a
                    href={getEstimatorWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-600/30"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Send / Open WhatsApp Message (+91 9000045073)</span>
                  </a>

                  <button
                    onClick={resetForm}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-300 text-xs font-semibold border border-slate-800 flex items-center gap-2 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Calculate Another Property</span>
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
