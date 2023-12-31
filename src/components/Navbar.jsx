import { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style'
// import { navLinks } from '../constants'
import {  menu, close } from '../assets'
import logo2 from '../assets/logo2.png'
import Login from '../pages/Login'

const Navbar = ({id}) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={() => { setActive(""); window.scrollTo(0, 0); }} >
          <img src={logo2} alt='logo' className='w-28 h-auto object-contain' />
          {/* <p className="text-white text-[18px] font-bold cursor-pointer flex">Dhishna &nbsp;<span className="sm:block hidden">| Workshops</span></p> */}
        </Link>
        <ul className='list-none hidden md:flex flex-row gap-10'>
          {id && id.map((link) => (
            <div
              key={link.id} // Add a unique key prop here
              className={`${active === link.title
                  ? 'text-orange-500'
                  : 'text-white'
                } hover:text-white text-[22px] tracking-wider flex items-center  font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
                // document.getElementById(link.id).scrollIntoView();
              }}
            >
              <a href = {`${link.id}`}>
                {link.title}
              </a>
            </div>
          ))}
          <Login />

        </ul>
        <div className='md:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mc-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {id && id.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title
                      ? "text-white"
                      : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    // setActive(link.title);
                    // document.getElementById(link.id).scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <a href={`${link.id}`} className='hover:text-white' >
                  {link.title}
                  </a>
                </li>
              ))}
              <Login />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar