/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { RosterSection } from './components/RosterSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { InteractiveStudio } from './components/InteractiveStudio';
import { PricingCalculator } from './components/PricingCalculator';
import { FounderSection } from './components/FounderSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './data/projectsData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedPlan, setPreselectedPlan] = useState<string>('Growth');
  const [preselectedProjectName, setPreselectedProjectName] = useState<string>('');

  const handleOpenBooking = (plan = 'Growth', projectName = '') => {
    setPreselectedPlan(plan);
    setPreselectedProjectName(projectName);
    setIsBookingOpen(true);
  };

  const handleLaunchMineFromProject = (project: Project) => {
    setPreselectedProjectName(project.name);
    setIsBookingOpen(true);
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07070D] text-[#F4F4FF] selection:bg-[#7B2FFF]/30 selection:text-[#00D4FF]">
      {/* 3-Zone Top Bar Contract */}
      <Header onOpenBooking={() => handleOpenBooking('Growth')} />

      {/* Hero Section */}
      <Hero
        onOpenBooking={() => handleOpenBooking('Growth')}
        onExploreRoster={() => handleScrollToSection('roster')}
      />

      {/* Live Marquee Ticker */}
      <Marquee />

      {/* Night.co-Style Talent & Digital Work Roster */}
      <RosterSection
        onSelectProject={(project) => setSelectedProject(project)}
        onLaunchMine={handleLaunchMineFromProject}
      />

      {/* Capabilities Panel Showcase */}
      <CapabilitiesSection onOpenBooking={() => handleOpenBooking('Growth')} />

      {/* Interactive Speed & Responsive Studio Lab */}
      <InteractiveStudio onOpenBooking={() => handleOpenBooking('Growth')} />

      {/* Pricing Calculator with $150 Deposit & Booking Modal */}
      <PricingCalculator
        isOpenBookingModal={isBookingOpen}
        onCloseBookingModal={() => setIsBookingOpen(false)}
        preselectedPlan={preselectedPlan}
        preselectedProjectName={preselectedProjectName}
      />

      {/* Direct Human Service & FAQ */}
      <FounderSection onOpenBooking={() => handleOpenBooking('Growth')} />

      {/* Quiet Footer */}
      <Footer onOpenBooking={() => handleOpenBooking('Growth')} />

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectForProposal={(proj) => {
          setSelectedProject(null);
          handleLaunchMineFromProject(proj);
        }}
      />
    </div>
  );
}
