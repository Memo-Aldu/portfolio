"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaGithub, FaDiscord } from "react-icons/fa"; // Updated icons

const contacts = [
  {
    platform: "LinkedIn",
    icon: <FaLinkedin size={40} className="text-[#0A66C2]" />,
    username: "@memo-aldu",
    link: "https://www.linkedin.com/in/memo-aldu/",
  },
  {
    platform: "Email",
    icon: <FaEnvelope size={40} className="text-[#D44638]" />,
    username: "aldu.memo@gmail.com",
    link: "mailto:aldu.memo@gmail.com",
  },
  {
    platform: "Discord",
    icon: <FaDiscord size={40} className="text-[#5865F2]" />,
    username: "@memo.a",
    link: "https://discord.com",
  },
  {
    platform: "GitHub",
    icon: <FaGithub size={40} className="text-[#FFFFFF] bg-[#181818] rounded-full p-2" />,
    username: "@memo-aldu",
    link: "https://github.com/Memo-Aldu",
  },
];

export default function Contact() {

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl lg:text-5xl font-bold text-center mb-8">Contact Me</h2>

      {/* Contact Section */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {contacts.map((contact, idx) => (
          <motion.a
            key={idx}
            href={contact.link}
            whileHover={{ scale: 1.05 }}
            className="relative bg-[#1F1F1F] text-[#EFF0F0] p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-all duration-300 cursor-pointer group"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Border hover animation */}
            <motion.div
              className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-[#F7A650] transition-all duration-300"
            />

            {/* Line Animation */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "50px" }}
              transition={{ duration: 1.2 }}
              className="absolute left-1/2 transform -translate-x-1/2 top-[60px] w-[2px] bg-gradient-to-b from-[#F7A650] to-transparent"
            />

            {/* Contact Icon */}
            <div className="mb-4 z-10">{contact.icon}</div>

            {/* Username */}
            <p className="mt-2 text-md font-semibold">{contact.username}</p>

            {/* Platform */}
            <p className="text-sm text-[#F7A650]">{contact.platform}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
