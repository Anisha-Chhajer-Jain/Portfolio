import React, { useState, useEffect, useRef } from 'react';
import { Trophy, Play, ChevronLeft, ChevronRight, PlayCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const hackathonsData = [
  {
    id: 'su',
    title: 'Sangam University',
    subtitle: 'Bhilwara, Rajasthan • 2025',
    place: '1st Place',
    placeNumber: '01',
    description: 'Secured 1st place by building a scalable full-stack solution under intense time pressure — demonstrating rapid architecture, domain collaboration & compelling pitching.',
    badge: 'OFFLINE HACKATHON - WINNER',
    themeColor: 'amber',
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
    description: 'Clinched 2nd at Ganpat University with a project that impressed judges across design, usability & technical depth — a showcase of teamwork and production-ready code delivery.',
    badge: 'OFFLINE HACKATHON - WINNER',
    themeColor: 'indigo',
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

export default function HackathonPopup({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('su');
  const [[page, direction], setPage] = useState([0, 0]);
  
  const activeData = hackathonsData.find(h => h.id === activeTab);
  const currentSlide = ((page % activeData.gallery.length) + activeData.gallery.length) % activeData.gallery.length;

  useEffect(() => {
    // Reset carousel when tab changes
    setPage([0, 0]);
  }, [activeTab]);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setPage(prev => [prev[0] + 1, 1]);
    }, 3000);
    return () => clearInterval(timer);
  }, [isOpen, activeData.gallery.length]);

  if (!isOpen) return null;

  const handleTabSwitch = (id) => {
    if (activeTab !== id) {
      setActiveTab(id);
    }
  };

  const handleThumbnailClick = (idx) => {
    if (idx !== currentSlide) {
      setPage([idx, idx > currentSlide ? 1 : -1]);
    }
  };

  const isGu = activeTab === 'gu';
  const themeAccent = isGu ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10' : 'border-amber-500 text-amber-500 bg-amber-500/10';
  const themeDot = isGu ? 'bg-indigo-400' : 'bg-amber-400';
  const themeText = isGu ? 'text-indigo-500' : 'text-amber-500';

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98
    })
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative w-full max-w-6xl bg-[#0a0a0c] border border-white/10 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row my-auto"
        style={{ minHeight: '600px' }}
      >
        {/* Left Side: Carousel */}
        <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col relative z-10 bg-black/40">
          <div className="relative flex-1 rounded-2xl overflow-hidden aspect-[4/3] bg-black border border-white/5 group">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                className="absolute inset-0 w-full h-full"
              >
                {activeData.gallery[currentSlide].isVideo ? (
                  <>
                    <div className="absolute top-4 left-4 bg-blue-500/90 hover:bg-blue-600 transition-colors cursor-pointer text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 z-20 shadow-lg backdrop-blur-sm">
                      <Play size={12} fill="currentColor" />
                      MEMORY VIDEO
                    </div>
                    <video 
                      src={activeData.gallery[currentSlide].videoUrl} 
                      autoPlay loop muted playsInline
                      className="w-full h-full object-cover"
                    />
                  </>
                ) : (
                  <img 
                    src={activeData.gallery[currentSlide].src} 
                    alt={activeData.gallery[currentSlide].caption}
                    className="w-full h-full object-cover"
                  />
                )}
              </motion.div>
            </AnimatePresence>

            {/* Slide Index Badge */}
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white/80 z-20">
              {currentSlide + 1} / {activeData.gallery.length}
            </div>
          </div>

          <p className={`text-center font-bold text-sm tracking-wide mt-4 mb-3 ${themeText}`}>
            {activeData.gallery[currentSlide].caption}
          </p>

          <div className="flex justify-center gap-2 relative z-10 w-full overflow-x-auto pb-1 mt-auto">
            {activeData.gallery.map((item, idx) => (
              <button 
                key={idx}
                onClick={() => handleThumbnailClick(idx)}
                className={`relative flex-shrink-0 w-14 h-10 rounded-lg overflow-hidden border transition-all duration-300 ${currentSlide === idx ? `border-white scale-105 shadow-lg z-10 opacity-100` : 'border-transparent opacity-40 hover:opacity-80'}`}
              >
                <img src={item.src} alt="thumbnail" className="w-full h-full object-cover" />
                {item.isVideo && (
                   <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                     {currentSlide === idx ? (
                        <div className="bg-blue-600 px-2 py-0.5 rounded text-[8px] font-bold text-white uppercase shadow-lg">PLAY</div>
                     ) : (
                        <PlayCircle size={14} className="text-white/80" fill="currentColor" />
                     )}
                   </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-12 flex flex-col relative">
          {/* Close button */}
          <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors z-20">
            <X size={16} />
          </button>

          {/* Tabs */}
          <div className="flex items-center gap-2 mb-10 w-full pr-8">
            <button 
              onClick={() => handleTabSwitch('su')}
              className={`flex-1 py-3 text-xs font-bold tracking-widest uppercase rounded-xl border transition-all ${!isGu ? 'border-amber-600/50 text-amber-500 bg-amber-500/5' : 'border-white/5 text-slate-500 bg-transparent hover:bg-white/5 hover:text-slate-300'}`}
            >
              SU HACKATHON
            </button>
            <button 
              onClick={() => handleTabSwitch('gu')}
              className={`flex-1 py-3 text-xs font-bold tracking-widest uppercase rounded-xl border transition-all ${isGu ? 'border-indigo-600/50 text-indigo-400 bg-indigo-500/5' : 'border-white/5 text-slate-500 bg-transparent hover:bg-white/5 hover:text-slate-300'}`}
            >
              GU HACKATHON
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            {/* Badge */}
            <div className={`flex items-center gap-2 mb-6 rounded-full px-4 py-1.5 w-fit border border-white/5 ${themeAccent}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${themeDot} animate-pulse`} />
              <span className="text-[10px] font-bold tracking-widest uppercase">
                {activeData.badge}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
              {activeData.title}
            </h2>
            <p className="text-slate-500 text-sm font-medium tracking-wide mb-8">
              {activeData.subtitle}
            </p>

            <div className="flex items-center gap-3 mb-6">
              <Trophy size={28} className={themeText} style={{ filter: isGu ? 'drop-shadow(0px 0px 8px #6366f1)' : 'drop-shadow(0px 0px 8px #f59e0b)' }} />
              <div>
                <span className="text-white font-black text-xl leading-none block">{activeData.place}</span>
                <span className="text-slate-500 text-xs mt-1 block">Offline Hackathon</span>
              </div>
            </div>

            <p className="text-slate-300/80 leading-relaxed font-medium">
              {activeData.description}
            </p>
          </div>

          {/* Action Button */}
          <button onClick={onClose} className="mt-8 py-4 w-full rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/5 text-white text-xs font-bold tracking-[0.2em] transition-all flex items-center justify-center gap-3 group">
            CONTINUE TO PORTFOLIO
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
