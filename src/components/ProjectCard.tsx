'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { useEffect } from 'react';
import FadeInText from './FadeInText';
import { FaJava, FaPython, FaAws, FaReact} from "react-icons/fa";
import { SiTerraform, SiVercel, SiKotlin, SiCucumber, SiDocker, SiTypescript, SiCsharp, SiNextdotjs, SiMongodb, SiSpringboot, SiPostgresql, SiAzuredevops, SiSocketdotio, SiPrisma, SiMysql, SiBootstrap, SiHtml5, SiCss3, SiAngular } from "react-icons/si";

const techIconMap: { [key: string]: JSX.Element } = {
  Java: <FaJava size={24} className='text-[#5382A1]' />,
  Docker: <SiDocker size={24} className='text-[#2496ED]' />,
  NextJS: <SiNextdotjs size={24} className="text-[#000000]" />,
  SocketIO: <SiSocketdotio size={24} className="text-[#010101]" />,
  Prisma: <SiPrisma size={24} className="text-[#093d54]" />,
  MySQL: <SiMysql size={24} className="text-[#4479A1]" />,
  Bootstrap: <SiBootstrap size={24} className="text-[#7952B3]" />,
  HTML: <SiHtml5 size={24} className="text-[#E34F26]" />,
  CSS: <SiCss3 size={24} className="text-[#1572B6]" />,
  SpringBoot: <SiSpringboot size={25} className="text-[#6DB33F]" />,
  Angular: <SiAngular size={24} className="text-[#DD0031]" />,
  Python: <FaPython size={25} className="text-[#306998]" />,
  AWS: <FaAws size={25} className="text-[#FF9900]" />,
  Terraform: <SiTerraform size={25} className="text-[#623CE4]" />,
  React: <FaReact size={25} className="text-[#61DAFB]" />,
  ReactNative: <FaReact size={25} className="text-[#61DAFB]" />,
  TypeScript: <SiTypescript size={25} className="text-[#007ACC]" />,
  Csharp: <SiCsharp size={25} className="text-[#9B4993]" />,
  Azure: <SiAzuredevops size={25} className="text-[#0078D7]" />,
  MongoDB: <SiMongodb size={25} className="text-[#47A248]" />,
  PostgreSQL: <SiPostgresql size={25} className="text-[#336791]" />,
  Kotlin: <SiKotlin size={25} className="text-[#a926e4]" />,
  Cucumber: <SiCucumber size={25} className="text-[#23D96C]" />,
  Vercel: <SiVercel size={25} className="text-[#000000]" />,
};

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  codeLink?: string;
  demoLink?: string;
  date: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  codeLink,
  demoLink,
  date
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
  const { ref, inView } = useInView({ threshold: 0.5 });

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
        borderColor: "#F7A650",
        scale: 1.1,
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
      }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 },
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="project-card bg-[#1F1F1F] p-6 rounded-lg shadow-lg transition-transform duration-300 border-2 border-transparent"
    >
      { inView && (
        <div className="flex justify-between items-center">
        <FadeInText>
          <h3 className="text-2xl font-bold text-[#F7A650]">{title}</h3>
        </FadeInText> 
          <p className="text-sm mt-2">{date}</p>
        </div>
      )}

      <p className="mb-4">{description}</p>

      <motion.div
        initial={{ width: '0%' }}
        animate={controls}
        variants={{
          visible: { width: '100%' },
          hidden: { width: '0%' },
        }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className="border-t-2 border-[#F7A650] rounded-full mt-4"
      />

      {/* Technologies (Icons) */}
      <div className="flex flex-wrap">
        {technologies.map((tech: string, idx) => (
          <span key={idx} className="text-white mr-2 mt-4">{techIconMap[tech] || tech}</span>
        ))}
      </div>

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
                transition={{ duration: 0.2 }}
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
                transition={{ duration: 0.2 }}
                >
                Demo
                </motion.span>
            </Link> )} 
      </div>
    </motion.div>
  );
}
