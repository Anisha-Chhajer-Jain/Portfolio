import React, { useRef, useEffect } from 'react';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    const colors = [
      { r: 99, g: 102, b: 241 },
      { r: 168, g: 85, b: 247 },
      { r: 236, g: 72, b: 153 },
      { r: 6, g: 182, b: 212 },
      { r: 59, g: 130, b: 246 },
      { r: 129, g: 140, b: 248 },
    ];
    
    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 2;
    
    const handleMouseMove = (e) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const steps = Math.max(2, Math.ceil(distance / 2));
      
      for (let step = 0; step < steps; step++) {
        const progress = steps > 1 ? step / (steps - 1) : 0;
        const x = lastX + dx * progress;
        const y = lastY + dy * progress;
        
        for (let i = 0; i < 3; i++) {
          const color = colors[Math.floor(Math.random() * colors.length)];
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 2 + 0.5;
          
          particlesRef.current.push({
            x, y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 0.5,
            life: 1,
            color,
            size: Math.random() * 2 + 1
          });
        }
      }
      
      lastX = e.clientX;
      lastY = e.clientY;
    };
    
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    const animate = () => {
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current = particlesRef.current.filter(p => p.life > 0);
      
      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.vy += 0.02;
        p.life -= 0.008;
        
        const alpha = p.life * p.life;
        
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha * 0.7})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha * 0.3})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-0"
    />
  );
}