import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { Icon: Github, url: 'https://github.com/Anisha-Chhajer-Jain', label: 'GitHub', gradient: 'from-slate-800 to-gray-900' },
    { Icon: Linkedin, url: 'https://www.linkedin.com/in/anisha-chhajer-844114367/', label: 'LinkedIn', gradient: 'from-blue-700 to-blue-800' },
    { Icon: Twitter, url: 'https://x.com/anisha_chhajer', label: 'Twitter', gradient: 'from-sky-600 to-cyan-600' },
  ];

  return (
    <footer className="w-full py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      </div>

      <div className="w-full relative">
        <div className="text-center">
          <div className="mb-10">
            <div className="mb-6">
              <p className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                Or Connect On Social Media
              </p>
              <p className="text-sm text-slate-400 font-light">
                Follow me for updates and insights
              </p>
            </div>

            <div className="flex justify-center gap-6 mb-10">
              {socialLinks.map(({ Icon, url, label, gradient }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="group relative" aria-label={label}>
                  <div className={`absolute -inset-2 bg-gradient-to-r ${gradient} rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`} />
                  <div className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${gradient} border border-slate-700/50 group-hover:border-white/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 shadow-lg group-hover:shadow-xl`}>
                    <Icon size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-slate-900/90 backdrop-blur-sm rounded-lg border border-slate-700/50 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none whitespace-nowrap">
                      <span className="text-xs font-medium text-white">{label}</span>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 border-b border-r border-slate-700/50 rotate-45" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="group relative">
              <div className="inline-block">
                <p className="text-xl font-bold text-slate-300 group-hover:text-white transition-colors duration-300">
                  © 2025 Anisha Chhajer
                </p>
                <p className="text-base font-medium bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mt-2">
                  All rights reserved
                </p>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-400 group-hover:w-40 transition-all duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}