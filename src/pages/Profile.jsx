import React from 'react'
import Navbar from '../components/Navbar'
import { navLinks } from '../constants'
import { styles } from '../style'
import { StarsCanvas } from '../components/canvas'
import { Tilt } from 'react-tilt'
import { useStateContext } from '../context/stateContext'
import { onAuthStateChanged } from 'firebase/auth'
import { app, auth } from '../firebase/config';

import { SocialIcon } from 'react-social-icons'


const Profile = () => {
  const id = [{
    id: "/Profile",
    title: "Profile",
  }]
  const registeredEvents = [
    {
      id: 1,
      eventName: 'Robotics Workshop',
      date: '2023-10-15',
      location: 'Amenities Hall',
    },
    {
      id: 2,
      eventName: 'Web Development Workshop',
      date: '2023-10-20',
      location: 'Amenities Hall',
    },
    // Add more events as needed
  ];

  // User profile information (replace with actual user data)
  const userProfile = {
    username: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 (123) 456-7890',
  };
  const badgeInfo = {
    eventName: 'Dhishna 2023',
    badgeText: 'Excited to be a part of Dhishna 2023!',
    badgeImage: 'url_to_badge_image.jpg', // Replace with the URL to the event badge image
    badgeStyle: {
      backgroundColor: '#FF884B', // Background color
      color: '#ffffff', // Text color
      borderRadius: '8px', // Rounded corners
      padding: '12px', // Spacing inside the badge
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Shadow
    },
  };


  // Function to handle sharing on Facebook
  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      badgeInfo.badgeImage
    )}&quote=${encodeURIComponent(badgeInfo.badgeText)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  // Function to handle sharing on Twitter
  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      badgeInfo.badgeImage
    )}&text=${encodeURIComponent(badgeInfo.badgeText)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  // Function to handle sharing on LinkedIn
  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      badgeInfo.badgeImage
    )}&title=${encodeURIComponent(badgeInfo.badgeText)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };
  const {fetchUserDetails} = useStateContext()

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
        if (user) {
          console.log(user)
          fetchUserDetails()
        }
    }
    )
}, [])
  return (
    <div>
      <Navbar id={id} />
      <section
        className='flex flex-wrap w-full h-auto mx-auto'>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-5`}>
          <div className='hidden md:flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5  rounded-full bg-[#FF884B]' />
            <div className='w-1  h-40 violent-gradient' />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>Your <span className='text-[#FF884B]'>Profile</span></h1>
            <div className='my-4'>
              {/* Social Sharing Buttons */}
              <button
                onClick={shareOnFacebook}
                className=' text-white px-1 py-1 rounded-full mr-2 hover:transform hover:scale-110 hover:rotate-12'
              >
                {/** Facebook icon */}
                <SocialIcon network="facebook" />
              </button>
              <button
                onClick={shareOnTwitter}
                className='text-white px-1 py-1 rounded-full mr-2 hover:transform hover:scale-110 hover:rotate-12'
              >
                <SocialIcon network="twitter" />
              </button>
              <button
                onClick={shareOnLinkedIn}
                className='text-white px-1 py-1 rounded-full mr-2 hover:transform hover:scale-110 hover:rotate-12'
              >
                <SocialIcon network="linkedin" />
              </button>
            </div>

          </div>
          <section className={`${styles.paddingX} mt-10 mx-auto max-w-2xl`}>
            {/* User Profile */}
            <Tilt // Wrap the profile card in Tilt component
              className="Tilt w-full sm:w-auto"
              options={{ max: 25, scale: 1.1 }} // Tilt options
            >
              <div className="bg-tertiary orange-red-gradient shadow-md p-6 rounded-xl sm:text-left">
                <div className="flex justify-center sm:justify-between items-center mb-4 mx-4">
                  <h1 className="text-3xl font-bold mb-4">Dhishna 2023</h1>
                  <h2 className="text-xl font-medium mb-4">#45678</h2>
                </div>
                <div className="mb-4 text-center">
                  <div className="relative inline-block">
                    <img
                      src="url_to_user_image.jpg" // Replace with the URL to the user's image
                      alt="User Profile"
                      className="w-16 h-16 object-cover rounded-full border-2 border-white shadow-lg"
                    />
                    {/* Add a circular user image */}
                  </div>
                  <p className="text-white my-4">{userProfile.username}</p>
                </div>
                <div className="mb-4 text-center">
                  <p className="text-white">{userProfile.email}</p>
                </div>

              </div>
            </Tilt>


            {/* Registered Events */}
            <div className="mt-8">
              <h1 className="text-2xl font-semibold mb-4">Registered Events</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {registeredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-tertiary shadow-md p-6 rounded-lg"
                  >
                    <h2 className="text-lg font-semibold mb-2">
                      {event.eventName}
                    </h2>
                    <p className="text-gray-600">
                      Date: {event.date}<br />
                      Location: {event.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <StarsCanvas />
    </div>
  )
}

export default Profile