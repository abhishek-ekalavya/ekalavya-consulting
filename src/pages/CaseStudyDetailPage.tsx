import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Shield, Award, CheckCircle, Crosshair } from 'lucide-react';
import { getDossiers, DossierItem } from '../data/contentLoader';

interface CaseStudyDetailPageProps {
  onLockTarget?: () => void;
}

export const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({ onLockTarget }) => {
  const { slug } = useParams<{ slug: string }>();
  const dossiers: DossierItem[] = getDossiers();

  const dossier = dossiers.find(
    (item) => item.slug === slug || item.id === slug
  );

  if (!dossier) {
    return (
      <div className="min-h-screen bg-[#071326] text-white pt-32 pb-20 px-4 text-center">
        <h1 className="font-cinzel text-3xl font-bold mb-4">Dossier Not Found</h1>
        <p className="text-white/60 mb-8 font-mono text-sm">
          The requested operational dossier could not be retrieved from the vault.
        </p>
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#00D080] hover:underline uppercase tracking-wider"
        >
          <ArrowLeft className="h-4 w-4" /> Return to Dossiers
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#071326] text-white pt-24 pb-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Navigation */}
        <div className="mb-8">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#00D080] hover:underline uppercase tracking-wider mb-6"
          >
            <ArrowLeft className="h-4 w-4" /> All Case Studies
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="rounded border border-white/20 bg-white/5 px-2.5 py-1 font-mono text-xs font-semibold text-white/80 tracking-wider uppercase">
              DOSSIER // {dossier.id || 'CLASSIFIED'}
            </span>
            {dossier.status && (
              <span className="rounded border border-[#00D080]/40 bg-[#00D080]/10 px-2.5 py-1 font-mono text-xs text-[#00D080] tracking-wider uppercase">
                {dossier.status}
              </span>
            )}
            {dossier.tags?.map((tag) => (
              <span key={tag} className="font-mono text-xs text-white/50 tracking-wider uppercase">
                &bull; {tag}
              </span>
            ))}
          </div>

          <h1 className="font-cinzel text-3xl font-black sm:text-5xl text-white tracking-tight">
            {dossier.title}
          </h1>
          <p className="mt-4 text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
            {dossier.subtitle}
          </p>
        </div>

        {/* Outcome Box */}
        {dossier.outcome && (
          <div className="mb-12 rounded-xl border border-[#00D080]/40 bg-[#00D080]/10 p-6 sm:p-8">
            <span className="font-mono text-xs font-bold text-[#00D080] uppercase tracking-widest block mb-1">
              PRIMARY OUTCOME METRIC
            </span>
            <div className="font-cinzel text-2xl sm:text-3xl font-extrabold text-white">
              {dossier.outcome}
            </div>
          </div>
        )}

        {/* Image Display */}
        {dossier.heroImages && dossier.heroImages.length > 0 && dossier.heroImages[0] && (
          <div className="mb-12 overflow-hidden rounded-xl border border-white/10 bg-[#0A1931]">
            <img
              src={dossier.heroImages[0]}
              alt={dossier.title}
              className="w-full object-cover max-h-[480px]"
            />
          </div>
        )}

        {/* Content Modules */}
        <div className="space-y-12 border-t border-white/10 pt-10">
          
          {/* Section: Context */}
          {dossier.context && (
            <section className="bg-[#0A1931] border border-white/10 rounded-xl p-6 sm:p-8">
              <h2 className="font-cinzel text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Crosshair className="h-5 w-5 text-[#00D080]" />
                Context & Operational Scope
              </h2>
              <div className="text-white/80 font-sans text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {dossier.context}
              </div>
            </section>
          )}

          {/* Section: The Challenge */}
          {dossier.challenge && (
            <section className="bg-[#0A1931] border border-white/10 rounded-xl p-6 sm:p-8">
              <h2 className="font-cinzel text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-[#00D080]" />
                The Challenge
              </h2>
              <div className="text-white/80 font-sans text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {dossier.challenge}
              </div>
            </section>
          )}

          {/* Section: Core Concept & Strategy */}
          {dossier.concept && (
            <section className="bg-[#0A1931] border border-white/10 rounded-xl p-6 sm:p-8">
              <h2 className="font-cinzel text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-[#00D080]" />
                Strategic Blueprint
              </h2>
              <div className="text-white/80 font-sans text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {dossier.concept}
              </div>
            </section>
          )}

          {/* Section: The Advantage */}
          {dossier.advantage && (
            <section className="bg-[#0A1931] border border-[#00D080]/30 rounded-xl p-6 sm:p-8">
              <h2 className="font-cinzel text-lg sm:text-xl font-bold text-[#00D080] mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#00D080]" />
                The Ekalavya Advantage
              </h2>
              <div className="text-white/80 font-sans text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {dossier.advantage}
              </div>
            </section>
          )}
        </div>

        {/* CTA Footer */}
        <div className="mt-16 text-center border-t border-white/10 pt-12">
          <h3 className="font-cinzel text-2xl font-bold text-white mb-4">
            Ready to Architect Your Growth Engine?
          </h3>
          <p className="text-white/70 max-w-lg mx-auto text-sm sm:text-base mb-6">
            Senior leadership. Zero boilerplate agency overhead. Battlefield execution.
          </p>
          <button
            onClick={onLockTarget}
            className="rounded bg-[#00D080] px-6 py-3 font-mono text-xs font-bold tracking-wider text-[#071326] uppercase hover:bg-[#00ba76] transition-colors"
          >
            LOCK THE TARGET
          </button>
        </div>

      </div>
    </article>
  );
};
