import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';
import Layout from './components/Layout';
import useScroll from './hooks/useScroll';

export default function Portfolio() {
  const { isVisible, scrollY } = useScroll();

  return (
    <Layout>
      <Hero isVisible={isVisible} scrollY={scrollY} />
      <About scrollY={scrollY} />
      <Skills />
      <Projects />
      <Technologies />
      <Certificates />
      <Education />
      <Contact />
    </Layout>
  );
}