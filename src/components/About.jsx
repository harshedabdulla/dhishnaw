import { motion } from 'framer-motion'
import {styles} from '../style'
import { Tilt } from 'react-tilt'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index,title,icon,details,price,register}) => {
  return (
   <Tilt className="xs:w-[580px] w-full">
    <motion.div
    variants={fadeIn("right","spring",0.5*index,0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div options={{
        max:25,
        scale:1,
        speed:450,
      }}
      className='bg-tertiary rounded-[20px] py-6 px-12 min-h-[380px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title} className='w-20 h-20 object-contain' />
        <h1 className='text-white text-[20px] font-bold text-center my-4'>{title}</h1>
        <p className='text-white text-[16px] font-medium text-center'>{details}</p>
        <div className="flex justify-between w-full mt-2">
        <p className='text-white text-[16px] font-medium text-center mt-6'>Price: <span className='text-[#915eff]'>{price}</span></p>
        <button className='bg-[#915eff] text-white text-[16px] mt-2 font-medium py-2 px-4 rounded-[10px] hover:bg-[#7d4fff] transition-all duration-200' onClick={()=>window.open(register,'_blank')}>Register</button>
        </div>
        </div>
    </motion.div>
   </Tilt>
  )
}
const About = () => {
  return (
   <>
   <motion.div>
    
      <h2 className={`${styles.sectionHeadText} text-center`}>Workshops</h2>
      {/*seach bar */}
      <div className='w-full flex justify-center items-center gap-4 mt-8'>
        <input type='text' placeholder='Search' className='w-[400px] h-[50px] rounded-[10px] border-none outline-none px-4 text-[16px] font-medium' />
        <button className='bg-[#915eff] text-white text-[16px] font-medium py-2 px-4 rounded-[10px] hover:bg-[#7d4fff] transition-all duration-200'>Search</button>
      </div>
     </motion.div>
    <div className='mt-16 flex flex-wrap gap-16 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8'>
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
   </>
  )
}

export default SectionWrapper(About,"about")