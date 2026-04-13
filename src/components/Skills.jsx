import { motion } from 'framer-motion'
import { useState } from 'react'
import { Code2, Layout, Server, Database, Shield, Lightbulb, Wrench, BrainCircuit, Users, Target } from 'lucide-react'

const MotionArticle = motion.article
const MotionDiv = motion.div

const skillGroups = [
  {
    title: 'Programming',
    icon: Code2,
    skills: [
      { name: 'Java', level: 'Intermediate', highlight: true },
      { name: 'C', level: 'Intermediate', highlight: false },
      { name: 'Python', level: 'Basic', highlight: true },
    ],
  },
  {
    title: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'React', level: 'Intermediate', highlight: true },
      { name: 'HTML', level: 'Intermediate', highlight: false },
      { name: 'CSS', level: 'Intermediate', highlight: false },
      { name: 'JavaScript', level: 'Intermediate', highlight: false },
      { name: 'Bootstrap', level: 'Intermediate', highlight: false },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Java (Spring Boot)', level: 'Intermediate', highlight: true },
      { name: 'Node.js', level: 'Basic', highlight: false },
      { name: 'REST APIs', level: 'Intermediate', highlight: false },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'MySQL', level: 'Intermediate', highlight: false },
      { name: 'PostgreSQL', level: 'Intermediate', highlight: false },
      { name: 'H2', level: 'Intermediate', highlight: false },
      { name: 'MongoDB', level: 'Basic', highlight: false },
    ],
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    skills: [
      { name: 'Cybersecurity Fundamentals', level: 'Intermediate', highlight: true },
      { name: 'Network Security Basics', level: 'Intermediate', highlight: false },
      { name: 'Log Monitoring', level: 'Intermediate', highlight: false },
      { name: 'Vulnerability Awareness', level: 'Intermediate', highlight: true },
      { name: 'Secure Coding Basics', level: 'Intermediate', highlight: true },
    ],
  },
  {
    title: 'Concepts',
    icon: Lightbulb,
    skills: [
      { name: 'Object-Oriented Programming', level: 'Intermediate', highlight: true },
      { name: 'Data Structures', level: 'Intermediate', highlight: true },
      { name: 'Systems Programming', level: 'Basic', highlight: false },
      { name: 'Networking Basics', level: 'Intermediate', highlight: false },
    ],
  },
  {
    title: 'Dev Tools',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub', level: 'Intermediate', highlight: false },
      { name: 'Linux', level: 'Intermediate', highlight: false },
      { name: 'VMware', level: 'Intermediate', highlight: false },
      { name: 'Arduino', level: 'Basic', highlight: false },
      { name: 'IntelliJ IDEA', level: 'Intermediate', highlight: false },
    ],
  },
]

const softSkillGroups = [
  {
    title: 'Problem Solving & Analysis',
    icon: BrainCircuit,
    skills: [
      { name: 'Problem Solving', level: 'Advanced', highlight: true },
      { name: 'Analytical Thinking', level: 'Advanced', highlight: true },
      { name: 'Critical Thinking', level: 'Intermediate', highlight: false },
      { name: 'Decision Making', level: 'Intermediate', highlight: false },
    ],
  },
  {
    title: 'Team & Leadership',
    icon: Users,
    skills: [
      { name: 'Communication', level: 'Advanced', highlight: true },
      { name: 'Teamwork', level: 'Advanced', highlight: false },
      { name: 'Collaboration', level: 'Intermediate', highlight: false },
      { name: 'Leadership', level: 'Basic', highlight: false },
    ],
  },
  {
    title: 'Work Ethic & Mindset',
    icon: Target,
    skills: [
      { name: 'Adaptability', level: 'Advanced', highlight: false },
      { name: 'Fast Learner', level: 'Advanced', highlight: false },
      { name: 'Self-Motivation', level: 'Advanced', highlight: false },
      { name: 'Attention to Detail', level: 'Intermediate', highlight: false },
      { name: 'Responsibility', level: 'Advanced', highlight: false },
      { name: 'Work Ethic', level: 'Advanced', highlight: false },
      { name: 'Creativity', level: 'Intermediate', highlight: false },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

function Skills() {
  const [activeTab, setActiveTab] = useState('technical')
  
  const activeGroups = activeTab === 'technical' ? skillGroups : softSkillGroups

  return (
    <section id="skills" className="section-shell">
      <h3 className="section-title">Skills & Strengths</h3>
      <p className="section-subtitle">
        {activeTab === 'technical' 
          ? 'The technical stack I leverage to transform concepts into secure solutions.'
          : 'Professional strengths that enhance teamwork, problem solving, and adaptability.'}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={() => setActiveTab('technical')}
          className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
            activeTab === 'technical'
              ? 'bg-cyan-400 text-slate-900 shadow-[0_0_16px_rgba(34,211,238,0.4)] scale-105'
              : 'border border-white/15 bg-white/5 text-cyber-muted hover:text-slate-100 hover:bg-white/10'
          }`}
        >
          Technical Skills
        </button>
        <button
          onClick={() => setActiveTab('soft')}
          className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
            activeTab === 'soft'
              ? 'bg-purple-400 text-slate-900 shadow-[0_0_16px_rgba(192,132,252,0.4)] scale-105'
              : 'border border-white/15 bg-white/5 text-cyber-muted hover:text-slate-100 hover:bg-white/10'
          }`}
        >
          Soft Skills
        </button>
      </div>

      <MotionDiv
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-8 grid gap-5 md:grid-cols-2"
      >
        {activeGroups.map((group, idx) => {
          const Icon = group.icon
          return (
            <MotionArticle
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="glass-card group p-5 transition-all hover:-translate-y-1 hover:bg-white/[0.05]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex rounded-lg bg-cyan-400/10 p-2 text-cyan-200 transition-colors group-hover:bg-cyan-400/20">
                  <Icon size={20} />
                </div>
                <h4 className="text-lg font-medium text-slate-100 transition-colors group-hover:text-cyan-100">{group.title}</h4>
              </div>
              <MotionDiv
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {group.skills.map((skill) => (
                  <MotionDiv
                    key={skill.name}
                    title={`${skill.name} - ${skill.level}`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[13px] transition-colors md:text-sm cursor-default ${
                      skill.highlight
                        ? 'border-purple-400/30 bg-purple-500/10 text-purple-200 hover:border-purple-400/50 hover:bg-purple-500/20'
                        : 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-100'
                    }`}
                  >
                    <span>{skill.name}</span>
                    <span className="hidden opacity-50 sm:inline-block">({skill.level})</span>
                  </MotionDiv>
                ))}
              </MotionDiv>
            </MotionArticle>
          )
        })}
      </MotionDiv>
    </section>
  )
}

export default Skills
