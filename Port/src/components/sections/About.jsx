// import React from 'react';

// export default function About() {
//   return (
//     <div className="py-12 px-4 sm:px-6 relative" id="about">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-extralight text-center mb-12 sm:mb-16 tracking-wide">
//           About <span className="font-light text-indigo-400">Me</span>
//         </h2>
        
//         <div className="relative group">
//           <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
//           <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-3xl p-6 sm:p-12 border border-slate-800/50 hover:border-indigo-500/30 transition-all duration-500">
//             <p className="text-slate-200 font-normal leading-relaxed text-lg sm:text-l mb-6">
//               I'm <span className="text-indigo-400">Anisha Chhajer</span>, a developer skilled in HTML, CSS, Git & Github, C/C++, 
//               JavaScript, Figma, React, Node.js, and Java. I focus on building experiences that feel intuitive and polished, 
//               crafting responsive interfaces across devices & paying close attention to layout, interaction, & performance.
//             </p>
//             <p className="text-slate-200 font-normal leading-relaxed text-lg sm:text-l">
//               I place a strong emphasis on clean, well-structured, and maintainable code, ensuring clarity, consistency, and long-term scalability
//               across applications. I focus on translating ideas into high-performance, thoughtful system design and efficient implementation.
//             </p>
//             <br/>
//             <p className="text-slate-200 font-normal leading-relaxed text-lg sm:text-l">
//               On the backend, I enjoy designing and implementing robust business logic, optimizing data flow, and building scalable 
//               architectures that are easy to maintain and extend. I prioritize best practices, performance optimization, 
//               and code readability, with simple, elegant design.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from 'react';

export default function About() {
  return (
    <div className="py-12 px-4 sm:px-6 relative bg-slate-950" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 sm:mb-16 tracking-wide">
          About <span className="font-bold text-indigo-400">Me</span>
        </h2>
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
          <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-3xl p-6 sm:p-12 border border-slate-800/50 hover:border-indigo-500/30 transition-all duration-500">
            <p className="text-slate-100 font-normal leading-normal text-base sm:text-lg mb-6">
              I'm <span className="text-indigo-400 font-semibold">Anisha Chhajer</span>, a developer skilled in HTML, CSS, Git & Github, C/C++, 
              JavaScript, Figma, React, Node.js, and Java. I focus on building experiences that feel intuitive and polished, 
              crafting responsive interfaces across devices & paying close attention to layout, interaction, & performance.
            </p>
            <p className="text-slate-100 font-normal leading-normal text-base sm:text-lg">
              I place a strong emphasis on clean, well-structured, and maintainable code, ensuring clarity, consistency, and long-term scalability
              across applications. I focus on translating ideas into high-performance, thoughtful system design and efficient implementation.
            </p>
            <br/>
            <p className="text-slate-100 font-normal leading-normal text-base sm:text-lg">
                
              On the backend, I enjoy designing and implementing robust business logic, optimizing data flow, and building scalable 
              architectures that are easy to maintain and extend. I prioritize best practices, performance optimization, 
              and code readability, with simple, elegant design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}