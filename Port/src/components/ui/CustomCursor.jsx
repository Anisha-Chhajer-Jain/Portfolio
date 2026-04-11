import React, { useEffect } from 'react';
import { useMotionValue, useSpring, motion } from 'framer-motion';

const CustomCursor = () => {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Smooth spring follow
  const springX = useSpring(mouseX, { damping: 28, stiffness: 120, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 120, mass: 0.5 });

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .glow-cursor { display: none !important; }
        }
      `}</style>

      {/* Clean dot — snaps to pointer, very subtle glow */}
      <motion.div
        className="glow-cursor fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-white"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: 13,
          height: 13,
          boxShadow: '0 0 8px 2px rgba(255,255,255,0.2)',
        }}
      />
    </>
  );
};

export default CustomCursor;
