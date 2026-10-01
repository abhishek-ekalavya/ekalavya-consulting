import React from 'react';
import { InfographicsSection } from '../components/InfographicsSection';
import { HowWeWork } from '../components/HowWeWork';
import { TheArsenal } from '../components/TheArsenal';

interface ServicesPageProps {
  onLockTarget: () => void;
  onSelectLongGame?: () => void;
  onSelectShortGame?: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onLockTarget }) => {
  return (
    <div className="bg-[#0A1931] min-h-screen">
      {/* Infographics: The Challenge & The Answer */}
      <InfographicsSection />
      {/* Exactly matches landing page starting from Two Paths... till lock the target button */}
      <HowWeWork onLockTarget={onLockTarget} />
      {/* Detailed Services Arsenal */}
      <TheArsenal />
    </div>
  );
};
