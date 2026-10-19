import React, { useState } from 'react';
import { Mail, MapPin, Code2, HeartHandshake, ChevronDown, Check } from 'lucide-react';
import { playPop } from '../utils/audio';

const FAQS = [
  {
    q: 'How does the $150 deposit work?',
    a: 'You pay just $150 upfront to kick off the design and build sprint. We build your initial functional site, review it together, and once you approve, your chosen monthly plan ($20, $50, or $75/mo) begins upon launch. If you decide not to launch before final signoff, the deposit is 100% refundable.',
  },
  {
    q: 'Why are PurePulse websites faster than WordPress or Wix?',
    a: 'WordPress and visual website builders inject hundreds of redundant plugin scripts, render-blocking CSS, and heavy database lookups. PurePulse sites are custom-built with React, TypeScript, and edge-cached HTML/CSS, achieving 100/100 Google Lighthouse scores and sub-second cold load times.',
  },
  {
    q: 'What is included in the monthly maintenance plan?',
    a: 'High-speed cloud hosting, continuous SSL certificates, domain management, security patching, and regular copy or visual updates. When you need text changed, a new project added, or a photo swapped, you email Matt directly and it gets done within 24–48 hours.',
  },
  {
    q: 'Can I connect my own custom domain?',
    a: 'Yes, absolutely. We handle all DNS records, SSL encryption, and email MX routing configuration for your custom domain at no extra charge.',
  },
];

export const FounderSection: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="founder" className="py-20 lg:py-28 border-b border-white/5 bg-[#07070D]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Founder Bio & Direct Connection */}
          <div className="lg:col-span-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#00D4FF] mb-3">
              Direct Human Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight text-balance mb-6">
              You work directly with the builder.
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6">
              PurePulse was founded on a simple conviction: small businesses, founders, and creators shouldn&apos;t have to choose between a slow $20/mo template builder or a bloated $30,000 agency retainer.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed mb-8">
              When you launch with PurePulse, you talk directly with me — Matt Hagen. Every line of code, performance optimization, and responsive breakpoint is hand-crafted with precision. No project managers playing telephone. No junior developers learning on your dime.
            </p>

            {/* Founder Trust Badges */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-200">
                <div className="h-6 w-6 rounded-md bg-[#7B2FFF]/20 border border-[#7B2FFF]/40 flex items-center justify-center text-[#A066FF] shrink-0">
                  <Code2 className="h-3.5 w-3.5" />
                </div>
                <span>Modern React 19, TypeScript, and Tailwind v4 Architecture</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-200">
                <div className="h-6 w-6 rounded-md bg-[#00D4FF]/20 border border-[#00D4FF]/40 flex items-center justify-center text-[#00D4FF] shrink-0">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <span>Based in Omaha, Nebraska · Serving clients worldwide</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-200">
                <div className="h-6 w-6 rounded-md bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <HeartHandshake className="h-3.5 w-3.5" />
                </div>
                <span>Direct email: <strong className="text-white">matty@purepulse.one</strong></span>
              </div>
            </div>

            <button
              onClick={() => {
                playPop(620);
                onOpenBooking();
              }}
              className="rounded-lg bg-[#7B2FFF] px-7 py-3.5 text-xs font-semibold text-white hover:bg-[#6824db] shadow-[0_0_24px_rgba(123,47,255,0.4)] transition-all inline-flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              <span>Talk with Matt & Launch Site</span>
            </button>
          </div>

          {/* Interactive FAQ Accordion */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-4">
              Frequently Asked Questions
            </div>
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-white/10 bg-[#0c0c16] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => {
                      playPop(480);
                      setOpenFaq(isOpen ? null : index);
                    }}
                    className="w-full flex items-center justify-between p-5 text-left text-sm font-semibold text-white hover:text-[#00D4FF] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-neutral-400 transition-transform ${
                        isOpen ? 'rotate-180 text-[#00D4FF]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-neutral-300 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
