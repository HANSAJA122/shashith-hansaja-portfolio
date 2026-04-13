import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { FileText, Send, Mail } from 'lucide-react'
import emailjs from '@emailjs/browser'

const MotionDiv = motion.div

const GithubIcon = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
    <path d="M12 18h.01"></path>
  </svg>
)

const LinkedinIcon = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

const FacebookIcon = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)

const InstagramIcon = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
)

const EMAIL_ADDRESS = 'whshansaja.w@gmail.com'
const GITHUB_URL = 'https://github.com/HANSAJA122'
const LINKEDIN_URL = 'https://www.linkedin.com/in/shashith-hansaja-931796247/'
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61565005111364'
const INSTAGRAM_URL = 'https://www.instagram.com/_hanz_j/'

function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    // Basic validation check (though HTML5 `required` handles most of this)
    const formData = new FormData(formRef.current)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    if (!name || !email || !message) {
      setStatus('error')
      return
    }

    setStatus('submitting')

    try {
      // Initialize EmailJS keys from environment variables
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.error('EmailJS is missing environment variables. Check your .env file.')
        setStatus('error')
        return
      }

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      
      setStatus('success')
      formRef.current.reset()
    } catch (error) {
      console.error('Email sending failed:', error)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-shell">
      <MotionDiv
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="glass-card p-6 md:p-8"
      >
        <h3 className="section-title">Let's Connect</h3>
        <p className="section-subtitle">
          Open to internships, collaborations, and opportunities in cybersecurity engineering.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            aria-label="Send an email"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/35 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-400/20"
          >
            <Mail size={16} />
            {EMAIL_ADDRESS}
          </a>
          <a
            href={GITHUB_URL}
            aria-label="Visit my GitHub profile"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href={LINKEDIN_URL}
            aria-label="Visit my LinkedIn profile"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
          <a
            href={FACEBOOK_URL}
            aria-label="Visit my Facebook profile"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
          >
            <FacebookIcon size={16} />
            Facebook
          </a>
          <a
            href={INSTAGRAM_URL}
            aria-label="Visit my Instagram profile"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
          >
            <InstagramIcon size={16} />
            Instagram
          </a>
          <a
            href="/Shashith-Hansaja-CV.pdf"
            download="Shashith_Hansaja_CV.pdf"
            aria-label="Download my CV"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/35 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-400/20"
          >
            <FileText size={16} />
            Download CV
          </a>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-8 grid gap-3 md:grid-cols-2">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-cyber-muted focus:border-cyan-300/40"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-cyber-muted focus:border-cyan-300/40"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-cyber-muted focus:border-cyan-300/40 md:col-span-2"
          />
          <button
            type="submit"
            aria-label="Send message"
            disabled={status === 'submitting'}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/35 bg-cyan-500/10 px-4 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
            <Send size={16} className={status === 'submitting' ? 'animate-pulse' : ''} />
          </button>
        </form>
        <div className="mt-3 text-sm">
          {status === 'success' ? <p className="text-emerald-300">Message sent successfully.</p> : null}
          {status === 'error' ? (
            <p className="text-rose-300">Could not send message. Please try again.</p>
          ) : null}
        </div>
      </MotionDiv>
    </section>
  )
}

export default Contact
