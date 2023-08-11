import React from 'react';
import SharePartook from "../components/SharePartook/SharePartook";
import userProfile from "../assets/images/userAvatar.png";
import PayBox from '../components/Tab/PayBox';
import "../styles/Tab.css";

const UserPanel = () => {
  return (
    <div className='md:px-20 px-10 py-20'>
      <SharePartook imgProfile={userProfile} />
      <div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-4">
        <PayBox />
        <div className="aboutMe">
          <p>درباره من</p>
        </div>
      </div>
    </div>
  )
}

export default UserPanel