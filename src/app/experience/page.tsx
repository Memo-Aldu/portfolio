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
    let isMounted = false;
    const techStackObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            techStackControls.start("visible");
          } else {
            techStackControls.start("hidden");
          }
        });
      },
      { threshold: 0.5 }
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
      { threshold: 0.3 }
    );
  
    // Mount the observers when the component is mounted
    if (techStackRef.current) techStackObserver.observe(techStackRef.current);
    if (timelineRef.current) timeLineObserver.observe(timelineRef.current);

    // Cleanup function to unobserve the elements when the component unmounts
    return () => {
      isMounted = false;
      if (techStackRef.current) techStackObserver.unobserve(techStackRef.current);
      if (timelineRef.current) timeLineObserver.unobserve(timelineRef.current);
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
        className="timeline-section  min-h-[calc(100vh-64px)] flex flex-col justify-center items-center p-4"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8">Experience</h2>
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
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8">Tech Stack</h2>
          <TechStack />
        </div>
      </motion.section>
    </div>
  );
}