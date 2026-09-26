import React from 'react';
import { Crosshair, Compass, Zap } from 'lucide-react';

interface TeamPageProps {
  onLockTarget: () => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onLockTarget }) => {
  return (
    <div className="bg-tactical-grid py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Tag */}
        <div className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.2em] text-[#10B65D] uppercase">
          <span>02 &bull; COMMAND LEADERSHIP</span>
        </div>

        <h1 className="font-cinzel text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Our Team
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
          Not junior account managers or layers of agency coordinators. You interface exclusively with seasoned marketing governors and elite specialized executors who have managed nine-figure marketing P&amp;Ls.
        </p>

        {/* Thin divider line */}
        <div className="my-12 h-px w-full bg-white/10" />

        {/* Team Leadership Roster */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          
          <div className="rounded border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded border border-[#10B65D]/30 bg-[#10B65D]/10 text-[#10B65D]">
                <Compass className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-cinzel text-lg font-bold text-white">The Fractional CMO Council</h3>
                <div className="font-mono text-xs text-[#10B65D]">Strategic Governance Unit</div>
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-white/60">
              Senior growth architects with 15+ years steering commercial P&amp;L, brand positioning, and market penetration across tech, enterprise, and high-growth consumer categories.
            </p>
          </div>

          <div className="rounded border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded border border-[#10B65D]/30 bg-[#10B65D]/10 text-[#10B65D]">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-cinzel text-lg font-bold text-white">Surgical Execution Strike Team</h3>
                <div className="font-mono text-xs text-[#10B65D]">Tactical Production Unit</div>
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-white/60">
              Master AV directors, full-stack digital engineers, performance quant analysts, packaging designers, and physical activation directors deployed on-demand.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={onLockTarget}
            className="flex items-center gap-2.5 rounded bg-[#10B65D] px-6 py-3.5 font-mono text-sm font-bold tracking-wider text-white shadow-lg shadow-[#10B65D]/20 transition-all hover:bg-[#0ea052]"
          >
            <Crosshair className="h-4 w-4" />
            <span>LOCK THE TARGET</span>
          </button>
        </div>

      </div>
    </div>
  );
};
