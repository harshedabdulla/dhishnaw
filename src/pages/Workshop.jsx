import React from 'react'
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from '../components'

const Workshop = () => {
    return (
        <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
            </div>
            <section className="relative z-0" id="workshop">
            <About />
            </section>
            <section className="relative z-0" id="testimonials">
            <Feedbacks />
            </section>
            <div className="relative z-0" id="contact">
                <Contact />
                <StarsCanvas />
            </div>

        </div>
    )
}

export default Workshop