import React from 'react';

export const EkalavyaLogo: React.FC<{ className?: string }> = ({ className = 'h-10 w-auto' }) => {
  return (
    <img 
      src="/logo.png" 
      alt="Ekalavya Consulting" 
      className={`${className} object-contain`} 
    />
  );
};

export default EkalavyaLogo;
