import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Shield, Code2, Network } from 'lucide-react'

const MotionDiv = motion.div
const MotionImg = motion.img

const images = [
  '/profile1.jpg',
  '/profile2.jpg',
]

function HeroImageCarousel({ showIntro }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (showIntro) return // Wait until intro is done
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [showIntro])

  return (
    <MotionDiv
      initial={{ opacity: 0, scale: 0.9 }}
      animate={!showIntro ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative flex w-full max-w-md justify-center md:w-1/2"
    >
      {/* Animated Background Blurs */}
      <MotionDiv
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[80px]"
      />
      <MotionDiv
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, -90, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[100px]"
      />

      {/* Image Container */}
      <div className="group relative w-64 h-64 md:h-80 md:w-80 lg:h-96 lg:w-96">
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/20 to-purple-600/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        <div className="absolute inset-[2px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-cyber-panel shadow-[0_0_40px_rgba(34,211,238,0.1)] transition-transform duration-500 group-hover:scale-[1.02]">
          
          <AnimatePresence mode="popLayout">
            <MotionImg
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Profile ${currentIndex + 1}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => {
                // Fallback style if image is missing or HEIC isn't supported
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback container in case image fails to load */}
            <div className="hidden absolute inset-0 h-full w-full items-center justify-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-700 via-cyber-panel to-cyber-bg">
              <span className="text-sm font-medium text-cyber-muted opacity-60">Image Not Found</span>
            </div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-6 bg-cyan-300' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Floating Icons */}
        <MotionDiv
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-6 top-1/4 rounded-2xl border border-white/10 bg-white/5 p-3 shadow-xl backdrop-blur-md z-10"
        >
          <Shield className="text-cyan-300" size={24} />
        </MotionDiv>
        <MotionDiv
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -right-6 top-1/2 rounded-2xl border border-white/10 bg-white/5 p-3 shadow-xl backdrop-blur-md z-10"
        >
          <Code2 className="text-purple-300" size={24} />
        </MotionDiv>
        <MotionDiv
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-8 left-4 rounded-2xl border border-white/10 bg-white/5 p-3 shadow-xl backdrop-blur-md z-10"
        >
          <Network className="text-cyan-200" size={24} />
        </MotionDiv>
      </div>
    </MotionDiv>
  )
}

export default HeroImageCarousel