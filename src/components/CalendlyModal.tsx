import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ChevronRight, User, Globe } from 'lucide-react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  leadName?: string;
  leadCompany?: string;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({
  isOpen,
  onClose,
  leadName,
  leadCompany,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>('Tomorrow, 11:00 AM IST');
  const [confirmed, setConfirmed] = useState<boolean>(false);

  if (!isOpen) return null;

  const availableSlots = [
    'Tomorrow, 11:00 AM IST',
    'Tomorrow, 3:30 PM IST',
    'Day After Tomorrow, 10:00 AM IST',
    'Day After Tomorrow, 2:00 PM IST',
    'Friday, 4:00 PM IST',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-xl border border-white/20 bg-[#0A1931] p-6 shadow-2xl sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded border border-white/10 p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {!confirmed ? (
          <div>
            <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded border border-[#00D084]/40 bg-[#00D084]/10 text-[#00D084]">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono text-xs font-semibold tracking-wider text-[#00D084] uppercase">
                  EXECUTIVE GOVERNOR BRIEFING
                </div>
                <h3 className="font-cinzel text-lg font-bold text-white sm:text-xl">
                  30-Minute Diagnostic Session
                </h3>
              </div>
            </div>

            <div className="mb-4 text-xs text-white/70">
              Direct closed-door assessment with the Ekalavya Leadership Governor. We examine your current unit economics, marketing burn, and leadership architecture.
            </div>

            {(leadName || leadCompany) && (
              <div className="mb-5 flex flex-wrap gap-2 rounded border border-white/10 bg-white/5 p-3 text-xs font-mono text-white/80">
                {leadName && (
                  <span className="flex items-center gap-1.5">
                    <User className="h-3 w-3 text-[#00D084]" />
                    {leadName}
                  </span>
                )}
                {leadCompany && (
                  <span className="flex items-center gap-1.5 border-l border-white/20 pl-2">
                    <Globe className="h-3 w-3 text-[#00D084]" />
                    {leadCompany}
                  </span>
                )}
              </div>
            )}

            <div className="mb-6 space-y-2">
              <div className="font-mono text-xs font-bold text-white/80 uppercase">
                Select Briefing Slot:
              </div>
              {availableSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedDate(slot)}
                  className={`flex w-full items-center justify-between rounded border p-3 text-xs font-mono transition-all ${
                    selectedDate === slot
                      ? 'border-[#00D084] bg-[#00D084]/20 font-bold text-white'
                      : 'border-white/10 bg-white/[0.02] text-white/70 hover:border-white/25 hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-[#00D084]" />
                    {slot}
                  </span>
                  <ChevronRight className="h-3.5 w-3.5 text-white/40" />
                </button>
              ))}
            </div>

            <button
              onClick={() => setConfirmed(true)}
              className="w-full rounded bg-[#00D084] py-3.5 font-mono text-xs font-bold tracking-wider text-black shadow-lg shadow-[#00D084]/25 transition-colors hover:bg-[#00ba76]"
            >
              CONFIRM BRIEFING SESSION
            </button>
          </div>
        ) : (
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#00D084] bg-[#00D084]/20 text-[#00D084]">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 className="font-cinzel text-xl font-bold text-white">
              Briefing Session Confirmed
            </h3>
            <p className="mx-auto mt-2 max-w-xs font-mono text-xs text-[#00D084]">
              {selectedDate}
            </p>
            <p className="mt-4 text-xs text-white/70">
              Calendar invite and private Google Meet link dispatched. The Governor will review your submitted diagnostics prior to the session.
            </p>
            <button
              onClick={() => {
                setConfirmed(false);
                onClose();
              }}
              className="mt-6 rounded border border-white/20 bg-white/5 px-6 py-2 font-mono text-xs text-white transition-colors hover:bg-white/10"
            >
              DISMISS
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
