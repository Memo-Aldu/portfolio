"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const ScrollIndicator = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);
  const footerRef = useRef<HTMLElement | null>(null); // Reference to footer

  const updateScrollVisibility = () => {
    const endOfPage = document.documentElement.scrollHeight - window.innerHeight - 150;
    const canScroll = window.scrollY <= endOfPage;

    if (canScroll) setShowScrollIndicator(true);
    else setShowScrollIndicator(false);
  };

  useEffect(() => {

    const footerNode = footerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowScrollIndicator(false);
          }
        });
      },
      { threshold: 0.1 } 
    );

    if (footerNode) {
      observer.observe(footerNode);
    }

    const handleScroll = () => {
      setShowScrollIndicator(false);

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      setScrollTimeout(
        setTimeout(() => {
          updateScrollVisibility();
        }, 3000)
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      if (footerNode) observer.unobserve(footerNode);
    };
  }, [scrollTimeout]);

  return (
    <>
      {/* Scroll Indicator */}
      <motion.div
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 ${
          showScrollIndicator ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 14.5a.75.75 0 01-.53-.22l-5-5a.75.75 0 111.06-1.06L10 12.69l4.47-4.47a.75.75 0 111.06 1.06l-5 5a.75.75 0 01-.53.22z"
              clipRule="evenodd"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Footer reference to be observed */}
      <footer ref={footerRef} />
    </>
  );
};

export default ScrollIndicator;
