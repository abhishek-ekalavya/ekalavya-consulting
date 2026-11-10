import React from 'react';
import {
  Crosshair, Users, DollarSign, UserCheck, RefreshCw,
  Compass, Settings, Repeat, Target, Zap, TrendingUp,
  Inbox, Timer, ClipboardList,
} from 'lucide-react';

const pillars = [
  {
    title: 'THE LONG GAME',
    subtitle: 'Fractional CMO',
    items: [
      { Icon: Compass, text: 'C-Suite GTM Strategy' },
      { Icon: Settings, text: 'System & Engine Building' },
      { Icon: Repeat, text: 'Zero Waste Growth' },
    ],
  },
  {
    title: 'THE SHORT GAME',
    subtitle: 'Strategic Execution',
    items: [
      { Icon: Target, text: '360° Campaign Planning' },
      { Icon: Zap, text: 'High-Velocity Execution' },
      { Icon: TrendingUp, text: '10X Results' },
    ],
  },
  {
    title: 'THE SMART GAME',
    subtitle: 'AI Automation',
    items: [
      { Icon: Inbox, text: 'Capture Every Lead' },
      { Icon: Timer, text: 'Follow up in Under 60 Seconds' },
      { Icon: ClipboardList, text: 'Spend, Leads & ROI Reporting' },
    ],
  },
];

const ChallengeNode = ({ Icon, title, desc }: { Icon: any; title: string; desc: string }) => (
  <div className="flex h-44 w-44 sm:h-48 sm:w-48 flex-col items-center justify-center rounded-full border-2 border-[#00D084] bg-[#071326] p-4 text-center shadow-[0_0_30px_rgba(0,208,132,0.28)]">
    <Icon className="mb-2 h-6 w-6 text-[#00D084]" />
    <h3 className="font-cinzel text-sm sm:text-base font-bold text-white leading-tight">{title}</h3>
    <p className="mt-1.5 font-mono text-[10px] sm:text-[11px] text-white/75 leading-snug">{desc}</p>
  </div>
);

export const InfographicsSection: React.FC = () => {
  return (
    <div id="infographics-wrapper" className="w-full bg-[#0A1931] text-white select-none">
      {/* 1. THE CHALLENGE (Circular Cycle Diagram) */}
      <section
        id="infographic-challenge-section"
        aria-label="Stuck in the Cycle - Four broken links keeping businesses from scaling profitably."
        className="relative w-full overflow-hidden border-b border-white/10 py-16 sm:py-24 px-4"
      >
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-cinzel text-3xl font-extrabold tracking-wide text-white sm:text-5xl">
            STUCK IN THE CYCLE
          </h2>
          <p className="mt-3 font-mono text-xs sm:text-sm tracking-widest text-[#00D084]">
            Four broken links keeping businesses from scaling profitably.
          </p>

          {/* Desktop Orbital Diagram */}
          <div className="relative mx-auto mt-14 hidden md:block h-[540px] w-[540px]">
            {/* Concentric Radar Rings */}
            <div className="pointer-events-none absolute inset-0 rounded-full border border-[#00D084]/10" />
            <div className="pointer-events-none absolute inset-12 rounded-full border border-dashed border-[#00D084]/35" />
            <div className="pointer-events-none absolute inset-28 rounded-full border border-[#00D084]/15" />

            {/* Center Cycle Icon */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-20 w-20 items-center justify-center rounded-full border border-[#00D084]/30 bg-[#071326]/80 shadow-[0_0_30px_rgba(0,208,132,0.2)]">
              <RefreshCw className="h-9 w-9 text-[#00D084]" />
            </div>

            {/* Top, Right, Bottom, Left Circular Nodes */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2">
              <ChallengeNode Icon={Crosshair} title="GTM Confusion" desc="No clear go-to-market engine" />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <ChallengeNode Icon={Users} title="Agency Chaos" desc="5 agencies, 0 ownership" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <ChallengeNode Icon={DollarSign} title="Wasted Spend" desc="Campaigns running, ROI missing" />
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <ChallengeNode Icon={UserCheck} title="CMO Dilemma" desc="Need a CMO, can't afford full-time" />
            </div>
          </div>

          {/* Mobile Vertical Cycle */}
          <div className="mt-10 flex flex-col items-center gap-6 md:hidden">
            <ChallengeNode Icon={Crosshair} title="GTM Confusion" desc="No clear go-to-market engine" />
            <ChallengeNode Icon={Users} title="Agency Chaos" desc="5 agencies, 0 ownership" />
            <ChallengeNode Icon={DollarSign} title="Wasted Spend" desc="Campaigns running, ROI missing" />
            <ChallengeNode Icon={UserCheck} title="CMO Dilemma" desc="Need a CMO, can't afford full-time" />
          </div>
        </div>
      </section>

      {/* 2. THE ANSWER */}
      <section
        id="infographic-answer-section"
        aria-label="The Answer - One Arrow. One Kill. No Waste."
        className="w-full border-b border-white/10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#071326]/40"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-cinzel text-3xl font-extrabold tracking-wide text-white sm:text-5xl">
              THE ANSWER
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            {pillars.map(({ title, subtitle, items }) => (
              <div
                key={title}
                className="flex flex-col rounded-xl border border-[#00D084]/50 bg-[#0A1931] p-6 sm:p-8 shadow-[0_0_25px_rgba(0,208,132,0.12)]"
              >
                <div className="border-b border-white/10 pb-4 text-center">
                  <h3 className="font-cinzel text-xl font-bold tracking-wider text-[#00D084]">{title}</h3>
                  <p className="mt-1 font-mono text-xs text-white/80">{subtitle}</p>
                </div>
                <div className="mt-6 space-y-5 flex-1">
                  {items.map(({ Icon, text }) => (
                    <div key={text} className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#00D084]/30 bg-[#00D084]/10 text-[#00D084]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-semibold text-white">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <p className="font-cinzel text-lg sm:text-2xl font-extrabold tracking-widest text-white">
              ONE ARROW. ONE KILL. NO WASTE.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
