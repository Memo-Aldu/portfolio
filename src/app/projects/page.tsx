'use client';
import { useState, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import getProjects from '@/data/projects';


export default function ProjectsPage() {
  const [filter, setFilter] = useState("year");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(getProjects(filter));

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  useEffect(() => {
    console.log("Filter: ", filter);
    setFilteredProjects(getProjects(filter, searchQuery));

  }, [filter, searchQuery]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 justify-center">
      <div className="projects-section justify-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8">My Projects</h2>

        <div className="flex flex-col md:flex-row md:justify-between items-center mb-8 space-y-4 md:space-y-0">
          {/* Filter Dropdown */}
          <div className="relative w-full md:w-auto">
            <select
              onChange={handleFilterChange}
              className="w-full cursor-pointer p-3 border rounded-lg shadow-sm text-[#B3B3B3] bg-[#1F1F1F] hover:bg-[#262626] focus:outline-none focus:ring-2 focus:ring-[#F7A650] transition ease-in-out duration-200"
            >
              <option className="text-[#EFF0F0] bg-[#1F1F1F]" value="year">Filter by: Year</option>
              <option className="text-[#EFF0F0] bg-[#1F1F1F]" value="Backend">Filter by: Backend</option>
              <option className="text-[#EFF0F0] bg-[#1F1F1F]" value="Frontend">Filter by: Frontend</option>
              <option className="text-[#EFF0F0] bg-[#1F1F1F]" value="FullStack">Filter by: FullStack</option>
            </select>
          </div>

          {/* Search Input */}
          <input
            type="text"
            value={searchQuery}
            defaultValue={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Java, React, SpringBoot..."
            className="cursor-pointer p-3 border rounded-lg shadow-sm w-full md:w-1/3 text-[#B3B3B3] bg-[#1F1F1F] hover:bg-[#262626] focus:ring-2 focus:ring-[#F7A650] transition ease-in-out duration-200"
          />
        </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
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
    </div>
  );
}
