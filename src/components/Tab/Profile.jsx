import React from 'react';
import "../../styles/Tab.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import PayBox from './PayBox';

const Profile = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 profileTab'>
           <PayBox />
            <div className='aboutusProf'>
                <p>درباره ما</p>
                <span>
                    پرتوک وبسایتی که خرید کتاب رو براتون اسون میکنه.
                </span>
                <p>لینک صفحات کافیته در دیگر سایت ها</p>
                <div className='flexAlign linkSocial'>
                    <div className='linkSocialmedia'>
                        <FaTwitter size={24} />
                    </div>
                    <div className='linkSocialmedia'>
                        <FaLinkedinIn size={24} />
                    </div>
                    <div className='linkSocialmedia'>
                        <AiFillInstagram size={24} />
                    </div>
                    <div className='linkSocialmedia'>
                        <FaTelegramPlane size={24} />
                    </div>
                </div>
            </div>
            {/* users */}
            {/* users */}
        </div>
    )
}

export default Profile