import React from 'react';
import { 
  ShieldCheck, 
  Compass, 
  Award, 
  TrendingUp, 
  Crosshair, 
  Sparkles 
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  scope: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: 'fractional-cmo',
    title: 'Fractional CMO / Fractional Marketer',
    scope: 'Strategic Direction & Budget Governance',
    description:
      'High-level strategic leadership, marketing operating systems, and ruthless ROI accountability without full-time executive overhead. We act as your Marketing Governor, eliminating waste and directing every rupee with institutional precision.',
    icon: ShieldCheck,
    tags: ['Marketing Operating System', 'Budget ROI Governance', 'Agency & Team Leadership'],
  },
  {
    id: 'gtm-strategy',
    title: 'Go-To-Market Strategy & Engine',
    scope: 'Market Entry & Commercial Packaging',
    description:
      'Comprehensive GTM architecture, market segmentation, and commercial packaging engineered from 0 to 1. We build predictable customer acquisition engines that align product-market fit with revenue generation.',
    icon: Compass,
    tags: ['Target Segmentation', 'Pricing Architecture', 'Demand Generation Funnels'],
  },
  {
    id: 'brand-positioning',
    title: 'Brand & Positioning',
    scope: 'Institutional Parity & Authority',
    description:
      'Master narrative architecture, brand origin engineering, and visual design systems that elevate your company into a design-led category benchmark, commanding pricing power and customer trust.',
    icon: Award,
    tags: ['Visual Identity Systems', 'Master Narrative', 'Category Authority'],
  },
  {
    id: 'growth-performance',
    title: 'Growth & Performance System',
    scope: 'Paid Acquisition & CAC Optimization',
    description:
      'Data-driven paid media execution across Google, Meta, and LinkedIn with continuous attribution modeling, disciplined CAC/LTV governance, and zero black-box agency spend.',
    icon: TrendingUp,
    tags: ['Performance Media', 'Conversion Architecture', 'Attribution Modeling'],
  },
  {
    id: 'campaign-planning',
    title: '360° Campaign Planning & Execution',
    scope: 'Integrated Multi-Channel Rollouts',
    description:
      'Synchronized multi-channel campaigns orchestrated with sniper precision—unifying digital media, outdoor OOH, print, television, radio, and high-impact on-ground events.',
    icon: Crosshair,
    tags: ['Omnichannel Media', 'OOH & Broadcast', 'Production Governance'],
  },
  {
    id: 'content-creative',
    title: 'Content & Creative Engine',
    scope: 'Cinematic Films & Sales Enablement',
    description:
      'High-velocity production of cinematic corporate AVs, high-converting digital web platforms, 3D product visuals, packaging systems, and executive sales enablement collateral.',
    icon: Sparkles,
    tags: ['Corporate AVs & Brand Films', 'High-Speed Web Platforms', 'Sales Enablement Decks'],
  },
];

export const TheArsenal: React.FC = () => {
  return (
    <section 
      id="arsenal-section" 
      aria-label="The Arsenal - Detailed Services Breakdown"
      className="w-full bg-[#0A1931] border-b border-white/10 py-10 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto mb-12 sm:mb-16 max-w-3xl text-center">
          <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#00D080] uppercase block mb-3">
            DETAILED BREAKDOWN
          </span>
          <h2 className="font-cinzel text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            The Arsenal
          </h2>
          <p className="mt-4 text-base text-white/75 sm:text-lg">
            Precision tools. Deployed based on your battle.
          </p>
        </div>

        {/* 2-Column Grid (3 Rows) on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#071326] p-6 sm:p-8 transition-all duration-300 hover:border-[#00D080] hover:shadow-xl hover:shadow-black/40"
              >
                <div>
                  {/* Top Bar with Icon & Scope */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[#00D080] transition-colors group-hover:border-[#00D080]/40 group-hover:bg-[#00D080]/10">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-[#00D080] uppercase tracking-wider">
                      {service.scope}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-cinzel text-xl font-bold text-white sm:text-2xl transition-colors group-hover:text-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                    {service.description}
                  </p>
                </div>

                {/* Scope Tags */}
                <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded bg-white/[0.03] border border-white/10 px-2.5 py-1 font-mono text-[11px] text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
