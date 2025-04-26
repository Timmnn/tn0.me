"use client";

import { ReactNode, useState, useEffect, useCallback, useMemo } from "react";
import { useI18n } from "@/i18n";
import { Card } from "@/components/Card";
import { SkillCard } from "@/components/SkillCard";
import { AppFrame } from "@/components/AppFrame";
import { SkillContainer } from "@/components/SkillContainer";
import PortfolioCard from "@/components/PortfolioCard";
import { NavBar } from "@/components/NavBar";
import { Project, ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { scrollToSection } from "@/lib/scrollToElement";

type Section = {
  name: string;
  content: ReactNode;
  id: string;
};

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const { t, language } = useI18n();
  const translate = t();

  const projects: Project[] = useMemo(
    () => [
      {
        id: "1",
        title: "ITEX Jobmarkt",
        liveUrl: "https://projektmarkt.it-excelsus.de/",
        thumbnail: "/itex-projectmarket.png",
        shortDescription:
          "Eine Full-Stack Jobplatform mit integriertem Bewerbungsprozess sowie einem CRM zur Job-, Bewerbungs- und Kundenverwaltung",
        technologies: ["React", "TailwindCSS", "Node.js", "MongoDB"],
        type: "Web",
        description:
          "Ein detailliertes Jobportal mit fortschrittlichem CRM-System für die Job-, Bewerbungs- und Kundenverwaltung.",
      },
      {
        id: "2",
        title: "Bieg Hessen",
        liveUrl: "https://www.bieg-hessen.de/",
        thumbnail:
          "https://lh4.googleusercontent.com/proxy/HqZySp0Ypn6Cyt3HF2iJNu62JIZHGaCaY8LGUvX4WH0oTD4JaoeRexbnsNCY_7nLgP-dG2eq_YhnpDvKXw7qBnEFU1mX3fdTkMortj3rmauiu1QMlbdYzzcOG4XYssIwrlgWJj645ZKaTitYRw-u3U4TXcCVQ4potf1Cz9LQ_RZK9bs4RqXoCn3m5zfF5urPwIGoDmy3vqb3merdbBSZCfuVkmO5JQSTtVNVZDgXQ4xTaGME_J0",
        shortDescription: "Description coming soon...",
        technologies: ["Description coming soon..."],
        type: "Web",
        description: "Description coming soon...",
      },
      {
        id: "3",
        title: "Waldferienpark Gerolstein",
        liveUrl: "https://www.parkgerolstein.de/",
        thumbnail:
          "https://lh4.googleusercontent.com/proxy/HqZySp0Ypn6Cyt3HF2iJNu62JIZHGaCaY8LGUvX4WH0oTD4JaoeRexbnsNCY_7nLgP-dG2eq_YhnpDvKXw7qBnEFU1mX3fdTkMortj3rmauiu1QMlbdYzzcOG4XYssIwrlgWJj645ZKaTitYRw-u3U4TXcCVQ4potf1Cz9LQ_RZK9bs4RqXoCn3m5zfF5urPwIGoDmy3vqb3merdbBSZCfuVkmO5JQSTtVNVZDgXQ4xTaGME_J0",

        shortDescription: "Description coming soon...",
        technologies: ["Description coming soon..."],
        type: "Web",
        description: "Description coming soon...",
      },
      {
        id: "4",
        title: "Vireo Charting",
        liveUrl: "https://github.com/Timmnn/vireo-charting",
        thumbnail:
          "https://lh4.googleusercontent.com/proxy/HqZySp0Ypn6Cyt3HF2iJNu62JIZHGaCaY8LGUvX4WH0oTD4JaoeRexbnsNCY_7nLgP-dG2eq_YhnpDvKXw7qBnEFU1mX3fdTkMortj3rmauiu1QMlbdYzzcOG4XYssIwrlgWJj645ZKaTitYRw-u3U4TXcCVQ4potf1Cz9LQ_RZK9bs4RqXoCn3m5zfF5urPwIGoDmy3vqb3merdbBSZCfuVkmO5JQSTtVNVZDgXQ4xTaGME_J0",
        shortDescription: "Description coming soon...",
        technologies: ["Description coming soon..."],
        type: "Web",
        description: "Description coming soon...",
      },
    ],
    [],
  );

  // Skills components organized by category for cleaner code
  const SkillsContent = useMemo(
    () => (
      <div className="flex min-w-0 flex-col gap-4 items-center">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          {translate.skills.title}
        </h2>

        <Card className="w-[800px] max-w-full">
          <h3 className="text-xl font-semibold mb-4">
            {translate.skills.categories.languages}
          </h3>
          <SkillContainer>
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                />
              }
              label="TypeScript"
              url="https://www.typescriptlang.org/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  alt="Python"
                />
              }
              label="Python"
              url="https://www.python.org/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg"
                  alt="Rust"
                />
              }
              label="Rust"
              url="https://www.rust-lang.org/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
                  alt="Go"
                />
              }
              label="Go"
              url="https://go.dev/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-plain.svg"
                  alt="PHP"
                />
              }
              label="PHP"
              url="https://www.php.net/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                  alt="HTML5"
                />
              }
              label="HTML5"
              url="https://html5.org/"
            />
          </SkillContainer>
        </Card>

        <Card className="w-[800px] max-w-full">
          <h3 className="text-xl font-semibold mb-4">
            {translate.skills.categories.cloud}
          </h3>
          <SkillContainer>
            <SkillCard
              icon={
                <img
                  src="https://avatars.githubusercontent.com/u/5185491?s=200&v=4"
                  alt="Scaleway"
                />
              }
              label="Scaleway"
              url="https://www.scaleway.com/en/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                  alt="AWS"
                />
              }
              url="https://aws.amazon.com/"
              label="AWS"
            />
          </SkillContainer>
        </Card>

        <Card className="w-[800px] max-w-full">
          <h3 className="text-xl font-semibold mb-4">
            {translate.skills.categories.frameworks}
          </h3>
          <SkillContainer>
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  alt="React"
                />
              }
              label="React"
              url="https://react.dev/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg"
                  alt="Nuxt"
                />
              }
              label="Nuxt"
              url="https://nuxt.com/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
                  alt="Vue"
                />
              }
              label="Vue"
              url="https://vuejs.org/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg"
                  alt="Electron"
                />
              }
              label="Electron.js"
              url="https://www.electronjs.org/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
                  alt="Express"
                />
              }
              label="Express.js"
              url="https://expressjs.com/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-plain.svg"
                  alt="Fastify"
                />
              }
              label="Fastify"
              url="https://fastify.dev/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg"
                  alt="Nginx"
                />
              }
              label="Nginx"
              url="https://nginx.org/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="Node.js"
                />
              }
              label="Node.js"
              url="https://nodejs.org/en"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
                  alt="Sass"
                />
              }
              label="Sass"
              url="https://sass-lang.com/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"
                  alt="TailwindCSS"
                />
              }
              label="TailwindCSS"
              url="https://tailwindcss.com/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trpc/trpc-original.svg"
                  alt="TRPC"
                />
              }
              label="TRPC"
              url="https://trpc.io/"
            />
          </SkillContainer>
        </Card>

        <Card className="w-[800px] max-w-full">
          <h3 className="text-xl font-semibold mb-4">
            {translate.skills.categories.databases}
          </h3>
          <SkillContainer>
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                />
              }
              label="MongoDB"
              url="https://www.mongodb.com/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                  alt="MySQL"
                />
              }
              label="MySQL"
              url="https://www.mysql.com/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
                  alt="Redis"
                />
              }
              label="Redis"
              url="https://redis.io/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
                  alt="SQLite"
                />
              }
              label="SQLite"
              url="https://www.sqlite.org/"
            />
          </SkillContainer>
        </Card>

        <Card className="w-[800px] max-w-full">
          <h3 className="text-xl font-semibold mb-4">
            {translate.skills.categories.tools}
          </h3>
          <SkillContainer>
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg"
                  alt="DBeaver"
                />
              }
              url="https://dbeaver.io/"
              label="DBeaver"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neovim/neovim-original.svg"
                  alt="Neovim"
                />
              }
              label="Neovim"
              url="https://neovim.io/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-plain.svg"
                  alt="Bash"
                />
              }
              label="Bash"
              url="https://www.gnu.org/software/bash/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg"
                  alt="Bun"
                />
              }
              label="Bun"
              url="https://bun.sh/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/d3js/d3js-original.svg"
                  alt="D3.js"
                />
              }
              label="D3.js"
              url="https://d3js.org/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg"
                  alt="Docker"
                />
              }
              label="Docker"
              url="https://www.docker.com/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg"
                  alt="Git"
                />
              }
              label="Git"
              url="https://git-scm.com/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
                  alt="GitHub"
                />
              }
              label="GitHub"
              url="https://github.com/Timmnn/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grpc/grpc-original.svg"
                  alt="gRPC"
                />
              }
              label="gRPC"
              url="https://grpc.io/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg"
                  alt="GraphQL"
                />
              }
              label="GraphQL"
              url="https://graphql.org/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg"
                  alt="Insomnia"
                />
              }
              label="Insomnia"
              url="https://insomnia.rest/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
                  alt="Jest"
                />
              }
              label="Jest"
              url="https://jestjs.io/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg"
                  alt="Jira"
                />
              }
              label="Jira"
              url="https://www.atlassian.com/software/jira"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
                  alt="Pandas"
                />
              }
              label="Pandas"
              url="https://pandas.pydata.org/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg"
                  alt="Playwright"
                />
              }
              label="Playwright"
              url="https://playwright.dev/"
            />
            <SkillCard
              icon={
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg"
                  alt="Powershell"
                />
              }
              label="Powershell"
              url="https://learn.microsoft.com/en-us/powershell/"
            />
          </SkillContainer>
        </Card>
      </div>
    ),
    [translate.skills],
  );

  // Organize sections data with useMemo
  const sections: Section[] = useMemo(
    () => [
      {
        name: translate.nav.home,
        content: <PortfolioCard />,
        id: "home",
      },
      {
        name: translate.nav.about,
        id: "about",
        content: (
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              My Professional Background
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 ">
              <Card className="bg-gradient-to-br from-ctp-crust to-slate-900 transition-colors duration-300 h-full hover:to-slate-900/70">
                <div className="p-6">
                  <div className="text-indigo-400 mb-4">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    Experience
                  </h3>
                  <p className="text-slate-300">{translate.about.experience}</p>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-ctp-crust to-slate-900 transition-colors duration-300 h-full hover:to-slate-900/70">
                <div className="p-6">
                  <div className="text-indigo-400 mb-4">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    Development Philosophy
                  </h3>
                  <p className="text-slate-300">{translate.about.philosophy}</p>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-ctp-crust to-slate-900 transition-colors duration-300 h-full hover:to-slate-900/70">
                <div className="p-6">
                  <div className="text-indigo-400 mb-4">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    Problem Solving
                  </h3>
                  <p className="text-slate-300">
                    {translate.about.problem_solving}
                  </p>
                </div>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-ctp-crust to-slate-900 transition-colors duration-300 h-full hover:to-slate-900/70 mb-12">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Technical Leadership
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-indigo-300 mb-3">
                      Project Approach
                    </h4>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">✓</span>
                        Requirements analysis and technical planning
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">✓</span>
                        Architecture design and technology selection
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">✓</span>
                        Implementation with best practices
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-indigo-300 mb-3">
                      Collaboration Style
                    </h4>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">✓</span>
                        Clear technical communication
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">✓</span>
                        Documentation-focused
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-2">✓</span>
                        Knowledge sharing and mentoring
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">
                Want to know more about my work?
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                {translate.about.cta}
              </p>
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 bg-ctp-blue hover:bg-ctp-blue-700 text-black rounded-lg transition-colors duration-300 inline-flex items-center"
              >
                View Projects
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
            </div>
          </div>
        ),
      },
      {
        name: translate.skills.title,
        id: "skills",
        content: SkillsContent,
      },
      {
        name: translate.nav.projects,
        id: "projects",
        content: (
          <div className="flex flex-col gap-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {translate.projects.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenModal={() => {
                    setActiveProject(project.id);
                  }}
                />
              ))}
            </div>
            {/* Render only one modal at a time */}
            {activeProject && (
              <ProjectModal
                project={projects.find((p) => p.id === activeProject)!}
                isOpen={!!activeProject}
                onClose={() => setActiveProject(null)}
              />
            )}
          </div>
        ),
      },
    ],
    [translate, SkillsContent, projects, activeProject], // Add activeProject here
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

export default App;
