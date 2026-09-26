import React, { useState } from 'react';
import { ChevronDown, Crosshair } from 'lucide-react';
import { getHomeContent } from '../data/contentLoader';

interface Section1AboutProps {
  onLockTarget?: () => void;
}

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

const accordionItems: AccordionItem[] = [
  {
    id: 1,
    title: 'Most businesses are currently being led by "Dronacharyas" who have grown too comfortable.',
    content:
      'You are likely paying for an in-house CMO taking a big fat paycheck to sit in meetings, or bleeding money on expensive agencies that deliver flashy creatives with zero business logic. They have lost their edge. Whether they are mismanaging your long-term roadmap or fumbling individual projects like your website, corporate AV, or product packaging, your budget is leaking through the cracks of uncoordinated execution and "black box" marketing.',
  },
  {
    id: 2,
    title: 'I spent 21 years in the shadows, observing how the "Masters" actually work.',
    content:
      "I didn't just hold a seat; I held a 21-year vigil across top-tier agencies and India's largest loyalty management company. I watched elite strategies succeed and expensive ones fail. I didn't just decode high-level consumer data—I mastered the ground-level mechanics of production, design systems, and campaigns. I know exactly where big agencies inflate their markups and where standalone projects lose their traction.",
  },
  {
    id: 3,
    title: 'Ekalavya Consulting is the "Middle Path" for brands that value Razor-Sharp Precision.',
    content:
      'We bridge the gap between high-level advisory and flawless execution. If you need long-term direction, we provide a complete Marketing Operating System to govern your budget. If you need to undertake specific, standalone tasks, we act as your Leadership & Execution machinery to get it done. We ensure that your overarching business strategy and your immediate physical or digital assets are perfectly synchronized.',
  },
  {
    id: 4,
    title: 'I start by observing the battlefield that everyone else has become blind to.',
    content:
      'Whether you engage us for fractional leadership or a single complex project, our approach begins with observation. We audit your internal workflows, your empanelled partners, and your digital footprint. Before we suggest a single rupee of spend on a campaign or a new application, we ensure the foundation is built for a kill.',
  },
  {
    id: 5,
    title: 'Strategy is nothing without the mastery of the pull.',
    content:
      'We take your brand from concept to conversion with zero friction. As your Creative & Strategic Governor, I manage the entire process for you. For our Fractional CMO clients, this means total portfolio accountability. For our standalone project clients, it means deploying my trusted network of specialized resources to deliver corporate films, SEO websites, 3D systems, or B2B content with absolute, uncompromised finesse.',
  },
  {
    id: 6,
    title: "You don't need a royal army. You need the right archer.",
    content:
      'Whether you are a fast-scaling startup needing a long-term strategic ally, or a traditional mid-sized brand looking to execute a specialized marketing asset, the goal remains unchanged. Stop the "spray and pray" approach. It is time to shift from constant corporate noise to calculated, precise impact.',
  },
];

export const Section1About: React.FC<Section1AboutProps> = ({ onLockTarget }) => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({ 1: true });
  const homeData = getHomeContent();

  const toggleItem = (id: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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

        {/* 6 Sentences With Dropdowns */}
        <div className="mt-12 space-y-4 text-left">
          {accordionItems.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div
                key={item.id}
                id={`accordion-item-${item.id}`}
                className={`rounded-lg border transition-all duration-200 ${
                  isOpen
                    ? 'border-[#00D084]/40 bg-white/[0.04]'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.03]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left transition-colors sm:p-6"
                >
                  <div className="flex items-start gap-3.5">
                    <span className="font-mono text-xs font-bold text-[#00D084] sm:text-sm pt-0.5">
                      0{item.id}.
                    </span>
                    <span className="font-cinzel text-base font-bold leading-snug text-white sm:text-lg">
                      {item.title}
                    </span>
                  </div>
                  <div
                    className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded border transition-all ${
                      isOpen
                        ? 'border-[#00D084]/40 bg-[#00D084]/10 text-[#00D084] rotate-180'
                        : 'border-white/15 bg-white/5 text-white/60'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-white/10 px-5 pb-6 pt-4 sm:px-6 sm:pb-6">
                    <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
