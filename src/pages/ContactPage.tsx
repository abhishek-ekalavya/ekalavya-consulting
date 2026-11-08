import React from 'react';
import { Crosshair, Mail, MessageSquare, Phone, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { getContactContent } from '../data/contentLoader';

interface ContactPageProps {
  onLockTarget: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onLockTarget }) => {
  const contact = getContactContent();
  const direct = contact.direct_box;
  const brief = contact.brief_box;

  return (
    <div className="bg-tactical-grid py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Tag */}
        <div className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.2em] text-[#00D084] uppercase">
          <span>{contact.breadcrumb || '06 • DIRECT CONTACT DESK'}</span>
        </div>

        <h1 className="font-cinzel text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {contact.title || 'Contact Ekalavya Consulting'}
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
          {contact.subtitle || 'No automated ticketing queues. No junior gatekeepers. Direct connection to the Governor and executive operational desk.'}
        </p>

        <div className="my-12 h-px w-full bg-white/10" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          
          {/* Contact Direct Box */}
          <div className="rounded-xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8">
            <h2 className="font-cinzel text-xl font-bold text-white">
              {direct?.title || 'Direct Executive Lines'}
            </h2>
            <p className="mt-2 text-xs text-white/60">
              {direct?.subtitle || 'For urgent brief intake, executive consultations, or high-stakes marketing mandates.'}
            </p>

            <div className="mt-8 space-y-4">
              
              {/* Phone / WhatsApp */}
              <a
                href={direct?.whatsapp_url || 'https://wa.me/919820049031'}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-lg border border-[#10B65D]/30 bg-[#10B65D]/10 p-4 transition-all hover:border-[#10B65D] hover:bg-[#10B65D]/15"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#10B65D]/20 text-[#10B65D]">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] font-semibold text-[#10B65D] uppercase">
                      {direct?.whatsapp_label || 'Direct WhatsApp & Urgent Mobile Desk'}
                    </div>
                    <div className="font-mono text-base font-bold text-white">
                      {direct?.whatsapp_display || '9820049031'}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-[#10B65D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Direct Phone Dial */}
              <a
                href={direct?.phone_href || 'tel:+919820049031'}
                className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-white/25 hover:bg-white/5"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-white/5 text-white/80">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] font-semibold text-white/50 uppercase">
                      {direct?.phone_label || 'Voice Telephony'}
                    </div>
                    <div className="font-mono text-base font-bold text-white">
                      {direct?.phone_display || '+91 98200 49031'}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${direct?.email_display || 'helloekalavya@gmail.com'}`}
                className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-white/25 hover:bg-white/5"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-white/5 text-white/80">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] font-semibold text-white/50 uppercase">
                      {direct?.email_label || 'Official Dossier Email'}
                    </div>
                    <div className="font-mono text-base font-bold text-white">
                      {direct?.email_display || 'helloekalavya@gmail.com'}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </a>

            </div>

            <div className="mt-8 flex items-center gap-2 rounded border border-white/10 bg-white/5 p-3 text-xs text-white/60">
              <ShieldCheck className="h-4 w-4 text-[#10B65D]" />
              <span>{direct?.response_sla || 'Standard response window: < 4 operational hours'}</span>
            </div>
          </div>

          {/* Quick Target Lock Card */}
          <div className="flex flex-col justify-between rounded-xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded bg-[#10B65D]/10 px-3 py-1 font-mono text-xs font-semibold text-[#10B65D]">
                <Crosshair className="h-3.5 w-3.5" /> {brief?.badge || 'FAST TRACK SUBMISSION'}
              </div>

              <h2 className="font-cinzel text-xl font-bold text-white">
                {brief?.title || 'Submit Formal Brief'}
              </h2>

              <p className="mt-3 text-xs leading-relaxed text-white/70 sm:text-sm">
                {brief?.description || 'If your requirement is already defined, launch the Target Chooser directly. Choose between fractional governance (Long Game) or specialized project execution (Short Game).'}
              </p>

              <div className="mt-6 space-y-3 font-mono text-xs text-white/60">
                {(brief?.bullets || []).map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#10B65D]" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                onClick={onLockTarget}
                className="flex w-full items-center justify-center gap-2.5 rounded bg-[#10B65D] py-3.5 font-mono text-sm font-bold tracking-wider text-white shadow-xl shadow-[#10B65D]/25 transition-all hover:bg-[#0ea052]"
              >
                <Crosshair className="h-4 w-4" />
                <span>{brief?.cta_text || 'LOCK THE TARGET NOW'}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
