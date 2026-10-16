import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Shield, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getDossiers, DossierItem } from '../data/contentLoader';

export const CaseStudiesPage: React.FC = () => {
  const dossiers: DossierItem[] = getDossiers();
  const [selectedTag, setSelectedTag] = useState<string>('ALL');

  const allTags = ['ALL', ...Array.from(new Set(dossiers.flatMap(d => d.tags || [])))];

  const filteredDossiers = selectedTag === 'ALL'
    ? dossiers
    : dossiers.filter(d => d.tags?.includes(selectedTag));

  return (
    <div className="min-h-screen bg-[#071326] text-white pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Header */}
        <div className="mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#00D080] hover:underline uppercase tracking-wider mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Base
          </Link>

          <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#00D080] uppercase block mb-2">
            OPERATIONAL DOSSIERS
          </span>
          <h1 className="font-cinzel text-3xl font-extrabold sm:text-5xl text-white">
            Precision Case Studies
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl text-base sm:text-lg">
            Documented transformations, turnkey brand builds, and high-stakes market entries.
          </p>
        </div>

        {/* Tag Filters */}
        {allTags.length > 2 && (
          <div className="flex flex-wrap gap-2 mb-12">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-all ${
                  selectedTag === tag
                    ? 'bg-[#00D080] text-[#071326] font-bold'
                    : 'bg-white/5 border border-white/10 text-white/70 hover:border-[#00D080]/50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Dossiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredDossiers.map((study, idx) => {
            const displayImage = study.heroImages?.[0] || '';
            const displayCategory = study.tags?.[0] || 'GTM & STRATEGY';

            return (
              <article
                key={study.id || study.slug || idx}
                className="group flex flex-col justify-between rounded-xl border border-white/10 bg-[#0A1931] overflow-hidden transition-all duration-300 hover:border-[#00D080] hover:shadow-2xl hover:shadow-black/60"
              >
                {/* Image Container: ONLY renders if image exists */}
                {displayImage && (
                  <div className="relative h-56 w-full overflow-hidden bg-[#071326]">
                    <img
                      src={displayImage}
                      alt={study.title}
                      className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#0A1931]/60" />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="rounded border border-white/20 bg-[#071326]/80 backdrop-blur-sm px-2.5 py-1 font-mono text-[10px] font-semibold text-white/80 tracking-wider uppercase">
                        DOSSIER // {study.id || `0${idx + 1}`}
                      </span>
                    </div>
                    {study.status && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="rounded border border-[#00D080]/40 bg-[#00D080]/10 backdrop-blur-sm px-2 py-0.5 font-mono text-[10px] text-[#00D080] tracking-wider uppercase">
                          {study.status}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[#00D080]">
                          {idx % 2 === 0 ? <Shield className="h-5 w-5" /> : <Award className="h-5 w-5" />}
                        </div>
                        <div>
                          <h2 className="font-cinzel text-xl font-bold tracking-wide text-white">
                            {study.title}
                          </h2>
                          <span className="font-mono text-[10px] tracking-wider text-white/50 uppercase block">
                            {displayCategory}
                          </span>
                        </div>
                      </div>

                      {!displayImage && (
                        <div className="flex items-center gap-2">
                          <span className="rounded border border-white/20 bg-[#071326]/80 px-2 py-0.5 font-mono text-[10px] font-semibold text-white/80 tracking-wider uppercase">
                            DOSSIER // {study.id || `0${idx + 1}`}
                          </span>
                          {study.status && (
                            <span className="rounded border border-[#00D080]/40 bg-[#00D080]/10 px-2 py-0.5 font-mono text-[10px] text-[#00D080] tracking-wider uppercase">
                              {study.status}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {study.outcome && (
                      <div className="mb-4 rounded-lg border border-[#00D080]/30 bg-[#00D080]/10 p-3">
                        <span className="font-mono text-[10px] font-semibold text-[#00D080] block uppercase tracking-wider">
                          KEY OUTCOME
                        </span>
                        <p className="font-cinzel text-sm sm:text-base font-bold text-white mt-0.5">
                          {study.outcome}
                        </p>
                      </div>
                    )}

                    <p className="text-sm text-white/75 leading-relaxed mb-4">
                      {study.subtitle || study.context?.slice(0, 180)}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="font-mono text-xs text-[#00D080] font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read Full Dossier <ArrowUpRight className="h-4 w-4" />
                    </span>
                    <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase">
                      VERIFIED
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </div>
  );
};
