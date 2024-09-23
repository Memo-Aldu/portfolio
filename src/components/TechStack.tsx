'use client';

import { motion } from 'framer-motion';
import { FaJava, FaPython, FaAws, FaReact } from 'react-icons/fa';
import { SiTerraform, SiSpringboot, SiNextdotjs, SiTypescript, SiCsharp, SiAzuredevops, SiMongodb, SiPostgresql } from 'react-icons/si';
import { useInView } from "react-intersection-observer";


const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function TechStack() {
  const techIcons = [
    { icon: <FaJava size={50} className="text-[#5382A1]" />, name: 'Java' },
    { icon: <FaPython size={50} className="text-[#306998]" />, name: 'Python' },
    { icon: <FaAws size={60} className="text-[#FF9900]" />, name: 'AWS' },
    { icon: <SiTerraform size={50} className="text-[#623CE4]" />, name: 'Terraform' },
    { icon: <FaReact size={50} className="text-[#61DAFB]" />, name: 'React' },
    { icon: <SiNextdotjs size={50} className="text-[#000000]" />, name: 'Next.js' },
    { icon: <SiTypescript size={50} className="text-[#007ACC]" />, name: 'TypeScript' },
    { icon: <SiCsharp size={50} className="text-[#9B4993]" />, name: 'C#' },
    { icon: <SiAzuredevops size={50} className="text-[#0078D7]" />, name: 'Azure' },
    { icon: <SiSpringboot size={50} className="text-[#6DB33F]" />, name: 'Spring Boot' },
    { icon: <SiMongodb size={50} className="text-[#47A248]" />, name: 'MongoDB' },
    { icon: <SiPostgresql size={50} className="text-[#336791]" />, name: 'PostgreSQL' },
  ];

  const { ref: stackRef, inView: stackInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <motion.div
      className="tech-stack-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 py-12"
      variants={container}
      initial="hidden"
      ref={stackRef}
      animate={stackInView ? "visible" : "hidden"}
    >
      {techIcons.map((tech, idx) => (
        <motion.div
          key={idx}
          variants={item}
          whileHover={{ scale: 1.2 }}
          className="flex flex-col items-center text-center"
        >
          <div>{tech.icon}</div>
          <p className="text-sm mt-2 text-white">{tech.name}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}