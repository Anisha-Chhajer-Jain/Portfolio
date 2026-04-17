
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Certificates', path: '/certificates' },
  { name: 'Achievement', path: '/achievement' },
  { name: 'Education', path: '/education' },
  { name: 'Contact', path: '/contact' },
];

// Maps section element IDs on the home page to the navItem name
const sectionToNav = {
  'hero': 'Home',
  'about': 'About',
  'projects': 'Projects',
  'skills': 'Skills',
  'skills-section': 'Skills',   // Technologies also maps to Skills
  'certificates': 'Certificates',
  'hackathon-experience': 'Achievement',
  'featured-hackathon': 'Achievement',
  'education': 'Education',
  'contact': 'Contact',
};

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [activeSection, setActiveSection] = useState('Home');
  const location = useLocation();
  const navRef = useRef(null);
  const linkRefs = useRef([]);

  // Helper: move indicator to a nav item by name
  const moveIndicatorTo = useCallback((navName) => {
    const idx = navItems.findIndex(item => item.name === navName);
    const el = linkRefs.current[idx];
    const navEl = navRef.current;
    if (el && navEl) {
      const navRect = navEl.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setIndicatorStyle({
        left: elRect.left - navRect.left,
        width: elRect.width,
        opacity: 1,
      });
    }
  }, []);

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light');
    } else if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.remove('light');
    }
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock on mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // ── Scroll-spy: observe sections on home page ──
  useEffect(() => {
    if (location.pathname !== '/') return;

    const sectionIds = Object.keys(sectionToNav);
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible section
        let best = null;
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (!best || entry.intersectionRatio > best.intersectionRatio) {
              best = entry;
            }
          }
        });

        if (best) {
          const navName = sectionToNav[best.target.id];
          if (navName) {
            setActiveSection(navName);
          }
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // trigger when section enters upper-middle area
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

  // ── Move indicator based on scroll-spy (home) or route (other pages) ──
  useEffect(() => {
    if (location.pathname === '/') {
      // On home page, follow the active section
      moveIndicatorTo(activeSection);
    } else {
      // On other routes, follow the route
      const activeItem = navItems.find(item =>
        item.path === '/'
          ? false
          : location.pathname.startsWith(item.path)
      );
      if (activeItem) {
        moveIndicatorTo(activeItem.name);
      }
    }
  }, [location.pathname, activeSection, moveIndicatorTo]);

  // Re-calculate indicator on window resize
  useEffect(() => {
    const handleResize = () => {
      if (location.pathname === '/') {
        moveIndicatorTo(activeSection);
      } else {
        const activeItem = navItems.find(item =>
          item.path !== '/' && location.pathname.startsWith(item.path)
        );
        if (activeItem) moveIndicatorTo(activeItem.name);
        else moveIndicatorTo('Home');
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [location.pathname, activeSection, moveIndicatorTo]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Determine which nav item is "active" for text highlighting
  const getIsActive = (item) => {
    if (location.pathname === '/') {
      return item.name === activeSection;
    }
    return item.path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(item.path);
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
      style={{ WebkitBackdropFilter: 'blur(12px)', backdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 min-h-[60px] sm:min-h-[72px] flex flex-col justify-center">
        <div className="flex justify-between items-center w-full">

          {/* Logo */}
          <Link
            to="/"
            onClick={handleLinkClick}
            className="flex items-center focus:outline-none relative z-50 cursor-pointer"
            aria-label="Go to home"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-7 sm:h-8 md:h-10 w-auto invert opacity-100 hover:scale-105 transition-all duration-300 contrast-125"
            />
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">

            {/* Desktop Menu */}
            <div
              ref={navRef}
              className="hidden md:flex gap-6 lg:gap-8 text-sm lg:text-base font-extrabold relative"
            >
              {navItems.map((item, index) => {
                const isActive = getIsActive(item);
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    ref={el => linkRefs.current[index] = el}
                    onClick={handleLinkClick}
                    className={`
                      relative py-2 transition-colors duration-300 whitespace-nowrap
                      ${isActive
                        ? 'text-[var(--accent-primary)]'
                        : 'text-[var(--text-secondary)] hover:text-violet-300'
                      }
                    `}
                  >
                    {item.name}
                  </NavLink>
                );
              })}

              {/* Magic sliding indicator */}
              <span
                className="absolute bottom-0 h-0.5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 pointer-events-none"
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                  opacity: indicatorStyle.opacity,
                  transition: 'left 0.35s cubic-bezier(0.4,0,0.2,1), width 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.2s',
                }}
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative z-50 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 active:scale-95 transition-all duration-300 shadow-lg shadow-indigo-500/50"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
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
                  className={({ isActive: routeActive }) => `
                    group relative w-full text-left
                    py-4 px-4
                    text-xl sm:text-2xl font-bold
                    transition-all duration-300
                    border-b border-[var(--border-primary)]
                    hover:translate-x-2
                    animate-fadeIn
                    ${(location.pathname === '/' ? item.name === activeSection : routeActive)
                      ? 'text-[var(--accent-primary)]'
                      : 'text-[var(--text-primary)] hover:text-[var(--accent-primary)]'
                    }
                  `}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="relative z-10 flex items-center justify-between">
                    {item.name}
                    {(location.pathname === '/' ? item.name === activeSection : location.pathname === item.path) && (
                      <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                    )}
                  </span>
                </NavLink>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-[var(--border-primary)]">
              <div className="flex flex-col items-center gap-4">
                <p className="text-sm text-[var(--text-secondary)]">© 2025 Anisha Chhajer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </nav>
  );
}


