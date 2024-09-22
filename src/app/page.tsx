"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Character from "@/components/Character";
import ScrollIndicator from "@/components/ScrollIndicator";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  const introRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const introControls = useAnimation();
  const welcomeControls = useAnimation();
  const projectsControls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === introRef.current) {
              introControls.start("visible");
              welcomeControls.start("hidden");
              projectsControls.start("hidden");
            } else if (entry.target === welcomeRef.current) {
              welcomeControls.start("visible");
              introControls.start("hidden");
              projectsControls.start("hidden");
            }
          }
        });
      },
       // Default threshold for the observer
      { threshold: 0.5 }
    );

    if (introRef.current) observer.observe(introRef.current);
    if (welcomeRef.current) observer.observe(welcomeRef.current);

    // Separate observer for the projects section
    const projectObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target === projectsRef.current) {
            projectsControls.start("visible");
            welcomeControls.start("hidden");
            introControls.start("hidden");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (projectsRef.current) projectObserver.observe(projectsRef.current);

    return () => {
      if (introRef.current) observer.unobserve(introRef.current);
      if (welcomeRef.current) observer.unobserve(welcomeRef.current);
      if (projectsRef.current) projectObserver.unobserve(projectsRef.current);
    };
  }, [introControls, welcomeControls, projectsControls]);

  return (
    <div className=" justify-center items-center">

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
              Hey, I'm{" "}
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

        {/* Welcome Section */}
        <motion.div
          ref={welcomeRef}
          initial="hidden"
          animate={welcomeControls}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.95 },
          }}
          transition={{ duration: 0.7 }}
          className="min-h-[calc(80vh-64px)] flex flex-col justify-center items-center p-4"
        >
          <Character
            style={{ fontSize: "24px" }}
            animatedParts={[
              { text: "Welcome to my portfolio, in here you'll find a collection of my" },
              { text: "projects", isLink: true, href: "/projects" },
              { text: "and"},
              { text: "experiences", isLink: true, href: "/experience" },
              { text: "you can also find out more about me!" },
            ]}
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl justify-start self-start">
              Welcome to my portfolio, in here you'll find a collection of my projects and experiences, you can also find out more about me!
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
     <ScrollIndicator />
    </div>
  );
}
