import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'

const MotionDiv = motion.div

const certificates = [
  'Advanced AI Governance – LinkedIn Learning (2026)',
  'Programming in C – University of Michigan (2026)',
  'Data Structures in C – University of Michigan (2026)',
  'Introduction to Cybersecurity – Cisco (2026)',
  'IEEE Mini Pitch Challenge – Certificate of Appreciation (2025)',
  'LeadSpring 2025 – Discover Track (2025)',
  'British Council English Certificates (2025)',
]

function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <h3 className="section-title">Certifications</h3>

      <MotionDiv
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-8 border-l border-white/10 ml-3 pl-6 space-y-6"
      >
        {certificates.map((item) => (
          <article key={item} className="relative">
            <div className="absolute -left-[33px] top-1 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20" />
            <div className="glass-card p-4 transition-colors hover:bg-white/[0.05]">
              <div className="flex items-start gap-3 text-slate-200">
                <BadgeCheck size={18} className="mt-0.5 shrink-0 text-cyan-200" />
                <span className="font-medium leading-relaxed">{item}</span>
              </div>
            </div>
          </article>
        ))}
      </MotionDiv>
    </section>
  )
}

export default Certifications
