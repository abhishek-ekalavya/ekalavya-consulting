import React from 'react';
import {
  Crosshair, Users, DollarSign, UserCheck, RefreshCw,
  Compass, Settings, Repeat, Target, Zap, TrendingUp,
  Inbox, Timer, ClipboardList,
} from 'lucide-react';

const challenges = [
  { Icon: Crosshair, title: 'GTM Confusion', desc: 'No clear go-to-market engine' },
  { Icon: Users, title: 'Agency Chaos', desc: '5 agencies, 0 ownership' },
  { Icon: UserCheck, title: 'CMO Dilemma', desc: "Need a CMO, can't afford full-time" },
  { Icon: DollarSign, title: 'Wasted Spend', desc: 'Campaigns running, ROI missing' },
];

const pillars = [
  {
    title: 'THE LONG GAME',
    subtitle: 'Fractional Marketer',
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

export const InfographicsSection: React.FC = () => {
  return (
    <div id="infographics-wrapper" className="w-full bg-[#0A1931] text-white">
      {/* 1. THE CHALLENGE */}
      <section
        id="infographic-challenge-section"
        aria-label="The Challenge - Same Effort. Same Spend. Zero Growth."
        className="w-full border-b border-white/10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-cinzel text-3xl font-extrabold tracking-wide text-white sm:text-5xl">
            THE CHALLENGE
          </h2>
          <p className="mt-3 font-mono text-xs sm:text-sm tracking-widest text-[#00D084]">
            Same Effort. Same Spend. Zero Growth.
          </p>

          <div className="relative mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-10 items-center">
            <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-16 w-16 items-center justify-center rounded-full border border-[#00D084]/50 bg-[#0A1931] shadow-[0_0_25px_rgba(0,208,132,0.25)]">
              <RefreshCw className="h-7 w-7 text-[#00D084]" />
            </div>

            {challenges.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col items-center justify-center rounded-2xl border border-[#00D084]/40 bg-[#071326]/90 p-7 sm:p-8 shadow-[0_0_25px_rgba(0,208,132,0.12)] transition-all duration-300 hover:border-[#00D084] hover:shadow-[0_0_30px_rgba(0,208,132,0.25)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#00D084]/40 bg-[#00D084]/10 text-[#00D084]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white">{title}</h3>
                <p className="mt-2 font-mono text-xs text-white/70 leading-relaxed">{desc}</p>
              </div>
            ))}
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
                className="flex flex-col rounded-xl border border-[#00D084]/50 bg-[#0A1931] p-6 sm:p-8 shadow-[0_0_25px_rgba(0,208,132,0.12)] transition-all duration-300 hover:border-[#00D084]"
              >
                <div className="border-b border-white/10 pb-4 text-center">
                  <h3 className="font-cinzel text-xl font-bold tracking-wider text-[#00D084]">
                    {title}
                  </h3>
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
