import React, { useState } from 'react';
import { CAPABILITIES_DATA, Capability } from '../data/capabilitiesData';
import { CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { playPop } from '../utils/audio';

interface CapabilitiesSectionProps {
  onOpenBooking: () => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onOpenBooking }) => {
  const [selectedCap, setSelectedCap] = useState<Capability>(CAPABILITIES_DATA[0]);

  return (
    <section id="capabilities" className="py-20 lg:py-28 border-b border-white/5 bg-[#090812]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-widest text-[#A066FF] mb-3">
            PurePulse Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight text-balance">
            The studio engine behind the speed.
          </h2>
          <p className="mt-3 text-base text-neutral-400 max-w-2xl">
            We don&apos;t just build static templates. We engineer high-velocity digital brands designed to dominate search rankings, turn casual visitors into paying clients, and scale effortlessly.
          </p>
        </div>

        {/* 2-Column Split: Capabilities Selection List & Interactive Spotlight Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Numbered Service Panel List (Rule 1.B clean human editorial numbering) */}
          <div className="lg:col-span-6 space-y-3">
            {CAPABILITIES_DATA.map((cap) => {
              const isSelected = selectedCap.id === cap.id;
              return (
                <div
                  key={cap.id}
                  onClick={() => {
                    playPop(500);
                    setSelectedCap(cap);
                  }}
                  className={`group cursor-pointer rounded-xl border p-5 transition-all duration-200 ${
                    isSelected
                      ? 'border-[#7B2FFF] bg-[#121024] shadow-[0_4px_24px_rgba(123,47,255,0.2)]'
                      : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Editorial human numbering */}
                      <span className={`text-sm font-mono font-bold ${isSelected ? 'text-[#00D4FF]' : 'text-neutral-500'}`}>
                        {cap.number}.
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white font-display">
                        {cap.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
                        {cap.badge}
                      </span>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${
                          isSelected ? 'rotate-90 text-[#00D4FF]' : 'text-neutral-500 group-hover:translate-x-1'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Inline preview snippet on mobile or preview */}
                  <p className="mt-2 text-xs text-neutral-400 line-clamp-2 pl-9">
                    {cap.headline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep-dive Spotlight Card */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="rounded-2xl border border-white/15 bg-[#0f0d20] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#7B2FFF]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Number and Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-mono uppercase text-[#00D4FF] font-semibold tracking-wider">
                  Capability {selectedCap.number} · {selectedCap.badge}
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  Standard Architecture
                </span>
              </div>

              {/* Headline & Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-3">
                {selectedCap.headline}
              </h3>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                {selectedCap.description}
              </p>

              {/* Highlight Metric Callout */}
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 mb-6 flex items-center justify-between">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums">
                    {selectedCap.metric}
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">{selectedCap.metricSub}</div>
                </div>
                <div className="h-10 w-10 rounded-lg bg-[#7B2FFF]/20 border border-[#7B2FFF]/40 flex items-center justify-center text-[#00D4FF]">
                  <Zap className="h-5 w-5" />
                </div>
              </div>

              {/* Outcomes List */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-mono uppercase text-neutral-400 tracking-wider">
                  Deliverables & Standards
                </div>
                {selectedCap.outcomes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                    <CheckCircle2 className="h-4 w-4 text-[#00D4FF] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Direct Action */}
              <button
                onClick={() => {
                  playPop(650);
                  onOpenBooking();
                }}
                className="w-full rounded-lg bg-[#7B2FFF] py-3 text-xs font-semibold text-white hover:bg-[#6e22e6] shadow-[0_0_20px_rgba(123,47,255,0.4)] transition-all flex items-center justify-center gap-2"
              >
                <span>Request Custom Build with {selectedCap.title}</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
