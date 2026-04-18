import React, { useState, useEffect } from 'react';
import { Github, Youtube, ExternalLink, ChevronRight, Code, Eye, Sparkles, Trophy, Figma, X, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Design Detail Popup Component ──────────────────────────────────────────
function DesignPopup({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] overflow-y-auto bg-black/95 backdrop-blur-xl py-6 px-4 sm:py-12"
      onClick={onClose}
    >
      <div className="flex min-h-full items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 30, opacity: 0 }}
          className="relative w-full max-w-5xl bg-[var(--bg-secondary)] rounded-2xl sm:rounded-3xl overflow-hidden border border-[var(--border-primary)] shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 p-2.5 rounded-full bg-black/50 hover:bg-[var(--accent-primary)] text-white transition-all shadow-lg backdrop-blur-sm"
          >
            <X size={18} className="sm:w-5 sm:h-5" />
          </button>

          <div className="grid lg:grid-cols-5 h-full max-h-none lg:max-h-[85vh] overflow-y-auto lg:overflow-hidden">
            {/* Left: Image Showcase */}
            <div className="lg:col-span-3 bg-[#0a0a0f] flex items-center justify-center relative min-h-[250px] sm:min-h-[400px] lg:min-h-0 p-4 sm:p-8">
              <motion.img
                src={project.image}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-contain drop-shadow-2xl"
                alt={project.title}
              />
            </div>

            {/* Right: Content Section */}
            <div className="lg:col-span-2 p-5 sm:p-8 md:p-10 flex flex-col bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] overflow-y-auto">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-accent)] border border-[var(--border-primary)] mb-4">
                  <Figma size={13} className="text-[#F24E1E]" />
                  <span className="text-[10px] sm:text-xs font-mono text-[var(--text-secondary)] tracking-wider uppercase">UI/UX Case Study</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3 leading-tight">{project.title}</h2>
                <div className="w-12 h-1 bg-[var(--accent-primary)] rounded-full mb-6" />
                <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-6 italic border-l-2 border-[var(--border-primary)] pl-4">
                  {project.designProcess}
                </p>
              </div>

              <div className="space-y-6 flex-1">
                <div>
                  <h3 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-widest mb-3 flex items-center gap-2 opacity-80">
                    <span className="w-4 h-px bg-[var(--accent-primary)]" />
                    Product Concept
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Enhanced Project Card Component with hover effects and detailed view
function ProjectCard({ project, index, onOpenDesign }) {
  const [isHovered, setIsHovered] = useState(false);
  const isUIUX = project.category.toLowerCase().includes('ui/ux');

  return (
    <div
      className="group relative animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect on hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700 group-hover:duration-300`} />

      <div className="relative bg-[var(--bg-secondary)] backdrop-blur-sm rounded-2xl border border-[var(--border-primary)] overflow-hidden group-hover:border-[var(--accent-primary)] transition-all duration-500 hover:-translate-y-2 shadow-lg">
        {/* Image Container with Overlay */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/400x250/1a1a2e/6366f1?text=${encodeURIComponent(project.title)}`;
            }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

          {/* Category tag */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white backdrop-blur-sm border border-white/20 shadow-md`}>
              {project.tags[0]}
            </span>
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-xl font-semibold text-white tracking-tight drop-shadow-md">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(1, 4).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono text-[var(--text-secondary)] bg-[var(--bg-accent)] rounded-full border border-[var(--border-primary)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5 line-clamp-2">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className={`flex items-center gap-2 pt-4 border-t border-[var(--border-primary)] ${isUIUX ? 'justify-center' : 'flex-wrap sm:flex-nowrap'}`}>
            {isUIUX ? (
              <div className="flex items-center gap-2 w-full">
                <button
                  onClick={() => onOpenDesign(project)}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[var(--bg-accent)] hover:bg-[var(--accent-primary)] hover:text-white rounded-xl border border-[var(--border-primary)] transition-all duration-300 transform active:scale-95 shadow-sm"
                >
                  <ImageIcon size={16} />
                  <span className="text-xs sm:text-sm font-bold">Case Study</span>
                </button>
                {project.figma && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[var(--bg-accent)] text-[var(--text-secondary)] hover:text-[#F24E1E] hover:bg-[#F24E1E]/10 transition-all border border-[var(--border-primary)]"
                    title="View Figma Design"
                  >
                    <Figma size={18} />
                  </a>
                )}
              </div>
            ) : (
              <>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-300"
                >
                  <Github size={15} className="group-hover/btn:rotate-12 transition-transform" />
                  <span className="text-xs font-medium">Code</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-300"
                >
                  <ExternalLink size={15} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  <span className="text-xs font-medium">Live</span>
                </a>
                {project.youtube && (
                  <a
                    href={project.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-300 ml-auto"
                  >
                    <Youtube size={15} />
                    <span className="text-xs font-medium">Watch</span>
                  </a>
                )}
                {project.figma && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn flex items-center gap-2 text-[var(--text-secondary)] hover:text-[#F24E1E] transition-colors duration-300 ${!project.youtube ? 'ml-auto' : ''}`}
                  >
                    <Figma size={16} />
                    <span className="text-sm font-medium">Design</span>
                  </a>
                )}
              </>
            )}
          </div>
        </div>

        {/* Animated border on hover */}
        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${project.gradient} transition-all duration-500 ease-out ${isHovered ? 'w-full' : 'w-0'}`} />
      </div>
    </div>
  );
}

// Category Filter Component
function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeCategory === category
            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
            : 'bg-[var(--bg-accent)] text-[var(--text-secondary)] hover:bg-[var(--accent-primary)] hover:text-white border border-[var(--border-primary)]'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

// ─── Projects Data ────────────────────────────────────────────────────────────
const projectsData = [
  {
    title: 'Kisan Dost',
    description: 'An AI-powered platform built to empower farmers with real-time crop advisory, weather insights, mandi price data, and government scheme updates — bridging the digital divide in Indian agriculture.',
    tags: ['React', 'Node.js', 'AI', 'Agriculture', 'Full Stack'],
    gradient: 'from-teal-400 to-cyan-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1774844685/Screenshot_2026-03-30_095424_vy4lnf.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/kisan-dost',
    youtube: 'https://www.youtube.com/@AnishaChhajerJain',
    demo: 'https://kisan-dost.netlify.app/',
    category: 'Apps',
  },
  {
    title: 'Flipkart Clone',
    description: 'A fully responsive Flipkart-inspired e-commerce UI clone with product listings, cart functionality, and modern design.',
    tags: ['E-Commerce', 'HTML', 'CSS', 'JS', 'Responsive'],
    gradient: 'from-orange-500 to-yellow-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284088/Screenshot_2026-02-05_150323_jsohtj.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/FLIPKART-CLONE',
    youtube: 'https://youtu.be/AvD3hqPTmMU?si=Q5hmb3LLucv2W9Ov',
    demo: 'https://dancing-malasada-228dd4.netlify.app/',
    category: 'UI Clones',
  },
  {
    title: 'Rare Planet',
    description: 'A Rare Planet–inspired website UI clone with smooth animations, modern layout, and interactive elements.',
    tags: ['UI Clones', 'HTML', 'CSS', 'JS', 'Animations'],
    gradient: 'from-teal-400 to-cyan-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284092/Screenshot_2026-02-05_150245_uyufp5.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/RARE-PLANET-CLONE',
    youtube: 'https://youtu.be/dUFXE5soklM?si=gS0vfkdP9M7G-tQE',
    demo: 'https://108565-rare-planet-clone.netlify.app/',
    category: 'UI Clones',
  },
  {
    title: 'Shure Music',
    description: 'A Shure-inspired responsive website UI clone for audio products with sleek design and smooth transitions.',
    tags: ['UI Clones', 'HTML', 'CSS', 'JS', 'Audio'],
    gradient: 'from-lime-400 to-green-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284092/Screenshot_2026-02-05_150307_kmxwgd.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/SHURE-CLONE',
    youtube: 'https://youtu.be/28-tTsRMRZU?si=TWc3XUNpZSgyNjDH',
    demo: 'https://shureclone-108565-anisha.netlify.app/',
    category: 'UI Clones',
  },
  {
    title: 'Weather App',
    description: 'A real-time weather application with location detection and beautiful UI showing weather conditions.',
    tags: ['Apps', 'React', 'API', 'Tailwind'],
    gradient: 'from-blue-400 to-cyan-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_225116_isrr1w.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/weather-api',
    youtube: 'https://www.youtube.com/@AnishaChhajerJain',
    demo: 'https://weather-app-demo.netlify.app',
    category: 'Apps',
  },
  {
    title: 'Tic Tac Toe',
    description: 'A classic Tic Tac Toe game with interactive UI and game logic.',
    tags: ['Games', 'JavaScript', 'HTML', 'CSS'],
    gradient: 'from-purple-400 to-pink-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_224714_snxpsz.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/tic-tac-toe',
    youtube: 'https://www.youtube.com/@AnishaChhajerJain',
    demo: 'https://tic-tac-toe-demo.netlify.app',
    category: 'Games',
  },
  {
    title: 'Colour Guess',
    description: 'A color guessing game to test RGB color knowledge with score tracking.',
    tags: ['Games', 'JavaScript', 'Interactive'],
    gradient: 'from-red-400 to-orange-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_225224_of6ika.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/color-guess',
    youtube: 'https://www.youtube.com/@AnishaChhajerJain',
    demo: 'https://colour-guess-demo.netlify.app',
    category: 'Games',
  },
  {
    title: 'News Dashboard',
    description: 'A news dashboard displaying latest headlines from various sources.',
    tags: ['Apps', 'React', 'API', 'Dashboard'],
    gradient: 'from-cyan-400 to-blue-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398570/Screenshot_2026-02-06_224921_bkc44o.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/news-fetch',
    youtube: 'https://www.youtube.com/@AnishaChhajerJain',
    demo: 'https://news-dashboard-demo.netlify.app',
    category: 'Apps',
  },
  {
    title: 'Bullet Proof',
    description: 'A Bulletproof-inspired security services website with responsive design and modern UI components.',
    tags: ['UI Clones', 'HTML', 'CSS', 'Security'],
    gradient: 'from-orange-400 to-yellow-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284088/Screenshot_2026-02-05_150323_jsohtj.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/BULLET-PROOF-CLONE',
    youtube: 'https://youtu.be/OP0XIlN4eis?si=7WpZOF0KT1Wy41yF',
    demo: 'https://bullet-proof-clone-108565.netlify.app/',
    category: 'UI Clones',
  },
  {
    title: 'Kachava',
    description: 'A KaChava-inspired product website focusing on modern UI design, responsiveness, and smooth interactions.',
    tags: ['UI Clones', 'HTML', 'CSS', 'E-commerce'],
    gradient: 'from-lime-400 to-green-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284480/Screenshot_2026-02-05_150356_wea5sm.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/KACHAVA-CLONE',
    youtube: 'https://youtu.be/X73nLmEqYl0?si=8n9drElhVNS4VL_p',
    demo: 'https://kachava-clone.netlify.app/',
    category: 'UI Clones',
  },
  {
    title: 'Count Number',
    description: 'An interactive number counting application with animated transitions.',
    tags: ['Apps', 'React', 'Animation', 'Counter'],
    gradient: 'from-green-400 to-emerald-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770398569/Screenshot_2026-02-06_224902_bijrn1.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/api-fetch-games/tree/main/counter-haha',
    youtube: 'https://www.youtube.com/@AnishaChhajerJain',
    demo: 'https://count-number-demo.netlify.app',
    category: 'Apps',
  },
  {
    title: 'MX Player',
    description: 'A responsive MX Player clone offering a smooth video streaming experience with user-friendly interface.',
    tags: ['UI Clones', 'HTML', 'CSS', 'Video'],
    gradient: 'from-teal-400 to-cyan-500',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1770284092/Screenshot_2026-02-05_150307_kmxwgd.png',
    github: 'https://github.com/Anisha-Chhajer-Jain/MX-PLAYER-CLONE',
    youtube: 'https://youtu.be/qW73SWI1Pe8?si=7TSeQu5qybwIgIBB',
    demo: 'https://108565-mx-player-clone-anisha.netlify.app/',
    category: 'UI Clones',
  },
  {
    title: 'SplitSure – Expense Tracker Design',
    description: 'A sleek and intuitive expense management application designed to simplify shared finances. Features clear debt tracking, group expense management, and a seamless user experience for financial transparency.',
    tags: ['UI/UX', 'Figma', 'Expense Tracker', 'Fintech'],
    gradient: 'from-blue-500 to-indigo-600',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1776458490/Screenshot_2026-04-18_020941_zrbfh4.png',
    figma: 'https://www.figma.com/design/XohCkUjH1tSumFDZ7uYasO/figma?node-id=28-575&t=dCF8FFW1qxy7ZbZ5-1',
    category: 'UI/UX - Figma',
    designProcess: 'Focused on creating a frictionless bill-splitting experience by prioritizing clarity in balance sheets and reducing the steps needed to log shared costs.'
  },
  {
    title: 'Vogue – Shopping Website Design',
    description: 'A premium e-commerce platform design featuring a sophisticated product catalog, streamlined checkout process, and personalized shopping experience with a focus on luxury aesthetics.',
    tags: ['UI/UX', 'Figma', 'E-Commerce', 'Shopping'],
    gradient: 'from-purple-500 to-pink-600',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1776458490/Screenshot_2026-04-18_021017_sznjrh.png',
    figma: 'https://www.figma.com/design/XohCkUjH1tSumFDZ7uYasO/figma?node-id=28-575&t=dCF8FFW1qxy7ZbZ5-1',
    category: 'UI/UX - Figma',
    designProcess: 'The design focused on creating a seamless path to purchase by optimizing product discovery and implementing a minimalist aesthetic that highlights high-quality imagery.'
  },
  {
    title: 'CineStream – Movie & OTT Platform',
    description: 'A high-fidelity OTT streaming platform design featuring immersive movie trailers, personalized content recommendations, and a cinematic user interface designed for a premium viewing experience.',
    tags: ['UI/UX', 'Figma', 'OTT', 'Streaming', 'Entertainment'],
    gradient: 'from-emerald-500 to-teal-600',
    image: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1776458491/Screenshot_2026-04-18_021025_m8unvz.png',
    figma: 'https://www.figma.com/design/XohCkUjH1tSumFDZ7uYasO/figma?node-id=28-575&t=dCF8FFW1qxy7ZbZ5-1', // placeholder
    category: 'UI/UX - Figma',
    designProcess: 'Prioritized a content-first approach by using dark mode aesthetics to enhance the cinematic feel and implementing an intuitive navigation system for browsing large media libraries.'
  },
];

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [selectedDesign, setSelectedDesign] = useState(null);

  // All categories 
  const categories = [
    'All',
    ...new Set(projectsData.map(p => p.category)),
  ];

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(p => p.category === activeCategory));
    }
    setVisibleCount(6);
  }, [activeCategory]);

  useEffect(() => {
    if (selectedDesign) {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedDesign]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <div className="py-16 sm:py-24 px-4 relative bg-[var(--bg-primary)] transition-colors duration-300" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-accent)] border border-[var(--border-primary)] mb-4">
            <Code size={14} className="text-[var(--accent-primary)]" />
            <span className="text-xs font-mono text-[var(--accent-primary)] tracking-wider">PORTFOLIO</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 text-[var(--text-primary)]">
            Featured{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-base sm:text-lg">
            A collection of my recent work including UI clones, interactive applications, and full-stack projects.
          </p>
        </div>

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} index={index} onOpenDesign={setSelectedDesign} />
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisibleCount(prev => Math.min(prev + 6, filteredProjects.length))}
              className="group relative px-8 py-3.5 overflow-hidden rounded-full border border-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all duration-500 shadow-lg"
            >
              <span className="absolute inset-0 bg-[var(--accent-primary)] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative flex items-center gap-2 text-[var(--text-primary)] group-hover:text-white font-medium">
                <Eye size={18} />
                View More Projects
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedDesign && (
          <DesignPopup
            project={selectedDesign}
            onClose={() => setSelectedDesign(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}