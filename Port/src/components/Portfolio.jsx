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
import KisanDost from './sections/KisanDost';


export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-hidden relative">
      <ParticleCanvas />
      <Navigation scrollToSection={scrollToSection} />
      <Hero isVisible={isVisible} scrollY={scrollY} scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      <Technologies />
      <Certificates />
      <KisanDost />
      <Education />
      <Contact />
      <Footer />
      <FloatingElements />
    </div>
  );
}