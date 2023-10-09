import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import StarsCanvas from '../components/canvas/Stars'
import About from '../components/About'
import { navLinks } from '../constants'
import Feedbacks from '../components/Feedbacks'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
        <div className="">
          <Navbar id={navLinks} />
          <Hero />
        <StarsCanvas />
        </div>
        <section id="workshop" className="relative z-0">
        <About />
        <StarsCanvas />
        </section>
        <section id="testimonials" className="relative z-0">
          <Feedbacks />
        <StarsCanvas />
        </section>
        <div className="relative z-0">
          <section id="contact" className="relative z-0">
          <Contact />
          <Footer />
          <StarsCanvas />
          </section>
        </div>
      </div>
  )
}

export default Home