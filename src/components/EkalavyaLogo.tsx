import React from 'react';

interface EkalavyaLogoProps {
  className?: string;
  variant?: 'white' | 'dark';
}

/**
 * Ekalavya Consulting Official Brand Logo
 * Pixel-perfect, 100% transparent vector SVG (no background patch, no distortion)
 */
export const EkalavyaLogo: React.FC<EkalavyaLogoProps> = ({
  className = "h-10 sm:h-12 w-auto",
  variant = 'white'
}) => {
  const primaryColor = variant === 'white' ? '#FFFFFF' : '#071428';
  const bevelColor = variant === 'white' ? '#CBD5E1' : '#475569';

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 860 176" 
      fill="none"
      className={className}
      aria-label="Ekalavya Consulting"
      style={{ display: 'block' }}
    >
      <title>Ekalavya Consulting</title>
      
      {/* ================= EC SHIELD EMBLEM ================= */}
      <g id="ec-shield-emblem" transform="translate(5, 5)">
        {/* Top-Left Crest & Top Bar of E */}
        <path d="M 36 28 L 88 4 L 88 26 L 36 48 Z" fill={primaryColor} />
        
        {/* Top-Right Crest */}
        <path d="M 88 4 L 140 28 L 140 48 L 88 26 Z" fill={primaryColor} />

        {/* Left Outer Spine (Vertical of E / Left Wall of Shield) */}
        <path d="M 16 36 L 36 28 L 36 138 L 16 130 Z" fill={primaryColor} />

        {/* Middle Bar of E */}
        <path d="M 36 74 L 75 74 L 75 94 L 36 94 Z" fill={primaryColor} />

        {/* Bottom-Left Base & Bottom Bar of E */}
        <path d="M 36 120 L 88 142 L 88 164 L 36 142 Z" fill={primaryColor} />

        {/* Bottom-Right Base */}
        <path d="M 88 142 L 140 120 L 140 142 L 88 164 Z" fill={primaryColor} />

        {/* Right Outer Wall of Shield (Right Spine of C) */}
        <path d="M 140 28 L 160 36 L 160 130 L 140 138 Z" fill={primaryColor} />

        {/* Geometric Intertwined C */}
        <path d="M 140 48 L 96 48 L 82 62 L 82 106 L 96 120 L 140 120 L 140 100 L 105 100 L 100 95 L 100 73 L 105 68 L 140 68 Z" fill={primaryColor} />
        
        {/* C 3D Inner Bevel / Fold Accent */}
        <path d="M 82 62 L 100 73 L 100 95 L 82 106 Z" fill={bevelColor} />
      </g>

      {/* ================= TYPOGRAPHY ================= */}
      {/* EKALAVYA */}
      <text 
        x="205" 
        y="92" 
        fill={primaryColor} 
        fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
        fontSize="82" 
        fontWeight="800" 
        letterSpacing="5"
      >
        EKALAVYA
      </text>

      {/* CONSULTING */}
      <text 
        x="208" 
        y="150" 
        fill={primaryColor} 
        fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
        fontSize="30" 
        fontWeight="600" 
        letterSpacing="18.8"
      >
        CONSULTING
      </text>
    </svg>
  );
};

export const EkalavyaEmblem: React.FC<{ 
  className?: string; 
  size?: number | string; 
  variant?: 'white' | 'dark' 
}> = ({
  className = "h-8 w-auto",
  size,
  variant = 'white'
}) => {
  const primaryColor = variant === 'white' ? '#FFFFFF' : '#071428';
  const bevelColor = variant === 'white' ? '#CBD5E1' : '#475569';

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 176 176" 
      fill="none"
      className={className}
      aria-label="Ekalavya Emblem"
      style={size ? { height: size, width: 'auto' } : undefined}
    >
      <g transform="translate(8, 6)">
        <path d="M 36 28 L 88 4 L 88 26 L 36 48 Z" fill={primaryColor} />
        <path d="M 88 4 L 140 28 L 140 48 L 88 26 Z" fill={primaryColor} />
        <path d="M 16 36 L 36 28 L 36 138 L 16 130 Z" fill={primaryColor} />
        <path d="M 36 74 L 75 74 L 75 94 L 36 94 Z" fill={primaryColor} />
        <path d="M 36 120 L 88 142 L 88 164 L 36 142 Z" fill={primaryColor} />
        <path d="M 88 142 L 140 120 L 140 142 L 88 164 Z" fill={primaryColor} />
        <path d="M 140 28 L 160 36 L 160 130 L 140 138 Z" fill={primaryColor} />
        <path d="M 140 48 L 96 48 L 82 62 L 82 106 L 96 120 L 140 120 L 140 100 L 105 100 L 100 95 L 100 73 L 105 68 L 140 68 Z" fill={primaryColor} />
        <path d="M 82 62 L 100 73 L 100 95 L 82 106 Z" fill={bevelColor} />
      </g>
    </svg>
  );
};
