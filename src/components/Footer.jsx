import React from 'react';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa'; // Import social media icons from React Icons

const socialMediaLinks = [
  {
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/dhishna.cusat/?hl=en',
  },
  {
    icon: <FaFacebook />,
    link: 'https://www.facebook.com/dhishna.cusat/',
  },
  {
    icon: <FaYoutube />,
    link: 'https://www.youtube.com/@dhishnacusat4981',
  },
  
];

const Footer = () => {
  return (
    <footer className="bg-primary py-4 mt-4">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center text-white">
          {/* Social Media Icons */}
          <div className="md:mr-4 mb-2 md:mb-0 flex">
            {socialMediaLinks.map((socialMedia, index) => (
              <a
                key={index}
                href={socialMedia.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-white hover:text-gray-400 transition duration-300 mr-2"
              >
                {socialMedia.icon}
              </a>
            ))}
          </div>
          {/* Text */}
          <p className="text-sm mt-4">&copy; 2023 Dhishna. All Rights Reserved.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
