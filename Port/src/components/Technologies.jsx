import React from 'react';

export default function Technologies() {
  const technologies = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: 'from-orange-400 to-orange-600', borderColor: 'border-orange-400/50', hoverBorder: 'hover:border-orange-400' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: 'from-blue-400 to-blue-600', borderColor: 'border-blue-400/50', hoverBorder: 'hover:border-blue-400' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'from-yellow-400 to-yellow-600', borderColor: 'border-yellow-400/50', hoverBorder: 'hover:border-yellow-400' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'from-cyan-400 to-cyan-600', borderColor: 'border-cyan-400/50', hoverBorder: 'hover:border-cyan-400' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: 'from-green-400 to-green-600', borderColor: 'border-green-400/50', hoverBorder: 'hover:border-green-400' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', color: 'from-orange-400 to-red-600', borderColor: 'border-orange-400/50', hoverBorder: 'hover:border-orange-400' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', color: 'from-blue-500 to-purple-600', borderColor: 'border-purple-400/50', hoverBorder: 'hover:border-purple-400' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: 'from-gray-600 to-gray-800', borderColor: 'border-gray-400/50', hoverBorder: 'hover:border-gray-400', isWhite: true },
    { name: 'UI/UX Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: 'from-purple-400 to-pink-600', borderColor: 'border-pink-400/50', hoverBorder: 'hover:border-pink-400' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: 'from-red-500 to-orange-600', borderColor: 'border-red-400/50', hoverBorder: 'hover:border-red-400' },
    { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', color: 'from-cyan-400 to-blue-600', borderColor: 'border-cyan-400/50', hoverBorder: 'hover:border-cyan-400' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: 'from-sky-400 to-cyan-500', borderColor: 'border-sky-400/50', hoverBorder: 'hover:border-sky-400' }
  ];

  return (
    <div className="w-full py-12 sm:py-22 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 animate-pulse-slow" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            animation: 'grid-float 20s linear infinite'
          }}
        />
      </div>

      <div className="w-full relative">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-6 tracking-wide">
            Technologies I <span className="font-light bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Work With</span>
          </h2>
          <p className="text-slate-400 font-light text-base sm:text-lg">
            Building powerful solutions with modern tools and frameworks
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${tech.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
              <div className={`relative bg-slate-900/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border ${tech.borderColor} ${tech.hoverBorder} transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-indigo-500/20`}>
                <div className="mb-3 sm:mb-4 flex items-center justify-center">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className={`w-12 h-12 sm:w-16 sm:h-16 group-hover:scale-125 transition-transform duration-500 animate-tech-float object-contain ${tech.isWhite ? 'brightness-0 invert' : ''}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                </div>
                <h3 className="text-sm sm:text-base font-light text-center group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </h3>
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${tech.color} group-hover:w-full transition-all duration-500 rounded-full`} />
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-2xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
}