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

const inputCls =
  'w-full rounded border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#00D084] focus:outline-none';
const selectCls =
  'w-full rounded border border-white/15 bg-[#0A1931] px-3.5 py-2.5 text-sm text-white focus:border-[#00D084] focus:outline-none';
const labelCls = 'mb-1 block font-mono text-xs font-semibold text-white/90 uppercase';

export const TacticalModal: React.FC<TacticalModalProps> = ({
  view,
  onClose,
  onSelectView,
}) => {
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
  const [errorA, setErrorA] = useState('');
  const [isSubmittingA, setIsSubmittingA] = useState(false);

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
  const [errorB, setErrorB] = useState('');
  const [isSubmittingB, setIsSubmittingB] = useState(false);

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
  const [errorC, setErrorC] = useState('');
  const [isSubmittingC, setIsSubmittingC] = useState(false);

  if (view === 'closed') return null;

  const handleToggleNeed = (item: ExecutionNeed) => {
    setFormB((prev) => ({
      ...prev,
      whatNeeded: prev.whatNeeded.includes(item)
        ? prev.whatNeeded.filter((n) => n !== item)
        : [...prev.whatNeeded, item],
    }));
  };

  const handleToggleLeadSource = (source: string) => {
    setFormC((prev) => ({
      ...prev,
      leadSources: prev.leadSources.includes(source)
        ? prev.leadSources.filter((s) => s !== source)
        : [...prev.leadSources, source],
    }));
  };

  const validatePhone = (phone: string) => {
    const d = phone.replace(/\D/g, '');
    return (
      d.length === 10 ||
      (d.length === 11 && d.startsWith('0')) ||
      (d.length === 12 && d.startsWith('91'))
    );
  };

  const validateEmail = (email: string) =>
    email.trim().includes('@') && email.trim().includes('.');

  const sendLead = (
    subject: string,
    lines: string[],
    nextView: ModalView,
    setSubmitting: (v: boolean) => void
  ) => {
    const msg = lines.join('\n');
    window.open('https://wa.me/919820049031?text=' + encodeURIComponent(msg), '_blank');
    window.open(
      'mailto:connect@ekalavyaconsulting.com?subject=' +
        encodeURIComponent(subject) +
        '&body=' +
        encodeURIComponent(msg),
      '_blank'
    );
    setTimeout(() => {
      setSubmitting(false);
      onSelectView(nextView);
    }, 600);
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
      return setErrorA('Please fill in all required fields.');
    }
    if (!validatePhone(formA.phone)) return setErrorA('Please enter a valid 10-digit phone number.');
    if (!validateEmail(formA.email)) return setErrorA('Please enter a valid email address.');
    setErrorA('');
    setIsSubmittingA(true);
    const lines = [
      'NEW LEAD - FORM A - THE LONG GAME',
      `Name: ${formA.name}`,
      `Company: ${formA.companyAndUrl}`,
      `Phone: ${formA.phone}`,
      `Email: ${formA.email}`,
      `Spend (INR): ${formA.monthlySpend}`,
      `Challenge: ${formA.whatIsBroken}`,
    ];
    if (formA.sixMonthVision) lines.push(`6-Month Vision: ${formA.sixMonthVision}`);
    sendLead(`New Lead - FORM A - ${formA.companyAndUrl}`, lines, 'thankYouA', setIsSubmittingA);
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
      return setErrorB('All fields and at least one deliverable are required.');
    }
    if (!validatePhone(formB.phone)) return setErrorB('Please enter a valid 10-digit phone number.');
    if (!validateEmail(formB.email)) return setErrorB('Please enter a valid email address.');
    setErrorB('');
    setIsSubmittingB(true);
    const deliv = formB.whatNeeded.join(', ');
    const chal = formB.challenge || `Timeline: ${formB.timeline} (Brief ready: ${formB.briefReady})`;
    const lines = [
      `NEW LEAD - FORM B - ${deliv}`,
      `Name: ${formB.name}`,
      `Company: ${formB.company}`,
      `Phone: ${formB.phone}`,
      `Email: ${formB.email}`,
      `Budget (INR): ${formB.budget}`,
      `Deliverables: ${deliv}`,
      `Challenge: ${chal}`,
    ];
    sendLead(`New Lead - FORM B - ${formB.company}`, lines, 'thankYouB', setIsSubmittingB);
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
      return setErrorC('Please fill in all required fields and select at least one lead source.');
    }
    if (!validatePhone(formC.phone)) return setErrorC('Please enter a valid 10-digit phone number.');
    if (!validateEmail(formC.email)) return setErrorC('Please enter a valid email address.');
    setErrorC('');
    setIsSubmittingC(true);
    const lines = [
      'NEW LEAD - FORM C - THE SMART GAME (AI AUTOMATION)',
      `Name: ${formC.name}`,
      `Company: ${formC.companyAndUrl}`,
      `Phone: ${formC.phone}`,
      `Email: ${formC.email}`,
      `Lead Sources: ${formC.leadSources.join(', ')}`,
      `Monthly Leads: ${formC.monthlyLeads}`,
      `Follow-Up Speed: ${formC.followUpSpeed}`,
      `Automate First: ${formC.automateFirst}`,
    ];
    if (formC.currentTools) lines.push(`Current Tools: ${formC.currentTools}`);
    sendLead(`New Lead - FORM C - ${formC.companyAndUrl}`, lines, 'thankYouC', setIsSubmittingC);
  };

  const renderHeader = (tag: string, title: string) => (
    <div className="sticky -top-6 sm:-top-8 -mx-6 sm:-mx-8 px-6 sm:px-8 pt-6 sm:pt-8 pb-4 mb-6 bg-[#0A1931] border-b border-white/10 z-20">
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => onSelectView('chooser')}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-white/15 bg-white/5 text-white/70 hover:border-[#00D084] hover:text-[#00D084]"
          title="Back"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex-1 min-w-0">
          <div className="font-mono text-xs font-bold tracking-widest text-[#00D084] uppercase">
            {tag}
          </div>
          <h3 className="font-cinzel text-xl font-bold text-white sm:text-2xl mt-0.5 truncate">
            {title}
          </h3>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:text-white"
          title="Close"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );

  return (
    <div
      id="tactical-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md"
    >
      <div
        id="tactical-modal-card"
        className={`relative my-8 w-full ${
          view === 'chooser' ? 'max-w-4xl' : 'max-w-2xl'
        } max-h-[90vh] overflow-y-auto rounded-xl border border-white/20 bg-[#0A1931] p-6 shadow-2xl sm:p-8`}
      >
        {(view === 'chooser' ||
          view === 'thankYouA' ||
          view === 'thankYouB' ||
          view === 'thankYouC') && (
          <button
            id="modal-close-btn"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded border border-white/10 p-1.5 text-white/60 hover:bg-white/10 hover:text-white"
            title="Close"
          >
            <X className="h-5 w-5" />
          </button>
        )}

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
              {[
                {
                  id: 'chooser-button-a',
                  v: 'formA' as ModalView,
                  Icon: Compass,
                  path: 'PATH 1',
                  title: 'I Need Direction',
                  sub: 'The Long Game',
                  desc: 'I need a CMO to lead my marketing.',
                  cta: 'OPEN FORM A',
                },
                {
                  id: 'chooser-button-b',
                  v: 'formB' as ModalView,
                  Icon: Flame,
                  path: 'PATH 2',
                  title: 'I Need Execution',
                  sub: 'The Short Game',
                  desc: 'I have direction, I need one campaign/asset nailed.',
                  cta: 'OPEN FORM B',
                },
                {
                  id: 'chooser-button-c',
                  v: 'formC' as ModalView,
                  Icon: Zap,
                  path: 'PATH 3',
                  title: 'I Need Automation',
                  sub: 'The Smart Game',
                  desc: 'Capture every lead and automate follow-ups & reporting.',
                  cta: 'OPEN FORM C',
                },
              ].map(({ id, v, Icon, path, title, sub, desc, cta }) => (
                <button
                  key={id}
                  id={id}
                  onClick={() => onSelectView(v)}
                  className="group flex flex-col justify-between rounded-lg border border-white/15 bg-white/[0.03] p-6 text-left transition-all hover:border-[#00D084] hover:bg-white/[0.06]"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded border border-[#00D084]/30 bg-[#00D084]/10 text-[#00D084]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[11px] font-semibold text-[#00D084] uppercase">
                        {path}
                      </span>
                    </div>
                    <h4 className="font-cinzel text-lg font-bold text-white">{title}</h4>
                    <div className="font-mono text-xs font-semibold text-[#00D084]">{sub}</div>
                    <p className="mt-3 text-xs leading-relaxed text-white/70">{desc}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs font-bold text-white group-hover:text-[#00D084]">
                    <span>{cta}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {view === 'formA' && (
          <div id="view-form-a">
            {renderHeader('FORM A • FRACTIONAL CMO', 'THE LONG GAME')}
            {errorA && (
              <div className="mb-4 flex items-center gap-2 rounded border border-red-500/40 bg-red-500/10 p-
