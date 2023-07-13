import React from 'react';
import { Link } from 'react-router-dom';
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkdin.png";
import twitter from "../assets/images/twitter.png";
import "../styles/AboutUs.css"

const AboutUs = () => {
  return (
    <div className='aboutUs'>
      <p>درباره من</p>
      <h1>پرتوک</h1>
      <span>پرتوک در سال 1400 تاسیس شد .
        هدف ما از ساختن کافیته این بود که همه پیچیدگی ها را از بین ببریم و به کاربران راهی ساده برای دریافت حقوق و ارتباط با طرفداران خود ارائه دهیم .
        ما معتقدیم تقریباً همه در آینده برای خود کار خواهند کرد - ماموریت ما این است که افراد را برای دستیابی به این هدف توانمند کنیم .</span>
        <div className="flexAlign socialLinkUs">
          <Link>
          <img src={instagram} alt="instagram" />
          </Link>
          <Link>
          <img src={linkedin} alt="linkdin" />
          </Link>
          <Link>
          <img src={twitter} alt="twitter" />
          </Link>
        </div>
    </div>
  )
}

export default AboutUs