import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: 'Most businesses are currently being led by "Dronacharyas" who have grown too comfortable.',
    answer:
      'You are likely paying for an in-house CMO taking a big fat paycheck to sit in meetings, or bleeding money on expensive agencies that deliver flashy creatives with zero business logic. They have lost their edge. Whether they are mismanaging your long-term roadmap or fumbling individual projects like your website, corporate AV, or product packaging, your budget is leaking through the cracks of uncoordinated execution and "black box" marketing.',
  },
  {
    id: 2,
    question: 'I spent 21 years in the shadows, observing how the "Masters" actually work.',
    answer:
      "I didn't just hold a seat; I held a 21-year vigil across top-tier agencies and India's largest loyalty management company. I watched elite strategies succeed and expensive ones fail. I didn't just decode high-level consumer data—I mastered the ground-level mechanics of production, design systems, and campaigns. I know exactly where big agencies inflate their markups and where standalone projects lose their traction.",
  },
  {
    id: 3,
    question: 'Ekalavya Consulting is the "Middle Path" for brands that value Razor-Sharp Precision.',
    answer:
      'We bridge the gap between high-level advisory and flawless execution. If you need long-term direction, we provide a complete Marketing Operating System to govern your budget. If you need to undertake specific, standalone tasks, we act as your Leadership & Execution machinery to get it done. We ensure that your overarching business strategy and your immediate physical or digital assets are perfectly synchronized.',
  },
  {
    id: 4,
    question: 'I start by observing the battlefield that everyone else has become blind to.',
    answer:
      'Whether you engage us for fractional leadership or a single complex project, our approach begins with observation. We audit your internal workflows, your empanelled partners, and your digital footprint. Before we suggest a single rupee of spend on a campaign or a new application, we ensure the foundation is built for a kill.',
  },
  {
    id: 5,
    question: 'Strategy is nothing without the mastery of the pull.',
    answer:
      'We take your brand from concept to conversion with zero friction. As your Creative & Strategic Governor, I manage the entire process for you. For our Fractional CMO clients, this means total portfolio accountability. For our standalone project clients, it means deploying my trusted network of specialized resources to deliver corporate films, SEO websites, 3D systems, or B2B content with absolute, uncompromised finesse.',
  },
  {
    id: 6,
    question: "You don't need a royal army. You need the right archer.",
    answer:
      'Whether you are a fast-scaling startup needing a long-term strategic ally, or a traditional mid-sized brand looking to execute a specialized marketing asset, the goal remains unchanged. Stop the "spray and pray" approach. It is time to shift from constant corporate noise to calculated, precise impact.',
  },
];

export const ClearingTheFog: React.FC = () => {
  // Only one accordion open at a time
  const [openId, setOpenId] = useState<number | null>(1);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section 
      id="clearing-the-fog-section" 
      aria-label="Clearing The Fog - Accordion Q&A"
      className="w-full bg-[#0A1931] border-b border-white/10 py-10 sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto mb-12 sm:mb-16 max-w-3xl text-center">
          <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#00D080] uppercase block mb-3">
            MECHANICS &amp; HESITATIONS
          </span>
          <h2 className="font-cinzel text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Clearing The Fog
          </h2>
          <p className="mt-4 text-base text-white/75 sm:text-lg">
            Direct answers on how we eliminate waste, govern budgets, and execute.
          </p>
        </div>

        {/* 6 Accordion Questions - Only One Open At A Time */}
        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                id={`clearing-fog-item-${item.id}`}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#00D080] bg-[#071326] shadow-lg shadow-black/40'
                    : 'border-white/10 bg-[#071326]/60 hover:border-white/25 hover:bg-[#071326]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 p-5 sm:p-6 text-left transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs font-bold text-[#00D080] sm:text-sm pt-0.5">
                      0{item.id}.
                    </span>
                    <span className="font-cinzel text-base font-bold leading-snug text-white sm:text-lg">
                      {item.question}
                    </span>
                  </div>
                  
                  {/* Emerald +/- sign */}
                  <div
                    className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border transition-all ${
                      isOpen
                        ? 'border-[#00D080] bg-[#00D080] text-black shadow-md shadow-[#00D080]/30'
                        : 'border-[#00D080]/40 bg-[#00D080]/10 text-[#00D080] hover:bg-[#00D080]/20'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="h-4 w-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {/* Animated / Smooth slide container */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/10 px-5 sm:px-6 pb-6 pt-4 text-white/80">
                      <p className="text-sm leading-relaxed sm:text-base pl-8 sm:pl-9">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
