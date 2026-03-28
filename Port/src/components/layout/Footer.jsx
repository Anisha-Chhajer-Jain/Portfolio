// import React from 'react';
// import { Github, Linkedin, Twitter } from 'lucide-react';

// export default function Footer() {
//   const socialLinks = [
//     { Icon: Github, url: 'https://github.com/Anisha-Chhajer-Jain', label: 'GitHub', gradient: 'from-slate-800 to-gray-900' },
//     { Icon: Linkedin, url: 'https://www.linkedin.com/in/anisha-chhajer-844114367/', label: 'LinkedIn', gradient: 'from-blue-700 to-blue-800' },
//     { Icon: Twitter, url: 'https://x.com/anisha_chhajer', label: 'Twitter', gradient: 'from-sky-600 to-cyan-600' },
//   ];
  
//   return (
//     <footer className="py-12 px-4 sm:px-6 relative overflow-hidden">
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 via-transparent to-transparent" />
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
//       </div>
      
//       <div className="max-w-4xl mx-auto relative">
//         <div className="text-center">
//           <div className="mb-10">
//             <div className="mb-6">
//               <p className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-2">
//                 Or Connect On Social Media
//               </p>
//               <p className="text-sm text-slate-400 font-light">
//                 Follow me for updates and insights
//               </p>
//             </div>
            
//             <div className="flex justify-center gap-6 mb-10">
//               {socialLinks.map(({ Icon, url, label, gradient }) => (
//                 <a
//                   key={label}
//                   href={url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group relative"
//                 >
//                   <div className={`absolute -inset-2 bg-gradient-to-r ${gradient} rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`} />
//                   <div className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${gradient} border border-slate-700/50 group-hover:border-white/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 shadow-lg group-hover:shadow-xl`}>
//                     <Icon size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
//                     <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-slate-900/90 backdrop-blur-sm rounded-lg border border-slate-700/50 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none whitespace-nowrap">
//                       <span className="text-xs font-medium text-white">{label}</span>
//                       <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 border-b border-r border-slate-700/50 rotate-45" />
//                     </div>
//                   </div>
//                 </a>
//               ))}
//             </div>
            
//             <div className="group relative">
//               <div className="inline-block">
//                 <p className="text-xl font-bold text-slate-300 group-hover:text-white transition-colors duration-300">
//                   © 2025 Anisha Chhajer
//                 </p>
//                 <p className="text-base font-medium bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mt-2">
//                   All rights reserved
//                 </p>
//                 <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-400 group-hover:w-40 transition-all duration-500" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { Icon: Github, url: 'https://github.com/Anisha-Chhajer-Jain', label: 'GitHub', gradient: 'from-gray-600 to-gray-800', hoverColor: 'hover:border-gray-500' },
    { Icon: Linkedin, url: 'https://www.linkedin.com/in/anisha-chhajer-844114367/', label: 'LinkedIn', gradient: 'from-blue-600 to-blue-800', hoverColor: 'hover:border-blue-500' },
    { Icon: Twitter, url: 'https://x.com/anisha_chhajer', label: 'Twitter', gradient: 'from-sky-500 to-cyan-600', hoverColor: 'hover:border-sky-500' },
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
    <footer className="relative py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Decorative elements - matching other components */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
      </div>
      
      {/* Corner accents - matching Skills component */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gray-600/30 hidden lg:block" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gray-600/30 hidden lg:block" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gray-600/30 hidden lg:block" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gray-600/30 hidden lg:block" />
      
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-10">
            <motion.div variants={itemVariants} className="mb-6">
              <p className="text-xl font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-2">
                Connect With Me
              </p>
              <p className="text-sm text-gray-400">
                Follow me for updates and insights
              </p>
            </motion.div>
            
            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-10">
              {socialLinks.map(({ Icon, url, label, gradient, hoverColor }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className={`absolute -inset-2 bg-gradient-to-r ${gradient} rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`} />
                  <div className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${gradient} border border-gray-700 group-hover:border-${gradient.split('-')[1]}-400/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 shadow-lg group-hover:shadow-xl`}>
                    <Icon size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
                    
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none whitespace-nowrap">
                      <span className="text-xs font-medium text-white">{label}</span>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 border-b border-r border-gray-700 rotate-45" />
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
            
            {/* Copyright */}
            <motion.div variants={itemVariants} className="group relative">
              <div className="inline-block">
                <p className="text-xl font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                  © 2025 Anisha Chhajer
                </p>
                <p className="text-base font-medium bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mt-2">
                  All rights reserved
                </p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 group-hover:w-40 transition-all duration-500" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}