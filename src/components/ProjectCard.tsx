import { Badge } from "./ui/badge";
import { Button } from "./Button";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

type ProjectCardProps = {
  project: Project;
  onOpenModal: () => void;
};

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  thumbnail: string;
  image?: string;
  technologies: string[];
  features?: string[];
  type: "web" | "app" | "other";
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}

export const ProjectCard = ({ project, onOpenModal }: ProjectCardProps) => {
  return (
    <motion.div
      className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-700 bg-slate-800 shadow-lg transition-all hover:border-slate-500 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.thumbnail || "/placeholder.svg"}
          alt={`${project.title} thumbnail`}
          className="h-full w-full object-cover transition-all duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100">
          <div className="absolute bottom-4 left-4 flex gap-2">
            {project.type === "web" && project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-800/80 p-2 text-white hover:bg-slate-700/80"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGlobe className="h-4 w-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-800/80 p-2 text-white hover:bg-slate-700/80"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-start justify-between">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <span className="rounded-full bg-slate-700 px-3 py-1 text-xs font-medium text-slate-300">
            {project.type}
          </span>
        </div>

        <p className="mb-6 line-clamp-3 text-slate-300">
          {project.shortDescription}
        </p>

        <div className="mt-auto">
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-slate-700 text-slate-200 hover:bg-slate-600"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="outline" className="text-slate-400">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          <Button
            variant="default"
            className="w-full py-6 text-base font-medium transition-all hover:scale-[1.02] "
            onClick={onOpenModal}
          >
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
