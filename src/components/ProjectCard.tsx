'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { useEffect } from 'react';
import FadeInText from './FadeInText';

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  codeLink?: string;
  demoLink?: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  codeLink,
  demoLink,
}: ProjectCardProps) {
  const hoverAnimation = {
        hover: {
          scale: 1.1,
          backgroundColor: "#181818",
          color: "#F7A650",
          borderRadius: "20px",
          padding: "8px 16px", 
        },
  };
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.9 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);


  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      whileHover={{ 
        borderColor: "#EFF0F0",
        scale: 1.1
      }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 },
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="project-card bg-[#1F1F1F] p-6 rounded-lg shadow-lg transition-transform duration-300 border-2 border-transparent" // Add initial transparent border
    >
      { inView && <FadeInText><h3 className="text-2xl font-bold text-[#F7A650]">{title}</h3></FadeInText> }
      <p className="mb-4">{description}</p>

      <motion.div
        initial={{ width: '0%' }}
        animate={controls}
        variants={{
          visible: { width: '100%' },
          hidden: { width: '0%' },
        }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className="border-t-2 border-[#F7A650] rounded-full my-4"
      />

      <p className="">{technologies.join(', ')}</p>

      <motion.div
        initial={{ width: '0%' }}
        animate={controls}
        variants={{
          visible: { width: '100%' },
          hidden: { width: '0%' },
        }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className="border-t-2 border-[#F7A650] rounded-full my-4"
      />

      <div className="flex justify-between items-center">
        { codeLink && (
            <Link href={codeLink} passHref>
              <motion.span
                className="cursor-pointer hover:text-white transition"
                variants={hoverAnimation}
                whileHover="hover"
                transition={{ duration: 0.3 }}
              >
                Code
              </motion.span>
            </Link> )}
        { demoLink && (
            <Link href={demoLink} passHref>
                <motion.span
                className="cursor-pointer hover:text-white transition"
                variants={hoverAnimation}
                whileHover="hover"
                transition={{ duration: 0.3 }}
                >
                Demo
                </motion.span>
            </Link> )} 
      </div>
    </motion.div>
  );
}
