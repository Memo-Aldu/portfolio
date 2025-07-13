"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import getProjects from "@/data/projects";

export default function ProjectsSection() {
  const [projects] = useState(getProjects("", "", 6));

  return (
    <div className="projects-section justify-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 self-start text-start">Projects</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {
          // Show actual projects
          projects.map((project) => (
            <ProjectCard
              key={`${project.title}-${project.date}`}
              date={project.date}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              codeLink={project.codeLink}
              demoLink={project.demoLink}
              featured={project.featured}
            />
          ))
        }
      </div>
    </div>
  );
}
