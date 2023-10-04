import React from 'react'
import Navbar from '../components/Navbar'
import { navLinks } from '../constants'


const Profile = () => {
  const id = [{
    id: "/Profile",
    title: "Profile",
  }]
  return (
    <div>
      <Navbar id={id}/>
      <h1>Profile</h1>
    </div>
  )
}

export default Profile