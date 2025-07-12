"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode, useState } from "react";

interface AnimatedCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
  glowEffect?: boolean;
  tiltEffect?: boolean;
}

export function AnimatedCard({ 
  children, 
  className = "", 
  hoverScale = 1.02,
  glowEffect = true,
  tiltEffect = false,
  ...props 
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        scale: hoverScale,
        rotateX: tiltEffect ? 5 : 0,
        rotateY: tiltEffect ? 5 : 0,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      {...props}
    >
      {/* Glow effect */}
      {glowEffect && (
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-[#F7A650] via-[#f27705] to-[#F7A650] rounded-lg opacity-0 blur-sm"
          animate={{
            opacity: isHovered ? 0.3 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Card content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-lg"
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? "100%" : "-100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

export function ProjectCard({ children, className = "", ...props }: AnimatedCardProps) {
  return (
    <AnimatedCard
      className={`bg-[#1F1F1F] p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-[#F7A650] transition-colors duration-300 ${className}`}
      hoverScale={1.05}
      glowEffect={true}
      tiltEffect={true}
      {...props}
    >
      {children}
    </AnimatedCard>
  );
}

export function FeatureCard({ children, className = "", ...props }: AnimatedCardProps) {
  return (
    <AnimatedCard
      className={`bg-[#1F1F1F] p-4 rounded-lg border border-[#3A3A3A] hover:border-[#F7A650] transition-colors duration-300 ${className}`}
      hoverScale={1.03}
      glowEffect={false}
      {...props}
    >
      {children}
    </AnimatedCard>
  );
}
