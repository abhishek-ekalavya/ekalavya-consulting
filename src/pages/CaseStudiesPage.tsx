import React, { useState, useEffect } from 'react';
import { Crosshair, ArrowUpRight } from 'lucide-react';
import { Dossier } from '../types/dossier';
import { DossierDrawer } from '../components/DossierDrawer';

interface CaseStudiesPageProps {
  onLockTarget: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onLockTarget }) => {
  const [dossiers, setDossiers] = useState<Dossier[]>([]);
  const [selectedDossier, setSelectedDossier] = useState<Dossier | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    fetch('/data/dossiers.json')
      .then((res) => res.json())
      .then((data: Dossier[]) => {
        setDossiers(data);
      })
      .catch((err) => {
        console.error('Error loading dossiers.json:', err);
      });
  }, []);

  const handleOpenDossier = (dossier: Dossier) => {
    setSelectedDossier(dossier);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="bg-[#0A1931] min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Tag: 04 • COMBAT DOSSIERS */}
        <div className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.2em] text-[#00D084] uppercase">
          <span>04 &bull; COMBAT DOSSIERS</span>
        </div>

        <h1 className="font-cinzel text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          THE VAULT
        </h1>

        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/70 sm:text-base">
          Work from the field. The brief, the build, and the outcome. Click to open the full dossier.
        </p>

        {/* Thin divider line */}
        <div className="my-10 h-px w-full bg-white/10" />

        {/* TASK 2: 2 COLUMNS DESKTOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dossiers.map((dossier) => (
            <div
              key={dossier.id}
              onClick={() => handleOpenDossier(dossier)}
              className="group relative flex flex-col justify-between rounded-lg border border-[#1E293B] bg-[#0F172A] p-6 cursor-pointer transition-all duration-300 hover:border-[#00D084] hover:shadow-xl hover:shadow-[#00D084]/10"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 border-b border-[#1E293B] pb-3 mb-4">
                  <span className="font-mono text-xs font-bold tracking-widest text-[#00D084]">
                    DOSSIER #{dossier.id}
                  </span>
                  <div className="flex items-center gap-1 font-mono text-[10px] text-[#00D084] opacity-80 group-hover:opacity-100 transition-opacity">
                    <span>VIEW DOSSIER</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-cinzel text-xl font-bold text-white group-hover:text-[#00D084] transition-colors">
                  {dossier.title}
                </h3>

                {/* Subtitle */}
                <p className="mt-2.5 font-mono text-xs text-white/70 leading-relaxed line-clamp-2">
                  {dossier.subtitle}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-6 pt-4 border-t border-[#1E293B] flex flex-wrap gap-1.5">
                {dossier.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="rounded border border-[#1E293B] bg-white/[0.02] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white/70 group-hover:text-white group-hover:border-[#00D084]/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Lock Target CTA */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={onLockTarget}
            className="group flex items-center gap-3 rounded bg-[#00D084] px-8 py-4 font-mono text-sm font-bold tracking-wider text-[#0A1931] shadow-xl shadow-[#00D084]/25 transition-all duration-200 hover:bg-[#00ba76] active:scale-[0.99]"
          >
            <Crosshair className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
            <span>LOCK THE TARGET</span>
          </button>
        </div>

      </div>

      {/* RIGHT SLIDE-OVER DRAWER (720px desktop, 100% mobile, bg #0F172A, border-left #1E293B) */}
      <DossierDrawer
        dossier={selectedDossier}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        onLockTarget={onLockTarget}
      />
    </div>
  );
};
