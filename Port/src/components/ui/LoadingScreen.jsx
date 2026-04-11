import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Floating particle component
const Particle = ({ delay, x, y, size }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size,
      background: `radial-gradient(circle, rgba(168,85,247,0.8), rgba(99,102,241,0.3))`,
      boxShadow: `0 0 ${size * 2}px rgba(168,85,247,0.4)`,
    }}
    initial={{ opacity: 0, scale: 0, y: 0 }}
    animate={{
      opacity: [0, 0.8, 0],
      scale: [0, 1, 0.5],
      y: [0, -80, -160],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 2,
      ease: 'easeOut',
    }}
  />
);

// Ring pulse component
const RingPulse = ({ delay, size }) => (
  <motion.div
    className="absolute rounded-full border border-purple-500/20 pointer-events-none"
    style={{
      width: size,
      height: size,
      left: '50%',
      top: '50%',
      translateX: '-50%',
      translateY: '-50%',
    }}
    initial={{ scale: 0.5, opacity: 0.6 }}
    animate={{ scale: 2.5, opacity: 0 }}
    transition={{
      duration: 2.5,
      delay,
      repeat: Infinity,
      ease: 'easeOut',
    }}
  />
);

const LETTERS = ['A', 'n', 'i', 's', 'h', 'a'];
// Delay between each letter appearing (seconds)
const LETTER_INTERVAL = 0.20;

const LoadingScreen = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [shimmer, setShimmer] = useState(false);

  // Typewriter: reveal one letter at a time
  useEffect(() => {
    if (visibleCount < LETTERS.length) {
      const t = setTimeout(() => setVisibleCount(v => v + 1), LETTER_INTERVAL * 1000);
      return () => clearTimeout(t);
    } else {
      // Once fully written, trigger shimmer
      const t = setTimeout(() => setShimmer(true), 300);
      return () => clearTimeout(t);
    }
  }, [visibleCount]);

  // Blinking cursor
  useEffect(() => {
    const t = setInterval(() => setCursorVisible(v => !v), 530);
    return () => clearInterval(t);
  }, []);

  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    delay: i * 0.18,
    x: Math.random() * 100,
    y: 40 + Math.random() * 40,
    size: 3 + Math.random() * 6,
  }));

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#020617' }}
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        filter: 'blur(12px)',
        transition: { duration: 0.9, ease: 'easeInOut' },
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kolker+Brush&display=swap');

        .signature-font {
          font-family: 'Kolker Brush', cursive;
        }

        .shimmer-text {
          background: linear-gradient(
            105deg,
            rgba(168,85,247,0.7) 0%,
            rgba(255,255,255,1) 30%,
            rgba(99,102,241,0.7) 50%,
            rgba(255,255,255,1) 70%,
            rgba(168,85,247,0.7) 100%
          );
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerMove 2.5s linear infinite;
        }

        @keyframes shimmerMove {
          0%   { background-position: 200% center; }
          100% { background-position: -200% center; }
        }

        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }

        .float-anim {
          animation: floatY 4s ease-in-out infinite;
        }

        .cursor-blink {
          display: inline-block;
          width: 3px;
          height: 0.75em;
          background: linear-gradient(to bottom, #c084fc, #818cf8);
          border-radius: 2px;
          margin-left: 4px;
          vertical-align: middle;
          box-shadow: 0 0 10px rgba(192, 132, 252, 0.8);
        }
      `}</style>

      {/* Background radial glow blobs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
          top: '50%', left: '50%',
          translateX: '-50%', translateY: '-50%',
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
          top: '50%', left: '50%',
          translateX: '-50%', translateY: '-50%',
        }}
        animate={{ scale: [1.2, 0.9, 1.2], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Ring pulses */}
      <RingPulse delay={0} size={200} />
      <RingPulse delay={0.8} size={300} />
      <RingPulse delay={1.6} size={400} />

      {/* Floating particles */}
      {particles.map(p => (
        <Particle key={p.id} delay={p.delay} x={p.x} y={p.y} size={p.size} />
      ))}

      {/* Main content */}
      <div className="relative flex flex-col items-center">

        {/* Live-writing name */}
        <motion.div
          className={`float-anim relative ${shimmer ? '' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Glow behind the name */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              filter: 'blur(40px)',
              background: 'radial-gradient(ellipse, rgba(168,85,247,0.35), transparent 70%)',
            }}
          />

          {/* Letter by letter */}
          <div className="signature-font relative z-10 flex items-end" style={{ fontSize: 'clamp(72px, 14vw, 140px)', lineHeight: 1.1 }}>
            {LETTERS.map((char, i) => (
              <AnimatePresence key={i}>
                {i < visibleCount && (
                  <motion.span
                    key={`letter-${i}`}
                    initial={{ opacity: 0, x: -18, scaleX: 0.4, filter: 'blur(4px)', transformOrigin: 'left center' }}
                    animate={{ opacity: 1, x: 0, scaleX: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.22, ease: [0.2, 0.8, 0.4, 1] }}
                    className={shimmer ? 'shimmer-text' : ''}
                    style={
                      !shimmer
                        ? {
                            background: 'linear-gradient(135deg, #c084fc, #ffffff, #818cf8)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            textShadow: 'none',
                          }
                        : {}
                    }
                  >
                    {char}
                  </motion.span>
                )}
              </AnimatePresence>
            ))}

            {/* Blinking cursor — hide after writing is done */}
            {!shimmer && (
              <span
                className="cursor-blink"
                style={{ opacity: cursorVisible ? 1 : 0, transition: 'opacity 0.1s' }}
              />
            )}
          </div>
        </motion.div>

        {/* Decorative line — appears after name is fully written */}
        <AnimatePresence>
          {shimmer && (
            <motion.div
              className="mt-3 relative overflow-hidden rounded-full"
              style={{ height: 2 }}
              initial={{ width: 0 }}
              animate={{ width: 220 }}
              transition={{ duration: 1.0, ease: 'easeOut' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500" />
              <motion.div
                className="absolute inset-0 bg-white/60"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.5 }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tagline */}
        <AnimatePresence>
          {shimmer && (
            <motion.p
              className="mt-5 text-center text-purple-300/50 text-[11px] tracking-[0.45em] uppercase font-light"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Portfolio · Loading
            </motion.p>
          )}
        </AnimatePresence>

        {/* Dot loader */}
        <AnimatePresence>
          {shimmer && (
            <motion.div
              className="mt-6 flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-purple-400"
                  animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
