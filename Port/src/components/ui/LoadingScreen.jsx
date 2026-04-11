import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const name = "Anisha Chhajer";
  const letters = name.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020617] text-white overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="relative">
        {/* Animated Background Glows */}
        <motion.div
           className="absolute -inset-10 bg-indigo-500/20 blur-[100px] rounded-full"
           animate={{
             scale: [1, 1.2, 1],
             opacity: [0.3, 0.5, 0.3],
           }}
           transition={{
             duration: 4,
             repeat: Infinity,
             ease: "easeInOut",
           }}
        />
        
        <div className="flex overflow-hidden">
          {letters.map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className={`text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter ${char === " " ? "mr-4" : ""}`}
            >
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {char}
              </span>
            </motion.span>
          ))}
        </div>

        {/* Progress Line */}
        <div className="mt-8 w-full h-[2px] bg-white/5 relative overflow-hidden rounded-full">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
          />
        </div>

        <motion.p
          className="mt-4 text-center text-indigo-300/60 text-sm font-light tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Loading Portfolio
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
