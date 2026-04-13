import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { Activity, Terminal, Music, Cpu, Building, Bike, ExternalLink, Code } from 'lucide-react'

const MotionArticle = motion.article

const projects = [
  {
    name: 'Hotel Reservation System',
    description:
      'Full-stack system with FAQ management, support tickets, and admin panel using Spring Boot.',
    tech: ['Java', 'Spring Boot', 'H2', 'Thymeleaf'],
    category: 'Full Stack',
    icon: Building,
  },
  {
    name: 'Network Scanner Dashboard',
    description: 'Real-time network scanning tool with JSON reports and dashboard visualization.',
    tech: ['Python', 'Flask'],
    category: 'Security',
    icon: Activity,
  },
  {
    name: 'Log Monitoring System',
    description: 'Detects suspicious activities like failed logins and generates alerts.',
    tech: ['Python', 'PostgreSQL'],
    category: 'Security',
    icon: Terminal,
  },
  {
    name: 'YouTube Music App',
    description: 'Music streaming app using YouTube API with backend and frontend.',
    tech: ['Node.js', 'MongoDB', 'React'],
    category: 'Web',
    icon: Music,
  },
  {
    name: 'Smart Home Automation System',
    description: 'Developed a smart home automation system to control lighting, door locks, and alarms using sensors and the Blynk mobile application.',
    tech: ['Arduino', 'IoT Sensors', 'Blynk App'],
    category: 'IoT',
    icon: Cpu,
  },
  {
    name: 'Bike Ride and Rental Service System',
    description: 'Developed a rental management system with booking functionality, user authentication, and an admin dashboard using Java and OOP principles.',
    tech: ['Java', 'OOP', 'Backend Logic'],
    category: 'Full Stack',
    icon: Bike,
  },
]

const categories = ['All', 'Security', 'Web', 'IoT', 'Full Stack']

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        const matchesCategory = activeCategory === 'All' || project.category === activeCategory
        const text = `${project.name} ${project.description} ${project.tech.join(' ')}`.toLowerCase()
        const matchesQuery = text.includes(query.toLowerCase().trim())
        return matchesCategory && matchesQuery
      }),
    [activeCategory, query],
  )

  return (
    <section id="projects" className="section-shell">
      <h3 className="section-title">Featured Projects</h3>
      <p className="section-subtitle">A selection of systems I have built across web, backend, and security-focused use cases.</p>
      <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-3 py-1 text-xs transition md:text-sm ${
                activeCategory === category
                  ? 'border-cyan-300/40 bg-cyan-400/10 text-cyan-100'
                  : 'border-white/15 bg-white/5 text-cyber-muted hover:text-slate-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search projects..."
          className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-cyber-muted focus:border-cyan-300/40 md:w-64"
        />
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {filteredProjects.map((project, idx) => {
          const Icon = project.icon
          return (
          <MotionArticle
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative glass-card p-6 flex flex-col transition-all hover:bg-white/[0.05]"
          >
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-cyan-400/0 via-transparent to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:from-cyan-400/10 group-hover:to-purple-500/10 group-hover:opacity-100" />
            <div className="mb-4 inline-flex self-start rounded-lg bg-white/5 p-2.5 text-cyan-200 transition-colors group-hover:bg-cyan-400/20">
              <Icon size={22} />
            </div>
            <h4 className="text-xl font-medium text-slate-100 transition-colors group-hover:text-cyan-100">{project.name}</h4>
            <p className="mt-1 text-xs tracking-wide text-cyan-300 uppercase opacity-80">{project.category}</p>
            <p className="mt-3 text-sm leading-relaxed text-cyber-muted md:text-base group-hover:text-slate-300 transition-colors">{project.description}</p>
            <div className="mt-5 mb-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-cyan-300/30 bg-cyan-400/10 px-2 py-1 text-xs text-cyan-100 transition-colors group-hover:border-cyan-300/50 group-hover:bg-cyan-400/20"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-auto flex gap-4 pt-2">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200 group-hover:text-cyan-400"
              >
                <Code size={16} className="transition-transform group-hover:-translate-y-0.5" />
                Code
              </a>
              <button
                disabled
                className="inline-flex items-center gap-1.5 text-sm font-medium text-cyber-muted opacity-50 cursor-not-allowed"
                title="Live demo not available"
              >
                <ExternalLink size={16} />
                Demo
              </button>
            </div>
          </MotionArticle>
          )
        })}
      </div>
      {filteredProjects.length === 0 ? (
        <p className="mt-5 text-sm text-cyber-muted">No projects matched your filter. Try another keyword.</p>
      ) : null}
    </section>
  )
}

export default Projects
