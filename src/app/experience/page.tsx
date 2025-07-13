'use client';

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import TechStack from "@/components/TechStack";
import Timeline from "@/components/Timeline";

export default function ExperiencePage() {
  const techStackRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const techStackControls = useAnimation();
  const timelineControls = useAnimation();

  useEffect(() => {
    let isMounted = true;

    const techStackNode = techStackRef.current;
    const timelineNode = timelineRef.current;

    const techStackObserver = new IntersectionObserver(
      (entries) => {
        if (!isMounted) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            techStackControls.start("visible");
          } else {
            techStackControls.start("hidden");
          }
        });
      },
      { threshold: 0.3 }
    );
  
    const timeLineObserver = new IntersectionObserver(
      (entries) => {
        if (!isMounted) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timelineControls.start("visible");
          } else {
            timelineControls.start("hidden");
          }
        });
      },
      { threshold: 0.2 }
    );
  
    if (techStackNode) techStackObserver.observe(techStackNode);
    if (timelineNode) timeLineObserver.observe(timelineNode);

    return () => {
      isMounted = false;
      if (techStackNode) techStackObserver.unobserve(techStackNode);
      if (timelineNode) timeLineObserver.unobserve(timelineNode);
    };
  }, [timelineControls, techStackControls]);

  return (
    <div className="justify-center items-center">

      {/* Timeline Section */}
      <motion.section
        ref={timelineRef}
        initial="visible"
        animate={timelineControls}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.95 },
        }}
        transition={{ duration: 0.5 }}
        className="timeline-section min-h-[calc(100vh-64px)] flex flex-col justify-center items-center p-4"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">My Experience</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A journey through my professional development, from university to industry experience
            </p>
          </motion.div>
          <Timeline />
        </div>
      </motion.section>
      {/* Tech Stack Section */}
      <motion.section
        ref={techStackRef}
        initial="hidden"
        animate={techStackControls}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.95 },
        }}
        transition={{ duration: 0.7 }}
        className="experience-section min-h-[calc(100vh-64px)] flex flex-col justify-center items-center p-4"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Tech Stack</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I work with to build scalable, modern applications
            </p>
          </motion.div>
          <TechStack />
        </div>
      </motion.section>
    </div>
  );
}