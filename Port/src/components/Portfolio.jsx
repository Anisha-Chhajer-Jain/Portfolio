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

  return (
    <>
      <Hero isVisible={isVisible} scrollY={scrollY} />
      <About />
      <Skills />
      <Projects />
      <Technologies />
      <Certificates />
      <KisanDost />
      <Education />
      <Contact />
    </>
  );
}