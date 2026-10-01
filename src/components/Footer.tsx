import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { EkalavyaLogo } from './EkalavyaLogo';
import { getSiteSettings } from '../data/contentLoader';

interface FooterProps {
  onLockTarget?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const settings = getSiteSettings();
  const email = settings.email || 'reach@ekalavyaconsulting.com';
  const phone = settings.phone || '+91 98205 91873';

  return (
    <footer id="footer" aria-label="Ekalavya Consulting Footer" className="w-full border-t border-white/10 bg-[#071326] text-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* Left: Ekalavya Consulting logo + Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <EkalavyaLogo className="h-10 w-auto" />
            <p className="font-cinzel text-xs font-bold tracking-widest text-[#00D080]">
              ONE ARROW. ONE KILL. NO WASTE.
            </p>
          </div>

          {/* Center: Coordinates - Email, Phone, Mumbai | Remote-First */}
          <div className="flex flex-col items-center space-y-2 text-xs text-white/80 font-mono">
            <a 
              href={`mailto:${email}`} 
              className="inline-flex items-center gap-2 hover:text-[#00D080] transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-[#00D080]" />
              <span>{email}</span>
            </a>
            <a 
              href={`tel:${phone.replace(/[^0-9+]/g, '')}`} 
              className="inline-flex items-center gap-2 hover:text-[#00D080] transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-[#00D080]" />
              <span>{phone}</span>
            </a>
            <div className="inline-flex items-center gap-2 text-white/60">
              <MapPin className="h-3.5 w-3.5 text-[#00D080]" />
              <span>Mumbai | Remote-First</span>
            </div>
          </div>

          {/* Right: LinkedIn icon, copyright 2026 Ekalavya Consulting */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            <a
              href="https://www.linkedin.com/company/ekalavya-consulting"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-[#00D080] hover:bg-[#00D080]/10 hover:text-[#00D080]"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <p className="font-sans text-xs text-white/60">
              &copy; 2026 Ekalavya Consulting. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};
