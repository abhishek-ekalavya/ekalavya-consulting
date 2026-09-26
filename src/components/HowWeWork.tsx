import React from 'react';
import { Crosshair } from 'lucide-react';
import { getHomeContent } from '../data/contentLoader';

interface HowWeWorkProps {
  onLockTarget: () => void;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onLockTarget }) => {
  const homeData = getHomeContent();
  const heroCta = homeData.hero_cta || 'LOCK THE TARGET';
  return (
    <section id="how-we-work-section" className="relative border-b border-white/10 bg-[#0A1931] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 2: HOW WE WORK - HEADER */}
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <div className="mb-4 font-cinzel text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Two Paths. Same Precision. Zero Waste.
          </div>
          <p className="text-base text-white/75 sm:text-lg">
            We don't believe in one-size-fits-all retainers. You engage us based on the battle you are fighting.
          </p>
        </div>

        {/* 2 COLUMNS SIDE-BY-SIDE */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          
          {/* COLUMN 1: PATH 1 - THE LONG GAME */}
          <div 
            id="path-1-long-game-card"
            className="flex flex-col justify-between rounded-lg border border-white/15 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#00D084]/40 hover:bg-white/[0.05] sm:p-8"
          >
            <div>
              <div className="mb-2 font-mono text-xs font-bold tracking-widest text-[#00D084] uppercase">
                PATH 1 - THE LONG GAME
              </div>
              <h2 className="font-cinzel text-2xl font-bold text-white sm:text-3xl">
                Fractional CMO Leadership
              </h2>
              
              <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
                For founders who need direction, not just delivery. You get the strategic depth, budget governance, and team leadership of a full-time CMO without the full-time overhead. I become your Marketing Governor.
              </p>

              {/* What we take ownership of: */}
              <div className="mt-8">
                <h3 className="font-mono text-xs font-bold tracking-wider text-white uppercase">
                  What we take ownership of:
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-white/80">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D084]" />
                    <span>Complete Marketing Operating System &amp; Go-To-Market Architecture</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D084]" />
                    <span>Monthly Budget Governance &amp; ROI Accountability</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D084]" />
                    <span>Empanelled Agency &amp; Vendor Audit / Management</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D084]" />
                    <span>Brand, Performance, and Content Leadership</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D084]" />
                    <span>Board-level Reporting &amp; Growth Roadmap</span>
                  </li>
                </ul>
              </div>

              {/* Best for: */}
              <div className="mt-8 rounded border border-white/10 bg-white/[0.02] p-4">
                <span className="font-mono text-xs font-bold text-[#00D084] uppercase">Best for: </span>
                <span className="text-sm text-white/80">
                  Scaling startups, mid-sized brands, and Pan-India / Middle East businesses preparing for next-stage growth.
                </span>
              </div>

              {/* Internal Anchor Link to Path 2 */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <a 
                  href="#path-2-short-game-card" 
                  className="font-mono text-xs text-[#00D084] hover:underline inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Need standalone project delivery? Explore Specialized Execution</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: PATH 2 - THE SHORT GAME */}
          <div 
            id="path-2-short-game-card"
            className="flex flex-col justify-between rounded-lg border border-white/15 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#00D084]/40 hover:bg-white/[0.05] sm:p-8"
          >
            <div>
              <div className="mb-2 font-mono text-xs font-bold tracking-widest text-[#00D084] uppercase">
                PATH 2 - THE SHORT GAME
              </div>
              <h2 className="font-cinzel text-2xl font-bold text-white sm:text-3xl">
                Specialized Execution
              </h2>
              
              <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
                For founders who need one critical asset or one critical campaign nailed with zero waste. You have the direction. You need flawless execution. We deploy our trusted, specialized network to deliver with sniper precision. One Arrow. One Kill.
              </p>

              {/* What we execute: */}
              <div className="mt-8 space-y-6">
                <h3 className="font-mono text-xs font-bold tracking-wider text-white uppercase">
                  What we execute:
                </h3>

                {/* A. Brand & Digital Assets */}
                <div className="rounded border border-white/10 bg-white/[0.02] p-4">
                  <h3 className="font-cinzel text-sm font-bold text-[#00D084]">
                    A. Brand &amp; Digital Assets
                  </h3>
                  <ul className="mt-2.5 space-y-1.5 text-sm text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D084]" />
                      <span>Corporate AVs &amp; Brand Films</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D084]" />
                      <span>High-Performance Websites, SEO Systems &amp; Custom Web Apps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D084]" />
                      <span>Packaging, 3D, and Product Visual Systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D084]" />
                      <span>B2B Content, Pitch Decks &amp; Sales Enablement Collateral</span>
                    </li>
                  </ul>
                </div>

                {/* B. Integrated Growth Campaigns */}
                <div className="rounded border border-white/10 bg-white/[0.02] p-4">
                  <h3 className="font-cinzel text-sm font-bold text-[#00D084]">
                    B. Integrated Growth Campaigns
                  </h3>
                  <ul className="mt-2.5 space-y-1.5 text-sm text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D084]" />
                      <span>Performance Marketing &amp; Paid Media (Google, Meta, LinkedIn)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D084]" />
                      <span>Integrated Campaign Planning - Radio, Print, TVC, Outdoor + Digital</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D084]" />
                      <span>Campaign Strategy, Media Buying &amp; ROI Governance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D084]" />
                      <span>Lead Generation Systems &amp; Conversion Architecture</span>
                    </li>
                  </ul>
                </div>

                {/* C. On-Ground Domination */}
                <div className="rounded border border-white/10 bg-white/[0.02] p-4">
                  <h3 className="font-cinzel text-sm font-bold text-[#00D084]">
                    C. On-Ground Domination
                  </h3>
                  <ul className="mt-2.5 space-y-1.5 text-sm text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D084]" />
                      <span>Event Planning &amp; Execution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D084]" />
                      <span>Brand Activations, Trade Shows &amp; Retail Experiences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D084]" />
                      <span>Influencer &amp; Community Activation</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Best for: */}
              <div className="mt-8 rounded border border-white/10 bg-white/[0.02] p-4">
                <span className="font-mono text-xs font-bold text-[#00D084] uppercase">Best for: </span>
                <span className="text-sm text-white/80">
                  Businesses that need a specialized project or a time-bound campaign delivered to CMO-standards, without hiring an army.
                </span>
              </div>

              {/* Internal Anchor Link to Path 1 */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <a 
                  href="#path-1-long-game-card" 
                  className="font-mono text-xs text-[#00D084] hover:underline inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Need strategic direction &amp; budget governance? Explore Fractional CMO</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Closing line below both columns (Center) */}
        <div className="mt-16 text-center">
          <p className="mx-auto max-w-3xl text-base font-semibold leading-relaxed text-white/90 sm:text-xl">
            Both paths end the same way: No black boxes. No bloated markups. Institutional ownership of outcome.
          </p>

          {/* CTA Button below that: [LOCK THE TARGET] */}
          <div className="mt-8 flex justify-center">
            <button
              id="how-we-work-lock-target-btn"
              onClick={onLockTarget}
              className="group relative flex items-center justify-center gap-3 rounded bg-[#00D084] px-9 py-4 font-mono text-base font-bold tracking-wider text-black shadow-xl shadow-[#00D084]/25 transition-all duration-200 hover:bg-[#00ba76] hover:shadow-[#00D084]/40 active:scale-[0.99]"
            >
              <Crosshair className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
              <span>LOCK THE TARGET</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
