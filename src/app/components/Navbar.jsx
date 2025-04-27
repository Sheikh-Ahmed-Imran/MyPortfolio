'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)
  const { scrollY } = useScroll()
  
  // Transform values for scroll-based animations
  const navBackground = useTransform(
    scrollY,
    [0, 50, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.85)']
  )
  
  const navPadding = useTransform(
    scrollY,
    [0, 100],
    ['1.5rem', '1rem']
  )
  
  const logoScale = useTransform(
    scrollY,
    [0, 100],
    [1, 0.9]
  )

  const navigationLinks = [
    { name: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'About', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { name: 'Skills', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
    { name: 'Projects', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
    { name: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Update active link based on scroll position
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveLink(sectionId)
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 0.1
        }}
        style={{ 
          background: navBackground,
          paddingTop: navPadding,
          paddingBottom: navPadding,
        }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-amber-500/10"
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            style={{ scale: logoScale }}
            className="flex items-center"
          >
            <Link href="/" className="relative overflow-hidden group">
              <div className="relative z-10">
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-600 text-2xl font-bold tracking-wider"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  DEV<span className="text-white opacity-80">FOLIO</span>
                </motion.span>
              </div>
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-300 to-amber-600 rounded-full"
                initial={{ scaleX: 0, originX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationLinks.map((link) => (
              <NavLink 
                key={link.name}
                href={`#${link.name.toLowerCase()}`}
                active={activeLink === link.name.toLowerCase()}
                name={link.name}
                icon={link.icon}
              />
            ))}
            
            <motion.button
              className="ml-8 px-5 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-black font-medium tracking-wide flex items-center gap-2 shadow-lg shadow-amber-600/20 overflow-hidden relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open('https://wa.me/923187683366', '_blank')}
            >
              <span className="relative z-10" href='#contact'>Get in Touch</span>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 relative z-10" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </motion.svg>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="block md:hidden relative z-50 w-10 h-10 rounded-lg bg-black/30 backdrop-blur-lg border border-amber-500/20 flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                className="block w-5 h-0.5 bg-amber-500 rounded-full mb-1.5"
                animate={{ 
                  rotate: menuOpen ? 45 : 0,
                  y: menuOpen ? 6 : 0
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-5 h-0.5 bg-amber-500 rounded-full"
                animate={{ 
                  opacity: menuOpen ? 0 : 1,
                  x: menuOpen ? -10 : 0
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-5 h-0.5 bg-amber-500 rounded-full mt-1.5"
                animate={{ 
                  rotate: menuOpen ? -45 : 0,
                  y: menuOpen ? -6 : 0
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-xl flex flex-col"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-20" /> {/* Spacer for navbar */}
            <div className="flex-1 flex flex-col justify-center items-center space-y-8 p-6">
              {navigationLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <Link 
                    href={`#${link.name.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className={`text-xl ${activeLink === link.name.toLowerCase() ? 'text-amber-500 font-semibold' : 'text-gray-300'} flex items-center gap-3 hover:text-amber-400 transition-colors duration-300`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                    </svg>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.button
                className="mt-8 px-8 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-black font-medium tracking-wide flex items-center gap-2 shadow-lg shadow-amber-600/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                exit={{ opacity: 0, y: 10 }}
                onClick={() => setMenuOpen(false)}
              >
                <span>Get in Touch</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.button>
            </div>
            
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              exit={{ opacity: 0 }}
            >
              <div className="w-full h-full rounded-full border border-amber-500/20 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full border border-amber-500/20 flex items-center justify-center">
                  <div className="w-1/2 h-1/2 rounded-full border border-amber-500/20" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// NavLink Component with hover and active state animations
function NavLink({ href, active, name, icon }) {
  return (
    <Link href={href} className="relative py-2 px-1 mx-2">
      <motion.div 
        className="flex items-center gap-1 relative z-10"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`w-4 h-4 ${active ? 'text-amber-500' : 'text-gray-400'}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          animate={{ scale: active ? 1.1 : 1 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={active ? 2 : 1.5} d={icon} />
        </motion.svg>
        <span className={`${active ? 'text-amber-500 font-medium' : 'text-gray-300'} hover:text-amber-400 transition-colors duration-300`}>
          {name}
        </span>
      </motion.div>
      
      {/* Animated underline */}
      <motion.div 
        className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
        initial={active ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        animate={active ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        whileHover={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  )
}