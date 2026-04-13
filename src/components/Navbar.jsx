import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experiences', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isDark, setIsDark] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Theme toggle logic
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      setIsDark(false)
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    } else {
      setIsDark(true)
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (isDark) {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    }
  }

  // Active section tracking
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''))
    
    const handleScroll = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section) => section !== null)

      // Calculate the scroll position at 1/3 of the viewport height to highlight sections accurately as they scroll into view
      const scrollPosition = window.scrollY + window.innerHeight / 3

      let currentActive = ''

      for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        
        if (
          scrollPosition >= sectionTop && 
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentActive = section.id
        }
      }

      // Robust fallback for the bottom of the page: if we scroll to the very bottom, always select the last section
      if (
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 50
      ) {
        currentActive = sectionIds[sectionIds.length - 1]
      }

      if (currentActive) {
        setActiveSection((prev) => (currentActive !== prev ? currentActive : prev))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Floating Navbar */}
      <div className="fixed top-6 left-1/2 z-50 hidden -translate-x-1/2 items-center lg:flex">
        <nav className="relative flex items-center gap-1 rounded-full border border-white/10 bg-gradient-to-r from-purple-500/30 to-blue-500/30 p-1.5 shadow-[0_0_20px_rgba(168,85,247,0.15)] backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '')
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-slate-900' : 'text-slate-100 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 -z-10 rounded-full bg-white shadow-sm"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            )
          })}

          <div className="ml-2 mr-1 h-6 w-px bg-white/20" />

          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="group relative flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between rounded-2xl border border-white/10 bg-cyber-panel/80 p-4 shadow-lg backdrop-blur-md lg:hidden">
        <a href="#home" className="text-lg font-bold tracking-widest text-slate-100 uppercase">
          Shashith
        </a>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="text-slate-100 transition-colors hover:text-cyan-300"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-100 transition-colors hover:text-cyan-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-white/10 bg-cyber-panel/95 p-6 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-cyan-500/20 text-cyan-200'
                          : 'text-slate-300 hover:bg-white/5 hover:text-slate-100'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar