import React, { useState } from 'react';
import { Play, RotateCcw, Check, Monitor, Smartphone, Tablet, Cpu, ArrowUpRight } from 'lucide-react';
import { playPop, playSuccessChime } from '../utils/audio';

export const InteractiveStudio: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [testDomain, setTestDomain] = useState('p3lending.space');
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditComplete, setAuditComplete] = useState(true);
  const [activeFrame, setActiveFrame] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const [scores, setScores] = useState({
    performance: 100,
    accessibility: 100,
    bestPractices: 100,
    seo: 100,
    fcp: '0.3s',
    cls: '0.00',
    tbt: '0ms',
  });

  const handleRunAudit = () => {
    playPop(480);
    setIsAuditing(true);
    setAuditComplete(false);

    // Simulate real diagnostic benchmarks
    setTimeout(() => {
      setScores({
        performance: 100,
        accessibility: 100,
        bestPractices: 100,
        seo: 100,
        fcp: `${(0.25 + Math.random() * 0.15).toFixed(2)}s`,
        cls: '0.00',
        tbt: '0ms',
      });
      setIsAuditing(false);
      setAuditComplete(true);
      playSuccessChime();
    }, 900);
  };

  return (
    <section id="studio" className="py-20 lg:py-28 border-b border-white/5 bg-[#07070D]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#00D4FF] mb-3">
            Interactive Studio Lab
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight text-balance">
            Test the pure pulse.
          </h2>
          <p className="mt-3 text-base text-neutral-400 max-w-2xl">
            See how clean engineering destroys slow websites. Run a simulated Lighthouse audit or test responsiveness across live simulated devices.
          </p>
        </div>

        {/* Studio Sandbox Container */}
        <div className="rounded-2xl border border-white/15 bg-[#0b0a16] p-6 lg:p-8 shadow-2xl">
          {/* Top Control Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            {/* Domain Picker & Test Input */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-neutral-400">Target Site:</span>
              <div className="flex items-center gap-1.5 p-1 rounded-lg bg-white/5 border border-white/10">
                {['p3lending.space', 'rootedapp.space', 'velour.live', 'fuelshield.xyz'].map((dom) => (
                  <button
                    key={dom}
                    onClick={() => {
                      playPop(520);
                      setTestDomain(dom);
                      handleRunAudit();
                    }}
                    className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                      testDomain === dom
                        ? 'bg-[#7B2FFF] text-white font-semibold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {dom}
                  </button>
                ))}
              </div>
            </div>

            {/* Run Audit Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleRunAudit}
                disabled={isAuditing}
                className="flex items-center gap-2 rounded-lg bg-[#00D4FF] px-5 py-2 text-xs font-bold text-black hover:bg-[#4de1ff] disabled:opacity-50 transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)] whitespace-nowrap"
              >
                {isAuditing ? (
                  <>
                    <RotateCcw className="h-3.5 w-3.5 animate-spin" />
                    <span>Auditing Core Web Vitals...</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>Run Speed Benchmark</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Audit Metrics Dashboard */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-white/10">
            <div className="flex flex-col p-4 rounded-xl border border-white/5 bg-white/[0.02]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-neutral-400">Performance</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <span className="text-3xl font-extrabold text-emerald-400 font-display tabular-nums">
                {scores.performance}
              </span>
              <span className="text-[11px] font-mono text-neutral-500 mt-1">First Byte: 38ms</span>
            </div>

            <div className="flex flex-col p-4 rounded-xl border border-white/5 bg-white/[0.02]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-neutral-400">Accessibility</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <span className="text-3xl font-extrabold text-emerald-400 font-display tabular-nums">
                {scores.accessibility}
              </span>
              <span className="text-[11px] font-mono text-neutral-500 mt-1">WCAG AA Compliant</span>
            </div>

            <div className="flex flex-col p-4 rounded-xl border border-white/5 bg-white/[0.02]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-neutral-400">Best Practices</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <span className="text-3xl font-extrabold text-emerald-400 font-display tabular-nums">
                {scores.bestPractices}
              </span>
              <span className="text-[11px] font-mono text-neutral-500 mt-1">Zero Console Errors</span>
            </div>

            <div className="flex flex-col p-4 rounded-xl border border-white/5 bg-white/[0.02]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-neutral-400">SEO & Schema</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <span className="text-3xl font-extrabold text-emerald-400 font-display tabular-nums">
                {scores.seo}
              </span>
              <span className="text-[11px] font-mono text-neutral-500 mt-1">Semantic JSON-LD</span>
            </div>
          </div>

          {/* Web Vitals Diagnostic Strip */}
          <div className="py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-6">
              <span>
                FCP: <strong className="text-white tabular-nums">{scores.fcp}</strong>
              </span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>
                CLS: <strong className="text-white tabular-nums">{scores.cls}</strong>
              </span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>
                TBT: <strong className="text-white tabular-nums">{scores.tbt}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <Check className="h-3.5 w-3.5" />
              <span>Passes all Google Core Web Vitals thresholds</span>
            </div>
          </div>

          {/* Device Responsive Frame Previewer */}
          <div className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                <Cpu className="h-4 w-4 text-[#A066FF]" />
                <span>Simulated Render Engine ({testDomain})</span>
              </div>

              <div className="flex items-center gap-1 p-1 rounded-lg bg-white/5 border border-white/10">
                <button
                  onClick={() => {
                    playPop(480);
                    setActiveFrame('desktop');
                  }}
                  className={`px-3 py-1 text-xs rounded flex items-center gap-1.5 transition-colors ${
                    activeFrame === 'desktop' ? 'bg-[#7B2FFF] text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Monitor className="h-3.5 w-3.5" />
                  <span>Desktop (1440px)</span>
                </button>
                <button
                  onClick={() => {
                    playPop(510);
                    setActiveFrame('tablet');
                  }}
                  className={`px-3 py-1 text-xs rounded flex items-center gap-1.5 transition-colors ${
                    activeFrame === 'tablet' ? 'bg-[#7B2FFF] text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Tablet className="h-3.5 w-3.5" />
                  <span>Tablet (768px)</span>
                </button>
                <button
                  onClick={() => {
                    playPop(540);
                    setActiveFrame('mobile');
                  }}
                  className={`px-3 py-1 text-xs rounded flex items-center gap-1.5 transition-colors ${
                    activeFrame === 'mobile' ? 'bg-[#7B2FFF] text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="h-3.5 w-3.5" />
                  <span>Mobile (375px)</span>
                </button>
              </div>
            </div>

            {/* Frame Viewport */}
            <div className="w-full bg-[#050508] rounded-xl border border-white/10 p-4 sm:p-6 flex items-center justify-center min-h-[360px] overflow-hidden">
              <div
                className={`transition-all duration-300 rounded-lg border border-white/15 bg-[#090814] overflow-hidden shadow-2xl ${
                  activeFrame === 'desktop'
                    ? 'w-full max-w-4xl h-[320px]'
                    : activeFrame === 'tablet'
                    ? 'w-[75%] max-w-lg h-[320px]'
                    : 'w-[45%] max-w-xs h-[340px]'
                }`}
              >
                {/* Simulated Browser Chrome */}
                <div className="px-3 py-2 bg-white/5 border-b border-white/10 flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-rose-500/80" />
                    <div className="h-2 w-2 rounded-full bg-amber-500/80" />
                    <div className="h-2 w-2 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-neutral-400">https://{testDomain}</span>
                  </div>
                  <span className="text-emerald-400">SSL Active</span>
                </div>

                {/* Simulated Content inside Viewport */}
                <div className="p-6 flex flex-col justify-center items-center text-center h-[calc(100%-35px)] bg-gradient-to-b from-[#0c0c16] to-[#07070D]">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#00D4FF] mb-2">
                    Engineered by PurePulse
                  </span>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white font-display mb-2">
                    {testDomain}
                  </h4>
                  <p className="text-xs text-neutral-300 max-w-md mb-4">
                    Optimized for instant paint, fluid touch physics, and maximum conversion rates.
                  </p>
                  <button
                    onClick={() => {
                      playPop(620);
                      onOpenBooking();
                    }}
                    className="flex items-center gap-1.5 rounded-lg bg-[#7B2FFF] px-4 py-2 text-xs font-semibold text-white hover:bg-[#6824db] transition-colors"
                  >
                    <span>Deploy Site at This Speed</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
