import { useState } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { Tilt } from 'react-tilt'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { auth } from '../firebase/config'
import axios from 'axios'
import sanityClient from '../client'
import { useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'


const Popup = ({ index, title, event_type, event_code, event_pay_type, icon, details, price, register, onRegisterClick }) => {
  const handleRegister = async(event_type, event_pay_type, event_code, phone_no) => {
    try {
      const formData = new FormData();
      formData.append('name', auth?.currentUser?.displayName);
      formData.append('phone_no', phone_no);
      formData.append('event_pay_type', event_pay_type);
      formData.append('event_type', event_type);
      formData.append('event_code', event_code);
      console.log(event_code)
      const headers = {
        headers: {
          '_uid': auth.currentUser.uid
        }
      }
      const res = await axios.post('http://localhost:8081/add_registration_data', formData, headers)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className="bg-white rounded-lg overflow-hidden shadow-lg relative z-10 w-full md:w-1/2 lg:w-1/3">
          <div className="p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl md:text-2xl text-black font-semibold mb-4">{title}</h2>
              <button className="text-black text-2xl hover:text-gray-400 transition-all duration-200"
                onClick={() => {
                  setSelectedId(null);
                }
                }>
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
            <div className="flex items-center">
              <p className="text-gray-500 text-sm">{details}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-500 text-sm">{price}</p>
              <button onClick={() => handleRegister(event_type, event_pay_type, event_code, "9778393558")} className="bg-[#FF884B] text-white text-[16px] md:text-base mt-2 font-medium py-2 px-4 rounded-[10px] hover:bg-[#FF783D] transition-all duration-200"
              >Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const ServiceCard = ({ index, title, icon, details, price, register, onRegisterClick,urlFor }) => {
  const [clamp, setClamp] = useState(false);
  return (
    <div className="md:w-[580px] px-4 sm:w-[480px] w-full">
      <div
        className='w-full orange-red-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
          className='bg-tertiary rounded-[20px] py-6 px-4 md:px-12 h-auto flex flex-col justify-between items-center'>
          <div className="flex flex-col items-center">
            <img src={urlFor(icon)} alt={title} className='w-20 h-20 object-contain' />
            <h1 className='text-white text-lg md:text-xl font-bold text-center my-4'>{title}</h1>
            <p className={` ${clamp ?"line-clamp-none" :"line-clamp-3 md:line-clamp-6"}  text-white text-sm md:text-base font-medium text-center my-4`} 
            onClick={() => {
                setClamp(!clamp);
              }}>{details}</p>
          </div>
          <div className="flex justify-between w-full mt-4 md:mt-6">
            <p className='text-white text-sm md:text-base font-medium text-center'>Price: <span className='text-[#FF884B]'>{price}</span></p>
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
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
  return builder.image(source)
}
  

  useEffect(() => {
    sanityClient.fetch(`*[_type == "events"]{
      title,
      event_type,
      event_code,
      event_pay_type,
      icon,
      details,
      price,
      register
    }`).then((data) => {
      setData(data)
    }).catch(console.error)
  }, [])

  const handleValue = (e) => {
    setSearchTerm(e.target.value);
    try {
      if (searchTerm === null || searchTerm.trim() === '') {
        setData(services);
      } else {
        const filteredData = services.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.details.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setData(filteredData);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };


  const handleSearch = () => {
    try {
      if (searchTerm === null || searchTerm.trim() === '') {
        setData(services);
      } else {
        const filteredData = services.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.details.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setData(filteredData);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };


  const handleRegisterClick = (title) => {
    setSelectedId(title);
  }

  return (
    <>
      <motion.div>
        <h2 className={`${styles.sectionHeadText} text-center`}>Workshops</h2>
        {/*seach bar */}
        <div className='w-full flex flex-col items-center gap-4 mt-8 md:flex-row md:justify-center md:items-center'>
        <input
    type='text'
    placeholder='Search'
    className='w-full md:w-[400px] h-[50px] rounded-[10px] border-none outline-none px-4 text-[16px] md:text-base font-medium mx-2' // Add mx-2 class here
    onChange={handleValue}
  />
          <button className='bg-[#FF884B] text-white text-[16px] md:text-base mt-2 md:mt-0 font-medium py-2 px-4 rounded-[10px] hover:bg-[#FF783D] transition-all duration-200' onClick={handleSearch}>Search</button>
        </div>
      </motion.div>
      <div className='mt-8 md:mt-16 flex flex-wrap gap-4 md:gap-8 xl:gap-16 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8'>
        {data.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}
            onRegisterClick={() => handleRegisterClick(service.title)}
            urlFor={urlFor}
          />
        ))}
        {selectedId &&
          <div>
            {services.map((service, index) => (
              service.title === selectedId && <Popup key={service.title} index={index} {...service}
                onRegisterClick={() => handleRegisterClick(null)}
              />
            ))}
          </div>
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
