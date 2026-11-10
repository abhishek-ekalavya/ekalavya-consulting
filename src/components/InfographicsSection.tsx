import React from 'react';
import {
  Crosshair,
  Users,
  DollarSign,
  UserCheck,
  RefreshCw,
  Compass,
  Settings,
  Repeat,
  Target,
  Zap,
  TrendingUp,
  Inbox,
  Timer,
  ClipboardList,
} from 'lucide-react';

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

          {/* 4-Node Cycle Grid */}
          <div className="relative mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-10 items-center">
            {/* Center Cycle Icon (Desktop) */}
            <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-16 w-16 items-center justify-center rounded-full border border-[#00D084]/50 bg-[#0A1931] shadow-[0_0_25px_rgba(0,208,132,0.25)]">
              <RefreshCw className="h-7 w-7 text-[#00D084]" />
            </div>

            {[
              {
                Icon: Crosshair,
                title: 'GTM Confusion',
                desc: 'No clear go-to-market engine',
              },
              {
                Icon: Users,
                title: 'Agency Chaos',
                desc: '5 agencies, 0 ownership',
              },
              {
                Icon: UserCheck,
                title: 'CMO Dilemma',
                desc: "Need a CMO, can't afford full-time",
              },
              {
                Icon: DollarSign,
                title: 'Wasted Spend',
                desc: 'Campaigns running, ROI missing',
              },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col items-center justify-center rounded-2xl border border-[#00D084]/40 bg-[#071326]/90 p-7 sm:p-8 shadow-[0_0_25px_rgba(0,208,132,0.12)] transition-all duration-300 hover:border-[#00D084] hover:shadow-[0_0_30px_rgba(0,208,132,0.25)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#00D084]/40 bg-[#00D084]/10 text-[#00D084]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white">
                  {title}
                </h3>
                <p className="mt-2 font-mono text-xs text-white/70 leading-relaxed">
                  {desc}
                </p>
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

          {/* 3-Column Pillars */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            {/* THE LONG GAME */}
            <div className="flex flex-col rounded-xl border border-[#00D084]/50 bg-[#0A1931] p-6 sm:p-8 shadow-[0_0_25px_rgba(0,208,132,0.12)] transition-all duration-300 hover:border-[#00D084]">
              <div className="border-b border-white/10 pb-4 text-center">
                <h3 className="font-cinzel text-xl font-bold tracking-wider text-[#00D084]">
                  THE LONG GAME
                </h3>
                <p className="mt-1 font-mono text-xs text-white/80">
                  Fractional Marketer
                </p>
              </div>
              <div className="mt-6 space-y-5 flex-1">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#00D084]/30 bg-[#00D084]/10 text-[#00D084]">
                    <Compass className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-white">
                    C-Suite GTM Strategy
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#00D084]/30 bg-[#00D084]/10 text-[#00D084]">
                    <Settings className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-white">
                    System &amp; Engine Building
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#00D084]/30 bg-[#00D084]/10 text-[#00D084]">
                    <Repeat className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-white">
                    Zero Waste Growth
                  </span>
                </div>
              </div>
            </div>

            {/* THE SHORT GAME */}
            <div className="flex flex-col rounded-xl border border-[#00D084]/50 bg-[#0A1931] p-6 sm:p-8 shadow-[0_0_25px_rgba(0,208,132,0.12)] transition-all duration-300 hover:border-[#00D084]">
              <div className="border-b border-white/10 pb-4 text-center">
                <h3 className="font-cinzel text-xl font-bold tracking-wider text-[#00D084]">
                  THE SHORT GAME
                </h3>
                <p className="mt-1 font-mono text-xs text-white/80">
                  Strategic Execution
                </p>
              </div>
              <div className="mt-6 space-y-5 flex-1">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#00D084]/30 bg-[#00D084]/10 text-[#00D084]">
                    <Target className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-white">
                    360&deg; Campaign Planning
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#00D084]/30 bg-[#00D084]/10 text-[#00D084]">
                    <Zap className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-white">
                    High-Velocity Execution
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#00D084]/30 bg-[#00D084]/10 text-[#00D084]">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-white">
                    10X Results
                  </span>
                </div>
              </div>
            </div>

            {/* THE SMART GAME */}
            <div className="flex flex-col rounded-xl border border-[#00D084]/50 bg-[#0A1931] p-6 sm:p-8 shadow-[0_0_25px_rgba(0,208,132,0.12)] transition-all duration-300 hover:border-[#00D084]">
              <div className="border-b border-white/10 pb-4 text-center">
                <h3 className="font-cinzel text-xl font-bold tracking-wider text-[#00D084]">
                  THE SMART GAME
                </h3>
                <p className="mt-1 font-mono text-xs text-white/80">
