import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowDownCircle, Mail, Code2, Shield, Network } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'

import HeroImageCarousel from './HeroImageCarousel'

const MotionP = motion.p
const MotionH1 = motion.h1
const MotionH2 = motion.h2
const MotionDiv = motion.div

const statTargets = [
  { label: 'Projects Built', value: 8 },
  { label: 'Core Skill Areas', value: 5 },
  { label: 'Achievements', value: 3 },
]

function Counter({ value, showIntro }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (showIntro) return // Wait until intro is done
    
    let current = 0
    const duration = 900
    const stepMs = 30
    const increment = Math.max(1, Math.ceil((value * stepMs) / duration))
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
        return
      }
      setCount(current)
    }, stepMs)

    return () => clearInterval(timer)
  }, [value, showIntro])

  return <span>{count}</span>
}

function Hero() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    // Disable scroll during intro
    document.body.style.overflow = 'hidden'
    const timer = setTimeout(() => {
      setShowIntro(false)
      document.body.style.overflow = 'auto'
    }, 800)
    return () => {
      clearTimeout(timer)
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-cyber-bg"
            exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          >
            <motion.h1
              layoutId="heroName"
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="whitespace-nowrap text-center text-4xl font-bold tracking-tight text-slate-100 md:text-6xl lg:text-7xl"
            >
              I'm Shashith Hansaja
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        id="home"
        className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-12 px-5 pt-24 pb-18 md:flex-row md:px-8 md:pt-32"
      >
      {/* Left Column: Text Content */}
      <div className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left z-10">
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={!showIntro ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs tracking-[0.2em] text-cyan-200 uppercase"
        >
          Welcome
        </MotionP>

        <div className="mt-6 flex w-full justify-center md:justify-start">
          {!showIntro ? (
            <MotionH1
              layoutId="heroName"
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="whitespace-nowrap text-4xl font-bold leading-tight tracking-tight text-slate-100 md:text-5xl lg:text-6xl"
            >
              I'm Shashith Hansaja
            </MotionH1>
          ) : (
            <h1 className="whitespace-nowrap text-4xl font-bold leading-tight tracking-tight text-slate-100 md:text-5xl lg:text-6xl opacity-0">
              I'm Shashith Hansaja
            </h1>
          )}
        </div>

        <MotionH2
          initial={{ opacity: 0, y: 24 }}
          animate={!showIntro ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 h-12 text-lg font-medium text-cyan-300 md:h-16 md:text-xl lg:text-2xl"
        >
          <TypeAnimation
            sequence={[
              'Cybersecurity Undergraduate',
              2000,
              'Secure Systems & Software Dev',
              2000,
              'Tech Enthusiast & Learner',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </MotionH2>
        <MotionP
          initial={{ opacity: 0, y: 24 }}
          animate={!showIntro ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-2 max-w-xl text-base leading-relaxed text-cyber-muted md:mt-4 md:text-lg"
        >
          Passionate about building intelligent, reliable software solutions using modern technologies. I enjoy turning complex problems into clean, efficient systems by blending logical thinking, creativity, and continuous experimentation.
        </MotionP>
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          animate={!showIntro ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/40 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-400/20"
          >
            <ArrowDownCircle size={18} />
            View Projects
          </a>
          <a
            href="/Shashith-Hansaja-CV.pdf"
            download="Shashith_Hansaja_CV.pdf"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            <Mail size={18} />
            Download CV
          </a>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          animate={!showIntro ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 grid w-full max-w-lg gap-3 grid-cols-3"
        >
          {statTargets.map((stat) => (
            <div key={stat.label} className="glass-card p-3 text-center md:p-4">
              <p className="text-xl font-semibold text-cyan-100 md:text-2xl">
                <Counter value={stat.value} showIntro={showIntro} />+
              </p>
              <p className="mt-1 text-[10px] tracking-wide text-cyber-muted uppercase md:text-xs">{stat.label}</p>
            </div>
          ))}
        </MotionDiv>
      </div>

      {/* Right Column: Image Content */}
      <HeroImageCarousel showIntro={showIntro} />
    </section>
    </>
  )
}

export default Hero
