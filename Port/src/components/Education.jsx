import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="w-full relative">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-6 tracking-wide animate-fade-in">
            Get In <span className="font-light bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-300 font-light text-base sm:text-lg animate-fade-in-delay">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 w-full">
          {/* Contact Form */}
          <div className="group relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500" />
            <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-3xl border border-indigo-500/30 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-light mb-6 text-cyan-400">Send a Message</h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Enter Name" className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 hover:border-indigo-400 text-sm sm:text-base" />
                  <input type="email" placeholder="your.email@gmail.com" className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 hover:border-indigo-400 text-sm sm:text-base" />
                </div>
                <input type="text" placeholder="What about this?" className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 hover:border-indigo-400 text-sm sm:text-base" />
                <textarea rows="6" placeholder="Tell me about your message" className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 hover:border-indigo-400 resize-none text-sm sm:text-base"></textarea>
                <button type="submit" className="group/btn w-full px-6 py-3 bg-slate-950 hover:bg-slate-900 border border-slate-700 hover:border-cyan-400 rounded-xl font-light transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-400/20 flex items-center justify-center gap-2">
                  <Mail size={20} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="group relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/30 to-cyan-600/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500" />
              <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-3xl border border-indigo-500/30 p-6 sm:p-8 h-full flex flex-col">
                <h3 className="text-xl sm:text-2xl font-light mb-6 text-cyan-400">Let's Connect</h3>
                <div className="flex items-center gap-3 mb-4 text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-lg bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-cyan-400" />
                  </div>
                  <span className="font-light text-sm sm:text-base">Ahmedabad, Gujarat</span>
                </div>
                <div className="flex items-center gap-3 mb-6 text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-lg bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-cyan-400" />
                  </div>
                  <span className="font-light text-sm sm:text-base break-all">anishachhajer16@gmail.com</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <a href="https://github.com/Anisha-Chhajer-Jain" target="_blank" rel="noopener noreferrer" className="group/social flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-indigo-900/30 hover:bg-indigo-800/40 border border-indigo-500/30 hover:border-cyan-400 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20">
                    <Github size={18} className="sm:w-5 sm:h-5 group-hover/social:rotate-12 transition-transform duration-300" />
                    <span className="font-light text-sm sm:text-base">GitHub</span>
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="group/social flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-indigo-900/30 hover:bg-indigo-800/40 border border-indigo-500/30 hover:border-cyan-400 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20">
                    <Linkedin size={18} className="sm:w-5 sm:h-5 group-hover/social:rotate-12 transition-transform duration-300" />
                    <span className="font-light text-sm sm:text-base">LinkedIn</span>
                  </a>
                  <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="group/social flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-indigo-900/30 hover:bg-indigo-800/40 border border-indigo-500/30 hover:border-cyan-400 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20">
                    <Twitter size={18} className="sm:w-5 sm:h-5 group-hover/social:rotate-12 transition-transform duration-300" />
                    <span className="font-light text-sm sm:text-base">Twitter</span>
                  </a>
                  <a href="mailto:anishachhajer16@gmail.com" className="group/social flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-indigo-900/30 hover:bg-indigo-800/40 border border-indigo-500/30 hover:border-cyan-400 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20">
                    <Mail size={18} className="sm:w-5 sm:h-5 group-hover/social:rotate-12 transition-transform duration-300" />
                    <span className="font-light text-sm sm:text-base">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}