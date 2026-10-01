import React from 'react';
import { ArrowRight, Shield, Award } from 'lucide-react';

interface CaseStudyItem {
  id: string;
  name: string;
  category: string;
  outcome: string;
  summary: string;
  image: string;
  imageAlt: string;
  logoBadge: {
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
  };
}

const caseStudiesData: CaseStudyItem[] = [
  {
    id: 'sparta-life',
    name: 'Sparta Life',
    category: 'SPORTS INFRASTRUCTURE & LIFESTYLE',
    outcome: 'Built GTM Engine from 0 to 1',
    summary:
      'Turnkey brand architecture, VIP commercial tiering, and integrated regional launch establishing Thane District’s premier sports and high-performance lifestyle ecosystem.',
    image: '/images/sparta-case-turf.jpg',
    imageAlt: 'Sparta Life Sports Turf and High Performance Complex',
    logoBadge: {
      icon: Shield,
      accentColor: '#00D080',
    },
  },
  {
    id: 'indishield-labs',
    name: 'Indishield Labs',
    category: 'B2B MANUFACTURING & HEALTHCARE',
    outcome: 'Scaled Retail Distribution',
    summary:
      'International market entry strategy, B2B demand generation engine, and institutional buyer enablement across domestic and cross-border distribution channels.',
    image: '/images/indishield-case-factory.jpg',
    imageAlt: 'Indishield Labs Industrial Factory Line and Laboratory Facility',
    logoBadge: {
      icon: Award,
      accentColor: '#38BDF8',
    },
  },
];

export const ProofOfPrecision: React.FC = () => {
  return (
    <section 
      id="proof-of-precision-section" 
      aria-label="Proof of Precision - Case Studies"
      className="w-full bg-[#0A1931] border-b border-white/10 py-10 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto mb-12 sm:mb-16 max-w-3xl text-center">
          <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#00D080] uppercase block mb-3">
            VERIFIED CASE STUDIES
          </span>
          <h2 className="font-cinzel text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Proof of Precision
          </h2>
          <p className="mt-4 text-base text-white/75 sm:text-lg">
            Not theory. Battlefield results.
          </p>
        </div>

        {/* 2 Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {caseStudiesData.map((study, index) => {
            const LogoIcon = study.logoBadge.icon;
            return (
              <div
                key={study.id}
                className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#071326] overflow-hidden transition-all duration-300 hover:border-[#00D080] hover:shadow-2xl hover:shadow-black/60"
              >
                {/* Top Image Container: height 180px, width 100%, rounded top corners, B&W, 60% Navy #0A1931 overlay */}
                <div className="relative h-[180px] w-full overflow-hidden rounded-t-xl bg-[#0A1931]">
                  <img
                    src={study.image}
                    alt={study.imageAlt}
                    className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* 60% Navy #0A1931 Overlay */}
                  <div 
                    className="absolute inset-0 bg-[#0A1931]/60 transition-opacity duration-300"
                    aria-hidden="true" 
                  />
                  {/* Dossier Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="rounded border border-white/20 bg-[#0A1931]/80 backdrop-blur-sm px-2.5 py-1 font-mono text-[10px] font-semibold text-white/80 tracking-wider uppercase">
                      DOSSIER // 0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Content Area Below Image */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Company Logo & Category */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[#00D080]">
                          <LogoIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-cinzel text-lg font-bold tracking-wide text-white">
                            {study.name}
                          </h4>
                          <span className="font-mono text-[10px] tracking-wider text-white/50 uppercase block">
                            {study.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Outcome Metric Box */}
                    <div className="mb-4 rounded-lg border border-[#00D080]/30 bg-[#00D080]/10 p-3">
                      <span className="font-mono text-xs font-semibold text-[#00D080] block uppercase tracking-wider">
                        OUTCOME METRIC
                      </span>
                      <p className="font-cinzel text-base font-bold text-white mt-1">
                        {study.outcome}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-white/70">
                      {study.summary}
                    </p>
                  </div>

                  {/* View Execution Link */}
                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#00D080] group-hover:text-[#00ba76] inline-flex items-center gap-1.5 transition-colors cursor-default">
                      <span>View Execution</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase">
                      DOSSIER
                    </span>
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
