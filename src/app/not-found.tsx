"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { AnimatedLinkButton } from "@/components/ui/AnimatedButton";
import { FaRobot } from "react-icons/fa";

export default function NotFound() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
      <motion.div
        className="text-center max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated 404 */}
        <motion.div
          className="relative mb-8"
          variants={itemVariants}
          animate={floatingAnimation}
        >
          <h1 className="text-8xl md:text-9xl font-bold text-[#F7A650] relative">
            404
            {/* Glowing effect */}
            <motion.div
              className="absolute inset-0 text-8xl md:text-9xl font-bold text-[#F7A650] opacity-50 blur-sm"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              404
            </motion.div>
          </h1>
        </motion.div>

        {/* Error message */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-400 mb-2">
            The page you&apos;re looking for seems to have wandered off into the digital void.
          </p>
          <p className="text-base text-gray-500">
            Don&apos;t worry, even the best people get lost sometimes.
          </p>
        </motion.div>

        {/* Animated illustration */}
        <motion.div
          variants={itemVariants}
          className="mb-8 text-6xl"
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaRobot size={100} className="text-[#F7A650] inline-block" />
        </motion.div>

        {/* Action buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <AnimatedLinkButton href="/" variant="primary" size="lg">
            🏠 Go Home
          </AnimatedLinkButton>
          
          <AnimatedLinkButton href="/projects" variant="outline" size="lg">
            🚀 View Projects
          </AnimatedLinkButton>
          
          <motion.button
            onClick={() => router.back()}
            className="px-6 py-3 text-lg font-semibold text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Go Back
          </motion.button>
        </motion.div>

        {/* Fun fact */}
        <motion.div
          variants={itemVariants}
          className="mt-12 p-4 bg-[#1F1F1F] rounded-lg border border-[#3A3A3A]"
        >
          <p className="text-sm text-gray-400">
            <span className="text-[#F7A650] font-semibold">Fun fact:</span> HTTP 404 errors were named after room 404 at CERN, 
            where the original web servers were located. The more you know!
          </p>
        </motion.div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#F7A650] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
