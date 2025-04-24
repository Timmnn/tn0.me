"use client";

import { ExternalLink, Github, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { type Project } from "./ProjectCard";

// Define props interface
interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

// Component to render the project image header
const ProjectImageHeader = ({ project }: { project: Project }) => (
  <div className="relative">
    <div className="bg-muted aspect-video max-h-[500px] w-full overflow-hidden">
      <img
        src={project.image || project.thumbnail}
        alt={`${project.title} screenshot`}
        className="h-full w-full object-cover"
      />
    </div>
    <span className="absolute left-6 top-6 rounded-full bg-slate-900/80 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
      {project.type}
    </span>
  </div>
);

// Component to render the technologies section
const TechnologiesSection = ({ technologies }: { technologies: string[] }) => (
  <section>
    <h3 className="mb-4 text-2xl font-semibold">Technologies Used</h3>
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech) => (
        <Badge
          key={tech}
          variant="secondary"
          className="bg-slate-700 text-slate-200 hover:bg-slate-600"
        >
          {tech}
        </Badge>
      ))}
    </div>
  </section>
);

// Component to render the features section
const FeaturesSection = ({ features }: { features: string[] }) => (
  <section>
    <h3 className="mb-4 text-2xl font-semibold">Key Features</h3>
    <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {features.map((feature, index) => (
        <li
          key={index}
          className="rounded-lg bg-slate-800/50 p-4 text-slate-300"
        >
          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
              {index + 1}
            </span>
            <span>{feature}</span>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

// Component to render action buttons
const ActionButtons = ({
  liveUrl,
  githubUrl,
  caseStudyUrl,
}: {
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}) => (
  <div className="flex flex-wrap gap-4">
    {liveUrl && (
      <Button size="lg" asChild className="gap-2 px-6">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
          <Globe className="h-5 w-5" />
          Live Demo
        </a>
      </Button>
    )}
    {githubUrl && (
      <Button variant="outline" size="lg" asChild className="gap-2 px-6">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <Github className="h-5 w-5" />
          View Code
        </a>
      </Button>
    )}
    {caseStudyUrl && (
      <Button variant="outline" size="lg" asChild className="gap-2 px-6">
        <a href={caseStudyUrl} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="h-5 w-5" />
          Case Study
        </a>
      </Button>
    )}
  </div>
);

// Main ProjectModal component
export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[90vh] max-w-6xl overflow-y-auto bg-slate-800 border-none">
        <div className="flex flex-col">
          <ProjectImageHeader project={project} />

          <div className="p-8">
            <DialogHeader className="text-left">
              <DialogTitle className="text-3xl font-bold text-white">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-lg text-slate-300">
                {project.shortDescription}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-8 space-y-8">
              <section>
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  Project Overview
                </h3>
                <p className="text-slate-300 whitespace-pre-line leading-relaxed">
                  {project.description}
                </p>
              </section>

              <Separator className="bg-slate-700" />

              <TechnologiesSection technologies={project.technologies} />

              {project.features && (
                <>
                  <Separator className="bg-slate-700" />
                  <FeaturesSection features={project.features} />
                </>
              )}

              <Separator className="bg-slate-700" />

              <ActionButtons
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                caseStudyUrl={project.caseStudyUrl}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
