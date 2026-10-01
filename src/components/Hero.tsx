import React from 'react';
import { Target, ArrowRight, ShieldCheck, Crosshair } from 'lucide-react';
import { getHomeContent } from '../data/contentLoader';

interface HeroProps {
  onLockTarget: () => void;
  onExplorePaths?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onLockTarget, onExplorePaths }) => {
  const homeData = getHomeContent();

  const handleScrollToNext = () => {
    if (onExplorePaths) {
      onExplorePaths();
    } else {
      const el = document.getElementById('about-section') || document.getElementById('how-we-work-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="hero-section" 
      className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-[#0A1931] flex flex-col justify-center border-b border-white/10"
    >
      {/* Background Graphic / Grid overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 208, 132, 0.15) 0%, transparent 60%)',
        }}
      />
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl lg:max-w-4xl text-left">
          
          {/* Tagline / Dictum */}
          <div className="mb-6 inline-flex items-center gap-2 rounded border border-[#00D084]/30 bg-[#00D084]/10 px-3 py-1.5 font-mono text-xs font-semibold tracking-wider text-[#00D084]">
            <Target className="h-4 w-4 animate-pulse" />
            <span className="tracking-[0.2em] uppercase">{homeData.hero_badge || 'INSTITUTIONAL MARKET OWNERSHIP'}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-cinzel text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15]">
            ONE ARROW.<br />
            ONE TARGET.<br />
            <span className="text-[#00D084]">NO WASTE.</span>
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="mt-8 font-mono text-base leading-relaxed text-white/80 sm:text-lg sm:leading-relaxed max-w-2xl">
            {homeData.hero_sub || 'We are Ekalavya Consulting. We provide Fractional CMO Services and Specialised Execution to drive high-velocity business growth across India, Middle East, and Europe.'}
          </p>

          {/* Dual Action Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            {/* Primary CTA */}
            <button
              id="hero-lock-target-btn"
              onClick={onLockTarget}
              className="group flex items-center justify-center gap-3 rounded bg-[#00D084] px-8 py-4 font-mono text-sm font-bold tracking-wider text-black shadow-lg shadow-[#00D084]/20 transition-all duration-200 hover:bg-[#00ba76] hover:shadow-[#00D084]/40 active:translate-y-0.5 sm:text-base"
            >
              <Crosshair className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
              <span>LOCK THE TARGET</span>
            </button>

            {/* Secondary Action */}
            <button
              id="hero-explore-paths-btn"
              onClick={handleScrollToNext}
              className="flex items-center justify-center gap-2 rounded border border-white/20 bg-white/5 px-6 py-4 font-mono text-sm font-semibold tracking-wider text-white backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-white/10"
            >
              <span>EXPLORE THE TWO PATHS</span>
              <ArrowRight className="h-4 w-4 text-[#00D084]" />
            </button>
          </div>

          {/* Trust Marker */}
          <div className="mt-12 flex items-center gap-3 font-mono text-xs text-white/60">
            <ShieldCheck className="h-4 w-4 text-[#00D084]" />
            <span>DISCRETE &bull; INSTITUTIONAL-GRADE &bull; PERFORMANCE CONTRACTED</span>
          </div>

        </div>
      </div>
    </section>
  );
};
