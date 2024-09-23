
export type ProjectType = {
    title: string;
    description: string;
    technologies: string[];
    codeLink?: string;
    demoLink?: string;
    date: string;
    tag: string;
  };
  
const projects: ProjectType[] = [
    {
      title: "CRM App",
      description: "A Customer Relationship Management App designed to manage and communicate with customers.",
      technologies: ["SpringBoot", "React", "MongoDB", "Azure", "Terraform", "Java"],
      date: "2024",
      tag: "FULLSTACK"
    },
    {
      title: "Discord Clone",
      description: "A Discord Clone capable of real-time messaging, voice and video calls.",
      technologies: ["NextJS", "SocketIO", "Prisma", "MySQL", "TypeScript"],
      codeLink: "https://github.com/Memo-Aldu/discord-clone",
      demoLink: "https://discord-clone-bay-rho.vercel.app",
      date: "2024",
      tag: "FULLSTACK"
    },
    {
        title: "E-Hotel",
        description: "A Hotel Management System designed to manage bookings and rooms.",
        technologies: ["SpringBoot", "React", "PostgreSQL", "Java", "TypeScript"],
        codeLink: "https://github.com/Memo-Aldu/e-hotel",
        date: "2023",
        tag: "FULLSTACK"
    },
    {
        title: "Nolis",
        description: "Product Scraping App designed to scrape products from different websites.",
        technologies: ["SpringBoot", "PostgreSQL", "MongoDB", "JWT", "Java"],
        codeLink: "https://github.com/Memo-Aldu/nolis",
        date: "2023",
        tag: "BACKEND"
    },
    {
        title: "Potlis",
        description: "Best Buy Profuct Scrapper Discord Bot",
        technologies: ["Python", "Hikari", "Requests"],
        codeLink: "https://github.com/Memo-Aldu/potlis",
        date: "2022",
        tag: "BACKEND"
    },
    {
        title: "Flower Shop",
        description: "A Flower Shop Website designed to sell flowers online.",
        technologies: ["Angular", "TypeScript", "Bootstrap", "HTML", "CSS"],
        codeLink: "https://github.com/Memo-Aldu/flowersON.github.io",
        demoLink: "https://memo-aldu.github.io/flowersON.github.io/",
        date: "2022",
        tag: "FRONTEND"
    },
    {
      title: "PMS",
      description: "Patient Management System, desined using clean code principles.",
      technologies: ["SpringBoot", "PostgreSQL", "Kotlin", "Cucumber"],
      codeLink: "https://github.com/Memo-Aldu/PMS",
      date: "2023",
      tag: "BACKEND"
    },
    {
      title: "NFT App",
      description: "NFT Marketplace App designed to trade NFTs.",
      technologies: ["ReactNative", "TypeScript", ],
      date: "2022",
      codeLink: "https://github.com/Memo-Aldu/nft-app",
      tag: "FRONTEND"
    }
];

export default function getProjects( filter?: string, searchQuery?: string, num?: number): ProjectType[] {
    if (!filter && !searchQuery && !num) {
        return projects;
    }

    if (num) {
        return projects.slice(0, num);
    }

    if (filter && searchQuery) {
        return projects.filter((project) => {
            const inTitle = project.title.toLowerCase().includes(searchQuery.toLowerCase());
            const inDescription = project.description.toLowerCase().includes(searchQuery.toLowerCase());
            const inTechnologies = project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
            const inFilter = project.tag.toLowerCase() === filter.toLowerCase() || filter.toLowerCase() === "year";
            return (inTitle || inDescription || inTechnologies) && inFilter;
        });
    } else if (filter) {
        return projects.filter((project) => {
            const inFilter = project.tag.toLowerCase() === filter.toLowerCase() || filter.toLowerCase() === "year";
            return inFilter;
        })
    } else if (searchQuery) {
        return projects.filter((project) => {
            const inTitle = project.title.toLowerCase().includes(searchQuery.toLowerCase());
            const inDescription = project.description.toLowerCase().includes(searchQuery.toLowerCase());
            const inTechnologies = project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
            return (inTitle || inDescription || inTechnologies);
        })
    }

    return projects;
}
  