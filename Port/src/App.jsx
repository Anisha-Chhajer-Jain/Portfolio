import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './components/layout/MainLayout';
import Portfolio from './components/Portfolio';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Certificates from './components/sections/Certificates';
import KisanDost from './components/sections/KisanDost';
import ScrollToTop from './components/ui/ScrollToTop';
import FeaturedHackathon from './components/sections/FeaturedHackathon';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes key="routes">
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Portfolio />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="certificates" element={<Certificates />} />
            <Route path="hackathon" element={<FeaturedHackathon />} />
            <Route path="contact" element={<Contact />} />
            <Route path="kisandost" element={<KisanDost />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
