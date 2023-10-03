import React from 'react'
import { getAuth ,signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { app } from '../firebase/config';


const Login = () => {


    const handleSigninWithGoogle=()=>{
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
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