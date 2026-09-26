import React from 'react';
import { Crosshair, ShieldCheck, Target, Zap, ArrowRight } from 'lucide-react';

interface HeroProps {
  onLockTarget: () => void;
  onExplorePaths: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onLockTarget, onExplorePaths }) => {
  return (
    <section id="hero-section" className="relative overflow-hidden border-b border-white/10 bg-tactical-grid py-20 sm:py-28 lg:py-36">
      {/* Precision ambient background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-[700px] -translate-x-1/2 rounded-full bg-[#10B65D]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 -z-10 h-72 w-72 rounded-full bg-[#10B65D]/5 blur-2xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Institutional Governor Badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B65D] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B65D]"></span>
            </span>
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">
              INSTITUTIONAL MARKET OWNERSHIP
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-6 font-cinzel text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            We are Ekalavya Consulting.
          </h1>

          {/* Sub-title */}
          <h2 className="mx-auto mb-6 max-w-3xl text-lg font-semibold leading-relaxed text-[#10B65D] sm:text-xl lg:text-2xl">
            We operate as a Marketing Leadership &amp; Execution Firm. We drive your business growth through two distinct capabilities: Fractional CMO Leadership and Specialized Execution.
          </h2>

          {/* Paragraph */}
          <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg sm:leading-relaxed">
            For businesses seeking long-term direction, we provide the strategic depth and budget governance of a full-time Chief Marketing Officer at a fraction of the cost. For businesses looking to undertake specific, standalone marketing tasks—from corporate AVs and packaging design to custom web applications—we deploy our trusted network of specialized resources to deliver flawless results. From building a complete marketing operating system to nailing an individual project, we take institutional ownership of your market presence.
          </p>

          {/* Action Row */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              id="hero-lock-target-btn"
              onClick={onLockTarget}
              className="group relative flex w-full items-center justify-center gap-3 rounded bg-[#10B65D] px-8 py-4 font-mono text-base font-bold tracking-wider text-white shadow-xl shadow-[#10B65D]/25 transition-all duration-200 hover:bg-[#0ea052] hover:shadow-[#10B65D]/50 active:scale-[0.99] sm:w-auto"
            >
              <Crosshair className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
              <span>LOCK THE TARGET</span>
            </button>

            <button
              id="hero-explore-paths-btn"
              onClick={onExplorePaths}
              className="flex w-full items-center justify-center gap-2 rounded border border-white/20 bg-white/5 px-6 py-4 font-mono text-sm font-semibold tracking-wider text-white/90 backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-white/10 sm:w-auto"
            >
              <span>INSPECT THE TWO PATHS</span>
              <ArrowRight className="h-4 w-4 text-[#10B65D]" />
            </button>
          </div>

          {/* Tenets / Discipline Metrics */}
          <div className="mt-16 grid grid-cols-1 gap-4 border-t border-white/10 pt-10 sm:grid-cols-3 sm:gap-6">
            <div className="flex items-center gap-3.5 rounded border border-white/5 bg-white/[0.02] p-4 text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-[#10B65D]/30 bg-[#10B65D]/10 text-[#10B65D]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono text-sm font-bold text-white uppercase">Governor Mandate</div>
                <div className="text-xs text-white/50">Fractional CMO ownership of the marketing P&amp;L</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded border border-white/5 bg-white/[0.02] p-4 text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-[#10B65D]/30 bg-[#10B65D]/10 text-[#10B65D]">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono text-sm font-bold text-white uppercase">One Shot Precision</div>
                <div className="text-xs text-white/50">High-conviction sprints with zero wasted capital</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 rounded border border-white/5 bg-white/[0.02] p-4 text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-[#10B65D]/30 bg-[#10B65D]/10 text-[#10B65D]">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono text-sm font-bold text-white uppercase">Lethal Delivery</div>
                <div className="text-xs text-white/50">Turnkey production across AV, Code &amp; On-Ground</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
