import React from 'react';
import { ArrowRight, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import rawDossiers from '../data/dossiers.json';

interface Dossier {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tags?: string[];
  status?: string;
  heroImages?: string[];
  context?: string;
  challenge?: string;
  concept?: string;
  outcome?: string;
  featured?: boolean;
}

export const ProofOfPrecision: React.FC = () => {
  const allDossiers = rawDossiers as Dossier[];
  const featuredStudies = allDossiers.filter((d) => d.featured === true);
  const displayStudies = featuredStudies.length > 0 ? featuredStudies : allDossiers.slice(0, 2);

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

        {/* Dynamic Featured Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {displayStudies.map((study, index) => {
            const displayImage = study.heroImages?.[0] || '/images/placeholder.jpg';
            const categoryTag = study.tags?.[0] || 'COMMERCIAL STRATEGY';
            const outcomeText = study.outcome || 'High-Impact Commercial Transformation';

            return (
              <div
                key={study.id || study.slug}
                className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#071326] overflow-hidden transition-all duration-300 hover:border-[#00D080] hover:shadow-2xl hover:shadow-black/60"
              >
                {/* Top Image Container */}
                <div className="relative h-[180px] w-full overflow-hidden rounded-t-xl bg-[#0A1931]">
                  <img
                    src={displayImage}
                    alt={study.title}
                    className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div 
                    className="absolute inset-0 bg-[#0A1931]/60 transition-opacity duration-300"
                    aria-hidden="true" 
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="rounded border border-white/20 bg-[#0A1931]/80 backdrop-blur-sm px-2.5 py-1 font-mono text-[10px] font-semibold text-white/80 tracking-wider uppercase">
                      DOSSIER // 0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header: Icon + Title */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[#00D080]">
                          {index % 2 === 0 ? <Shield className="h-5 w-5" /> : <Award className="h-5 w-5" />}
                        </div>
                        <div>
                          <h4 className="font-cinzel text-lg font-bold tracking-wide text-white">
                            {study.title}
                          </h4>
                          <span className="font-mono text-[10px] tracking-wider text-white/50 uppercase block">
                            {categoryTag}
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
                        {outcomeText}
                      </p>
                    </div>

                    {/* Summary / Subtitle */}
                    <p className="text-sm leading-relaxed text-white/70 line-clamp-3">
                      {study.concept || study.subtitle}
                    </p>
                  </div>

                  {/* View Execution Link */}
                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                    <Link 
                      to={`/case-studies`}
                      className="font-mono text-xs font-bold text-[#00D080] group-hover:text-[#00ba76] inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>View Execution</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
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
