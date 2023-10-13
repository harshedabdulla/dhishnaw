import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
// import Countdown from 'react-countdown';

// const CountdownComponent = () => {
//   // Set the target date and time for the countdown
//   const targetDate = new Date('2023-11-23T23:59:59').getTime();

//   // Define a renderer function for the Countdown component
//   const renderer = ({ days, hours, minutes, seconds, completed }) => {
//     if (completed) {
//       // Render something when the countdown is completed (optional)
//       return <div>Countdown expired!</div>;
//     } else {
//       // Render the countdown with days, hours, minutes, and seconds
//       return (
//         <div className={`${styles.sectionHeadText} text-layout flex flex-row max-w-7xl text-center justify-center mt-8 `}>
//           <div className="countdown-item mx-6">
//             <span>{days} </span>
            
//             <span>Days</span>
            
//           </div>
          
//           <div className="countdown-item mx-2">
//             <span>{hours}</span>
            
//             <span>Hrs</span>
//           </div>
//           <div className="countdown-item mx-2">
//             <span>{minutes}</span>
            
//             <span>M</span>
//           </div>
//           <div className="countdown-item mx-2">
//             <span>{seconds}</span>
            
//             <span>S</span>
//           </div>
//         </div>
//       );
//     }
//   };

//   return (
//     <div className="countdown-container">
//       <Countdown date={targetDate} renderer={renderer} />
//     </div>
//   );
// };

const Hero = () => {
  return (
    <section className='relative w-full min-h-[600px] md:h-[400px] mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[180px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-1 sm:h-80 h-40 violent-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-layout `}>Dream the digital future One Byte at a time</h1>
          <p className={`${styles.heroSubText} `}>Fusing <span className='text-[#FF884B] '>Vibes</span> with <span className='text-[#FF884B]'>Cutting-Edge Tech Know-How, </span>Dive into our Pre-Workshop</p>
          {/* <CountdownComponent /> */}
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
