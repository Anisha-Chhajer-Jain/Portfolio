
import React, { useState, useEffect } from 'react';
import { Mail, Download, Code, Lightbulb, TrendingUp, Github, Linkedin, Twitter, ExternalLink, Youtube, Award, Menu, X } from 'lucide-react';
import './App.css'

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [visibleCertificates, setVisibleCertificates] = useState(6);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    setMobileMenuOpen(false);
  };

  const certificates = [
    { 
      id: 1, 
      title: 'JavaScript Certification', 
      org: 'SoloLearn', 
      date: '2024',
      color: 'from-green-600 to-emerald-700', 
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284476/Screenshot_2026-02-05_150828_i1a5nq.png',
      url: 'https://www.sololearn.com/certificates/CC-DNUBDBWI' 
    },
    { 
      id: 2, 
      title: 'AI Video Generation Certificate', 
      org: 'SimpliLearn', 
      date: '2024',
      color: 'from-blue-400 to-cyan-500', 
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284476/Screenshot_2026-02-05_150839_lhucwu.png',
      url: 'https://simpli-web.app.link/e/zsOcWIu3r0b' 
    },
    { 
      id: 3, 
      title: 'Generative AI Studio Certificate', 
      org: 'SimpliLearn', 
      date: '2024',
      color: 'from-cyan-400 to-blue-600',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284477/Screenshot_2026-02-05_150847_r9gsje.png', 
      url: 'https://simpli-web.app.link/e/Wcdo1JE3r0b' 
    },
    { 
      id: 4, 
      title: 'Front-End Development', 
      org: 'SimpliLearn', 
      date: '2024',
      color: 'from-orange-400 to-amber-500', 
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284478/Screenshot_2026-02-05_150939_r0y4lz.png',
      url: 'https://simpli-web.app.link/e/ow99cSF3r0b' 
    },
    { 
      id: 5, 
      title: 'React (Basic) Certificate', 
      org: 'HackerRank', 
      date: '2024',
      color: 'from-gray-400 to-slate-600', 
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284476/Screenshot_2026-02-05_150954_edi1wr.png',
      url: 'https://www.hackerrank.com/certificates/c94ecf2db01f' 
    },
    { 
      id: 6, 
      title: 'Full Stack Development', 
      org: 'Unstop', 
      date: '2024',
      color: 'from-orange-400 to-yellow-500', 
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284478/Screenshot_2026-02-05_151017_kmw5jz.png',
      url: 'https://unstop.com/certificate-preview/63fa2e44-702a-45fd-9df6-7b08fe4ffec7' 
    },
    { 
      id: 7, 
      title: 'Advanced Programming', 
      org: 'Unstop', 
      date: '2024',
      color: 'from-purple-400 to-pink-500', 
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284477/Screenshot_2026-02-05_151005_mt4rwr.png',
      url: 'https://unstop.com/certificate-preview/73e65660-a050-4f67-9561-4f3c1d1d1ff7' 
    },
    { 
      id: 8, 
      title: 'AI Tools & ChatGPT Workshop', 
      org: 'Be10X', 
      date: '2024',
      color: 'from-red-400 to-rose-500', 
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284478/Screenshot_2026-02-05_151026_erhshj.png',
      url: 'https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971007801' 
    },
    { 
      id: 9, 
      title: 'Git & Github Advance Certificate', 
      org: 'WsCube Tech', 
      date: '2025',
      color: 'from-teal-400 to-cyan-600', 
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284478/Screenshot_2026-02-05_151035_ir1rms.png',
      url: 'https://www.wscubetech.com/verify-certificate/VG50MWS2026M3996616796' 
    },
    { 
      id: 10, 
      title: 'Generative AI Maastermind Certificate', 
      org: 'Outskill', 
      date: '2025',
      color: 'from-indigo-400 to-purple-600', 
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284478/Screenshot_2026-02-05_151048_o5tfhz.png',
      url: 'https://s3.ap-south-1.amazonaws.com/assets.growthschool.io/certificates/50cbb760-7921-428e-b441-7eea7464819c_cert.pdf' 
    },
  ];
  
  const education = [
    {
      title: 'BTech CSE',
      institution: 'CodingGita X Swaminarayan University',
      period: '2025-2029',
      description: 'Proficient in full-stack development with hands-on experience in HTML, CSS, JavaScript, React UI/UX design and MongoDB. Skilled in basic problem solving and database management',
      color: 'from-blue-400 to-cyan-500',
      icon: '💻'
    },
    {
      title: 'Complete School Education',
      institution: 'St. James School',
      period: '2012-2025',
      description: 'Completed 12th grade (Science with Mathematics) and learning Java concepts, focusing on object-oriented programming and logical thinking.',
      color: 'from-pink-400 to-rose-500',
      icon: '🎓'
    }
  ];

  const technologies = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: 'from-orange-400 to-orange-600', borderColor: 'border-orange-400/50', hoverBorder: 'hover:border-orange-400' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: 'from-blue-400 to-blue-600', borderColor: 'border-blue-400/50', hoverBorder: 'hover:border-blue-400' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: 'from-yellow-400 to-yellow-600', borderColor: 'border-yellow-400/50', hoverBorder: 'hover:border-yellow-400' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'from-cyan-400 to-cyan-600', borderColor: 'border-cyan-400/50', hoverBorder: 'hover:border-cyan-400' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: 'from-green-400 to-green-600', borderColor: 'border-green-400/50', hoverBorder: 'hover:border-green-400' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', color: 'from-orange-400 to-red-600', borderColor: 'border-orange-400/50', hoverBorder: 'hover:border-orange-400' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', color: 'from-blue-500 to-purple-600', borderColor: 'border-purple-400/50', hoverBorder: 'hover:border-purple-400' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: 'from-gray-600 to-gray-800', borderColor: 'border-gray-400/50', hoverBorder: 'hover:border-gray-400', isWhite: true },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: 'from-purple-400 to-pink-600', borderColor: 'border-pink-400/50', hoverBorder: 'hover:border-pink-400' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: 'from-red-500 to-orange-600', borderColor: 'border-red-400/50', hoverBorder: 'hover:border-red-400' },
    { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', color: 'from-cyan-400 to-blue-600', borderColor: 'border-cyan-400/50', hoverBorder: 'hover:border-cyan-400' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: 'from-sky-400 to-cyan-500', borderColor: 'border-sky-400/50', hoverBorder: 'hover:border-sky-400' }
  ];

  const projects = [
    {
      title: 'Flipkart Clone',
      description: 'A fully responsive Flipkart-inspired e-commerce UI clone with product listings, cart functionality, and modern design.',
      tags: ['HTML', 'CSS', 'JS', 'Responsive'],
      gradient: 'from-orange-400 to-yellow-500',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284088/Screenshot_2026-02-05_150323_jsohtj.png',
      github: 'https://github.com/Anisha-Chhajer-Jain/FLIPKART-CLONE',
      youtube: 'https://youtu.be/AvD3hqPTmMU?si=Q5hmb3LLucv2W9Ov',
      demo: 'https://dancing-malasada-228dd4.netlify.app/'
    },
    {
      title: 'Rare Planet',
      description: 'A Rare Planet–inspired website UI clone with smooth animations, modern layout, and interactive elements.',
      tags: ['HTML', 'CSS', 'JS', 'Animations'],
      gradient: 'from-teal-400 to-cyan-500',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284092/Screenshot_2026-02-05_150245_uyufp5.png',
      github: 'https://github.com/Anisha-Chhajer-Jain/RARE-PLANET-CLONE',
      youtube: 'https://youtu.be/dUFXE5soklM?si=gS0vfkdP9M7G-tQE',
      demo: 'https://108565-rare-planet-clone.netlify.app/'
    },
    {
      title: 'Shure Music',
      description: 'A Shure-inspired responsive website UI clone for audio products with sleek design and smooth transitions.',
      tags: ['HTML', 'CSS', 'JS', 'Audio'],
      gradient: 'from-lime-400 to-green-500',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284092/Screenshot_2026-02-05_150307_kmxwgd.png',
      github: 'https://github.com/Anisha-Chhajer-Jain/SHURE-CLONE',
      youtube: 'https://youtu.be/28-tTsRMRZU?si=TWc3XUNpZSgyNjDH',
      demo: 'https://shureclone-108565-anisha.netlify.app/'
    },
    {
      title: 'Bullet Proof',
      description: 'A Bulletproof-inspired security services website with responsive design and modern UI components.',
      tags: ['HTML', 'CSS', 'JS', 'Security'],
      gradient: 'from-orange-400 to-yellow-500',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284088/Screenshot_2026-02-05_150323_jsohtj.png',
      github: 'https://github.com/Anisha-Chhajer-Jain/BULLET-PROOF-CLONE',
      youtube: 'https://youtu.be/OP0XIlN4eis?si=7WpZOF0KT1Wy41yF',
      demo: 'https://bullet-proof-clone-108565.netlify.app/'
    },
    {
      title: 'MX Player',
      description: 'A responsive MX Player clone offering a smooth video streaming experience with user-friendly interface.',
      tags: ['HTML', 'CSS', 'JS', 'Video'],
      gradient: 'from-teal-400 to-cyan-500',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284092/Screenshot_2026-02-05_150307_kmxwgd.png',
      github: 'https://github.com/Anisha-Chhajer-Jain/MX-PLAYER-CLONE',
      youtube: 'https://youtu.be/qW73SWI1Pe8?si=7TSeQu5qybwIgIBB',
      demo: 'https://108565-mx-player-clone-anisha.netlify.app/'
    },
    {
      title: 'Kachava',
      description: 'A KaChava-inspired product website focusing on modern UI design, responsiveness, and smooth interactions.',
      tags: ['HTML', 'CSS', 'JS', 'E-commerce'],
      gradient: 'from-lime-400 to-green-500',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284480/Screenshot_2026-02-05_150356_wea5sm.png',
      github: 'https://github.com/Anisha-Chhajer-Jain/KACHAVA-CLONE',
      youtube: 'https://youtu.be/X73nLmEqYl0?si=8n9drElhVNS4VL_p',
      demo: 'https://kachava-clone.netlify.app/'
    },
    {
      title: 'Weather App',
      description: 'A real-time weather application with location detection and beautiful UI showing weather conditions.',
      tags: ['React', 'API', 'Tailwind', 'Weather'],
      gradient: 'from-blue-400 to-cyan-500',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_225116_isrr1w.png',
      github: 'https://github.com/yourusername/weather-app',
      youtube: 'https://youtube.com/your-demo',
      demo: 'https://weather-app-demo.netlify.app'
    },
    {
      title: 'Tic Tac Toe',
      description: 'A classic Tic Tac Toe game with interactive UI and game logic.',
      tags: ['JavaScript', 'HTML', 'CSS', 'Game'],
      gradient: 'from-purple-400 to-pink-500',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_224714_snxpsz.png',
      github: 'https://github.com/yourusername/tic-tac-toe',
      youtube: 'https://youtube.com/your-demo',
      demo: 'https://tic-tac-toe-demo.netlify.app'
    },
    {
      title: 'Colour Guess',
      description: 'A color guessing game to test RGB color knowledge with score tracking.',
      tags: ['JavaScript', 'Game', 'UI/UX', 'Interactive'],
      gradient: 'from-red-400 to-orange-500',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_225224_of6ika.png',
      github: 'https://github.com/yourusername/colour-guess',
      youtube: 'https://youtube.com/your-demo',
      demo: 'https://colour-guess-demo.netlify.app'
    },
    {
      title: 'Count Number',
      description: 'An interactive number counting application with animated transitions.',
      tags: ['React', 'Animation', 'UI', 'Counter'],
      gradient: 'from-green-400 to-emerald-500',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_224902_bijrn1.png',
      github: 'https://github.com/yourusername/count-number',
      youtube: 'https://youtube.com/your-demo',
      demo: 'https://count-number-demo.netlify.app'
    },
    {
      title: 'News Dashboard',
      description: 'A news dashboard displaying latest headlines from various sources.',
      tags: ['React', 'API', 'Dashboard', 'News'],
      gradient: 'from-cyan-400 to-blue-500',
      image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398570/Screenshot_2026-02-06_224921_bkc44o.png',
      github: 'https://github.com/yourusername/news-dashboard',
      youtube: 'https://youtube.com/your-demo',
      demo: 'https://news-dashboard-demo.netlify.app'
    },
  ];

  const skills = ['HTML', 'CSS', 'Git & Github', 'C/C++', 'JavaScript', 'Figma', 'React', 'Node.js', 'Java' ];

  const loadMoreCertificates = () => {
    setVisibleCertificates(prev => Math.min(prev + 6, certificates.length));
  };

  const loadMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 6, projects.length));
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden relative">
      {/* Subtle cursor glow - Hidden on mobile */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-50 opacity-20 blur-3xl transition-all duration-300 hidden md:block"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Navigation */}
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
                  onClick={() => scrollToSection(item.id)}
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
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-lg border border-slate-700 hover:border-indigo-400 transition-all duration-300"
            >
              {mobileMenuOpen ? (
                <X size={20} className="text-indigo-400" />
              ) : (
                <Menu size={20} className="text-slate-300" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 overflow-hidden ${
              mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-slate-300 hover:text-indigo-400 transition-colors duration-300 border-b border-slate-800 hover:border-indigo-500/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 relative" id="hero">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
          {/* Left Content */}
          <div 
            className={`space-y-6 sm:space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <div className="space-y-2">
              {/* <p className="text-indigo-400 font-light tracking-widest text-xs sm:text-sm uppercase animate-fade-in">
                Software Developer
              </p> */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extralight leading-tight">
                Hello, I'm
              </h1>
              <h2 className="text-[28px] xs:text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] xl:text-[72px] font-black tracking-tight">
                <span className="inline-block animate-slide-up bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-300% animate-shimmer">
            Anisha Chhajer
                </span>
              </h2>
            </div>
            
            <p className="text-slate-300 font-light leading-relaxed text-base sm:text-lg max-w-lg animate-fade-in-delay">
              Crafting elegant, responsive web experiences with precision and care. 
              Building interfaces that feel natural and perform beautifully.
            </p>

             {/* Action Buttons - Updated with icon styling */}
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-delay-2">
              <button 
                onClick={() => scrollToSection('contact')}
                className="group relative flex items-center gap-3 px-6 sm:px-8 py-4 overflow-hidden rounded-full border border-indigo-400/50 hover:border-indigo-400 transition-all duration-500 hover:scale-105"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500" />
                
                {/* Icon container */}
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={20} className="text-white" />
                </div>
                
                {/* Text */}
                <span className="relative flex items-center gap-2 font-medium text-lg">
                  Get in Touch
                  <span className="opacity-70 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </button>
              
              <button 
                onClick={() => scrollToSection('projects')}
                className="group relative flex items-center gap-3 px-6 sm:px-8 py-4 rounded-full border border-slate-600 hover:border-slate-400 transition-all duration-300 hover:scale-105"
              >
                {/* Icon container */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 group-hover:border-slate-500 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <ExternalLink size={20} className="text-slate-300 group-hover:text-white" />
                </div>
                
                {/* Text */}
                <span className="flex items-center gap-2 font-medium text-lg">
                  View My Work
                  <span className="opacity-70 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </button>
              
              <button className="group relative flex items-center gap-3 px-6 py-4 w-full sm:w-auto justify-center sm:justify-start">
                {/* Icon container with animated border */}
                <div className="relative">
                  <div className="absolute -inset-2 border-2 border-indigo-400/30 rounded-full animate-ping-slow opacity-0 group-hover:opacity-100" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-amber-500/20">
                    <Download size={20} className="text-white" />
                  </div>
                </div>
                
                {/* Text with gradient underline */}
                <div className="relative">
                  <span className="text-lg font-semibold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:to-orange-300 transition-all duration-300">
                    Resume
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 group-hover:w-full transition-all duration-500" />
                </div>
              </button>
            </div>

            {/* Social Links - Updated styling */}
            <div className="flex gap-6 pt-8 justify-center sm:justify-start">
              {[
                { 
                  Icon: Github, 
                  url: 'https://github.com/Anisha-Chhajer-Jain', 
                  label: 'GitHub',
                  gradient: 'from-slate-800 to-gray-900',
                  textColor: 'text-slate-300'
                },
                { 
                  Icon: Linkedin, 
                  url: 'https://linkedin.com/in/yourusername', 
                  label: 'LinkedIn',
                  gradient: 'from-blue-700 to-blue-800',
                  textColor: 'text-blue-300'
                },
                { 
                  Icon: Twitter, 
                  url: 'https://twitter.com/yourusername', 
                  label: 'Twitter',
                  gradient: 'from-sky-600 to-cyan-600',
                  textColor: 'text-sky-300'
               
                }
              ].map(({ Icon, url, label, gradient, textColor }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
                >
                  {/* Icon container */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} border border-slate-700 group-hover:border-white/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 shadow-lg group-hover:shadow-xl`}>
                    <Icon size={20} className={`${textColor} group-hover:text-white transition-colors`} />
                  </div>
                  
                  {/* Label on hover */}
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
              {/* Outer glow */}
              <div className="absolute -inset-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full opacity-20 group-hover:opacity-40 blur-3xl transition-opacity duration-500 animate-pulse-slow" />
              
              {/* Image container */}
              <div className="relative w-80 h-80 sm:w-90 sm:h-90 md:w-100 md:h-100 mx-auto rounded-full overflow-hidden border-4 border-indigo-500/30 group-hover:border-indigo-400 transition-all duration-500 group-hover:scale-105 shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/dq7hb3fah/image/upload/v1770271187/Screenshot_2026-02-03_162035_auymxx.png" // Replace with your actual image URL
                  alt="Anisha Chhajer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=Anisha+Chhajer&background=1e293b&color=818cf8&bold=true&size=512`;
                  }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Animated ring */}
                <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-indigo-400/50 group-hover:animate-spin-slow transition-all duration-500" style={{ animationDuration: '10s' }} />
              </div>
              
              {/* Floating dots */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-indigo-400 animate-bounce-slow shadow-lg" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-purple-400 animate-bounce-slow shadow-lg" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-1/2 -left-4 w-5 h-5 rounded-full bg-pink-400 animate-bounce-slow shadow-lg" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-1/2 -right-4 w-4 h-4 rounded-full bg-cyan-400 animate-bounce-slow shadow-lg" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>

    


      {/* About Section */}
      <div className="py-12 px-4 sm:px-6 relative" id="about">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extralight text-center mb-12 sm:mb-16 tracking-wide">
            About <span className="font-light text-indigo-400">Me</span>
          </h2>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-3xl p-6 sm:p-12 border border-slate-800/50 hover:border-indigo-500/30 transition-all duration-500">
              <p className="text-slate-300 font-light leading-relaxed text-base sm:text-lg mb-6">
                I'm <span className="text-indigo-400">Anisha Chhajer</span>, a developer skilled in HTML, CSS, Git & Github, C/C++, 
                JavaScript, Figma, React, Node.js, and Java. I focus on building experiences that feel intuitive and polished, 
                crafting responsive interfaces that adapt seamlessly across devices, while paying close attention to layout, interaction, and performance.
              </p>

              <p className="text-slate-300 font-light leading-relaxed text-base sm:text-lg">
                I care deeply about clean code, clarity, and structure — turning ideas into fast, meaningful digital 
                experiences. On the backend, I like writing reliable and 
                efficient logic that supports scalable and maintainable applications. I care deeply about clean code,
                clarity, and structure — turning ideas into fast, meaningful digital experiences where thoughtful engineering 
                meets simple, elegant design.
              </p>
            </div>
          </div>
        </div>
      </div>

           {/* Skills Section */}
      <div className="py-12 px-4 sm:px-6" id="skills">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-6 tracking-wide">
              My <span className="font-light bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-slate-400 font-light text-base sm:text-lg max-w-2xl mx-auto">
              Technologies and methodologies I work with to build exceptional digital experiences
            </p>
          </div>

          {/* Skills Cards Grid - 3 columns */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
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
                skills: ['C/C++', 'Java', 'Algorithms'],
                gradient: 'from-cyan-600 to-blue-600',
                iconColor: 'text-cyan-400',
                hoverIconColor: 'text-cyan-300',
                iconBg: 'from-cyan-900/30 to-blue-900/20'
              },
              { 
                icon: TrendingUp, 
                title: 'Always Learning',
                description: 'Continuously growing with every line of code.',
                skills: ['Git', 'Figma', 'Node.js'],
                gradient: 'from-emerald-600 to-teal-600',
                iconColor: 'text-emerald-400',
                hoverIconColor: 'text-emerald-300',
                iconBg: 'from-emerald-900/30 to-teal-900/20'
              }
            ].map((card, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'both'
                }}
              >
                {/* Animated background glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${card.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-700`} />
                
                {/* Floating animation */}
                <div className="animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                  {/* Card */}
                  <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-3xl border border-slate-800/50 hover:border-slate-700/70 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2 h-full overflow-hidden">
                    {/* Decorative corner accents */}
                    <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-slate-600/30 group-hover:border-indigo-400/50 transition-all duration-500" />
                    <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-slate-600/30 group-hover:border-indigo-400/50 transition-all duration-500" />
                    
                    {/* Icon header with gradient */}
                    <div className="relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${card.iconBg} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />
                      <div className="relative p-6 sm:p-8">
                        <div className="flex items-center gap-4">
                          {/* Animated icon container */}
                          <div className="relative">
                            {/* Pulsing ring effect */}
                            <div className={`absolute -inset-3 border-2 ${card.iconColor.split('-')[1]}-400 rounded-full opacity-0 group-hover:opacity-30 animate-ping-slow`} />
                            
                            {/* Icon with gradient background */}
                            <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                              <card.icon size={28} className={`${card.iconColor} ${card.hoverIconColor} transition-colors duration-300`} />
                            </div>
                          </div>
                          
                          {/* Title with gradient text */}
                          <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent group-hover:from-white group-hover:to-slate-300 transition-all duration-500">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 pt-0">
                      {/* Description */}
                      <p className="text-slate-300 font-light leading-relaxed text-base sm:text-lg mb-6 group-hover:text-slate-200 transition-colors duration-300">
                        {card.description}
                      </p>
                      
                      {/* Skills badges with staggered animation */}
                      <div className="flex flex-wrap gap-3">
                        {card.skills.map((skill, i) => (
                          <span
                            key={skill}
                            className={`group/badge relative px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-${card.iconColor.split('-')[1]}-400/50 hover:bg-slate-800 transition-all duration-300 animate-fade-in-scale overflow-hidden`}
                            style={{ 
                              animationDelay: `${i * 0.1 + 0.5}s`,
                              animationFillMode: 'both'
                            }}
                          >
                            {/* Badge background effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover/badge:opacity-20 transition-opacity duration-300`} />
                            
                            {/* Skill text */}
                            <span className="relative text-sm font-medium text-slate-300 group-hover/badge:text-white transition-colors duration-300">
                              {skill}
                            </span>
                            
                            {/* Hover indicator dot */}
                            <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${card.gradient} group-hover/badge:w-6 transition-all duration-300 rounded-full`} />
                          </span>
                        ))}
                      </div>
                      
                      {/* Bottom decorative border */}
                      <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${card.gradient} group-hover:w-full transition-all duration-700 rounded-full`} />
                    </div>
                    
                    {/* Floating particles on hover */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`absolute w-1 h-1 bg-gradient-to-r ${card.gradient} rounded-full animate-particle`}
                          style={{
                            top: `${20 + i * 15}%`,
                            left: `${10 + i * 20}%`,
                            animationDelay: `${i * 0.2}s`,
                            animationDuration: `${1.5 + Math.random() * 1}s`
                          }}
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

      {/* Projects Section */}
      <div className="py-12 sm:py-22 px-4 sm:px-6 relative" id="projects">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-6 tracking-wide">
              My <span className="font-light bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-slate-400 font-light text-base sm:text-lg">
              Showcasing my web development journey through UI clones and designs
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.slice(0, visibleProjects).map((project, index) => (
              <div
                key={project.title}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
                
                {/* Card */}
                <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-3xl border border-slate-800/50 overflow-hidden group-hover:border-slate-700 transition-all duration-500 group-hover:scale-[1.02]">
                  {/* Project Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/400x300/1e293b/64748b?text=${encodeURIComponent(project.title)}`;
                      }}
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500`} />
                    
                    {/* Project title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 to-transparent">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-4 sm:p-6">
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, i) => (
                        <span
                          key={tag}
                          className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-slate-700/50 group-hover:border-slate-600 transition-all duration-300`}
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-slate-400 font-light leading-relaxed mb-4 text-sm sm:text-base line-clamp-3">
                      {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex-1 flex items-center justify-center gap-1.5 px-2 sm:px-3 py-2 bg-slate-800/50 hover:bg-slate-800 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-105 min-w-[80px]"
                      >
                        <Github size={14} className="sm:w-4 sm:h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                        <span className="text-xs font-light">GitHub</span>
                      </a>
                      <a 
                        href={project.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex-1 flex items-center justify-center gap-1.5 px-2 sm:px-3 py-2 bg-red-600/20 hover:bg-red-600/30 rounded-lg border border-red-500/50 hover:border-red-400 transition-all duration-300 hover:scale-105 min-w-[80px]"
                      >
                        <Youtube size={14} className="sm:w-4 sm:h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                        <span className="text-xs font-light">YouTube</span>
                      </a>
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex-1 flex items-center justify-center gap-1.5 px-2 sm:px-3 py-2 bg-indigo-600/20 hover:bg-indigo-600/30 rounded-lg border border-indigo-500/50 hover:border-indigo-400 transition-all duration-300 hover:scale-105 min-w-[80px]"
                      >
                        <ExternalLink size={14} className="sm:w-4 sm:h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                        <span className="text-xs font-light">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Projects Button */}
          {visibleProjects < projects.length && (
            <div className="flex justify-center mt-8 sm:mt-12">
              <button
                onClick={loadMoreProjects}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 overflow-hidden rounded-xl border border-indigo-400/50 hover:border-indigo-400 transition-all duration-500 hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative flex items-center gap-2 font-light text-base sm:text-lg">
                  Load More Projects
                  <span className="text-sm opacity-70">({projects.length - visibleProjects} more)</span>
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="py-12 sm:py-22 px-4 sm:px-6 relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 animate-pulse-slow" />
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              animation: 'grid-float 20s linear infinite'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-6 tracking-wide">
              Technologies I <span className="font-light bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Work With</span>
            </h2>
            <p className="text-slate-400 font-light text-base sm:text-lg">
              Building powerful solutions with modern tools and frameworks
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${tech.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
                
                {/* Card */}
                <div className={`relative bg-slate-900/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border ${tech.borderColor} ${tech.hoverBorder} transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-indigo-500/20`}>
                  {/* Icon with animation */}
                  <div className="mb-3 sm:mb-4 flex items-center justify-center">
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 group-hover:scale-125 transition-transform duration-500 animate-tech-float object-contain ${tech.isWhite ? 'brightness-0 invert' : ''}`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    />
                  </div>
                  
                  {/* Tech name */}
                  <h3 className="text-sm sm:text-lg md:text-xl font-light text-center group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </h3>
                  
                  {/* Animated border bottom */}
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${tech.color} group-hover:w-full transition-all duration-500 rounded-full`} />
                </div>

                {/* Particle effect on hover */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-particle"
                      style={{
                        top: '50%',
                        left: '50%',
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Decorative floating elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-2xl animate-float-slow" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-500/10 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Certificates Section */}
      <div className="py-12 sm:py-22 px-4 sm:px-6 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12 sm:mb-20">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
              <span className="text-3xl sm:text-5xl animate-bounce-slow">🎓</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-wide">
                <span className="font-light bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Certificates</span>
              </h2>
              <span className="text-3xl sm:text-5xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}>🏆</span>
            </div>
            <p className="text-slate-400 font-light text-base sm:text-lg">
              Professional certifications and achievements
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {certificates.slice(0, visibleCertificates).map((cert, index) => (
              <div
                key={cert.id}
                className="group relative animate-fade-in-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${cert.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`} />
                
                {/* Certificate Card */}
                <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-800/50 overflow-hidden group-hover:border-slate-700 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2">
                  {/* Certificate Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${cert.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                    
                    {/* Organization Badge */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-slate-900/80 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-slate-700/50">
                      <span className="text-xs font-light text-slate-200">{cert.date}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <div className="flex items-start gap-2 sm:gap-3 mb-3">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                        <Award size={20} className="sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-light mb-1 group-hover:text-cyan-400 transition-colors duration-300 leading-tight line-clamp-2">
                          {cert.title}
                        </h3>
                        <p className={`text-xs sm:text-sm bg-gradient-to-r ${cert.color} bg-clip-text text-transparent font-medium truncate`}>
                          {cert.org}
                        </p>
                      </div>
                    </div>
                    
                    {/* View Certificate Button with Enhanced Hover Effect */}
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/btn relative w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${cert.color} bg-opacity-10 rounded-xl border border-slate-700/50 transition-all duration-300 overflow-hidden`}
                    >
                      {/* Animated gradient background on hover */}
                      <span className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300`} />
                      
                      {/* Shimmer effect on hover */}
                      <span className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover/btn:opacity-30 blur-xl transition-all duration-500 group-hover/btn:animate-shimmer`} />
                      
                      {/* Icon and text */}
                      <ExternalLink size={16} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300 group-hover/btn:text-white" />
                      <span className="relative z-10 text-sm font-bold group-hover/btn:text-white transition-colors duration-300">
                        View Certificate
                      </span>
                      
                      {/* Border glow on hover */}
                      <span className={`absolute inset-0 rounded-xl border-2 border-transparent group-hover/btn:border-opacity-50 transition-all duration-300`} 
                        style={{
                          borderImage: `linear-gradient(to right, var(--tw-gradient-stops)) 1`,
                        }}
                      />
                    </a>
                  </div>

                  {/* Decorative corner accents */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-slate-600/30 group-hover:border-slate-500/50 transition-colors duration-300" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-slate-600/30 group-hover:border-slate-500/50 transition-colors duration-300" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-slate-600/30 group-hover:border-slate-500/50 transition-colors duration-300" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-slate-600/30 group-hover:border-slate-500/50 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCertificates < certificates.length && (
            <div className="flex justify-center mt-8 sm:mt-12">
              <button
                onClick={loadMoreCertificates}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 overflow-hidden rounded-xl border border-indigo-400/50 hover:border-indigo-400 transition-all duration-500 hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative flex items-center gap-2 font-light text-base sm:text-lg">
                  Load More Certificates
                  <span className="text-sm opacity-70">({certificates.length - visibleCertificates} more)</span>
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Education Section - Removed timeline dot */}
      <div className="py-12 sm:py-22 px-4 sm:px-6 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12 sm:mb-20">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
              <span className="text-3xl sm:text-5xl">📚</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-wide">
                My <span className="font-light bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Education</span>
              </h2>
            </div>
            <p className="text-slate-400 font-light text-base sm:text-lg">
              Academic journey and learning path
            </p>
          </div>

          {/* Education Cards - Responsive Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${edu.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500`} />
                
                {/* Card */}
                <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-3xl border border-slate-800/50 overflow-hidden group-hover:border-blue-500/30 transition-all duration-500 group-hover:scale-[1.02] h-full">
                  <div className="p-6 sm:p-8">
                    {/* Header with Icon and Title */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0`}>
                        {edu.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-light group-hover:text-cyan-400 transition-colors duration-300">
                            {edu.title}
                          </h3>
                          <span className="text-sm font-medium text-cyan-300 bg-slate-800/50 px-3 py-1 rounded-full">
                            {edu.period}
                          </span>
                        </div>
                        <p className={`text-sm sm:text-base bg-gradient-to-r ${edu.color} bg-clip-text text-transparent font-medium`}>
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-slate-300 font-light leading-relaxed text-sm sm:text-base mb-6">
                      {edu.description}
                    </p>

                    {/* Decorative element */}
                    <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${edu.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative floating elements */}
          <div className="absolute top-20 right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-float-slow hidden sm:block" />
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-float-slow hidden sm:block" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-12 px-4 sm:px-6 relative overflow-hidden" id="contact">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-6 tracking-wide animate-fade-in">
              Get In <span className="font-light bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-slate-300 font-light text-base sm:text-lg animate-fade-in-delay">
              Have a project in mind or just want to chat? I'd love to hear from you!
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Left Side - Contact Form */}
            <div className="group relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500" />
              <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-3xl border border-indigo-500/30 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-light mb-6 text-cyan-400">Send a Message</h3>
                
                <form className="space-y-4">
                  {/* Name and Email Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 hover:border-indigo-400 text-sm sm:text-base"
                    />
                    <input
                      type="email"
                      placeholder="your.email@gmail.com"
                      className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 hover:border-indigo-400 text-sm sm:text-base"
                    />
                  </div>

                  {/* Subject */}
                  <input
                    type="text"
                    placeholder="What about this?"
                    className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 hover:border-indigo-400 text-sm sm:text-base"
                  />

                  {/* Message */}
                  <textarea
                    rows="6"
                    placeholder="Tell me about your message"
                    className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 hover:border-indigo-400 resize-none text-sm sm:text-base"
                  ></textarea>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group/btn w-full px-6 py-3 bg-slate-950 hover:bg-slate-900 border border-slate-700 hover:border-cyan-400 rounded-xl font-light transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-400/20 flex items-center justify-center gap-2"
                  >
                    <Mail size={20} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div className="space-y-6">
              {/* Let's Connect Card */}
              <div className="group relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/30 to-cyan-600/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500" />
                <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-3xl border border-indigo-500/30 p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-light mb-6 text-cyan-400">Let's Connect</h3>
                  
                  {/* Location */}
                  <div className="flex items-center gap-3 mb-4 text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-lg bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-cyan-400" />
                    </div>
                    <span className="font-light text-sm sm:text-base">Ahmedabad, Gujarat</span>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3 mb-6 text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-lg bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-cyan-400" />
                    </div>
                    <span className="font-light text-sm sm:text-base break-all">anishachhajer16@gmail.com</span>
                  </div>

                  {/* Social Links */}
                  <div className="grid grid-cols-2 gap-3">
                    <a 
                      href="https://github.com/Anisha-Chhajer-Jain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/social flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-indigo-900/30 hover:bg-indigo-800/40 border border-indigo-500/30 hover:border-cyan-400 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
                    >
                      <Github size={18} className="sm:w-5 sm:h-5 group-hover/social:rotate-12 transition-transform duration-300" />
                      <span className="font-light text-sm sm:text-base">GitHub</span>
                    </a>
                    <a 
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/social flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-indigo-900/30 hover:bg-indigo-800/40 border border-indigo-500/30 hover:border-cyan-400 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
                    >
                      <Linkedin size={18} className="sm:w-5 sm:h-5 group-hover/social:rotate-12 transition-transform duration-300" />
                      <span className="font-light text-sm sm:text-base">LinkedIn</span>
                    </a>
                    <a 
                      href="https://twitter.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/social flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-indigo-900/30 hover:bg-indigo-800/40 border border-indigo-500/30 hover:border-cyan-400 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
                    >
                      <Twitter size={18} className="sm:w-5 sm:h-5 group-hover/social:rotate-12 transition-transform duration-300" />
                      <span className="font-light text-sm sm:text-base">Twitter</span>
                    </a>
                    <a 
                      href="mailto:anishachhajer16@gmail.com"
                      className="group/social flex items-center justify-center gap-2 px-3 sm:px-4 py-3 bg-indigo-900/30 hover:bg-indigo-800/40 border border-indigo-500/30 hover:border-cyan-400 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
                    >
                      <Mail size={18} className="sm:w-5 sm:h-5 group-hover/social:rotate-12 transition-transform duration-300" />
                      <span className="font-light text-sm sm:text-base">Email</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Available For Card */}
              <div className="group relative animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500" />
                <div className="relative bg-slate-900/60 backdrop-blur-sm rounded-3xl border border-indigo-500/30 p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-light mb-6 text-cyan-400">Available for:-</h3>
                  
                  <ul className="space-y-3">
                    {[
                      'Full-stack web development',
                      'React & Node.js projects',
                      'UI/UX design consultation',
                      'Code reviews & mentoring'
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-slate-300 hover:text-cyan-400 transition-all duration-300 group/item"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <span className="text-cyan-400 mt-1 group-hover/item:scale-125 transition-transform duration-300">•</span>
                        <span className="font-light text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/30 rounded-full animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 15}s`
            }}
          />
        ))}
      </div>


            {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 relative overflow-hidden">
        {/* Background effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 via-transparent to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main Content - Centered */}
          <div className="text-center">
            
            {/* Social Media Section */}
            <div className="mb-10">
              <div className="mb-6">
                <p className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                  Or Connect On Social Media
                </p>
                <p className="text-sm text-slate-400 font-light">
                  Follow me for updates and insights
                </p>
              </div>
              
              {/* Social Icons - Centered */}
              <div className="flex justify-center gap-6 mb-10">
                {[
                  { 
                    Icon: Github, 
                    url: 'https://github.com/Anisha-Chhajer-Jain', 
                    label: 'GitHub',
                    gradient: 'from-slate-800 to-gray-900',
                    color: 'text-slate-400'
                  },
                  { 
                    Icon: Linkedin, 
                    url: 'https://linkedin.com/in/yourusername', 
                    label: 'LinkedIn',
                    gradient: 'from-blue-700 to-blue-800',
                    color: 'text-blue-400'
                  },
                  { 
                    Icon: Twitter, 
                    url: 'https://twitter.com/yourusername', 
                    label: 'Twitter',
                    gradient: 'from-sky-600 to-cyan-600',
                    color: 'text-cyan-400'
                  },
                  { 
                    Icon: Youtube, 
                    url: 'https://youtube.com/yourchannel', 
                    label: 'YouTube',
                    gradient: 'from-red-600 to-red-700',
                    color: 'text-red-400'
                  }
                ].map(({ Icon, url, label, gradient, color }, index) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label={label}
                  >
                    {/* Glow effect on hover */}
                    <div className={`absolute -inset-2 bg-gradient-to-r ${gradient} rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`} />
                    
                    {/* Icon container */}
                    <div className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${gradient} border border-slate-700/50 group-hover:border-white/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 shadow-lg group-hover:shadow-xl`}>
                      <Icon size={24} className="text-white group-hover:scale-110 transition-transform duration-300" />
                      
                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-slate-900/90 backdrop-blur-sm rounded-lg border border-slate-700/50 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none whitespace-nowrap">
                        <span className="text-xs font-medium text-white">{label}</span>
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 border-b border-r border-slate-700/50 rotate-45" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Copyright - Centered below social icons */}
              <div className="group relative">
                <div className="inline-block">
                  <p className="text-xl font-bold text-slate-300 group-hover:text-white transition-colors duration-300">
                    © 2025 Anisha Chhajer
                  </p>
                  <p className="text-base font-medium bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mt-2">
                    All rights reserved
                  </p>
                  
                  {/* Animated underline */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-400 group-hover:w-40 transition-all duration-500" />
                </div>
              </div>
            </div>
            
          </div>
         
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes projectFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes certFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(3deg);
          }
        }

        @keyframes eduFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-5px) scale(1.05);
          }
        }

        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
          }
        }

        @keyframes techFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        @keyframes particle {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx, 50px), var(--ty, -50px));
            opacity: 0;
          }
        }

        @keyframes gridFloat {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(60px);
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(30px, -30px); opacity: 0.6; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes type {
          from { width: 0; }
          to { width: 100%; }
        }
        
        .bg-300% { background-size: 300%; }
        .animate-shimmer { animation: shimmer 8s linear infinite; }
        .animate-float-slow { animation: float-slow linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-delay { animation: fade-in 1s ease-out 0.3s backwards; }
        .animate-fade-in-delay-2 { animation: fade-in 1s ease-out 0.6s backwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out backwards; }
        .animate-fade-in-scale { animation: fadeInScale 0.6s ease-out backwards; }
        .animate-project-float { animation: projectFloat 3s ease-in-out infinite; }
        .animate-cert-float { animation: certFloat 2.5s ease-in-out infinite; }
        .animate-edu-float { animation: eduFloat 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounceSlow 2s ease-in-out infinite; }
        .animate-fade-in-slide { animation: fadeInSlide 0.8s ease-out backwards; }
        .animate-pulse-glow { animation: pulseGlow 2s ease-in-out infinite; }
        .animate-tech-float { animation: techFloat 3s ease-in-out infinite; }
        .animate-particle { animation: particle 1s ease-out forwards; }
        .animate-spin-slow { animation: spin-slow linear infinite; }
        
        .animate-type-1 { animation: type 1.5s steps(30) 0.5s backwards; }
        .animate-type-2 { animation: type 1.5s steps(30) 1s backwards; }
        .animate-type-3 { animation: type 2s steps(40) 1.5s backwards; }
        .animate-type-4 { animation: type 1.5s steps(25) 2.2s backwards; }
        .animate-type-5 { animation: type 1.5s steps(35) 2.8s backwards; }
        .animate-type-6 { animation: type 0.5s steps(10) 3.5s backwards; }
        
        .delay-75 { animation-delay: 75ms; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }

        .animate-particle:nth-child(1) {
          --tx: 40px;
          --ty: -60px;
        }
        .animate-particle:nth-child(2) {
          --tx: -50px;
          --ty: -40px;
        }
        .animate-particle:nth-child(3) {
          --tx: 30px;
          --ty: 50px;
        }
      `}</style>
    </div>
  );
}
