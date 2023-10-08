import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { app, auth } from '../firebase/config';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/stateContext';

const Login = () => {
  const [user, setUser] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(true)
      } else {
        setUser(false)
      }
    })
  }, [])



  const insertToDB = async () => {
    try {
      const headers = {
        headers: {
          'folder_name': auth.currentUser.uid,
          'Authorization': auth.currentUser.accessToken
        }
      }
      const res = await axios.post('https://neol7a57w4hxyq6iscz77r3uri0zeali.lambda-url.us-east-1.on.aws/create_folder', {}, headers)
      if (res.data.new == 1) {
        window.location.replace('/form')
      } else if (res.data.new == 0) {
        window.location.replace('/profile')
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
        setUser(true)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
      });
  }

  const {userDetails} = useStateContext()
  return (
    <div>
      <div className='mx-auto'>
        {user ? (
          <Link to='/profile'>
            <img src={`${userDetails.profileimg ? `data:image/jpeg;base64,${userDetails.profileimg}` : auth?.currentUser?.photoURL}`} alt='profilephoto' className='h-9 w-9 rounded-full' />
          </Link>
        ) : (
          <button className='bg-[#FF884B] hover:bg-[#FF783D] text-white font-semibold rounded-sm w-28 py-2 px-4' onClick={handleSigninWithGoogle}>
            Sign in
          </button>
        )}

      </div>
    </div>

  )
}

export default Login