import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </>
  )
}

export default App
