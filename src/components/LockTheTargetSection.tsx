import React, { useState } from 'react';
import { Crosshair, CheckCircle2, ArrowRight } from 'lucide-react';

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  monthlySpend: string;
  biggestChallenge: string;
}

const initialForm: FormData = {
  name: '',
  company: '',
  phone: '',
  email: '',
  monthlySpend: '',
  biggestChallenge: '',
};

export const LockTheTargetSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section 
      id="lock-target-section" 
      aria-label="Lock the Target Conversion Form"
      className="w-full bg-[#0A1931] border-b border-white/10 py-10 sm:py-20"
    >
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#00D080]/30 bg-[#00D080]/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-[#00D080]">
            <Crosshair className="h-3.5 w-3.5" />
            <span>PRECISION INTAKE</span>
          </div>
          <h2 className="font-cinzel text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Lock the Target
          </h2>
          <p className="mt-3 text-base text-white/75 sm:text-lg">
            Ready to kill waste and drive 10X?
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-2xl border border-white/15 bg-[#071326] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {submitted ? (
            /* Success State */
            <div className="py-8 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#00D080]/10 border border-[#00D080]/30 text-[#00D080]">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-white sm:text-3xl">
                Target Locked.
              </h3>
              <p className="mt-3 text-base text-white/80 font-medium leading-relaxed">
                We'll be in touch in 24 hours.
              </p>
              
              <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.02] p-4 text-left font-mono text-xs text-white/70 space-y-1.5">
                <p><span className="text-white">Lead:</span> {formData.name} &bull; {formData.company}</p>
                <p><span className="text-white">Email:</span> {formData.email}</p>
                <p><span className="text-white">Phone:</span> {formData.phone}</p>
                {formData.monthlySpend && <p><span className="text-white">Spend:</span> {formData.monthlySpend}</p>}
              </div>

              <button
                type="button"
                onClick={() => {
                  setFormData(initialForm);
                  setSubmitted(false);
                }}
                className="mt-6 font-mono text-xs text-[#00D080] hover:underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            /* Conversion Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name */}
              <div>
                <label 
                  htmlFor="lead-name" 
                  className="block font-mono text-xs font-semibold uppercase tracking-wider text-white/90 mb-1.5"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="lead-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/40 transition-colors focus:border-[#00D080] focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-[#00D080]"
                />
              </div>

              {/* Company */}
              <div>
                <label 
                  htmlFor="lead-company" 
                  className="block font-mono text-xs font-semibold uppercase tracking-wider text-white/90 mb-1.5"
                >
                  Company Name *
                </label>
                <input
                  type="text"
                  id="lead-company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Apex Health Systems"
                  className="w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/40 transition-colors focus:border-[#00D080] focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-[#00D080]"
                />
              </div>

              {/* Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label 
                    htmlFor="lead-phone" 
                    className="block font-mono text-xs font-semibold uppercase tracking-wider text-white/90 mb-1.5"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="lead-phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98200 00000"
                    className="w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/40 transition-colors focus:border-[#00D080] focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-[#00D080]"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="lead-email" 
                    className="block font-mono text-xs font-semibold uppercase tracking-wider text-white/90 mb-1.5"
                  >
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="lead-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="founder@company.com"
                    className="w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/40 transition-colors focus:border-[#00D080] focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-[#00D080]"
                  />
                </div>
              </div>

              {/* Monthly Marketing Spend */}
              <div>
                <label 
                  htmlFor="lead-spend" 
                  className="block font-mono text-xs font-semibold uppercase tracking-wider text-white/90 mb-1.5"
                >
                  Monthly Marketing Spend *
                </label>
                <select
                  id="lead-spend"
                  name="monthlySpend"
                  required
                  value={formData.monthlySpend}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/15 bg-[#0A1931] px-4 py-3 text-sm text-white transition-colors focus:border-[#00D080] focus:outline-none focus:ring-1 focus:ring-[#00D080]"
                >
                  <option value="" disabled className="text-white/40">Select Monthly Marketing Spend</option>
                  <option value="Under $5,000 / month">&lt; $5,000 / month (Seed / Early Stage)</option>
                  <option value="$5,000 - $15,000 / month">$5,000 - $15,000 / month (Growth Stage)</option>
                  <option value="$15,000 - $50,000 / month">$15,000 - $50,000 / month (Scaling Brand)</option>
                  <option value="$50,000+ / month">$50,000+ / month (Enterprise / Multi-Market)</option>
                </select>
              </div>

              {/* Biggest Challenge */}
              <div>
                <label 
                  htmlFor="lead-challenge" 
                  className="block font-mono text-xs font-semibold uppercase tracking-wider text-white/90 mb-1.5"
                >
                  Biggest Marketing Challenge *
                </label>
                <textarea
                  id="lead-challenge"
                  name="biggestChallenge"
                  required
                  rows={3}
                  value={formData.biggestChallenge}
                  onChange={handleChange}
                  placeholder="Describe your current agency bottlenecks, GTM challenges, or 90-day growth target..."
                  className="w-full rounded-lg border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/40 transition-colors focus:border-[#00D080] focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-[#00D080]"
                />
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative flex w-full items-center justify-center gap-3 rounded-lg bg-[#00D080] py-4 px-6 font-mono text-base font-bold tracking-wider text-black shadow-lg shadow-[#00D080]/25 transition-all duration-200 hover:bg-[#00ba76] hover:shadow-[#00D080]/40 active:scale-[0.99] disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>LOCKING TARGET...</span>
                  ) : (
                    <>
                      <span>Request Precision Call</span>
                      <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-center font-mono text-[11px] text-white/50 tracking-wider">
                NO AGENCY SALES SPAM &bull; 100% CONFIDENTIAL &bull; VETTED DIRECTLY BY FOUNDER
              </p>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
