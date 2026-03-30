
// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';

// const navItems = [
//   { name: 'About', id: 'about' },
//   { name: 'Projects', id: 'projects' },
//   { name: 'Skills', id: 'skills-section' }, // Updated to match Skills component id
//   { name: 'Certificates', id: 'certificates' }, // Matches Certificates section id
//   { name: 'Contact', id: 'contact' },
// ];

// export default function Navigation({ scrollToSection }) {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('');
  
//   // Handle scroll effect for navbar background
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
      
//       // Track active section for highlighting
//       const sections = navItems.map(item => item.id);
//       const scrollPosition = window.scrollY + 100; // Offset for better detection
      
//       for (const sectionId of sections) {
//         const element = document.getElementById(sectionId);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(sectionId);
//             break;
//           }
//         }
//       }
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
  
//   // Prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (mobileMenuOpen) {
//       document.body.style.overflow = 'hidden';
//       document.body.style.position = 'fixed';
//       document.body.style.width = '100%';
//     } else {
//       document.body.style.overflow = '';
//       document.body.style.position = '';
//       document.body.style.width = '';
//     }
//     return () => {
//       document.body.style.overflow = '';
//       document.body.style.position = '';
//       document.body.style.width = '';
//     };
//   }, [mobileMenuOpen]);
  
//   const handleNavClick = (sectionId) => {
//     if (scrollToSection && typeof scrollToSection === 'function') {
//       scrollToSection(sectionId);
//     } else {
//       // Fallback scrolling with better offset handling
//       const element = document.getElementById(sectionId);
//       if (element) {
//         const offset = 80; // Offset for fixed header
//         const elementPosition = element.getBoundingClientRect().top;
//         const offsetPosition = elementPosition + window.pageYOffset - offset;
        
//         window.scrollTo({
//           top: offsetPosition,
//           behavior: 'smooth'
//         });
//       }
//     }
//     setMobileMenuOpen(false);
//   };
  
//   return (
//     <nav className={`
//       fixed top-0 w-full z-40 
//       transition-all duration-300
//       ${scrolled 
//         ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10' 
//         : 'bg-slate-950/60 backdrop-blur-lg border-b border-white/5'
//       }
//     `}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
//         <div className="flex justify-between items-center">
//           {/* Logo - Responsive sizing with click to top */}
//           <button
//             onClick={() => handleNavClick('hero')}
//             className="text-lg sm:text-xl md:text-2xl font-light tracking-wider focus:outline-none"
//             aria-label="Go to top"
//           >
//             <span className="inline-block hover:scale-110 transition-transform duration-300">
//               A
//             </span>
//             <span className="inline-block hover:scale-110 transition-transform duration-300 delay-75">
//               C
//             </span>
//           </button>
          
//           {/* Desktop Menu - Responsive gap and font size */}
//           <div className="hidden md:flex gap-6 lg:gap-8 text-xs lg:text-sm font-light">
//             {navItems.map((item, index) => (
//               <button
//                 key={item.name}
//                 onClick={() => handleNavClick(item.id)}
//                 className={`relative group overflow-hidden py-2 transition-all duration-300
//                   ${activeSection === item.id 
//                     ? 'text-indigo-300' 
//                     : 'text-gray-300 hover:text-indigo-300'
//                   }
//                 `}
//                 style={{ animationDelay: `${index * 0.1}s` }}
//                 aria-label={`Navigate to ${item.name} section`}
//               >
//                 <span className="relative z-10 transition-colors duration-300 whitespace-nowrap">
//                   {item.name}
//                 </span>
//                 <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-500
//                   ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}
//                 `} />
//               </button>
//             ))}
//           </div>
          
//           {/* Mobile Menu Button - Responsive sizing and touch-friendly */}
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="md:hidden relative z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl border-2 border-white/80 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 active:scale-95 transition-all duration-300 shadow-lg shadow-indigo-500/50 hover:shadow-indigo-400/70 hover:scale-105"
//             aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
//             aria-expanded={mobileMenuOpen}
//           >
//             {mobileMenuOpen ? (
//               <X size={20} className="text-white font-bold sm:w-6 sm:h-6" />
//             ) : (
//               <Menu size={20} className="text-white font-bold sm:w-6 sm:h-6" />
//             )}
//           </button>
//         </div>
        
//         {/* Mobile Menu - Enhanced responsive overlay */}
//         <div
//           className={`
//             md:hidden fixed inset-0 top-16 left-0 w-full h-[calc(100vh-4rem)] 
//             bg-gradient-to-b from-slate-950/98 to-slate-900/98 
//             backdrop-blur-xl border-t border-white/10
//             transition-all duration-400 ease-in-out z-40
//             ${mobileMenuOpen 
//               ? 'opacity-100 visible translate-x-0' 
//               : 'opacity-0 invisible translate-x-full'
//             }
//           `}
//         >
//           <div className="flex flex-col h-full overflow-y-auto">
//             <div className="flex-1 px-4 sm:px-6 py-6 sm:py-8 space-y-2 sm:space-y-3">
//               {navItems.map((item, index) => (
//                 <button
//                   key={item.name}
//                   onClick={() => handleNavClick(item.id)}
//                   className={`
//                     group relative w-full text-left 
//                     py-3 sm:py-4 px-4 sm:px-6 
//                     text-base sm:text-lg font-semibold 
//                     transition-all duration-300 
//                     border-b border-slate-700/50 hover:border-indigo-500/50
//                     hover:translate-x-2
//                     animate-fadeIn
//                     ${activeSection === item.id 
//                       ? 'text-indigo-300 border-indigo-500/50' 
//                       : 'text-white hover:text-indigo-300'
//                     }
//                   `}
//                   style={{ animationDelay: `${index * 0.05}s` }}
//                   aria-label={`Navigate to ${item.name} section`}
//                 >
//                   <span className="relative z-10 flex items-center justify-between">
//                     {item.name}
//                     {activeSection === item.id && (
//                       <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
//                     )}
//                   </span>
//                   <span className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-500
//                     ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}
//                   `} />
//                 </button>
//               ))}
//             </div>
            
//             {/* Optional: Social links in mobile menu */}
//             <div className="px-6 sm:px-8 py-6 border-t border-slate-800/50">
//               <p className="text-xs text-center text-slate-400">
//                 © 2025 Anisha Chhajer
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Add keyframe animation for mobile menu items */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateX(-20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out forwards;
//           opacity: 0;
//         }
//       `}</style>
//     </nav>
//   );
// }
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills-section' },
  { name: 'Certificates', id: 'certificates' },
  { name: 'Contact', id: 'contact' },
];

export default function Navigation({ scrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
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
    <nav className={`
      fixed top-0 w-full z-40 
      transition-all duration-300
      ${scrolled 
        ? 'bg-slate-950/95 backdrop-blur-xl border-b border-white/10' 
        : 'bg-slate-950/90 backdrop-blur-lg border-b border-white/5'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex justify-between items-center">
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
          
          {/* Desktop Menu - Responsive gap and font size */}
          <div className="hidden md:flex gap-6 lg:gap-8 text-xs lg:text-sm font-light">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.id)}
                className={`relative group overflow-hidden py-2 transition-all duration-300
                  ${activeSection === item.id 
                    ? 'text-indigo-300' 
                    : 'text-gray-300 hover:text-indigo-300'
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
            className="md:hidden relative z-50 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 active:scale-95 transition-all duration-300 shadow-lg shadow-indigo-500/50 hover:shadow-indigo-400/70 hover:scale-105"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={20} className="text-white font-bold sm:w-6 sm:h-6" />
            ) : (
              <Menu size={20} className="text-white font-bold sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu - Enhanced responsive overlay with dark background */}
        <div
          className={`
            md:hidden fixed inset-0 top-[60px] sm:top-[68px] left-0 w-full 
            h-[calc(100vh-60px)] sm:h-[calc(100vh-68px)]
            bg-slate-950
            transition-all duration-400 ease-in-out z-40
            ${mobileMenuOpen 
              ? 'opacity-100 visible translate-x-0' 
              : 'opacity-0 invisible translate-x-full'
            }
          `}
        >
          {/* Solid dark background - no transparency issues */}
          <div className="w-full h-full bg-gradient-to-b from-slate-950 to-slate-900 overflow-y-auto">
            <div className="flex flex-col h-full">
              <div className="flex-1 px-4 sm:px-6 py-6 sm:py-8 space-y-2 sm:space-y-3">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      group relative w-full text-left 
                      py-3 sm:py-4 px-4 sm:px-6 
                      text-base sm:text-lg font-semibold 
                      transition-all duration-300 
                      border-b border-slate-700/50 hover:border-indigo-500/50
                      hover:translate-x-2
                      animate-fadeIn
                      ${activeSection === item.id 
                        ? 'text-indigo-300 border-indigo-500/50' 
                        : 'text-white hover:text-indigo-300'
                      }
                    `}
                    style={{ animationDelay: `${index * 0.05}s` }}
                    aria-label={`Navigate to ${item.name} section`}
                  >
                    <span className="relative z-10 flex items-center justify-between">
                      {item.name}
                      {activeSection === item.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                      )}
                    </span>
                    <span className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-500
                      ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}
                    `} />
                  </button>
                ))}
              </div>
              
              {/* Optional: Social links in mobile menu */}
              <div className="px-6 sm:px-8 py-6 border-t border-slate-800/50 bg-slate-950">
                <p className="text-xs text-center text-slate-400">
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
        
        /* Ensure navigation always stays dark on all devices */
        nav {
          background-color: #0f172a !important; /* Fallback for older browsers */
          -webkit-backdrop-filter: blur(12px);
          backdrop-filter: blur(12px);
        }
        
        /* Mobile menu solid dark background */
        @media (max-width: 768px) {
          .fixed.inset-0 {
            background-color: #0f172a;
          }
        }
      `}</style>
    </nav>
  );
}