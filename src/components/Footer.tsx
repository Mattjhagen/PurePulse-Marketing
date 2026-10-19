import React from 'react';
import { ArrowUp, Github, Mail, Globe } from 'lucide-react';
import { playPop } from '../utils/audio';

export const Footer: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    playPop(480);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/10 bg-[#06060B] py-14 text-neutral-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <a
              href="#"
              onClick={() => playPop(500)}
              className="text-2xl font-bold tracking-tight text-white font-display block mb-2"
            >
              Pure<span className="text-[#A066FF]">Pulse</span>
            </a>
            <p className="text-xs text-neutral-400 max-w-md">
              Clean, fast, professional websites built to perform and built to last.
              Independent web design and development studio based in Omaha, NE.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <a
              href="https://github.com/Mattjhagen/PurePulse"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub Source</span>
            </a>
            <a
              href="mailto:matty@purepulse.one"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>matty@purepulse.one</span>
            </a>
            <a
              href="https://purepulse.one"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span>purepulse.one</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span>© 2026 PurePulse Studio</span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>$150 Deposit Launchpad</span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>All Rights Reserved</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
