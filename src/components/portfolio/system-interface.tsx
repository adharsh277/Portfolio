"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import { AiAssistant } from "@/components/portfolio/ai-assistant";
import { BootLoader } from "@/components/portfolio/boot-loader";
import { ContactSection } from "@/components/portfolio/contact-section";
import { DevopsSimulationPanel } from "@/components/portfolio/devops-simulation-panel";
import { ExperienceTimeline } from "@/components/portfolio/experience-timeline";
import { HeroCore } from "@/components/portfolio/hero-core";
import { IdentityPanel } from "@/components/portfolio/identity-panel";
import { InfiniteScrollStream } from "@/components/portfolio/infinite-scroll-stream";
import { InfrastructureMap } from "@/components/portfolio/infrastructure-map";
import { Navigation } from "@/components/portfolio/navigation";
import { ProjectSystems } from "@/components/portfolio/project-systems";
import { BlogsShowcase } from "@/components/portfolio/blogs-showcase";
import { RecognizedSection } from "@/components/portfolio/recognized-section";
import { SkillsNeuralGraph } from "@/components/portfolio/skills-neural-graph";
import { SystemFooter } from "@/components/portfolio/system-footer";
import { TerminalInterface } from "@/components/portfolio/terminal-interface";
import { TestimonialsSection } from "@/components/portfolio/testimonials-section";
import { ClusterBootSequence } from "@/components/portfolio/cluster-boot-sequence";
import { IncidentSimulationPanel } from "@/components/portfolio/incident-simulation-panel";
import {
  isSoundEnabled,
  playUiClick,
  playClusterEnterSound,
  setSoundEnabled,
  startBootAmbience,
  startCalmAmbience,
  stopBootAmbience,
  stopCalmAmbience,
} from "@/lib/sound";

export function SystemInterface() {
  const [bootReady, setBootReady] = useState(false);
  const [entered, setEntered] = useState(false);
  const [showClusterBoot, setShowClusterBoot] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.localStorage.getItem("theme-mode") !== "light";
  });
  const [soundEnabled, setSoundEnabledState] = useState(() => {
    if (typeof window === "undefined") return true;
    return isSoundEnabled();
  });

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    const timer = setTimeout(() => setBootReady(true), 2600);
    return () => clearTimeout(timer);
  }, [isDark]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.86,
      touchMultiplier: 1.1,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (!entered) {
      stopCalmAmbience();
      startBootAmbience();
      return () => stopBootAmbience();
    }

    stopBootAmbience();
    if (soundEnabled) {
      startCalmAmbience();
    } else {
      stopCalmAmbience();
    }
    return () => stopCalmAmbience();
  }, [entered, soundEnabled]);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabledState(next);
    setSoundEnabled(next);
    if (next) {
      playUiClick();
      startCalmAmbience();
    } else {
      stopCalmAmbience();
    }
  };

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.dataset.theme = next ? "dark" : "light";
      window.localStorage.setItem("theme-mode", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <div className="relative min-h-screen bg-[color:var(--bg-base)] text-[color:var(--text-main)]">
      <BootLoader
        ready={bootReady}
        onEnter={() => {
          stopBootAmbience();
          if (soundEnabled) {
            playClusterEnterSound();
            startCalmAmbience();
          }
          playUiClick();
          setShowClusterBoot(true);
          setTimeout(() => setEntered(true), 3400); // Wait for boot sequence
        }}
      />

      <AnimatePresence>
        {!entered && !showClusterBoot && (
          <motion.div key="core" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.55 }}>
            <HeroCore />
          </motion.div>
        )}
      </AnimatePresence>
      {showClusterBoot && !entered && (
        <ClusterBootSequence onComplete={() => {}} />
      )}
      {entered && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Navigation isDark={isDark} onThemeToggle={toggleTheme} soundEnabled={soundEnabled} onSoundToggle={toggleSound} />
          <main className="relative z-10 mx-auto mt-8 flex w-[min(94%,1300px)] flex-col gap-7 pb-14">
            <IdentityPanel />
            <RecognizedSection />
            <InfrastructureMap />
            <IncidentSimulationPanel />
            <ProjectSystems />
            <ExperienceTimeline />
            <div className="grid gap-7 lg:grid-cols-2">
              <TerminalInterface />
              <SkillsNeuralGraph />
            </div>
            <BlogsShowcase />
            <TestimonialsSection />
            <InfiniteScrollStream />
            <ContactSection />
            <SystemFooter />
          </main>
          <AiAssistant />
        </motion.div>
      )}
    </div>
  );
}
