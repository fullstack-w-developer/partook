import React from 'react';
import SharePartook from "../components/SharePartook/SharePartook";
import userProfile from "../../assets/images/useAvatar.png"
import PayBox from '../components/Tab/PayBox';
import "../../styles/Tab.css";

const UserProfile = () => {
  return (
    <div>
      <SharePartook imgProfile={userProfile} />
      <div className="mt-10">
        <PayBox />
        <div className="aboutMe">
          <h1>درباره من</h1>
        </div>
      </div>
    </div>
  )
}

export default UserProfile