"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Character from "@/components/Character";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  const introRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const introControls = useAnimation();
  const aboutMeControls = useAnimation();
  const projectsControls = useAnimation();

  useEffect(() => {
    let isMounted = true;

    const introNode = introRef.current;
    const aboutMeNode = aboutMeRef.current;
    const projectsNode = projectsRef.current;

    // Observer for intro section
    const observer = new IntersectionObserver(
      (entries) => {
        if (!isMounted) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            introControls.start("visible");
          } else {
            introControls.start("hidden");
          }
        });
      },
      { threshold: 0.5 }
    );
  
    // Observer for about me section
    const aboutMeObserver = new IntersectionObserver(
      (entries) => {
        if (!isMounted) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutMeControls.start("visible");
          } else {
            aboutMeControls.start("hidden");
          }
        });
      },
      { threshold: 0.5 }
    );
  
    // Observer for projects section
    const projectsObserver = new IntersectionObserver(
      (entries) => {
        if (!isMounted) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            projectsControls.start("visible");
          } else {
            projectsControls.start("hidden");
          }
        });
      },
      { threshold: 0.3 }
    );
  
    if (introNode) observer.observe(introNode);
    if (aboutMeNode) aboutMeObserver.observe(aboutMeNode);
    if (projectsNode) projectsObserver.observe(projectsNode);
  
    return () => {
      isMounted = false;
      if (introNode) observer.unobserve(introNode);
      if (aboutMeNode) aboutMeObserver.unobserve(aboutMeNode);
      if (projectsNode) projectsObserver.unobserve(projectsNode);
    };
  }, [introControls, aboutMeControls, projectsControls]);
  

  return (
    <div className="justify-center items-center">

      <div className="space-y-3.5">
        {/* Introduction Section */}
        <motion.div
          ref={introRef}
          initial="visible"
          animate={introControls}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.95 },
          }}
          transition={{ duration: 0.7 }}
          className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center p-4" // Responsive padding
        >
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 self-start text-start">
            <h1 className="inline-block">
              Hey, I&apos;m{" "}
              <motion.span
                className="inline-block cursor-pointer"
                whileHover={{ scale: 1.2, color: "#F7A650"}}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Memo
              </motion.span>
            </h1>
          </div>

          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl justify-start self-start">
            I’m a software engineer passionate about Backend Development, Cloud Computing, and Software Architecture. 
          </p>
        </motion.div>

        {/* About Me Section */}
        <motion.div
          ref={aboutMeRef}
          initial="hidden"
          animate={aboutMeControls}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.95 },
          }}
          transition={{ duration: 0.7 }}
          className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center p-4"
        >
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 self-start text-start">
              <h1 className="inline-block">
                <motion.span
                  className="inline-block cursor-pointer"
                  whileHover={{ scale: 1.2, color: "#F7A650" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  About Me
                </motion.span>
              </h1>
            </div>
          <Character
            style={{ fontSize: "24px" }}
            animatedParts={[
              { text: "I have a passion for designing efficient and scalable systems.  With expertise in cloud computing, microservices, and software architecture. I’ve worked on a variety of impactful" },
              { text: "projects", isLink: true, href: "/projects" },
              { text: "in the telecommunications, financial, and software industries. I have" },
              { text: "experience", isLink: true, href: "/experience" },
              { text: "with technologies like AWS, Spring, and Terraform", isLink: false },
              { text: "to solve real-world problems." }
            ]}
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl justify-start self-start">
              I have a passion for designing efficient and scalable systems. With expertise in cloud computing, microservices, and software architecture, I’ve worked on a variety of impactful projects in the telecommunications, financial, and software industries. I have experience with technologies like AWS, Spring, and Terraform to solve real-world problems.
            </p>
          </Character>
        </motion.div>

        {/* Project Section */}
        <motion.div
          ref={projectsRef}
          initial="hidden"
          animate={projectsControls}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.95 },
          }}
          transition={{ duration: 0.7 }}
          className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center p-4"
        >
          <ProjectsSection />
        </motion.div>
      </div>
    </div>
  );
}
