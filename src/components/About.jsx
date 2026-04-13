import { motion } from 'framer-motion'
import { GraduationCap, ShieldCheck, Sparkles } from 'lucide-react'

const MotionDiv = motion.div

const interests = ['Ethical Hacking', 'Network Security', 'AI & Security']
const personality = ['Curious learner', 'Problem solver', 'Team player']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function About() {
  return (
    <section id="about" className="section-shell">
      <MotionDiv
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-6 md:p-8"
      >
        <h3 className="section-title">About Me</h3>
        <p className="section-subtitle max-w-3xl">
          I am an undergraduate at SLIIT specializing in cybersecurity, focused on building secure and
          reliable systems that solve practical problems.
        </p>
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 grid gap-5 md:grid-cols-3"
        >
          <MotionDiv variants={itemVariants} className="glass-card p-4 transition-colors hover:bg-white/[0.05]">
            <div className="mb-3 inline-flex rounded-lg bg-cyan-400/10 p-2 text-cyan-200">
              <GraduationCap size={20} />
            </div>
            <p className="font-medium">SLIIT Undergraduate</p>
            <p className="mt-1 text-sm text-cyber-muted">Specializing in Cybersecurity</p>
          </MotionDiv>
          <MotionDiv variants={itemVariants} className="glass-card p-4 transition-colors hover:bg-white/[0.05]">
            <div className="mb-3 inline-flex rounded-lg bg-cyan-400/10 p-2 text-cyan-200">
              <ShieldCheck size={20} />
            </div>
            <p className="font-medium">Interests</p>
            <ul className="mt-2 space-y-1 text-sm text-cyber-muted">
              {interests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </MotionDiv>
          <MotionDiv variants={itemVariants} className="glass-card p-4 transition-colors hover:bg-white/[0.05]">
            <div className="mb-3 inline-flex rounded-lg bg-cyan-400/10 p-2 text-cyan-200">
              <Sparkles size={20} />
            </div>
            <p className="font-medium">Personality</p>
            <ul className="mt-2 space-y-1 text-sm text-cyber-muted">
              {personality.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </MotionDiv>
        </MotionDiv>
      </MotionDiv>
    </section>
  )
}

export default About
