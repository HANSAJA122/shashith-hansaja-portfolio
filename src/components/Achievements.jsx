import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const MotionDiv = motion.div

const achievements = [
  'Winner - Pitch Perfect Competition (IEEE Society)',
  'Participant - MS Champs (Month of March)',
  'Attended AI/Cursor event in Colombo',
]

function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <h3 className="section-title">Experience & Achievements</h3>
      <MotionDiv
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="glass-card mt-8 p-6"
      >
        <ul className="space-y-4">
          {achievements.map((item) => (
            <li key={item} className="flex items-start gap-3 text-cyber-muted">
              <Award size={18} className="mt-0.5 shrink-0 text-cyan-200" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </MotionDiv>
    </section>
  )
}

export default Achievements
