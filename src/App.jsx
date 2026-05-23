import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Education from './Components/Education'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Project from './Components/Project'
import Skills from './Components/Skills'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Education/>
      <Footer/>
    </div>
  )
}

export default App
