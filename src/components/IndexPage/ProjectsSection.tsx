import { useState, useMemo } from "react";
import { ProjectCard } from "../ProjectCard";
import { Project } from "../ProjectCard";
import { useI18n } from "@/i18n";
import { ProjectModal } from "../ProjectModal";

export const ProjectsSection = () => {
  const { t } = useI18n();

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

  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        {t.projects.title}
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
  );
};
