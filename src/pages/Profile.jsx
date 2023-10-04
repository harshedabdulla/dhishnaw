import React from 'react'
import Navbar from '../components/Navbar'
import { navLinks } from '../constants'
import { styles } from '../style'
import { StarsCanvas } from '../components/canvas'
import { Tilt } from 'react-tilt'



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

  return (
    <div>
      <Navbar id={id}/>
      <section
    className='relative w-full h-[440px] mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#FF884B]' />
          <div className='w-1 sm:h-80 h-40 violent-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Your <span className='text-[#FF884B]'>Profile</span></h1>
          </div>
          <section className={`${styles.paddingX} mt-10 mx-auto max-w-2xl`}>
        {/* User Profile */}
        <Tilt // Wrap the profile card in Tilt component
  className="Tilt"
  options={{ max: 25, scale: 1.1 }} // Tilt options
>
  <div className="bg-tertiary orange-red-gradient shadow-md p-6 rounded-xl">
    <div className="flex justify-between items-center mb-4 mx-4">
      <h1 className="text-3xl font-bold mb-4">Dhishna 2023</h1>
      <h2 className="text-xl font-medium mb-4">#45678</h2>
    </div>
    <div className="mb-4 text-center">
      <div className="relative inline-block">
        <img
          src="url_to_user_image.jpg" // Replace with the URL to the user's image
          alt="User Profile"
          className="w-16 h-16 object-cover rounded-full border-4 border-white shadow-md"
        />
        {/* Add a circular user image */}
      </div>
      <p className="text-white">{userProfile.username}</p>
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
                className="bg-tertiary shadow-md p-6 rounded-md"
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
        <StarsCanvas  />
    </div>
  )
}

export default Profile