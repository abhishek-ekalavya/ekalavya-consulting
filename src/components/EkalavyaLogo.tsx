import React from 'react';

export const EkalavyaLogo: React.FC<{ className?: string }> = ({ className = 'h-10 w-auto' }) => {
  return (
    <img 
      src="/logo.png" 
      alt="Ekalavya Consulting" 
      className={`${className} object-contain invert grayscale brightness-200 contrast-200 mix-blend-screen`} 
    />
  );
};

export default EkalavyaLogo;
