
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills-section' },
  { name: 'Certificates', id: 'certificates' },
  { name: 'Hackathon', id: 'hackathon-experience' },
  { name: 'Contact', id: 'contact' },
];

export default function Navigation({ scrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');


  // Initialize theme from system or local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'light') {
      document.documentElement.classList.add('light');
    } else if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.remove('light');
    }
  }, []);



  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section for highlighting
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (sectionId) => {
    if (scrollToSection && typeof scrollToSection === 'function') {
      scrollToSection(sectionId);
    } else {
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
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 
        transition-all duration-300
        ${scrolled
          ? 'bg-[var(--glass-bg)] border-b border-[var(--border-primary)] shadow-lg'
          : 'bg-transparent border-b border-transparent'
        }
      `}
      style={{
        WebkitBackdropFilter: 'blur(12px)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 min-h-[60px] sm:min-h-[72px] flex flex-col justify-center">
        <div className="flex justify-between items-center w-full">
          {/* Logo - Responsive sizing with click to top */}
          <button
            onClick={() => handleNavClick('hero')}
            className="text-lg sm:text-xl md:text-2xl font-light tracking-wider focus:outline-none relative z-50"
            aria-label="Go to top"
          >
            <span className="inline-block hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              A
            </span>
            <span className="inline-block hover:scale-110 transition-transform duration-300 delay-75 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              C
            </span>
          </button>

          <div className="flex items-center gap-4 sm:gap-6">
            {/* Desktop Menu - Responsive gap and font size */}
            <div className="hidden md:flex gap-6 lg:gap-8 text-xs lg:text-sm font-light">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative group overflow-hidden py-2 transition-all duration-300
                    ${activeSection === item.id
                      ? 'text-[var(--accent-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={`Navigate to ${item.name} section`}
                >
                  <span className="relative z-10 transition-colors duration-300 whitespace-nowrap">
                    {item.name}
                  </span>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-500
                    ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}
                  `} />
                </button>
              ))}
            </div>



            {/* Mobile Menu Button - Responsive sizing and touch-friendly */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative z-50 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 active:scale-95 transition-all duration-300 shadow-lg shadow-indigo-500/50 hover:shadow-indigo-400/70 hover:scale-105"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={20} className="text-white font-bold sm:w-5 sm:h-5" />
              ) : (
                <Menu size={20} className="text-white font-bold sm:w-5 sm:h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced responsive overlay */}
        <div
          className={`
            md:hidden fixed inset-x-0 top-0 bottom-0 w-full 
            bg-[var(--bg-primary)] 
            transition-all duration-500 ease-in-out z-40
            ${mobileMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-full pointer-events-none'
            }
          `}
        >
          <div className="w-full h-full flex flex-col pt-20 sm:pt-24 px-6 pb-20 overflow-y-auto">
            <div className="space-y-2 sm:space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    group relative w-full text-left 
                    py-4 px-4 
                    text-xl sm:text-2xl font-bold 
                    transition-all duration-300 
                    border-b border-[var(--border-primary)]
                    hover:translate-x-2
                    animate-fadeIn
                    ${activeSection === item.id
                      ? 'text-[var(--accent-primary)]'
                      : 'text-[var(--text-primary)] hover:text-[var(--accent-primary)]'
                    }
                  `}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="relative z-10 flex items-center justify-between">
                    {item.name}
                    {activeSection === item.id && (
                      <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                    )}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-[var(--border-primary)]">
              <div className="flex flex-col items-center gap-4">
                <p className="text-sm text-[var(--text-secondary)]">
                  © 2025 Anisha Chhajer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add keyframe animation for mobile menu items */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </nav>
  );
}
