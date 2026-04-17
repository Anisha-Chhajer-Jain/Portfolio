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
import Leetcode from './components/sections/Leetcode';
import ScrollToTop from './components/ui/ScrollToTop';
import Hackathons from './components/sections/Hackathons';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes key="routes">
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Portfolio />} />
            <Route path="about" element={<Portfolio />} />
            <Route path="projects" element={<Portfolio />} />
            <Route path="education" element={<Portfolio />} />
            <Route path="skills" element={<Portfolio />} />
            <Route path="leetcode" element={<Portfolio />} />
            <Route path="certificates" element={<Portfolio />} />
            <Route path="achievement" element={<Portfolio />} />
            <Route path="contact" element={<Portfolio />} />
            <Route path="kisandost" element={<KisanDost />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
