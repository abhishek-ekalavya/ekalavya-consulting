import React, { useState, useEffect, useRef } from 'react';
import { Camera, UploadCloud } from 'lucide-react';

export const FounderSection: React.FC = () => {
  const [photoSrc, setPhotoSrc] = useState<string>('/IMG_20260928_191429.jpg');
  const [loadError, setLoadError] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check local storage for previously uploaded photo data URL
    const cached = localStorage.getItem('founder_photo_data');
    if (cached) {
      setPhotoSrc(cached);
      setLoadError(false);
    }
  }, []);

  const handleImageError = () => {
    // Try WA3261 filename if 191429 fails, otherwise show graceful upload dropzone
    if (photoSrc.includes('191429')) {
      setPhotoSrc('/IMG-20260928-WA3261.jpg');
    } else {
      setLoadError(true);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 1. Instantly show via data URL
    const reader = new FileReader();
    reader.onload = async () => {
      const dataUrl = reader.result as string;
      setPhotoSrc(dataUrl);
      setLoadError(false);
      try {
        localStorage.setItem('founder_photo_data', dataUrl);
      } catch {
        // quota ignore
      }
    };
    reader.readAsDataURL(file);

    // 2. Persist to dev server public/ folder via API
    try {
      await fetch('/api/upload-founder-photo', {
        method: 'POST',
        headers: {
          'Content-Type': file.type || 'image/jpeg'
        },
        body: file
      });
    } catch (err) {
      console.warn('Could not post to /api/upload-founder-photo', err);
    }
  };

  return (
    <div 
      id="founder-section" 
      aria-label="Founder and Fractional Marketer"
      className="my-12 rounded-2xl border border-white/10 bg-[#071326]/90 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden text-left"
    >
      {/* Hidden file input for uploading the original file */}
      <input 
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/jpeg,image/png,image/webp"
        className="hidden"
      />

      {/* Subtle ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-32 right-10 h-72 w-72 rounded-full bg-[#00D084]/5 blur-[100px]" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-[#1E3A8A]/10 blur-[100px]" 
      />

      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 relative z-10">
        
        {/* Left Column: Real photograph with soft shadow, 12px radius, subtle desaturation */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[380px] group">
            
            {!loadError ? (
              <div className="relative overflow-hidden rounded-[12px] border border-white/15 bg-black/40 shadow-2xl shadow-black/80">
                <img
                  src={photoSrc}
                  alt="Abhishek Bhowmick - Founder and Fractional Marketer"
                  onError={handleImageError}
                  className="w-full h-auto object-contain rounded-[12px] filter grayscale-[80%] contrast-[1.05] transition-all duration-500 group-hover:grayscale-[30%]"
                  style={{
                    borderRadius: '12px',
                    boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.8)'
                  }}
                />
                
                {/* Subtle discrete replace button on hover */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  title="Click to update / reload original photograph"
                  className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md bg-black/70 px-2.5 py-1.5 font-mono text-[10px] font-semibold text-white/80 opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100 hover:bg-black hover:text-[#00D084]"
                >
                  <Camera className="h-3 w-3" />
                  <span>Update Photo</span>
                </button>
              </div>
            ) : (
              /* If file is not yet saved to public directory, allow 1-click select of IMG_20260928_191429.jpg */
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-col items-center justify-center rounded-[12px] border-2 border-dashed border-[#00D084]/40 bg-white/[0.02] p-8 text-center cursor-pointer transition-colors hover:border-[#00D084] hover:bg-white/[0.04]"
                style={{ minHeight: '380px', borderRadius: '12px' }}
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#00D084]/10 text-[#00D084]">
                  <UploadCloud className="h-7 w-7" />
                </div>
                <h3 className="font-sans text-lg font-bold text-white">
                  Abhishek Bhowmick
                </h3>
                <p className="mt-1 font-mono text-xs text-[#00D084]">
                  IMG_20260928_191429.jpg
                </p>
                <p className="mt-4 max-w-xs text-xs text-white/60 leading-relaxed">
                  Click here to attach your original photograph file directly into the website.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 rounded bg-[#00D084] px-4 py-2 font-mono text-xs font-bold text-black shadow-md hover:bg-[#00ba76]">
                  Select Photograph File
                </span>
              </div>
            )}

          </div>
        </div>

        {/* Right Column: Founder & Fractional Marketer content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Heading: FOUNDER AND FRACTIONAL MARKETER */}
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#00D084] uppercase block">
            FOUNDER AND FRACTIONAL MARKETER
          </span>

          {/* Sub-heading: Abhishek Bhowmick in Title Case (Bold, slightly larger) */}
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
          <div className="mt-8 border-l-2 border-[#00D084] pl-4 sm:pl-6 py-2">
            <blockquote className="font-cinzel text-lg sm:text-xl italic text-white/95 leading-relaxed tracking-wide">
              &ldquo;I observe in silence, plan in 360&deg;, and strike with one arrow.&rdquo;
            </blockquote>
          </div>
        </div>

      </div>
    </div>
  );
};
