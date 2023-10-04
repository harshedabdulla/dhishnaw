import React from 'react'
import { app, auth } from '../firebase/config';
import axios from 'axios';


const StateContext = React.createContext()

export const StateContextProvider = ({ children }) => {
    const [userDetails, setUserDetails] = React.useState({
        name: '',
        email: '',
        phone: '',
        profileimg: ''
    })

    const fetchUserDetails = async() => {
        try {
            console.log('aaaauth', auth)
            const headers = {
                headers: {
                    "_uid": auth.currentUser.uid,
                    "Authorization": auth.currentUser.accessToken
                }
            }
            const res = await axios.get('http://localhost:8081/user', headers)
            if(res.data.user_data){
                setUserDetails({
                    name: res.data.user_data.name,
                    email: res.data.user_data.email,
                    phone: res.data.user_data.phone,
                    profileimg: res.data.profileimg
                })
            }
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <StateContext.Provider value={{
        userDetails,
        setUserDetails,
        fetchUserDetails
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => React.useContext(StateContext)
