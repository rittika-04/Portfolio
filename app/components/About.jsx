import { infoList, toolsData, assets } from "@/assets/assets"; // Ensure correct asset path
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-10 lg:px-[12%] scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Section Title */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About Me
      </motion.h2>

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center gap-16 my-20"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl shadow-lg"
        >
          <Image
            src={assets.user_image}
            alt="User Image"
            width={500}
            height={500}
            className="w-full rounded-3xl"
          />
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-Ovo text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a highly motivated and self-driven individual with a strong aptitude for problem-solving and a deep commitment to continuous development. I enjoy tackling complex challenges, analyzing data, and developing innovative solutions to real-world problems. I'm a firm believer in lifelong learning and actively pursue opportunities to expand my knowledge and skillset.
          </p>

          {/* Key Information List */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                className="border border-gray-300 dark:border-white rounded-xl p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-500"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  width={30}
                  height={30}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="text-gray-600 text-sm dark:text-gray-400">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="mt-10 mb-4 text-lg font-semibold text-gray-700 dark:text-white"
          >
            Tools I use
          </motion.h4>

          <motion.ul
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-500"
              >
                <Image src={tool} alt={`Tool ${index + 1}`} width={30} height={30} />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
