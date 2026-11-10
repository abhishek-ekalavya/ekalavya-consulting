import React, { useState } from 'react';
import {
  X, Crosshair, Compass, Flame, Zap, ArrowRight, ArrowLeft, ShieldCheck, Send, AlertCircle, Check,
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
  'Website forms', 'Meta or Google ads', 'WhatsApp', 'Phone calls', 'Walk-ins', 'Marketplaces', 'Other',
];

const inputCls = 'w-full rounded border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/30 transition-colors focus:border-[#00D084] focus:outline-none focus:ring-1 focus:ring-[#00D084]';
const selectCls = 'w-full rounded border border-white/15 bg-[#0A1931] px-3.5 py-2.5 text-sm text-white transition-colors focus:border-[#00D084] focus:outline-none focus:ring-1 focus:ring-[#00D084]';
const labelCls = 'mb-1 block font-mono text-xs font-semibold text-white/90 uppercase';

export const TacticalModal: React.FC<TacticalModalProps> = ({ view, onClose, onSelectView }) => {
  const [formA, setFormA] = useState<FormAData>({
    name: '', companyAndUrl: '', monthlySpend: '', teamStructure: '', whatIsBroken: '', sixMonthVision: '', phone: '', email: '',
  });
  const [errorA, setErrorA] = useState('');
  const [isSubmittingA, setIsSubmittingA] = useState(false);

  const [formB, setFormB] = useState<FormBData>({
    name: '', company: '', whatNeeded: [], briefReady: '', budget: '', timeline: '', phone: '', email: '', challenge: '',
  });
  const [errorB, setErrorB] = useState('');
  const [isSubmittingB, setIsSubmittingB] = useState(false);

  const [formC, setFormC] = useState<FormCData>({
    name: '', companyAndUrl: '', leadSources: [], monthlyLeads: '', followUpSpeed: '', automateFirst: '', currentTools: '', phone: '', email: '',
  });
  const [errorC, setErrorC] = useState('');
  const [isSubmittingC, setIsSubmittingC] = useState(false);

  if (view === 'closed') return null;

  const handleToggleNeed = (item: ExecutionNeed) => {
    setFormB((prev) => ({
      ...prev,
      whatNeeded: prev.whatNeeded.includes(item) ? prev.whatNeeded.filter((n) => n !== item) : [...prev.whatNeeded, item],
    }));
  };

  const handleToggleLeadSource = (source: string) => {
    setFormC((prev) => ({
      ...prev,
      leadSources: prev.leadSources.includes(source) ? prev.leadSources.filter((s) => s !== source) : [...prev.leadSources, source],
    }));
  };

  const validatePhone = (phone: string) => {
    const d = phone.replace(/\D/g, '');
    return d.length === 10 || (d.length === 11 && d.startsWith('0')) || (d.length === 12 && d.startsWith('91'));
  };

  const validateEmail = (email: string) => email.trim().includes('@') && email.trim().includes('.');

  const sendLead = (subject: string, lines: string[], nextView: ModalView, setSubmitting: (v: boolean) => void) => {
    const msg = lines.join('\n');
    window.open('https://wa.me/919820049031?text=' + encodeURIComponent(msg), '_blank');
    window.open('mailto:connect@ekalavyaconsulting.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(msg), '_blank');
    setTimeout(() => { setSubmitting(false); onSelectView(nextView); }, 600);
  };

  const handleSubmitFormA = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formA.name || !formA.companyAndUrl || !formA.monthlySpend || !formA.teamStructure || !formA.whatIsBroken || !formA.phone || !formA.email) {
      return setErrorA('Please fill in all required fields to evaluate leadership requirements.');
    }
    if (!validatePhone(formA.phone)) return setErrorA('Please enter a valid 10-digit phone number.');
    if (!validateEmail(formA.email)) return setErrorA('Please enter a valid email address (must include @ and .)');
    setErrorA('');
    setIsSubmittingA(true);
    const lines = [
      'NEW LEAD - FORM A - THE LONG GAME',
      `Name: ${formA.name}`, `Company: ${formA.companyAndUrl}`, `Phone: ${formA.phone}`,
      `Email: ${formA.email}`, `Spend (INR): ${formA.monthlySpend}`, `Challenge: ${formA.whatIsBroken}`,
    ];
    if (formA.sixMonthVision) lines.push(`6-Month Vision: ${formA.sixMonthVision}`);
    sendLead(`New Lead - FORM A - ${formA.companyAndUrl}`, lines, 'thankYouA', setIsSubmittingA);
  };

  const handleSubmitFormB = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formB.name || !formB.company || formB.whatNeeded.length === 0 || !formB.briefReady || !formB.budget || !formB.timeline || !formB.phone || !formB.email) {
      return setErrorB('All fields and at least one execution deliverable are required.');
    }
    if (!validatePhone(formB.phone)) return setErrorB('Please enter a valid 10-digit phone number.');
    if (!validateEmail(formB.email)) return setErrorB('Please enter a valid email address (must include @ and .)');
    setErrorB('');
    setIsSubmittingB(true);
    const deliv = formB.whatNeeded.join(', ');
    const chal = formB.challenge || `Timeline: ${formB.timeline} (Brief ready: ${formB.briefReady})`;
    const lines = [
      `NEW LEAD - FORM B - ${deliv}`, `Name: ${formB.name}`, `Company: ${formB.company}`,
      `Phone: ${formB.phone}`, `Email: ${formB.email}`, `Budget (INR): ${formB.budget}`,
      `Deliverables: ${deliv}`, `Challenge: ${chal}`,
    ];
    sendLead(`New Lead - FORM B - ${formB.company}`, lines, 'thankYouB', setIsSubmittingB);
  };

  const handleSubmitFormC = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formC.name || !formC.companyAndUrl || formC.leadSources.length === 0 || !formC.monthlyLeads || !formC.followUpSpeed || !formC.automateFirst || !formC.phone || !formC.email) {
      return setErrorC('Please fill in all required fields and select at least one lead source.');
    }
    if (!validatePhone(formC.phone)) return setErrorC('Please enter a valid 10-digit phone number.');
    if (!validateEmail(formC.email)) return setErrorC('Please enter a valid email address (must include @ and .)');
    setErrorC('');
    setIsSubmittingC(true);
    const lines = [
      'NEW LEAD - FORM C - THE SMART GAME (AI AUTOMATION)',
      `Name: ${formC.name}`, `Company: ${formC.companyAndUrl}`, `Phone: ${formC.phone}`,
      `Email: ${formC.email}`, `Lead Sources: ${formC.leadSources.join(', ')}`,
      `Monthly Leads: ${formC.monthlyLeads}`, `Follow-Up Speed: ${formC.followUpSpeed}`, `Automate First: ${formC.automateFirst}`,
    ];
    if (formC.currentTools) lines.push(`Current Tools: ${formC.currentTools}`);
    sendLead(`New Lead - FORM C - ${formC.companyAndUrl}`, lines, 'thankYouC', setIsSubmittingC);
  };

  const renderHeader = (tag: string, title: string) => (
    <div className="sticky -top-6 sm:-top-8 -mx-6 sm:-mx-8 px-6 sm:px-8 pt-6 sm:pt-8 pb-4 mb-6 bg-[#0A1931] border-b border-white/10 z-20">
      <div className="flex items-center justify-between gap-4">
        <button type="button" onClick={() => onSelectView('chooser')} className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-white/15 bg-white/5 text-white/70 hover:border-[#00D084] hover:text-[#00D084]" title="Back">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex-1 min-w-0">
          <div className="font-mono text-xs font-bold tracking-widest text-[#00D084] uppercase">{tag}</div>
          <h3 className="font-cinzel text-xl font-bold text-white sm:text-2xl mt-0.5 truncate">{title}</h3>
        </div>
        <button type="button" onClick={onClose} className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:text-white" title="Close">
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );

  return (
    <div id="tactical-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md">
      <div id="tactical-modal-card" className={`relative my-8 w-full ${view === 'chooser' ? 'max-w-4xl' : 'max-w-2xl'} max-h-[90vh] overflow-y-auto rounded-xl border border-white/20 bg-[#0A1931] p-6 shadow-2xl sm:p-8`}>
        {(view === 'chooser' || view === 'thankYouA' || view === 'thankYouB' || view === 'thankYouC') && (
          <button id="modal-close-btn" onClick={onClose} className="absolute right-4 top-4 z-10 rounded border border-white/10 p-1.5 text-white/60 hover:bg-white/10 hover:text-white" title="Close">
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
                <span className="font-mono text-xs font-semibold tracking-widest text-[#00D084] uppercase">BOOK A CALL</span>
                <h3 className="font-cinzel text-xl font-bold text-white sm:text-2xl">Which battle are we fighting?</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                { id: 'chooser-button-a', v: 'formA' as ModalView, Icon: Compass, path: 'PATH 1', title: 'I Need Direction', sub: 'The Long Game', desc: 'I need a CMO to lead my marketing.', cta: 'OPEN FORM A' },
                { id: 'chooser-button-b', v: 'formB' as ModalView, Icon: Flame, path: 'PATH 2', title: 'I Need Execution', sub: 'The Short Game', desc: 'I have direction, I need one campaign/asset nailed.', cta: 'OPEN FORM B' },
                { id: 'chooser-button-c', v: 'formC' as ModalView, Icon: Zap, path: 'PATH 3', title: 'I Need Automation', sub: 'The Smart Game', desc: 'Capture every lead and automate follow-ups & reporting.', cta: 'OPEN FORM C' },
              ].map(({ id, v, Icon, path, title, sub, desc, cta }) => (
                <button key={id} id={id} onClick={() => onSelectView(v)} className="group flex flex-col justify-between rounded-lg border border-white/15 bg-white/[0.03] p-6 text-left transition-all hover:border-[#00D084] hover:bg-white/[0.06]">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded border border-[#00D084]/30 bg-[#00D084]/10 text-[#00D084]"><Icon className="h-5 w-5" /></div>
                      <span className="font-mono text-[11px] font-semibold text-[#00D084] uppercase">{path}</span>
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
            {errorA && <div className="mb-4 flex items-center gap-2 rounded border border-red-500/40 bg-red-500/10 p-3 text-xs text-red-200"><AlertCircle className="h-4 w-4 shrink-0 text-red-400" /><span>{errorA}</span></div>}
            <form onSubmit={handleSubmitFormA} className="space-y-4">
              <div><label className={labelCls}>1. Your Name *</label><input type="text" required value={formA.name} onChange={(e) => setFormA({ ...formA, name: e.target.value })} placeholder="e.g. Vikramaditya Rao" className={inputCls} /></div>
              <div><label className={labelCls}>2. Company Name + Website URL *</label><input type="text" required value={formA.companyAndUrl} onChange={(e) => setFormA({ ...formA, companyAndUrl: e.target.value })} placeholder="e.g. Titan Dynamics | titandynamics.com" className={inputCls} /></div>
              <div><label className={labelCls}>3. Current Monthly Marketing Spend (INR) *</label>
                <select required value={formA.monthlySpend} onChange={(e) => setFormA({ ...formA, monthlySpend: e.target.value as any })} className={selectCls}>
                  <option value="" disabled>Select Monthly Spend (INR)</option>
                  <option value="<2L">&lt;2L INR</option><option value="2-5L">2-5L INR</option><option value="5-15L">5-15L INR</option><option value="15L+">15L+ INR</option>
                </select>
              </div>
              <div><label className={labelCls}>4. Current Team Structure *</label>
                <select required value={formA.teamStructure} onChange={(e) => setFormA({ ...formA, teamStructure: e.target.value as any })} className={selectCls}>
                  <option value="" disabled>Select Team Structure</option>
                  <option value="No team">No team</option><option value="1-2 people">1-2 people</option><option value="Small agency">Small agency</option><option value="Large agency that needs oversight">Large agency that needs oversight</option>
                </select>
              </div>
              <div><label className={labelCls}>5. What is broken? *</label>
                <select required value={formA.whatIsBroken} onChange={(e) => setFormA({ ...formA, whatIsBroken: e.target.value as any })} className={selectCls}>
                  <option value="" disabled>Select What is Broken</option>
                  <option value="No strategy">No strategy</option><option value="Spends but no ROI">Spends but no ROI</option><option value="Team exists but no leader">Team exists but no leader</option><option value="Scaling to next market">Scaling to next market</option>
                </select>
              </div>
              <div><label className={labelCls}>6. 6-Month Growth Vision (Optional)</label><textarea rows={3} value={formA.sixMonthVision} onChange={(e) => setFormA({ ...formA, sixMonthVision: e.target.value })} placeholder="Outline your 6-month growth target..." className={inputCls} /></div>
              <div><label className={labelCls}>7. Phone / WhatsApp *</label><input type="tel" required value={formA.phone} onChange={(e) => setFormA({ ...formA, phone: e.target.value })} placeholder="e.g. 9820049031" className={inputCls} /></div>
              <div><label className={labelCls}>8. Email Address *</label><input type="email" required value={formA.email} onChange={(e) => setFormA({ ...formA, email: e.target.value })} placeholder="e.g. rahul@company.com" className={inputCls} /></div>
              <div className="pt-3">
                <button type="submit" disabled={isSubmittingA} className="flex w-full items-center justify-center gap-2 rounded bg-[#00D084] py-4 font-mono text-sm font-bold tracking-wider text-black hover:bg-[#00ba76] disabled:opacity-75">
                  {isSubmittingA ? <span>LOCKING TARGET...</span> : <><Send className="h-4 w-4" /><span>LOCK YOUR GROWTH DIRECTION</span></>}
                </button>
                <p className="mt-2.5 text-center text-xs text-white/60">Book a 30-minute call with Abhishek.</p>
              </div>
            </form>
          </div>
        )}

        {view === 'formB' && (
          <div id="view-form-b">
            {renderHeader('FORM B • SPECIALIZED EXECUTION', 'THE SHORT GAME')}
            {errorB && <div className="mb-4 flex items-center gap-2 rounded border border-red-500/40 bg-red-500/10 p-3 text-xs text-red-200"><AlertCircle className="h-4 w-4 shrink-0 text-red-400" /><span>{errorB}</span></div>}
            <form onSubmit={handleSubmitFormB} className="space-y-4">
              <div><label className={labelCls}>1. Your Name *</label><input type="text" required value={formB.name} onChange={(e) => setFormB({ ...formB, name: e.target.value })} placeholder="e.g. Siddharth Joshi" className={inputCls} /></div>
              <div><label className={labelCls}>2. Company Name *</label><input type="text" required value={formB.company} onChange={(e) => setFormB({ ...formB, company: e.target.value })} placeholder="e.g. Titan Corp" className={inputCls} /></div>
              <div><label className={labelCls}>3. What do you need delivered? *</label>
                <div className="space-y-2">
                  {executionNeedOptions.map((opt) => {
                    const checked = formB.whatNeeded.includes(opt);
                    return (
                      <button type="button" key={opt} onClick={() => handleToggleNeed(opt)} className={`flex w-full items-center justify-between rounded border px-3.5 py-2.5 text-left text-xs ${checked ? 'border-[#00D084] bg-[#00D084]/15 text-white font-semibold' : 'border-white/15 bg-white/[0.03] text-white/70'}`}>
                        <span>{opt}</span>{checked ? <Check className="h-4 w-4 text-[#00D084]" /> : <span className="text-white/20">+</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div><label className={labelCls}>4. Ready brief / reference? *</label>
                <div className="grid grid-cols-2 gap-3">
                  {(['Yes', 'No'] as const).map((ans) => (
                    <button key={ans} type="button" onClick={() => setFormB({ ...formB, briefReady: ans })} className={`rounded border py-2.5 font-mono text-xs font-bold ${formB.briefReady === ans ? 'border-[#00D084] bg-[#00D084]/20 text-[#00D084]' : 'border-white/15 bg-white/5 text-white/70'}`}>{ans.toUpperCase()}</button>
                  ))}
                </div>
              </div>
              <div><label className={labelCls}>5. Budget (INR) *</label>
                <select required value={formB.budget} onChange={(e) => setFormB({ ...formB, budget: e.target.value as any })} className={selectCls}>
                  <option value="" disabled>Select Budget (INR)</option>
                  <option value="50k-2L">50k-2L INR</option><option value="2-5L">2-5L INR</option><option value="5-10L">5-10L INR</option><option value="10L+">10L+ INR</option>
                </select>
              </div>
              <div><label className={labelCls}>6. Launch Timeline *</label>
                <select required value={formB.timeline} onChange={(e) => setFormB({ ...formB, timeline: e.target.value as any })} className={selectCls}>
                  <option value="" disabled>Select Launch Timeline</option>
                  <option value="Urgent <15 days">Urgent &lt;15 days</option><option value="This Month">This Month</option><option value="Next 30-60 days">Next 30-60 days</option><option value="Planning ahead (60+ days)">Planning ahead (60+ days)</option>
                </select>
              </div>
              <div><label className={labelCls}>7. Phone / WhatsApp *</label><input type="tel" required value={formB.phone} onChange={(e) => setFormB({ ...formB, phone: e.target.value })} placeholder="e.g. 9820049031" className={inputCls} /></div>
              <div><label className={labelCls}>8. Email Address *</label><input type="email" required value={formB.email} onChange={(e) => setFormB({ ...formB, email: e.target.value })} placeholder="e.g. rahul@company.com" className={inputCls} /></div>
              <div><label className={labelCls}>9. Key Challenge / Requirement</label><textarea rows={2} value={formB.challenge || ''} onChange={(e) => setFormB({ ...formB, challenge: e.target.value })} placeholder="Outline key objectives..." className={inputCls} /></div>
              <div className="pt-3">
                <button type="submit" disabled={isSubmittingB} className="flex w-full items-center justify-center gap-2 rounded bg-[#00D084] py-4 font-mono text-sm font-bold tracking-wider text-black hover:bg-[#00ba76] disabled:opacity-75">
                  {isSubmittingB ? <span>LOCKING TARGET...</span> : <><Crosshair className="h-4 w-4" /><span>LOCK YOUR EXECUTION</span></>}
                </button>
                <p className="mt-2.5 text-center text-xs text-white/60">Share your project brief. We reply with scope and cost.</p>
              </div>
            </form>
          </div>
        )}

        {view === 'formC' && (
          <div id="view-form-c">
            {renderHeader('FORM C • AI AUTOMATION', 'THE SMART GAME')}
            {errorC && <div className="mb-4 flex items-center gap-2 rounded border border-red-500/40 bg-red-500/10 p-3 text-xs text-red-200"><AlertCircle className="h-4 w-4 shrink-0 text-red-400" /><span>{errorC}</span></div>}
            <form onSubmit={handleSubmitFormC} className="space-y-4">
              <div><label className={labelCls}>1. Your Name *</label><input type="text" required value={formC.name} onChange={(e) => setFormC({ ...formC, name: e.target.value })} placeholder="e.g. Rohan Mehta" className={inputCls} /></div>
              <div><label className={labelCls}>2. Company Name + Website URL *</label><input type="text" required value={formC.companyAndUrl} onChange={(e) => setFormC({ ...formC, companyAndUrl: e.target.value })} placeholder="e.g. Apex Systems | apexsystems.in" className={inputCls} /></div>
              <div><label className={labelCls}>3. Where do your leads come from today? *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {leadSourceOptions.map((opt) => {
                    const checked = formC.leadSources.includes(opt);
                    return (
                      <button type="button" key={opt} onClick={() => handleToggleLeadSource(opt)} className={`flex w-full items-center justify-between rounded border px-3.5 py-2.5 text-left text-xs ${checked ? 'border-[#00D084] bg-[#00D084]/15 text-white font-semibold' : 'border-white/15 bg-white/[0.03] text-white/70'}`}>
                        <span>{opt}</span>{checked ? <Check className="h-4 w-4 text-[#00D084]" /> : <span className="text-white/20">+</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div><label className={labelCls}>4. Monthly Leads *</label>
                <select required value={formC.monthlyLeads} onChange={(e) => setFormC({ ...formC, monthlyLeads: e.target.value })} className={selectCls}>
                  <option value="" disabled>Select Monthly Lead Volume</option>
                  <option value="Under 50">Under 50</option><option value="50-200">50-200</option><option value="200-1,000">200-1,000</option><option value="1,000+">1,000+</option>
                </select>
              </div>
              <div><label className={labelCls}>5. Follow-up Speed Today *</label>
                <select required value={formC.followUpSpeed} onChange={(e) => setFormC({ ...formC, followUpSpeed: e.target.value })} className={selectCls}>
                  <option value="" disabled>Select Follow-Up Speed</option>
                  <option value="Within 5 minutes">Within 5 minutes</option><option value="Within a few hours">Within a few hours</option><option value="Next day">Next day</option><option value="No fixed process">No fixed process</option>
                </select>
              </div>
              <div><label className={labelCls}>6. What should we automate first? *</label>
                <select required value={formC.automateFirst} onChange={(e) => setFormC({ ...formC, automateFirst: e.target.value })} className={selectCls}>
                  <option value="" disabled>Select Automation Priority</option>
                  <option value="Lead follow-up">Lead follow-up</option><option value="Content for social, email and WhatsApp">Content for social, email and WhatsApp</option><option value="Weekly reporting">Weekly reporting</option><option value="Not sure, advise me">Not sure, advise me</option>
                </select>
              </div>
