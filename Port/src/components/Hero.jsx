import React from 'react';
import { Mail, ExternalLink, Download, Github, Linkedin, Twitter, Youtube, Code } from 'lucide-react';

export default function Hero({ isVisible, scrollY }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    { Icon: Github, url: 'https://github.com/Anisha-Chhajer-Jain', label: 'GitHub', gradient: 'from-slate-800 to-gray-900', textColor: 'text-slate-300' },
    { Icon: Linkedin, url: 'https://www.linkedin.com/in/anisha-chhajer-844114367/', label: 'LinkedIn', gradient: 'from-blue-700 to-blue-800', textColor: 'text-blue-300' },
    { Icon: Twitter, url: 'https://x.com/anisha_chhajer', label: 'Twitter', gradient: 'from-sky-600 to-cyan-600', textColor: 'text-sky-300' },
    { Icon: Youtube, url: 'https://www.youtube.com/@AnishaChhajerJain', label: 'YouTube', gradient: 'from-red-700 to-red-900', textColor: 'text-red-300' },
    { Icon: Code, url: 'https://leetcode.com/u/anisha_chhajer/', label: 'LeetCode', gradient: 'from-orange-700 to-yellow-900', textColor: 'text-orange-300' }
  ];

  return (
    <div className="w-full pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 relative" id="hero">
      <div className="w-full grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
        {/* Left Content */}
        <div
          className={`space-y-6 sm:space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extralight leading-tight">
              Hello, I'm
            </h1>
            <h2 className="text-[28px] xs:text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] xl:text-[72px] font-black tracking-tight">
              <span className="inline-block animate-slide-up bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-300% animate-shimmer">
                Anisha Chhajer
              </span>
            </h2>
          </div>

          <p className="text-slate-300 font-light leading-relaxed text-base sm:text-lg animate-fade-in-delay">
            Crafting elegant, responsive web experiences with precision and care.
            Building interfaces that feel natural and perform beautifully.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-delay-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative flex items-center gap-3 px-6 sm:px-8 py-4 overflow-hidden rounded-full border border-indigo-400/50 hover:border-indigo-400 transition-all duration-500 hover:scale-105 bg-indigo-950/20"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500" />
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail size={20} className="text-white" />
              </div>
              <span className="relative flex items-center gap-2 font-bold text-lg text-white">
                Get in Touch
                <span className="opacity-70 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>

            <button
              onClick={() => scrollToSection('projects')}
              className="group relative flex items-center gap-3 px-6 sm:px-8 py-4 rounded-full border border-slate-600 hover:border-slate-400 transition-all duration-300 hover:scale-105 bg-slate-900/60"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 group-hover:border-slate-500 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                <ExternalLink size={20} className="text-slate-300 group-hover:text-white" />
              </div>
              <span className="flex items-center gap-2 font-bold text-lg text-white">
                View My Work
                <span className="opacity-70 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>

            <button className="group relative flex items-center gap-3 px-6 py-4 w-full sm:w-auto justify-center sm:justify-start">
              <div className="relative">
                <div className="absolute -inset-2 border-2 border-indigo-400/30 rounded-full animate-ping-slow opacity-0 group-hover:opacity-100" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-amber-500/20">
                  <Download size={20} className="text-white" />
                </div>
              </div>
              <div className="relative">
                <span className="text-lg font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:to-orange-300 transition-all duration-300">
                  Resume
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 group-hover:w-full transition-all duration-500" />
              </div>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-8 justify-center sm:justify-start flex-wrap">
            {socialLinks.map(({ Icon, url, label, gradient, textColor }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} border border-slate-700 group-hover:border-white/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 shadow-lg group-hover:shadow-xl`}>
                  <Icon size={20} className={`${textColor} group-hover:text-white transition-colors`} />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900/90 backdrop-blur-sm rounded border border-slate-700 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none whitespace-nowrap">
                  <span className="text-xs font-medium text-slate-300">{label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
        >
          <div className="relative group w-full max-w-md mx-auto">
            <div className="absolute -inset-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full opacity-20 group-hover:opacity-40 blur-3xl transition-opacity duration-500 animate-pulse-slow" />
            <div className="relative w-80 h-80 sm:w-90 sm:h-90 md:w-100 md:h-100 mx-auto rounded-full overflow-hidden border-4 border-indigo-500/30 group-hover:border-indigo-400 transition-all duration-500 group-hover:scale-105 shadow-2xl">
              <img
                src="https://res.cloudinary.com/dq7hb3fah/image/upload/v1770271187/Screenshot_2026-02-03_162035_auymxx.png"
                alt="Anisha Chhajer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=Anisha+Chhajer&background=1e293b&color=818cf8&bold=true&size=512`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-indigo-400/50 group-hover:animate-spin-slow transition-all duration-500" style={{ animationDuration: '10s' }} />
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-indigo-400 animate-bounce-slow shadow-lg" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-purple-400 animate-bounce-slow shadow-lg" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1/2 -left-4 w-5 h-5 rounded-full bg-pink-400 animate-bounce-slow shadow-lg" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-1/2 -right-4 w-4 h-4 rounded-full bg-cyan-400 animate-bounce-slow shadow-lg" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>
      </div>
    </div>
  );
}