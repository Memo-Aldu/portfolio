'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FadeInText from './FadeInText';

type TimelineCardProps = {
  position: number;
  dateRange: string;
  title: string;
  subtitle: string;
  description: string;
  isLeft: boolean;
};


export default function ExperienceCard({dateRange, title, subtitle, description, isLeft }: TimelineCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const fadeInVariants = {
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={`w-full p-4`}
      variants={fadeInVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      <motion.div
        whileHover={{ 
          borderColor: "#EFF0F0",
          scale: 1.05 
        }}
        className="relative bg-[#1F1F1F] text-[#EFF0F0] p-4 rounded-lg shadow-lg border-2 border-transparent"
      >
        <p className="text-sm font-bold text-[#F7A650]">{dateRange}</p>
        { inView && <FadeInText><h3 className="text-lg font-semibold">{title}</h3></FadeInText> }
        <h4 className="text-md italic text-gray-300">{subtitle}</h4>
        <ul className="mt-2 text-gray-400 list-disc pl-5 space-y-2">
          {description.split('•').map((item, index) => (
            item.trim() && (
              <li key={index}>
                {item.trim()}
              </li>
            )
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}