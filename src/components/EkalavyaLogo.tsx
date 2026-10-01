import React from 'react';
import { EC_SHIELD_LOGO } from '../assets/logo';

interface EkalavyaEmblemProps {
  className?: string;
  size?: number | string;
  variant?: 'light' | 'dark';
}

export const EkalavyaEmblem: React.FC<EkalavyaEmblemProps> = ({ 
  className = "w-full h-full",
  size,
}) => {
  return (
    <img 
      src={EC_SHIELD_LOGO} 
      alt="Ekalavya Consulting" 
      className={className}
      style={{ height: size || '52px', width: 'auto', objectFit: 'contain' }}
    />
  );
};
