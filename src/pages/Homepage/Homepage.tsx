import React from 'react'
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import Experience from '../../components/Experience/Experience'

import Portfolio from '../../components/Portfolio/Portfolio'
import Skills from '../../components/Skills/Skills'
function Homepage() {
  return (
    <>
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
    </>
  )
}

export default Homepage
