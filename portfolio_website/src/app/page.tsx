"use client";

import { useState, useCallback } from "react";

// Core
import { GrainOverlay } from "@/components/core/GrainOverlay";
import { CustomCursor } from "@/components/core/CustomCursor";
import { InteractiveWavesBackground } from "@/components/core/InteractiveWavesBackground";
import { PageLoader } from "@/components/core/PageLoader";
import { CircularNav } from "@/components/core/CircularNav";
import { SectionProgress } from "@/components/core/SectionProgress";

// Layout
import { Header } from "@/components/layout/Header";
import { SectionContainer } from "@/components/layout/SectionContainer";

// Sections
import { HeroSection } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/About";
import { WorkSection } from "@/components/sections/Projects";
import { ContactSection } from "@/components/sections/Contact";

const TOTAL_SECTIONS = 4;

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const handleLoaderComplete = useCallback(() => setLoaded(true), []);
  const handleNavigate = useCallback((index: number) => setCurrentSection(index), []);

  return (
    <>
      {/* Grain texture */}
      <GrainOverlay />

      {/* Custom magnetic cursor */}
      <CustomCursor />

      {/* Background interactive waves */}
      <InteractiveWavesBackground />

      {/* Page loader — renders until loaded */}
      {!loaded && <PageLoader onComplete={handleLoaderComplete} />}

      {/* Main app — visible after loader */}
      {loaded && (
        <>
          {/* Fixed header */}
          <Header onMenuOpen={() => setNavOpen(true)} />

          {/* Circular nav overlay */}
          <CircularNav
            isOpen={navOpen}
            onClose={() => setNavOpen(false)}
            onNavigate={handleNavigate}
            currentSection={currentSection}
          />

          {/* Section progress indicator */}
          <SectionProgress current={currentSection} total={TOTAL_SECTIONS} />

          {/* Main section transition container */}
          <SectionContainer
            currentIndex={currentSection}
            onIndexChange={setCurrentSection}
          >
            <HeroSection onNext={() => setCurrentSection(1)} />
            <AboutSection />
            <WorkSection />
            <ContactSection />
          </SectionContainer>
        </>
      )}
    </>
  );
}
