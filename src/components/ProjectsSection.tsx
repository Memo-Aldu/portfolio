import ProjectCard from "@/components/ProjectCard";
import getProjects from "@/data/projects";

export default function ProjectsSection() {

  return (
    <div className="projects-section justify-center">
      <h1 className="text-7xl font-bold mb-8">Projects</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {getProjects("", "", 6).map((project, index) => (
          <ProjectCard
            key={index}
            date={project.date}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            codeLink={project.codeLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </div>
  );
}
