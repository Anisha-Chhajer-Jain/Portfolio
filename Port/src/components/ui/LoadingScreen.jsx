import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3500);

        const counterInterval = setInterval(() => {
            setCounter(prev => {
                if (prev >= 100) {
                    clearInterval(counterInterval);
                    return 100;
                }
                const diff = 100 - prev;
                const step = Math.max(1, Math.floor(diff / 8));
                return prev + step;
            });
        }, 120);

        return () => {
            clearTimeout(timer);
            clearInterval(counterInterval);
        };
    }, []);

    const firstName = "ANISHA".split("");
    const lastName = "CHHAJER".split("");

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { y: "100%", opacity: 0, skewY: 7 },
        show: { 
            y: 0, 
            opacity: 1, 
            skewY: 0,
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1]
            }
        },
    };

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
                    exit={{
                        clipPath: "inset(0 0 100% 0)",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                >
                    {/* Background Grid */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" 
                         style={{ 
                             backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                             backgroundSize: '80px 80px' 
                         }} 
                    />

                    <div className="relative w-full flex flex-col items-center justify-center px-4 overflow-hidden">
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className="flex flex-col items-center w-full"
                        >
                            <div className="flex justify-center w-full gap-x-[1vw] overflow-hidden">
                                {firstName.map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={item}
                                        className="text-[18vw] md:text-[15vw] font-[900] leading-[0.8] text-white tracking-tighter uppercase select-none inline-block whitespace-nowrap"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </div>
                            <div className="flex justify-center w-full gap-x-[1vw] overflow-hidden">
                                {lastName.map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={item}
                                        className="text-[18vw] md:text-[15vw] font-[900] leading-[0.8] text-white tracking-tighter uppercase select-none inline-block whitespace-nowrap"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-12 left-0 w-full px-8 md:px-16 flex justify-between items-end">
                        <div className="flex flex-col gap-2">
                            <span className="text-white/40 text-[10px] md:text-xs tracking-[0.3em] uppercase font-light">
                                Available for opportunities
                            </span>
                            <div className="w-32 md:w-64 h-[1px] bg-white/10 relative overflow-hidden">
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "0%" }}
                                    transition={{ duration: 3.2, ease: "easeInOut" }}
                                    className="absolute top-0 left-0 w-full h-full bg-white"
                                />
                            </div>
                            <span className="text-white/60 text-[10px] md:text-xs tracking-[0.3em] uppercase font-medium">
                                FULL STACK DEVELOPER
                            </span>
                        </div>
                        
                        <div className="flex flex-col items-end">
                            <span className="text-white font-mono text-4xl md:text-6xl font-bold">
                                {counter}%
                            </span>
                            <span className="text-white/40 text-[10px] tracking-widest uppercase mt-2">
                                Loading...
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
