import React from 'react';
import { HowWeWork } from '../components/HowWeWork';

interface ServicesPageProps {
  onLockTarget: () => void;
  onSelectLongGame?: () => void;
  onSelectShortGame?: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onLockTarget }) => {
  return (
    <div className="bg-[#0A1931] min-h-screen">
      {/* Exactly matches landing page starting from Two Paths... till lock the target button */}
      <HowWeWork onLockTarget={onLockTarget} />
    </div>
  );
};
