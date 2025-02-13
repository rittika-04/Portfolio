import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("🚀 Sending...");

    const formData = new FormData();
    formData.append("access_key", "95884b14-0be0-434a-aa65-d5f48d9770a7");
    formData.append("name", event.target.name.value.trim());
    formData.append("email", event.target.email.value.trim());
    formData.append("message", event.target.message.value.trim());

    if (!formData.get("name") || !formData.get("email") || !formData.get("message")) {
      setResult("❌ Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult(`❌ Submission Failed: ${data.message}`);
      }
    } catch (error) {
      setResult("❌ Network Error. Please try again later.");
    }
  };

  return (
    <motion.div
    initial={{opacity: 0}} 
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
      id="contactme"  // Ensure this matches Navbar.js href="#contactme"
      className="w-full px-10 lg:px-[12%] py-16 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-cover bg-center dark:bg-none"
    >
      <motion.h4 
      initial={{y: -20, opacity: 0}} 
      whileInView={{y:0, opacity: 1}}
      transition={{delay: 0.3, duration: 0.5}}
      className="text-center mb-2 text-lg font-Ovo">Connect with Me</motion.h4>
      
      <motion.h2
      initial={{y: -20, opacity: 0}} 
      whileInView={{y:0, opacity: 1}}
      transition={{delay: 0.5, duration: 0.5}} 
      className="text-center text-5xl font-Ovo">Get in Touch</motion.h2>

      <motion.p
      initial={{opacity: 0}} 
      whileInView={{opacity: 1}}
      transition={{delay: 0.7, duration: 0.5}} 
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I specialize in delivering high-quality development services tailored to your needs.
      </motion.p>

      <motion.form 
      initial={{opacity: 0}} 
      whileInView={{opacity: 1}}
      transition={{delay: 0.9, duration: 0.5}}
       onSubmit={onSubmit} className="max-w-2xl mx-auto">
        {/* Input Fields */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input 
          initial={{x: -50, opacity: 0}} 
          whileInView={{x:0, opacity: 1}}
          transition={{delay: 1.1, duration: 0.6}}
            type="text" 
            name="name" 
            placeholder="Enter your name" 
            required 
            className="w-full p-3 outline-none border border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/80 dark:text-white"
          />
          <motion.input
          initial={{x: 50, opacity: 0}} 
          whileInView={{x:0, opacity: 1}}
          transition={{delay: 1.2, duration: 0.6}} 
            type="email" 
            name="email"
            placeholder="Enter your email" 
            required 
            className="w-full p-3 outline-none border border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/80 dark:text-white"
          />
        </motion.div>

        {/* Message Field */}
        <motion.textarea 
        initial={{y: 100, opacity: 0}} 
        whileInView={{y:0, opacity: 1}}
        transition={{delay: 1.3, duration: 0.6}}
          rows="6" 
          name="message"
          placeholder="Enter your message" 
          required 
          className="w-full p-4 outline-none border border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/80 dark:text-white"
        ></motion.textarea>

        {/* Submit Button */}
        <motion.button
          whileHover={{scale: 1.05}}
          transition={{duration: 0.3}}
          type="submit" 
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black text-white rounded-full mx-auto hover:bg-gray-900 duration-500 dark:bg-transparent dark:border dark:border-white dark:hover:bg-white dark:hover:text-black"
        >
          Submit Now 
          <Image src={assets.right_arrow_white} alt="Arrow" width={16} height={16} />
        </motion.button>

        {/* Submission Result Message */}
        {result && (
          <p className="text-center mt-4 text-gray-700 dark:text-gray-300 font-semibold">
            {result}
          </p>
        )}
      </motion.form>
    </motion.div>
  );
};

export default Contact;
