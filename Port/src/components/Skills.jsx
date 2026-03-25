import React from 'react';
import { Code, Lightbulb, TrendingUp } from 'lucide-react';

export default function Skills() {
  const skillCards = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Crafting responsive, intuitive interfaces with modern frameworks.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      gradient: 'from-indigo-600 to-purple-600',
      iconColor: 'text-indigo-400',
      hoverIconColor: 'text-indigo-300',
      iconBg: 'from-indigo-900/30 to-purple-900/20'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Tackling complex challenges with elegant solutions.',
      skills: ['C/C++', 'Java', 'Algorithms', 'Node.js'],
      gradient: 'from-cyan-600 to-blue-600',
      iconColor: 'text-cyan-400',
      hoverIconColor: 'text-cyan-300',
      iconBg: 'from-cyan-900/30 to-blue-900/20'
    },
    {
      icon: TrendingUp,
      title: 'Tools & Learning',
      description: 'Continuously growing with every line of code.',
      skills: ['Git', 'UI/UX Figma', 'Github', 'Postman'],
      gradient: 'from-emerald-600 to-teal-600',
      iconColor: 'text-emerald-400',
      hoverIconColor: 'text-emerald-300',
      iconBg: 'from-emerald-900/30 to-teal-900/20'
    }
  ];

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8" id="skills">
      <div className="w-full">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-6 tracking-wide">
            My <span className="font-light bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-slate-400 font-light text-base sm:text-lg">
            Technologies and methodologies I work with to build exceptional digital experiences
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCards.map((card, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'both' }}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700`} />
              <div className="animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-3xl border border-slate-800/50 hover:border-slate-700/70 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 h-full overflow-hidden">
                  <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-slate-600/30 group-hover:border-indigo-400/50 transition-all duration-500" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-slate-600/30 group-hover:border-indigo-400/50 transition-all duration-500" />
                  <div className="relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.iconBg} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />
                    <div className="relative p-6 sm:p-8">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                            <card.icon size={28} className={`${card.iconColor} ${card.hoverIconColor} transition-colors duration-300`} />
                          </div>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent group-hover:from-white group-hover:to-slate-300 transition-all duration-500">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 pt-0">
                    <p className="text-slate-300 font-light leading-relaxed text-base sm:text-lg mb-6 group-hover:text-slate-200 transition-colors duration-300">
                      {card.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {card.skills.map((skill, i) => (
                        <span
                          key={skill}
                          className={`group/badge relative px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-all duration-300 animate-fade-in-scale overflow-hidden`}
                          style={{ animationDelay: `${i * 0.1 + 0.5}s`, animationFillMode: 'both' }}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover/badge:opacity-20 transition-opacity duration-300`} />
                          <span className="relative text-sm font-medium text-slate-300 group-hover/badge:text-white transition-colors duration-300">
                            {skill}
                          </span>
                          <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${card.gradient} group-hover/badge:w-6 transition-all duration-300 rounded-full`} />
                        </span>
                      ))}
                    </div>
                    <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${card.gradient} group-hover:w-full transition-all duration-700 rounded-full`} />
                  </div>
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${card.gradient} rounded-full animate-particle`}
                        style={{ top: `${20 + i * 15}%`, left: `${10 + i * 20}%`, animationDelay: `${i * 0.2}s`, animationDuration: `${1.5 + Math.random() * 1}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}