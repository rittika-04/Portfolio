import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "@/assets/assets";

// Updated roles based on resume
const roles = [
  "Frontend Web Developer",
  "Full-Stack Developer",
  "Tech Innovator & Problem Solver"
];

const Header = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500); // Change text every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      {/* Profile Image */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image 
          src={assets.profile_img} 
          alt="Profile Image" 
          width={128} 
          height={128} 
          className="rounded-full"
        />
      </motion.div>

      {/* Intro */}
      <motion.h3 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex justify-center md:justify-start items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        I'm Rittika Shaw 
        <Image 
          src={assets.hand_icon} 
          alt="Hand Icon" 
          width={24} 
          height={24} 
        />
      </motion.h3>

      {/* Title with Appear-Disappear Animation */}
      <div className="h-16 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={roles[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
          >
            {roles[index]}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Description */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo text-white-700 mt-2"
      >
        I'm a passionate frontend web developer who specializes in building elegant and user-friendly web applications.
      </motion.p>

      {/* Buttons Section */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
        {/* LinkedIn Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="https://www.linkedin.com/in/rittika-shaw-41454023b/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
        >
          LinkedIn
        </motion.a>

        {/* GitHub Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="https://github.com/rittika-04"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border-2 border-gray-700 rounded-full flex items-center gap-2 hover:border-black transition duration-300"
        >
          GitHub
        </motion.a>

        {/* Contact Me */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          href="#contact"
          className="px-6 py-3 border border-white bg-black text-white rounded-full flex items-center gap-2 hover:bg-gray-800 transition duration-300"
        >
          Contact Me
          <Image 
            src={assets.right_arrow_white} 
            alt="Arrow Icon" 
            width={16} 
            height={16} 
          />
        </motion.a>

        {/* My Resume */}
        <motion.a 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          href="/Rittika Shaw_Resume.pdf"  
          download="Rittika_Shaw_Resume.pdf"
          className="px-6 py-3 border-2 border-gray-700 rounded-full flex items-center gap-2 hover:border-black transition duration-300"
        >
          My Resume
          <Image 
            src={assets.download_icon} 
            alt="Download Icon" 
            width={16} 
            height={16} 
            className="w-4"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
