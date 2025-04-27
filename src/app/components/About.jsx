'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import {
  SiFirebase,
  SiSupabase,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

export const About = () => {
  // Using react-intersection-observer instead of framer-motion's useInView
  // This has better cross-browser and mobile support
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
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
      icon: <FaNodeJs size={24} className="text-amber-400" />,
      description: "Server-side JavaScript for scalable applications",
    },
    {
      name: "MongoDB",
      icon: <FaDatabase size={24} className="text-amber-400" />,
      description: "NoSQL database for high-performance applications",
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss size={24} className="text-amber-400" />,
      description: "Utility-first CSS framework for rapid UI development",
    },
    {
      name: "Firebase",
      icon: <SiFirebase size={24} className="text-amber-400" />,
      description: "Google's platform for mobile and web applications",
    },
    {
      name: "Supabase",
      icon: <SiSupabase size={24} className="text-amber-400" />,
      description: "Open source Firebase alternative",
    },
  ];

  return (
    <section 
      ref={ref}
      className="relative bg-black px-4 sm:px-8 py-16 sm:py-24 overflow-hidden"
      id="about"
    >
      {/* Background elements - simplified to improve performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 right-0 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-gradient-to-l from-yellow-600 to-amber-400 opacity-5 blur-3xl"
        />
        <div 
          className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-r from-yellow-400 to-amber-300 opacity-5 blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mt-2 mb-4 sm:mb-6 relative inline-block"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-yellow-400 to-amber-600 text-transparent bg-clip-text">About Me</span>
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-16 sm:w-24 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : { width: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
          </motion.h2>
          
          <motion.div className="block" variants={itemVariants}>
            <div className="text-gray-400 font-medium tracking-wider text-sm uppercase">Discover my background</div>
          </motion.div>
          
          <motion.p 
            className="text-gray-300 text-base sm:text-lg leading-relaxed mt-4"
            variants={itemVariants}
          >
            Aspiring developer with experience in building modern web applications and a strong foundation in computer science. Currently pursuing a Bachelor's in Computer Science and an Applied AI course, I specialize in developing responsive, user-friendly applications using the MERN stack. My focus is on writing clean code, optimizing performance, and crafting intuitive interfaces that enhance the user experience.
          </motion.p>
        </motion.div>
        
        {/* About content - simplified grid for better mobile support */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left column - Bio */}
          <motion.div
            className="w-full lg:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-black/40 backdrop-blur-sm border border-amber-500/10 rounded-2xl p-6 sm:p-8 hover:border-amber-500/20 transition-colors duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">My Journey</h3>
              
              <div className="space-y-6">
                <div className="relative pl-8 border-l border-amber-500/30">
                  <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-amber-500 transform -translate-x-1.5"></div>
                  <h4 className="text-amber-400 font-medium">2025 - Present</h4>
                  <p className="text-white font-medium">BSCS Student & Applied AI Trainee</p>
                  <p className="text-gray-400 text-sm sm:text-base">Pursuing a Bachelor's degree in Computer Science (completed 3 semesters) and advancing skills in AI through Saylani's Applied AI program. Actively building full-stack web applications using the MERN stack.</p>
                </div>
                
                <div className="relative pl-8 border-l border-amber-500/30">
                  <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-amber-500 transform -translate-x-1.5"></div>
                  <h4 className="text-amber-400 font-medium">2022 - 2023</h4>
                  <p className="text-white font-medium">Intermediate (ICS) — Punjab College</p>
                  <p className="text-gray-400 text-sm sm:text-base">Completed Intermediate in Computer Science, building a strong foundation in programming, mathematics, and IT concepts.</p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-amber-500 transform -translate-x-1.5"></div>
                  <h4 className="text-amber-400 font-medium">2021</h4>
                  <p className="text-white font-medium">Matriculation — Aziz Fatima Educational Complex</p>
                  <p className="text-gray-400 text-sm sm:text-base">Completed secondary education with a focus on science and technology. Developed an early interest in software development and AI.</p>
                </div>
              </div>
              
              <motion.a
                href="/SheikhAhmedResume.pdf"
                download
                className="inline-block mt-6 sm:mt-8 px-5 py-2.5 rounded-lg border border-amber-500/30 text-amber-400 font-medium hover:bg-amber-500/10 transition-all duration-300 flex items-center gap-2"
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
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-black/40 backdrop-blur-sm border border-amber-500/10 rounded-2xl p-6 sm:p-8 hover:border-amber-500/20 transition-colors duration-300 relative z-10">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">My Tech Stack</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="bg-gradient-to-br from-black to-gray-900 p-0.5 rounded-xl overflow-hidden shadow-lg hover:shadow-amber-600/10 transition-shadow duration-300">
                      <div className="bg-black rounded-xl p-4 flex flex-col items-center text-center h-full">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 relative mb-3 sm:mb-4 flex items-center justify-center">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                          <div className="bg-black p-2 sm:p-3 rounded-full">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center">
                              {skill.icon}
                            </div>
                          </div>
                        </div>
                        <h4 className="text-white font-medium mb-1 sm:mb-2">{skill.name}</h4>
                        <p className="text-gray-400 text-xs sm:text-sm">{skill.description}</p>
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