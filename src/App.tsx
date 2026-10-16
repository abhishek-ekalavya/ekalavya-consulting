import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TeamPage } from './pages/TeamPage';
import { ServicesPage } from './pages/ServicesPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { BlogsPage } from './pages/BlogsPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';
import { SeoHead } from './components/SeoHead';
import { TacticalModal } from './components/TacticalModal';
import { CalendlyModal } from './components/CalendlyModal';
import { Footer } from './components/Footer';
import { ModalView } from './types';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  const [modalView, setModalView] = useState<ModalView>('closed');
  const [calendlyOpen, setCalendlyOpen] = useState<boolean>(false);
  const [leadDetails, setLeadDetails] = useState<{ name: string; company: string }>({
    name: '',
    company: '',
  });

  const handleOpenChooser = () => {
    setModalView('chooser');
  };

  const handleSelectLongGame = () => {
    setModalView('formA');
  };

  const handleSelectShortGame = () => {
    setModalView('formB');
  };

  const handleCloseModal = () => {
    setModalView('closed');
  };

  const handleOpenCalendly = (name: string, company: string) => {
    setLeadDetails({ name, company });
    setCalendlyOpen(true);
  };

  if (isAdmin) {
    return (
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A1931] text-white flex flex-col selection:bg-[#10B65D]/30 selection:text-[#10B65D]">
      <ScrollToTop />
      <SeoHead />

      {/* Institutional Top Notification Bar with Scrolling Ticker */}
      <div className="border-b border-white/10 bg-[#071326] py-2 overflow-hidden font-mono text-[11px] tracking-wider text-white/70">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-2 mx-8">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B65D] animate-pulse" />
              <span>Q1/Q2 SELECTIVE INTAKE OPEN &bull; EVERY MANDATE VETTED DIRECTLY</span>
            </span>
          ))}
        </div>
      </div>

      {/* Sticky Header Navigation with 6 links & LOCK THE TARGET button */}
      <Navbar onLockTarget={handleOpenChooser} />

      {/* Main Routed Content */}
      <main className="flex-1">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onLockTarget={handleOpenChooser}
                onSelectLongGame={handleSelectLongGame}
                onSelectShortGame={handleSelectShortGame}
              />
            } 
          />
          <Route 
            path="/about" 
            element={<AboutPage onLockTarget={handleOpenChooser} />} 
          />
          <Route 
            path="/team" 
            element={<TeamPage onLockTarget={handleOpenChooser} />} 
          />
          <Route 
            path="/our-team" 
            element={<TeamPage onLockTarget={handleOpenChooser} />} 
          />
          <Route 
            path="/services" 
            element={
              <ServicesPage 
                onLockTarget={handleOpenChooser}
                onSelectLongGame={handleSelectLongGame}
                onSelectShortGame={handleSelectShortGame}
              />
            } 
          />
          <Route 
            path="/case-studies" 
            element={<CaseStudiesPage onLockTarget={handleOpenChooser} />} 
          />
          <Route 
            path="/blogs" 
            element={<BlogsPage onLockTarget={handleOpenChooser} />} 
          />
          <Route 
            path="/blogs/:slug" 
            element={<BlogDetailPage onLockTarget={handleOpenChooser} />} 
          />
          <Route 
            path="/contact" 
            element={<ContactPage onLockTarget={handleOpenChooser} />} 
          />
          {/* Catch-all to Home */}
          <Route 
            path="*" 
            element={<HomePage onLockTarget={handleOpenChooser} />} 
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onLockTarget={handleOpenChooser} />

      {/* Tactical Chooser / Form A / Form B Modal */}
      <TacticalModal
        view={modalView}
        onClose={handleCloseModal}
        onSelectView={(v) => setModalView(v)}
        onOpenCalendly={handleOpenCalendly}
      />

      {/* Calendly Booking Simulation Modal */}
      <CalendlyModal
        isOpen={calendlyOpen}
        onClose={() => setCalendlyOpen(false)}
        leadName={leadDetails.name}
        leadCompany={leadDetails.company}
      />
    </div>
  );
}

// Main App entry point
export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
