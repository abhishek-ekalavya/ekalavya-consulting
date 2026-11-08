import React from 'react';
import { 
  ShieldCheck, 
  Compass, 
  Award, 
  TrendingUp, 
  Crosshair, 
  Sparkles 
} from 'lucide-react';
import { getServicesContent } from '../data/contentLoader';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: ShieldCheck,
  compass: Compass,
  award: Award,
  trending: TrendingUp,
  crosshair: Crosshair,
  sparkles: Sparkles,
};

const ID_FALLBACK_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'fractional-cmo': ShieldCheck,
  'gtm-strategy': Compass,
  'brand-positioning': Award,
  'growth-performance': TrendingUp,
  'campaign-planning': Crosshair,
  'content-creative': Sparkles,
};

export const TheArsenal: React.FC = () => {
  const servicesContent = getServicesContent();
  const servicesList = servicesContent.services || [];

  return (
    <section 
      id="arsenal-section" 
      aria-label="The Arsenal - Detailed Services Breakdown"
      className="w-full bg-[#0A1931] border-b border-white/10 py-10 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto mb-12 sm:mb-16 max-w-3xl text-center">
          <span className="font-mono text-xs font-semibold tracking-[0.2em] text-[#00D080] uppercase block mb-3">
            {servicesContent.arsenal_badge || 'DETAILED BREAKDOWN'}
          </span>
          <h2 className="font-cinzel text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {servicesContent.arsenal_title || 'The Arsenal'}
          </h2>
          <p className="mt-4 text-base text-white/75 sm:text-lg">
            {servicesContent.arsenal_subtitle || 'Precision tools. Deployed based on your battle.'}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesList.map((service, idx) => {
            const IconComponent =
              (service.icon_type && ICON_MAP[service.icon_type]) ||
              ID_FALLBACK_ICONS[service.id] ||
              ShieldCheck;
            return (
              <div
                key={service.id || idx}
                className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#071326] p-6 sm:p-8 transition-all duration-300 hover:border-[#00D080] hover:shadow-xl hover:shadow-black/40"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[#00D080] transition-colors group-hover:border-[#00D080]/40 group-hover:bg-[#00D080]/10">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-[#00D080] uppercase tracking-wider">
                      {service.scope}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-xl font-bold text-white sm:text-2xl transition-colors group-hover:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2">
                  {(service.tags || []).map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="rounded bg-white/[0.03] border border-white/10 px-2.5 py-1 font-mono text-[11px] text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
