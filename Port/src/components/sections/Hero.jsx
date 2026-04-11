
import React from 'react';
import { Mail, ExternalLink, Download, Github, Linkedin, Twitter, Youtube, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero({ isVisible, scrollY }) {
  const socialLinks = [
    { Icon: Github, url: 'https://github.com/Anisha-Chhajer-Jain', label: 'GitHub', gradient: 'from-slate-800 to-gray-900', textColor: 'text-slate-300' },
    { Icon: Linkedin, url: 'https://www.linkedin.com/in/anisha-chhajer-844114367/', label: 'LinkedIn', gradient: 'from-blue-700 to-blue-800', textColor: 'text-blue-300' },
    { Icon: Twitter, url: 'https://x.com/anisha_chhajer', label: 'Twitter', gradient: 'from-sky-600 to-cyan-600', textColor: 'text-sky-300' },
    { Icon: Youtube, url: 'https://www.youtube.com/@AnishaChhajerJain', label: 'YouTube', gradient: 'from-red-700 to-red-900', textColor: 'text-red-300' },
    { Icon: Code, url: 'https://leetcode.com/u/anisha_chhajer/', label: 'LeetCode', gradient: 'from-orange-700 to-yellow-900', textColor: 'text-orange-300' }
  ];


  return (
    <div className="pt-8 sm:pt-10 pb-12 sm:pb-20 px-4 sm:px-6 relative bg-[var(--bg-primary)]" id="hero">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-primary)] opacity-10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
        {/* Left Content */}
        <div
          className={`space-y-6 sm:space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extralight leading-tight text-[var(--text-primary)]">
              Hello, I'm
            </h1>
            <h2 className="text-[28px] xs:text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] xl:text-[72px] font-black tracking-tight">
              <span className="inline-block animate-slide-up bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-300% animate-shimmer">
                Anisha Chhajer
              </span>
            </h2>
          </div>

          <p className="text-[var(--text-secondary)] font-light leading-relaxed text-base sm:text-lg max-w-lg animate-fade-in-delay">
            Crafting elegant, responsive web experiences with precision and care.
            Building interfaces that feel natural and perform beautifully.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-delay-2">
            <Link
              to="/contact"
              className="group relative flex items-center gap-3 px-5 py-3 bg-[var(--bg-accent)] backdrop-blur-sm rounded-2xl border border-[var(--border-primary)] hover:border-[var(--accent-primary)] transition-all duration-300 hover:scale-105"
            >
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/20">
                <Mail size={18} className="text-white" />
              </div>
              <span className="relative flex items-center gap-2 font-medium text-sm text-[var(--text-primary)] whitespace-nowrap">
                Get in Touch
                <span className="opacity-70 group-hover:translate-x-1 transition-transform duration-300 text-[var(--accent-primary)]">→</span>
              </span>
            </Link>

            <Link
              to="/projects"
              className="group relative flex items-center gap-3 px-5 py-3 bg-[var(--bg-accent)] backdrop-blur-sm rounded-2xl border border-[var(--border-primary)] hover:border-[var(--accent-primary)] transition-all duration-300 hover:scale-105"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 group-hover:border-slate-500 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                <ExternalLink size={18} className="text-white" />
              </div>
              <span className="flex items-center gap-2 font-medium text-sm text-[var(--text-primary)] group-hover:text-[var(--text-primary)] whitespace-nowrap">
                View My Work
                <span className="opacity-70 group-hover:translate-x-1 transition-transform duration-300 text-[var(--text-secondary)]">→</span>
              </span>
            </Link>


            <a
              href="https://drive.google.com/file/d/1M_d3F9N_0TDtr2zwHb8OyiCacvAgzFOS/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 px-5 py-3 bg-[var(--bg-accent)] backdrop-blur-sm rounded-2xl border border-[var(--border-primary)] hover:border-[var(--accent-primary)] transition-all duration-300 hover:scale-105"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 group-hover:border-slate-500 flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Download size={18} className="text-white" />
              </div>
              <span className="flex items-center gap-2 font-medium text-sm text-[var(--text-primary)] group-hover:text-[var(--text-primary)] whitespace-nowrap">
                Resume
                <span className="opacity-70 group-hover:translate-x-1 transition-transform duration-300 text-[var(--text-secondary)]">→</span>
              </span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 sm:gap-6 pt-8 justify-center sm:justify-start flex-wrap">
            {socialLinks.map(({ Icon, url, label, gradient, textColor }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
              >
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${gradient} border border-[var(--border-primary)] group-hover:border-white/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 shadow-lg group-hover:shadow-xl`}>
                  <Icon size={20} className="text-white transition-colors" />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[var(--bg-secondary)] backdrop-blur-sm rounded border border-[var(--border-primary)] opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
                  <span className="text-xs font-medium text-[var(--text-primary)]">{label}</span>
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
                src="https://res.cloudinary.com/dq7hb3fah/image/upload/v1774843674/Screenshot_2026-03-30_093740_dmnnvv.png"
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