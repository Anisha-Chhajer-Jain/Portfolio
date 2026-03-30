

// // import React, { useState } from 'react';
// // import { Github, Youtube, ExternalLink } from 'lucide-react';

// // // Project Card Component
// // function ProjectCard({ project, index }) {
// //   return (
// //     <div
// //       className="group relative animate-fade-in-up"
// //       style={{ animationDelay: `${index * 0.15}s` }}
// //     >
// //       <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
      
// //       <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-3xl border border-slate-800/50 overflow-hidden group-hover:border-slate-700 transition-all duration-500 group-hover:scale-[1.02]">
// //         <div className="relative h-48 sm:h-56 overflow-hidden">
// //           <img 
// //             src={project.image} 
// //             alt={project.title}
// //             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// //             onError={(e) => {
// //               e.target.src = `https://via.placeholder.com/400x300/1e293b/64748b?text=${encodeURIComponent(project.title)}`;
// //             }}
// //           />
// //           <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500`} />
// //           <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 to-transparent">
// //             <h3 className="text-xl sm:text-2xl font-bold text-white">
// //               {project.title}
// //             </h3>
// //           </div>
// //         </div>
        
// //         <div className="p-4 sm:p-6">
// //           <div className="flex flex-wrap gap-2 mb-3">
// //             {project.tags.map((tag, i) => (
// //               <span
// //                 key={tag}
// //                 className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-slate-700/50 group-hover:border-slate-600 transition-all duration-300`}
// //                 style={{ animationDelay: `${i * 0.1}s` }}
// //               >
// //                 {tag}
// //               </span>
// //             ))}
// //           </div>
          
// //           <p className="text-slate-400 font-light leading-relaxed mb-4 text-sm sm:text-base line-clamp-3">
// //             {project.description}
// //           </p>
          
// //           <div className="flex flex-wrap gap-2 sm:gap-3">
// //             <a 
// //               href={project.github}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="group/btn flex-1 flex items-center justify-center gap-1.5 px-2 sm:px-3 py-2 bg-slate-800/50 hover:bg-slate-800 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-105 min-w-[80px]"
// //             >
// //               <Github size={14} className="sm:w-4 sm:h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
// //               <span className="text-xs font-bold text-white">GitHub</span>
// //             </a>
// //             <a 
// //               href={project.youtube}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="group/btn flex-1 flex items-center justify-center gap-1.5 px-2 sm:px-3 py-2 bg-red-600/20 hover:bg-red-600/30 rounded-lg border border-red-500/50 hover:border-red-400 transition-all duration-300 hover:scale-105 min-w-[80px]"
// //             >
// //               <Youtube size={14} className="sm:w-4 sm:h-4 group-hover/btn:scale-110 transition-transform duration-300" />
// //               <span className="text-xs font-bold text-white">YouTube</span>
// //             </a>
// //             <a 
// //               href={project.demo}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="group/btn flex-1 flex items-center justify-center gap-1.5 px-2 sm:px-3 py-2 bg-indigo-600/20 hover:bg-indigo-600/30 rounded-lg border border-indigo-500/50 hover:border-indigo-400 transition-all duration-300 hover:scale-105 min-w-[80px]"
// //             >
// //               <ExternalLink size={14} className="sm:w-4 sm:h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
// //               <span className="text-xs font-bold text-white">Live Demo</span>
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // Load More Button Component
// // function LoadMoreButton({ onClick, count, label }) {
// //   return (
// //     <div className="flex justify-center mt-8 sm:mt-12">
// //       <button
// //         onClick={onClick}
// //         className="group relative px-6 sm:px-8 py-3 sm:py-4 overflow-hidden rounded-xl border border-indigo-400/50 hover:border-indigo-400 transition-all duration-500 hover:scale-105"
// //       >
// //         <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
// //         <span className="relative flex items-center gap-2 font-light text-base sm:text-lg">
// //           Load More {label}
// //           <span className="text-sm opacity-70">({count} more)</span>
// //         </span>
// //       </button>
// //     </div>
// //   );
// // }

// // // Main Projects Component
// // const projects = [
// //   {
// //     title: 'Flipkart Clone',
// //     description: 'A fully responsive Flipkart-inspired e-commerce UI clone with product listings, cart functionality, and modern design.',
// //     tags: ['HTML', 'CSS', 'JS', 'Responsive'],
// //     gradient: 'from-orange-400 to-yellow-500',
// //     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284088/Screenshot_2026-02-05_150323_jsohtj.png',
// //     github: 'https://github.com/Anisha-Chhajer-Jain/FLIPKART-CLONE',
// //     youtube: 'https://youtu.be/AvD3hqPTmMU?si=Q5hmb3LLucv2W9Ov',
// //     demo: 'https://dancing-malasada-228dd4.netlify.app/'
// //   },
// //   {
// //     title: 'Rare Planet',
// //     description: 'A Rare Planet–inspired website UI clone with smooth animations, modern layout, and interactive elements.',
// //     tags: ['HTML', 'CSS', 'JS', 'Animations'],
// //     gradient: 'from-teal-400 to-cyan-500',
// //     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284092/Screenshot_2026-02-05_150245_uyufp5.png',
// //     github: 'https://github.com/Anisha-Chhajer-Jain/RARE-PLANET-CLONE',
// //     youtube: 'https://youtu.be/dUFXE5soklM?si=gS0vfkdP9M7G-tQE',
// //     demo: 'https://108565-rare-planet-clone.netlify.app/'
// //   },
// //   {
// //     title: 'Shure Music',
// //     description: 'A Shure-inspired responsive website UI clone for audio products with sleek design and smooth transitions.',
// //     tags: ['HTML', 'CSS', 'JS', 'Audio'],
// //     gradient: 'from-lime-400 to-green-500',
// //     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284092/Screenshot_2026-02-05_150307_kmxwgd.png',
// //     github: 'https://github.com/Anisha-Chhajer-Jain/SHURE-CLONE',
// //     youtube: 'https://youtu.be/28-tTsRMRZU?si=TWc3XUNpZSgyNjDH',
// //     demo: 'https://shureclone-108565-anisha.netlify.app/'
// //   },
// //   {
// //     title: 'Bullet Proof',
// //     description: 'A Bulletproof-inspired security services website with responsive design and modern UI components.',
// //     tags: ['HTML', 'CSS', 'JS', 'Security'],
// //     gradient: 'from-orange-400 to-yellow-500',
// //     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284088/Screenshot_2026-02-05_150323_jsohtj.png',
// //     github: 'https://github.com/Anisha-Chhajer-Jain/BULLET-PROOF-CLONE',
// //     youtube: 'https://youtu.be/OP0XIlN4eis?si=7WpZOF0KT1Wy41yF',
// //     demo: 'https://bullet-proof-clone-108565.netlify.app/'
// //   },
// //   {
// //     title: 'MX Player',
// //     description: 'A responsive MX Player clone offering a smooth video streaming experience with user-friendly interface.',
// //     tags: ['HTML', 'CSS', 'JS', 'Video'],
// //     gradient: 'from-teal-400 to-cyan-500',
// //     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284092/Screenshot_2026-02-05_150307_kmxwgd.png',
// //     github: 'https://github.com/Anisha-Chhajer-Jain/MX-PLAYER-CLONE',
// //     youtube: 'https://youtu.be/qW73SWI1Pe8?si=7TSeQu5qybwIgIBB',
// //     demo: 'https://108565-mx-player-clone-anisha.netlify.app/'
// //   },
// //   {
// //     title: 'Kachava',
// //     description: 'A KaChava-inspired product website focusing on modern UI design, responsiveness, and smooth interactions.',
// //     tags: ['HTML', 'CSS', 'JS', 'E-commerce'],
// //     gradient: 'from-lime-400 to-green-500',
// //     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284480/Screenshot_2026-02-05_150356_wea5sm.png',
// //     github: 'https://github.com/Anisha-Chhajer-Jain/KACHAVA-CLONE',
// //     youtube: 'https://youtu.be/X73nLmEqYl0?si=8n9drElhVNS4VL_p',
// //     demo: 'https://kachava-clone.netlify.app/'
// //   },
// //   {
// //     title: 'Weather App',
// //     description: 'A real-time weather application with location detection and beautiful UI showing weather conditions.',
// //     tags: ['React', 'API', 'Tailwind', 'Weather'],
// //     gradient: 'from-blue-400 to-cyan-500',
// //     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_225116_isrr1w.png',
// //     github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/weather-api',
// //     youtube: 'https://www.youtube.com/@AnishaChhajerJain',
// //     demo: 'https://weather-app-demo.netlify.app'
// //   },
// //   {
// //     title: 'Tic Tac Toe',
// //     description: 'A classic Tic Tac Toe game with interactive UI and game logic.',
// //     tags: ['JavaScript', 'HTML', 'CSS', 'Game'],
// //     gradient: 'from-purple-400 to-pink-500',
// //     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_224714_snxpsz.png',
// //     github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/tic-tac-toe',
// //     youtube: 'https://www.youtube.com/@AnishaChhajerJain',
// //     demo: 'https://tic-tac-toe-demo.netlify.app'
// //   },
// //   {
// //     title: 'Colour Guess',
// //     description: 'A color guessing game to test RGB color knowledge with score tracking.',
// //     tags: ['JavaScript', 'Game', 'UI/UX', 'Interactive'],
// //     gradient: 'from-red-400 to-orange-500',
// //     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_225224_of6ika.png',
// //     github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/color-guess',
// //     youtube: 'https://www.youtube.com/@AnishaChhajerJain',
// //     demo: 'https://colour-guess-demo.netlify.app'
// //   },
// //   {
// //     title: 'Count Number',
// //     description: 'An interactive number counting application with animated transitions.',
// //     tags: ['React', 'Animation', 'UI', 'Counter'],
// //     gradient: 'from-green-400 to-emerald-500',
// //     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_224902_bijrn1.png',
// //     github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/counter-haha',
// //     youtube: 'https://www.youtube.com/@AnishaChhajerJain',
// //     demo: 'https://count-number-demo.netlify.app'
// //   },
// //   {
// //     title: 'News Dashboard',
// //     description: 'A news dashboard displaying latest headlines from various sources.',
// //     tags: ['React', 'API', 'Dashboard', 'News'],
// //     gradient: 'from-cyan-400 to-blue-500',
// //     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398570/Screenshot_2026-02-06_224921_bkc44o.png',
// //     github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/news-fetch',
// //     youtube: 'https://www.youtube.com/@AnishaChhajerJain',
// //     demo: 'https://news-dashboard-demo.netlify.app'
// //   },
// // ];

// // export default function Projects() {
// //   const [visibleProjects, setVisibleProjects] = useState(6);
  
// //   const loadMoreProjects = () => {
// //     setVisibleProjects(prev => Math.min(prev + 6, projects.length));
// //   };
  
// //   return (
// //     <div className="py-12 sm:py-22 px-4 sm:px-6 relative" id="projects">
// //       <div className="max-w-7xl mx-auto">
// //         <div className="text-center mb-12 sm:mb-20">
// //           <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-6 tracking-wide">
// //             My <span className="font-light bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
// //           </h2>
// //           <p className="text-slate-400 font-light text-base sm:text-lg">
// //             Showcasing my web development journey through UI clones and designs
// //           </p>
// //         </div>
        
// //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
// //           {projects.slice(0, visibleProjects).map((project, index) => (
// //             <ProjectCard key={project.title} project={project} index={index} />
// //           ))}
// //         </div>
        
// //         {visibleProjects < projects.length && (
// //           <LoadMoreButton onClick={loadMoreProjects} count={projects.length - visibleProjects} label="Projects" />
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useState, useRef, useEffect } from 'react';
// import { Github, Youtube, ExternalLink, ChevronRight, Code, Eye, Sparkles } from 'lucide-react';

// // Enhanced Project Card Component with hover effects and detailed view
// function ProjectCard({ project, index }) {
//   const [isHovered, setIsHovered] = useState(false);
  
//   return (
//     <div
//       className="group relative animate-fade-in-up"
//       style={{ animationDelay: `${index * 0.1}s` }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Glow effect on hover */}
//       <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700 group-hover:duration-300`} />
      
//       <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden group-hover:border-white/10 transition-all duration-500 hover:-translate-y-2">
//         {/* Image Container with Overlay */}
//         <div className="relative h-52 overflow-hidden">
//           <img 
//             src={project.image} 
//             alt={project.title}
//             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//             onError={(e) => {
//               e.target.src = `https://via.placeholder.com/400x250/1a1a2e/6366f1?text=${encodeURIComponent(project.title)}`;
//             }}
//           />
//           {/* Gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
          
//           {/* Category tag */}
//           <div className="absolute top-4 left-4">
//             <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white/90 backdrop-blur-sm border border-white/10`}>
//               {project.tags[0]}
//             </span>
//           </div>
          
//           {/* Title overlay */}
//           <div className="absolute bottom-0 left-0 right-0 p-5">
//             <h3 className="text-xl font-semibold text-white tracking-tight">
//               {project.title}
//             </h3>
//           </div>
//         </div>
        
//         {/* Content */}
//         <div className="p-5">
//           {/* Tags */}
//           <div className="flex flex-wrap gap-2 mb-4">
//             {project.tags.slice(1, 4).map((tag, i) => (
//               <span
//                 key={tag}
//                 className="px-2.5 py-1 text-xs font-mono text-slate-400 bg-white/5 rounded-full border border-white/5"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
          
//           {/* Description */}
//           <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-2">
//             {project.description}
//           </p>
          
//           {/* Action Buttons */}
//           <div className="flex items-center gap-3 pt-2 border-t border-white/5">
//             <a 
//               href={project.github}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group/btn flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300"
//             >
//               <Github size={16} className="group-hover/btn:rotate-3 transition-transform" />
//               <span className="text-sm">Code</span>
//             </a>
//             <a 
//               href={project.demo}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group/btn flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300"
//             >
//               <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
//               <span className="text-sm">Live Demo</span>
//             </a>
//             {project.youtube && (
//               <a 
//                 href={project.youtube}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group/btn flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 ml-auto"
//               >
//                 <Youtube size={16} />
//                 <span className="text-sm">Watch</span>
//               </a>
//             )}
//           </div>
//         </div>
        
//         {/* Animated border on hover */}
//         <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${project.gradient} transition-all duration-500 ease-out ${isHovered ? 'w-full' : 'w-0'}`} />
//       </div>
//     </div>
//   );
// }

// // Featured Project Section
// function FeaturedProject({ project }) {
//   return (
//     <div className="relative mb-20 rounded-2xl overflow-hidden group">
//       <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
//       <div className="relative bg-gradient-to-r from-[#0a0a0f] to-[#12121a] border border-white/10 rounded-2xl overflow-hidden">
//         <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
//           <div className="order-2 md:order-1">
//             <div className="flex items-center gap-2 mb-3">
//               <Sparkles size={18} className="text-indigo-400" />
//               <span className="text-xs font-mono text-indigo-400 tracking-wider">FEATURED PROJECT</span>
//             </div>
//             <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
//               {project.title}
//             </h3>
//             <p className="text-slate-400 leading-relaxed mb-5">
//               {project.description}
//             </p>
//             <div className="flex flex-wrap gap-2 mb-6">
//               {project.tags.map(tag => (
//                 <span key={tag} className="px-3 py-1 text-xs text-slate-300 bg-white/5 rounded-full">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//             <div className="flex flex-wrap gap-3">
//               <a 
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all duration-300"
//               >
//                 <Github size={18} />
//                 <span>Source Code</span>
//               </a>
//               <a 
//                 href={project.demo}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
//               >
//                 <ExternalLink size={18} />
//                 <span>Live Demo</span>
//                 <ChevronRight size={16} />
//               </a>
//             </div>
//           </div>
//           <div className="order-1 md:order-2 relative h-48 md:h-auto rounded-xl overflow-hidden">
//             <img 
//               src={project.image} 
//               alt={project.title}
//               className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#0a0a0f] via-transparent to-transparent" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Category Filter Component
// function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
//   return (
//     <div className="flex flex-wrap justify-center gap-3 mb-12">
//       {categories.map(category => (
//         <button
//           key={category}
//           onClick={() => onCategoryChange(category)}
//           className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
//             activeCategory === category
//               ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
//               : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'
//           }`}
//         >
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// }

// // Main Projects Component
// const projectsData = [
//   {
//     title: 'Flipkart Clone',
//     description: 'A fully responsive Flipkart-inspired e-commerce UI clone with product listings, cart functionality, and modern design.',
//     tags: ['E-Commerce', 'HTML', 'CSS', 'JS', 'Responsive'],
//     gradient: 'from-orange-500 to-yellow-500',
//     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284088/Screenshot_2026-02-05_150323_jsohtj.png',
//     github: 'https://github.com/Anisha-Chhajer-Jain/FLIPKART-CLONE',
//     youtube: 'https://youtu.be/AvD3hqPTmMU?si=Q5hmb3LLucv2W9Ov',
//     demo: 'https://dancing-malasada-228dd4.netlify.app/',
//     category: 'UI Clones'
//   },
//   {
//     title: 'Rare Planet',
//     description: 'A Rare Planet–inspired website UI clone with smooth animations, modern layout, and interactive elements.',
//     tags: ['UI Clones', 'HTML', 'CSS', 'JS', 'Animations'],
//     gradient: 'from-teal-400 to-cyan-500',
//     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284092/Screenshot_2026-02-05_150245_uyufp5.png',
//     github: 'https://github.com/Anisha-Chhajer-Jain/RARE-PLANET-CLONE',
//     youtube: 'https://youtu.be/dUFXE5soklM?si=gS0vfkdP9M7G-tQE',
//     demo: 'https://108565-rare-planet-clone.netlify.app/',
//     category: 'UI Clones'
//   },
//   {
//     title: 'Shure Music',
//     description: 'A Shure-inspired responsive website UI clone for audio products with sleek design and smooth transitions.',
//     tags: ['UI Clones', 'HTML', 'CSS', 'JS', 'Audio'],
//     gradient: 'from-lime-400 to-green-500',
//     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284092/Screenshot_2026-02-05_150307_kmxwgd.png',
//     github: 'https://github.com/Anisha-Chhajer-Jain/SHURE-CLONE',
//     youtube: 'https://youtu.be/28-tTsRMRZU?si=TWc3XUNpZSgyNjDH',
//     demo: 'https://shureclone-108565-anisha.netlify.app/',
//     category: 'UI Clones'
//   },
//   {
//     title: 'Weather App',
//     description: 'A real-time weather application with location detection and beautiful UI showing weather conditions.',
//     tags: ['Apps', 'React', 'API', 'Tailwind'],
//     gradient: 'from-blue-400 to-cyan-500',
//     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_225116_isrr1w.png',
//     github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/weather-api',
//     youtube: 'https://www.youtube.com/@AnishaChhajerJain',
//     demo: 'https://weather-app-demo.netlify.app',
//     category: 'Apps'
//   },
//   {
//     title: 'Tic Tac Toe',
//     description: 'A classic Tic Tac Toe game with interactive UI and game logic.',
//     tags: ['Games', 'JavaScript', 'HTML', 'CSS'],
//     gradient: 'from-purple-400 to-pink-500',
//     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_224714_snxpsz.png',
//     github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/tic-tac-toe',
//     youtube: 'https://www.youtube.com/@AnishaChhajerJain',
//     demo: 'https://tic-tac-toe-demo.netlify.app',
//     category: 'Games'
//   },
//   {
//     title: 'Colour Guess',
//     description: 'A color guessing game to test RGB color knowledge with score tracking.',
//     tags: ['Games', 'JavaScript', 'Interactive'],
//     gradient: 'from-red-400 to-orange-500',
//     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_225224_of6ika.png',
//     github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/color-guess',
//     youtube: 'https://www.youtube.com/@AnishaChhajerJain',
//     demo: 'https://colour-guess-demo.netlify.app',
//     category: 'Games'
//   },
//   {
//     title: 'News Dashboard',
//     description: 'A news dashboard displaying latest headlines from various sources.',
//     tags: ['Apps', 'React', 'API', 'Dashboard'],
//     gradient: 'from-cyan-400 to-blue-500',
//     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398570/Screenshot_2026-02-06_224921_bkc44o.png',
//     github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/news-fetch',
//     youtube: 'https://www.youtube.com/@AnishaChhajerJain',
//     demo: 'https://news-dashboard-demo.netlify.app',
//     category: 'Apps'
//   },
//   {
//     title: 'Bullet Proof',
//     description: 'A Bulletproof-inspired security services website with responsive design and modern UI components.',
//     tags: ['UI Clones', 'HTML', 'CSS', 'Security'],
//     gradient: 'from-orange-400 to-yellow-500',
//     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284088/Screenshot_2026-02-05_150323_jsohtj.png',
//     github: 'https://github.com/Anisha-Chhajer-Jain/BULLET-PROOF-CLONE',
//     youtube: 'https://youtu.be/OP0XIlN4eis?si=7WpZOF0KT1Wy41yF',
//     demo: 'https://bullet-proof-clone-108565.netlify.app/',
//     category: 'UI Clones'
//   },
//   {
//     title: 'Kachava',
//     description: 'A KaChava-inspired product website focusing on modern UI design, responsiveness, and smooth interactions.',
//     tags: ['UI Clones', 'HTML', 'CSS', 'E-commerce'],
//     gradient: 'from-lime-400 to-green-500',
//     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284480/Screenshot_2026-02-05_150356_wea5sm.png',
//     github: 'https://github.com/Anisha-Chhajer-Jain/KACHAVA-CLONE',
//     youtube: 'https://youtu.be/X73nLmEqYl0?si=8n9drElhVNS4VL_p',
//     demo: 'https://kachava-clone.netlify.app/',
//     category: 'UI Clones'
//   },
//   {
//     title: 'Count Number',
//     description: 'An interactive number counting application with animated transitions.',
//     tags: ['Apps', 'React', 'Animation', 'Counter'],
//     gradient: 'from-green-400 to-emerald-500',
//     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_224902_bijrn1.png',
//     github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/counter-haha',
//     youtube: 'https://www.youtube.com/@AnishaChhajerJain',
//     demo: 'https://count-number-demo.netlify.app',
//     category: 'Apps'
//   },
//   {
//     title: 'MX Player',
//     description: 'A responsive MX Player clone offering a smooth video streaming experience with user-friendly interface.',
//     tags: ['UI Clones', 'HTML', 'CSS', 'Video'],
//     gradient: 'from-teal-400 to-cyan-500',
//     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284092/Screenshot_2026-02-05_150307_kmxwgd.png',
//     github: 'https://github.com/Anisha-Chhajer-Jain/MX-PLAYER-CLONE',
//     youtube: 'https://youtu.be/qW73SWI1Pe8?si=7TSeQu5qybwIgIBB',
//     demo: 'https://108565-mx-player-clone-anisha.netlify.app/',
//     category: 'UI Clones'
//   }
// ];

// export default function Projects() {
//   const [visibleCount, setVisibleCount] = useState(6);
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [filteredProjects, setFilteredProjects] = useState(projectsData);
  
//   const categories = ['All', ...new Set(projectsData.map(p => p.category))];
  
//   useEffect(() => {
//     if (activeCategory === 'All') {
//       setFilteredProjects(projectsData);
//     } else {
//       setFilteredProjects(projectsData.filter(p => p.category === activeCategory));
//     }
//     setVisibleCount(6);
//   }, [activeCategory]);
  
//   const visibleProjects = filteredProjects.slice(0, visibleCount);
//   const hasMore = visibleCount < filteredProjects.length;
  
//   const featuredProject = projectsData.find(p => p.title === 'Flipkart Clone');
  
//   return (
//     <div className="py-16 sm:py-24 px-4 relative bg-gradient-to-b from-[#050507] to-[#0a0a0f]" id="projects">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12 md:mb-16">
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
//             <Code size={14} className="text-indigo-400" />
//             <span className="text-xs font-mono text-indigo-400 tracking-wider">PORTFOLIO</span>
//           </div>
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
//             Featured{' '}
//             <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//               Projects
//             </span>
//           </h2>
//           <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
//             A collection of my recent work including UI clones, interactive applications, and full-stack projects.
//           </p>
//         </div>
        
//         {/* Featured Project */}
//         {featuredProject && <FeaturedProject project={featuredProject} />}
        
//         {/* Category Filter */}
//         <CategoryFilter 
//           categories={categories}
//           activeCategory={activeCategory}
//           onCategoryChange={setActiveCategory}
//         />
        
//         {/* Projects Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {visibleProjects.map((project, index) => (
//             <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
//           ))}
//         </div>
        
//         {/* Load More */}
//         {hasMore && (
//           <div className="flex justify-center mt-12">
//             <button
//               onClick={() => setVisibleCount(prev => Math.min(prev + 6, filteredProjects.length))}
//               className="group relative px-8 py-3.5 overflow-hidden rounded-full border border-indigo-500/30 hover:border-indigo-500 transition-all duration-500"
//             >
//               <span className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
//               <span className="relative flex items-center gap-2 text-white font-medium">
//                 <Eye size={18} />
//                 View More Projects
//                 <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
//               </span>
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import { Github, Youtube, ExternalLink, ChevronRight, Code, Eye, Sparkles, Trophy } from 'lucide-react';

// Enhanced Project Card Component with hover effects and detailed view
function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="group relative animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect on hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700 group-hover:duration-300`} />
      
      <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden group-hover:border-white/10 transition-all duration-500 hover:-translate-y-2">
        {/* Image Container with Overlay */}
        <div className="relative h-52 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/400x250/1a1a2e/6366f1?text=${encodeURIComponent(project.title)}`;
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
          
          {/* Category tag */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white/90 backdrop-blur-sm border border-white/10`}>
              {project.tags[0]}
            </span>
          </div>
          
          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-xl font-semibold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(1, 4).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono text-slate-400 bg-white/5 rounded-full border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-2">
            {project.description}
          </p>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2 border-t border-white/5">
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300"
            >
              <Github size={16} className="group-hover/btn:rotate-3 transition-transform" />
              <span className="text-sm">Code</span>
            </a>
            <a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300"
            >
              <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              <span className="text-sm">Live Demo</span>
            </a>
            {project.youtube && (
              <a 
                href={project.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 ml-auto"
              >
                <Youtube size={16} />
                <span className="text-sm">Watch</span>
              </a>
            )}
          </div>
        </div>
        
        {/* Animated border on hover */}
        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${project.gradient} transition-all duration-500 ease-out ${isHovered ? 'w-full' : 'w-0'}`} />
      </div>
    </div>
  );
}

// Featured Project Section — Hackathon badge variant
function FeaturedProject({ project }) {
  return (
    <div className="relative mb-20 rounded-2xl overflow-hidden group">
      {/* Stronger glow for hackathon project */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-green-600/20 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative bg-gradient-to-r from-[#0a0a0f] to-[#12121a] border border-yellow-500/20 rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
          <div className="order-2 md:order-1">
            {/* Badges row */}
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30">
                <Trophy size={13} className="text-yellow-400" />
                <span className="text-xs font-mono text-yellow-400 tracking-wider">HACKATHON PROJECT</span>
              </div>
             
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-5">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-xs text-slate-300 bg-white/5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all duration-300 text-white"
              >
                <Github size={18} />
                <span>Source Code</span>
              </a>
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-yellow-500 to-green-500 rounded-xl hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 text-white font-semibold"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
                <ChevronRight size={16} />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 relative h-48 md:h-auto rounded-xl overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#0a0a0f] via-transparent to-transparent" />
            {/* Trophy overlay badge on image */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-500/40 backdrop-blur-sm">
              <Trophy size={13} className="text-yellow-400" />
              <span className="text-xs text-yellow-300 font-semibold">Hackathon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Category Filter Component
function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            activeCategory === category
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
              : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

// ─── Projects Data ────────────────────────────────────────────────────────────
const projectsData = [
  // ★ FEATURED HACKATHON PROJECT — shown at top via featuredProject below
  {
    title: 'Kisan Dost',
    description: 'An AI-powered platform built during a hackathon to empower farmers with real-time crop advisory, weather insights, mandi price data, and government scheme updates — bridging the digital divide in Indian agriculture.',
    tags: ['Hackathon', 'React', 'Node.js', 'AI', 'Agriculture', 'Full Stack'],
    gradient: 'from-teal-400 to-cyan-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1774844685/Screenshot_2026-03-30_095424_vy4lnf.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/kisan-dost',
    youtube: 'https://www.youtube.com/@AnishaChhajerJain',
    demo: 'https://kisan-dost.netlify.app/',
    category: 'Hackathon',
  },
  {
    title: 'Flipkart Clone',
    description: 'A fully responsive Flipkart-inspired e-commerce UI clone with product listings, cart functionality, and modern design.',
    tags: ['E-Commerce', 'HTML', 'CSS', 'JS', 'Responsive'],
    gradient: 'from-orange-500 to-yellow-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284088/Screenshot_2026-02-05_150323_jsohtj.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/FLIPKART-CLONE',
    youtube: 'https://youtu.be/AvD3hqPTmMU?si=Q5hmb3LLucv2W9Ov',
    demo: 'https://dancing-malasada-228dd4.netlify.app/',
    category: 'UI Clones',
  },
  {
    title: 'Rare Planet',
    description: 'A Rare Planet–inspired website UI clone with smooth animations, modern layout, and interactive elements.',
    tags: ['UI Clones', 'HTML', 'CSS', 'JS', 'Animations'],
    gradient: 'from-teal-400 to-cyan-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284092/Screenshot_2026-02-05_150245_uyufp5.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/RARE-PLANET-CLONE',
    youtube: 'https://youtu.be/dUFXE5soklM?si=gS0vfkdP9M7G-tQE',
    demo: 'https://108565-rare-planet-clone.netlify.app/',
    category: 'UI Clones',
  },
  {
    title: 'Shure Music',
    description: 'A Shure-inspired responsive website UI clone for audio products with sleek design and smooth transitions.',
    tags: ['UI Clones', 'HTML', 'CSS', 'JS', 'Audio'],
    gradient: 'from-lime-400 to-green-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284092/Screenshot_2026-02-05_150307_kmxwgd.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/SHURE-CLONE',
    youtube: 'https://youtu.be/28-tTsRMRZU?si=TWc3XUNpZSgyNjDH',
    demo: 'https://shureclone-108565-anisha.netlify.app/',
    category: 'UI Clones',
  },
  {
    title: 'Weather App',
    description: 'A real-time weather application with location detection and beautiful UI showing weather conditions.',
    tags: ['Apps', 'React', 'API', 'Tailwind'],
    gradient: 'from-blue-400 to-cyan-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_225116_isrr1w.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/weather-api',
    youtube: 'https://www.youtube.com/@AnishaChhajerJain',
    demo: 'https://weather-app-demo.netlify.app',
    category: 'Apps',
  },
  {
    title: 'Tic Tac Toe',
    description: 'A classic Tic Tac Toe game with interactive UI and game logic.',
    tags: ['Games', 'JavaScript', 'HTML', 'CSS'],
    gradient: 'from-purple-400 to-pink-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_224714_snxpsz.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/tic-tac-toe',
    youtube: 'https://www.youtube.com/@AnishaChhajerJain',
    demo: 'https://tic-tac-toe-demo.netlify.app',
    category: 'Games',
  },
  {
    title: 'Colour Guess',
    description: 'A color guessing game to test RGB color knowledge with score tracking.',
    tags: ['Games', 'JavaScript', 'Interactive'],
    gradient: 'from-red-400 to-orange-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_225224_of6ika.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/color-guess',
    youtube: 'https://www.youtube.com/@AnishaChhajerJain',
    demo: 'https://colour-guess-demo.netlify.app',
    category: 'Games',
  },
  {
    title: 'News Dashboard',
    description: 'A news dashboard displaying latest headlines from various sources.',
    tags: ['Apps', 'React', 'API', 'Dashboard'],
    gradient: 'from-cyan-400 to-blue-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398570/Screenshot_2026-02-06_224921_bkc44o.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/news-fetch',
    youtube: 'https://www.youtube.com/@AnishaChhajerJain',
    demo: 'https://news-dashboard-demo.netlify.app',
    category: 'Apps',
  },
  {
    title: 'Bullet Proof',
    description: 'A Bulletproof-inspired security services website with responsive design and modern UI components.',
    tags: ['UI Clones', 'HTML', 'CSS', 'Security'],
    gradient: 'from-orange-400 to-yellow-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284088/Screenshot_2026-02-05_150323_jsohtj.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/BULLET-PROOF-CLONE',
    youtube: 'https://youtu.be/OP0XIlN4eis?si=7WpZOF0KT1Wy41yF',
    demo: 'https://bullet-proof-clone-108565.netlify.app/',
    category: 'UI Clones',
  },
  {
    title: 'Kachava',
    description: 'A KaChava-inspired product website focusing on modern UI design, responsiveness, and smooth interactions.',
    tags: ['UI Clones', 'HTML', 'CSS', 'E-commerce'],
    gradient: 'from-lime-400 to-green-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284480/Screenshot_2026-02-05_150356_wea5sm.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/KACHAVA-CLONE',
    youtube: 'https://youtu.be/X73nLmEqYl0?si=8n9drElhVNS4VL_p',
    demo: 'https://kachava-clone.netlify.app/',
    category: 'UI Clones',
  },
  {
    title: 'Count Number',
    description: 'An interactive number counting application with animated transitions.',
    tags: ['Apps', 'React', 'Animation', 'Counter'],
    gradient: 'from-green-400 to-emerald-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_224902_bijrn1.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/counter-haha',
    youtube: 'https://www.youtube.com/@AnishaChhajerJain',
    demo: 'https://count-number-demo.netlify.app',
    category: 'Apps',
  },
  {
    title: 'MX Player',
    description: 'A responsive MX Player clone offering a smooth video streaming experience with user-friendly interface.',
    tags: ['UI Clones', 'HTML', 'CSS', 'Video'],
    gradient: 'from-teal-400 to-cyan-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284092/Screenshot_2026-02-05_150307_kmxwgd.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/MX-PLAYER-CLONE',
    youtube: 'https://youtu.be/qW73SWI1Pe8?si=7TSeQu5qybwIgIBB',
    demo: 'https://108565-mx-player-clone-anisha.netlify.app/',
    category: 'UI Clones',
  },
];

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  // All categories — Hackathon first so it appears at start of filter strip
  const categories = [
    'All',
    'Hackathon',
    ...new Set(projectsData.filter(p => p.category !== 'Hackathon').map(p => p.category)),
  ];

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(p => p.category === activeCategory));
    }
    setVisibleCount(6);
  }, [activeCategory]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  // Always pin Kisan Dost as the featured project
  const featuredProject = projectsData.find(p => p.title === 'Kisan Dost');

  return (
    <div className="py-16 sm:py-24 px-4 relative bg-gradient-to-b from-[#050507] to-[#0a0a0f]" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <Code size={14} className="text-indigo-400" />
            <span className="text-xs font-mono text-indigo-400 tracking-wider">PORTFOLIO</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5">
            Featured{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            A collection of my recent work including UI clones, interactive applications, and full-stack projects.
          </p>
        </div>

        {/* Featured Hackathon Project — always at top */}
        {featuredProject && <FeaturedProject project={featuredProject} />}

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount(prev => Math.min(prev + 6, filteredProjects.length))}
              className="group relative px-8 py-3.5 overflow-hidden rounded-full border border-indigo-500/30 hover:border-indigo-500 transition-all duration-500"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative flex items-center gap-2 text-white font-medium">
                <Eye size={18} />
                View More Projects
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}