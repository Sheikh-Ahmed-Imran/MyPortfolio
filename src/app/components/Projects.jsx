'use client'
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef } from 'react';

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  videoUrl,
  technologies = ['React', 'Node.js', 'MongoDB'],
  github = "#",
  liveDemo = "#"
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handleVideoToggle = () => {
    setShowVideo((prev) => {
      // Pause video when closing modal
      if (prev && videoRef.current) {
        videoRef.current.pause();
      }
      return !prev;
    });
  };

  return (
    <motion.div 
      className="w-full md:w-1/2 lg:w-1/3 p-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div 
        className="h-full overflow-hidden rounded-xl bg-black/40 backdrop-blur-sm border border-amber-500/10 hover:border-amber-500/30 transition-all duration-300"
        whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(255, 215, 0, 0.1)" }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Image Container with Overlay */}
        <div className="relative overflow-hidden group">
          <motion.div 
            className="w-full h-64 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="w-full h-full object-contain transition-transform duration-700"
            />
          </motion.div>
          
          {/* Overlay with technologies */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-end p-6 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          {/* Featured Badge (optional) */}
          <div className="absolute top-4 right-4">
            <motion.div 
              className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black text-xs font-semibold px-3 py-1 rounded-full"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              Featured
            </motion.div>
          </div>
        </div>
      
        {/* Content */}
        <div className="p-6">
          <motion.h3 
            className="text-xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 text-transparent bg-clip-text"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-300 mt-3 leading-relaxed text-sm"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {description}
          </motion.p>
          
          {/* Links with hover effects */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex space-x-4">
              <motion.a 
                href={github}
                className="flex items-center text-amber-400 hover:text-amber-300 transition-colors duration-300"
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </motion.a>
              
              <motion.button
                onClick={handleVideoToggle}
                className="flex items-center text-amber-400 hover:text-amber-300 transition-colors duration-300 cursor-pointer"
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                <span>Watch Demo</span>
              </motion.button>
            </div>
            
            <motion.button
              className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center border border-amber-500/20 hover:border-amber-500/60 transition-colors duration-300"
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </motion.button>
          </div>
        </div>
        
        {/* Bottom gradient bar */}
        <motion.div 
          className="h-1 bg-gradient-to-r from-amber-500 to-yellow-400"
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "30%" }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* Cinematic Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Blurred Background */}
            <motion.div 
              className="absolute inset-0 bg-black/80" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ backdropFilter: 'blur(10px)' }}
              onClick={handleVideoToggle}
            />
            
            {/* Video Container */}
            <motion.div 
              className="relative w-full max-w-5xl mx-4 z-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 25 
              }}
            >
              {/* Project Title */}
              <motion.div 
                className="absolute -top-12 left-0 right-0"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-center text-2xl font-bold text-amber-400">{title} - Demo</h3>
              </motion.div>
              
              {/* Video Player with Styled Controls */}
              <div className="rounded-xl overflow-hidden shadow-2xl border border-amber-500/20">
                <video 
                  ref={videoRef}
                  className="w-full max-h-[75vh] bg-black"
                  controls
                  autoPlay
                >
                  <source src={videoUrl || liveDemo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Close Button */}
              <motion.button
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 hover:bg-amber-500/20 transition-all duration-300"
                onClick={handleVideoToggle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </motion.button>
              
              {/* Project Technologies Badge Bar */}
              <motion.div 
                className="absolute -bottom-12 left-0 right-0 flex justify-center flex-wrap gap-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Projects = () => {
  const projects = [
    {
      title: "Tayyar Ho",
      description:
        "TayyarHo is a web application designed to help individuals prepare for job interviews through AI-driven simulations. Users will input their job preferences, such as desired role (e.g., Node.js Developer with 2 years of experience). Based on this data, the system will generate relevant interview questions using AI. The user will then undergo a simulated interview via webcam and speech recognition. AI will analyze the user's responses, assess performance, provide a rating, and generate personalized feedback to enhance interview readiness.",
      image: "/images/TayyarHo.PNG",
      videoUrl: "/videos/TayyarHo.mp4",
      github: "https://github.com/Sheikh-Ahmed-Imran/TayyarHo",
      technologies: ["NextJS", "NodeJS", "MongoDB", "Gemini", "TailwindCSS"],
    },
    {
      title: "Code Muqabla",
      description: "CodeMuqabla is a web application designed for students to participate in coding competitions. The platform allows users to create competitions where different students can join and solve coding challenges. Competition organizers will leverage an AI-based judge to evaluate all submissions and determine winners efficiently. A user can track his performance and join multiple competitions. CodeMuqabla aims to foster a competitive coding environment while ensuring fairness and accuracy in evaluation through automated assessment.",
      image: "/images/CodeMuqabla.PNG",
      videoUrl: "/videos/CodeMuqabla.mp4",
      github: "https://github.com/Sheikh-Ahmed-Imran/CodeMuqabla",
      technologies: ["Next.js", "Gemini", "FramerMotion", "Supabase"]
    },
    {
      title: "TasteBuds",
      description: "TasteBuds is a modern SaaS web application built on the MERN stack, designed to bridge the gap between restaurants and their customers. It delivers a seamless, dual-interface platform—one side crafted for front-end users to explore menus, build orders, and complete payments effortlessly via Stripe, while the other empowers restaurant kitchens to manage food items, set pricing, monitor real-time incoming orders, and update order statuses efficiently. TasteBuds enhances operational workflow and elevates the dining experience through smart automation and intuitive design.",
      image: "/images/TasteBuds.PNG", 
      videoUrl: "/videos/TasteBuds.mp4",
      github: "https://github.com/Sheikh-Ahmed-Imran/Restaurant-Management-System",
      technologies: ["ReactJS", "NodeJS", "Stripe", "MongoDB"]
    },
    {
      title: "Type Racer",
      description:
        "TypeRacer is a real-time multiplayer typing game where players compete by typing the same paragraph as fast and accurately as possible. Built with Next.js, TailwindCSS, Redis, Socket.IO, and Framer Motion, it offers seamless room creation, live user updates, customizable race settings, and an animated leaderboard showcasing each player's speed, WPM, and accuracy through interactive stats and graphs",
      image: "/images/TypeRacer.PNG",
      videoUrl: "/videos/TyperRacer.mp4",
      github: "https://github.com/Sheikh-Ahmed-Imran/TypeRacer",
      technologies: ["NextJS", "SocketIO", "Redis", "FramerMotion", ],
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-10 overflow-hidden bg-black"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
      </div>
      
      {/* Section content */}
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold inline-block bg-gradient-to-r from-amber-400 to-yellow-300 text-transparent bg-clip-text mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          />
          
          <motion.p 
            className="text-gray-300 max-w-xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Explore my latest work showcasing a blend of technical expertise and creative problem-solving
          </motion.p>
        </motion.div>
        
        {/* Project Grid */}
        <div className="flex flex-wrap -mx-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              videoUrl={project.videoUrl}
              technologies={project.technologies}
              github={project.github}
            />
          ))}
        </div>
        
        {/* View all projects button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="px-8 py-4 rounded-lg border border-amber-500/30 text-amber-400 font-semibold hover:bg-amber-500/10 transition-all duration-300 flex items-center mx-auto gap-2"
            whileHover={{ scale: 1.05, borderColor: 'rgba(245, 158, 11, 0.5)' }}
            
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};