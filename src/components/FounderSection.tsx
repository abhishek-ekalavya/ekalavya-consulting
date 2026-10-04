import React, { useState } from 'react';
import { DEFAULT_FOUNDER_PHOTO, FOUNDER_PHOTO_DATA_URL } from '../assets/founder';

export const FounderSection: React.FC = () => {
  const [photoSrc, setPhotoSrc] = useState<string>('/founder.jpg');

  const handleImageError = () => {
    if (photoSrc !== DEFAULT_FOUNDER_PHOTO && DEFAULT_FOUNDER_PHOTO) {
      setPhotoSrc(DEFAULT_FOUNDER_PHOTO);
    } else if (photoSrc !== FOUNDER_PHOTO_DATA_URL) {
      setPhotoSrc(FOUNDER_PHOTO_DATA_URL);
    }
  };

  return (
    <div 
      id="founder-section" 
      aria-label="Founder and Fractional Marketer"
      className="my-12 rounded-2xl border border-white/10 bg-[#071326]/90 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden text-left"
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

      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 relative z-10">
        
        {/* Left Column: Founder photograph with 4:5 portrait ratio */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[380px] group">
            <div 
              className="relative overflow-hidden rounded-[16px] border border-[#00D080]/30 bg-[#0A1931] shadow-[0_0_35px_rgba(0,208,128,0.18)] p-2 flex items-center justify-center"
              style={{
                aspectRatio: '4 / 5',
                maxHeight: '480px',
                borderRadius: '16px',
                backgroundColor: '#0A1931',
                borderColor: 'rgba(0, 208, 128, 0.3)',
                padding: '8px',
              }}
            >
              <img
                src={photoSrc}
                alt="Abhishek Bhowmick - Founder and Fractional Marketer"
                onError={handleImageError}
                className="w-full h-full object-cover rounded-[12px] filter grayscale-[80%] contrast-[1.05] transition-all duration-500 group-hover:grayscale-[20%]"
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
        </div>

        {/* Right Column: Founder & Fractional Marketer content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Heading: FOUNDER AND FRACTIONAL MARKETER */}
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#00D080] uppercase block">
            FOUNDER AND FRACTIONAL MARKETER
          </span>

          {/* Sub-heading: Abhishek Bhowmick */}
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl mt-2 mb-6">
            Abhishek Bhowmick
          </h2>

          {/* Body */}
          <div className="space-y-4 font-sans text-base sm:text-lg leading-relaxed text-white/80">
            <p>
              21 years of experience with top global brands across India, Middle East and Europe.
            </p>
            <p>
              Started as a copywriter, moved to 360-degree campaign planning, and led gold-standard teams at India&apos;s biggest loyalty management company.
            </p>
            <p>
              Now as Founder and Fractional Marketer at Ekalavya Consulting, I help ambitious brands fix their go-to-market and drive high-velocity growth.
            </p>
          </div>

          {/* Quote line in italic, with left border accent */}
          <div className="mt-8 border-l-2 border-[#00D080] pl-4 sm:pl-6 py-2">
            <blockquote className="font-cinzel text-lg sm:text-xl italic text-white/95 leading-relaxed tracking-wide">
              &ldquo;I observe in silence, plan in 360&deg;, and strike with one arrow.&rdquo;
            </blockquote>
          </div>
        </div>

      </div>
    </div>
  );
};
