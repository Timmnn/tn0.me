"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useI18n } from "@/i18n";
import { AppFrame } from "@/components/AppFrame";
import { NavBar } from "@/components/NavBar";
import { SkillsSection } from "@/components/IndexPage/SkillsSection";
import { HeroSection } from "@/components/IndexPage/HeroSection";
import { AboutSection } from "@/components/IndexPage/AboutSection";
import { ProjectsSection } from "@/components/IndexPage/ProjectsSection";

const Page = () => {
  const [activeSection, setActiveSection] = useState("home");

  const { t, language } = useI18n();

  const sections = useMemo(
    () => [
      {
        name: t.nav.home,
        content: <HeroSection />,
        id: "home",
      },
      {
        name: t.nav.about,
        id: "about",
        content: <AboutSection />,
      },
      { content: <SkillsSection key={0} />, name: t.nav.skills, id: "skills" },
      {
        name: t.nav.projects,
        id: "projects",
        content: <ProjectsSection />,
      },
    ],
    [t.nav.home, t.nav.about, t.nav.projects, t.nav.skills],
  );

  // Improved intersection observer implementation with useCallback
  const setupIntersectionObserver = useCallback(() => {
    let currentActive = activeSection;
    let timeoutId: NodeJS.Timeout;

    // Function to calculate visibility percentage of element in viewport
    const getVisibilityPercentage = (element: Element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate visible height
      const visibleTop = Math.max(0, rect.top);
      const visibleBottom = Math.min(windowHeight, rect.bottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);

      // Calculate percentage based on element or viewport size
      if (rect.height <= windowHeight) {
        return (visibleHeight / rect.height) * 100;
      } else {
        return (visibleHeight / windowHeight) * 100;
      }
    };

    // Throttled scroll handler for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let maxVisibility = 0;
          let mostVisibleSection: string | null = null;

          // Check all sections
          sections.forEach((section) => {
            const sectionEl = document.getElementById(section.id);

            if (sectionEl) {
              const visibilityScore = getVisibilityPercentage(sectionEl);

              // Special case: give bonus to section at top of page when scrolling
              const rect = sectionEl.getBoundingClientRect();
              const isAtTop = rect.top <= 0 && rect.bottom > window.innerHeight;
              const topBonus = isAtTop ? 10 : 0;

              if (visibilityScore + topBonus > maxVisibility) {
                maxVisibility = visibilityScore + topBonus;
                mostVisibleSection = section.id;
              }
            }
          });

          // Update active section with debounce
          if (mostVisibleSection && mostVisibleSection !== currentActive) {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
              setActiveSection(mostVisibleSection!);
              currentActive = mostVisibleSection!;
            }, 100);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    // Initialize IntersectionObserver for performance optimization
    const observer = new IntersectionObserver(
      () => {
        handleScroll();
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1.0],
        rootMargin: "-10% 0px -10% 0px", // Add margin to trigger earlier/later
      },
    );

    // Set up observers
    sections.forEach((section) => {
      const sectionEl = document.getElementById(section.id);
      if (sectionEl) observer.observe(sectionEl);
    });

    // Add scroll listener for continuous tracking
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [sections, activeSection]);

  // Set up the intersection observer
  useEffect(() => {
    return setupIntersectionObserver();
  }, [setupIntersectionObserver, language]);

  // Smooth scroll implementation for navigation

  return (
    <AppFrame nav={<NavBar activeSection={activeSection} />}>
      <main className="max-h-screen min-w-0 grow overflow-auto bg-ctp-base p-4 md:p-8">
        {sections.map((section) => (
          <section
            id={section.id}
            key={section.name}
            className="min-h-screen flex flex-col justify-center py-16"
          >
            {section.content}
          </section>
        ))}
        <footer className="py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Timm Nicolaizik. All rights reserved.
        </footer>
      </main>
    </AppFrame>
  );
};

export default Page;
