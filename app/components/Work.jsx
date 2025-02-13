import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets, workData } from "@/assets/assets";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="mywork"
      className="w-full px-10 lg:px-[12%] scroll-mt-20"
    >
      {/* Section Title */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Latest Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I specialize in delivering high-quality development services tailored to your needs.
      </motion.p>

      {/* Work Grid - Updated Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-10 dark:text-black">
        {workData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white rounded-2xl shadow-lg p-5 border border-gray-300 hover:shadow-xl transition cursor-pointer"
          >
            {/* Project Image */}
            <div className="w-full h-48 relative">
              <Image
                src={project.bgImage}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                unoptimized
              />
            </div>

            {/* Project Title */}
            <h2 className="text-xl font-semibold text-center mt-4">{project.title}</h2>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black px-4 py-2 rounded-full text-black font-medium hover:bg-black hover:text-white transition"
              >
                Github
              </a>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black px-4 py-2 rounded-full text-black font-medium hover:bg-black hover:text-white transition"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href="#"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show More
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="Right arrow"
          width={16}
          height={16}
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
