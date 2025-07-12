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
  type?: string;
};


export default function ExperienceCard({dateRange, title, subtitle, description, isLeft, type = "work" }: TimelineCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const fadeInVariants = {
    hidden: { opacity: 0, x: isLeft ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  };

  const getTypeIcon = () => {
    switch (type) {
      case "education":
        return "🎓";
      case "work":
        return "💼";
      default:
        return "📍";
    }
  };

  const getTypeBorder = () => {
    switch (type) {
      case "education":
        return "border-blue-500";
      case "work":
        return "border-[#F7A650]";
      default:
        return "border-gray-500";
    }
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
        className={`relative bg-[#1F1F1F] text-[#EFF0F0] p-4 rounded-lg shadow-lg border-2 border-l-4 ${getTypeBorder()} border-transparent hover:border-[#EFF0F0]`}
      >
        {/* Type indicator */}
        <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#181818] rounded-full flex items-center justify-center text-sm border-2 border-[#3A3A3A]">
          {getTypeIcon()}
        </div>

        <p className="text-sm font-bold text-[#F7A650]">{dateRange}</p>
        { inView && <FadeInText><h3 className="text-lg font-semibold">{title}</h3></FadeInText> }
        <h4 className="text-md italic text-gray-300">{subtitle}</h4>
        {description && (
          <ul className="mt-2 text-gray-400 list-disc pl-5 space-y-2">
            {description.split('•').filter(item => item.trim()).map((item, index) => (
              <li key={`${title}-${index}-${item.slice(0, 10)}`}>
                {item.trim()}
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </motion.div>
  );
}