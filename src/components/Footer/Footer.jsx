import React from 'react';
import { ContextHeaderFooter } from '../../context/ContextHeaderFooter';
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <ContextHeaderFooter.Consumer>
      {({ footerContent }) => (
        <div className='flexCol'>
          <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 footerText'>
            <p>حمایت از پرتوک</p>
            <p>نماس با ما</p>
            <p>درباره ما</p>
            <p>راهنمای سایت</p>
            <p>سوالات متداول</p>
          </div>
          <div className='grid grid-cols-3 socialMedia'>
            <FaLinkedinIn size={24} className='socialIcon'/>
            <FaTwitter size={24} className='socialIcon'/>
            <PiInstagramLogoFill size={24} className='socialIcon'/>
          </div>
        </div>
      )}
    </ContextHeaderFooter.Consumer>
  )
}

export default Footer