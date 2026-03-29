
// import React from 'react';

// // Education Card Component
// function EducationCard({ edu, index }) {
//   return (
//     <div
//       className="group relative animate-fade-in-up"
//       style={{ animationDelay: `${index * 0.3}s` }}
//     >
//       <div className={`absolute -inset-1 bg-gradient-to-r ${edu.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500`} />
      
//       <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-3xl border border-slate-800/50 overflow-hidden group-hover:border-blue-500/30 transition-all duration-500 group-hover:scale-[1.02] h-full">
//         <div className="p-6 sm:p-8">
//           <div className="flex items-start gap-4 mb-6">
//             <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}>
//               {edu.icon}
//             </div>
//             <div className="flex-1 min-w-0">
//               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
//                 <h3 className="text-xl sm:text-2xl md:text-3xl font-light group-hover:text-cyan-400 transition-colors duration-300">
//                   {edu.title}
//                 </h3>
//                 <span className="text-sm font-medium text-cyan-300 bg-slate-800/50 px-3 py-1 rounded-full">
//                   {edu.period}
//                 </span>
//               </div>
//               <p className={`text-sm sm:text-base bg-gradient-to-r ${edu.color} bg-clip-text text-transparent font-medium`}>
//                 {edu.institution}
//               </p>
//             </div>
//           </div>
          
//           <p className="text-slate-300 font-light leading-relaxed text-sm sm:text-base mb-6">
//             {edu.description}
//           </p>
          
//           <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${edu.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
//         </div>
//       </div>
//     </div>
//   );
// }

// // Main Education Component
// const education = [
//   {
//     title: 'BTech CSE',
//     institution: 'CodingGita X Swaminarayan University',
//     period: '2025-2029',
//     description: 'Proficient in full-stack development with hands-on experience in HTML, CSS, JavaScript, React UI/UX design and MongoDB. Skilled in basic problem solving and database management',
//     color: 'from-blue-400 to-cyan-500',
//     icon: '💻'
//   },
//   {
//     title: 'Complete School Education',
//     institution: 'St. James School',
//     period: '2012-2025',
//     description: 'Completed 12th grade (Science with Mathematics) and learning Java concepts, focusing on object-oriented programming and logical thinking.',
//     color: 'from-pink-400 to-rose-500',
//     icon: '🎓'
//   }
// ];

// export default function Education() {
//   return (
//     <div className="py-12 sm:py-22 px-4 sm:px-6 relative overflow-hidden">
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
//         <div 
//           className="absolute inset-0 opacity-5"
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
//               linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
//             `,
//             backgroundSize: '80px 80px',
//           }}
//         />
//       </div>
      
//       <div className="max-w-6xl mx-auto relative">
//         <div className="text-center mb-12 sm:mb-20">
//           <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
//             <span className="text-3xl sm:text-5xl">📚</span>
//             <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-wide">
//               My <span className="font-light bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Education</span>
//             </h2>
//           </div>
//           <p className="text-slate-400 font-light text-base sm:text-lg">
//             Academic journey and learning path
//           </p>
//         </div>
        
//         <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
//           {education.map((edu, index) => (
//             <EducationCard key={index} edu={edu} index={index} />
//           ))}
//         </div>
        
//         <div className="absolute top-20 right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-float-slow hidden sm:block" />
//         <div className="absolute bottom-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-float-slow hidden sm:block" style={{ animationDelay: '1.5s' }} />
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { motion } from "framer-motion";

// Education Card Component
function EducationCard({ edu, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      <div className={`absolute -inset-1 bg-gradient-to-r ${edu.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`} />
      
      <div className="relative bg-gray-900/60 backdrop-blur-md rounded-2xl border border-gray-800 overflow-hidden group-hover:border-gray-700 transition-all duration-500 group-hover:scale-[1.02] h-full">
        <div className="p-6 sm:p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}>
              {edu.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                  {edu.title}
                </h3>
                <span className="text-sm font-medium text-purple-300 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">
                  {edu.period}
                </span>
              </div>
              <p className={`text-sm sm:text-base bg-gradient-to-r ${edu.color} bg-clip-text text-transparent font-medium`}>
                {edu.institution}
              </p>
            </div>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
            {edu.description}
          </p>
          
          <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${edu.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
        </div>
        
        {/* Corner accents - matching Skills component */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gray-600/30 group-hover:border-gray-500/50 transition-colors duration-300" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gray-600/30 group-hover:border-gray-500/50 transition-colors duration-300" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gray-600/30 group-hover:border-gray-500/50 transition-colors duration-300" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gray-600/30 group-hover:border-gray-500/50 transition-colors duration-300" />
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

// Main Education Component
const education = [
  {
    title: 'BTech CSE',
    institution: 'CodingGita X Swaminarayan University',
    period: '2025-2029',
    description: 'Proficient in full-stack development with hands-on experience in HTML, CSS, JavaScript, React UI/UX design and MongoDB. Skilled in basic problem solving and database management',
    color: 'from-blue-500 to-cyan-500',
    icon: '💻'
  },
  {
    title: 'School Education',
    institution: 'St. James School',
    period: '2023-2025',
    description: 'Completed 10th with 92.5% & 12th with 85.6% (Science with Mathematics)  and learning Java concepts, focusing on object-oriented programming and logical thinking.',
    color: 'from-pink-500 to-rose-500',
    icon: '🎓'
  }
];

export default function Education() {
  return (
    <section
      id="education"
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
        Education
      </motion.h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
        My academic journey and learning path in computer science and technology
      </p>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="
          max-w-6xl mx-auto
          grid grid-cols-1 md:grid-cols-2
          gap-8
        "
      >
        {education.map((edu, index) => (
          <EducationCard key={index} edu={edu} index={index} />
        ))}
      </motion.div>
    </section>
  );
}