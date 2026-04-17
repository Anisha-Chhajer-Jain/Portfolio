
import React from 'react';
import { Github, Linkedin, Twitter, Code } from 'lucide-react';
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { Icon: Github, url: 'https://github.com/Anisha-Chhajer-Jain', label: 'GitHub', gradient: 'from-gray-600 to-gray-800' },
    { Icon: Linkedin, url: 'https://www.linkedin.com/in/anisha-chhajer-844114367/', label: 'LinkedIn', gradient: 'from-blue-600 to-blue-800' },
    { Icon: Twitter, url: 'https://x.com/anisha_chhajer', label: 'Twitter', gradient: 'from-sky-500 to-cyan-600' },
    { Icon: Code, url: 'https://leetcode.com/u/anisha_chhajer/', label: 'LeetCode', gradient: 'from-orange-600 to-yellow-700' },
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-[var(--bg-primary)] overflow-hidden transition-colors duration-300">
      {/* Decorative elements - responsive positioning */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[90%] sm:max-w-3xl md:max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[90%] sm:max-w-3xl md:max-w-4xl h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
      </div>
      
      {/* Corner accents - responsive visibility and sizing */}
      <div className="absolute top-2 left-2 w-2 h-2 sm:w-3 sm:h-3 border-t-2 border-l-2 border-gray-600/30 hidden sm:block" />
      <div className="absolute top-2 right-2 w-2 h-2 sm:w-3 sm:h-3 border-t-2 border-r-2 border-gray-600/30 hidden sm:block" />
      <div className="absolute bottom-2 left-2 w-2 h-2 sm:w-3 sm:h-3 border-b-2 border-l-2 border-gray-600/30 hidden sm:block" />
      <div className="absolute bottom-2 right-2 w-2 h-2 sm:w-3 sm:h-3 border-b-2 border-r-2 border-gray-600/30 hidden sm:block" />
      
      <div className="max-w-6xl mx-auto relative px-2 sm:px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8 sm:mb-10 md:mb-12">
            {/* Header Section - Responsive typography */}
            <motion.div variants={itemVariants} className="mb-4 sm:mb-6 md:mb-8">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--text-primary)] mb-1 sm:mb-2 text-center">
                Connect With Me
              </p>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                Follow me for updates and insights
              </p>
            </motion.div>
            
            {/* Social Links - Fully responsive with flexible gaps and sizes */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8 sm:mb-10 md:mb-12"
            >
              {socialLinks.map(({ Icon, url, label, gradient }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={label}
                >
                  {/* Glow effect background - responsive blur */}
                  <div className={`absolute -inset-1.5 sm:-inset-2 bg-gradient-to-r ${gradient} rounded-full opacity-0 group-hover:opacity-20 blur-sm sm:blur-md transition-opacity duration-500`} />
                  
                  {/* Icon button - Responsive sizing */}
                  <div className={`
                    relative 
                    w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 lg:w-14 lg:h-14 
                    rounded-full bg-gradient-to-br ${gradient} 
                    border border-[var(--border-primary)] group-hover:border-[var(--text-primary)]/30 
                    flex items-center justify-center 
                    transition-all duration-300 
                    group-hover:scale-110 group-hover:-translate-y-1 
                    shadow-lg group-hover:shadow-xl
                  `}>
                    <Icon 
                      size={window.innerWidth < 640 ? 18 : window.innerWidth < 768 ? 20 : window.innerWidth < 1024 ? 22 : 24} 
                      className="text-white group-hover:scale-110 transition-transform duration-300" 
                    />
                    
                    {/* Tooltip - Responsive positioning and sizing */}
                    <div className="
                      absolute 
                      -top-9 sm:-top-10 md:-top-12 
                      left-1/2 -translate-x-1/2 
                      px-2 py-1 sm:px-2.5 sm:py-1.5 md:px-3 md:py-2 
                      bg-[var(--bg-secondary)] backdrop-blur-sm 
                      rounded-lg border border-[var(--border-primary)] 
                      opacity-0 group-hover:opacity-100 
                      group-hover:-translate-y-1 
                      transition-all duration-300 
                      pointer-events-none 
                      whitespace-nowrap 
                      z-20
                      text-[10px] sm:text-xs md:text-sm
                    ">
                      <span className="text-[var(--text-primary)] font-medium">{label}</span>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(--bg-secondary)] border-b border-r border-[var(--border-primary)] rotate-45" />
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
            
            {/* Copyright Section - Responsive text sizes */}
            <motion.div variants={itemVariants} className="group relative">
              <div className="inline-block">
                <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                  © 2025 Anisha Chhajer
                </p>
                <p className="text-xs sm:text-sm md:text-base font-medium bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mt-1 sm:mt-2">
                  All rights reserved
                </p>
                {/* Animated underline - responsive width */}
                <div className="
                  absolute -bottom-2 left-1/2 -translate-x-1/2 
                  w-0 h-0.5 
                  bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 
                  group-hover:w-24 sm:group-hover:w-32 md:group-hover:w-36 lg:group-hover:w-40 
                  transition-all duration-500 
                " />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}