import React from 'react';
import { Compass, Flame, ArrowRight, Check } from 'lucide-react';
import { getHomeContent } from '../data/contentLoader';

interface EngagementBattleSectionProps {
  onSelectLongGame: () => void;
  onSelectShortGame: () => void;
}

export const EngagementBattleSection: React.FC<EngagementBattleSectionProps> = ({
  onSelectLongGame,
  onSelectShortGame,
}) => {
  const homeData = getHomeContent();
  const battle = homeData.engagement_battle;
  const cardA = battle?.card_a;
  const cardB = battle?.card_b;

  const cardAPoints = cardA?.points?.length
    ? cardA.points
    : ['GTM Strategy', 'Audit Growth Leaks', 'Build 90-Day Roadmap'];

  return (
    <section 
      id="engagement-battle-section" 
      aria-label="Select Engagement Model - Which Battle Are We Fighting"
      className="w-full bg-[#0A1931] border-b border-white/10 py-12 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto mb-12 sm:mb-16 max-w-3xl text-center">
          <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#00D080] uppercase block mb-3">
            {battle?.badge || 'SELECT ENGAGEMENT MODEL'}
          </span>
          <h2 className="font-cinzel text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {battle?.title || 'WHICH BATTLE ARE WE FIGHTING?'}
          </h2>
          <p className="mt-4 text-base text-white/75 sm:text-lg">
            {battle?.subtitle || 'Stop guessing. Lock direction or lock execution.'}
          </p>
        </div>

        {/* 2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* CARD A - Active Style */}
          <div 
            id="card-engagement-a"
            className="group relative flex flex-col justify-between rounded-xl border border-white/15 bg-[#071326] p-6 sm:p-8 transition-all duration-300 hover:border-[#00D080] hover:shadow-2xl hover:shadow-[#00D080]/10"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#00D080]/30 bg-[#00D080]/10 text-[#00D080]">
                  <Compass className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs font-bold tracking-widest text-[#00D080] uppercase">
                  {cardA?.label || 'FORM A • FRACTIONAL CMO'}
                </span>
              </div>

              <h3 className="font-cinzel text-2xl font-bold text-white sm:text-3xl">
                {cardA?.title || 'THE LONG GAME'}
              </h3>

              <ul className="mt-6 space-y-3 font-sans text-sm text-white/80">
                {cardAPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#00D080]/20 text-[#00D080]">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <span className="font-medium text-white/90">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={onSelectLongGame}
                className="w-full py-4 px-6 rounded-lg bg-[#00D080] hover:bg-[#00ba76] text-black font-mono font-bold tracking-wider text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-[#00D080]/20 transition-all duration-200 active:scale-[0.99]"
              >
                <span>{cardA?.cta || 'LOCK YOUR GROWTH DIRECTION'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-3 text-center text-xs text-white/60">
                Book a 30-minute call with Abhishek.
              </p>
            </div>
          </div>

          {/* CARD B - Active Style */}
          <div 
            id="card-engagement-b"
            className="group relative flex flex-col justify-between rounded-xl border border-white/15 bg-[#071326] p-6 sm:p-8 transition-all duration-300 hover:border-[#00D080] hover:shadow-2xl hover:shadow-[#00D080]/10"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#00D080]/30 bg-[#00D080]/10 text-[#00D080]">
                  <Flame className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs font-bold tracking-widest text-[#00D080] uppercase">
                  {cardB?.label || 'FORM B • SPECIALIZED EXECUTION'}
                </span>
              </div>

              <h3 className="font-cinzel text-2xl font-bold text-white sm:text-3xl">
                {cardB?.title || 'THE SHORT GAME'}
              </h3>

              <div className="mt-6">
                <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-4 text-sm text-white/85 leading-relaxed">
                  <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#00D080]/20 text-[#00D080]">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span>
                    {cardB?.description || 'Corporate AV / Website / Packaging / Performance Ads / Event - One asset executed right'}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={onSelectShortGame}
                className="w-full py-4 px-6 rounded-lg bg-[#00D080] hover:bg-[#00ba76] text-black font-mono font-bold tracking-wider text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-[#00D080]/20 transition-all duration-200 active:scale-[0.99]"
              >
                <span>{cardB?.cta || 'LOCK YOUR EXECUTION'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-3 text-center text-xs text-white/60">
                Share your project brief. We reply with scope and cost.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
