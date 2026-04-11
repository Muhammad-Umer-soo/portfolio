import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      delay: 0,
    })
  }, [])

  return (
    <div className="min-h-screen bg-dark-900 noise-bg">
      {/* Ambient background orbs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-teal-500/4 rounded-full blur-[80px]" />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-emerald-500/3 rounded-full blur-[60px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
