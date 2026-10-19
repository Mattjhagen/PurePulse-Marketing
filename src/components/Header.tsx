import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { toggleSound, isSoundEnabled, playPop } from '../utils/audio';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [soundOn, setSoundOn] = useState(isSoundEnabled());

  const handleToggleSound = () => {
    const nextState = toggleSound();
    setSoundOn(nextState);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#07070D]/85 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-8 px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark (Single text element, no subtitle clutter) */}
        <a
          href="#"
          onClick={() => playPop(500)}
          className="group flex items-center text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 transition-opacity hover:opacity-90 font-display"
        >
          Pure<span className="text-[#A066FF] transition-colors group-hover:text-[#00D4FF]">Pulse</span>
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <a
            href="#roster"
            onClick={() => playPop(480)}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Roster
          </a>
          <a
            href="#capabilities"
            onClick={() => playPop(510)}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Capabilities
          </a>
          <a
            href="#studio"
            onClick={() => playPop(540)}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Studio Lab
          </a>
          <a
            href="#pricing"
            onClick={() => playPop(570)}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Pricing
          </a>
          <a
            href="#founder"
            onClick={() => playPop(600)}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Direct Service
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action (+ sound toggle affordance) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleToggleSound}
            aria-label={soundOn ? 'Mute sound effects' : 'Enable sound effects'}
            title={soundOn ? 'Sound effects enabled' : 'Sound muted'}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            {soundOn ? <Volume2 className="h-4 w-4 text-[#00D4FF]" /> : <VolumeX className="h-4 w-4 text-neutral-500" />}
          </button>
          
          <button
            onClick={() => {
              playPop(620);
              onOpenBooking();
            }}
            className="flex items-center gap-2 rounded-lg bg-[#7B2FFF] px-5 py-2.5 text-xs font-semibold tracking-wide text-white hover:bg-[#6824db] shadow-[0_0_24px_rgba(123,47,255,0.4)] hover:shadow-[0_0_36px_rgba(123,47,255,0.7)] transition-all whitespace-nowrap shrink-0"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Launch for $150</span>
          </button>
        </div>
      </div>
    </header>
  );
};
