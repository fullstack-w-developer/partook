import React from 'react';
import SharePartook from "../SharePartook/SharePartook";
import userProfile from "../../assets/images/useAvatar.png"
import PayBox from '../Tab/PayBox';
import "../../styles/Tab.css";

const UserProfile = () => {
  return (
    <div>
        <SharePartook imgProfile={userProfile}/>
        <PayBox />
        <div className="aboutMe">
          <h1>درباره من</h1>
        </div>
    </div>
  )
}

export default UserProfile