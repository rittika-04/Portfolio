import { assets } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';

const Footer = ({ isDarkMode }) => {
  return (
    <div className={`mt-10 py-6 text-center ${isDarkMode ? 'bg-darkTheme text-white' : 'bg-white-100 text-gray-700'}`}>
      {/* Logo */}
      <Image 
        src={isDarkMode ? assets.logo_dark : assets.logo} 
        alt="Rittika Shaw Logo" 
        width={144} 
        height={36} 
        className="mx-auto mb-2"
      />

      {/* Email Contact */}
      <div className="flex justify-center items-center gap-2 mb-3">
        <Image 
          src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} 
          alt="Mail Icon" 
          width={20} 
          height={20} 
        />
        <p className="text-sm">shaw.rittika15@gmail.com</p>
      </div>

      {/* Footer Bottom with Border */}
      <div className={`border-t mx-auto max-w-2xl mt-4 pt-3 text-xs ${isDarkMode ? 'border-white/20' : 'border-gray-300'}`}>
        <p>&copy; {new Date().getFullYear()} Rittika Shaw. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
