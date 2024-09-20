"use client";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="p-8"
    >
      <h1 className="text-4xl font-bold">Welcome to Memo's Personal Website</h1>
      <p className="text-lg">
        Hi, I'm Memo, a Software Engineer passionate about technology.
      </p>
    </motion.div>
  );
}
