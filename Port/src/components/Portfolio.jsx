import React, { useState, useEffect } from 'react';
import ParticleCanvas from './ui/ParticleCanvas';
import Navigation from './layout/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Technologies from './sections/Technologies';
import Certificates from './sections/Certificates';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './layout/Footer';
import FloatingElements from './ui/FloatingElements';
import Hackathons from './sections/Hackathons';
import Leetcode from './sections/Leetcode';
import HackathonPopup from './sections/HackathonPopup';


import { useLocation } from 'react-router-dom';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showHackathonPopup, setShowHackathonPopup] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle section scrolling based on path
  useEffect(() => {
    const path = location.pathname.replace('/', '');
    if (path) {
      // Map routes to IDs
      const routeToId = {
        'about': 'about',
        'projects': 'projects',
        'skills': 'skills',
        'certificates': 'certificates',
        'achievement': 'hackathon-experience',
        'leetcode': 'coding-profiles',
        'contact': 'contact'
      };
      
      const targetId = routeToId[path] || path;
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // If at root, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <>
      <HackathonPopup isOpen={showHackathonPopup} onClose={() => setShowHackathonPopup(false)} />
      <Hero isVisible={isVisible} scrollY={scrollY} />
      <About />
      <Skills />
      <Projects />
      <Technologies />
      <Certificates />
      <Hackathons />
      <Leetcode />
      <Education />
      <Contact />
    </>
  );
}