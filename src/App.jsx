import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './sections/HeroSection'
import { ScrollTrigger, gsap } from 'gsap/all'
import MessageSection from './sections/MessageSection'
import FlavourSection from './sections/FlavorSection'

gsap.registerPlugin(ScrollTrigger)


const App = () => {
  return (
    <main>
      <NavBar />
      <HeroSection />
     <MessageSection />
     <FlavourSection />
    </main>
  )
}

export default App