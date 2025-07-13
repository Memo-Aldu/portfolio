"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ErrorFallbackProps {
  resetError?: () => void;
  title?: string;
  description?: string;
  children?: ReactNode;
}

export function ErrorFallback({
  resetError,
  title = "Something went wrong",
  description = "We encountered an unexpected error. Please try again.",
  children,
}: ErrorFallbackProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center p-6 bg-[#1F1F1F] rounded-lg border border-red-500/20 text-center"
    >
      <div className="text-4xl mb-3">😵</div>
      <h3 className="text-lg font-semibold text-red-400 mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      
      {children}
      
      {resetError && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={resetError}
          className="px-4 py-2 bg-[#F7A650] text-[#181818] rounded font-medium hover:bg-[#f27705] transition-colors"
        >
          Try Again
        </motion.button>
      )}
    </motion.div>
  );
}

// Specialized error fallbacks
export function ProjectErrorFallback({ resetError }: { resetError?: () => void }) {
  return (
    <ErrorFallback
      title="Failed to load project"
      description="This project couldn't be displayed right now."
      resetError={resetError}
    />
  );
}

export function ContactErrorFallback({ resetError }: { resetError?: () => void }) {
  return (
    <ErrorFallback
      title="Contact form unavailable"
      description="Please try reaching out via email directly."
      resetError={resetError}
    >
      <a 
        href="mailto:aldu.memo@gmail.com"
        className="text-[#F7A650] hover:underline mb-4 block"
      >
        aldu.memo@gmail.com
      </a>
    </ErrorFallback>
  );
}
