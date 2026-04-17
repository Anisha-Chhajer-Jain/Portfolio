import React, { useState, useEffect } from 'react';
import { Trophy, Play, ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HackathonCard = ({
  hackathon,
  index
}) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const currentSlide = ((page % hackathon.gallery.length) + hackathon.gallery.length) % hackathon.gallery.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setPage([page + 1, 1]);
    }, 2000);
    return () => clearInterval(timer);
  }, [page, hackathon.gallery.length]);

  const nextSlide = () => {
    setPage([page + 1, 1]);
  };

  const prevSlide = () => {
    setPage([page - 1, -1]);
  };

  const handleThumbnailClick = (idx) => {
    if (idx !== currentSlide) {
      setPage([idx, idx > currentSlide ? 1 : -1]);
    }
  };

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 100 : -100,
        opacity: 0,
        scale: 0.95
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 100 : -100,
        opacity: 0,
        scale: 0.95
      };
    }
  };

  const isGu = hackathon.id === 'gu';
  
  // Theme colors based on the image
  const glowColor = isGu ? 'shadow-[0_0_30px_rgba(99,102,241,0.15)]' : 'shadow-[0_0_30px_rgba(245,158,11,0.15)]';
  const borderColor = isGu ? 'border-[#2d2a4a]' : 'border-[#4a3f2a]';
  const headerHighlight = isGu ? 'text-indigo-400' : 'text-amber-400';
  const headerBgBadge = isGu ? 'bg-[#1a172a]' : 'bg-[#2a1f10]';
  const dotColor = isGu ? 'bg-[#7050f0]' : 'bg-[#d09010]';
  const titleColor = 'text-white';
  const carouselActiveBorder = isGu ? 'border-indigo-500' : 'border-amber-500';
  const carouselDotActive = isGu ? 'bg-indigo-500' : 'bg-amber-500';
  const NumberColor = isGu ? 'text-indigo-500/5' : 'text-amber-500/5';
  
  return (
    <div className={`relative flex flex-col p-6 sm:p-8 rounded-3xl bg-[#0b0a0f] border-2 ${borderColor} ${glowColor} overflow-hidden group`}>
      
      {/* Watermark Number */}
      <div className={`absolute top-4 right-12 text-8xl md:text-[120px] font-black ${NumberColor} select-none pointer-events-none mt-4 font-mono`}>
        {hackathon.placeNumber}
      </div>

      <div className="flex justify-between items-start mb-6 relative z-10 w-full">
        {/* Badge */}
        <div>
          <div className={`flex items-center gap-2 mb-4 rounded-full px-4 py-1.5 w-fit border border-white/5 ${headerBgBadge}`}>
            <span className={`w-2 h-2 rounded-full ${dotColor} animate-pulse shadow-lg ${isGu ? 'shadow-indigo-500' : 'shadow-amber-500'}`} />
            <span className={`text-xs font-bold tracking-widest uppercase ${headerHighlight} drop-shadow-md`}>
              Achievement Winner
            </span>
          </div>
          
          {/* Title & Subtitle */}
          <h2 className={`text-3xl sm:text-4xl font-extrabold ${titleColor} mb-2 tracking-tight`}>
            {hackathon.title}
          </h2>
          <p className="text-[#888] font-medium text-sm tracking-wide">
            {hackathon.subtitle}
          </p>
        </div>

        {/* Place indicator */}
        <div className="flex flex-col items-center">
          <Trophy size={32} className={`mb-1 ${headerHighlight} drop-shadow-[0_0_8px_rgba(var(--amber-500),0.5)]`} style={{ filter: `drop-shadow(0px 0px 8px ${isGu ? '#6366f1' : '#f59e0b'})` }} />
          <span className={`text-xs font-black uppercase tracking-wider ${headerHighlight}`}>
            {hackathon.place}
          </span>
        </div>
      </div>

      {/* Main Image View */}
      <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-video mb-4 bg-black border-2 border-[#1a1a2e] transition-all`}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0 w-full h-full"
          >
            {hackathon.gallery[currentSlide].isVideo ? (
              <>
                <div className="absolute top-4 left-4 bg-blue-500/90 hover:bg-blue-600 transition-colors cursor-pointer text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 z-20 shadow-lg backdrop-blur-sm border border-blue-400/30">
                  <Play size={12} fill="currentColor" />
                  CAPTURED MEMORY
                </div>
                <video 
                  src={hackathon.gallery[currentSlide].videoUrl} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover opacity-90 hover:opacity-100"
                />
              </>
            ) : (
              <img 
                src={hackathon.gallery[currentSlide].src} 
                alt={hackathon.gallery[currentSlide].caption}
                className="w-full h-full object-cover opacity-90 hover:opacity-100"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Caption Overlay at bottom (optional, but requested layout is text below) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

        {/* Navigation Arrows */}
        <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/40 hover:bg-black/80 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm border border-white/10 hover:scale-110 z-20">
          <ChevronLeft size={16} />
        </button>
        <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/40 hover:bg-black/80 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm border border-white/10 hover:scale-110 z-20">
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Image Caption */}
      <p className={`text-center font-bold text-sm tracking-wide mb-6 ${headerHighlight}`}>
        {hackathon.gallery[currentSlide].caption}
      </p>

      {/* Thumbnails */}
      <div className="flex justify-center gap-3 mb-4 relative z-10 w-full overflow-x-auto pb-2 scrollbar-none">
        {hackathon.gallery.map((item, idx) => (
          <button 
            key={idx}
            onClick={() => handleThumbnailClick(idx)}
            className={`relative flex-shrink-0 w-16 h-10 rounded-lg overflow-hidden border transition-all duration-300 ${currentSlide === idx ? `${carouselActiveBorder} scale-110 shadow-lg z-10` : 'border-[#2d2a4a] opacity-40 hover:opacity-100 grayscale hover:grayscale-0'}`}
          >
            <img src={item.thumb || item.src} alt="thumbnail" className="w-full h-full object-cover" />
            {item.isVideo && (
               <div className="absolute inset-0 bg-indigo-900/40 flex items-center justify-center">
                 {currentSlide === idx ? (
                    <div className="bg-blue-600 px-3 py-1 rounded text-[10px] font-bold text-white uppercase shadow-lg shadow-blue-500/50 flex items-center gap-1">
                      PLAY
                    </div>
                 ) : (
                    <PlayCircle size={16} className="text-white/80" fill="currentColor" />
                 )}
               </div>
            )}
          </button>
        ))}
      </div>
      
      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mb-8">
        {hackathon.gallery.map((_, idx) => (
          <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? `w-6 ${carouselDotActive}` : 'w-1.5 bg-[#2d2a4a]'}`} />
        ))}
      </div>

      {/* Description */}
      <p className="text-[#a0a0b0] text-sm leading-relaxed mb-10 flex-grow font-medium tracking-wide">
        {hackathon.description}
      </p>

      {/* Footer Text Location Identifier */}
      <div className="text-center pt-6 mt-auto relative z-10">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-${isGu ? 'indigo' : 'amber'}-500/30 to-transparent`} />
        <span className={`text-[10px] font-black tracking-[0.3em] uppercase ${headerHighlight} opacity-50`}>
          {hackathon.footerText}
        </span>
      </div>
    </div>
  );
};

export default function Hackathons() {
  const hackathonsData = [
    {
      id: 'su',
      title: 'Sangam University',
      subtitle: 'Bhilwara, Rajasthan • 2025',
      place: '1st Place',
      placeNumber: '01',
      description: 'Secured 1st place at Sangam University Bhilwara by building an innovative full-stack solution under intense pressure. Demonstrated rapid system architecture, cross-domain collaboration, and effective problem pitching to a panel of expert judges.',
      footerText: 'SU HACKATHON',
      gallery: [
      {
        src: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1776445529/Screenshot_2026-04-17_223314_i3lxmm.png',
        caption: 'Team at Sangam University'
      },
      {
        src: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1776445526/Screenshot_2026-04-17_223327_yhgdik.png',
        caption: 'Team working under pressure'
      },
      {
        src: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1776445530/Screenshot_2026-04-17_223308_m7jlka.png',
        caption: 'Project Demo'
      },
      {
        src: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1776445527/Screenshot_2026-04-17_223321_qblzei.png',
        caption: 'Closing Ceremony'
      }
    ]
    },
    {
      id: 'gu',
      title: 'Ganpat University',
      subtitle: 'Mehsana, Gujarat • 2025',
      place: '2nd Place',
      placeNumber: '02',
      description: 'Clinched 2nd place at Ganpat University Mehsana with a cutting-edge project that impressed judges across design, usability, and technical depth. A testament to teamwork, resilience, and the ability to deliver production-ready code in record time.',
      footerText: 'GU HACKATHON',
     gallery: [
      {
        src: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1776445642/Screenshot_2026-04-17_223212_gcayni.png',
        // videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        caption: 'Award Winning Moment',
        // isVideo: true
      },
      {
        src: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1776445642/Screenshot_2026-04-17_223205_s7ljhw.png',
        caption: 'Stage Pitch'
      },
      {
        src: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1776445625/Screenshot_2026-04-17_223241_v20kuu.png',
        caption: 'Coding Session'
      },
      {
        src: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1776445531/Screenshot_2026-04-17_223247_jlqiy2.png',
        caption: 'Mentorship'
      },
      {
        src: 'https://res.cloudinary.com/dq7hb3fah/image/upload/v1776445452/Screenshot_2026-04-17_223342_mitg50.png',
        caption: 'Team Celebration'
      }
    ]
    }
  ];

  return (
    <section className="py-24 bg-[#050507] relative overflow-hidden" id="hackathon-experience">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-30">
        <div className="w-[800px] h-[800px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#13111c] via-[#050507] to-transparent blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative">
           <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mb-4 tracking-tight drop-shadow-sm">
            Achievement Journey
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Building innovative solutions under intense pressure. High-performance execution resulting in award-winning technical excellence at national competitions.
          </p>
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {hackathonsData.map((hackathon, index) => (
            <HackathonCard key={hackathon.id} hackathon={hackathon} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
