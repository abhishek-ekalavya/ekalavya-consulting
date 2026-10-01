import React from 'react';
import { Link } from 'react-router-dom';
import { Section1About } from '../components/Section1About';
import { InfographicsSection } from '../components/InfographicsSection';
import { HowWeWork } from '../components/HowWeWork';
import { ProofOfPrecision } from '../components/ProofOfPrecision';
import { ClearingTheFog } from '../components/ClearingTheFog';
import { EngagementBattleSection } from '../components/EngagementBattleSection';

interface HomePageProps {
  onLockTarget: () => void;
  onSelectLongGame?: () => void;
  onSelectShortGame?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  onLockTarget,
  onSelectLongGame,
  onSelectShortGame,
}) => {
  return (
    <>
      {/* SECTION 1: ABOUT US (Hero, One Arrow tagline, Founder Section) */}
      <Section1About onLockTarget={onLockTarget} />

      {/* INFOGRAPHICS: 1. THE CHALLENGE (Problem) -> 2. THE ANSWER (Solution) */}
      <InfographicsSection />

      {/* SECTION 2: HOW WE WORK ("Two Paths. Same Precision. Zero Waste...") */}
      <HowWeWork onLockTarget={onLockTarget} />

      {/* CENTERED CTA: EXPLORE THE FULL ARSENAL */}
      <section className="w-full bg-[#0A1931] border-b border-white/10 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-[#00D080] bg-transparent px-8 py-4 font-mono text-sm sm:text-base font-bold tracking-wider text-[#00D080] transition-all duration-300 hover:bg-[#00D080] hover:text-black active:scale-[0.99] shadow-sm hover:shadow-lg hover:shadow-[#00D080]/20"
          >
            <span>Explore The Full Arsenal</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </section>

      {/* CLOSING SEQUENCE: 2. CASE STUDIES ("Proof of Precision") */}
      <ProofOfPrecision />

      {/* CLOSING SEQUENCE: 3. ACCORDION Q&A ("Clearing The Fog") */}
      <ClearingTheFog />

      {/* CLOSING SEQUENCE: 4. SELECT ENGAGEMENT MODEL (WHICH BATTLE ARE WE FIGHTING?) */}
      <EngagementBattleSection 
        onSelectLongGame={onSelectLongGame || onLockTarget}
        onSelectShortGame={onSelectShortGame || onLockTarget}
      />
    </>
  );
};
