import React from 'react';
import "../../styles/Tab.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import book from "../../assets/images/book.jpg";
import { useState } from 'react';

const Profile = () => {
    const [counter, setCounter] = useState(15);
    const addFiveHandler = () => {
        for (let i = 0; i < 6; i++) {
            setCounter(prevState => prevState + 5)
        }
    }

    const addThreeHandler = () => {
        setCounter(prevState => prevState + 30)
    }

    const addOneHandler = () => {
        setCounter(counter)
    }
    return (
        <div className='grid md:grid-cols-2 gap-4 profileTab'>
            <div className='payBox'>
                <p className='flexAlign'>
                    برای پرتوک بک کتاب بخر
                </p>
                {/* counter */}
                <div className="flexCol items-center bgCounter">
                    <div className="flexAlign donaitCounter">
                        <button onClick={addFiveHandler}>5</button>
                        <button onClick={addThreeHandler}>3</button>
                        <button onClick={addOneHandler}>1</button>
                        <span>+</span>
                        <img src={book} alt="book" className='imgDonait' />
                    </div>
                    <span className='result'>
                        {counter} هزار تومان
                    </span>
                </div>
                {/* counter */}
                <div className="payer flexCol">
                    <span>نام پرداخت کننده(اختیاری)</span>
                    <input type="text" placeholder='نام' />
                </div>
                <div className="payer flexCol">
                    <span>متن پیام(اختیاری)</span>
                    <textarea></textarea>
                </div>
                <button className='btnPay' type='submit'>پرداخت</button>
            </div>
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