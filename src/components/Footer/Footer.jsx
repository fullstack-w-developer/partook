import React from 'react';
import { ContextHeaderFooter } from '../../context/ContextHeaderFooter';
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import "../../styles/Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <ContextHeaderFooter.Consumer>
      {({ footerContent }) => (
        <div className='flexCol'>
          <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 footer'>
            <Link to="donait" className='footerText'>حمایت از پرتوک</Link>
            <Link to="contact" className='footerText'>تماس با ما</Link>
            <Link to="aboutus" className='footerText'>درباره ما</Link>
            <Link to="guide" className='footerText'>راهنمای سایت</Link>
            <Link to="question" className='footerText'>سوالات متداول</Link>
          </div>
          <div className='flexAlign socialMedia'>
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