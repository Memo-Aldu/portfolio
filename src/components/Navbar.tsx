"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/resume", label: "Resume" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hoverAnimation = {
    hover: {
      scale: 1.05,
      backgroundColor: "#1F1F1F",
      borderRadius: "12px",
      padding: "8px 16px",
      color: "#F7A650",
    },
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? "bg-[#181818] bg-opacity-95 backdrop-blur-lg shadow-xl" : "bg-[#181818] bg-opacity-80 backdrop-blur-lg"
    } p-4`}>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" passHref>
          <motion.h1
            className="text-lg lg:text-xl font-bold text-white cursor-pointer"
            whileHover={{ scale: 1.1, color: "#F7A650" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Memo.a
          </motion.h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6 text-lg text-gray-300">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} passHref>
                <motion.span
                  className={`cursor-pointer transition-colors relative ${
                    pathname === item.href ? "text-[#F7A650]" : "hover:text-white"
                  }`}
                  variants={hoverAnimation}
                  whileHover="hover"
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#F7A650]"
                      layoutId="activeTab"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <motion.button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-6 h-0.5 bg-white block"
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 6 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white block"
            animate={{
              opacity: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-white block"
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -6 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-[#181818] bg-opacity-95 backdrop-blur-lg border-t border-[#3A3A3A]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col p-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={item.href} passHref>
                    <motion.span
                      className={`block py-3 px-4 text-lg rounded-lg transition-colors ${
                        pathname === item.href
                          ? "text-[#F7A650] bg-[#1F1F1F]"
                          : "text-gray-300 hover:text-white hover:bg-[#1F1F1F]"
                      }`}
                      onClick={() => setIsOpen(false)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
