'use client'
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const SkillCard = ({ title, description, icon, index, progress, technologies }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      ref={cardRef}
      className="w-full md:w-1/3 px-4 mb-12"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay: 0.15 * index }}
    >
      <motion.div 
        className="relative h-full rounded-2xl group overflow-hidden"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ 
          y: -10,
          transition: { type: "spring", stiffness: 300, damping: 20 }
        }}
      >
        {/* Card background with animated gradient border */}
        <div className="absolute inset-px rounded-2xl bg-black z-10"></div>
        
        {/* Animated gradient border */}
        <motion.div 
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 opacity-60"
          animate={{
            background: isHovered 
              ? [
                  "linear-gradient(90deg, rgba(245,158,11,0.6) 0%, rgba(251,191,36,0.6) 100%)",
                  "linear-gradient(180deg, rgba(245,158,11,0.6) 0%, rgba(251,191,36,0.6) 100%)",
                  "linear-gradient(270deg, rgba(245,158,11,0.6) 0%, rgba(251,191,36,0.6) 100%)",
                  "linear-gradient(360deg, rgba(245,158,11,0.6) 0%, rgba(251,191,36,0.6) 100%)",
                  "linear-gradient(90deg, rgba(245,158,11,0.6) 0%, rgba(251,191,36,0.6) 100%)"
                ]
              : "linear-gradient(90deg, rgba(245,158,11,0.15) 0%, rgba(251,191,36,0.15) 100%)"
          }}
          transition={{
            duration: isHovered ? 3 : 0.5,
            repeat: isHovered ? Infinity : 0,
            ease: "linear"
          }}
        />
        
        {/* Card content */}
        <div className="p-8 h-full flex flex-col relative z-20">
          {/* Floating dots decoration */}
          <motion.div 
            className="absolute top-6 right-6 flex gap-1.5"
            animate={isHovered ? { y: [-2, 2, -2] } : { y: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          >
            {[...Array(3)].map((_, i) => (
              <div 
                key={i} 
                className="w-1.5 h-1.5 rounded-full bg-amber-500"
                style={{ opacity: 0.7 - (i * 0.2) }}
              />
            ))}
          </motion.div>
          
          {/* Icon with animated background */}
          <div className="w-16 h-16 mb-8 relative flex items-center justify-center">
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20"
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            />
            
            {isHovered && (
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/30 to-yellow-500/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: this, repeat: Infinity, repeatType: "loop" }}
              />
            )}
            
            <motion.div 
              className="relative text-amber-500 z-20"
              animate={isHovered ? { 
                rotate: [0, 5, 0, -5, 0],
                scale: [1, 1.1, 1]
              } : {}}
              transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
            >
              {/* Icons */}
              {icon === "frontend" && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
              {icon === "backend" && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              )}
              {icon === "database" && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              )}
              {icon === "design" && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              )}
              {icon === "mobile" && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              )}
              {icon === "deployment" && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              )}
            </motion.div>
          </div>
          
          {/* Title with animated underline on hover */}
          <div className="mb-4 relative">
            <h3 className="text-2xl font-bold text-amber-400 mb-2">{title}</h3>
            <motion.div 
              className="h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: isHovered ? "40%" : "0%" }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          {/* Description */}
          <p className="text-gray-300 mb-6 flex-grow leading-relaxed">{description}</p>
          
          {/* Technologies pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, idx) => (
              <motion.span 
                key={idx} 
                className="px-3 py-1 rounded-full text-xs bg-gray-800 text-amber-300 border border-amber-500/20"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.3, delay: 1 + (idx * 0.1) }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(245, 158, 11, 0.15)" }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
          
          {/* Progress bar */}
          <div className="mt-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-300">Proficiency</span>
              <span className="text-sm text-amber-400 font-medium">{progress}%</span>
            </div>
            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div 
                className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full relative"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${progress}%` } : { width: 0 }}
                transition={{ duration: 1.2, delay: 0.7 }}
              >
                {/* Animated shine effect */}
                <motion.div 
                  className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-yellow-200/30 to-transparent skew-x-30 -translate-x-20"
                  animate={{ x: ["0%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 1 }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const skills = [
    {
      title: "Frontend Development",
      description:
        "Expert in creating responsive and interactive user interfaces with modern technologies. Focused on performance optimization and exceptional user experiences.",
      icon: "frontend",
      progress: 80,
      technologies: ["React.js", "Next.js", "Tailwind CSS", "Shadcn", "Framer Motion"]
    },
    {
      title: "Backend Development",
      description:
        "Building robust and scalable server-side applications with modern frameworks. Experienced in microservices architecture and serverless functions.",
      icon: "backend",
      progress: 80,
      technologies: ["Node.js", "Express", "GraphQL", "RESTful APIs", "LLMs"]
    },
    {
      title: "Database Management",
      description:
        "Proficient in both SQL and NoSQL databases, with expertise in data modeling, optimization, and security implementations.",
      icon: "database",
      progress: 85,
      technologies: ["MongoDB", "Supabase", "Redis", "Prisma", "Firebase"]
    },
   
  ];

  // Background particle animation
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10
  }));

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative bg-black py-32 px-8 overflow-hidden"
    >
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-amber-500"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: 0.1 + (particle.size / 10)
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1 + (particle.size / 10), 0.2 + (particle.size / 10), 0.1 + (particle.size / 10)]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Gradient blobs */}
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-amber-600 to-yellow-500 opacity-5 blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 opacity-5 blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-24">
        
          
          <motion.h2 
            className="text-5xl font-bold mt-6 mb-6 relative inline-flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 text-transparent bg-clip-text bg-size-200 animate-bg-pan">
              My Expertise & Skills
            </span>
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="block"
          >
            <motion.span 
              className="text-amber-400/70 font-medium tracking-widest text-sm uppercase px-4 py-1.5 border border-amber-400/10 rounded-full"
              whileHover={{ backgroundColor: "rgba(251, 191, 36, 0.05)" }}
            >
              What I do best
            </motion.span>
          </motion.div>
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full mt-6"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            />
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 text-lg max-w-3xl mx-auto mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Combining technical expertise with creative problem-solving to deliver exceptional digital experiences. 
            Hover over each card to explore my capabilities in depth.
          </motion.p>
        </div>
        
        {/* Skills cards */}
        <div className="flex flex-wrap -mx-4">
          {skills.map((skill, index) => (
            <SkillCard 
              key={skill.title}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
              index={index}
              progress={skill.progress}
              technologies={skill.technologies}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            />
          ))}
        </div>
        
      
      </div>
      
      {/* Custom CSS for grid pattern and animations */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255,215,0,0.1) 1px, transparent 1px), 
            linear-gradient(to bottom, rgba(255,215,0,0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .skew-x-30 {
          transform: skewX(30deg);
        }
        .bg-size-200 {
          background-size: 200% 100%;
        }
        @keyframes bg-pan {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-bg-pan {
          animation: bg-pan 8s infinite linear;
        }
      `}</style>
    </section>
  );
};