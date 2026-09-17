import React, { useState, useEffect } from 'react';
import { SEO } from './components/SEO';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { HomePreviews } from './components/HomePreviews';
import { PageHeader } from './components/PageHeader';
import { ServicesBento } from './components/ServicesBento';
import { S4SmartProducts } from './components/S4SmartProducts';
import { AyudhKlinServices } from './components/AyudhKlinServices';
import { WhyUs } from './components/WhyUs';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ServiceModal } from './components/ServiceModal';
import { FloatingActions } from './components/FloatingActions';
import { AboutUs } from './components/AboutUs';
import { ComingSoonApp } from './components/ComingSoonApp';
import { ServiceItem } from './types';

const VALID_TABS = ['home', 'services', 'ayudhklin-products', 'ayudhklin-services', 'about-us', 'why-us', 'faq', 'contact', 'av-ride', 'av-food'];

export default function App() {
  const [activeTab, setActiveTab] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'ayudhklin') return 'ayudhklin-products';
    return VALID_TABS.includes(hash) ? hash : 'home';
  });

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteServiceId, setQuoteServiceId] = useState<string | undefined>(undefined);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Synchronize window location hash on hash change or browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setActiveTab(hash === 'ayudhklin' ? 'ayudhklin-products' : VALID_TABS.includes(hash) ? hash : 'home');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    window.location.hash = tabId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (serviceId?: string) => {
    setQuoteServiceId(serviceId);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleCloseServiceModal = () => {
    setSelectedService(null);
  };

  const isStandaloneApp = activeTab === 'av-ride' || activeTab === 'av-food';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white antialiased">
      {/* Dynamic SEO Meta & Schema Injector */}
      <SEO activeTab={activeTab} />

      {/* Translucent Header Navbar */}
      {!isStandaloneApp && (
        <Navbar
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />
      )}

      {/* Main Separate Page Views */}
      <main className="min-h-[70vh]">
        {activeTab === 'home' && (
          <div>
            <Hero 
              onOpenQuoteModal={() => handleOpenQuoteModal()} 
              onSelectTab={handleSelectTab} 
            />
            <StatsBar />
            <HomePreviews 
              onSelectTab={handleSelectTab} 
              onOpenQuoteModal={handleOpenQuoteModal} 
            />
          </div>
        )}

        {activeTab === 'services' && (
          <div>
            <PageHeader 
              badge="Services Portfolio"
              title="Integrated Solutions Portfolio"
              subtitle="Explore our full suite of security officers, electronic CCTV surveillance, facility management, and pre-vetted corporate manpower."
              onSelectTab={handleSelectTab}
              onOpenQuoteModal={() => handleOpenQuoteModal()}
            />
            <ServicesBento 
              onSelectService={handleSelectService}
              onOpenQuoteModal={handleOpenQuoteModal}
            />
          </div>
        )}

        {activeTab === 'ayudhklin-products' && (
          <S4SmartProducts
            onOpenQuoteModal={handleOpenQuoteModal}
            onSelectTab={handleSelectTab}
          />
        )}

        {activeTab === 'ayudhklin-services' && (
          <AyudhKlinServices onOpenQuoteModal={handleOpenQuoteModal} />
        )}

        {activeTab === 'about-us' && <AboutUs />}

        {activeTab === 'why-us' && (
          <div>
            <PageHeader 
              badge="The Ayudh Vikas Differentiators"
              title="Why Enterprise Leaders Trust Ayudh Vikas"
              subtitle="100% statutory compliant security and facility operations across Telangana and South India."
              onSelectTab={handleSelectTab}
              onOpenQuoteModal={() => handleOpenQuoteModal()}
            />
            <WhyUs />
          </div>
        )}

        {activeTab === 'faq' && (
          <div>
            <PageHeader 
              badge="Operations FAQ"
              title="Frequently Asked Questions"
              subtitle="Clear, transparent answers on guard SLAs, police verification, substitute guard response, and statutory billing compliance."
              onSelectTab={handleSelectTab}
            />
            <FAQSection />
          </div>
        )}

        {activeTab === 'contact' && (
          <div>
            <PageHeader 
              badge="Regional Headquarters"
              title="Contact Warangal & Hanamkonda Command HQ"
              subtitle="Connect with our 24/7 central operations desk or request an on-site security assessment for your facility."
              onSelectTab={handleSelectTab}
              onOpenQuoteModal={() => handleOpenQuoteModal()}
            />
            <ContactSection />
          </div>
        )}

        {activeTab === 'av-ride' && (
          <ComingSoonApp
            type="ride"
            onSelectTab={handleSelectTab}
            onOpenQuoteModal={() => handleOpenQuoteModal('AV Ride')}
          />
        )}

        {activeTab === 'av-food' && (
          <ComingSoonApp
            type="food"
            onSelectTab={handleSelectTab}
            onOpenQuoteModal={() => handleOpenQuoteModal('AV Food')}
          />
        )}
      </main>

      {/* Footer */}
      {!isStandaloneApp && <Footer onSelectTab={handleSelectTab} />}

      {/* Popups & Sticky Widgets */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        preSelectedServiceId={quoteServiceId}
      />

      <ServiceModal
        service={selectedService}
        onClose={handleCloseServiceModal}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {!isStandaloneApp && <FloatingActions onOpenQuoteModal={() => handleOpenQuoteModal()} />}
    </div>
  );
}
