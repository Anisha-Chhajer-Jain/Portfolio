import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Leetcode() {
  const [stats, setStats] = useState({
    totalSolved: 92,
    totalQuestions: 3902,
    easySolved: 81,
    totalEasy: 937,
    mediumSolved: 10,
    totalMedium: 2042,
    hardSolved: 1,
    totalHard: 923,
    ranking: "1,601,536"
  });

  useEffect(() => {
    fetch('https://alfa-leetcode-api.onrender.com/userProfile/anisha_chhajer')
      .then(res => res.json())
      .then(data => {
        if (data && data.totalSolved !== undefined) {
          setStats({
            totalSolved: data.totalSolved,
            totalQuestions: data.totalQuestions || 3902,
            easySolved: data.easySolved,
            totalEasy: data.totalEasy || 937,
            mediumSolved: data.mediumSolved,
            totalMedium: data.totalMedium || 2042,
            hardSolved: data.hardSolved,
            totalHard: data.totalHard || 923,
            ranking: data.ranking ? data.ranking.toLocaleString() : "1,601,536"
          });
        }
      })
      .catch(err => console.error("Error fetching LeetCode stats:", err));
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-24 bg-[#050507] relative overflow-hidden" id="coding-profiles">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-20">
        <div className="w-[800px] h-[800px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-[#050507] to-transparent blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-amber-500 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4">
            Problem Solving
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight flex items-center justify-center gap-3 flex-wrap">
            LeetCode <span className="font-serif italic text-slate-500 font-medium">Journey</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
        >
          {/* Total Solved */}
          <motion.a 
            href="https://leetcode.com/u/anisha_chhajer/" 
            target="_blank" 
            rel="noopener noreferrer"
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-[#0a0a0a] border border-[#222] hover:border-white/20 transition-colors shadow-2xl"
          >
            <p className="text-[10px] sm:text-xs font-bold text-slate-400 tracking-wider uppercase mb-3">Total Solved</p>
            <p className="text-4xl sm:text-5xl font-black text-white mb-2">{stats.totalSolved}</p>
            <p className="text-xs text-slate-500">out of {stats.totalQuestions}</p>
          </motion.a>

          {/* Easy */}
          <motion.a 
            href="https://leetcode.com/u/anisha_chhajer/" 
            target="_blank" 
            rel="noopener noreferrer"
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-[#0a0a0a] border border-[#222] hover:border-[#00b8a3]/30 transition-colors shadow-2xl"
          >
            <p className="text-[10px] sm:text-xs font-bold text-[#00b8a3] tracking-wider uppercase mb-3">Easy</p>
            <p className="text-4xl sm:text-5xl font-black text-[#00b8a3] mb-2">{stats.easySolved}</p>
            <p className="text-xs text-slate-500">out of {stats.totalEasy}</p>
          </motion.a>

          {/* Medium */}
          <motion.a 
            href="https://leetcode.com/u/anisha_chhajer/" 
            target="_blank" 
            rel="noopener noreferrer"
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-[#0a0a0a] border border-[#222] hover:border-[#ffc01e]/30 transition-colors shadow-2xl"
          >
            <p className="text-[10px] sm:text-xs font-bold text-[#ffc01e] tracking-wider uppercase mb-3">Medium</p>
            <p className="text-4xl sm:text-5xl font-black text-[#ffc01e] mb-2">{stats.mediumSolved}</p>
            <p className="text-xs text-slate-500">out of {stats.totalMedium}</p>
          </motion.a>

          {/* Hard */}
          <motion.a 
            href="https://leetcode.com/u/anisha_chhajer/" 
            target="_blank" 
            rel="noopener noreferrer"
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-[#0a0a0a] border border-[#222] hover:border-[#ef4743]/30 transition-colors shadow-2xl"
          >
            <p className="text-[10px] sm:text-xs font-bold text-[#ef4743] tracking-wider uppercase mb-3">Hard</p>
            <p className="text-4xl sm:text-5xl font-black text-[#ef4743] mb-2">{stats.hardSolved}</p>
            <p className="text-xs text-slate-500">out of {stats.totalHard}</p>
          </motion.a>
        </motion.div>

        {/* Global Ranking Banner */}
        <motion.a 
          href="https://leetcode.com/u/anisha_chhajer/" 
          target="_blank" 
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 rounded-3xl bg-[#0a0a0a] border border-amber-900/40 hover:border-amber-500/40 transition-colors shadow-lg shadow-amber-900/5 group"
        >
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Global Ranking</h3>
            <p className="text-sm text-slate-400">Consistent progress and dedication</p>
          </div>
          
          <div className="flex items-baseline gap-1 group-hover:scale-105 transition-transform duration-300">
            <span className="text-amber-500/70 font-bold text-xl sm:text-2xl">#</span>
            <span className="text-4xl sm:text-5xl md:text-6xl font-black text-amber-500 tracking-tighter">
              {stats.ranking}
            </span>
          </div>
        </motion.a>

      </div>
    </section>
  );
}
