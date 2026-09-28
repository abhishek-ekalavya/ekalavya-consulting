import React, { useEffect } from 'react';
import { X, Crosshair } from 'lucide-react';
import { Dossier } from '../types/dossier';
import { VaultImageSlider } from './VaultImageSlider';

interface DossierDrawerProps {
  dossier: Dossier | null;
  isOpen: boolean;
  onClose: () => void;
  onLockTarget: () => void;
}

export const DossierDrawer: React.FC<DossierDrawerProps> = ({
  dossier,
  isOpen,
  onClose,
  onLockTarget,
}) => {
  // Close drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!dossier) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      aria-modal="true"
      role="dialog"
    >
      {/* Dimmed backdrop - click outside to close */}
      <div 
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Slide-over Drawer */}
      <div 
        className={`absolute top-0 right-0 bottom-0 h-full w-full sm:max-w-[720px] bg-[#0F172A] border-l border-[#1E293B] shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* DRAWER HEADER: Mono text emerald #00D084 + Close Button */}
        <div className="flex items-center justify-between border-b border-[#1E293B] px-6 py-4 bg-[#0F172A] shrink-0">
          <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-[#00D084]">
            <span className="h-2 w-2 rounded-full bg-[#00D084] animate-pulse" />
            <span>[ THE VAULT: ENTRY {dossier.id} - STATUS: {dossier.status} ]</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dossier"
            className="rounded p-1.5 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* DRAWER SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8 text-white">
          
          {/* TITLE & SUBTITLE */}
          <div>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {dossier.title}
            </h2>
            <p className="mt-2 font-mono text-xs text-white/70 leading-relaxed">
              {dossier.subtitle}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {dossier.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="rounded border border-[#1E293B] bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[#00D084]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* HERO IMAGE SLIDER: 16:9 interactive slider with framer-motion, arrows, dots and captions */}
          <div className="w-full">
            <VaultImageSlider 
              images={dossier.heroImages.map((imgSrc, idx) => ({
                src: imgSrc,
                label: idx === 0 
                  ? `FIGURE ${dossier.id}.${String(idx + 1).padStart(2, '0')} // FACILITY VIEW` 
                  : `FIGURE ${dossier.id}.${String(idx + 1).padStart(2, '0')} // RECEPTION & ATHLETIC HUB`
              }))} 
              caseStudyId={dossier.id}
            />
          </div>

          {/* BODY: Split 60/40 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* LEFT (60% / 7 cols): STRATEGIC STORY with 3 sections CONTEXT / CHALLENGE / CONCEPT */}
            <div className="lg:col-span-7 space-y-6">
              <div className="font-mono text-xs font-bold tracking-widest text-[#00D084] uppercase">
                STRATEGIC STORY
              </div>

              {/* Context */}
              <div className="border-l-2 border-[#00D084] pl-4 py-0.5">
                <h4 className="font-mono text-xs font-bold tracking-wider text-white uppercase mb-2">
                  THE CONTEXT
                </h4>
                <div className="text-xs sm:text-sm text-white/80 leading-relaxed whitespace-pre-line">
                  {dossier.context}
                </div>
              </div>

              {/* Challenge */}
              <div className="border-l-2 border-[#00D084] pl-4 py-0.5">
                <h4 className="font-mono text-xs font-bold tracking-wider text-white uppercase mb-2">
                  THE CHALLENGE
                </h4>
                <div className="text-xs sm:text-sm text-white/80 leading-relaxed whitespace-pre-line">
                  {dossier.challenge}
                </div>
              </div>

              {/* Concept */}
              <div className="border-l-2 border-[#00D084] pl-4 py-0.5">
                <h4 className="font-mono text-xs font-bold tracking-wider text-white uppercase mb-2">
                  STRATEGIC CONCEPT
                </h4>
                <div className="text-xs sm:text-sm text-white/80 leading-relaxed whitespace-pre-line">
                  {dossier.concept}
                </div>
              </div>
            </div>

            {/* RIGHT (40% / 5 cols sticky top): END-TO-END EXECUTION bullets with emerald dot • */}
            <div className="lg:col-span-5 lg:sticky lg:top-4 rounded border border-[#1E293B] bg-white/[0.02] p-4 space-y-3">
              <div className="font-mono text-xs font-bold tracking-wider text-white uppercase border-b border-[#1E293B] pb-2">
                END-TO-END EXECUTION
              </div>
              <ul className="space-y-3 text-xs text-white/85 leading-relaxed">
                {dossier.execution.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#00D084] text-base leading-none shrink-0">•</span>
                    <span className="whitespace-pre-line">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* BOTTOM FULL: STRATEGIC IMPACT TABLE */}
          <div className="space-y-3 pt-4 border-t border-[#1E293B]">
            <div className="font-mono text-xs font-bold tracking-widest text-[#00D084] uppercase">
              STRATEGIC IMPACT
            </div>
            <div className="overflow-x-auto rounded border border-[#1E293B]">
              <table className="w-full text-left font-mono text-xs">
                <thead className="bg-[#1E293B] text-[#00D084] uppercase tracking-wider font-semibold">
                  <tr>
                    {dossier.impactTable.headers.map((header, idx) => (
                      <th key={idx} className="px-4 py-3 border-b border-[#1E293B]">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1E293B] bg-[#0F172A]">
                  {dossier.impactTable.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-4 py-3 font-bold text-white whitespace-nowrap">
                        {row[0]}
                      </td>
                      <td className="px-4 py-3 text-white/60">
                        {row[1]}
                      </td>
                      <td className="px-4 py-3 text-[#00D084]">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FOOTER: THE EKALAVYA ADVANTAGE - italic white with left border 4px #00D084 */}
          <div className="border-l-4 border-[#00D084] bg-white/[0.02] p-4 rounded-r">
            <div className="font-mono text-[11px] font-bold tracking-widest text-[#00D084] uppercase mb-1">
              THE EKALAVYA ADVANTAGE
            </div>
            <p className="text-xs sm:text-sm italic text-white leading-relaxed">
              {dossier.advantage}
            </p>
          </div>

          {/* CTA BUTTON: Full width "LOCK TARGET // INITIATE DOSSIER {id}" bg #00D084 text #0A1931 */}
          <div className="pt-2 pb-6">
            <button
              onClick={() => {
                onClose();
                onLockTarget();
              }}
              className="w-full group flex items-center justify-center gap-3 rounded bg-[#00D084] px-6 py-4 font-mono text-sm font-bold tracking-wider text-[#0A1931] shadow-lg shadow-[#00D084]/25 hover:bg-[#00ba76] transition-all duration-200 active:scale-[0.99]"
            >
              <Crosshair className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
              <span>LOCK TARGET // INITIATE DOSSIER {dossier.id}</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
