import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { styles } from '../style';
import { StarsCanvas } from '../components/canvas';
import { Tilt } from 'react-tilt';
import { useStateContext } from '../context/stateContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';
import { SocialIcon } from 'react-social-icons';

const Profile = () => {
  const { userDetails, allRegEvents, regWorkshops, fetchAllRegisteredEvents, services, fetchServices } = useStateContext();

  const id = [
    {
      id: '/',
      title: 'Home',
    },
    {
      id: '/#workshop',
      title: 'Workshop',
    },
    {
      id: '/#contact',
      title: 'Contact',
    },
    {
      id: '/#testimonials',
      title: 'Testimonials',
    },
  ];

  const badgeInfo = {
    eventName: 'Dhishna 2023',
    badgeText: 'Excited to be a part of Dhishna 2023! Come join me at the workshops and events!\n #Dhishna #Dhishna23 #DhishnaTechFest2023',
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        window.location.href = '/';
      }
    });
  }, []);

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(badgeInfo.badgeImage)}&quote=${encodeURIComponent(badgeInfo.badgeText)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = () => {
    const text = encodeURIComponent(badgeInfo.badgeText);
    const url = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(badgeInfo.badgeImage)}&title=${encodeURIComponent(badgeInfo.badgeText)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const { fetchUserDetails } = useStateContext();

  React.useEffect(() => {
    if (services.length === 0) {
      fetchServices();
    }
    auth.onAuthStateChanged((user) => {
      if (user && userDetails.name === '') {
        fetchUserDetails();
        fetchAllRegisteredEvents();
      }
    });
  }, []);

  return (
    <div>
      <Navbar id={id} />
      <section className="flex flex-wrap w-full h-auto mx-auto">
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-5`}>
          <div>
            <h1 className={`${styles.heroHeadText}`}>Your <span className="text-[#FF884B]">Profile</span></h1>
            <div className="my-4">
              <button
                onClick={shareOnFacebook}
                className="text-white px-1 py-1 rounded-full mr-2 hover:transform hover:scale-110 hover:rotate-12"
              >
                <SocialIcon network="facebook" />
              </button>
              <button
                onClick={shareOnTwitter}
                className="text-white px-1 py-1 rounded-full mr-2 hover:transform hover:scale-110 hover:rotate-12"
              >
                <SocialIcon network="twitter" />
              </button>
              <button
                onClick={shareOnLinkedIn}
                className="text-white px-1 py-1 rounded-full mr-2 hover:transform hover:scale-110 hover:rotate-12"
              >
                <SocialIcon network="linkedin" />
              </button>
            </div>
          </div>
          <section className={`${styles.paddingX} mt-10 mx-auto max-w-2xl`}>
            <Tilt className="Tilt w-full sm:w-auto" options={{ max: 25, scale: 1.1 }}>
              <div className="bg-tertiary orange-red-gradient shadow-md p-6 rounded-xl sm:text-left">
                <div className="flex justify-center sm:justify-between items-center gap-x-48 mb-4 mx-4">
                  <h1 className="text-3xl font-bold mb-4">Dhishna 2023</h1>
                  {auth?.currentUser && <h2 className="text-xl font-medium mb-4">#{auth.currentUser.uid.substring(auth.currentUser.uid.length - 5)}</h2>}
                </div>
                <div className="mb-4 text-center">
                  <div className="relative inline-block">
                    {auth?.currentUser?.photoURL && (
                      <img
                        src={`${userDetails?.profileimg ? ` data:image/jpeg;base64,${userDetails.profileimg}` : auth?.currentUser?.photoURL}`}
                        alt="User Profile"
                        className="w-16 h-16 object-cover rounded-full border-2 border-white shadow-lg"
                      />
                    )}
                  </div>
                  <p className="text-white my-4">{userDetails.name}</p>
                </div>
                <div className="mb-4 text-center">
                  <p className="text-white">{userDetails.email}</p>
                </div>
              </div>
            </Tilt>

            <div className="my-8">
              <h1 className="text-2xl font-semibold mb-4">Registered Workshops</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regWorkshops.map((event, i) => (
                  <div key={event.id} className="bg-tertiary shadow-md p-6 rounded-lg relative">
                    {allRegEvents && allRegEvents.find((a) => a.eventcode === event.code)?.['payment status'] ? (
                      <div className="absolute inset-x-0 bottom-0 h-2 bg-green-600"></div>
                    ) : (
                      <div className="absolute inset-x-0 bottom-0 h-2 bg-red-600"></div>
                    )}
                    <h2 className="text-lg font-semibold mb-2">{services.find((e) => e.event_code === event.code)?.title}</h2>
                    <p className="text-gray-600">
                      Date: {services.find((s) => s.event_code === event.code)?.start_date}
                      <br />
                      Location: {services.find((s) => s.event_code === event.code)?.venue}
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
  );
};

export default Profile;
