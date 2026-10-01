import React from 'react';
import { Link } from 'react-router-dom';

interface AboutPageProps {
  onLockTarget?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className="bg-tactical-grid py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Tag */}
        <div className="mb-4 flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.2em] text-[#00D080] uppercase">
          <span>01 &bull; INSTITUTIONAL CHARTER</span>
        </div>

        {/* Title */}
        <h1 className="font-cinzel text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          About Us
        </h1>

        {/* Body Container (max-width 720px, light gray 16px, line-height 1.8) */}
        <div className="mt-10 max-w-[720px] space-y-6 text-[16px] leading-[1.8] text-white/80">
          
          {/* Para 1 */}
          <p className="font-medium text-white/90">
            We are Ekalavya Consulting.
          </p>

          {/* Para 2 (bold first sentence) */}
          <p>
            <strong className="text-white font-bold">
              We operate as a Marketing Leadership &amp; Execution Firm.
            </strong>{' '}
            We drive growth through two distinct capabilities: Fractional CMO Leadership and Specialized Execution.
          </p>

          {/* Para 3 */}
          <p>
            For businesses seeking long-term direction, we provide the strategic depth and budget governance of a full-time Chief Marketing Officer at a fraction of the cost. For businesses needing a specific task nailed &mdash; from corporate AVs and packaging to custom web apps and integrated campaigns &mdash; we deploy our trusted specialist network to deliver flawless results.
          </p>

          {/* Para 4 */}
          <p>
            From building your complete marketing operating system to nailing one critical project, we take institutional ownership of outcome.
          </p>

          {/* Para 5: Tagline (emerald, mono, tracking 2px, 14px bold) */}
          <div className="pt-2">
            <p className="font-mono text-[14px] font-bold tracking-[2px] text-[#00D080] uppercase">
              One Arrow. One Kill. No Waste.
            </p>
          </div>

          {/* CTA Block: 24px spacing */}
          <div className="pt-6">
            <Link
              to="/our-team"
              className="inline-flex items-center gap-2 rounded-lg border border-[#00D080]/30 px-6 py-3 font-mono text-sm font-bold tracking-wider text-[#00D080] transition-colors hover:bg-[#00D080]/10 hover:border-[#00D080]/50"
              style={{
                borderColor: 'rgba(0, 208, 128, 0.3)',
                padding: '12px 24px',
                borderRadius: '8px',
                color: '#00D080',
              }}
            >
              <span>Meet Command &rarr;</span>
            </Link>

            {/* Subtext below button in small gray 12px */}
            <p className="mt-3 text-[12px] text-white/50 font-mono tracking-wide">
              Led by Abhishek Bhowmick, Founder &amp; Principal Growth Architect
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
