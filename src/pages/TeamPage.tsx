import React, { useState, useEffect } from 'react';
import { Crosshair, Compass, Zap } from 'lucide-react';
import { getTeamContent } from '../data/contentLoader';
import { DEFAULT_FOUNDER_PHOTO, FOUNDER_PHOTO_DATA_URL } from '../assets/founder';

interface TeamPageProps {
  onLockTarget: () => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onLockTarget }) => {
  const teamData = getTeamContent();
  const show_strike_team = Boolean(teamData.show_strike_team);

  // Use bundled asset URL with immediate embedded base64 fallback to ensure 100% reliability on GitHub and live deploys
  const [photoSrc, setPhotoSrc] = useState<string>(DEFAULT_FOUNDER_PHOTO);

  useEffect(() => {
    const cached = localStorage.getItem('founder_photo_data');
    if (cached) {
      setPhotoSrc(cached);
    }
  }, []);

  const handleImageError = () => {
    // Never fall back to an infographic; fall back directly to the embedded base64 founder portrait data URL
    if (photoSrc !== FOUNDER_PHOTO_DATA_URL) {
      setPhotoSrc(FOUNDER_PHOTO_DATA_URL);
    }
  };

  return (
    <div className="bg-tactical-grid py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Tag */}
        <div className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.2em] text-[#00D080] uppercase">
          <span>02 &bull; COMMAND LEADERSHIP</span>
        </div>

        {/* Page Title */}
        <h1 className="font-cinzel text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Our Team
        </h1>

        {/* 1. Intro Paragraph (Preserved exactly as requested) */}
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
          Not junior account managers or layers of agency coordinators. You interface exclusively with seasoned marketing governors and elite specialized executors who have managed nine-figure marketing P&amp;Ls.
        </p>

        {/* 2. FOUNDER DOSSIER HERO - Dominant Hero of this page */}
        <section 
          id="founder-dossier-hero"
          aria-label="Founder Dossier - Command Leadership"
          className="mt-10 sm:mt-12 w-full rounded-[20px] border border-[#00D080]/15 bg-[#0A1931] p-6 sm:p-10 shadow-2xl relative overflow-hidden"
          style={{
            backgroundColor: '#0A1931',
            borderColor: 'rgba(0, 208, 128, 0.15)',
            borderRadius: '20px',
          }}
        >
          {/* Subtle ambient lighting */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-32 right-10 h-72 w-72 rounded-full bg-[#00D080]/5 blur-[100px]" 
          />
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-[#1E3A8A]/10 blur-[100px]" 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Desktop 40% Image Column */}
            <div className="lg:col-span-5 flex justify-center mt-3 lg:mt-0">
              <div 
                className="founder-image-wrapper relative w-full max-w-[400px] h-auto sm:h-[480px] rounded-[16px] border border-[#00D080]/30 shadow-[0_0_35px_rgba(0,208,128,0.18)] bg-[#0A1931] p-2 overflow-hidden flex items-center justify-center"
                style={{
                  aspectRatio: '4 / 5',
                  maxHeight: '520px',
                  borderRadius: '16px',
                  backgroundColor: '#0A1931',
                  borderColor: 'rgba(0, 208, 128, 0.3)',
                  padding: '8px',
                }}
              >
                <img
                  src={photoSrc}
                  alt={`${teamData.founder.name} - ${teamData.founder.title}`}
                  onError={handleImageError}
                  className="w-full h-full object-cover rounded-[12px] filter grayscale contrast-105 transition-all duration-500 hover:contrast-110"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    borderRadius: '12px',
                  }}
                />
              </div>
            </div>

            {/* Desktop 60% Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Top pill: "01 • COMMAND • FOUNDER'S DOSSIER" in emerald #00D080 mono 11px tracking 2px */}
              <div className="mb-4 inline-flex items-center self-start rounded-full border border-[#00D080]/30 bg-[#00D080]/10 px-3.5 py-1">
                <span className="font-mono text-[11px] tracking-[2px] text-[#00D080] font-bold uppercase">
                  01 • COMMAND • FOUNDER&apos;S DOSSIER
                </span>
              </div>

              {/* Founder Name */}
              <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                {teamData.founder.name}
              </h2>

              {/* Founder Title */}
              <p className="font-mono text-sm sm:text-base font-semibold text-[#00D080] tracking-wide mt-2 mb-6">
                {teamData.founder.title}
              </p>

              {/* Bio: Exact 2 paragraphs from landing page */}
              <div className="space-y-4 font-sans text-base sm:text-lg leading-relaxed text-white/80">
                {teamData.founder.bio_paragraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Founder Quote */}
              {teamData.founder.quote && (
                <div className="mt-6 border-l-2 border-[#00D080] pl-4 sm:pl-5 py-1.5">
                  <blockquote className="font-cinzel text-base sm:text-lg italic text-white/95 leading-relaxed tracking-wide">
                    &ldquo;{teamData.founder.quote}&rdquo;
                  </blockquote>
                </div>
              )}

              {/* Bottom: 3 Stat Pills reused from landing page in emerald tint boxes */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {teamData.founder.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-[#00D080]/30 bg-[#00D080]/10 px-4 py-2 font-mono text-xs sm:text-sm font-bold text-[#00D080] tracking-wider"
                  >
                    {stat}
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* 5. Spacing: 48px gap (mt-12) between founder hero and council card */}
        <div className="mt-12">
          
          <div className={`grid grid-cols-1 gap-6 ${show_strike_team ? 'sm:grid-cols-2' : ''}`}>
            
            {/* 3. THE FRACTIONAL CMO COUNCIL CARD (Card 02) */}
            <div 
              id="cmo-council-card"
              className="rounded-xl border border-white/10 bg-[#071326] p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#00D080]/40"
            >
              <div className="mb-4 font-mono text-[11px] font-semibold tracking-wider text-[#00D080] uppercase">
                {teamData.council.badge || '02 • FRACTIONAL CMO COUNCIL'}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#00D080]/30 bg-[#00D080]/10 text-[#00D080]">
                  <Compass className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-white sm:text-2xl">
                    {teamData.council.title}
                  </h3>
                  <div className="font-mono text-xs text-[#00D080] mt-0.5">
                    {teamData.council.unit}
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/70">
                {teamData.council.description}
              </p>
            </div>

            {/* 4. SURGICAL EXECUTION STRIKE TEAM CARD */}
            {/* <!-- Strike Team hidden per client request, enable via CMS --> */}
            <div 
              id="surgical-strike-team-card"
              style={{ display: show_strike_team ? 'block' : 'none' }}
              className="rounded-xl border border-white/10 bg-[#071326] p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#00D080]/40"
            >
              <div className="mb-4 font-mono text-[11px] font-semibold tracking-wider text-[#00D080] uppercase">
                {teamData.strike_team.badge || '03 • TACTICAL PRODUCTION'}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#00D080]/30 bg-[#00D080]/10 text-[#00D080]">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-cinzel text-xl font-bold text-white sm:text-2xl">
                    {teamData.strike_team.title}
                  </h3>
                  <div className="font-mono text-xs text-[#00D080] mt-0.5">
                    {teamData.strike_team.unit}
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/70">
                {teamData.strike_team.description}
              </p>
            </div>

          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-16 flex justify-center">
          <button
            type="button"
            onClick={onLockTarget}
            className="flex items-center gap-2.5 rounded-lg bg-[#00D080] px-8 py-4 font-mono text-sm font-bold tracking-wider text-black shadow-lg shadow-[#00D080]/20 transition-all hover:bg-[#00ba76] active:scale-[0.99]"
          >
            <Crosshair className="h-4 w-4" />
            <span>LOCK THE TARGET</span>
          </button>
        </div>

      </div>
    </div>
  );
};
