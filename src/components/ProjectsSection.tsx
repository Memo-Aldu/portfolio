import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "CRM App",
      description: "A Customer Relationship Management App designed to manage and communicate with customers.",
      technologies: ["Spring Boot", "React", "Azure", "Terraform"],
    },
    {
      title: "Discord Clone",
      description: "A Discord Clone capable of real-time messaging, voice and video calls.",
      technologies: ["Next.js", "Socket.io", "Prisma", "MySQL", "TypeScript"],
      codeLink: "https://github.com/Memo-Aldu/discord-clone",
      demoLink: "https://discord-clone-bay-rho.vercel.app"
    },
    {
        title: "E-Hotel",
        description: "A Hotel Management System designed to manage bookings and rooms.",
        technologies: ["Spring Boot", "React", "PostgreSQL", "Java", "TypeScript"],
        codeLink: "https://github.com/Memo-Aldu/e-hotel",
    },
    {
        title: "Nolis",
        description: "Product Scraping App designed to scrape products from different websites.",
        technologies: ["Spring Boot", "PostgresSQL", "MongoDB", "JWT", "Java"],
        codeLink: "https://github.com/Memo-Aldu/nolis"
    },
    {
        title: "Potlis",
        description: "Best Buy Profuct Scrapper Discord Bot",
        technologies: ["Python", "Hikari", "Requests"],
        codeLink: "https://github.com/Memo-Aldu/potlis",
    },
    {
        title: "Flower Shop",
        description: "A Flower Shop Website designed to sell flowers online.",
        technologies: ["Angular", "Typescript", "Bootstrap", "Html", "CSS"],
        codeLink: "https://github.com/Memo-Aldu/flowersON.github.io",
        demoLink: "https://memo-aldu.github.io/flowersON.github.io/"

    },
  ];

  return (
    <div className="projects-section justify-center">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
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
