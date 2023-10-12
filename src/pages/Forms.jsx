import React, { useState } from 'react'
import { auth } from '../firebase/config'
import axios from 'axios';



const Forms = () => {
    const [formData, setFormData] = useState({
        name: auth?.currentUser?.displayName || '',
        email: auth?.currentUser?.email || '',
        phoneNumber: auth?.currentUser?.phoneNumber || '',
        photo: null,
    });


    React.useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setFormData({
                    name: auth?.currentUser?.displayName || '',
                    email: auth?.currentUser?.email || '',
                    phoneNumber: auth?.currentUser?.phoneNumber || '',
                    photo: null,
                })
            } else {
                setFormData({
                    name: '',
                    email: '',
                    phoneNumber: '',
                    photo: null,
                })
            }
        }
        )
    }, [])

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'photo' && files[0]) {
            const file = files[0];
            const maxFileSizeInBytes = 2 * 1024 * 1024; // 2MB in bytes
    
            if (file.size >= maxFileSizeInBytes) {
                alert('The selected file is 2MB or larger.');
                return
            }
        }
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'photo' ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const headers = {
                headers: {
                    '_uid': auth.currentUser.uid,
                    'Authorization': auth.currentUser.accessToken
                }
            }
            const formData2 = new FormData();
            formData2.append('name', formData.name);
            formData2.append('email', formData.email);
            formData2.append('phone', formData.phoneNumber);
            formData2.append('image', formData.photo);
            const res = await axios.post('https://neol7a57w4hxyq6iscz77r3uri0zeali.lambda-url.us-east-1.on.aws/insertUser', formData2, headers)
            //console.log(res)
            if (res.data.success) {
                window.location.replace('/profile')
            }
        } catch (error) {
            //console.log(error)
        }
        //console.log(formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-tertiary">
            <div className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-2xl text-white font-bold mb-6">Enter your details</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="blocktext-white font-bold mb-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-tertiary appearance-none border rounded w-full py-2 px-3 text-white leading-tight placeholder:text-secondary focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-white font-bold mb-2">
                            Phone Number:
                        </label>
                        <input
                            type="tel"
                            placeholder="Enter your phone no"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="placeholder:text-secondary bg-tertiary appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">

                        <label htmlFor="photo" className="block text-white font-bold mb-2">
                            Photo:
                        </label>
                        <input
                            type="file"
                            placeholder="photo"
                            name="photo"
                            accept="image/*"
                            onChange={handleChange}
                            className="bg-tertiary appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <button
                            type="submit"
                            className="bg-[#FF884B] hover:bg-[#FF783D] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Forms