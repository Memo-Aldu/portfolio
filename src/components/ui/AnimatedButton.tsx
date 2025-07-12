"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode, forwardRef } from "react";
import Link from "next/link";

interface BaseButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

type ButtonProps = BaseButtonProps & HTMLMotionProps<"button">;
type LinkButtonProps = BaseButtonProps & {
  href: string;
  external?: boolean;
};

const buttonVariants = {
  primary: "bg-[#F7A650] text-[#181818] hover:bg-[#f27705] border-2 border-[#F7A650] hover:border-[#f27705]",
  secondary: "bg-[#1F1F1F] text-[#EFF0F0] hover:bg-[#2A2A2A] border-2 border-[#3A3A3A] hover:border-[#F7A650]",
  ghost: "bg-transparent text-[#EFF0F0] hover:bg-[#1F1F1F] border-2 border-transparent hover:border-[#F7A650]",
  outline: "bg-transparent text-[#F7A650] hover:bg-[#F7A650] hover:text-[#181818] border-2 border-[#F7A650]"
};

const sizeVariants = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg"
};

const AnimatedButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", size = "md", className = "", disabled = false, loading = false, ...props }, ref) => {
    const baseClasses = "font-semibold rounded-lg transition-all duration-200 relative overflow-hidden";
    const variantClasses = buttonVariants[variant];
    const sizeClasses = sizeVariants[size];
    
    return (
      <motion.button
        ref={ref}
        className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={disabled || loading}
        whileHover={!disabled ? { 
          scale: 1.02,
          boxShadow: "0 8px 25px rgba(247, 166, 80, 0.3)"
        } : {}}
        whileTap={!disabled ? { scale: 0.98 } : {}}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }}
        {...props}
      >
        {/* Ripple effect background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {loading && (
            <motion.div
              className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          )}
          {children}
        </span>
      </motion.button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export function AnimatedLinkButton({ 
  children, 
  href, 
  external = false, 
  variant = "primary", 
  size = "md", 
  className = "",
  ...props 
}: LinkButtonProps) {
  const baseClasses = "font-semibold rounded-lg transition-all duration-200 relative overflow-hidden inline-block";
  const variantClasses = buttonVariants[variant];
  const sizeClasses = sizeVariants[size];

  const buttonContent = (
    <motion.span
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 8px 25px rgba(247, 166, 80, 0.3)"
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
    >
      {/* Ripple effect background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {external && (
          <motion.span
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            ↗
          </motion.span>
        )}
      </span>
    </motion.span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {buttonContent}
      </a>
    );
  }

  return (
    <Link href={href} {...props}>
      {buttonContent}
    </Link>
  );
}

export default AnimatedButton;
