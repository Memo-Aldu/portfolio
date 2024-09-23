"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const hoverAnimation = {
    hover: {
      scale: 1.1,
      backgroundColor: "#1F1F1F",
      borderRadius: "20px",
      padding: "8px 16px",
      color: "#F7A650",
    },
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#181818] bg-opacity-80 backdrop-blur-lg p-4 shadow-lg">
      <div className="flex justify-between items-center">
        <Link href="/" passHref>
          <motion.h1
            className="text-lg lg:text-xl font-bold text-white cursor-pointer"
            whileHover={{ scale: 1.1, color: "#F7A650" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Memo.a
          </motion.h1>
        </Link>

        <ul className="flex items-center pt-1 space-x-2 sm:space-x-6 text-sm md:text-lg text-gray-300">
          <li>
            <Link href="/experience" passHref>
              <motion.span
                className="cursor-pointer hover:text-white transition"
                variants={hoverAnimation}
                whileHover="hover"
                transition={{ duration: 0.2 }}
              >
                Experience
              </motion.span>
            </Link>
          </li>
          <li>
            <Link href="/projects" passHref>
              <motion.span
                className="cursor-pointer hover:text-white transition"
                variants={hoverAnimation}
                whileHover="hover"
                transition={{ duration: 0.3 }}
              >
                Projects
              </motion.span>
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              <motion.span
                className="cursor-pointer hover:text-white transition"
                variants={hoverAnimation}
                whileHover="hover"
                transition={{ duration: 0.3 }}
              >
                Contact
              </motion.span>
            </Link>
          </li>
          <li>
            <Link href="/resume" passHref>
              <motion.span
                className="cursor-pointer hover:text-white transition"
                variants={hoverAnimation}
                whileHover="hover"
                transition={{ duration: 0.3 }}
              >
                Resume
              </motion.span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
