import React, { useState } from 'react';
import { 
  X, 
  Crosshair, 
  Compass, 
  Flame, 
  ArrowRight, 
  ArrowLeft,
  Calendar, 
  ShieldCheck, 
  Send,
  AlertCircle,
  Check
} from 'lucide-react';
import { FormAData, FormBData, ExecutionNeed, ModalView } from '../types';

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

export const TacticalModal: React.FC<TacticalModalProps> = ({
  view,
  onClose,
  onSelectView,
  onOpenCalendly,
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
  });
  const [errorA, setErrorA] = useState<string>('');

  // FORM B STATE
  const [formB, setFormB] = useState<FormBData>({
    name: '',
    company: '',
    whatNeeded: [],
    briefReady: '',
    budget: '',
    timeline: '',
    phone: '',
  });
  const [errorB, setErrorB] = useState<string>('');

  if (view === 'closed') return null;

  const handleToggleNeed = (item: ExecutionNeed) => {
    setFormB(prev => {
      const exists = prev.whatNeeded.includes(item);
      if (exists) {
        return { ...prev, whatNeeded: prev.whatNeeded.filter(n => n !== item) };
      } else {
        return { ...prev, whatNeeded: [...prev.whatNeeded, item] };
      }
    });
  };

  const handleSubmitFormA = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formA.name ||
      !formA.companyAndUrl ||
      !formA.monthlySpend ||
      !formA.teamStructure ||
      !formA.whatIsBroken ||
      !formA.sixMonthVision ||
      !formA.phone
    ) {
      setErrorA('All fields are mandatory to evaluate leadership requirements.');
      return;
    }
    setErrorA('');
    // Master doc: After Submit: Redirect to Calendly Link.
    onSelectView('thankYouA');
    onOpenCalendly(formA.name, formA.companyAndUrl);
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
      !formB.phone
    ) {
      setErrorB('All fields and at least one execution deliverable are required.');
      return;
    }
    setErrorB('');
    // Master doc: After Submit: Show message "Brief Received. We will revert with a Sniper Quote in 24 hours."
    onSelectView('thankYouB');
  };

  return (
    <div 
      id="tactical-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md"
    >
      <div 
        id="tactical-modal-card"
        className="relative my-8 w-full max-w-2xl rounded-xl border border-white/20 bg-[#0A1931] p-6 shadow-2xl transition-all sm:p-8"
      >
        {/* Close Button */}
        <button
          id="modal-close-btn"
          onClick={onClose}
          className="absolute right-4 top-4 rounded border border-white/10 p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          title="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* 1. CHOOSER POPUP */}
        {view === 'chooser' && (
          <div id="view-chooser" className="py-2">
            <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded border border-[#00D084]/40 bg-[#00D084]/10 text-[#00D084]">
                <Crosshair className="h-6 w-6" />
              </div>
              <div>
                <span className="font-mono text-xs font-semibold tracking-widest text-[#00D084] uppercase">
                  LOCK THE TARGET
                </span>
                <h3 className="font-cinzel text-xl font-bold text-white sm:text-2xl">
                  Which battle are we fighting?
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* BUTTON A: I Need Direction [The Long Game] */}
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
                  <h4 className="font-cinzel text-lg font-bold text-white">
                    I Need Direction
                  </h4>
                  <div className="font-mono text-xs font-semibold text-[#00D084]">
                    [The Long Game]
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

              {/* BUTTON B: I Need Execution [The Short Game] */}
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
                  <h4 className="font-cinzel text-lg font-bold text-white">
                    I Need Execution
                  </h4>
                  <div className="font-mono text-xs font-semibold text-[#00D084]">
                    [The Short Game]
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
            </div>
          </div>
        )}

        {/* 2. FORM A: REQUEST LEADERSHIP AUDIT */}
        {view === 'formA' && (
          <div id="view-form-a">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => onSelectView('chooser')}
                  className="rounded border border-white/10 p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                  title="Back to Chooser"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <div>
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-[#00D084] uppercase">
                    FORM A &bull; FRACTIONAL CMO
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-white sm:text-2xl">
                    Request Leadership Audit
                  </h3>
                </div>
              </div>
            </div>

            {errorA && (
              <div className="mb-4 flex items-center gap-2 rounded border border-red-500/40 bg-red-500/10 p-3 text-xs text-red-200">
                <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                <span>{errorA}</span>
              </div>
            )}

            <form onSubmit={handleSubmitFormA} className="space-y-4">
              {/* Field 1: Your Name (Text) */}
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

              {/* Field 2: Company Name + Website URL (Text) */}
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

              {/* Field 3: Current Monthly Marketing Spend (Dropdown: <2L / 2-5L / 5-15L / 15L+) */}
              <div>
                <label className="mb-1 block font-mono text-xs font-semibold text-white/90 uppercase">
                  3. Current Monthly Marketing Spend <span className="text-[#00D084]">*</span>
                </label>
                <select
                  id="forma-monthly-spend"
                  required
                  value={formA.monthlySpend}
                  onChange={(e) => setFormA({ ...formA, monthlySpend: e.target.value as any })}
                  className="w-full rounded border border-white/15 bg-[#0A1931] px-3.5 py-2.5 text-sm text-white transition-colors focus:border-[#00D084] focus:outline-none focus:ring-1 focus:ring-[#00D084]"
                >
                  <option value="" disabled className="text-white/40">Select Monthly Spend</option>
                  <option value="<2L">&lt;2L</option>
                  <option value="2-5L">2-5L</option>
                  <option value="5-15L">5-15L</option>
                  <option value="15L+">15L+</option>
                </select>
              </div>

              {/* Field 4: Current Team Structure (Dropdown: No team / 1-2 people / Small agency / Large agency that needs governance) */}
              <div>
                <label className="mb-1 block font-mono text-xs font-semibold text-white/90 uppercase">
                  4. Current Team Structure <span className="text-[#00D084]">*</span>
                </label>
                <select
                  id="forma-team-structure"
                  required
                  value={formA.teamStructure}
                  onChange={(e) => setFormA({ ...formA, teamStructure: e.target.value as any })}
                  className="w-full rounded border border-white/15 bg-[#0A1931] px-3.5 py-2.5 text-sm text-white transition-colors focus:border-[#00D084] focus:outline-none focus:ring-1 focus:ring-[#00D084]"
                >
                  <option value="" disabled className="text-white/40">Select Team Structure</option>
                  <option value="No team">No team</option>
                  <option value="1-2 people">1-2 people</option>
                  <option value="Small agency">Small agency</option>
                  <option value="Large agency that needs governance">Large agency that needs governance</option>
                </select>
              </div>

              {/* Field 5: What is broken? (Dropdown: No strategy / Spends but no ROI / Team exists but no leader / Scaling to next market) */}
              <div>
                <label className="mb-1 block font-mono text-xs font-semibold text-white/90 uppercase">
                  5. What is broken? <span className="text-[#00D084]">*</span>
                </label>
                <select
                  id="forma-what-is-broken"
                  required
                  value={formA.whatIsBroken}
                  onChange={(e) => setFormA({ ...formA, whatIsBroken: e.target.value as any })}
                  className="w-full rounded border border-white/15 bg-[#0A1931] px-3.5 py-2.5 text-sm text-white transition-colors focus:border-[#00D084] focus:outline-none focus:ring-1 focus:ring-[#00D084]"
                >
                  <option value="" disabled className="text-white/40">Select What is Broken</option>
                  <option value="No strategy">No strategy</option>
                  <option value="Spends but no ROI">Spends but no ROI</option>
                  <option value="Team exists but no leader">Team exists but no leader</option>
                  <option value="Scaling to next market">Scaling to next market</option>
                </select>
              </div>

              {/* Field 6: If we fix this, what does growth look like in 6 months? (Long text) */}
              <div>
                <label className="mb-1 block font-mono text-xs font-semibold text-white/90 uppercase">
                  6. If we fix this, what does growth look like in 6 months? <span className="text-[#00D084]">*</span>
                </label>
                <textarea
                  id="forma-growth-vision"
                  required
                  rows={3}
                  value={formA.sixMonthVision}
                  onChange={(e) => setFormA({ ...formA, sixMonthVision: e.target.value })}
                  placeholder="Outline your 6-month growth target, revenue benchmark, or market milestone..."
                  className="w-full rounded border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/30 transition-colors focus:border-[#00D084] focus:outline-none focus:ring-1 focus:ring-[#00D084]"
                />
              </div>

              {/* Field 7: Phone / WhatsApp (Phone field) */}
              <div>
                <label className="mb-1 block font-mono text-xs font-semibold text-white/90 uppercase">
                  7. Phone / WhatsApp <span className="text-[#00D084]">*</span>
                </label>
                <input
                  id="forma-phone"
                  type="tel"
                  required
                  value={formA.phone}
                  onChange={(e) => setFormA({ ...formA, phone: e.target.value })}
                  placeholder="+91 98200 XXXXX"
                  className="w-full rounded border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/30 transition-colors focus:border-[#00D084] focus:outline-none focus:ring-1 focus:ring-[#00D084]"
                />
              </div>

              {/* CTA: [REQUEST LEADERSHIP AUDIT] */}
              <div className="pt-3">
                <button
                  id="forma-submit-btn"
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded bg-[#00D084] py-4 font-mono text-sm font-bold tracking-wider text-black shadow-lg shadow-[#00D084]/25 transition-all hover:bg-[#00ba76] active:scale-[0.99]"
                >
                  <Send className="h-4 w-4" />
                  <span>REQUEST LEADERSHIP AUDIT</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* 3. FORM B: SEND EXECUTION BRIEF */}
        {view === 'formB' && (
          <div id="view-form-b">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => onSelectView('chooser')}
                  className="rounded border border-white/10 p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                  title="Back to Chooser"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <div>
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-[#00D084] uppercase">
                    FORM B &bull; SPECIALIZED EXECUTION
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-white sm:text-2xl">
                    Send Execution Brief
                  </h3>
                </div>
              </div>
            </div>

            {errorB && (
              <div className="mb-4 flex items-center gap-2 rounded border border-red-500/40 bg-red-500/10 p-3 text-xs text-red-200">
                <AlertCircle className="h-4 w-4 shrink-0 text-red-400" />
                <span>{errorB}</span>
              </div>
            )}

            <form onSubmit={handleSubmitFormB} className="space-y-4">
              {/* Field 1: Your Name (Text) */}
              <div>
                <label className="mb-1 block font-mono text-xs font-semibold text-white/90 uppercase">
                  1. Your Name <span className="text-[#00D084]">*</span>
                </label>
                <input
                  id="formb-name"
                  type="text"
                  required
                  value={formB.name}
                  onChange={(e) => setFormB({ ...formB, name: e.target.value })}
                  placeholder="e.g. Siddharth Joshi"
                  className="w-full rounded border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/30 transition-colors focus:border-[#00D084] focus:outline-none focus:ring-1 focus:ring-[#00D084]"
                />
              </div>

              {/* Field 2: Company Name (Text) */}
              <div>
                <label className="mb-1 block font-mono text-xs font-semibold text-white/90 uppercase">
                  2. Company Name <span className="text-[#00D084]">*</span>
                </label>
                <input
                  id="formb-company"
                  type="text"
                  required
                  value={formB.company}
                  onChange={(e) => setFormB({ ...formB, company: e.target.value })}
                  placeholder="e.g. Titan Corp"
                  className="w-full rounded border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/30 transition-colors focus:border-[#00D084] focus:outline-none focus:ring-1 focus:ring-[#00D084]"
                />
              </div>

              {/* Field 3: What do you need executed? (Multi-select Dropdown) */}
              <div>
                <label className="mb-1.5 block font-mono text-xs font-semibold text-white/90 uppercase">
                  3. What do you need executed? <span className="text-[#00D084]">*</span>
                </label>
                <div className="space-y-2">
                  {executionNeedOptions.map((option) => {
                    const isChecked = formB.whatNeeded.includes(option);
                    return (
                      <button
                        type="button"
                        key={option}
                        onClick={() => handleToggleNeed(option)}
                        className={`flex w-full items-center justify-between rounded border px-3.5 py-2.5 text-left text-xs font-medium transition-all ${
                          isChecked
                            ? 'border-[#00D084] bg-[#00D084]/15 text-white font-semibold'
                            : 'border-white/15 bg-white/[0.03] text-white/70 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        <span>{option}</span>
                        {isChecked ? (
                          <Check className="h-4 w-4 text-[#00D084]" />
                        ) : (
                          <span className="text-white/20 text-sm">+</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Field 4: Do you have a ready brief / reference? (Yes / No) */}
              <div>
                <label className="mb-1 block font-mono text-xs font-semibold text-white/90 uppercase">
                  4. Do you have a ready brief / reference? <span className="text-[#00D084]">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    id="formb-brief-yes"
                    onClick={() => setFormB({ ...formB, briefReady: 'Yes' })}
                    className={`rounded border py-2.5 font-mono text-xs font-bold transition-all ${
                      formB.briefReady === 'Yes'
                        ? 'border-[#00D084] bg-[#00D084]/20 text-[#00D084]'
                        : 'border-white/15 bg-white/5 text-white/70 hover:border-white/30'
                    }`}
                  >
                    YES
                  </button>
                  <button
                    type="button"
                    id="formb-brief-no"
                    onClick={() => setFormB({ ...formB, briefReady: 'No' })}
                    className={`rounded border py-2.5 font-mono text-xs font-bold transition-all ${
                      formB.briefReady === 'No'
                        ? 'border-[#00D084] bg-[#00D084]/20 text-[#00D084]'
                        : 'border-white/15 bg-white/5 text-white/70 hover:border-white/30'
                    }`}
                  >
                    NO
                  </button>
                </div>
              </div>

              {/* Field 5: Budget for this asset/campaign (Dropdown: 50k-2L / 2-5L / 5-10L / 10L+) */}
              <div>
                <label className="mb-1 block font-mono text-xs font-semibold text-white/90 uppercase">
                  5. Budget for this asset/campaign <span className="text-[#00D084]">*</span>
                </label>
                <select
                  id="formb-budget"
                  required
                  value={formB.budget}
                  onChange={(e) => setFormB({ ...formB, budget: e.target.value as any })}
                  className="w-full rounded border border-white/15 bg-[#0A1931] px-3.5 py-2.5 text-sm text-white transition-colors focus:border-[#00D084] focus:outline-none focus:ring-1 focus:ring-[#00D084]"
                >
                  <option value="" disabled className="text-white/40">Select Budget</option>
                  <option value="50k-2L">50k-2L</option>
                  <option value="2-5L">2-5L</option>
                  <option value="5-10L">5-10L</option>
                  <option value="10L+">10L+</option>
                </select>
              </div>

              {/* Field 6: Launch Timeline (Dropdown: Urgent <15 days / This Month / Next 30-60 days) */}
              <div>
                <label className="mb-1 block font-mono text-xs font-semibold text-white/90 uppercase">
                  6. Launch Timeline <span className="text-[#00D084]">*</span>
                </label>
                <select
                  id="formb-timeline"
                  required
                  value={formB.timeline}
                  onChange={(e) => setFormB({ ...formB, timeline: e.target.value as any })}
                  className="w-full rounded border border-white/15 bg-[#0A1931] px-3.5 py-2.5 text-sm text-white transition-colors focus:border-[#00D084] focus:outline-none focus:ring-1 focus:ring-[#00D084]"
                >
                  <option value="" disabled className="text-white/40">Select Launch Timeline</option>
                  <option value="Urgent <15 days">Urgent &lt;15 days</option>
                  <option value="This Month">This Month</option>
                  <option value="Next 30-60 days">Next 30-60 days</option>
                </select>
              </div>

              {/* Field 7: Phone / WhatsApp (Phone field) */}
              <div>
                <label className="mb-1 block font-mono text-xs font-semibold text-white/90 uppercase">
                  7. Phone / WhatsApp <span className="text-[#00D084]">*</span>
                </label>
                <input
                  id="formb-phone"
                  type="tel"
                  required
                  value={formB.phone}
                  onChange={(e) => setFormB({ ...formB, phone: e.target.value })}
                  placeholder="+91 98200 XXXXX"
                  className="w-full rounded border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/30 transition-colors focus:border-[#00D084] focus:outline-none focus:ring-1 focus:ring-[#00D084]"
                />
              </div>

              {/* CTA: [SEND EXECUTION BRIEF] */}
              <div className="pt-3">
                <button
                  id="formb-submit-btn"
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded bg-[#00D084] py-4 font-mono text-sm font-bold tracking-wider text-black shadow-lg shadow-[#00D084]/25 transition-all hover:bg-[#00ba76] active:scale-[0.99]"
                >
                  <Crosshair className="h-4 w-4" />
                  <span>SEND EXECUTION BRIEF</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* 4. AFTER SUBMIT FORM A */}
        {view === 'thankYouA' && (
          <div id="view-thankyou-a" className="py-6 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#00D084] bg-[#00D084]/20 text-[#00D084]">
              <ShieldCheck className="h-8 w-8" />
            </div>

            <h3 className="font-cinzel text-2xl font-extrabold tracking-wide text-white sm:text-3xl">
              Request Leadership Audit Submitted
            </h3>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/80">
              Redirecting to Calendly schedule for strategic leadership assessment.
            </p>

            <div className="mt-6">
              <button
                onClick={() => onOpenCalendly(formA.name, formA.companyAndUrl)}
                className="inline-flex items-center gap-2 rounded bg-[#00D084] px-6 py-3 font-mono text-xs font-bold text-black hover:bg-[#00ba76]"
              >
                <Calendar className="h-4 w-4" />
                <span>OPEN CALENDLY NOW</span>
              </button>
            </div>
          </div>
        )}

        {/* 5. AFTER SUBMIT FORM B */}
        {view === 'thankYouB' && (
          <div id="view-thankyou-b" className="py-8 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#00D084] bg-[#00D084]/20 text-[#00D084]">
              <Crosshair className="h-8 w-8 text-[#00D084]" />
            </div>

            <div className="rounded-lg border border-[#00D084]/40 bg-[#00D084]/10 p-6 sm:p-8">
              <p className="font-cinzel text-xl font-bold text-white sm:text-2xl">
                Brief Received. We will revert with a Sniper Quote in 24 hours.
              </p>
              <p className="mt-3 font-mono text-xs text-white/70">
                Company: <span className="text-white font-semibold">{formB.company}</span> &bull; Lead: <span className="text-white font-semibold">{formB.name}</span> ({formB.phone})
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={onClose}
                className="rounded border border-white/20 bg-white/5 px-6 py-2.5 font-mono text-xs text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                CLOSE
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
