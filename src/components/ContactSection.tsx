import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare, 
  Building, Navigation
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import brandRegImg from '../assets/images/brand_reg_banner_1784802685075.jpg';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactState, setContactState] = useState({
    name: '',
    phone: '',
    email: '',
    serviceInterest: 'Security Guarding',
    message: ''
  });

  const getContactWhatsAppUrl = () => {
    const text = `*New Direct Inquiry - Ayudh Vikas*

👤 *Name:* ${contactState.name}
📞 *Phone:* ${contactState.phone}
📞 *Landline:* ${contactState.phone2}
✉️ *Email:* ${contactState.email || 'N/A'}
🛠️ *Service Interest:* ${contactState.serviceInterest}
📝 *Facility Details / Message:* ${contactState.message || 'None provided'}`;

    return `https://wa.me/919000045073?text=${encodeURIComponent(text)}`;
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactState.name || !contactState.phone) {
      alert("Please enter your name and phone number.");
      return;
    }
    const url = getContactWhatsAppUrl();
    window.open(url, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-300 text-xs font-bold text-blue-900">
            <MapPin className="w-3.5 h-3.5 text-red-600" />
            <span>24/7 REGIONAL HEADQUARTERS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Connect with Our Security &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-red-600 to-red-700">
              Facility Desk
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Reach our central operations team in Warangal & Hanamkonda or request an immediate on-site facility audit.
          </p>
        </div>

        {/* Official Telangana Government License Banner Artwork */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-blue-200 bg-gradient-to-r from-blue-900 via-slate-900 to-red-900 p-2 sm:p-4 shadow-lg">
          <div className="bg-white rounded-xl overflow-hidden border border-slate-200 flex justify-center p-1 sm:p-2">
            <img
              src={brandRegImg}
              alt="Ayudh Vikas Telangana Government Registration License Reg. No. 417/2025"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain rounded-lg max-w-5xl mx-auto shadow-sm"
            />
          </div>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Form */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Quick Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone Card */}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="group p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-500 transition-all flex items-start gap-4 shadow-sm"
              >
                <div className="p-3 rounded-xl bg-red-100 border border-red-200 text-red-600 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 block uppercase">24/7 Helpline</span>
                  <strong className="text-sm text-slate-900 group-hover:text-red-600 transition-colors block mt-0.5">
                    {COMPANY_INFO.phoneDisplay}
                  </strong>
                  <strong className="text-sm text-slate-900 group-hover:text-red-600 transition-colors block mt-0.5">
                    ,{COMPANY_INFO.phoneDisplay2}
                  </strong>
                  <span className="text-[10px] text-red-600 font-bold block mt-1">Available 24/7/365</span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="group p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-500 transition-all flex items-start gap-4 shadow-sm"
              >
                <div className="p-3 rounded-xl bg-blue-100 border border-blue-200 text-blue-900 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 block uppercase">Official Email</span>
                  <strong className="mt-0.5 block max-w-full truncate text-sm text-slate-900 transition-colors group-hover:text-red-600">
                    {COMPANY_INFO.email}
                  </strong>
                  <span className="text-[10px] text-slate-500 block mt-1">Responses within 2 hours</span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-red-500 transition-all flex items-start gap-4 sm:col-span-2 shadow-sm"
              >
                <div className="p-3 rounded-xl bg-red-100 border border-red-300 text-red-600 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase text-slate-500">WhatsApp Instant Chat</span>
                    <span className="rounded border border-red-300 bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-800">Fastest Response</span>
                  </div>
                  <strong className="text-sm text-slate-900 group-hover:text-red-600 transition-colors block mt-0.5">
                    Click to Start WhatsApp Conversation (+91 9000045073)
                  </strong>
                </div>
              </a>

            </div>

            {/* Quick Contact Form */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl">
              <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Send className="w-4 h-4 text-red-600" />
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                Fill out the form below and your inquiry will be sent as a direct message to our operations desk on WhatsApp (+91 9000045073).
              </p>

              {!formSubmitted ? (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="E.g. Anand Rao"
                        value={contactState.name}
                        onChange={(e) => setContactState({ ...contactState, name: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="9000045073"
                        value={contactState.phone}
                        onChange={(e) => setContactState({ ...contactState, phone: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="Name@company.com"
                        value={contactState.email}
                        onChange={(e) => setContactState({ ...contactState, email: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Service Interest</label>
                      <select
                        value={contactState.serviceInterest}
                        onChange={(e) => setContactState({ ...contactState, serviceInterest: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      >
                        <option value="Security Guarding">Security Guarding</option>
                        <option value="Facility Management">Integrated Facility Management</option>
                        <option value="Corporate Staffing">Corporate Support Staff</option>
                        <option value="Deep Cleaning">Deep Cleaning & Sanitization</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Facility Details / Notes</label>
                    <textarea
                      rows={3}
                      placeholder="Specify Square Footage, Number Of Shifts, Or Location..."
                      value={contactState.message}
                      onChange={(e) => setContactState({ ...contactState, message: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-blue-900 hover:from-red-500 hover:to-blue-800 text-white font-bold text-xs shadow-lg shadow-red-600/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <Send className="w-4 h-4 text-amber-200" />
                    <span>Send Message via WhatsApp (+91 9000045073)</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-red-600 mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-slate-900">Message Prepared for WhatsApp!</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Thank you <strong className="text-slate-900">{contactState.name}</strong>. Your direct message has been formatted for WhatsApp desk (<strong className="text-slate-900">+91 9000045073</strong>).
                  </p>
                  <a
                    href={getContactWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors w-full"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send / Open WhatsApp Message (+91 9000045073)</span>
                  </a>
                </div>
              )}

            </div>

          </div>

          {/* Right Column: Stylized Headquarters Location Card & Coverage */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-start justify-between gap-3 border-b border-slate-200 pb-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-red-100 border border-red-200 text-red-600">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Ayudh Vikas Head Office</h3>
                    <p className="text-[11px] text-slate-500">Hunter Road, Warangal, Telangana</p>
                  </div>
                </div>

                <span className="shrink-0 rounded border border-blue-300 bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-900">
                  OPEN NOW
                </span>
              </div>

              {/* Full Address details */}
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Registered Location:</strong>
                    <span>Km Complex, Hunter Road, Warangal Railway Gate, Warangal - 506002, Telangana, India.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-amber-50 p-3 rounded-xl border border-amber-200/80">
                  <Navigation className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-900 block font-bold">Landmark:</strong>
                    <span className="text-amber-800 font-medium">Opposite Kasam Janata Sale</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-red-600 shrink-0" />
                  <div>
                    <strong className="text-slate-900 block font-bold">Command Center Hours:</strong>
                    <span>24 Hours / 7 Days a Week (Always Active)</span>
                  </div>
                </div>
              </div>

              {/* Coverage Cities Tag Cloud */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Active Service Coverage Areas:
                </span>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  {['Hanamkonda', 'Warangal', 'Kazipet'].map((city, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold shadow-2xs">
                      📍 {city}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
