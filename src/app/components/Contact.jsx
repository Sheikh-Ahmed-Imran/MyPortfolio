'use client'
import { FaGithub, FaTwitter, FaLinkedin, FaDribbble } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export const Contact = () => {
  const iconMap = {
    github: <FaGithub className="w-5 h-5" />,
    twitter: <FaTwitter className="w-5 h-5" />,
    linkedin: <FaLinkedin className="w-5 h-5" />,
    dribbble: <FaDribbble className="w-5 h-5" />,
  };
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeField, setActiveField] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const formRef = useRef(null);
  
  // Track mouse position for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Calculate movement for hover effects based on mouse position
  const calculateMovement = (axis, factor = 25) => {
    const bounds = formRef.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
    const center = axis === 'x' 
      ? bounds.left + bounds.width / 2 
      : bounds.top + bounds.height / 2;
    const position = axis === 'x' ? mousePosition.x : mousePosition.y;
    return (position - center) / factor;
  };
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };
  
  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      setIsSubmitting(true);
  
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formState),
        });
  
        if (response.ok) {
          setSubmitSuccess(true);
          setFormState({ name: '', email: '', message: '' });
  
          // Hide success message after 3 seconds
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 3000);
        } else {
          const data = await response.json();
          alert(data.message || 'Something went wrong. Please try again.');
        }
      } catch (error) {
        console.error(error);
        alert('Failed to send message. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  
  const contactInfo = [
    {
      icon: "email",
      title: "Email",
      value: "sheikhahmed45670@gmail.com",
      link: "mailto:sheikhahmed45670@gmail.com"
    },
    {
      icon: "phone",
      title: "Phone",
      value: "+92 3187683366",
      link: "tel:+92 3187683366"
    },
    {
      icon: "location",
      title: "Location",
      value: "Faisalabad ,PK",
      link: "https://maps.google.com/?q=San+Francisco,+CA"
    },
  ];

  // Floating particle animation
  const Particles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-amber-500/30"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.3 + 0.1
            }}
            animate={{
              y: [null, "-20%"],
              opacity: [null, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    );
  };
  
  // Icon components for contact info
  const icons = {
    email: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    phone: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    location: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-black" 
    >
      {/* Background elements */}
      <Particles />
      
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-8 relative z-10 ">
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-amber-400/80 text-lg font-medium tracking-wider uppercase mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Contact Me
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          />
          
          <motion.p 
            className="text-gray-300 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </motion.p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div 
            className="lg:w-5/12 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className="relative p-8 bg-black/40 backdrop-blur-sm rounded-2xl border border-amber-500/10 overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ 
                boxShadow: "0 0 30px rgba(255, 215, 0, 0.1)",
                borderColor: "rgba(255, 215, 0, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-amber-500/10 rounded-full blur-xl" />
              
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Contact Information</h3>
              
              <div className="space-y-6 relative z-10">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-black/50 border border-amber-500/20 text-amber-500"
                      whileHover={{ 
                        scale: 1.1, 
                        borderColor: "rgba(255, 215, 0, 0.5)",
                        backgroundColor: "rgba(0, 0, 0, 0.7)" 
                      }}
                    >
                      {icons[info.icon]}
                    </motion.div>
                    
                    <div>
                      <h4 className="text-amber-400 font-medium">{info.title}</h4>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              {/* Social media links */}
              <motion.div 
                className="flex gap-4 mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
              {['github', 'twitter', 'linkedin', 'dribbble'].map((platform, index) => (
  <motion.a 
    key={platform}
    href={`#${platform}`}
    className="flex items-center justify-center w-10 h-10 rounded-full border border-amber-500/20 text-amber-400 hover:border-amber-500/50 hover:text-amber-300 transition-colors duration-300"
    whileHover={{ scale: 1.1, rotate: 5 }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.2 + (index * 0.1), duration: 0.5 }}
  >
    <span className="sr-only">{platform}</span>
    {iconMap[platform]}
  </motion.a>
))}
              </motion.div>
            </motion.div>
            
            {/* Golden map element */}
            <motion.div
              className="relative h-64 rounded-2xl border border-amber-500/10 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ 
                borderColor: "rgba(255, 215, 0, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-10"></div>
              <div className="absolute inset-0 bg-[url('/api/placeholder/800/400')] bg-cover bg-center opacity-40"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-transparent"></div>
              
              {/* Animated map marker */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-4 h-4 bg-amber-500 rounded-full relative">
                  <div className="absolute inset-0 bg-amber-500 rounded-full animate-ping opacity-75"></div>
                </div>
              </motion.div>
              
              {/* Add a subtle gold-themed map overlay */}
              <div className="absolute inset-0 bg-grid-map opacity-10 z-10"></div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="lg:w-7/12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            ref={formRef}
          >
            <motion.div
              className="relative p-8 bg-black/40 backdrop-blur-sm rounded-2xl border border-amber-500/10 overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ 
                boxShadow: "0 0 30px rgba(255, 215, 0, 0.1)",
                borderColor: "rgba(255, 215, 0, 0.2)",
                transition: { duration: 0.3 }
              }}
              style={{
                transform: `perspective(1000px) rotateX(${calculateMovement('y')}deg) rotateY(${-calculateMovement('x')}deg)`
              }}
            >
              {/* Interactive gradient background */}
              <motion.div 
                className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-500/20 to-yellow-500/5 rounded-full blur-3xl"
                animate={{
                  x: calculateMovement('x', -2),
                  y: calculateMovement('y', -2),
                }}
                transition={{ type: "spring", damping: 50 }}
              />
              
              <motion.div 
                className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-600/10 to-yellow-500/5 rounded-full blur-3xl"
                animate={{
                  x: calculateMovement('x', 2),
                  y: calculateMovement('y', 2),
                }}
                transition={{ type: "spring", damping: 50 }}
              />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gradient-to-r from-amber-500/20 to-yellow-600/20 backdrop-blur-sm rounded-lg p-6 text-center"
                  >
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Thank You!</h4>
                    <p className="text-gray-300">Your message has been sent successfully. I'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 text-white ">
                    <div>
                      <motion.div 
                        className="relative "
                        whileTap={{ scale: 0.995 }}
                      >
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          onFocus={() => setActiveField('name')}
                          onBlur={() => setActiveField(null)}
                          placeholder="Your Name"
                          className={`w-full px-6 py-4 bg-black/30  rounded-lg border ${
                            activeField === 'name' ? 'border-amber-500/70' : errors.name ? 'border-red-500/70' : 'border-amber-500/20'
                          } focus:outline-none transition-colors duration-300 placeholder-gray-500`}
                        />
                        
                        {activeField === 'name' && (
                          <motion.div 
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-600"
                            layoutId="activeBorder"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </motion.div>
                      
                      {errors.name && (
                        <motion.p 
                          className="text-red-500 text-sm mt-1.5 ml-1"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </div>
                    
                    <div>
                      <motion.div 
                        className="relative"
                        whileTap={{ scale: 0.995 }}
                      >
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          onFocus={() => setActiveField('email')}
                          onBlur={() => setActiveField(null)}
                          placeholder="Your Email"
                          className={`w-full px-6 py-4 bg-black/30 rounded-lg border ${
                            activeField === 'email' ? 'border-amber-500/70' : errors.email ? 'border-red-500/70' : 'border-amber-500/20'
                          } focus:outline-none transition-colors duration-300 placeholder-gray-500`}
                        />
                        
                        {activeField === 'email' && (
                          <motion.div 
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-600"
                            layoutId="activeBorder"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </motion.div>
                      
                      {errors.email && (
                        <motion.p 
                          className="text-red-500 text-sm mt-1.5 ml-1"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                    
                    <div>
                      <motion.div 
                        className="relative"
                        whileTap={{ scale: 0.995 }}
                      >
                        <textarea
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          onFocus={() => setActiveField('message')}
                          onBlur={() => setActiveField(null)}
                          placeholder="Your Message"
                          rows={5}
                          className={`w-full px-6 py-4 bg-black/30 rounded-lg border ${
                            activeField === 'message' ? 'border-amber-500/70' : errors.message ? 'border-red-500/70' : 'border-amber-500/20'
                          } focus:outline-none transition-colors duration-300 resize-none placeholder-gray-500`}
                        />
                        
                        {activeField === 'message' && (
                          <motion.div 
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-600"
                            layoutId="activeBorder"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </motion.div>
                      
                      {errors.message && (
                        <motion.p 
                          className="text-red-500 text-sm mt-1.5 ml-1"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg text-black font-semibold transition-all duration-300 hover:from-amber-400 hover:to-yellow-500 disabled:opacity-70 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <motion.div 
                          className="flex items-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </motion.div>
                      ) : (
                        <motion.div className="flex items-center">
                          <span>Send Message</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Custom CSS for grid patterns */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(to right, rgba(255,215,0,0.1) 1px, transparent 1px), 
            linear-gradient(to bottom, rgba(255,215,0,0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .bg-grid-map {
          background-image: 
            linear-gradient(to right, rgba(255,215,0,0.15) 1px, transparent 1px), 
            linear-gradient(to bottom, rgba(255,215,0,0.15) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};