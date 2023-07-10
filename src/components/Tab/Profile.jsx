import React from 'react';
import "../../styles/Tab.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

const Profile = () => {
    return (
        <div className='grid md:grid-cols-2 gap-4 profileTab'>
            <div className='payBox'>
                <p className='flexAlign'>
                    به عزیزات یه کتاب هدیه بده
                </p>
                {/* counter */}
                <div className="payer flexCol">
                    <span>نام پرداخت کننده(اختیاری)</span>
                    <input type="text" placeholder='نام' />
                </div>
                <div className="payer flexCol">
                    <span>متن پیام(اختیاری)</span>
                    <textarea></textarea>
                </div>
                <button className='btnPay'>پرداخت</button>
            </div>
            <div className='aboutusProf'>
                <p>درباره ما</p>
                <span>
                    پرتوک وبسایتی که خرید کتاب رو براتون اسون میکنه.
                </span>
                <p>لینک صفحات کافیته در دیگر سایت ها</p>
                <div className='flexAlign linkSocial'>
                    <div className='linkSocialmedia flexAlign'>
                        <div>
                            <FaTwitter size={24} className='' />
                        </div>
                        <div>
                            <span>توییتر</span>
                        </div>
                    </div>
                    <div className='linkSocialmedia flexAlign'>
                        <FaLinkedinIn size={24} className='' />
                        <span>لینکدین</span>
                    </div>
                    <div className='linkSocialmedia flexAlign'>
                        <AiFillInstagram size={24} className='' />
                        <span>اینستاگرام</span>
                    </div>
                    <div className='linkSocialmedia flexAlign'>
                        <FaTelegramPlane size={24} />
                        <span>تلگرام</span>
                    </div>
                </div>
            </div>
            {/* users */}
            {/* users */}
        </div>
    )
}

export default Profile