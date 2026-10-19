import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, Zap, Monitor, Smartphone, Tablet, Flame } from 'lucide-react';
import { playPop } from '../utils/audio';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreRoster: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreRoster }) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [heroAccent, setHeroAccent] = useState<'purple' | 'cyan' | 'emerald'>('purple');

  const accentHex = {
    purple: '#A066FF',
    cyan: '#00D4FF',
    emerald: '#10B981',
  }[heroAccent];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-white/5">
      {/* Background ambient mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#7B2FFF]/15 rounded-full blur-[140px] pointer-events-none glow-ambient" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-[#00D4FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Editorial Sub-kicker */}
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase text-neutral-400 font-mono">
          <span className="text-[#A066FF] font-semibold">Web Development Studio</span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span>Zero Agency Bloat</span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span>100/100 Speed Guaranteed</span>
        </div>

        {/* Hero Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch mb-16">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold tracking-tight leading-[1.08] text-white font-display text-balance mb-6">
              Websites built for{' '}
              <span className="bg-gradient-to-r from-white via-[#F4F4FF] to-neutral-400 bg-clip-text text-transparent">
                internet royalty
              </span>
              {' '}and{' '}
              <span
                style={{ color: accentHex }}
                className="transition-colors duration-300 drop-shadow-[0_0_24px_rgba(160,102,255,0.4)]"
              >
                breakout founders.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl mb-8">
              Clean, fast, uncompromising web applications built to perform and built to last.
              No $25,000 agency retainers, no junior-dev handoffs. Your high-velocity web presence starts with a <strong className="text-white font-semibold">$150 deposit</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={() => {
                  playPop(650);
                  onOpenBooking();
                }}
                className="flex items-center gap-2.5 rounded-lg bg-[#7B2FFF] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#6e22e6] shadow-[0_0_30px_rgba(123,47,255,0.45)] hover:shadow-[0_0_45px_rgba(123,47,255,0.7)] transition-all whitespace-nowrap"
              >
                <span>Start with $150 Deposit</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => {
                  playPop(520);
                  onExploreRoster();
                }}
                className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10 hover:border-white/30 transition-all whitespace-nowrap"
              >
                <span>Browse Talent & Work Roster</span>
              </button>
            </div>

            {/* Social Proof Line */}
            <div className="flex items-center gap-4 text-xs text-neutral-400 pt-2 border-t border-white/10">
              <div className="flex items-center gap-1.5 text-white font-medium">
                <ShieldCheck className="h-4 w-4 text-[#00D4FF]" />
                <span>$150 Refundable Deposit</span>
              </div>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>12-Month Managed Care</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>Direct with Founder Matt Hagen</span>
            </div>
          </div>

          {/* Right Column: Interactive Studio Mockup Carrier */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl border border-white/15 bg-[#0f0e1a] p-4 shadow-2xl overflow-hidden group">
              {/* Device switcher and controls header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-neutral-400">purepulse.one/live</span>
                </div>

                {/* Viewport switch controls */}
                <div className="flex items-center gap-1 p-0.5 rounded-md bg-white/5 border border-white/10">
                  <button
                    onClick={() => {
                      playPop(480);
                      setDeviceMode('desktop');
                    }}
                    title="Desktop mode"
                    className={`p-1.5 rounded ${deviceMode === 'desktop' ? 'bg-[#7B2FFF] text-white' : 'text-neutral-400 hover:text-white'}`}
                  >
                    <Monitor className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      playPop(510);
                      setDeviceMode('tablet');
                    }}
                    title="Tablet mode"
                    className={`p-1.5 rounded ${deviceMode === 'tablet' ? 'bg-[#7B2FFF] text-white' : 'text-neutral-400 hover:text-white'}`}
                  >
                    <Tablet className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      playPop(540);
                      setDeviceMode('mobile');
                    }}
                    title="Mobile mode"
                    className={`p-1.5 rounded ${deviceMode === 'mobile' ? 'bg-[#7B2FFF] text-white' : 'text-neutral-400 hover:text-white'}`}
                  >
                    <Smartphone className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Viewport container with animated width depending on selected device */}
              <div className="relative overflow-hidden rounded-xl bg-black/60 flex items-center justify-center min-h-[300px]">
                <div
                  className={`transition-all duration-300 relative overflow-hidden rounded-lg border border-white/10 ${
                    deviceMode === 'desktop'
                      ? 'w-full h-[290px]'
                      : deviceMode === 'tablet'
                      ? 'w-[75%] h-[290px]'
                      : 'w-[48%] h-[290px]'
                  }`}
                >
                  <img
                    src="/src/assets/images/purepulse_hero_interface_1792443306449.jpg"
                    alt="PurePulse Studio Interface"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback matching Section 3.E
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07070D] via-black/40 to-transparent flex flex-col justify-end p-4">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-white font-semibold">100/100 Lighthouse</span>
                      <span className="text-[#00D4FF]">TTFB: 38ms</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Vibe Theme Color Picker */}
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <Flame className="h-3.5 w-3.5 text-[#A066FF]" />
                  <span>Interactive Accent:</span>
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      playPop(420);
                      setHeroAccent('purple');
                    }}
                    className={`h-4 w-4 rounded-full bg-[#A066FF] transition-transform ${heroAccent === 'purple' ? 'ring-2 ring-white scale-125' : 'opacity-60 hover:opacity-100'}`}
                    aria-label="Pure Violet Theme"
                  />
                  <button
                    onClick={() => {
                      playPop(460);
                      setHeroAccent('cyan');
                    }}
                    className={`h-4 w-4 rounded-full bg-[#00D4FF] transition-transform ${heroAccent === 'cyan' ? 'ring-2 ring-white scale-125' : 'opacity-60 hover:opacity-100'}`}
                    aria-label="Cyber Cyan Theme"
                  />
                  <button
                    onClick={() => {
                      playPop(500);
                      setHeroAccent('emerald');
                    }}
                    className={`h-4 w-4 rounded-full bg-[#10B981] transition-transform ${heroAccent === 'emerald' ? 'ring-2 ring-white scale-125' : 'opacity-60 hover:opacity-100'}`}
                    aria-label="Neon Emerald Theme"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI strip in full-width row below hero split (Mandatory Checklist item #13) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-extrabold text-white font-display tabular-nums">100/100</span>
            <span className="text-xs text-neutral-400 mt-1">Lighthouse Performance Metric</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-extrabold text-[#A066FF] font-display tabular-nums">$150</span>
            <span className="text-xs text-neutral-400 mt-1">Flat Deposit To Launch</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-extrabold text-[#00D4FF] font-display tabular-nums">7–12 Days</span>
            <span className="text-xs text-neutral-400 mt-1">Average Turnaround Time</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl md:text-3xl font-extrabold text-white font-display tabular-nums">12 Months</span>
            <span className="text-xs text-neutral-400 mt-1">Zero-Stress Managed Care</span>
          </div>
        </div>
      </div>
    </section>
  );
};
