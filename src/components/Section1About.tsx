import React from 'react';
import { getHomeContent } from '../data/contentLoader';
import { FounderSection } from './FounderSection';

interface Section1AboutProps {
  onLockTarget?: () => void;
}

export const Section1About: React.FC<Section1AboutProps> = ({ onLockTarget: _onLockTarget }) => {
  const homeData = getHomeContent();

  return (
    <section id="about-section" className="relative border-b border-white/10 bg-[#0A1931] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Institutional Pill */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00D084] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00D084]"></span>
            </span>
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">
              {homeData.hero_badge || 'INSTITUTIONAL MARKET OWNERSHIP'}
            </span>
          </div>
        </div>

        {/* SECTION 1: ABOUT US */}
        <div className="text-center">
          {/* Headline */}
          <h1 className="font-cinzel text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {homeData.hero_headline || 'Fractional Marketing Leadership and Execution Firm for Ambitious Brands | Ekalavya Consulting'}
          </h1>

          {/* Sub with primary keywords */}
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-xl">
            {homeData.hero_sub}
          </p>

          {/* Tagline */}
          <div className="my-8">
            <p className="font-cinzel text-2xl font-extrabold tracking-wider text-[#00D084] sm:text-3xl lg:text-4xl">
              {homeData.about_title || 'One Arrow. One Kill. No Waste.'}
            </p>
          </div>
        </div>

        {/* FOUNDER AND FRACTIONAL MARKETER SECTION */}
        <FounderSection />

      </div>
    </section>
  );
};
