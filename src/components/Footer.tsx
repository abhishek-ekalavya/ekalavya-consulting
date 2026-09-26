import React from 'react';
import { Mail, MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { EkalavyaEmblem } from './EkalavyaLogo';
import { getSiteSettings } from '../data/contentLoader';

interface FooterProps {
  onLockTarget?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const settings = getSiteSettings();
  const rawPhone = settings.phone.replace(/[^0-9]/g, '');

  return (
    <footer id="institutional-footer" className="border-t border-white/10 bg-[#071326] text-white">
      {/* Main Footer Info */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Col 1: Brand & Dictum */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-3.5">
              <div 
                className="flex h-12 w-12 items-center justify-center p-1.5 bg-[#0F172A]"
                style={{
                  border: '1px solid #1E293B',
                  borderRadius: '8px'
                }}
              >
                <EkalavyaEmblem variant="dark" className="h-full w-full" />
              </div>
              <div className="flex flex-col">
                {/* Line 1: EKALAVYA CONSULTING */}
                <span className="font-cinzel text-xl font-bold tracking-wider text-white leading-none">
                  {settings.site_name.toUpperCase()}
                </span>
                {/* Line 2: INSTITUTIONAL MARKET OWNERSHIP */}
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#00D084] uppercase font-semibold mt-1">
                  INSTITUTIONAL MARKET OWNERSHIP
                </span>
              </div>
            </div>

            <div className="mt-4 max-w-md">
              <h4 className="font-cinzel text-sm font-bold tracking-wider text-[#00D084]">
                One Arrow. One Kill. No Waste.
              </h4>
              <p className="mt-1 text-sm font-normal text-white leading-relaxed">
                We do not act as an agency vendor. We own your marketing, end to end, and deliver outcomes.
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 rounded border border-[#1E293B] bg-[#0F172A]/50 px-3 py-1 font-mono text-[11px] font-semibold tracking-wider text-white/80 uppercase">
                <ShieldCheck className="h-3.5 w-3.5 text-[#00D084]" />
                <span>No Middle Layer &bull; End-to-End Ownership</span>
              </div>
              <div className="font-mono text-xs text-[#00D084]/90 tracking-wide">
                Serving Startups &amp; SMEs across India, Middle East &amp; Europe
              </div>
            </div>
          </div>

          {/* Col 2: Direct Contact Desk */}
          <div className="md:col-span-6 lg:pl-12">
            <div className="font-mono text-xs font-bold tracking-[0.2em] text-[#00D084] uppercase">
              DIRECT EXECUTIVE DESK
            </div>

            <div className="mt-4 space-y-3">
              <a
                id="footer-email-link"
                href={`mailto:${settings.email}`}
                className="group flex items-center justify-between rounded border border-white/10 bg-white/[0.02] p-3.5 transition-colors hover:border-[#00D084]/50 hover:bg-white/[0.05]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded bg-white/5 text-[#00D084]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-white/50 uppercase">Official Enquiries</div>
                    <div className="font-mono text-sm font-semibold text-white">{settings.email}</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </a>

              <a
                id="footer-whatsapp-link"
                href={`https://wa.me/${rawPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded border border-white/10 bg-white/[0.02] p-3.5 transition-colors hover:border-[#00D084]/50 hover:bg-white/[0.05]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded bg-white/5 text-[#00D084]">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-white/50 uppercase">Direct WhatsApp Desk</div>
                    <div className="font-mono text-sm font-semibold text-white">WhatsApp: {settings.phone}</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>


        {/* Bottom Legal / Attributions */}
        {/* Line 3: © 2025 ALL RIGHTS RESERVED. */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row font-mono gap-2">
          <div>
            &copy; 2025 ALL RIGHTS RESERVED. &bull; Serving Startups &amp; SMEs across India, Middle East &amp; Europe
          </div>
          <div className="mt-2 font-mono text-[11px] tracking-wider text-white/50 sm:mt-0">
            ONE ARROW &bull; ONE KILL &bull; NO WASTE
          </div>
        </div>
      </div>
    </footer>
  );
};
