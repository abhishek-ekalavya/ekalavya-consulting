import React from 'react';
import { Crosshair } from 'lucide-react';

interface AboutPageProps {
  onLockTarget?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onLockTarget }) => {
  return (
    <div className="bg-tactical-grid py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h1 className="font-cinzel text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          About Us
        </h1>

        {/* Paragraph 1 */}
        <p className="mt-8 text-base leading-relaxed text-white sm:text-lg font-medium">
          We are Ekalavya Consulting.
        </p>

        {/* Paragraph 2 */}
        <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
          We operate as a Marketing Leadership &amp; Execution Firm. We drive your business growth through two distinct capabilities: Fractional CMO Leadership and Specialized Execution.
        </p>

        {/* Paragraph 3 */}
        <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
          For businesses seeking long-term direction, we provide the strategic depth and budget governance of a full-time Chief Marketing Officer at a fraction of the cost. For businesses looking to undertake specific, standalone marketing tasks—from corporate AVs and packaging design to custom web applications—we deploy our trusted network of specialized resources to deliver flawless results. From building a complete marketing operating system to nailing an individual project, we take institutional ownership of your market presence.
        </p>

        {/* Paragraph 4 Center Bold */}
        <div className="my-12 rounded-lg border border-white/10 bg-white/[0.02] p-8 text-center backdrop-blur-sm sm:p-10">
          <p className="text-base font-bold text-white sm:text-xl">
            We don't just offer advice. We offer... <span className="font-cinzel text-xl font-extrabold tracking-wider text-[#00D084] sm:text-2xl lg:text-3xl block mt-2">One Arrow. One Kill. No Waste.</span>
          </p>
        </div>

        {/* CTA to Lock Target if handler provided */}
        {onLockTarget && (
          <div className="mt-14 flex justify-center">
            <button
              onClick={onLockTarget}
              className="flex items-center gap-2.5 rounded bg-[#00D084] px-6 py-3.5 font-mono text-sm font-bold tracking-wider text-black shadow-lg shadow-[#00D084]/20 transition-all hover:bg-[#00ba76]"
            >
              <Crosshair className="h-4 w-4" />
              <span>LOCK THE TARGET</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
