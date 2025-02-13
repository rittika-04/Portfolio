import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';

const Navbar = () => {
  const sideMenuRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false); // Prevent hydration issues

  // Ensure that dark mode is only applied on the client
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(storedDarkMode);
    setMounted(true); // Now it's safe to update UI
  }, []);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Sidebar Menu Functions
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(0)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(100%)";
  };

  return (
    <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-white dark:bg-darkTheme shadow-md transition-all duration-300">
      {/* Logo */}
      <a href="#top">
        {mounted ? (
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Logo" className="w-28 cursor-pointer" />
        ) : (
          <Image src={assets.logo} alt="Logo" className="w-28 cursor-pointer" />
        )}
      </a>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 dark:bg-gray-800">
        <li><a href="#top" className="font-Ovo hover:text-blue-500 dark:hover:text-yellow-400 transition">Home</a></li>
        <li><a href="#about" className="font-Ovo hover:text-blue-500 dark:hover:text-yellow-400 transition">About Me</a></li>
        <li><a href="#certificate" className="font-Ovo hover:text-blue-500 dark:hover:text-yellow-400 transition">Certificates</a></li>
        <li><a href="#mywork" className="font-Ovo hover:text-blue-500 dark:hover:text-yellow-400 transition">My Work</a></li>
        <li><a href="#contactme" className="font-Ovo hover:text-blue-500 dark:hover:text-yellow-400 transition">Contact Me</a></li>
      </ul>

      {/* Right Section - Dark Mode, Contact Button & Mobile Menu */}
      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode}>
          {mounted ? (
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="Dark Mode" className="w-6" />
          ) : (
            <Image src={assets.moon_icon} alt="Dark Mode" className="w-6" />
          )}
        </button>

        {/* Contact Button (Only visible on large screens) */}
        <a 
          href="#contactme" 
          className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo 
          hover:bg-gray-800 hover:text-white transition dark:border-gray-300 dark:hover:bg-gray-100 dark:hover:text-black"
        >
          Contact
          <Image src={assets.arrow_icon} alt="Arrow Icon" className="w-3" />
        </a>

        {/* Mobile Menu Button */}
        <button className="block md:hidden" onClick={openMenu}>
          <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="Menu" className="w-6" />
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div 
        ref={sideMenuRef} 
        className="fixed top-0 right-0 w-64 h-screen bg-rose-50 shadow-lg px-10 py-20 flex flex-col gap-4 
        transform translate-x-full transition-transform duration-500 z-50 dark:bg-gray-900 dark:text-white"
      >
        {/* Close Button */}
        <button className="absolute top-6 right-6" onClick={closeMenu}>
          <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close" className="w-5 cursor-pointer" />
        </button>

        <li><a href="#top" className="font-Ovo hover:text-blue-500 dark:hover:text-yellow-400 transition" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" className="font-Ovo hover:text-blue-500 dark:hover:text-yellow-400 transition" onClick={closeMenu}>About Me</a></li>
        <li><a href="#certificate" className="font-Ovo hover:text-blue-500 dark:hover:text-yellow-400 transition" onClick={closeMenu}>Certificates</a></li>
        <li><a href="#mywork" className="font-Ovo hover:text-blue-500 dark:hover:text-yellow-400 transition" onClick={closeMenu}>My Work</a></li>
        <li><a href="#contactme" className="font-Ovo hover:text-blue-500 dark:hover:text-yellow-400 transition" onClick={closeMenu}>Contact Me</a></li>
      </div>
    </nav>
  );
};

export default Navbar;
