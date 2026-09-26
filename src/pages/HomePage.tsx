import React from 'react';
import { Section1About } from '../components/Section1About';
import { HowWeWork } from '../components/HowWeWork';

interface HomePageProps {
  onLockTarget: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onLockTarget }) => {
  return (
    <>
      {/* SECTION 1: ABOUT US */}
      <Section1About onLockTarget={onLockTarget} />

      {/* SECTION 2: HOW WE WORK (Critical Fix) */}
      <HowWeWork onLockTarget={onLockTarget} />
    </>
  );
};
