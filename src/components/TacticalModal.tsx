import React, { useState } from 'react';
import {
  X,
  Crosshair,
  Compass,
  Flame,
  Zap,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Send,
  AlertCircle,
  Check,
} from 'lucide-react';
import { FormAData, FormBData, FormCData, ExecutionNeed, ModalView } from '../types';

interface TacticalModalProps {
  view: ModalView;
  onClose: () => void;
  onSelectView: (view: ModalView) => void;
  onOpenCalendly: (leadName: string, leadCompany: string) => void;
}

const executionNeedOptions: ExecutionNeed[] = [
  'Corporate AV / Brand Film',
  'Website / SEO / Web App',
  'Packaging / 3D / Product Visuals',
  'Performance Marketing Campaign',
  'Integrated Campaign (Radio, Print, TVC, Outdoor + Digital)',
  'Event / Brand Activation / Trade Show',
];

const leadSourceOptions: string[] = [
  'Website forms',
  'Meta or Google ads',
  'WhatsApp',
  'Phone calls',
  'Walk-ins',
  'Marketplaces',
  'Other',
];

export const TacticalModal: React.FC<TacticalModalProps> = ({
  view,
  onClose,
  onSelectView,
}) => {
  // FORM A STATE
  const [formA, setFormA] = useState<FormAData>({
    name: '',
    companyAndUrl: '',
    monthlySpend: '',
    teamStructure: '',
    whatIsBroken: '',
    sixMonthVision: '',
    phone: '',
    email: '',
  });
  const [errorA, setErrorA] = useState<string>('');
  const [isSubmittingA, setIsSubmittingA] = useState<boolean>(false);

  // FORM B STATE
  const [formB, setFormB] = useState<FormBData>({
    name: '',
    company: '',
    whatNeeded: [],
    briefReady: '',
    budget: '',
    timeline: '',
    phone: '',
    email: '',
    challenge: '',
  });
  const [errorB, setErrorB] = useState<string>('');
  const [isSubmittingB, setIsSubmittingB] = useState<boolean>(false);

  // FORM C STATE
  const [formC, setFormC] = useState<FormCData>({
    name: '',
    companyAndUrl: '',
    leadSources: [],
    monthlyLeads: '',
    followUpSpeed: '',
    automateFirst: '',
    currentTools: '',
    phone: '',
    email: '',
  });
  const [errorC, setErrorC] = useState<string>('');
  const [isSubmittingC, setIsSubmittingC] = useState<boolean>(false);

  if (view === 'closed') return null;

  const handleToggleNeed = (item: ExecutionNeed) => {
    setFormB((prev) => {
      const exists = prev.whatNeeded.includes(item);
      if (exists) {
        return { ...prev, whatNeeded: prev.whatNeeded.filter((n) => n !== item) };
      } else {
        return { ...prev, whatNeeded: [...prev.whatNeeded, item] };
      }
    });
  };

  const handleToggleLeadSource = (source: string) => {
    setFormC((prev) => {
      const exists = prev.leadSources.includes(source);
      if (exists) {
        return { ...prev, leadSources: prev.leadSources.filter((s) => s !== source) };
      } else {
        return { ...prev, leadSources: [...prev.leadSources, source] };
      }
    });
  };

  const validatePhone = (phone: string): boolean => {
    const digits = phone.replace(/\D/g, '');
    return (
      digits.length === 10 ||
      (digits.length === 11 && digits.startsWith('0')) ||
      (digits.length === 12 && digits.startsWith('91'))
    );
  };

  const validateEmail = (email: string): boolean => {
    const trimmed = email.trim();
    return trimmed.includes('@') && trimmed.includes('.');
  };

  const handleSubmitFormA = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formA.name ||
      !formA.companyAndUrl ||
      !formA.monthlySpend ||
      !formA.teamStructure ||
      !formA.whatIsBroken ||
      !formA.phone ||
      !formA.email
    ) {
      setErrorA('Please fill in all required fields to evaluate leadership requirements.');
      return;
    }

    if (!validatePhone(formA.phone)) {
      setErrorA('Please enter a valid 10-digit phone number.');
      return;
    }

    if (!validateEmail(formA.email)) {
      setErrorA('Please enter a valid email address (must include @ and .)');
      return;
    }

    setErrorA('');
    setIsSubmittingA(true);

    const messageLines = [
      'NEW LEAD - FORM A - THE LONG GAME',
      `Name: ${formA.name}`,
      `Company: ${formA.companyAndUrl}`,
      `Phone: ${formA.phone}`,
      `Email: ${formA.email}`,
      `Spend (INR): ${formA.monthlySpend}`,
      `Challenge: ${formA.whatIsBroken}`,
    ];
    if (formA.sixMonthVision) {
      messageLines.push(`6-Month Vision: ${formA.sixMonthVision}`);
    }
    const message = messageLines.join('\n');

    window.open('https://wa.me/919820049031?text=' + encodeURIComponent(message), '_blank');
    window.open(
      'mailto:connect@ekalavyaconsulting.com?subject=New Lead - FORM A - ' +
        formA.companyAndUrl +
        '&body=' +
        encodeURIComponent(message),
      '_blank'
    );

    setTimeout(() => {
      setIsSubmittingA(false);
      onSelectView('thankYouA');
    }, 600);
  };

  const handleSubmitFormB = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formB.name ||
      !formB.company ||
      formB.whatNeeded.length === 0 ||
      !formB.briefReady ||
      !formB.budget ||
      !formB.timeline ||
      !formB.phone ||
      !formB.email
    ) {
      setErrorB('All fields and at least one execution deliverable are required.');
      return;
    }

    if (!validatePhone(formB.phone)) {
      setErrorB('Please enter a valid 10-digit phone number.');
      return;
    }

    if (!validateEmail(formB.email)) {
      setErrorB('Please enter a valid email address (must include @ and .)');
      return;
    }

    setErrorB('');
    setIsSubmittingB(true);

    const selectedDeliverables = formB.whatNeeded.join(', ');
    const challengeB =
      formB.challenge || `Timeline: ${formB.timeline} (Brief ready: ${formB.briefReady})`;

    const message = [
      `NEW LEAD - FORM B - ${selectedDeliverables}`,
      `Name: ${formB.name}`,
      `Company: ${formB.company}`,
      `Phone: ${formB.phone}`,
      `Email: ${formB.email}`,
      `Budget (INR): ${formB.budget}`,
      `Deliverables: ${selectedDeliverables}`,
      `Challenge: ${challengeB}`,
    ].join('\n');

    window.open('https://wa.me/919820049031?text=' + encodeURIComponent(message), '_blank');
    window.open(
      'mailto:connect@ekalavyaconsulting.com?subject=New Lead - FORM B - ' +
        formB.company +
        '&body=' +
        encodeURIComponent(message),
      '_blank'
    );

    setTimeout(() => {
      setIsSubmittingB(false);
      onSelectView('thankYouB');
    }, 600);
  };

  const handleSubmitFormC = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formC.name ||
      !formC.companyAndUrl ||
      formC.leadSources.length === 0 ||
      !formC.monthlyLeads ||
      !formC.followUpSpeed ||
      !formC.automateFirst ||
      !formC.phone ||
      !formC.email
    ) {
      setErrorC('Please fill in all required fields and select at least one lead source.');
      return;
    }

    if (!validatePhone(formC.phone)) {
      setErrorC('Please enter a valid 10-digit phone number.');
      return;
    }

    if (!validateEmail(formC.email)) {
      setErrorC('Please enter a valid email address (must include @ and .)');
      return;
    }

    setErrorC('');
    setIsSubmittingC(true);

    const sources = formC.leadSources.join(', ');

    const messageLines = [
      'NEW LEAD - FORM C - THE SMART GAME (AI AUTOMATION)',
      `Name: ${formC.name}`,
      `Company: ${formC.companyAndUrl}`,
      `Phone: ${formC.phone}`,
      `Email: ${formC.email}`,
      `Lead Sources: ${sources}`,
      `Monthly Leads: ${formC.monthlyLeads}`,
      `Follow-Up Speed: ${formC.followUpSpeed}`,
      `Automate First: ${formC.automateFirst}`,
    ];
    if (formC.currentTools) {
      messageLines.push(`Current Tools: ${formC.currentTools}`);
    }
    const message = messageLines.join('\n');

    window.open('https://wa.me/919820049031?text=' + encodeURIComponent(message), '_blank');
    window.open(
      'mailto:connect@ekalavyaconsulting.com?subject=New Lead - FORM C - ' +
        formC.companyAndUrl +
        '&body=' +
        encodeURIComponent(message),
      '_blank'
    );

    setTimeout(() => {
      setIsSubmittingC(false);
      onSelectView('thankYouC');
    }, 600);
  };

  return (
    <div
      id="tactical-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md"
    >
      <div
        id="tactical-modal-card"
        className={`relative my-8 w-full ${
          view === 'chooser' ? 'max-w-4xl' : 'max-w-2xl'
        } max-h-[90vh] overflow-y-auto rounded-xl border border-white/20 bg-[#0A1931] p-6 shadow-2xl transition-all sm:p-8`}
      >
        {/* Close Button (for Chooser and ThankYou views) */}
        {(view === 'chooser' ||
          view === 'thankYouA' ||
          view === 'thankYouB' ||
          view === 'thankYouC') && (
          <button
            id="modal-close-btn"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded border border-white/10 p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            title="Close"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        {/* 1. CHOOSER POPUP */}
        {view === 'chooser' && (
          <div id="view-chooser" className="py-2">
            <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded border border-[#00D084]/40 bg-[#00D084]/10 text-[#00D084]">
                <Crosshair className="h-6 w-6" />
              </div>
              <div>
                <span className="font-mono text-xs font-semibold tracking-widest text-[#00D084] uppercase">
                  BOOK A CALL
                </span>
                <h3 className="font-cinzel text-xl font-bold text-white sm:text-2xl">
                  Which battle are we fighting?
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {/* BUTTON A: I Need Direction */}
              <button
                id="chooser-button-a"
                onClick={() => onSelectView('formA')}
                className="group relative flex flex-col justify-between rounded-lg border border-white/15 bg-white/[0.03] p-6 text-left transition-all duration-200 hover:border-[#00D084] hover:bg-white/[0.06] active:scale-[0.99]"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded border border-[#00D084]/30 bg-[#00D084]/10 text-[#00D084]">
                      <Compass className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-[#00D084] uppercase">
                      PATH 1
                    </span>
                  </div>
                  <h4 className="font-cinzel text-lg font-bold text-white">I Need Direction</h4>
                  <div className="font-mono text-xs font-semibold text-[#00D084]">
                    The Long Game
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-white/70">
                    I need a CMO to lead my marketing.
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs font-bold text-white group-hover:text-[#00D084]">
                  <span>OPEN FORM A</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </button>

              {/* BUTTON B: I Need Execution */}
              <button
                id="chooser-button-b"
                onClick={() => onSelectView('formB')}
                className="group relative flex flex-col justify-between rounded-lg border border-white/15 bg-white/[0.03] p-6 text-left transition-all duration-200 hover:border-[#00D084] hover:bg-white/[0.06] active:scale-[0.99]"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded border border-[#00D084]/30 bg-[#00D084]/10 text-[#00D084]">
                      <Flame className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-[#00D084] uppercase">
                      PATH 2
                    </span>
                  </div>
                  <h4 className="font-cinzel text-lg font-bold text-white">I Need Execution</h4>
                  <div className="font-mono text-xs font-semibold text-[#00D084]">
                    The Short Game
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-white/70">
                    I have direction, I need one campaign/asset nailed.
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs font-bold text-white group-hover:text-[#00D084]">
                  <span>OPEN FORM B</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </button>

              {/* BUTTON C: I Need Automation */}
              <button
                id="chooser-button-c"
                onClick={() => onSelectView('formC')}
                className="group relative flex flex-col justify-between rounded-lg border border-white/15 bg-white/[0.03] p-6 text-left transition-all duration-200 hover:border-[#00D084] hover:bg-white/[0.06] active:scale-[0.99]"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded border border-[#00D084]/30 bg-[#00D084]/10 text-[#00D084]">
                      <Zap className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-[#00D084] uppercase">
                      PATH 3
                    </span>
                  </div>
                  <h4 className="font-cinzel text-lg font-bold text-white">I Need Automation</h4>
                  <div className="font-mono text-xs font-semibold text-[#00D084]">
                    The Smart Game
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-white/70">
                    Capture every lead and automate follow-ups &amp; reporting.
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs font-bold text-white group-hover:text-[#00D084]">
                  <span>OPEN FORM C</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </button>
            </div>
          </div>
        )}

        {/* 2. FORM A: THE LONG GAME */}
        {view === 'formA' && (
          <div id="view-form-a">
            <div className="sticky -top-6 sm:-top-8 -mx-6 sm:-mx-8 px-6 sm:px-8 pt-6 sm:pt-8 pb-4 mb-6 bg-[#0A1931] border-b border-white/10 z-20">
              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => onSelectView('chooser')}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-white/15 bg-white/5 text-white/70 transition-colors hover:border-[#00D084] hover:bg-[#00D084]/10 hover:text-[#00D084]"
                  title="Back to Which Battle"
                  aria-label="Back to Which Battle"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-xs font-bold tracking-widest text-[#00D084] uppercase">
                    FORM A &bull; FRACTIONAL CMO
                  </div>
                  <h3 className="font-cinzel text-xl font-bold text-white sm:text-2xl mt-0.5 truncate">
                    THE LONG GAME
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-white/15 bg-white/5 text-white/70 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
                  title="Close"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {errorA && (
              <div className="mb-4 flex items-center gap-2 rounded border border-red-500/40 bg-red-500/10 p-3 text-xs text-red-200">
                <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                <span>{errorA}</span>
              </div>
            )}

            <form onSubmit={handleSubmitFormA} className="space-y-4">
              <div>
                <label className="mb-1 block font-mono text-xs font-semibold text-white/90 uppercase">
                  1. Your Name <span className="text-[#00D084]">*</span>
                </label>
                <input
                  id="forma-name"
                  type="text"
                  required
                  value={formA.name}
                  onChange={(e) => setFormA({ ...formA, name: e.target.value })}
                  placeholder="e.g. Vikramaditya Rao"
                  className="w-full rounded border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/30 transition-colors focus:border-[#00D084] focus:outline-none focus:ring-1 focus:ring-[#00D084]"
                />
              </div>

              <div>
                <label className="mb-1 block font-mono text-xs font-semibold text-white/90 uppercase">
                  2. Company Name + Website URL <span className="text-[#00D084]">*</span>
                </label>
                <input
                  id="forma-company-url"
                  type="text"
                  required
                  value={formA.companyAndUrl}
                  onChange={(e) => setFormA({ ...formA, companyAndUrl: e.target.value })}
                  placeholder="e.g. Titan Dynamics | titandynamics.com"
                  className="w-full rounded border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/30 transition-colors focus:border-[#00D084] focus:outline-none focus:ring-1 focus:ring-[#00D084]"
                />
              </div>

              <div>
                <label className="mb-1 block font-mono text-xs font-semibold text-white/90 uppercase">
                  3. Current Monthly Marketing Spend (INR) <span className="text-[#00D084]">*</span>
                </label>
                <select
                  id="forma-monthly-spend"
                  required
                  value={formA.monthlySpend}
                  onChange={(e) => setFormA({ ...formA, monthlySpend: e.target.value as any })}
                  className="w-full rounded border border-white/15 bg-[#0A1931] px-3.5 py-2.5 text-sm text-white transition-colors focus:border-[#00D084] focus:outline-none focus:ring-1 focus:ring-[#00D084]"
                >
                  <option value
