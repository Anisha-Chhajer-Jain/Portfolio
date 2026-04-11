
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Certificates', path: '/certificates' },
  { name: 'Hackathon', path: '/hackathon' },
  { name: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // removed position: fixed because it can break scrolling on mobile sometimes
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          {/* Logo */}
          <Link
            to="/"
            onClick={handleLinkClick}
            className="text-lg sm:text-xl md:text-2xl font-light tracking-wider focus:outline-none relative z-50 cursor-pointer"
            aria-label="Go to home"
          >
            <span className="inline-block hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              A
            </span>
            <span className="inline-block hover:scale-110 transition-transform duration-300 delay-75 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              C
            </span>
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 lg:gap-8 text-xs lg:text-sm font-light">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={handleLinkClick}
                  className={({ isActive }) => `
                    relative group overflow-hidden py-2 transition-all duration-300
                    ${isActive
                      ? 'text-[var(--accent-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10 transition-colors duration-300 whitespace-nowrap">
                    {item.name}
                  </span>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-500
                    ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}
                  `} />
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative z-50 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 active:scale-95 transition-all duration-300 shadow-lg shadow-indigo-500/50 hover:shadow-indigo-400/70 hover:scale-105"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={20} className="text-white font-bold" />
              ) : (
                <Menu size={20} className="text-white font-bold" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
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
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={handleLinkClick}
                  className={({ isActive }) => `
                    group relative w-full text-left 
                    py-4 px-4 
                    text-xl sm:text-2xl font-bold 
                    transition-all duration-300 
                    border-b border-[var(--border-primary)]
                    hover:translate-x-2
                    animate-fadeIn
                    ${isActive
                      ? 'text-[var(--accent-primary)]'
                      : 'text-[var(--text-primary)] hover:text-[var(--accent-primary)]'
                    }
                  `}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="relative z-10 flex items-center justify-between">
                    {item.name}
                    {location.pathname === item.path && (
                      <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                    )}
                  </span>
                </NavLink>
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
