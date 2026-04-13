import { motion } from 'framer-motion'
import { ArrowRight, Activity, Terminal, ShieldCheck } from 'lucide-react'

const MotionArticle = motion.article

const blogs = [
  {
    title: 'Building a Real-Time Network Scanner',
    description: 'An in-depth look at how to scan local networks, discover active devices, and visualize the data securely using Python.',
    tags: ['Networking', 'Security', 'Python'],
    icon: Activity,
    link: '#',
  },
  {
    title: 'Automated Log Monitoring & Alerting',
    description: 'Exploring techniques to parse system logs, detect suspicious login attempts, and trigger real-time alerts.',
    tags: ['Cybersecurity', 'SIEM', 'Monitoring'],
    icon: Terminal,
    link: '#',
  },
  {
    title: 'Cybersecurity Basics for Developers',
    description: 'A comprehensive guide to understanding core security concepts, common vulnerabilities, and defensive programming practices.',
    tags: ['InfoSec', 'Beginner', 'Concepts'],
    icon: ShieldCheck,
    link: '#',
  },
]

function Blogs() {
  return (
    <section id="blogs" className="section-shell">
      <h3 className="section-title">Blogs & Insights</h3>
      <p className="section-subtitle">
        Exploring ideas, sharing technical tutorials, and documenting my journey through cybersecurity engineering. Stay tuned for full articles.
      </p>
      
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {blogs.map((blog, idx) => {
          const Icon = blog.icon
          return (
            <MotionArticle
              key={blog.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative glass-card p-6 flex flex-col transition-all hover:bg-white/[0.05]"
            >
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-cyan-400/0 via-transparent to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:from-cyan-400/10 group-hover:to-purple-500/10 group-hover:opacity-100" />
              
              <div className="mb-4 inline-flex self-start rounded-lg bg-white/5 p-2.5 text-cyan-200 transition-colors group-hover:bg-cyan-400/20">
                <Icon size={22} />
              </div>
              
              <h4 className="text-xl font-medium text-slate-100 transition-colors group-hover:text-cyan-100">{blog.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-cyber-muted md:text-base group-hover:text-slate-300 transition-colors flex-grow">
                {blog.description}
              </p>
              
              <div className="mt-5 mb-5 flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-300 transition-colors group-hover:border-cyan-300/30 group-hover:bg-cyan-400/10 group-hover:text-cyan-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <a
                href={blog.link}
                className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200 group-hover:text-cyan-400"
              >
                Read More
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </MotionArticle>
          )
        })}
      </div>
    </section>
  )
}

export default Blogs
