import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const MotionDiv = motion.div

function Education() {
  return (
    <section id="education" className="section-shell">
      <h3 className="section-title">Education</h3>
      <MotionDiv
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-8 border-l border-white/10 ml-3 pl-6 space-y-8"
      >
        <article className="relative">
          <div className="absolute -left-[33px] top-1 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20" />
          <div className="glass-card p-6 transition-colors hover:bg-white/[0.05]">
            <div className="flex items-start gap-3">
              <GraduationCap size={18} className="mt-1 text-cyan-200" />
              <div>
                <h4 className="text-lg font-semibold text-slate-100">
                  BSc (Hons) in IT - Specializing in Cybersecurity
                </h4>
                <p className="mt-1 text-sm text-cyan-200">
                  Sri Lanka Institute of Information Technology (SLIIT) • <span className="text-cyber-muted">2024 - Present</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cyber-muted md:text-base">
                  Building foundations in secure software engineering, networking, operating systems, and practical
                  cybersecurity concepts through coursework and project-based learning.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="relative">
          <div className="absolute -left-[33px] top-1 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20" />
          <div className="glass-card p-6 transition-colors hover:bg-white/[0.05]">
            <div className="flex items-start gap-3">
              <GraduationCap size={18} className="mt-1 text-cyan-200" />
              <div>
                <h4 className="text-lg font-semibold text-slate-100">
                  GCE Advanced Level - Physical Science
                </h4>
                <p className="mt-1 text-sm text-cyan-200">
                  Bandaranayake College Gampaha
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="relative">
          <div className="absolute -left-[33px] top-1 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20" />
          <div className="glass-card p-6 transition-colors hover:bg-white/[0.05]">
            <div className="flex items-start gap-3">
              <GraduationCap size={18} className="mt-1 text-cyan-200" />
              <div>
                <h4 className="text-lg font-semibold text-slate-100">
                  British Council English Program
                </h4>
                <p className="mt-1 text-sm text-cyan-200">
                  British Council Bambalapitiya
                </p>
              </div>
            </div>
          </div>
        </article>
      </MotionDiv>
    </section>
  )
}

export default Education
