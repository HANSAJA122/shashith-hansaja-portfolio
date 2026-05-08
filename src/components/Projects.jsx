import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { Activity, Terminal, Music, Cpu, Building, Bike, ExternalLink, ScanLine, BookOpen } from 'lucide-react'

const MotionArticle = motion.article

const GithubIcon = ({ size = 16, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4" />
    <path d="M12 18h.01" />
  </svg>
)

const githubRepo = (repo) => `https://github.com/HANSAJA122/${repo}`

const projects = [
  {
    name: 'Hotel Reservation System',
    description:
      'Full-stack system with FAQ management, support tickets, and admin panel using Spring Boot.',
    tech: ['Java', 'Spring Boot', 'H2', 'Thymeleaf'],
    category: 'Full Stack',
    icon: Building,
    codeHref: githubRepo('Hotel-Room-Reservation-System'),
  },
  {
    name: 'Network Scanner Dashboard',
    description: 'Real-time network scanning tool with JSON reports and dashboard visualization.',
    tech: ['Python', 'Flask'],
    category: 'Security',
    icon: Activity,
    codeHref: githubRepo('Network-Scanner-Vulnerability-Analyzer'),
  },
  {
    name: 'Log Monitoring System',
    description: 'Detects suspicious activities like failed logins and generates alerts.',
    tech: ['Python', 'PostgreSQL'],
    category: 'Security',
    icon: Terminal,
    // No matching public repo on this account yet — opens your repos tab; swap when published.
    codeHref: 'https://github.com/HANSAJA122?tab=repositories',
    codeAriaLabelOverride: 'Browse my GitHub repositories (log monitoring source not linked)',
  },
  {
    name: 'Nexus Security Scanner (CyberAgent)',
    description:
      'Full-stack web application for authorized network reconnaissance—probes common ports, captures service banners, and presents findings with severity-oriented context in a structured UI. Next.js/TypeScript frontend with API routes orchestrating a Python banner-grabbing scanner; for authorized testing in permitted environments only.',
    tech: ['Next.js', 'TypeScript', 'Python', 'REST API'],
    category: 'Security',
    icon: ScanLine,
    codeHref: githubRepo('nexus-security-scanner'),
  },
  {
    name: 'YouTube Music App',
    description: 'Music streaming app using YouTube API with backend and frontend.',
    tech: ['Node.js', 'MongoDB', 'React'],
    category: 'Web',
    icon: Music,
    codeHref: githubRepo('yt-music-streaming-app'),
  },
  {
    name: 'Smart Study Assistant',
    description:
      'Full-stack Next.js study workspace with PostgreSQL and Prisma—notes with optional uploads and AI summaries, an education-scoped chat tutor, quiz and flashcard generation, and planner dashboards. Auth.js (NextAuth) for email/password and Google OAuth with JWT sessions; validated, rate-limited Ollama integration on AI routes; deployed on Vercel.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Auth.js', 'Vercel'],
    category: 'Full Stack',
    icon: BookOpen,
    codeHref: githubRepo('smart-study-assistant'),
    demoHref: 'https://smart-study-assistant-xi.vercel.app',
  },
  {
    name: 'Smart Home Automation System',
    description: 'Developed a smart home automation system to control lighting, door locks, and alarms using sensors and the Blynk mobile application.',
    tech: ['Arduino', 'IoT Sensors', 'Blynk App'],
    category: 'IoT',
    icon: Cpu,
    codeHref: 'https://github.com/HANSAJA122?tab=repositories',
    codeAriaLabelOverride: 'Browse my GitHub repositories (smart home source not linked)',
  },
  {
    name: 'Bike Ride and Rental Service System',
    description: 'Developed a rental management system with booking functionality, user authentication, and an admin dashboard using Java and OOP principles.',
    tech: ['Java', 'OOP', 'Backend Logic'],
    category: 'Full Stack',
    icon: Bike,
    codeHref: 'https://github.com/HANSAJA122?tab=repositories',
    codeAriaLabelOverride: 'Browse my GitHub repositories (bike rental source not linked)',
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
                href={project.codeHref}
                target="_blank"
                rel="noreferrer"
                aria-label={project.codeAriaLabelOverride ?? `View ${project.name} on GitHub`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200 group-hover:text-cyan-400"
              >
                <GithubIcon size={16} className="transition-transform group-hover:-translate-y-0.5" />
                Code
              </a>
              {project.demoHref ? (
                <a
                  href={project.demoHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open live demo for ${project.name}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200 group-hover:text-cyan-400"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-cyber-muted opacity-50 cursor-not-allowed"
                  title="Live demo not available"
                >
                  <ExternalLink size={16} />
                  Demo
                </button>
              )}
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
