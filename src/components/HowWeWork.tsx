import React from 'react';
import { Crosshair } from 'lucide-react';
import { getHomeContent } from '../data/contentLoader';

interface HowWeWorkProps {
  onLockTarget: () => void;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onLockTarget }) => {
  const homeData = getHomeContent();
  const heroCta = homeData.hero_cta || 'LOCK THE TARGET';
  const hww = homeData.how_we_work;
  const path1 = hww?.path1;
  const path2 = hww?.path2;
  const path3 = hww?.path3;

  const path1Items = path1?.items?.length
    ? path1.items
    : [
        'Complete Marketing Operating System & Go-To-Market Architecture',
        'Monthly Budget Governance & ROI Accountability',
        'Empanelled Agency & Vendor Audit / Management',
        'Brand, Performance, and Content Leadership',
        'Board-level Reporting & Growth Roadmap',
      ];

  const path2Categories = path2?.categories?.length
    ? path2.categories
    : [
        {
          title: 'A. Brand & Digital Assets',
          items: [
            'Corporate AVs & Brand Films',
            'High-Performance Websites, SEO Systems & Custom Web Apps',
            'Packaging, 3D, and Product Visual Systems',
            'B2B Content, Pitch Decks & Sales Enablement Collateral',
          ],
        },
        {
          title: 'B. Integrated Growth Campaigns',
          items: [
            'Performance Marketing & Paid Media (Google, Meta, LinkedIn)',
            'Integrated Campaign Planning - Radio, Print, TVC, Outdoor + Digital',
            'Campaign Strategy, Media Buying & ROI Governance',
            'Lead Generation Systems & Conversion Architecture',
          ],
        },
        {
          title: 'C. On-Ground Domination',
          items: [
            'Event Planning & Execution',
            'Brand Activations, Trade Shows & Retail Experiences',
            'Influencer & Community Activation',
          ],
        },
      ];

  const path3Categories = path3?.categories?.length
    ? path3.categories
    : [
        {
          title: 'A. Lead capture and instant follow-up',
          items: [
            'Capture leads from your website, ads, WhatsApp and forms',
            'WhatsApp and email follow-up in under 60 seconds',
            'Lead scoring, routing and nurturing until a meeting is booked',
            'No lead left cold. No follow-up missed.',
          ],
        },
        {
          title: 'B. Content and communication',
          items: [
            'AI-assisted content systems for social, email and WhatsApp',
            'Drafts in your brand voice, with repurposing and scheduling',
            'Founder and brand content at scale, without a content team',
          ],
        },
        {
          title: 'C. Reporting and revenue operations',
          items: [
            'Automated weekly reports on spend, leads, sales and ROI',
            'CRM clean-up, pipeline tracking and sales dashboards',
            'One dashboard. A clear view of what works.',
          ],
        },
      ];

  return (
    <section id="how-we-work-section" className="relative border-b border-white/10 bg-[#0A1931] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 2: HOW WE WORK - HEADER */}
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <div className="mb-4 font-cinzel text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {hww?.title || 'Two Paths. Same Precision. Zero Waste.'}
          </div>
          <p className="text-base text-white/75 sm:text-lg">
            {hww?.subtitle || "We don't believe in one-size-fits-all retainers. You engage us based on the battle you are fighting."}
          </p>
        </div>

        {/* 3 COLUMNS SIDE-BY-SIDE */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
          
          {/* COLUMN 1: PATH 1 - THE LONG GAME */}
          <div 
            id="path-1-long-game-card"
            className="flex flex-col justify-between rounded-lg border border-white/15 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#00D084]/40 hover:bg-white/[0.05] sm:p-8"
          >
            <div>
              <div className="mb-2 font-mono text-xs font-bold tracking-widest text-[#00D084] uppercase">
                {path1?.label || 'PATH 1 - THE LONG GAME'}
              </div>
              <h2 className="font-cinzel text-2xl font-bold text-white sm:text-3xl">
                {path1?.title || 'Fractional CMO Leadership'}
              </h2>
              
              <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
                {path1?.description || 'For founders who need direction, not just delivery. You get the strategic depth, budget governance, and team leadership of a full-time CMO without the full-time overhead. I become your Marketing Governor.'}
              </p>

              <div className="mt-8">
                <h3 className="font-mono text-xs font-bold tracking-wider text-white uppercase">
                  {path1?.list_heading || 'What we take ownership of:'}
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm text-white/80">
                  {path1Items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D084]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded border border-white/10 bg-white/[0.02] p-4">
              <span className="font-mono text-xs font-bold text-[#00D084] uppercase">
                {path1?.best_for_label || 'Best for:'}{' '}
              </span>
              <span className="text-sm text-white/80">
                {path1?.best_for_text || 'Scaling startups, mid-sized brands, and Pan-India / Middle East businesses preparing for next-stage growth.'}
              </span>
            </div>
          </div>

          {/* COLUMN 2: PATH 2 - THE SHORT GAME */}
          <div 
            id="path-2-short-game-card"
            className="flex flex-col justify-between rounded-lg border border-white/15 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#00D084]/40 hover:bg-white/[0.05] sm:p-8"
          >
            <div>
              <div className="mb-2 font-mono text-xs font-bold tracking-widest text-[#00D084] uppercase">
                {path2?.label || 'PATH 2 - THE SHORT GAME'}
              </div>
              <h2 className="font-cinzel text-2xl font-bold text-white sm:text-3xl">
                {path2?.title || 'Specialized Execution'}
              </h2>
              
              <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
                {path2?.description || 'For founders who need one critical asset or one critical campaign nailed with zero waste. You have the direction. You need flawless execution. We deploy our trusted, specialized network to deliver with sniper precision. One Arrow. One Kill.'}
              </p>

              <div className="mt-8 space-y-6">
                <h3 className="font-mono text-xs font-bold tracking-wider text-white uppercase">
                  {path2?.list_heading || 'What we execute:'}
                </h3>

                {path2Categories.map((cat, idx) => (
                  <div key={idx} className="rounded border border-white/10 bg-white/[0.02] p-4">
                    <h3 className="font-cinzel text-sm font-bold text-[#00D084]">
                      {cat.title}
                    </h3>
                    <ul className="mt-2.5 space-y-1.5 text-sm text-white/80">
                      {(cat.items || []).map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D084]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded border border-white/10 bg-white/[0.02] p-4">
              <span className="font-mono text-xs font-bold text-[#00D084] uppercase">
                {path2?.best_for_label || 'Best for:'}{' '}
              </span>
              <span className="text-sm text-white/80">
                {path2?.best_for_text || 'Businesses that need a specialized project or a time-bound campaign delivered to CMO-standards, without hiring an army.'}
              </span>
            </div>
          </div>

          {/* COLUMN 3: PATH 3 - THE SMART GAME */}
          <div 
            id="path-3-smart-game-card"
            className="flex flex-col justify-between rounded-lg border border-white/15 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#00D084]/40 hover:bg-white/[0.05] sm:p-8"
          >
            <div>
              <div className="mb-2 font-mono text-xs font-bold tracking-widest text-[#00D084] uppercase">
                {path3?.label || 'PATH 3 • THE SMART GAME'}
              </div>
              <h2 className="font-cinzel text-2xl font-bold text-white sm:text-3xl">
                {path3?.title || 'AI Automation Systems'}
              </h2>
              
              <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
                {path3?.description || 'For founders who want more output without adding headcount. You have the team and the direction. You need systems that keep working when your team is offline. We set up tested, ready-to-run AI automation that removes manual work. Set it once. It keeps working.'}
              </p>

              <div className="mt-8 space-y-6">
                <h3 className="font-mono text-xs font-bold tracking-wider text-white uppercase">
                  {path3?.list_heading || 'What we automate:'}
                </h3>

                {path3Categories.map((cat, idx) => (
                  <div key={idx} className="rounded border border-white/10 bg-white/[0.02] p-4">
                    <h3 className="font-cinzel text-sm font-bold text-[#00D084]">
                      {cat.title}
                    </h3>
                    <ul className="mt-2.5 space-y-1.5 text-sm text-white/80">
                      {(cat.items || []).map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00D084]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded border border-white/10 bg-white/[0.02] p-4">
              <span className="font-mono text-xs font-bold text-[#00D084] uppercase">
                {path3?.best_for_label || 'Best for:'}{' '}
              </span>
              <span className="text-sm text-white/80">
                {path3?.best_for_text || 'Founders and mid-sized brands already getting leads and running marketing, but losing time, leads and money to manual follow-ups and messy operations.'}
              </span>
            </div>
          </div>

        </div>

        {/* Closing line below all columns (Center) */}
        <div className="mt-16 text-center">
          <p className="mx-auto max-w-3xl text-base font-semibold leading-relaxed text-white/90 sm:text-xl">
            {hww?.closing_line || 'Both paths end the same way: No black boxes. No bloated markups. Institutional ownership of outcome.'}
          </p>

          <div className="mt-8 flex justify-center">
            <button
              id="how-we-work-lock-target-btn"
              onClick={onLockTarget}
              className="group relative flex items-center justify-center gap-3 rounded bg-[#00D084] px-9 py-4 font-mono text-base font-bold tracking-wider text-black shadow-xl shadow-[#00D084]/25 transition-all duration-200 hover:bg-[#00ba76] hover:shadow-[#00D084]/40 active:scale-[0.99]"
            >
              <Crosshair className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
              <span>{heroCta}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
