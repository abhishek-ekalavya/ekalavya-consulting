import React from 'react';
import { Link } from 'react-router-dom';
import { getAboutContent } from '../data/contentLoader';

interface AboutPageProps {
  onLockTarget?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  const about = getAboutContent();

  return (
    <div className="bg-tactical-grid py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Tag */}
        <div className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.2em] text-[#00D080] uppercase">
          <span>{about.breadcrumb || '01 • INSTITUTIONAL CHARTER'}</span>
        </div>

        {/* Title */}
        <h1 className="font-cinzel text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {about.title || 'About Us'}
        </h1>

        {/* Body Container */}
        <div className="mt-10 max-w-[720px] space-y-6 text-[16px] leading-[1.8] text-white/80">
          
          {about.intro_line && (
            <p className="font-medium text-white/90">
              {about.intro_line}
            </p>
          )}

          {(about.highlight_bold || about.highlight_text) && (
            <p>
              {about.highlight_bold && (
                <strong className="text-white font-bold">
                  {about.highlight_bold}
                </strong>
              )}{' '}
              {about.highlight_text}
            </p>
          )}

          {(about.paragraphs || []).map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          {about.tagline && (
            <div className="pt-2">
              <p className="font-mono text-[14px] font-bold tracking-[2px] text-[#00D080] uppercase">
                {about.tagline}
              </p>
            </div>
          )}

          <div className="pt-6">
            <Link
              to="/our-team"
              className="inline-flex items-center gap-2 rounded-lg border border-[#00D080]/30 px-6 py-3 font-mono text-sm font-bold tracking-wider text-[#00D080] transition-colors hover:bg-[#00D080]/10 hover:border-[#00D080]/50"
              style={{
                borderColor: 'rgba(0, 208, 128, 0.3)',
                padding: '12px 24px',
                borderRadius: '8px',
                color: '#00D080',
              }}
            >
              <span>{about.cta_text || 'Meet Command'} &rarr;</span>
            </Link>

            {about.cta_subtext && (
              <p className="mt-3 text-[12px] text-white/50 font-mono tracking-wide">
                {about.cta_subtext}
              </p>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
