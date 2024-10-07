import { useRef } from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Experience from './Experience/Experience'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import Portfolio from './Portfolio/Portfolio'
import Skills from './Skills/Skills'

function App() {
  const about = useRef(null)
  // const portfolio = useRef(null)
  // const contact = useRef(null)

  return (
    <div className="min-h-dvh">
      <div className="">
        <div className="-mb-12 flex min-h-screen flex-col bg-bg-primary">
          <Header about={about} />
          <Hero />
        </div>
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
    </div>
  )
}

export default App
