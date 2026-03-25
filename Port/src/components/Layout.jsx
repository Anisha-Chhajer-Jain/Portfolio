import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CanvasBackground from './CanvasBackground';
import FloatingElements from './FloatingElements';

export default function Layout({ children }) {
  return (
    <div className="min-w-screen min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white overflow-x-hidden relative">
      <CanvasBackground />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <FloatingElements />
    </div>
  );
}
