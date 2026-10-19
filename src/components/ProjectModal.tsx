import React, { useEffect } from 'react';
import { X, ExternalLink, Gauge, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { Project } from '../data/projectsData';
import { playPop } from '../utils/audio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectForProposal: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectForProposal,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/20 bg-[#0c0c16] text-[#F4F4FF] shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playPop(400);
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Top Metadata */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400 font-mono uppercase tracking-wider mb-3">
          <span className="text-[#00D4FF] font-semibold">{project.category}</span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span>{project.turnaroundTime} Build Cycle</span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span className="text-emerald-400 font-semibold">{project.performanceScore}/100 Lighthouse</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-display mb-2">
          {project.name}
        </h2>
        <p className="text-sm sm:text-base text-neutral-300 mb-6">
          {project.kicker}
        </p>

        {/* Simulated Browser Frame */}
        <div className="relative rounded-xl border border-white/15 bg-black/60 overflow-hidden mb-6">
          <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/10 text-xs">
            <div className="flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-3 font-mono text-neutral-300">https://{project.domain}</span>
            </div>
            <a
              href={`https://${project.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#00D4FF] hover:underline"
            >
              <span>Visit live</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="relative aspect-video w-full overflow-hidden bg-[#07070D]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* Fallback container with styled visual */}
            <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center bg-gradient-to-br from-[#121124] to-[#07070D] p-6 text-center">
              <span className="text-3xl font-extrabold text-white font-display mb-2">{project.name}</span>
              <span className="text-xs font-mono text-[#00D4FF]">{project.domain}</span>
            </div>
          </div>
        </div>

        {/* Deep Dive Metrics & Client Story */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2 text-xs text-neutral-400 mb-1">
              <Gauge className="h-4 w-4 text-[#A066FF]" />
              <span>Core Impact</span>
            </div>
            <div className="text-2xl font-extrabold text-white font-display tabular-nums">
              {project.highlightMetric}
            </div>
            <div className="text-xs text-neutral-400 mt-0.5">{project.metricLabel}</div>
          </div>

          <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2 text-xs text-neutral-400 mb-1">
              <Clock className="h-4 w-4 text-[#00D4FF]" />
              <span>Turnaround Speed</span>
            </div>
            <div className="text-2xl font-extrabold text-white font-display tabular-nums">
              {project.turnaroundTime}
            </div>
            <div className="text-xs text-neutral-400 mt-0.5">Kickoff to production launch</div>
          </div>

          <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2 text-xs text-neutral-400 mb-1">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Lighthouse Score</span>
            </div>
            <div className="text-2xl font-extrabold text-emerald-400 font-display tabular-nums">
              {project.performanceScore}/100
            </div>
            <div className="text-xs text-neutral-400 mt-0.5">Zero bloat benchmark</div>
          </div>
        </div>

        {/* Description & Tech Stack */}
        <div className="space-y-4 mb-8">
          <div>
            <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-1">
              Architecture & Strategy
            </h4>
            <p className="text-sm text-neutral-200 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-1">
              The Client Challenge
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {project.clientStory}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase text-neutral-400 tracking-wider mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-300">
              {project.techStack.map((tech, i) => (
                <span key={tech} className="flex items-center gap-2 font-mono">
                  <span>{tech}</span>
                  {i < project.techStack.length - 1 && <span className="text-white/20">·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <a
            href={`https://${project.domain}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Open live website in new tab</span>
          </a>

          <button
            onClick={() => {
              playPop(660);
              onSelectForProposal(project);
            }}
            className="flex items-center gap-2 rounded-lg bg-[#7B2FFF] px-6 py-3 text-xs font-semibold text-white hover:bg-[#6824db] shadow-[0_0_25px_rgba(123,47,255,0.4)] transition-all whitespace-nowrap"
          >
            <Sparkles className="h-4 w-4" />
            <span>Build Mine Like This ($150 Deposit)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
