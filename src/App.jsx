import About from './components/About'
import Achievements from './components/Achievements'
import Blogs from './components/Blogs'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="pointer-events-none absolute top-20 left-[-120px] -z-10 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-80px] bottom-40 -z-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Blogs />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
