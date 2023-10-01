import React from 'react'
import { motion } from 'framer-motion'
import {styles} from '../style'
import { ComputersCanvas } from './canvas'


const Hero = () => {
  return (
    <section
    className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violent-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Unlock the Past, <span className='text-[#915eff]'>Hack the Future</span></h1>
          <p className={`${styles.heroSubText}`}>Fusing <span className='text-[#915eff]'>Vintage Vibes</span> with <span className='text-[#915eff]'>Cutting-Edge Tech Know-How</span></p>
        </div>
        
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero