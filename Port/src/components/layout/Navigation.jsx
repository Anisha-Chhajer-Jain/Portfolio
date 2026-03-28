import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Certificate', id: 'certificate' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

export default function Navigation({ scrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };
  
  return (
    <nav className="fixed top-0 w-full bg-slate-950/60 backdrop-blur-xl z-40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-light tracking-wider">
            <span className="inline-block hover:scale-110 transition-transform duration-300">A</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300 delay-75">C</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-light">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.id)}
                className="relative group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-indigo-300">
                  {item.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-indigo-400 group-hover:w-full transition-all duration-500" />
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative z-50 w-12 h-12 flex items-center justify-center rounded-xl border-2 border-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-indigo-500/50 hover:shadow-indigo-400/70 hover:scale-110"
          >
            {mobileMenuOpen ? <X size={24} className="text-white font-bold" /> : <Menu size={24} className="text-white font-bold" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-16 left-0 w-screen h-screen bg-slate-950/98 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden z-40 ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="px-6 py-8 space-y-6 flex flex-col justify-center h-full">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left py-4 text-lg font-semibold text-white hover:text-indigo-300 transition-colors duration-300 border-b border-slate-700 hover:border-indigo-500/50 pl-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}