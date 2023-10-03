import React from 'react'
import { getAuth ,signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { app, auth } from '../firebase/config';
import { github } from '../assets';
import axios from 'axios'

const Login = () => {

  React.useEffect(() => {
    console.log(auth.currentUser.uid)
  }, [auth])

    const insertToDB = async() => {
      try {
        const headers = {
          headers: {
            'folder_name': auth.currentUser.uid
          }
        }
        const res = await axios.post('http://localhost:8081/create_folder', {}, headers)
        if(res.data.new == 1){
          window.location.replace('/profile')
        }else if(res.data.new == 0){
          window.location.replace('/form')
        }
      } catch (error) {
        console.log(error)
      }
    }

    const handleSigninWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            insertToDB()
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorMessage);
          });
      }


    return (
        <div>
             <div className='mx-auto'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4' onClick={handleSigninWithGoogle}>
                    Sign in with Google
                    </button>
            </div>
        </div>
    
      )
}

export default Login