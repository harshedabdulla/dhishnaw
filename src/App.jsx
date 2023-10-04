import { BrowserRouter, Routes, Route } from "react-router-dom"
import Forms from "./pages/Forms"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import { auth } from './firebase/config'
import { useState } from "react"
import { useEffect } from "react"

const App = () => {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/form' element={<Forms />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App