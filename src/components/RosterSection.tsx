import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { Project, PROJECTS_DATA, CATEGORIES } from '../data/projectsData';
import { playPop } from '../utils/audio';

interface RosterSectionProps {
  onSelectProject: (project: Project) => void;
  onLaunchMine: (project: Project) => void;
}

export const RosterSection: React.FC<RosterSectionProps> = ({
  onSelectProject,
  onLaunchMine,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Projects');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((proj) => {
      const matchesCategory =
        activeCategory === 'All Projects' || proj.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        proj.name.toLowerCase().includes(q) ||
        proj.domain.toLowerCase().includes(q) ||
        proj.kicker.toLowerCase().includes(q) ||
        proj.description.toLowerCase().includes(q) ||
        proj.techStack.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="roster" className="py-20 lg:py-28 border-b border-white/5 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#00D4FF] mb-3">
              The Digital Roster
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display text-balance tracking-tight">
              Websites we&apos;ve crafted.
            </h2>
            <p className="mt-3 text-base text-neutral-400 max-w-xl">
              Modeled after the world&apos;s leading digital talent agencies.
              Every project is hand-engineered for maximum speed, bold identity, and conversion instinct.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-neutral-400">
              Showing <span className="text-white font-semibold tabular-nums">{filteredProjects.length}</span> of <span className="text-white font-semibold tabular-nums">{PROJECTS_DATA.length}</span> Sites
            </span>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Category Tabs (Segmented interactive buttons) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    playPop(520);
                    setActiveCategory(cat);
                  }}
                  className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#7B2FFF] text-white shadow-[0_0_16px_rgba(123,47,255,0.4)]'
                      : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px] lg:max-w-xs w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search domain, stack, or name..."
              className="w-full rounded-lg border border-white/10 bg-white/5 pl-9 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#7B2FFF] focus:ring-1 focus:ring-[#7B2FFF] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-neutral-400 hover:text-white"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>

        {/* Roster Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 rounded-2xl border border-dashed border-white/15 bg-white/[0.01]">
            <p className="text-base text-neutral-400 mb-2">No projects match your filter criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('All Projects');
                setSearchQuery('');
              }}
              className="text-xs font-mono text-[#00D4FF] hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0c0c16] hover:border-white/25 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] overflow-hidden"
              >
                {/* Visual Header / Mockup Preview */}
                <div>
                  <div className="relative aspect-video w-full overflow-hidden bg-black/60 border-b border-white/10">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    {/* Fallback styling container */}
                    <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center bg-[#131222] p-4 text-center">
                      <span className="text-lg font-bold font-display text-white">{project.name}</span>
                      <span className="text-xs font-mono text-[#00D4FF] mt-1">{project.domain}</span>
                    </div>

                    {/* Top Browser Bar Overlay */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-mono text-neutral-300">
                        <span className="text-[#00D4FF]">{project.domain}</span>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-mono text-emerald-400 tabular-nums">
                        <span>{project.performanceScore}</span>
                        <span className="text-white/40">/100</span>
                      </div>
                    </div>

                    {/* Hover quick inspect overlay button */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4 backdrop-blur-xs">
                      <button
                        onClick={() => {
                          playPop(580);
                          onSelectProject(project);
                        }}
                        className="rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-neutral-200 transition-colors shadow-lg"
                      >
                        Inspect Architecture
                      </button>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    {/* Unboxed Metadata (Rule 1.A) */}
                    <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono mb-2">
                      <span className="text-[#A066FF]">{project.category}</span>
                      <span aria-hidden="true" className="text-white/20">·</span>
                      <span>{project.turnaroundTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white font-display tracking-tight mb-1.5">
                      {project.name}
                    </h3>
                    <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Metric Highlight Box */}
                    <div className="flex items-baseline justify-between p-3 rounded-lg border border-white/5 bg-white/[0.02] mb-4">
                      <span className="text-xs text-neutral-400">{project.metricLabel}</span>
                      <span className="text-lg font-extrabold text-white font-display tabular-nums">
                        {project.highlightMetric}
                      </span>
                    </div>

                    {/* Unboxed Tech Stack Line (Rule 1.A) */}
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-neutral-400">
                      {project.techStack.map((tech, i) => (
                        <span key={tech} className="flex items-center gap-1.5">
                          <span>{tech}</span>
                          {i < project.techStack.length - 1 && <span className="text-white/20">·</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="px-6 py-3.5 border-t border-white/5 bg-white/[0.01] flex items-center justify-between text-xs">
                  <button
                    onClick={() => {
                      playPop(540);
                      onSelectProject(project);
                    }}
                    className="flex items-center gap-1 text-neutral-300 hover:text-white transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>

                  <button
                    onClick={() => {
                      playPop(620);
                      onLaunchMine(project);
                    }}
                    className="flex items-center gap-1 text-[#00D4FF] hover:text-[#53e1ff] font-semibold transition-colors"
                  >
                    <Sparkles className="h-3 w-3" />
                    <span>Build Like This</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
