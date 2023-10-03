import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Login from './Login'
import Contact from '../components/Contact'
import StarsCanvas from '../components/canvas/Stars'
import About from '../components/About'

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
  )
}

export default Home