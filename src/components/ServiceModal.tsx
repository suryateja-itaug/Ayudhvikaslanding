import React from 'react';
import { X, Check, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuoteModal: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ 
  service, 
  onClose, 
  onOpenQuoteModal 
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/60 p-0 backdrop-blur-md animate-in fade-in duration-200 sm:items-center sm:p-4">
      <div 
        className="relative max-h-[92dvh] w-full max-w-2xl overflow-y-auto overflow-x-hidden rounded-t-3xl border border-slate-200 bg-white p-5 shadow-2xl sm:rounded-3xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-xl bg-slate-900/60 backdrop-blur-md border border-white/20 text-white hover:bg-slate-900/80 transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        {service.image && (
          <div className="relative -mx-5 -mt-5 mb-6 h-44 overflow-hidden border-b border-slate-200 sm:-mx-8 sm:-mt-8 sm:h-56">
            <img
              src={service.image}
              alt={service.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-4 left-6 sm:left-8 right-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/90 text-blue-100 text-xs font-bold border border-blue-400/50 mb-2 backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
                <span>AYUDH VIKAS SERVICE SPECIFICATION</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white drop-shadow-sm">
                {service.title}
              </h3>
            </div>
          </div>
        )}

        {/* Top Badge & Title if no image */}
        {!service.image && (
          <div className="space-y-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold border border-blue-300">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-800" />
              <span>AYUDH VIKAS SERVICE SPECIFICATION</span>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900">
              {service.title}
            </h3>
          </div>
        )}

        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {service.fullDesc}
        </p>

        {/* Features List */}
        <div className="space-y-4 mb-6">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Key Scope & Deliverables:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.features.map((feat, i) => (
              <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium">
                <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specs Box */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-3 mb-8">
          <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-red-600" />
            Operational Standards & SLAs
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
            <div>
              <span className="text-slate-500 block">Target Deployment:</span>
              <strong className="text-blue-900">{service.specs.deploymentTime}</strong>
            </div>

            <div>
              <span className="text-slate-500 block">Supervision Mechanism:</span>
              <strong className="text-slate-900">{service.specs.supervision}</strong>
            </div>

            <div className="sm:col-span-2">
              <span className="text-slate-500 block">Statutory & Quality Compliance:</span>
              <strong className="text-blue-900">{service.specs.compliance}</strong>
            </div>

            <div className="sm:col-span-2">
              <span className="text-slate-500 block">Staff Training Modules:</span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {service.specs.trainedIn.map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-white text-[11px] text-slate-700 border border-slate-200 font-medium">
                    • {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Action CTA */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenQuoteModal(service.id);
            }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-blue-900 hover:from-red-500 hover:to-blue-800 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-red-600/20 cursor-pointer transition-all"
          >
            <span>Request Quote for {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
