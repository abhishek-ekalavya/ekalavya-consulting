import React from 'react';

interface EkalavyaEmblemProps {
  className?: string;
  size?: number | string;
  variant?: 'light' | 'dark';
}

export const EkalavyaEmblem: React.FC<EkalavyaEmblemProps> = ({ 
  className = "w-full h-full",
  size,
  variant = 'dark'
}) => {
  const style = size ? { width: size, height: size } : undefined;
  // In dark variant, swirls are thin light grey #94A3B8 so they are clearly visible on dark background
  const swirlColor = variant === 'dark' ? '#94A3B8' : '#1E3A8A';

  return (
    <svg 
      viewBox="0 0 215 225" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      role="img"
      aria-label="Ekalavya Consulting - Fractional CMO and Marketing Leadership Emblem"
    >
      <title>Ekalavya Consulting - Fractional CMO Services &amp; Marketing Leadership</title>
      <defs>
        <linearGradient id="emblemArrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00D084" />
          <stop offset="100%" stopColor="#05F29B" />
        </linearGradient>
      </defs>

      {/* Orbital Arc 1: Thin light grey #94A3B8 */}
      <path 
        d="M 125 15 C 65 20, 20 68, 18 128 C 16 162, 32 192, 58 208 C 42 194, 34 168, 36 138 C 38 90, 75 42, 130 32 Z" 
        fill={swirlColor} 
        opacity={variant === 'dark' ? 0.95 : 1}
      />
      
      {/* Orbital Arc 2: Thin light grey #94A3B8 */}
      <path 
        d="M 148 24 C 95 38, 54 84, 52 142 C 50 178, 68 206, 96 218 C 76 204, 66 178, 68 148 C 71 106, 102 62, 152 42 Z" 
        fill={swirlColor} 
        opacity={variant === 'dark' ? 0.85 : 0.85}
      />

      {/* Orbital Arc 3: Thin light grey #94A3B8 */}
      <path 
        d="M 75 190 C 105 218, 155 224, 192 205 C 162 216, 118 210, 92 190 Z" 
        fill={swirlColor} 
        opacity={variant === 'dark' ? 0.9 : 0.7}
      />

      {/* Emerald #00D084 Soaring Arrow */}
      <path 
        d="M 5 168 C 35 174, 85 162, 122 118 C 142 94, 158 64, 168 38 L 140 46 L 195 2 L 202 68 L 176 54 C 166 82, 146 116, 118 144 C 78 184, 32 188, 5 168 Z" 
        fill="url(#emblemArrowGrad)" 
      />

      {/* White star highlight on arrowhead */}
      <path 
        d="M 172 38 Q 172 45, 178 45 Q 172 45, 172 52 Q 172 45, 166 45 Q 172 45, 172 38 Z" 
        fill="#FFFFFF" 
      />
    </svg>
  );
};

interface EkalavyaFullHorizontalLogoProps {
  className?: string;
  height?: number | string;
}

export const EkalavyaFullHorizontalLogo: React.FC<EkalavyaFullHorizontalLogoProps> = ({
  className = "h-9 w-auto",
  height
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1100 230" 
      fill="none" 
      className={className}
      style={height ? { height } : undefined}
      role="img"
      aria-label="Ekalavya Consulting - Fractional Marketing Leadership and Execution Firm"
    >
      <title>Ekalavya Consulting - Fractional Marketing Leadership and Execution Firm</title>
      <defs>
        <linearGradient id="fullLogoArrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00D084" />
          <stop offset="100%" stopColor="#05F29B" />
        </linearGradient>
      </defs>

      {/* ================= EMBLEM ================= */}
      <g id="logo-emblem">
        {/* Swirl Arc 1: Thin light grey #94A3B8 */}
        <path 
          d="M 125 15 C 65 20, 20 68, 18 128 C 16 162, 32 192, 58 208 C 42 194, 34 168, 36 138 C 38 90, 75 42, 130 32 Z" 
          fill="#94A3B8" 
          opacity="0.95" 
        />
        {/* Swirl Arc 2: Thin light grey #94A3B8 */}
        <path 
          d="M 148 24 C 95 38, 54 84, 52 142 C 50 178, 68 206, 96 218 C 76 204, 66 178, 68 148 C 71 106, 102 62, 152 42 Z" 
          fill="#94A3B8" 
          opacity="0.85" 
        />
        {/* Swirl Arc 3: Thin light grey #94A3B8 */}
        <path 
          d="M 75 190 C 105 218, 155 224, 192 205 C 162 216, 118 210, 92 190 Z" 
          fill="#94A3B8" 
          opacity="0.9" 
        />
        {/* Emerald Soaring Arrow */}
        <path 
          d="M 5 168 C 35 174, 85 162, 122 118 C 142 94, 158 64, 168 38 L 140 46 L 195 2 L 202 68 L 176 54 C 166 82, 146 116, 118 144 C 78 184, 32 188, 5 168 Z" 
          fill="url(#fullLogoArrowGrad)" 
        />
        {/* Star highlight */}
        <path 
          d="M 172 38 Q 172 45, 178 45 Q 172 45, 172 52 Q 172 45, 166 45 Q 172 45, 172 38 Z" 
          fill="#FFFFFF" 
        />
      </g>

      {/* ================= TYPOGRAPHY ================= */}
      {/* EKALAVYA */}
      <text 
        x="280" 
        y="110" 
        fill="#FFFFFF" 
        fontFamily="Cinzel, serif" 
        fontSize="112" 
        fontWeight="800" 
        letterSpacing="5"
      >
        EKALAVYA
      </text>

      {/* CONSULTING */}
      <text 
        x="285" 
        y="204" 
        fill="#FFFFFF" 
        fontFamily="sans-serif" 
        fontSize="82" 
        fontWeight="500" 
        letterSpacing="18"
      >
        CONSULTING
      </text>
    </svg>
  );
};
