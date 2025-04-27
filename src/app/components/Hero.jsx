'use client'
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const Hero = ({width}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isBrowser, setIsBrowser] = useState(false);  // Flag to check if the code is running in the browser

  // This useEffect will run only once when the component is mounted on the client-side
  useEffect(() => {
    setIsBrowser(true);  // Set isBrowser to true when component is mounted
  }, []);

  useEffect(() => {
    if (!isBrowser) return; // Skip if we're not in the browser

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isBrowser]);

  const calculateMovement = (axis, factor = 15) => {
    if (!isBrowser) return 0; // Return 0 if it's not in the browser

    const center = axis === 'x' ? window.innerWidth / 2 : window.innerHeight / 2;
    const position = axis === 'x' ? mousePosition.x : mousePosition.y;
    return (position - center) / factor;
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen bg-black overflow-hidden px-8 py-16 flex items-center "
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden ">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-yellow-600 to-amber-400 opacity-10 blur-3xl"
          animate={{
            x: calculateMovement('x', -20),
            y: calculateMovement('y', -20),
          }}
          transition={{ type: 'spring', damping: 50 }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-r from-yellow-400 to-amber-300 opacity-10 blur-3xl"
          animate={{
            x: calculateMovement('x', 20),
            y: calculateMovement('y', 20),
          }}
          transition={{ type: 'spring', damping: 50 }}
        />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto z-10 mt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left content section */}
          <motion.div 
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <motion.div 
                className="inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="text-gray-400 font-medium tracking-wider text-lg uppercase">Welcome to my portfolio</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                Hi, I'm <span className="bg-gradient-to-r from-yellow-400 to-amber-600 text-transparent bg-clip-text">Sheikh Ahmed</span>
              </motion.h1>
              
              <motion.div
                className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 128 }}
                transition={{ delay: 0.8, duration: 0.7 }}
              />
              
              <motion.p 
                className="text-xl text-gray-300 mt-6 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.7 }}
              >
                A passionate MERN Stack & Next.js Developer crafting elegant, high-performance web experiences.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              {['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Supabase'].map((skill, index) => (
                <motion.span 
                  key={skill}
                  className="px-6 py-3 rounded-full text-amber-400 bg-black bg-opacity-40 border border-amber-400/30 flex items-center justify-center hover:border-amber-400/60 transition-colors duration-300"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(245, 158, 11, 0.1)' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + (index * 0.1), duration: 0.5 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.7 }}
            >
              <motion.button 
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-semibold flex items-center gap-2 hover:from-yellow-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-600/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
              
              <motion.button 
                className="px-8 py-4 rounded-lg border border-amber-500/30 text-amber-400 font-semibold hover:bg-amber-500/10 transition-all duration-300"
                whileHover={{ scale: 1.05, borderColor: 'rgba(245, 158, 11, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.button>
            </motion.div>
            
      
          </motion.div>
          
          {/* Right profile image section with animated elements - FIXED */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative elements - moved to higher z-index */}
              <motion.div 
                className="absolute -top-8 -left-8 w-64 h-64 rounded-full border border-amber-500/20 z-10"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
              
              <motion.div 
                className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full border border-amber-500/20 z-10"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
              />
              
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-gradient-to-r from-amber-600/20 to-yellow-500/20 blur-xl z-0"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.7 }}
                transition={{ delay: 0.9, duration: 1 }}
              />
              
              {/* Main profile image container - reduced size */}
              <motion.div 
                className="relative z-20 bg-gradient-to-br from-amber-500 to-amber-700 p-1 rounded-2xl overflow-hidden max-w-sm mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-black/90 rounded-2xl overflow-hidden">
                  {/* Image placeholder - modified to not be square but maintain aspect ratio */}
                  <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden bg-gray-900 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-amber-500 opacity-20 text-9xl font-bold">SA</div>
                    <motion.img 
                      src="/images/img1.jpg" 
                      alt="Sheikh Ahmed - MERN Stack Developer" 
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Floating badges - moved to higher z-index and adjusted position */}
              <motion.div 
                className="absolute top-5 -right-6 bg-black border border-amber-500/30 px-4 py-2 rounded-full shadow-lg z-30"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <span className="text-amber-500 font-medium">Backend</span>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-6 bg-black border border-amber-500/30 px-4 py-2 rounded-full shadow-lg z-30"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.7, duration: 0.5 }}
                whileHover={{ y: 5 }}
              >
                <span className="text-amber-500 font-medium">Frontend</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.7 }}
      >
        <span className="text-gray-500 text-sm mb-2">Scroll Down</span>
        <motion.div 
          className="w-6 h-10 rounded-full border border-gray-700 flex items-center justify-center"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-amber-500"
            animate={{ 
              y: [0, 4, 0],
              opacity: [1, 0.5, 1]
            }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
      
      {/* Custom CSS for grid pattern */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255,215,0,0.1) 1px, transparent 1px), 
            linear-gradient(to bottom, rgba(255,215,0,0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};