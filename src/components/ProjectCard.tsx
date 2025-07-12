'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import FadeInText from './FadeInText';
import { AnimatedLinkButton } from './ui/AnimatedButton';
import { Lightbox } from './ui/Lightbox';
import { FaJava, FaPython, FaAws, FaReact} from "react-icons/fa";
import { FaStar as IconStar } from "react-icons/fa";
import { SiTerraform, SiVercel, SiKotlin, SiCucumber, SiDocker, SiTypescript, SiCsharp, SiNextdotjs, SiMongodb, SiSpringboot, SiPostgresql, SiAzuredevops, SiSocketdotio, SiPrisma, SiMysql, SiBootstrap, SiHtml5, SiCss3, SiAngular, SiStripe, SiFastapi } from "react-icons/si";

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
  Stripe: <SiStripe size={25} className="text-[#6772E5]" />,
  FastAPI: <SiFastapi size={25} className="text-[#00B0F4]" />
};

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  codeLink?: string;
  demoLink?: string;
  date: string;
  images?: string[];
  featured?: boolean;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  codeLink,
  demoLink,
  date,
  images = [],
  featured = false
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        borderColor: "#F7A650",
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(247, 166, 80, 0.2)",
        rotateX: 2,
        rotateY: 2,
      }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 },
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="project-card bg-[#1F1F1F] p-6 rounded-lg shadow-lg transition-transform duration-300 border-2 border-transparent relative overflow-hidden"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-[#F7A650] via-[#f27705] to-[#F7A650] rounded-lg opacity-0 blur-sm"
        animate={{
          opacity: isHovered ? 0.3 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-lg"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "100%" : "-100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Featured badge - positioned relative to the card container */}
      {featured && (
        <motion.div
          className="absolute top-1 right-6 px-2 py-1 rounded-full text-xs font-bold z-30 shadow-lg"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
        >
          <IconStar size={14} className="text-[#F7A650] inline-block" />
        </motion.div>
      )}

      <div className="relative z-10">

        {/* Project Image */}
        {images.length > 0 && (
          <motion.div
            className="relative w-full h-48 mb-4 rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => setLightboxOpen(true)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={images[0]}
              alt={`${title} preview`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <motion.div
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </motion.div>
            </div>

            {/* Multiple images indicator */}
            {images.length > 1 && (
              <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                +{images.length - 1} more
              </div>
            )}
          </motion.div>
        )}

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
          {technologies.map((tech: string) => (
            <span key={tech} className="text-white mr-2 mt-4">{techIconMap[tech] || tech}</span>
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
              <AnimatedLinkButton
                href={codeLink}
                variant="ghost"
                size="sm"
                external
              >
                Code
              </AnimatedLinkButton>
          )}
          { demoLink && (
              <AnimatedLinkButton
                href={demoLink}
                variant="outline"
                size="sm"
                external
              >
                Demo
              </AnimatedLinkButton>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={images}
        currentIndex={currentImageIndex}
        onIndexChange={setCurrentImageIndex}
        alt={title}
      />
    </motion.div>
  );
}
