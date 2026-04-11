import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import ParticleCanvas from '../ui/ParticleCanvas';
import CustomCursor from '../ui/CustomCursor';
import FloatingElements from '../ui/FloatingElements';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-all duration-300 overflow-hidden relative selection:bg-[var(--accent-primary)] selection:text-white">
      <CustomCursor />
      <ParticleCanvas />
      <Navigation />
      <main className="pt-20 sm:pt-24">
        <Outlet />
      </main>
      <Footer />
      <FloatingElements />
    </div>
  );
}
