
import React, { useState, useEffect } from 'react';
import { 
  Trophy, Clock, Users, Award, Github, ExternalLink, 
  ChevronRight, Code, Database, Brain, Cloud, 
  CheckCircle, TrendingUp, Camera, Zap, Globe, 
  Star, Mic, ShoppingCart, Leaf, BarChart3,
  Target, Rocket, Sparkles, Medal, Linkedin, Mail,
  Twitter, Image, Satellite, Shield, MapPin, Bot,
  Server, CloudSun, Layers, Terminal, X, Wrench
} from 'lucide-react';

// Detailed Modal Component - Horizontal Rectangle with Rich Animations & Image Slideshow
function DetailedModal({ section, onClose }) {
  if (!section) return null;

  const [isLoaded, setIsLoaded] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const prevIndexRef = React.useRef(0);

  // Slideshow images - use gallery images if available, otherwise use main image
  const slideImages = section.gallery && section.gallery.length > 0 
    ? section.gallery.map(img => img.url) 
    : [section.mainImage, section.mainImage, section.mainImage, section.mainImage, section.mainImage, section.mainImage];

  React.useEffect(() => {
    setIsLoaded(true);
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Auto-rotate images every 5 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => {
        prevIndexRef.current = prev;
        return (prev + 1) % slideImages.length;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [slideImages.length]);

  const goToImage = (index) => {
    prevIndexRef.current = currentImageIndex;
    setCurrentImageIndex(index);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4 overflow-auto" 
      style={{ 
        backdropFilter: 'blur(12px)', 
        WebkitBackdropFilter: 'blur(12px)',
        animation: isLoaded ? 'fadeIn 0.4s ease-out' : 'none'
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Project details"
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from { 
            opacity: 0;
            transform: translateX(-40px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from { 
            opacity: 0;
            transform: translateX(100px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideOutLeft {
          from { 
            opacity: 1;
            transform: translateX(0);
          }
          to { 
            opacity: 0;
            transform: translateX(-100px);
          }
        }
        @keyframes slideOutRight {
          from { 
            opacity: 1;
            transform: translateX(0);
          }
          to { 
            opacity: 0;
            transform: translateX(100px);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .modal-card {
          animation: slideInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .image-side {
          animation: slideInLeft 0.7s ease-out 0.1s both;
        }
        .content-side {
          animation: slideInRight 0.7s ease-out 0.2s both;
        }
        .stat-item {
          animation: scaleIn 0.5s ease-out;
        }
        .glow-effect {
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.2), inset 0 0 1px rgba(255, 255, 255, 0.1);
        }
        .carousel-container {
          position: relative;
          overflow: hidden;
        }
        .carousel-slide {
          transition: all 0.6s ease-in-out;
        }
        .dot {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .dot.active {
          background-color: rgb(34, 197, 94);
          box-shadow: 0 0 12px rgba(34, 197, 94, 0.6);
        }
        .dot:hover {
          background-color: rgb(74, 222, 128);
          transform: scale(1.2);
        }
      `}</style>

      <div 
        className="modal-card bg-gradient-to-br from-[#0f1419] via-[#1a1f2e] to-[#0a0d12] rounded-3xl max-w-6xl w-full border border-white/10 shadow-2xl overflow-hidden" 
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), inset 0 0 1px rgba(255, 255, 255, 0.05)'
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] min-h-[500px]">
          
          {/* LEFT SIDE - Image Carousel */}
          <div className="image-side relative overflow-hidden bg-gradient-to-br from-emerald-500/10 to-transparent flex items-center justify-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center p-8 w-full h-full">
              {/* Carousel Container */}
              <div className="carousel-container relative mb-6 flex-1 flex items-center justify-center w-full">
                {slideImages.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-slide absolute transition-all duration-600 ease-in-out ${
                      index === currentImageIndex 
                        ? 'opacity-100 translate-x-0 scale-100 z-10' 
                        : 'opacity-0 -translate-x-full scale-95 z-0'
                    }`}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl blur-2xl opacity-40"></div>
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="relative w-80 h-80 object-cover rounded-3xl border-4 border-emerald-500/50 shadow-2xl"
                      />
                      {/* Badge */}
                      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-3 rounded-full text-white font-black text-sm shadow-lg animate-pulse">
                        🏆 1ST
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-slate-400 text-sm font-semibold mb-4">
                {currentImageIndex + 1} / {slideImages.length}
              </div>

              {/* Navigation Dots */}
              <div className="flex gap-2 justify-center flex-wrap mb-6">
                {slideImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`dot w-3 h-3 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'active bg-emerald-400 scale-125' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    prevIndexRef.current = currentImageIndex;
                    setCurrentImageIndex((prev) => (prev - 1 + slideImages.length) % slideImages.length);
                  }}
                  className="p-2 bg-white/10 hover:bg-emerald-500/30 rounded-full transition-all transform hover:scale-110"
                  aria-label="Previous image"
                >
                  <ChevronRight size={20} className="text-white transform rotate-180" />
                </button>
                <button
                  onClick={() => {
                    prevIndexRef.current = currentImageIndex;
                    setCurrentImageIndex((prev) => (prev + 1) % slideImages.length);
                  }}
                  className="p-2 bg-white/10 hover:bg-emerald-500/30 rounded-full transition-all transform hover:scale-110"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} className="text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Details */}
          <div className="content-side relative flex flex-col p-10 lg:p-12 text-white overflow-y-auto max-h-[600px]">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2.5 bg-white/10 hover:bg-emerald-500/30 rounded-full transition-all duration-300 group"
              aria-label="Close modal"
            >
              <X size={24} className="text-white group-hover:text-emerald-400" />
            </button>

            {/* Badge */}
            <div className="inline-flex mb-6 w-fit">
              <div className="px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center gap-2 shadow-lg">
                <Trophy size={16} className="text-white" />
                <span className="text-xs font-bold uppercase tracking-widest text-white">Hackathon Winner</span>
              </div>
            </div>

            {/* Title with Animation */}
            <h2 className="text-4xl lg:text-5xl font-black mb-3 bg-gradient-to-r from-emerald-300 via-white to-green-300 bg-clip-text text-transparent leading-tight">
              {section.title}
            </h2>

            {/* Subtitle */}
            <p className="text-xl font-bold text-emerald-400 mb-6">
              KisanDost - National Agri-Tech Hackathon
            </p>

            {/* Accent Line */}
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mb-6"></div>

            {/* Description */}
            <p className="text-slate-300 leading-relaxed mb-8 text-sm lg:text-base">
              {section.fullDescription}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="stat-item bg-gradient-to-br from-emerald-500/20 to-green-500/10 border border-emerald-500/40 rounded-2xl p-4 backdrop-blur-md hover:border-emerald-400/60 hover:bg-emerald-500/30 transition-all duration-300" style={{ animationDelay: '0.3s' }}>
                <div className="text-2xl font-black text-emerald-400">36</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest">Hours</div>
              </div>
              <div className="stat-item bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/40 rounded-2xl p-4 backdrop-blur-md hover:border-blue-400/60 hover:bg-blue-500/30 transition-all duration-300" style={{ animationDelay: '0.4s' }}>
                <div className="text-2xl font-black text-blue-400">4</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest">Members</div>
              </div>
              <div className="stat-item bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/40 rounded-2xl p-4 backdrop-blur-md hover:border-purple-400/60 hover:bg-purple-500/30 transition-all duration-300" style={{ animationDelay: '0.5s' }}>
                <div className="text-2xl font-black text-purple-400">AI+ML</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest">Tech</div>
              </div>
            </div>

            {/* Quick Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1.5 bg-emerald-500/20 border border-emerald-500/50 rounded-full text-xs font-semibold text-emerald-300 transform hover:scale-110 transition-transform duration-200">React</span>
              <span className="px-3 py-1.5 bg-blue-500/20 border border-blue-500/50 rounded-full text-xs font-semibold text-blue-300 transform hover:scale-110 transition-transform duration-200">Node.js</span>
              <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/50 rounded-full text-xs font-semibold text-purple-300 transform hover:scale-110 transition-transform duration-200">MongoDB</span>
              <span className="px-3 py-1.5 bg-amber-500/20 border border-amber-500/50 rounded-full text-xs font-semibold text-amber-300 transform hover:scale-110 transition-transform duration-200">AI/ML</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://kisandost.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-6 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 rounded-xl text-white font-bold text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg glow-effect"
              >
                View Project
                <ChevronRight size={18} />
              </a>
              <a
                href="https://youtu.be/kisandost-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 bg-white/10 hover:bg-white/20 rounded-xl text-white font-semibold text-sm border border-white/30 transition-all duration-300 flex items-center gap-2 transform hover:scale-105 active:scale-95"
              >
                <Star size={16} />
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Team Member Card Component (Enhanced)
function TeamMemberCard({ member, index, isExpanded, onToggle }) {
  return (
    <div 
      className="group relative animate-fade-in-up cursor-pointer" 
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={onToggle}
    >
      <div className={`absolute -inset-1 bg-gradient-to-r ${member.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`} />
      <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm rounded-2xl border border-white/5 group-hover:border-white/10 transition-all duration-500 group-hover:scale-[1.02] h-full overflow-hidden">
        
        {/* Card Header with Icon */}
        <div className="relative h-28 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
          <div className="absolute -bottom-8 left-6">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-4xl shadow-xl ring-4 ring-[#0a0a0f]`}>
              {member.icon}
            </div>
          </div>
          <div className="absolute top-3 right-3">
            <div className="flex gap-1">
              {member.achievements.slice(0, 2).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              ))}
            </div>
          </div>
        </div>
        
        {/* Card Content */}
        <div className="pt-10 p-5">
          <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
            {member.name}
          </h3>
          <p className="text-sm font-medium text-indigo-400 mt-1 mb-3">{member.role}</p>
          
          {/* Description - Expandable */}
          <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-48' : 'max-h-16'}`}>
            <p className="text-sm text-slate-400 leading-relaxed">
              {member.description}
            </p>
            {isExpanded && (
              <div className="mt-3 pt-3 border-t border-white/5">
                <p className="text-xs text-slate-500 mb-2 flex items-center gap-1"><Target size={12} /> Key Contributions:</p>
                <div className="flex flex-wrap gap-1">
                  {member.contributions.split(', ').map((contrib, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded-full text-slate-300">
                      {contrib}
                    </span>
                  ))}
                </div>
                <div className="mt-3">
                  <p className="text-xs text-amber-400 flex items-center gap-1">
                    <Award size={12} />
                    Achievements:
                  </p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {member.achievements.map((achievement, i) => (
                      <span key={i} className="text-xs px-2 py-0.5 bg-amber-500/10 rounded-full text-amber-400">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Expand/Collapse Indicator */}
          <button className="mt-3 text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors">
            {isExpanded ? 'Show less' : 'Read more'}
            <ChevronRight size={12} className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
          </button>
          
          {/* Social Links */}
          <div className="flex gap-3 mt-4 pt-3 border-t border-white/5">
            <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors">
              <Github size={16} />
            </a>
            <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </div>
        
        {/* Animated Bottom Border */}
        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${member.gradient} transition-all duration-500 ${isExpanded ? 'w-full' : 'w-0 group-hover:w-full'}`} />
      </div>
    </div>
  );
}

// Team Stats Component
function TeamStats({ members }) {
  const totalAchievements = members.reduce((sum, m) => sum + m.achievements.length, 0);
  const totalContributions = members.reduce((sum, m) => sum + m.contributions.split(', ').length, 0);
  const avgModelAccuracy = 94;
  
  const stats = [
    { label: 'Team Members', value: members.length, icon: Users, color: 'from-blue-500 to-cyan-500', suffix: '' },
    { label: 'Key Achievements', value: totalAchievements, icon: Medal, color: 'from-amber-500 to-orange-500', suffix: '' },
    { label: 'Contributions', value: totalContributions, icon: Code, color: 'from-purple-500 to-pink-500', suffix: '' },
    { label: 'Model Accuracy', value: avgModelAccuracy, icon: Brain, color: 'from-green-500 to-emerald-500', suffix: '%' }
  ];
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
      {stats.map((stat, index) => (
        <div key={stat.label} className="group relative animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
          <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
          <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/5 group-hover:border-white/10 transition-all duration-500">
            <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <stat.icon size={22} className="text-white" />
            </div>
            <div className="text-2xl font-bold text-white">{stat.value}{stat.suffix}</div>
            <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Team Quote Component
function TeamQuote() {
  return (
    <div className="mt-12 p-6 bg-gradient-to-r from-indigo-600/10 via-indigo-700/10 to-indigo-600/10 rounded-xl border border-indigo-500/30 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Trophy size={24} className="text-amber-400" />
        <span className="text-lg font-semibold text-amber-400">1st Place Achievement</span>
        <Trophy size={24} className="text-amber-400" />
      </div>
      <p className="text-base text-slate-300 italic">
        "Together, we turned 36 hours of intense collaboration into a 1st place winning solution 
        that can truly impact farmers' lives. Every line of code, every model trained, and every 
        feature built was a team effort."
      </p>
      <p className="text-sm text-indigo-400 mt-3">— Team VentureHack</p>
      <div className="flex justify-center gap-2 mt-4">
        {['Anisha', 'Aryan', 'Manan', 'Prashant'].map((name, i) => (
          <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded-full text-slate-400">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

// Hackathon Sections Component - Two Side by Side
function HackathonSections({ onSectionClick }) {
  const sections = [
    {
      id: 'hackathon-experience',
      title: 'Hackathon Experience',
      subtitle: 'The Journey to Victory',
      mainImage: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1774599129/Screenshot_2026-03-27_134135_vsrnkl.png',
      gradient: 'from-amber-500 to-orange-500',
      fullDescription: 'An incredible 36-hour journey where our team of 4 collaborated intensely to create a solution that would truly impact farmers\' lives. From ideation to final presentation, we experienced moments of challenge, innovation, and ultimately triumph. The winning feeling when our name was announced as first place out of 45 teams remains unmatched.',
      gallery: [
        {
          url: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1774599129/Screenshot_2026-03-27_134135_vsrnkl.png',
          title: 'Winning Moment',
          description: 'The excitement and joy when we were announced as winners!'
        },
        {
          url: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1774729510/Screenshot_2026-03-27_134610_oqefvn.png',
          title: 'Certificate of Excellence',
          description: 'Recognition of our hard work and innovation.'
        },
        {
          url: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1774844685/Screenshot_2026-03-30_095424_vy4lnf.png',
          title: 'Project Interface',
          description: 'Final dashboard displaying real-time agricultural data and AI insights.'
        },
        {
          url: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1774843674/Screenshot_2026-03-30_093740_dmnnvv.png',
          title: 'Team Collaboration',
          description: 'Intense 36-hour build session during the national hackathon.'
        },
        {
          url: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1774599129/Screenshot_2026-03-27_134135_vsrnkl.png',
          title: 'Stage Presentation',
          description: 'Pitching our solution to the esteemed panel of judges.'
        },
        {
          url: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1774729510/Screenshot_2026-03-27_134610_oqefvn.png',
          title: 'Tech Validation',
          description: 'Our technical implementation being reviewed by industry experts.'
        }
      ],
      details: [
        { label: 'Duration', value: '36 Hours of continuous development' },
        { label: 'Team Size', value: '4 Developers (Full Stack + AI)' },
        { label: 'Ranking', value: '1st Place out of 45 Teams' },
        { label: 'Category', value: 'Best Technical Implementation & Most Impactful' }
      ],
      technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'AWS']
    },
    {
      id: 'technical-achievement',
      title: 'Technical Achievement',
      subtitle: 'Innovation Meets Impact',
      mainImage: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1774729510/Screenshot_2026-03-27_134610_oqefvn.png',
      gradient: 'from-blue-500 to-indigo-500',
      fullDescription: 'KisanDost represents a complete full-stack solution built from scratch in 36 hours. The project combines cutting-edge AI/ML models with a responsive frontend and robust backend. Our disease detection model achieves 94% accuracy, price prediction reaches 87% accuracy, and the entire system supports 5 regional languages for accessibility.',
       gallery: [
          {
            url: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1774599129/Screenshot_2026-03-27_134135_vsrnkl.png',
            title: 'Winning Moment',
            description: 'The excitement and joy when we were announced as winners!'
          },
          {
            url: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1774729510/Screenshot_2026-03-27_134610_oqefvn.png',
            title: 'Certificate of Excellence',
            description: 'Recognition of our hard work and innovation.'
          },
          {
            url: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1775737410/Screenshot_2026-04-09_175246_gzai5a.png',
            title: 'Project Interface',
            description: 'Final dashboard displaying real-time agricultural data and AI insights.'
          },
          {
            url: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1775737410/Screenshot_2026-04-09_175201_drx5ut.png',
            title: 'Team Collaboration',
            description: 'Intense 36-hour build session during the national hackathon.'
          },
          {
            url: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1775737409/Screenshot_2026-04-09_175257_dnzmbe.png',
            title: 'Victory Trophy',
            description: 'Celebrating our first place finish at the hackathon.'
          },
          {
            url: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1775737458/Screenshot_2026-04-09_175236_gwiz1l.png',
            title: 'Closing Ceremony',
            description: 'Final moments of the 36-hour technical marathon.'
          }
        ],
      details: [
        { label: 'Disease Detection Accuracy', value: '94% with Computer Vision' },
        { label: 'Price Prediction Accuracy', value: '87% using ML Models' },
        { label: 'API Endpoints', value: '25+ fully documented endpoints' },
        { label: 'Language Support', value: '5 regional languages supported' }
      ],
      technologies: ['TensorFlow', 'FastAPI', 'OpenCV', 'Sentinel Hub', 'Google Maps API']
    }
  ];

  return (
    <div className="mb-12">
      <div className="flex items-center justify-center gap-2 mb-8">
        <Sparkles size={32} className="text-amber-400" />
        <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
          Project Highlights
        </h3>
        <Sparkles size={32} className="text-orange-400" />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section, index) => (
          <div
            key={section.id}
            onClick={() => onSectionClick(section)}
            className="group relative animate-fade-in-up cursor-pointer"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Glow Effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${section.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`} />
            
            {/* Card Container */}
            <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500 group-hover:scale-[1.02] h-full flex flex-col">
              {/* Image */}
              <div className="relative h-72 overflow-hidden group">
                <img
                  src={section.mainImage}
                  alt={section.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  {section.id === 'hackathon-experience' && <Trophy size={24} className="text-amber-400" />}
                  {section.id === 'technical-achievement' && <Star size={24} className="text-indigo-400" />}
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}>
                    {section.title}
                  </h3>
                </div>
                <p className="text-sm text-indigo-400 font-medium mb-4">{section.subtitle}</p>
                
                <p className="text-slate-300 leading-relaxed flex-1 line-clamp-3">
                  {section.fullDescription}
                </p>

                {/* Key Stats */}
                <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-2">
                  {section.details.slice(0, 2).map((detail, i) => (
                    <div key={i} className="text-xs">
                      <p className="text-indigo-400 font-medium">{detail.label}</p>
                      <p className="text-slate-400">{detail.value}</p>
                    </div>
                  ))}
                </div>

                {/* Click Indicator */}
                <div className="mt-4 flex items-center gap-2 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                  <span className="text-sm font-medium">View Details</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Enhanced Features Component
function FeaturesSection() {
  const features = [
    {
      icon: Leaf,
      title: "Crop Care & Disease Guide",
      description: "Select your crop to get expert medical advice, symptoms, and control measures. AI-powered disease detection with 94% accuracy.",
      details: ["Real-time disease detection", "Expert treatment recommendations", "Preventive care tips", "Seasonal crop management"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Satellite,
      title: "Satellite Monitoring",
      description: "24/7 satellite monitoring of your farmland with real-time insights on crop health, soil moisture, and weather patterns.",
      details: ["24/7 continuous monitoring", "Soil health analysis", "Weather pattern prediction", "Irrigation recommendations"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Safe Recommendations",
      description: "100% safe, scientifically-backed recommendations for fertilizers, pesticides, and crop rotation.",
      details: ["Organic farming tips", "Chemical-free alternatives", "Government scheme information", "Expert-verified content"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: MapPin,
      title: "District Coverage",
      description: "Currently serving farmers across 20+ districts with plans to expand nationwide.",
      details: ["20+ districts covered", "Local language support", "Region-specific advice", "Community farmer network"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Bot,
      title: "AI Voice Assistant",
      description: "Voice-enabled assistant that understands regional languages and provides instant answers to farming queries.",
      details: ["Multi-language support", "Voice commands", "24/7 availability", "Personalized responses"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Price Prediction",
      description: "ML-based crop price predictions to help farmers make informed selling decisions.",
      details: ["Market price trends", "Best selling time", "Historical data analysis", "Demand forecasting"],
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div key={feature.title} className="group relative animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
          <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
          <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm rounded-2xl p-6 border border-white/5 group-hover:border-white/10 transition-all duration-500 h-full">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <feature.icon size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">{feature.description}</p>
            <div className="flex flex-wrap gap-2">
              {feature.details.map((detail, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded-full text-slate-300">
                  {detail}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Enhanced Tech Stack Component
function TechStackSection() {
  const techCategories = [
    {
      category: "Frontend",
      icon: Code,
      technologies: [
        { name: "React.js", color: "from-cyan-400 to-blue-500" },
        { name: "Tailwind CSS", color: "from-sky-400 to-blue-500" },
        { name: "Framer Motion", color: "from-purple-400 to-pink-500" }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend & AI",
      icon: Server,
      technologies: [
        { name: "Node.js", color: "from-green-500 to-emerald-500" },
        { name: "Python", color: "from-blue-400 to-indigo-500" },
        { name: "TensorFlow", color: "from-orange-500 to-amber-500" },
        { name: "FastAPI", color: "from-teal-400 to-green-500" }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Database & Cloud",
      icon: Cloud,
      technologies: [
        { name: "MongoDB", color: "from-green-600 to-teal-500" },
        { name: "AWS", color: "from-yellow-500 to-orange-500" },
        { name: "Netlify", color: "from-teal-400 to-cyan-500" }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "APIs & Integrations",
      icon: Layers,
      technologies: [
        { name: "Google Maps API", color: "from-green-500 to-emerald-500" },
        { name: "Sentinel Hub", color: "from-blue-500 to-indigo-500" },
        { name: "NASA APIs", color: "from-red-500 to-orange-500" }
      ],
      color: "from-amber-500 to-orange-500"
    }
  ];

  const metrics = [
    { label: "API Endpoints", value: "25+", icon: Terminal },
    { label: "Model Accuracy", value: "94%", icon: Brain },
    { label: "Languages Supported", value: "5", icon: Globe },
    { label: "Response Time", value: "<200ms", icon: Zap }
  ];

  return (
    <div className="space-y-8">
      {/* Tech Categories */}
      <div className="grid md:grid-cols-2 gap-6">
        {techCategories.map((category, index) => (
          <div key={category.category} className="group relative animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
            <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm rounded-2xl p-6 border border-white/5 group-hover:border-white/10 transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech, i) => (
                  <span key={tech.name} className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${tech.color} bg-opacity-20 text-white text-sm font-medium shadow-lg`}>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {metrics.map((metric, index) => (
          <div key={metric.label} className="group relative animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/5 group-hover:border-white/10 transition-all duration-500">
              <metric.icon size={24} className="mx-auto mb-2 text-indigo-400" />
              <div className="text-2xl font-bold text-white">{metric.value}</div>
              <div className="text-xs text-slate-400 mt-1">{metric.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Deployment Info */}
      <div className="bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10 rounded-xl p-6 border border-indigo-500/30 text-center">
        <Cloud size={32} className="mx-auto mb-3 text-indigo-400" />
        <p className="text-slate-300">🚀 Deployed on Netlify • Scalable Architecture • Real-time Updates</p>
        <p className="text-slate-400 text-sm mt-2">25+ API endpoints | 94% Model Accuracy | 5 Languages Supported</p>
      </div>
    </div>
  );
}

// Main KisanDost Component
export default function KisanDost() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedMember, setExpandedMember] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  
  // Auto-open modal on component mount
  useEffect(() => {
    // Set a small delay to ensure smooth animation
    const timer = setTimeout(() => {
      // Set to the Hackathon Experience section by default
      setSelectedSection({
        id: 'hackathon-experience',
        title: 'Hackathon Experience',
        subtitle: 'The Journey to Victory',
        mainImage: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1774599129/Screenshot_2026-03-27_134135_vsrnkl.png',
        gradient: 'from-amber-500 to-orange-500',
        fullDescription: 'An incredible 36-hour journey where our team of 4 collaborated intensely to create a solution that would truly impact farmers\' lives. From ideation to final presentation, we experienced moments of challenge, innovation, and ultimately triumph. The winning feeling when our name was announced as first place out of 45 teams remains unmatched.',
        gallery: [
          {
            url: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1774599129/Screenshot_2026-03-27_134135_vsrnkl.png',
            title: 'Winning Moment',
            description: 'The excitement and joy when we were announced as winners!'
          },
          {
            url: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1774729510/Screenshot_2026-03-27_134610_oqefvn.png',
            title: 'Certificate of Excellence',
            description: 'Recognition of our hard work and innovation.'
          },
          {
            url: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1775737410/Screenshot_2026-04-09_175246_gzai5a.png',
            title: 'Project Interface',
            description: 'Final dashboard displaying real-time agricultural data and AI insights.'
          },
          {
            url: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1775737410/Screenshot_2026-04-09_175201_drx5ut.png',
            title: 'Team Collaboration',
            description: 'Intense 36-hour build session during the national hackathon.'
          },
          {
            url: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1775737409/Screenshot_2026-04-09_175257_dnzmbe.png',
            title: 'Victory Trophy',
            description: 'Celebrating our first place finish at the hackathon.'
          },
          {
            url: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1775737458/Screenshot_2026-04-09_175236_gwiz1l.png',
            title: 'Closing Ceremony',
            description: 'Final moments of the 36-hour technical marathon.'
          }
        ],
        details: [
          { label: 'Duration', value: '36 Hours of continuous development' },
          { label: 'Team Size', value: '4 Developers (Full Stack + AI)' },
          { label: 'Ranking', value: '1st Place out of 45 Teams' },
          { label: 'Category', value: 'Best Technical Implementation & Most Impactful' }
        ],
        technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'AWS']
      });
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const teamMembers = [
    {
      name: 'Anisha Chhajer',
      role: 'Team Lead & Full Stack Developer',
      contributions: 'Full-stack development, AI/ML model training, UI/UX design, system architecture, deployment, presentation',
      description: 'Leading with vision and keeping the team aligned, driving the project forward with strategic direction and technical excellence',
      achievements: ['Team coordination', 'Architecture design', 'Full-stack implementation', 'Final presentation'],
      icon: '👩‍💻',
      gradient: 'from-pink-500 to-rose-500',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Aryan Sabasana',
      role: 'AI/ML Engineer',
      contributions: 'Model training, AI pipeline development, data preprocessing, model optimization, algorithm design',
      description: 'Driving the AI and core innovation, building intelligent systems that power the crop disease detection and price prediction features',
      achievements: ['94% model accuracy', 'Real-time inference optimization', 'Data augmentation pipeline'],
      icon: '🤖',
      gradient: 'from-purple-500 to-indigo-500',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Manan Patel',
      role: 'Core Feature Developer',
      contributions: 'Feature development, frontend integration, API implementation, UI components, responsive design',
      description: 'Turning ideas into real, working solutions with clean code and intuitive user interfaces that farmers can easily use',
      achievements: ['6 major features implemented', 'Multi-language support', 'Voice assistant integration'],
      icon: '⚡',
      gradient: 'from-blue-500 to-cyan-500',
      social: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      name: 'Prashant Parmar',
      role: 'Backend & System Architect',
      contributions: 'Backend architecture, database design, API development, system scalability, deployment infrastructure',
      description: 'Building a strong and reliable backend that ensures KisanDost runs smoothly and scales to serve thousands of farmers',
      achievements: ['25+ API endpoints', 'Database optimization', 'Cloud deployment', 'System reliability'],
      icon: '🏗️',
      gradient: 'from-emerald-500 to-teal-500',
      social: { github: '#', linkedin: '#', twitter: '#' }
    }
  ];
  
  const stats = [
    { icon: Clock, label: 'Build Time', value: '36 Hours', color: 'from-blue-500 to-cyan-500', description: 'Team Development' },
    { icon: Users, label: 'Team', value: '4 Developers', color: 'from-purple-500 to-pink-500', description: 'Full Stack + AI' },
    { icon: Trophy, label: 'Ranking', value: '1st Place', color: 'from-amber-500 to-orange-500', description: 'Out of 45 Teams' },
  ];
  
  const handleExpandMember = (index) => {
    setExpandedMember(expandedMember === index ? null : index);
  };
  
  return (
    <div className="py-16 sm:py-24 px-4 relative bg-gradient-to-b from-[#050507] to-[#0a0a0f]" id="hackathon-experience">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251, 191, 36, 0.1) 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Leaf size={56} className="text-green-500 animate-float-slow" />
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              KisanDost
            </h1>
            <Bot size={56} className="text-purple-500 animate-float-slow" style={{ animationDelay: '0.3s' }} />
          </div>
          <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-3xl mx-auto">
            किसान की हर जरूरत का Digital साथी! • AI-Powered Agricultural Assistant
          </p>
          <div className="flex justify-center gap-2 mt-4 flex-wrap">
            <span className="px-3 py-1 bg-amber-500/20 rounded-full text-sm text-amber-400 flex items-center gap-1"><Trophy size={14} /> 1st Place</span>
            <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-400 flex items-center gap-1"><Star size={14} /> Best Technical Implementation</span>
            <span className="px-3 py-1 bg-green-500/20 rounded-full text-sm text-green-400 flex items-center gap-1"><Leaf size={14} /> Most Impactful Solution</span>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div key={stat.label} className="group relative animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
              <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/5 group-hover:border-white/10 transition-all duration-500">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
                <div className="text-xs text-amber-400 mt-1">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto">
          <div className="inline-flex bg-[#0a0a0f]/80 backdrop-blur-sm rounded-xl p-1 border border-white/5">
            {[
              { id: 'overview', label: 'Overview', icon: Globe },
              { id: 'features', label: 'Features', icon: Zap },
              { id: 'tech', label: 'Tech Stack', icon: Code },
              { id: 'team', label: 'Team', icon: Users },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                aria-pressed={activeTab === tab.id}
                aria-label={`View ${tab.label} tab`}
              >
                <tab.icon size={18} />
                <span className="text-sm sm:text-base font-medium whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="transition-all duration-500">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Hackathon Sections with Modal */}
              <HackathonSections onSectionClick={setSelectedSection} />
              <DetailedModal section={selectedSection} onClose={() => setSelectedSection(null)} />
              
              {/* Problem & Solution */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                  <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30">
                    <h3 className="text-xl font-bold mb-3 text-red-400 flex items-center gap-2">
                      <Target size={20} />
                      Problem Statement
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      Small-scale farmers in rural India lack access to expert agricultural advice, leading to crop losses up to 30% annually due to undetected diseases, improper crop planning, and exploitation by middlemen. There was no integrated solution that combines disease detection, market insights, and weather intelligence in one platform accessible in regional languages.
                    </p>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                  <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30">
                    <h3 className="text-xl font-bold mb-3 text-green-400 flex items-center gap-2">
                      <Rocket size={20} />
                      Our Solution
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      KisanDost combines computer vision for disease detection (94% accuracy), ML models for price prediction (87% accuracy), and AI recommendations to provide actionable insights to farmers in their native language. Built entirely as a team in 36 hours, handling full-stack development, AI model training, and deployment.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-[#0a0a0f]/60 rounded-xl border border-white/5">
                  <div className="text-2xl font-bold text-amber-400">20+</div>
                  <div className="text-xs text-slate-400">Districts Covered</div>
                </div>
                <div className="text-center p-4 bg-[#0a0a0f]/60 rounded-xl border border-white/5">
                  <div className="text-2xl font-bold text-green-400">100%</div>
                  <div className="text-xs text-slate-400">Safe Recommendations</div>
                </div>
                <div className="text-center p-4 bg-[#0a0a0f]/60 rounded-xl border border-white/5">
                  <div className="text-2xl font-bold text-blue-400">24/7</div>
                  <div className="text-xs text-slate-400">Satellite Monitoring</div>
                </div>
              </div>
            </div>
          )}
          
          {/* Features Tab - Enhanced */}
          {activeTab === 'features' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Empowering Traditional Knowledge with Modern Technology
                </h2>
                <p className="text-slate-400 mt-2">Comprehensive solutions for every farming need</p>
              </div>
              <FeaturesSection />
            </div>
          )}
          
          {/* Tech Stack Tab - Enhanced */}
          {activeTab === 'tech' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Built with Modern Technology
                </h2>
                <p className="text-slate-400 mt-2">Scalable, reliable, and cutting-edge tech stack</p>
              </div>
              <TechStackSection />
            </div>
          )}
          
          {/* Team Tab */}
          {activeTab === 'team' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Users size={32} className="text-indigo-400" />
                  <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    The VentureHack Team
                  </h2>
                  <Users size={32} className="text-pink-400" />
                </div>
                <p className="text-slate-400">Four passionate developers, one mission: Empower farmers with technology</p>
              </div>
              
              <TeamStats members={teamMembers} />
              
              <div className="grid md:grid-cols-2 gap-6">
                {teamMembers.map((member, index) => (
                  <div key={member.name} className="group relative animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className={`absolute -inset-1 bg-gradient-to-r ${member.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`} />
                    <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm rounded-2xl p-6 border border-white/5 group-hover:border-white/10 transition-all duration-500">
                      <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-3xl shadow-lg flex-shrink-0`}>
                          {member.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white">{member.name}</h3>
                          <p className="text-sm font-medium text-indigo-400">{member.role}</p>
                          <p className="text-sm text-slate-400 mt-2 leading-relaxed">{member.description}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-white/5">
                        <p className="text-sm text-amber-400 mb-2 flex items-center gap-1">
                          <Award size={14} />
                          Key Achievements:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {member.achievements.map((achievement, i) => (
                            <span key={i} className="text-xs px-2 py-1 bg-amber-500/10 rounded-full text-amber-400">
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <p className="text-xs text-slate-500 mb-1">Contributions:</p>
                        <div className="flex flex-wrap gap-1">
                          {member.contributions.split(', ').map((contrib, i) => (
                            <span key={i} className="text-xs px-2 py-0.5 bg-white/5 rounded-full text-slate-300">
                              {contrib}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <TeamQuote />
            </div>
          )}
          
        
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float-slow {
          animation: float-slow 3s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(251, 191, 36, 0.3); }
          50% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.6); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        /* Browser Compatibility Fallbacks */
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          background-color: rgba(0, 0, 0, 0.8);
        }
        /* Gradient Text Fallback */
        .bg-clip-text {
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        /* Icon Button Accessibility */
        button:focus-visible {
          outline: 2px solid rgba(99, 102, 241, 0.5);
          outline-offset: 2px;
        }
        /* Modal improvements for mobile */
        @media (max-width: 640px) {
          .fixed.inset-0 {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .max-h-[90vh] {
            max-height: 95vh;
          }
        }
        /* Smooth transitions fallback */
        * {
          -webkit-transition-property: all;
          transition-property: all;
        }
        /* Icon rendering */
        svg {
          display: block;
        }
      `}</style>
    </div>
  );
}