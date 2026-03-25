import React, { useState } from 'react';
import { Github, Youtube, ExternalLink } from 'lucide-react';

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const projects = [
    {
      title: 'Flipkart Clone',
      description: 'A fully responsive Flipkart-inspired e-commerce UI clone with product listings, cart functionality, and modern design.',
      tags: ['HTML', 'CSS', 'JS', 'Responsive'],
      gradient: 'from-peach-400 to-pink-500',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284088/Screenshot_2026-02-05_150323_jsohtj.png',
      github: 'https://github.com/Anisha-Chhajer-Jain/FLIPKART-CLONE',
      youtube: 'https://youtu.be/AvD3hqPTmMU?si=Q5hmb3LLucv2W9Ov',
      demo: 'https://dancing-malasada-228dd4.netlify.app/'
    },
    {
      title: 'Rare Planet',
      description: 'A Rare Planet–inspired website UI clone with smooth animations, modern layout, and interactive elements.',
      tags: ['HTML', 'CSS', 'JS', 'Animations'],
      gradient: 'from-teal-400 to-cyan-500',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284092/Screenshot_2026-02-05_150245_uyufp5.png',
      github: 'https://github.com/Anisha-Chhajer-Jain/RARE-PLANET-CLONE',
      youtube: 'https://youtu.be/dUFXE5soklM?si=gS0vfkdP9M7G-tQE',
      demo: 'https://108565-rare-planet-clone.netlify.app/'
    },
    {
      title: 'Shure Music',
      description: 'A Shure-inspired responsive website UI clone for audio products with sleek design and smooth transitions.',
      tags: ['HTML', 'CSS', 'JS', 'Audio'],
      gradient: 'from-lime-400 to-green-500',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284092/Screenshot_2026-02-05_150307_kmxwgd.png',
      github: 'https://github.com/Anisha-Chhajer-Jain/SHURE-CLONE',
      youtube: 'https://youtu.be/28-tTsRMRZU?si=TWc3XUNpZSgyNjDH',
      demo: 'https://shureclone-108565-anisha.netlify.app/'
    },
    {
      title: 'Bullet Proof',
      description: 'A Bulletproof-inspired security services website with responsive design and modern UI components.',
      tags: ['HTML', 'CSS', 'JS', 'Security'],
      gradient: 'from-peach-400 to-pink-500',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284088/Screenshot_2026-02-05_150323_jsohtj.png',
      github: 'https://github.com/Anisha-Chhajer-Jain/BULLET-PROOF-CLONE',
      youtube: 'https://youtu.be/OP0XIlN4eis?si=7WpZOF0KT1Wy41yF',
      demo: 'https://bullet-proof-clone-108565.netlify.app/'
    },
    {
      title: 'MX Player',
      description: 'A responsive MX Player clone offering a smooth video streaming experience with user-friendly interface.',
      tags: ['HTML', 'CSS', 'JS', 'Video'],
      gradient: 'from-teal-400 to-cyan-500',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284092/Screenshot_2026-02-05_150307_kmxwgd.png',
      github: 'https://github.com/Anisha-Chhajer-Jain/MX-PLAYER-CLONE',
      youtube: 'https://youtu.be/qW73SWI1Pe8?si=7TSeQu5qybwIgIBB',
      demo: 'https://108565-mx-player-clone-anisha.netlify.app/'
    },
    {
      title: 'Kachava',
      description: 'A KaChava-inspired product website focusing on modern UI design, responsiveness, and smooth interactions.',
      tags: ['HTML', 'CSS', 'JS', 'E-commerce'],
      gradient: 'from-lime-400 to-green-500',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284480/Screenshot_2026-02-05_150356_wea5sm.png',
      github: 'https://github.com/Anisha-Chhajer-Jain/KACHAVA-CLONE',
      youtube: 'https://youtu.be/X73nLmEqYl0?si=8n9drElhVNS4VL_p',
      demo: 'https://kachava-clone.netlify.app/'
    },
    {
      title: 'Weather App',
      description: 'A real-time weather application with location detection and beautiful UI showing weather conditions.',
      tags: ['React', 'API', 'Tailwind', 'Weather'],
      gradient: 'from-blue-400 to-cyan-500',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_225116_isrr1w.png',
      github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/weather-api',
      youtube: 'https://www.youtube.com/@AnishaChhajerJain',
      demo: 'https://weather-app-demo.netlify.app'
    },
    {
      title: 'Tic Tac Toe',
      description: 'A classic Tic Tac Toe game with interactive UI and game logic.',
      tags: ['JavaScript', 'HTML', 'CSS', 'Game'],
      gradient: 'from-purple-400 to-pink-500',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_224714_snxpsz.png',
      github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/tic-tac-toe',
      youtube: 'https://www.youtube.com/@AnishaChhajerJain',
      demo: 'https://tic-tac-toe-demo.netlify.app'
    },
    {
      title: 'Colour Guess',
      description: 'A color guessing game to test RGB color knowledge with score tracking.',
      tags: ['JavaScript', 'Game', 'UI/UX', 'Interactive'],
      gradient: 'from-red-400 to-orange-500',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_225224_of6ika.png',
      github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/color-guess',
      youtube: 'https://www.youtube.com/@AnishaChhajerJain',
      demo: 'https://colour-guess-demo.netlify.app'
    },
    {
      title: 'Count Number',
      description: 'An interactive number counting application with animated transitions.',
      tags: ['React', 'Animation', 'UI', 'Counter'],
      gradient: 'from-green-400 to-emerald-500',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_224902_bijrn1.png',
      github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/counter-haha',
      youtube: 'https://www.youtube.com/@AnishaChhajerJain',
      demo: 'https://count-number-demo.netlify.app'
    },
    {
      title: 'News Dashboard',
      description: 'A news dashboard displaying latest headlines from various sources.',
      tags: ['React', 'API', 'Dashboard', 'News'],
      gradient: 'from-cyan-400 to-blue-500',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398570/Screenshot_2026-02-06_224921_bkc44o.png',
      github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/news-fetch',
      youtube: 'https://www.youtube.com/@AnishaChhajerJain',
      demo: 'https://news-dashboard-demo.netlify.app'
    },
  ];

  const loadMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 6, projects.length));
  };

  return (
    <div className="w-full py-12 sm:py-22 px-4 sm:px-6 lg:px-8 relative" id="projects">
      <div className="w-full">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-6 tracking-wide">
            My <span className="font-light bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 font-light text-base sm:text-lg">
            Showcasing my web development journey through UI clones and designs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div
              key={project.title}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
              <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-3xl border border-slate-800/50 overflow-hidden group-hover:border-slate-700 transition-all duration-500 group-hover:scale-[1.02]">
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/1e293b/64748b?text=${encodeURIComponent(project.title)}`;
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500`} />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 to-transparent">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={tag}
                        className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-slate-700/50 group-hover:border-slate-600 transition-all duration-300`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-400 font-light leading-relaxed mb-4 text-sm sm:text-base line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="group/btn flex-1 flex items-center justify-center gap-1.5 px-2 sm:px-3 py-2 bg-slate-800/80 hover:bg-slate-700 rounded-lg border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:scale-105 min-w-[80px] shadow-sm">
                      <Github size={14} className="sm:w-4 sm:h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span className="text-xs font-bold text-white">GitHub</span>
                    </a>
                    <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="group/btn flex-1 flex items-center justify-center gap-1.5 px-2 sm:px-3 py-2 bg-red-600/30 hover:bg-red-600/40 rounded-lg border border-red-500/50 hover:border-red-400 transition-all duration-300 hover:scale-105 min-w-[80px] shadow-sm">
                      <Youtube size={14} className="sm:w-4 sm:h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                      <span className="text-xs font-bold text-white">YouTube</span>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="group/btn flex-1 flex items-center justify-center gap-1.5 px-2 sm:px-3 py-2 bg-indigo-600/30 hover:bg-indigo-600/40 rounded-lg border border-indigo-500/50 hover:border-indigo-400 transition-all duration-300 hover:scale-105 min-w-[80px] shadow-sm">
                      <ExternalLink size={14} className="sm:w-4 sm:h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      <span className="text-xs font-bold text-white">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="flex justify-center mt-8 sm:mt-12">
            <button
              onClick={loadMoreProjects}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 overflow-hidden rounded-xl border border-indigo-400/50 hover:border-indigo-400 transition-all duration-500 hover:scale-105 bg-indigo-900/40"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative flex items-center gap-2 font-bold text-base sm:text-lg text-white">
                Load More Projects
                <span className="text-sm opacity-70">({projects.length - visibleProjects} more)</span>
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}