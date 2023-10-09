import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { SectionWrapper } from '../hoc'
import { auth } from '../firebase/config'
import axios from 'axios'
import sanityClient from '../client'
import { useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { useStateContext } from '../context/stateContext'


const Popup = ({ index, title, event_type, uniquecode, event_code, ticket_type, icon,Contact, details, cover, price, register, onRegisterClick,urlFor }) => {
  const [refe, setRef] = React.useState('')
  const [error, setError] = React.useState(false);
  const {userDetails} = useStateContext()
  const handleRegister = async (event_type, ticket_type, event_code, phone_no, refe, register) => {
    try {
      //console.log(phone_no, ticket_type, event_type, event_code, refe, register)
      const formData = new FormData();
      formData.append('name', auth?.currentUser?.displayName);
      formData.append('phone_no', phone_no);
      formData.append('event_pay_type', ticket_type);
      formData.append('event_type', event_type);
      formData.append('event_code', event_code);
      formData.append('refCode', refe);
      const headers = {
        headers: {
          '_uid': auth.currentUser.uid,
          'Authorization': auth.currentUser.accessToken
        }
      }
      //console.log(register)
      const res = await axios.post('https://neol7a57w4hxyq6iscz77r3uri0zeali.lambda-url.us-east-1.on.aws/add_registration_data/', formData, headers)
      if(res.data.success == 1){
        window.location.href = register;
      }else if(res.data.already){
        window.location.href = register;
      }
      console.log(res)
    } catch (error) {
      //console.log(error)
    }
  }
  //console.log(urlFor(cover))
  return (
    <div>
      <div className="fixed inset-0 bg-black opacity-90 " ></div>
      <div className="fixed inset-0 flex items-center justify-center z-50 ">
        <div className="bg-white pt-3 rounded-lg overflow-hidden shadow-lg relative z-10 w-full mx-4 md:mx-0 md:w-1/2 lg:w-1/3 glass-effect" >
          <div className="p-6 tracking-wider">
            <div className="flex  justify-between items-center">
              <h2 className="text-2xl md:text-3xl text-[#FF884B] font-semibold mb-4">{title}</h2>
              <button className="text-white text-2xl hover:text-gray-400 transition-all duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor"
                  onClick={() => {
                    onRegisterClick();
                  }}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex items-center flex-col">
              <p className="text-white text-sm md:text-base">{details}</p>
              {Contact &&
                <p className='text-white text-sm md:text-base mt-4'>Contact <span className='text-[#FF884B]'>{Contact}</span></p>
              }
            </div>
            <div className="flex justify-between items-center my-5">
              <p className="text-[#FF884B] text-lg font-bold">{price}</p>
              <input type="text" placeholder="Enter referral code" name="" className='bg-white text-black pl-3 py-3 rounded-[5px]' onChange={(e) => setRef(e.target.value)} id="" />
              <button onClick={() => handleRegister(event_type, ticket_type, event_code, userDetails.phone || '666', refe || '666', register)} className="bg-[#FF884B] text-white text-[16px] md:text-base mt-2 font-medium py-2 px-4 rounded-[10px] hover:bg-[#FF783D] transition-all duration-200 tracking-wider"
              >Register</button>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">Please Login to Register.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};


const ServiceCard = ({ index, title, icon, details, price, register, onRegisterClick, urlFor }) => {
  const [clamp, setClamp] = useState(false);

  return (
    <div className="md:w-[580px] px-4 sm:w-[480px] w-full tracking-wider">
      <div className='w-full orange-red-gradient p-[1px] rounded-[20px] shadow-card'>
        <div className='bg-[#332d2a] randombg rounded-[20px] py-6 px-4 md:px-12 md:h-[450px] flex flex-col justify-between items-center'>
        <div className="flex items-center">
  {icon && (
    <img src={urlFor(icon)} alt={title} className='w-16 h-16 object-contain rounded-full' />
  )}
  {title && (
    <h1 className='text-white text-lg md:text-xl font-bold text-center ml-4'>{title}</h1>
  )}
</div>
            {details && (
              <p className={` ${clamp ? "line-clamp-none" : "line-clamp-3 md:line-clamp-6"}  text-white tracking-wider text-base md:text-lg font-medium text-center my-4`}
                onClick={() => {
                  setClamp(!clamp);
                }}>
                {details}
              </p>
            )}
         
          <div className="flex justify-between w-full mt-4 md:mt-6">
            {price && (
              <p className='text-white text-sm md:text-base text-center font-bold flex my-auto'>Price: <span className='text-[#FF884B]'>{price}</span></p>
            )}
            <button className='bg-[#FF884B] text-white text-[16px] md:text-base mt-2 font-medium py-2 px-4 rounded-[10px] hover:bg-[#FF783D] transition-all duration-200'
              onClick={() => {
                onRegisterClick();
              }}>Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const About = () => {
  const { fetchServices, services, searchData, setSearchData } = useStateContext()
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const builder = imageUrlBuilder(sanityClient)

  function urlFor(source) {
    return builder.image(source)
  }


  React.useEffect(() => {
    //console.log(services)
    if (services.length == 0) {
      fetchServices()
    }
  }, [])

  const handleValue = (e) => {
    setSearchTerm(e.target.value);
    const Term = e.target.value;
    try {
      if (Term === null || Term.trim() === '') {
        setSearchData(services);
      } else {
        const filteredData = services.filter((item) =>
          item.title.toLowerCase().includes(Term.toLowerCase()) ||
          item.details.toLowerCase().includes(Term.toLowerCase())
        );
        setSearchData(filteredData);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };


  const handleSearch = () => {
    try {
      if (searchTerm === null || searchTerm.trim() === '') {
        setSearchData(services);
      } else {
        const filteredData = services.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.details.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchData(filteredData);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };


  const handleRegisterClick = (title) => {
    //console.log(title)
    setSelectedId(title);
  }

  return (
    <>
      <motion.div>
        <h2 className={`${styles.sectionHeadText} text-center tracking-wider`}>Workshops</h2>
        {/*seach bar */}
        <div className='w-full flex flex-col items-center gap-4 mt-8 md:flex-row md:justify-center md:items-center px-8 '>
          <input
            type='text'
            placeholder='Search'
            className='w-full md:w-[400px] h-[50px] rounded-[10px] border-none outline-none px-4 text-[16px] md:text-base font-medium mx-2' // Add mx-2 class here
            onChange={handleValue}
          />
          <button className='bg-[#FF884B] text-white text-[16px] md:text-base mt-2 md:mt-0 font-medium py-2 px-4 rounded-[10px] hover:bg-[#FF783D] transition-all duration-200' onClick={handleSearch}>Search</button>
        </div>
      </motion.div>
      <div className='mt-8 md:mt-16 flex flex-wrap gap-4 md:gap-8 xl:gap-16 justify-center'>
        {searchData.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}
            onRegisterClick={() => handleRegisterClick(service.title)}
            urlFor={urlFor}
          />
        ))}
        {selectedId &&
          <div>
            {services && services.map((service, index) => (
              service.title === selectedId && <Popup key={service.title} index={index} {...service}
                onRegisterClick={() => handleRegisterClick(null)}
                urlFor={urlFor}
              />
            ))}
          </div>
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
