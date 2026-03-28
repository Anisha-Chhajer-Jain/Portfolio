
// import React from 'react';
// import { Code, Lightbulb, TrendingUp } from 'lucide-react';

// // Skill Card Component
// function SkillCard({ card, index }) {
//   return (
//     <div
//       className="group relative animate-fade-in-up"
//       style={{ 
//         animationDelay: `${index * 0.2}s`,
//         animationFillMode: 'both'
//       }}
//     >
//       <div className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700`} />
      
//       <div className="animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
//         <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-3xl border border-slate-800/50 hover:border-slate-700/70 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 h-full overflow-hidden">
//           <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-slate-600/30 group-hover:border-indigo-400/50 transition-all duration-500" />
//           <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-slate-600/30 group-hover:border-indigo-400/50 transition-all duration-500" />
          
//           <div className="relative overflow-hidden">
//             <div className={`absolute inset-0 bg-gradient-to-br ${card.iconBg} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />
//             <div className="relative p-6 sm:p-8">
//               <div className="flex items-center gap-4">
//                 <div className="relative">
//                   <div className={`absolute -inset-3 border-2 ${card.iconColor.split('-')[1]}-400 rounded-full opacity-0 group-hover:opacity-30 animate-ping-slow`} />
//                   <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
//                     <card.icon size={28} className={`${card.iconColor} ${card.hoverIconColor} transition-colors duration-300`} />
//                   </div>
//                 </div>
//                 <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent group-hover:from-white group-hover:to-slate-300 transition-all duration-500">
//                   {card.title}
//                 </h3>
//               </div>
//             </div>
//           </div>
          
//           <div className="p-6 sm:p-8 pt-0">
//             <p className="text-slate-300 font-light leading-relaxed text-base sm:text-lg mb-6 group-hover:text-slate-200 transition-colors duration-300">
//               {card.description}
//             </p>
            
//             <div className="flex flex-wrap gap-3">
//               {card.skills.map((skill, i) => (
//                 <span
//                   key={skill}
//                   className={`group/badge relative px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-${card.iconColor.split('-')[1]}-400/50 hover:bg-slate-800 transition-all duration-300 animate-fade-in-scale overflow-hidden`}
//                   style={{ 
//                     animationDelay: `${i * 0.1 + 0.5}s`,
//                     animationFillMode: 'both'
//                   }}
//                 >
//                   <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover/badge:opacity-20 transition-opacity duration-300`} />
//                   <span className="relative text-sm font-medium text-slate-300 group-hover/badge:text-white transition-colors duration-300">
//                     {skill}
//                   </span>
//                   <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${card.gradient} group-hover/badge:w-6 transition-all duration-300 rounded-full`} />
//                 </span>
//               ))}
//             </div>
            
//             <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${card.gradient} group-hover:w-full transition-all duration-700 rounded-full`} />
//           </div>
          
//           <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//             {[...Array(5)].map((_, i) => (
//               <div
//                 key={i}
//                 className={`absolute w-1 h-1 bg-gradient-to-r ${card.gradient} rounded-full animate-particle`}
//                 style={{
//                   top: `${20 + i * 15}%`,
//                   left: `${10 + i * 20}%`,
//                   animationDelay: `${i * 0.2}s`,
//                   animationDuration: `${1.5 + Math.random() * 1}s`
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Main Skills Component
// const skillCards = [
//   { 
//     icon: Code, 
//     title: 'Frontend Development',
//     description: 'Crafting responsive, intuitive interfaces with modern frameworks.',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     gradient: 'from-indigo-600 to-purple-600',
//     iconColor: 'text-indigo-400',
//     hoverIconColor: 'text-indigo-300',
//     iconBg: 'from-indigo-900/30 to-purple-900/20'
//   },
//   { 
//     icon: Lightbulb, 
//     title: 'Problem Solving',
//     description: 'Tackling complex challenges with elegant solutions.',
//     skills: ['C/C++', 'Java', 'Algorithms'],
//     gradient: 'from-cyan-600 to-blue-600',
//     iconColor: 'text-cyan-400',
//     hoverIconColor: 'text-cyan-300',
//     iconBg: 'from-cyan-900/30 to-blue-900/20'
//   },
//   { 
//     icon: TrendingUp, 
//     title: 'Always Learning',
//     description: 'Continuously growing with every line of code.',
//     skills: ['Git', 'Figma', 'Node.js'],
//     gradient: 'from-emerald-600 to-teal-600',
//     iconColor: 'text-emerald-400',
//     hoverIconColor: 'text-emerald-300',
//     iconBg: 'from-emerald-900/30 to-teal-900/20'
//   }
// ];

// export default function Skills() {
//   return (
//     <div className="py-12 px-4 sm:px-6" id="skills">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12 sm:mb-16">
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-6 tracking-wide">
//             My <span className="font-light bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
//           </h2>
//           <p className="text-slate-400 font-light text-base sm:text-lg max-w-2xl mx-auto">
//             Technologies and methodologies I work with to build exceptional digital experiences
//           </p>
//         </div>
        
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           {skillCards.map((card, index) => (
//             <SkillCard key={index} card={card} index={index} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import { Code, Lightbulb, TrendingUp } from 'lucide-react';
import { motion } from "framer-motion";

// Skill Card Component
function SkillCard({ card, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      <div className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`} />
      
      <div className="relative bg-gray-900/60 backdrop-blur-md rounded-2xl border border-gray-800 overflow-hidden group-hover:border-gray-700 transition-all duration-500 group-hover:scale-[1.02] h-full">
        {/* Corner accents */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gray-600/30 group-hover:border-indigo-400/50 transition-all duration-300" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gray-600/30 group-hover:border-indigo-400/50 transition-all duration-300" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gray-600/30 group-hover:border-indigo-400/50 transition-all duration-300" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gray-600/30 group-hover:border-indigo-400/50 transition-all duration-300" />
        
        <div className="relative overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${card.iconBg} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />
          <div className="relative p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className={`absolute -inset-3 border-2 ${card.iconColor.split('-')[1]}-400 rounded-full opacity-0 group-hover:opacity-30 animate-ping-slow`} />
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                  <card.icon size={28} className={`${card.iconColor} ${card.hoverIconColor} transition-colors duration-300`} />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                {card.title}
              </h3>
            </div>
          </div>
        </div>
        
        <div className="p-6 sm:p-8 pt-0">
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-6 group-hover:text-gray-200 transition-colors duration-300">
            {card.description}
          </p>
          
          <div className="flex flex-wrap gap-3">
            {card.skills.map((skill, i) => (
              <span
                key={skill}
                className={`group/badge relative px-4 py-2.5 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-${card.iconColor.split('-')[1]}-400/50 hover:bg-gray-800 transition-all duration-300 overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover/badge:opacity-20 transition-opacity duration-300`} />
                <span className="relative text-sm font-medium text-gray-300 group-hover/badge:text-white transition-colors duration-300">
                  {skill}
                </span>
                <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${card.gradient} group-hover/badge:w-6 transition-all duration-300 rounded-full`} />
              </span>
            ))}
          </div>
          
          <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${card.gradient} group-hover:w-full transition-all duration-700 rounded-full`} />
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-gradient-to-r ${card.gradient} rounded-full animate-particle`}
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 20}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${1.5 + Math.random() * 1}s`
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Animation variants for grid
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

// Main Skills Component
const skillCards = [
  { 
    icon: Code, 
    title: 'Frontend Development',
    description: 'Crafting responsive, intuitive interfaces with modern frameworks.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    gradient: 'from-purple-600 to-pink-600',
    iconColor: 'text-purple-400',
    hoverIconColor: 'text-purple-300',
    iconBg: 'from-purple-900/30 to-pink-900/20'
  },
  { 
    icon: Lightbulb, 
    title: 'Problem Solving',
    description: 'Tackling complex challenges with elegant solutions.',
    skills: ['C/C++', 'Java', 'Algorithms'],
    gradient: 'from-cyan-600 to-blue-600',
    iconColor: 'text-cyan-400',
    hoverIconColor: 'text-cyan-300',
    iconBg: 'from-cyan-900/30 to-blue-900/20'
  },
  { 
    icon: TrendingUp, 
    title: 'Always Learning',
    description: 'Continuously growing with every line of code.',
    skills: ['Git', 'Figma', 'Node.js'],
    gradient: 'from-emerald-600 to-teal-600',
    iconColor: 'text-emerald-400',
    hoverIconColor: 'text-emerald-300',
    iconBg: 'from-emerald-900/30 to-teal-900/20'
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative py-20 px-4 sm:px-8 lg:px-16
        bg-gradient-to-b from-gray-900 to-black
        overflow-hidden
      "
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
          text-center text-4xl sm:text-5xl font-bold mb-4
          bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
          bg-clip-text text-transparent
        "
      >
        My Skills
      </motion.h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
        Technologies and methodologies I work with to build exceptional digital experiences
      </p>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="
          max-w-7xl mx-auto
          grid sm:grid-cols-2 lg:grid-cols-3
          gap-8
        "
      >
        {skillCards.map((card, index) => (
          <SkillCard key={index} card={card} index={index} />
        ))}
      </motion.div>

      {/* Decorative corner accents */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gray-600/30 hidden lg:block" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gray-600/30 hidden lg:block" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gray-600/30 hidden lg:block" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gray-600/30 hidden lg:block" />
    </section>
  );
}