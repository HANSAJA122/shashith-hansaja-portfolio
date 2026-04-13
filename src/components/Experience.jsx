import { motion } from 'framer-motion'
import { Cloud, Bot, GraduationCap, FlaskConical, Users } from 'lucide-react'

const MotionDiv = motion.div

const experiences = [
  {
    role: 'Microsoft Student Champs Participant',
    period: '2026',
    org: 'Microsoft Student Ambassadors Sri Lanka',
    description:
      'Participated in the Microsoft Student Champs – Month of March program. Learned about Azure AI, AI agents, and modern cloud-based development. Gained exposure to real-world AI and cloud technologies.',
    icon: Cloud,
  },
  {
    role: 'Cursor AI Meetup Attendee',
    period: '2026',
    org: 'TechTalk360 (Colombo)',
    description:
      'Attended the Cursor AI Meetup in Colombo with a large developer community. Engaged with industry professionals and explored modern AI development tools. Gained insights into real-world AI workflows and collaboration.',
    icon: Bot,
  },
  {
    role: 'LeadSpring Discover Track Participant',
    period: '2026',
    org: 'IEEE Industry Applications Society of SLIIT',
    description:
      'Participated in the LeadSpring Discover Track organized by IEEE IAS SLIIT. Gained knowledge in leadership, innovation, and teamwork. Engaged in interactive sessions and collaborated with fellow participants.',
    icon: Users,
  },
  {
    role: 'IT / Cybersecurity Student',
    period: '2024 - Present',
    org: 'SLIIT Academic & Practical Experience',
    description:
      'Gaining hands-on experience through academic projects, technical events, and practical system development. Worked on projects related to secure software design, networking concepts, and backend development. Actively improving skills in cybersecurity, problem solving, and real-world system implementation.',
    icon: GraduationCap,
  },
  {
    role: 'School Science Day Participant',
    period: '2023',
    org: 'School Science Exhibition',
    description:
      'Participated in school science day presenting a technical or innovative project. Developed early interest in technology and problem solving. Built foundational confidence in presenting ideas.',
    icon: FlaskConical,
  },
]

function Experience() {
  return (
    <section id="experience" className="section-shell">
      <h3 className="section-title">Experience</h3>
      <p className="section-subtitle">Practical learning through projects, events, and technical collaboration.</p>
      <MotionDiv
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-8 border-l border-white/10 ml-3 pl-6 space-y-8"
      >
        {experiences.map((item) => {
          const Icon = item.icon
          return (
            <article key={item.role} className="relative">
              <div className="absolute -left-[33px] top-1 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20" />
              <div className="glass-card p-5 md:p-6 transition-colors hover:bg-white/[0.05]">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-md bg-cyan-400/10 p-2 text-cyan-200">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-100">{item.role}</h4>
                    <p className="mt-1 text-sm text-cyan-200">
                      {item.org} • <span className="text-cyber-muted">{item.period}</span>
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-cyber-muted md:text-base">{item.description}</p>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </MotionDiv>
    </section>
  )
}

export default Experience
