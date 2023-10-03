import React from 'react'
import { motion } from 'framer-motion'
import {styles} from '../style'
import { Tilt } from 'react-tilt'
import { services } from '../constants'



const Hero = () => {
  return (
    <section
    className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#FF884B]' />
          <div className='w-1 sm:h-80 h-40 violent-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Unlock the Past, <span className='text-[#FF884B]'>Hack the Future</span></h1>
          <p className={`${styles.heroSubText}`}>Fusing <span className='text-[#FF884B]'>Vintage Vibes</span> with <span className='text-[#FF884B]'>Cutting-Edge Tech Know-How</span></p>
        </div>
        
        
      </div>
     
    </section>
  )
}

export default Hero