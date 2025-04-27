'use client'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import {
  SiFirebase,
  SiSupabase,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import { useRef } from 'react';

export const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  const skills = [
    {
      name: "NextJS",
      icon: <SiNextdotjs size={24} className="text-amber-400" />,
      description: "Building interactive UIs with reusable components",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs size={30} color="#FFD700" />,
      description: "Server-side JavaScript for scalable applications",
    },
    {
      name: "MongoDB",
      icon: <FaDatabase size={30} color="#FFD700" />,
      description: "NoSQL database for high-performance applications",
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss size={24} className="text-amber-400" />,
      description: "Markup language for web page structure",
    },
    {
      name: "Firebase",
      icon: <SiFirebase size={24} className="text-amber-400" />,
      description: "Styling web pages with modern layouts",
    },
    {
      name: "Supabase",
      icon: <SiSupabase size={24} className="text-amber-400" />,
      description: "Programming language of the web",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-black px-8 py-24 overflow-hidden"
      id="about"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-gradient-to-l from-yellow-600 to-amber-400 opacity-5 blur-3xl"
          initial={{ x: 200 }}
          animate={isInView ? { x: 0 } : { x: 200 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gradient-to-r from-yellow-400 to-amber-300 opacity-5 blur-3xl"
          initial={{ x: -100 }}
          animate={isInView ? { x: 0 } : { x: -100 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
        
          
          <motion.h2 
            className="text-4xl font-bold mt-2 mb-6 relative inline-block"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-yellow-400 to-amber-600 text-transparent bg-clip-text">About Me</span>
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            />
          </motion.h2>
          <motion.div className="block" variants={itemVariants}>
            <div className="text-gray-400 font-medium tracking-wider text-sm uppercase">Discover my background</div>
          </motion.div>
          
          <motion.p 
            className="text-gray-300 text-lg leading-relaxed"
            variants={itemVariants}
          >
          Aspiring developer with experience in building modern web applications and a strong foundation in computer science. Currently pursuing a Bachelor's in Computer Science and an Applied AI course, I specialize in developing responsive, user-friendly applications using the MERN stack. My focus is on writing clean code, optimizing performance, and crafting intuitive interfaces that enhance the user experience.
          </motion.p>
        </motion.div>
        
        {/* About content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column - Bio */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-black/40 backdrop-blur-sm border border-amber-500/10 rounded-2xl p-8 hover:border-amber-500/20 transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">My Journey</h3>
              
              <div className="space-y-6">
                <div className="relative pl-8 border-l border-amber-500/30">
                  <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-amber-500 transform -translate-x-1.5"></div>
                  <h4 className="text-amber-400 font-medium">2025 - Present</h4>
                  <p className="text-white font-medium">BSCS Student & Applied AI Trainee</p>
                  <p className="text-gray-400">Pursuing a Bachelor's degree in Computer Science (completed 3 semesters) and advancing skills in AI through Saylani's Applied AI program. Actively building full-stack web applications using the MERN stack.</p>
                </div>
                
                <div className="relative pl-8 border-l border-amber-500/30">
                  <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-amber-500 transform -translate-x-1.5"></div>
                  <h4 className="text-amber-400 font-medium">2022 - 2023</h4>
                  <p className="text-white font-medium">Intermediate (ICS) — Punjab College</p>
                  <p className="text-gray-400">Completed Intermediate in Computer Science, building a strong foundation in programming, mathematics, and IT concepts.</p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-amber-500 transform -translate-x-1.5"></div>
                  <h4 className="text-amber-400 font-medium">2021</h4>
                  <p className="text-white font-medium">Matriculation — Aziz Fatima Educational Complex</p>
                  <p className="text-gray-400">Completed secondary education with a focus on science and technology. Developed an early interest in software development and AI.</p>
                </div>
              </div>
              
              <motion.a
  href="/SheikhAhmedResume.pdf"  // <-- point to your file inside /public
  download  // <-- this makes it download instead of just open
  className="mt-8 px-6 py-3 rounded-lg border border-amber-500/30 text-amber-400 font-medium hover:bg-amber-500/10 transition-all duration-300 flex items-center gap-2"
  whileHover={{ scale: 1.03, x: 5 }}
  whileTap={{ scale: 0.98 }}
>
  View Full Resume
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</motion.a>

            </div>
          </motion.div>
          
          {/* Right column - Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Decorative element */}
            <motion.div 
              className="absolute -top-10 -right-10 w-40 h-40 border-t border-r border-amber-500/10 rounded-tr-3xl"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            
            <motion.div 
              className="absolute -bottom-10 -left-10 w-40 h-40 border-b border-l border-amber-500/10 rounded-bl-3xl"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            
            <div className="bg-black/40 backdrop-blur-sm border border-amber-500/10 rounded-2xl p-8 hover:border-amber-500/20 transition-colors duration-300 relative z-10">
              <h3 className="text-2xl font-semibold text-white mb-8">My Tech Stack</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="group"
        >
          <div className="bg-gradient-to-br from-black to-gray-900 p-0.5 rounded-xl overflow-hidden shadow-lg hover:shadow-amber-600/10 transition-shadow duration-300">
            <div className="bg-black rounded-xl p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 relative mb-4 flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="bg-black p-3 rounded-full">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                    {skill.icon}
                  </div>
                </div>
              </div>
              <h4 className="text-white font-medium mb-2">{skill.name}</h4>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
              </div>
            </div>
          </motion.div>
        </div>
        
      
      </div>
    </section>
  );
};