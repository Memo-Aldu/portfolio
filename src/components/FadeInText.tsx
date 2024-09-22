"use client";
import { motion } from "framer-motion";
import React from "react";

const splitText = (text: string) => {
  return text.split("").map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      style={{ display: "inline-block" }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));
};

type FadeInTextProps = {
  children: React.ReactNode;
};

const FadeInText: React.FC<FadeInTextProps> = ({ children }) => {
  if (!React.isValidElement(children)) {
    return null;
  }

  const text = (children.props.children as string) || "";

    return React.cloneElement(children, {}, splitText(text));
};

export default FadeInText;