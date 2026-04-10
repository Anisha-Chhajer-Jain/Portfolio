
// import React, { useState } from 'react';
// import { ExternalLink, Award } from 'lucide-react';
// import { motion } from "framer-motion";

// // Certificate Card Component
// function CertificateCard({ cert, index }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       whileHover={{ y: -6 }}
//       className="group relative"
//     >
//       <div className={`absolute -inset-1 bg-gradient-to-r ${cert.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`} />
      
//       <div className="relative bg-gray-900/60 backdrop-blur-md rounded-2xl border border-gray-800 overflow-hidden group-hover:border-gray-700 transition-all duration-500 group-hover:scale-[1.02]">
//         <div className="relative h-40 sm:h-48 overflow-hidden">
//           <img 
//             src={cert.image} 
//             alt={cert.title}
//             className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//           />
//           <div className={`absolute inset-0 bg-gradient-to-t ${cert.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
//           <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gray-900/80 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-gray-700/50">
//             <span className="text-xs font-light text-gray-200">{cert.date}</span>
//           </div>
//         </div>
        
//         <div className="p-4 sm:p-6">
//           <div className="flex items-start gap-2 sm:gap-3 mb-3">
//             <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
//               <Award size={20} className="sm:w-6 sm:h-6 text-white" />
//             </div>
//             <div className="flex-1 min-w-0">
//               <h3 className="text-base sm:text-lg font-semibold mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300 leading-tight line-clamp-2">
//                 {cert.title}
//               </h3>
//               <p className={`text-xs sm:text-sm bg-gradient-to-r ${cert.color} bg-clip-text text-transparent font-medium truncate`}>
//                 {cert.org}
//               </p>
//             </div>
//           </div>
          
//           <a
//             href={cert.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`group/btn relative w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${cert.color} bg-opacity-10 rounded-xl border border-gray-700/50 transition-all duration-300 overflow-hidden`}
//           >
//             <span className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300`} />
//             <span className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover/btn:opacity-30 blur-xl transition-all duration-500`} />
//             <ExternalLink size={16} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300 group-hover/btn:text-white" />
//             <span className="relative z-10 text-sm font-bold group-hover/btn:text-white transition-colors duration-300">
//               View Certificate
//             </span>
//           </a>
//         </div>
        
//         <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gray-600/30 group-hover:border-gray-500/50 transition-colors duration-300" />
//         <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gray-600/30 group-hover:border-gray-500/50 transition-colors duration-300" />
//         <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gray-600/30 group-hover:border-gray-500/50 transition-colors duration-300" />
//         <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gray-600/30 group-hover:border-gray-500/50 transition-colors duration-300" />
//       </div>
//     </motion.div>
//   );
// }

// // Load More Button Component
// function LoadMoreButton({ onClick, count, label }) {
//   return (
//     <div className="flex justify-center mt-8 sm:mt-12">
//       <button
//         onClick={onClick}
//         className="group relative px-6 sm:px-8 py-3 sm:py-4 overflow-hidden rounded-xl border border-purple-500/50 hover:border-purple-500 transition-all duration-500 hover:scale-105"
//       >
//         <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
//         <span className="relative flex items-center gap-2 font-light text-base sm:text-lg text-white">
//           Load More {label}
//           <span className="text-sm opacity-70">({count} more)</span>
//         </span>
//       </button>
//     </div>
//   );
// }

// // Main Certificates Component
// const certificates = [
//   { 
//     id: 1, 
//     title: 'JavaScript Certification', 
//     org: 'SoloLearn', 
//     date: '2024',
//     color: 'from-yellow-500 to-orange-500',
//     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284476/Screenshot_2026-02-05_150828_i1a5nq.png',
//     url: 'https://www.sololearn.com/certificates/CC-DNUBDBWI' 
//   },
//   { 
//     id: 2, 
//     title: 'AI Video Generation Certificate', 
//     org: 'SimpliLearn', 
//     date: '2024',
//     color: 'from-blue-400 to-cyan-500',
//     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284476/Screenshot_2026-02-05_150839_lhucwu.png',
//     url: 'https://simpli-web.app.link/e/zsOcWIu3r0b' 
//   },
//   { 
//     id: 3, 
//     title: 'Generative AI Studio Certificate', 
//     org: 'SimpliLearn', 
//     date: '2024',
//     color: 'from-cyan-400 to-blue-600',
//     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284477/Screenshot_2026-02-05_150847_r9gsje.png', 
//     url: 'https://simpli-web.app.link/e/Wcdo1JE3r0b' 
//   },
//   { 
//     id: 4, 
//     title: 'Front-End Development', 
//     org: 'SimpliLearn', 
//     date: '2024',
//     color: 'from-orange-400 to-amber-500',
//     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284478/Screenshot_2026-02-05_150939_r0y4lz.png',
//     url: 'https://simpli-web.app.link/e/ow99cSF3r0b' 
//   },
//   { 
//     id: 5, 
//     title: 'React (Basic) Certificate', 
//     org: 'HackerRank', 
//     date: '2024',
//     color: 'from-gray-400 to-slate-600',
//     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284476/Screenshot_2026-02-05_150954_edi1wr.png',
//     url: 'https://www.hackerrank.com/certificates/c94ecf2db01f' 
//   },
//   { 
//     id: 6, 
//     title: 'Full Stack Development', 
//     org: 'Unstop', 
//     date: '2024',
//     color: 'from-orange-400 to-yellow-500',
//     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284478/Screenshot_2026-02-05_151017_kmw5jz.png',
//     url: 'https://unstop.com/certificate-preview/63fa2e44-702a-45fd-9df6-7b08fe4ffec7' 
//   },
//   { 
//     id: 7, 
//     title: 'Advanced Programming', 
//     org: 'Unstop', 
//     date: '2024',
//     color: 'from-purple-400 to-pink-500',
//     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284477/Screenshot_2026-02-05_151005_mt4rwr.png',
//     url: 'https://unstop.com/certificate-preview/73e65660-a050-4f67-9561-4f3c1d1d1ff7' 
//   },
//   { 
//     id: 8, 
//     title: 'AI Tools & ChatGPT Workshop', 
//     org: 'Be10X', 
//     date: '2024',
//     color: 'from-red-400 to-rose-500',
//     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284478/Screenshot_2026-02-05_151026_erhshj.png',
//     url: 'https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971007801' 
//   },
//   { 
//     id: 9, 
//     title: 'Git & Github Advance Certificate', 
//     org: 'WsCube Tech', 
//     date: '2025',
//     color: 'from-teal-400 to-cyan-600',
//     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284478/Screenshot_2026-02-05_151035_ir1rms.png',
//     url: 'https://www.wscubetech.com/verify-certificate/VG50MWS2026M3996616796' 
//   },
//   { 
//     id: 10, 
//     title: 'Generative AI Maastermind Certificate', 
//     org: 'Outskill', 
//     date: '2025',
//     color: 'from-indigo-400 to-purple-600',
//     image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284478/Screenshot_2026-02-05_151048_o5tfhz.png',
//     url: 'https://s3.ap-south-1.amazonaws.com/assets.growthschool.io/certificates/50cbb760-7921-428e-b441-7eea7464819c_cert.pdf' 
//   },
// ];

// // Animation variants
// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.12 },
//   },
// };

// export default function Certificates() {
//   const [visibleCertificates, setVisibleCertificates] = useState(6);
  
//   const loadMoreCertificates = () => {
//     setVisibleCertificates(prev => Math.min(prev + 6, certificates.length));
//   };
  
//   return (
//     <section
//       id="certificates"
//       className="
//         relative py-20 px-4 sm:px-8 lg:px-16
//         bg-gradient-to-b from-gray-900 to-black
//         overflow-hidden
//       "
//     >
//       {/* Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="
//           text-center text-4xl sm:text-5xl font-bold mb-4
//           bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
//           bg-clip-text text-transparent
//         "
//       >
//         Certificates & Achievements
//       </motion.h2>

//       <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
//         Professional certifications and recognized achievements in web development and AI
//       </p>

//       {/* Cards Grid */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-80px" }}
//         className="
//           max-w-7xl mx-auto
//           grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
//           gap-8
//         "
//       >
//         {certificates.slice(0, visibleCertificates).map((cert, index) => (
//           <CertificateCard key={cert.id} cert={cert} index={index} />
//         ))}
//       </motion.div>
      
//       {/* Load More Button */}
//       {visibleCertificates < certificates.length && (
//         <LoadMoreButton 
//           onClick={loadMoreCertificates} 
//           count={certificates.length - visibleCertificates} 
//           label="Certificates" 
//         />
//       )}
//     </section>
//   );
// }

import React, { useState } from 'react';
import { ExternalLink, Award, BookOpen, Tag } from 'lucide-react';
import { motion } from "framer-motion";

// Cert metadata — descriptions, skills, credential IDs added
const certificates = [
  { 
    id: 1, 
    title: 'JavaScript Certification', 
    org: 'SoloLearn', 
    date: '2024',
    color: 'from-yellow-500 to-orange-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284476/Screenshot_2026-02-05_150828_i1a5nq.png',
    url: 'https://www.sololearn.com/certificates/CC-DNUBDBWI',
    description: 'Comprehensive JavaScript fundamentals covering ES6+, async programming, DOM manipulation, and modern web development patterns.',
    skills: ['ES6+', 'Async/Await', 'DOM API', 'OOP'],
    credentialId: 'CC-DNUBDBWI',
  },
  { 
    id: 2, 
    title: 'AI Video Generation Certificate', 
    org: 'SimpliLearn', 
    date: '2024',
    color: 'from-blue-400 to-cyan-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284476/Screenshot_2026-02-05_150839_lhucwu.png',
    url: 'https://simpli-web.app.link/e/zsOcWIu3r0b',
    description: 'Explored AI-driven video generation tools and workflows for creating professional-grade video content with generative models.',
    skills: ['Gen AI', 'Video Tools', 'Prompt Craft', 'AI Workflows'],
    credentialId: 'SL-AIVG-2024',
  },
  { 
    id: 3, 
    title: 'Generative AI Studio Certificate', 
    org: 'SimpliLearn', 
    date: '2024',
    color: 'from-cyan-400 to-blue-600',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284477/Screenshot_2026-02-05_150847_r9gsje.png', 
    url: 'https://simpli-web.app.link/e/Wcdo1JE3r0b',
    description: 'Hands-on training in Google Cloud Vertex AI and Generative AI Studio for building, tuning, and deploying large language models.',
    skills: ['Vertex AI', 'LLMs', 'Fine-tuning', 'GCP'],
    credentialId: 'SL-GAIS-2024',
  },
  { 
    id: 4, 
    title: 'Front-End Development', 
    org: 'SimpliLearn', 
    date: '2024',
    color: 'from-orange-400 to-amber-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284478/Screenshot_2026-02-05_150939_r0y4lz.png',
    url: 'https://simpli-web.app.link/e/ow99cSF3r0b',
    description: 'Full front-end curriculum covering HTML5, CSS3, responsive design, and JavaScript frameworks for modern web interfaces.',
    skills: ['HTML5', 'CSS3', 'Responsive', 'JavaScript'],
    credentialId: 'SL-FED-2024',
  },
  { 
    id: 5, 
    title: 'React (Basic) Certificate', 
    org: 'HackerRank', 
    date: '2024',
    // color: 'from-gray-400 to-slate-600',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284476/Screenshot_2026-02-05_150954_edi1wr.png',
    url: 'https://www.hackerrank.com/certificates/c94ecf2db01f',
    description: 'Validated React fundamentals including components, hooks, state management, and the React component lifecycle.',
    skills: ['React', 'Hooks', 'State', 'JSX'],
    credentialId: 'c94ecf2db01f',
  },
  { 
    id: 6, 
    title: 'Full Stack Development', 
    org: 'Unstop', 
    date: '2024',
    color: 'from-orange-400 to-yellow-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284478/Screenshot_2026-02-05_151017_kmw5jz.png',
    url: 'https://unstop.com/certificate-preview/63fa2e44-702a-45fd-9df6-7b08fe4ffec7',
    description: 'End-to-end full stack training spanning React frontend, Node.js backend, REST APIs, and database integration.',
    skills: ['React', 'Node.js', 'REST API', 'MongoDB'],
    credentialId: '63fa2e44-702a',
  },
  { 
    id: 7, 
    title: 'Advanced Programming', 
    org: 'Unstop', 
    date: '2024',
    color: 'from-purple-400 to-pink-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284477/Screenshot_2026-02-05_151005_mt4rwr.png',
    url: 'https://unstop.com/certificate-preview/73e65660-a050-4f67-9561-4f3c1d1d1ff7',
    description: 'Advanced programming concepts including data structures, algorithms, design patterns, and performance optimization.',
    skills: ['DSA', 'Patterns', 'Optimization', 'Problem Solving'],
    credentialId: '73e65660-a050',
  },
  { 
    id: 8, 
    title: 'AI Tools & ChatGPT Workshop', 
    org: 'Be10X', 
    date: '2024',
    color: 'from-red-400 to-rose-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284478/Screenshot_2026-02-05_151026_erhshj.png',
    url: 'https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971007801',
    description: 'Practical workshop on leveraging ChatGPT and modern AI tools to boost productivity across professional workflows.',
    skills: ['ChatGPT', 'Prompt Eng.', 'AI Tools', 'Productivity'],
    credentialId: '0270772f-3809',
  },
  { 
    id: 9, 
    title: 'Git & Github Advance Certificate', 
    org: 'WsCube Tech', 
    date: '2025',
    color: 'from-teal-400 to-cyan-600',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284478/Screenshot_2026-02-05_151035_ir1rms.png',
    url: 'https://www.wscubetech.com/verify-certificate/VG50MWS2026M3996616796',
    description: 'Advanced Git workflows, branching strategies, GitHub Actions CI/CD pipelines, and collaborative development best practices.',
    skills: ['Git', 'GitHub', 'CI/CD', 'Branching'],
    credentialId: 'VG50MWS2026M3996',
  },
  { 
    id: 10, 
    title: 'Generative AI Mastermind Certificate', 
    org: 'Outskill', 
    date: '2025',
    color: 'from-indigo-400 to-purple-600',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284478/Screenshot_2026-02-05_151048_o5tfhz.png',
    url: 'https://s3.ap-south-1.amazonaws.com/assets.growthschool.io/certificates/50cbb760-7921-428e-b441-7eea7464819c_cert.pdf',
    description: 'Intensive program covering cutting-edge generative AI techniques, model architectures, and real-world application development.',
    skills: ['Gen AI', 'LLMs', 'Image Gen', 'AI Apps'],
    credentialId: '50cbb760-7921',
  },
];

/* ─── Flip Card ─────────────────────────────────────────────────────────────── */
function CertificateCard({ cert, index }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
      style={{ perspective: '1200px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* Glow halo */}
      <div
        className={`absolute -inset-2 bg-gradient-to-r ${cert.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700 pointer-events-none`}
      />

      {/* Flip container */}
      <div
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.65s cubic-bezier(0.23, 1, 0.32, 1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          position: 'relative',
          height: '380px',
        }}
      >
        {/* ── FRONT ── */}
        <div
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          className="absolute inset-0 bg-[var(--bg-secondary)] backdrop-blur-md rounded-2xl border border-[var(--border-primary)] overflow-hidden shadow-lg"
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${cert.color} opacity-20`} />
            <div className="absolute top-3 right-3 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-700/50">
              <span className="text-xs font-light text-gray-200">{cert.date}</span>
            </div>
          </div>

          {/* Body */}
          <div className="p-5 flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0`}>
                <Award size={18} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold leading-tight text-white line-clamp-2">{cert.title}</h3>
                <p className={`text-xs bg-gradient-to-r ${cert.color} bg-clip-text text-transparent font-medium mt-0.5`}>{cert.org}</p>
              </div>
            </div>

            <p className="text-xs text-[var(--text-secondary)] line-clamp-2">{cert.description}</p>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {cert.skills.map(s => (
                <span
                  key={s}
                  className={`text-[10px] px-2 py-0.5 rounded-full border border-gray-700 bg-gray-800/60 text-gray-300`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Corner accents */}
          <Corners />
        </div>

        {/* ── BACK ── */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          className="absolute inset-0 bg-[var(--bg-secondary)] backdrop-blur-xl rounded-2xl border border-[var(--border-primary)] overflow-hidden flex flex-col shadow-2xl"
        >
          {/* Gradient header strip */}
          <div className={`h-1.5 w-full bg-gradient-to-r ${cert.color}`} />

          <div className="flex flex-col flex-1 p-5 gap-4">
            {/* Title + org */}
            <div className="flex items-center gap-3">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <Award size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white leading-tight">{cert.title}</h3>
                <p className={`text-xs bg-gradient-to-r ${cert.color} bg-clip-text text-transparent font-semibold`}>{cert.org}</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <BookOpen size={12} className="text-gray-400" />
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">About</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{cert.description}</p>
            </div>

            {/* Skills */}
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <Tag size={12} className="text-gray-400" />
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Skills</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map(s => (
                  <span
                    key={s}
                    className={`text-[11px] px-2.5 py-0.5 rounded-full bg-gradient-to-r ${cert.color} bg-opacity-20 text-white border border-white/10 font-medium`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Credential ID */}
            <div className="mt-auto">
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Credential ID</p>
              <p className="text-xs font-mono text-gray-400 bg-gray-800/70 px-3 py-1.5 rounded-lg border border-gray-700/50 truncate">
                {cert.credentialId}
              </p>
            </div>

            {/* CTA */}
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r ${cert.color} text-white text-sm font-bold shadow-lg hover:brightness-110 transition-all duration-300 group/btn overflow-hidden`}
              onClick={e => e.stopPropagation()}
            >
              <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
              View Certificate
            </a>
          </div>

          {/* Corner accents */}
          <Corners />
        </div>
      </div>
    </motion.div>
  );
}

function Corners() {
  return (
    <>
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gray-600/40 pointer-events-none" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gray-600/40 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gray-600/40 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gray-600/40 pointer-events-none" />
    </>
  );
}

/* ─── Load More ─────────────────────────────────────────────────────────────── */
function LoadMoreButton({ onClick, count }) {
  return (
    <div className="flex justify-center mt-12">
      <button
        onClick={onClick}
        className="group relative px-8 py-4 overflow-hidden rounded-xl border border-purple-500/50 hover:border-purple-500 transition-all duration-500 hover:scale-105"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        <span className="relative flex items-center gap-2 font-light text-lg text-white">
          Load More Certificates
          <span className="text-sm opacity-70">({count} more)</span>
        </span>
      </button>
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Certificates() {
  const [visible, setVisible] = useState(6);

  return (
    <section
      id="certificates"
      className="relative py-20 px-4 sm:px-8 lg:px-16 bg-[var(--bg-primary)] overflow-hidden transition-colors duration-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl sm:text-5xl font-bold mb-4 text-[var(--text-primary)]"
      >
        Certificates & Achievements
      </motion.h2>

      <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-16">
        Professional certifications and recognized achievements in web development and AI.
        <span className="block text-sm mt-1 text-[var(--text-secondary)]/60">Hover any card to explore details.</span>
      </p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {certificates.slice(0, visible).map((cert, i) => (
          <CertificateCard key={cert.id} cert={cert} index={i} />
        ))}
      </motion.div>

      {visible < certificates.length && (
        <LoadMoreButton
          onClick={() => setVisible(v => Math.min(v + 6, certificates.length))}
          count={certificates.length - visible}
        />
      )}
    </section>
  );
}