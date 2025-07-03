import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './sections/HeroSection'
import { ScrollTrigger, gsap } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)


const App = () => {
  return (
    <main>
      <NavBar />
      <HeroSection />
     
    </main>
  )
}

export default App