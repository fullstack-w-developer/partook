import React, { useState } from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";

const Tab = () => {
    const [tab, setTab] = useState(0);
    return (
        <div>
            <button onClick={() => setTab(tab === 0)}>پروفایل</button>
            <button onClick={() => setTab(tab === 1)}>مقاله ها</button>
            {/* profile */}
            <div>
                <div>
                    <p>
                        به عزیزات یه کتاب هدیه بده
                    </p>
                    {/* counter */}
                    <span>نام پرداخت کننده(اختیاری)</span>
                    <textarea cols="550" rows="200"></textarea>
                    <span>متن پیام(اختیاری)</span>
                    <textarea cols="550" rows="200"></textarea>
                    <button>پرداخت</button>
                </div>
                <div className='aboutusProf'>
                    <p>درباره ما</p>
                    <span>
                        پرتوک وبسایتی که خرید کتاب رو براتون اسون میکنه.
                    </span>
                    <p>لینک صفحات کافیته در دیگر سایت ها</p>
                    <div className='flexAlign'>
                        <div className='linkSocialmedia flexAlign'>
                            <FaTwitter size={24} className='socialIcon' />
                            <span>توییتر</span>
                        </div>
                        <div className='linkSocialmedia flexAlign'>
                            <FaLinkedinIn size={24} className='socialIcon' />
                            <span>لینکدین</span>
                        </div>
                        <div className='linkSocialmedia flexAlign'>
                            <PiInstagramLogoFill size={24} className='socialIcon' />
                            <span>اینستاگرام</span>
                        </div>
                        <div className='linkSocialmedia flexAlign'>
                            <FaTelegramPlane />
                            <span>تلگرام</span>
                        </div>
                    </div>
                </div>
                {/* users */}
                {/* users */}
            </div>
            {/* profile */}
        </div>
    )
}

export default Tab