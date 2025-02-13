import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { serviceData } from "@/assets/assets"; // ✅ Import certificate data

const Services = () => {
  // Group certificates by category
  const groupedCertificates = serviceData.reduce((acc, cert) => {
    acc[cert.category] = acc[cert.category] || [];
    acc[cert.category].push(cert);
    return acc;
  }, {});

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="certificate"
      className="w-full px-10 lg:px-[12%] scroll-mt-20"
    >
      {/* Heading Section */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo mb-10"
      >
       Browse My Certificates
      </motion.h2>

      {Object.entries(groupedCertificates).map(([category, certificates], index) => (
        <div key={index} className="mb-16">
          {/* Section Title */}
          <motion.h3
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center text-3xl font-Ovo mb-6"
          >
            {category}
          </motion.h3>

          {/* Certificate Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mx-auto"
          >
            {certificates.map(({ title, description, bgImage, link }, idx) => (
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
                key={idx}
                className="border border-gray-400 rounded-lg p-6 transition-all duration-500 cursor-pointer dark:hover:bg-darkHover dark:hover:shadow-white"
              >
                {/* Display Certificate Image */}
                {bgImage && (
                  <div className="relative w-full">
                    <Image
                      src={bgImage}
                      alt={title}
                      width={500}
                      height={300}
                      className="rounded-lg shadow-md object-cover"
                    />
                  </div>
                )}

                <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
                <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{description}</p>

                {/* View Certificate Button */}
                {link && (
                  <div className="mt-5">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border-2 border-gray-700 rounded-full flex items-center gap-2 hover:border-black transition duration-300"
                    >
                      View Certificate (PDF)
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default Services;
