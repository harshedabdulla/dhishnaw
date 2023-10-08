import React from 'react'
import { app, auth } from '../firebase/config';
import axios from 'axios';
import sanityClient from '../client'

const StateContext = React.createContext()

export const StateContextProvider = ({ children }) => {
    const [userDetails, setUserDetails] = React.useState({
        name: '',
        email: '',
        phone: '',
        profileimg: ''
    })

    const [services, setServices] = React.useState([]);
    const [searchData, setSearchData] = React.useState([]);
    const [regEvents, setRegEvents] = React.useState([])
    const [regComps, setRegComps] = React.useState([])
    const [regWorkshops, setRegWorkshops] = React.useState([])

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
            console.log('OKAYOKAY', res)
            if(res.data.user_data){
                const jsonData1 = JSON.parse(res.data.user_data)
                const jsonData2 = JSON.parse(res.data.event_details)
                console.log(jsonData2)
                setUserDetails({
                    name: jsonData1.name,
                    email: jsonData1.email,
                    phone: jsonData1.phone,
                    profileimg: res.data.profile_img
                })
                setRegEvents(jsonData2.event)
                setRegComps(jsonData2.competition)
                setRegWorkshops(jsonData2.workshop)
            }
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchServices = () => {
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
            console.log('lol')
            setServices(data)
            setSearchData(data)
          }).catch(console.error)
    }
  return (
    <StateContext.Provider value={{
        userDetails,
        services,
        searchData,
        regEvents,
        regWorkshops,
        regComps,
        setSearchData,
        setServices,
        setUserDetails,
        fetchUserDetails,
        fetchServices
    }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => React.useContext(StateContext)
