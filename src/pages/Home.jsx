import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Login from './Login'
import Contact from '../components/Contact'
import StarsCanvas from '../components/canvas/Stars'
import About from '../components/About'
import { navLinks } from '../constants'
import Feedbacks from '../components/Feedbacks'

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar id={navLinks} />
          <Hero />
        </div>
        <section id="workshop" className="relative z-0">
        <About />
        <StarsCanvas />
        </section>
        <section id="testimonials" className="relative z-0">
          <Feedbacks />
        </section>
        <div className="relative z-0">
          <section id="contact" className="relative z-0">
          <Contact />
          <StarsCanvas />
          </section>
        </div>
      </div>
  )
}

export default Home