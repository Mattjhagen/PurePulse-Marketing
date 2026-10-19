import React, { useState } from 'react';
import { Check, Sparkles, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { playPop, playSuccessChime } from '../utils/audio';

interface PricingCalculatorProps {
  isOpenBookingModal: boolean;
  onCloseBookingModal: () => void;
  preselectedPlan?: string;
  preselectedProjectName?: string;
}

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({
  isOpenBookingModal,
  onCloseBookingModal,
  preselectedPlan,
  preselectedProjectName,
}) => {
  const [selectedTier, setSelectedTier] = useState<'starter' | 'growth' | 'premium'>(
    preselectedPlan === 'Starter'
      ? 'starter'
      : preselectedPlan === 'Premium'
      ? 'premium'
      : 'growth'
  );

  // Add-ons
  const [includeAudio, setIncludeAudio] = useState(false);
  const [includeRush, setIncludeRush] = useState(false);
  const [includeEcommerce, setIncludeEcommerce] = useState(false);

  // Form State
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientProject, setClientProject] = useState(preselectedProjectName || '');
  const [clientNotes, setClientNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const plans = {
    starter: {
      name: 'Starter',
      price: 20,
      turnaround: '7–9 Days',
      bestFor: 'Individuals & small businesses launching a clean online presence.',
      features: [
        'Up to 5 Handcrafted Pages',
        'Atomic Speed & 100/100 Lighthouse Target',
        'Mobile, Tablet & Desktop Responsive',
        'SSL Security & Edge Hosting Included',
        'Monthly Content & Copy Updates',
      ],
    },
    growth: {
      name: 'Growth',
      price: 50,
      turnaround: '8–11 Days',
      bestFor: 'Growing businesses needing strong lead generation & visual dominance.',
      features: [
        'Up to 10 Tailored Pages',
        'Advanced Conversion Architecture & Copy',
        'Dynamic Filterable Portfolio / Showcase',
        'SEO Overdrive & Structured JSON-LD',
        'Bi-Weekly Updates & Priority Support',
      ],
    },
    premium: {
      name: 'Premium',
      price: 75,
      turnaround: '10–14 Days',
      bestFor: 'High-touch brands, creators, and platforms demanding total custom craft.',
      features: [
        'Unlimited Core Architecture & Pages',
        'Bespoke Kinetic Motion & Interaction',
        'Custom Booking, Forms & CRM Webhooks',
        'Dedicated Developer Line with Matt Hagen',
        'Continuous Evolution & Speed Auditing',
      ],
    },
  };

  const currentPlan = plans[selectedTier];
  let monthlyTotal = currentPlan.price;
  if (includeAudio) monthlyTotal += 10;
  if (includeEcommerce) monthlyTotal += 20;

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientEmail.trim() || !clientEmail.includes('@')) {
      setFormError('Please provide a valid name and email address.');
      playPop(300);
      return;
    }
    setFormError('');
    setIsSubmitted(true);
    playSuccessChime();
  };

  return (
    <section id="pricing" className="py-20 lg:py-28 border-b border-white/5 bg-[#090812]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-[#A066FF] mb-3">
            Simple, Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight text-balance">
            Start with just a $150 deposit.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            No giant agency invoices. No hidden maintenance fees.
            Just a flat deposit to start coding, followed by 12-month care from $20/mo.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {(Object.keys(plans) as Array<'starter' | 'growth' | 'premium'>).map((tierKey) => {
            const plan = plans[tierKey];
            const isFeatured = tierKey === 'growth';
            const isSelected = selectedTier === tierKey;

            return (
              <div
                key={tierKey}
                onClick={() => {
                  playPop(520);
                  setSelectedTier(tierKey);
                }}
                className={`cursor-pointer rounded-2xl border p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? 'border-[#7B2FFF] bg-[#100e24] shadow-[0_0_36px_rgba(123,47,255,0.25)]'
                    : 'border-white/10 bg-[#0c0c16] hover:border-white/20'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#7B2FFF] text-[11px] font-mono uppercase tracking-wider text-white font-semibold">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white font-display">
                      {plan.name}
                    </h3>
                    <span className="text-xs font-mono text-neutral-400">
                      {plan.turnaround}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-300 min-h-[36px] mb-6">
                    {plan.bestFor}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white font-display tabular-nums">
                        ${plan.price}
                      </span>
                      <span className="text-sm text-neutral-400 font-mono">/month</span>
                    </div>
                    <div className="text-xs text-[#00D4FF] font-mono mt-1">
                      $150 deposit unlocks build
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-200">
                        <Check className="h-4 w-4 text-[#00D4FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    playPop(640);
                    setSelectedTier(tierKey);
                    // trigger booking modal
                    onCloseBookingModal();
                  }}
                  className={`w-full rounded-lg py-3 text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                    isFeatured
                      ? 'bg-[#7B2FFF] text-white hover:bg-[#6824db] shadow-[0_0_20px_rgba(123,47,255,0.4)]'
                      : 'bg-white/10 text-white hover:bg-white/15'
                  }`}
                >
                  <span>Select {plan.name} Plan</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Add-on Configurator Box */}
        <div className="rounded-2xl border border-white/15 bg-[#0f0e1f] p-6 sm:p-8 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="text-xs font-mono uppercase text-[#00D4FF] tracking-wider mb-1">
                Customize Your Package
              </div>
              <h4 className="text-xl font-bold text-white font-display">
                Selected Plan: {currentPlan.name} (${currentPlan.price}/mo)
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                Toggle optional studio enhancements. The $150 deposit covers your kickoff build.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <span className="text-xs font-mono text-neutral-400 block">Initial Deposit</span>
                <span className="text-2xl font-extrabold text-white font-display tabular-nums">$150</span>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="text-right">
                <span className="text-xs font-mono text-neutral-400 block">Monthly Care</span>
                <span className="text-2xl font-extrabold text-[#A066FF] font-display tabular-nums">
                  ${monthlyTotal}/mo
                </span>
              </div>
            </div>
          </div>

          {/* Add-ons checkboxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
            <label className={`p-4 rounded-xl border cursor-pointer transition-all ${includeAudio ? 'border-[#7B2FFF] bg-[#7B2FFF]/10' : 'border-white/10 bg-white/[0.02]'}`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white">Interactive Web Audio FX</span>
                <input
                  type="checkbox"
                  checked={includeAudio}
                  onChange={(e) => {
                    playPop(500);
                    setIncludeAudio(e.target.checked);
                  }}
                  className="rounded border-white/20 text-[#7B2FFF] focus:ring-0"
                />
              </div>
              <p className="text-[11px] text-neutral-400 leading-normal">
                Subtle synth click and chime micro-interactions just like this site (+$10/mo).
              </p>
            </label>

            <label className={`p-4 rounded-xl border cursor-pointer transition-all ${includeEcommerce ? 'border-[#7B2FFF] bg-[#7B2FFF]/10' : 'border-white/10 bg-white/[0.02]'}`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white">E-Commerce / Stripe Store</span>
                <input
                  type="checkbox"
                  checked={includeEcommerce}
                  onChange={(e) => {
                    playPop(500);
                    setIncludeEcommerce(e.target.checked);
                  }}
                  className="rounded border-white/20 text-[#7B2FFF] focus:ring-0"
                />
              </div>
              <p className="text-[11px] text-neutral-400 leading-normal">
                Secure checkout pipeline, automated receipts & order notifications (+$20/mo).
              </p>
            </label>

            <label className={`p-4 rounded-xl border cursor-pointer transition-all ${includeRush ? 'border-[#7B2FFF] bg-[#7B2FFF]/10' : 'border-white/10 bg-white/[0.02]'}`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-white">5-Day Expedited Sprint</span>
                <input
                  type="checkbox"
                  checked={includeRush}
                  onChange={(e) => {
                    playPop(500);
                    setIncludeRush(e.target.checked);
                  }}
                  className="rounded border-white/20 text-[#7B2FFF] focus:ring-0"
                />
              </div>
              <p className="text-[11px] text-neutral-400 leading-normal">
                Jump to the front of the studio queue for an accelerated 5-day delivery sprint.
              </p>
            </label>
          </div>
        </div>

        {/* Deposit Guarantee Callout */}
        <div className="rounded-xl border border-white/10 bg-white/[0.01] p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00D4FF] shrink-0">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white font-display">
                The PurePulse $150 Deposit Guarantee
              </h5>
              <p className="text-xs text-neutral-400 mt-0.5">
                Your $150 deposit is protected. If you don&apos;t love the initial design review before launch, we make it right or refund your deposit with zero hassle.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              playPop(620);
              // Open modal
              setIsSubmitted(false);
              const el = document.getElementById('booking-modal');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-2 rounded-lg bg-[#7B2FFF] px-6 py-3 text-xs font-semibold text-white hover:bg-[#6824db] shadow-[0_0_24px_rgba(123,47,255,0.4)] whitespace-nowrap shrink-0"
          >
            <Sparkles className="h-4 w-4" />
            <span>Lock In $150 Deposit</span>
          </button>
        </div>
      </div>

      {/* Interactive Booking Modal / Drawer */}
      {isOpenBookingModal && (
        <div
          id="booking-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in"
          onClick={onCloseBookingModal}
        >
          <div
            className="relative w-full max-w-xl rounded-2xl border border-white/20 bg-[#0c0c18] p-6 sm:p-8 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-white font-display mb-2">
                  Deposit Request Received!
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto mb-6">
                  Thank you, <strong className="text-white">{clientName}</strong>. Your requested plan ({currentPlan.name} at ${monthlyTotal}/mo with $150 deposit) has been registered.
                  Matt Hagen will reach out to <strong className="text-white">{clientEmail}</strong> within 12 hours to schedule your kickoff call.
                </p>

                <div className="p-4 rounded-xl border border-white/10 bg-white/5 text-xs text-neutral-300 font-mono mb-6 text-left space-y-1">
                  <div>Deposit: <span className="text-[#00D4FF]">$150 (Locked)</span></div>
                  <div>Selected Plan: <span className="text-white">{currentPlan.name}</span></div>
                  <div>Estimated Turnaround: <span className="text-white">{currentPlan.turnaround}</span></div>
                  <div>Founder Contact: <span className="text-[#A066FF]">matty@purepulse.one</span></div>
                </div>

                <button
                  onClick={() => {
                    playPop(480);
                    onCloseBookingModal();
                    setIsSubmitted(false);
                  }}
                  className="rounded-lg bg-white px-6 py-2.5 text-xs font-semibold text-black hover:bg-neutral-200 transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display">
                      Launch Your Website
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {currentPlan.name} Plan · $150 Deposit · ${monthlyTotal}/mo
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      playPop(400);
                      onCloseBookingModal();
                    }}
                    className="text-xs font-mono text-neutral-400 hover:text-white"
                  >
                    CLOSE [ESC]
                  </button>
                </div>

                {formError && (
                  <div className="mb-4 p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                    {formError}
                  </div>
                )}

                <form onSubmit={handleSubmitBooking} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#7B2FFF] focus:ring-1 focus:ring-[#7B2FFF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#7B2FFF] focus:ring-1 focus:ring-[#7B2FFF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                      Project or Company Name
                    </label>
                    <input
                      type="text"
                      value={clientProject}
                      onChange={(e) => setClientProject(e.target.value)}
                      placeholder="e.g. Apex Logistics or new brand idea"
                      className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#7B2FFF] focus:ring-1 focus:ring-[#7B2FFF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                      Project Goals & Vision
                    </label>
                    <textarea
                      rows={3}
                      value={clientNotes}
                      onChange={(e) => setClientNotes(e.target.value)}
                      placeholder="What kind of site are you looking to build? Any reference inspiration?"
                      className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#7B2FFF] focus:ring-1 focus:ring-[#7B2FFF]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-[#7B2FFF] py-3 text-xs font-semibold text-white hover:bg-[#6824db] shadow-[0_0_24px_rgba(123,47,255,0.4)] transition-all flex items-center justify-center gap-2"
                    >
                      <Sparkles className="h-4 w-4" />
                      <span>Submit Proposal & Lock $150 Deposit</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
