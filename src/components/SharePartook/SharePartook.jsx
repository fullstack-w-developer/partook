import React, { useState } from 'react';
import book from "../../assets/images/book.jpg";
import "../../styles/Tab.css";
import Tab from '../Tab/Tab';
import { VscChromeClose } from "react-icons/vsc";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { HiShare } from "react-icons/hi";
import {AiOutlineEye} from "react-icons/ai";
import {BsThreeDots} from "react-icons/bs";
import {AiOutlineHeart} from "react-icons/ai";
import {BsBook} from "react-icons/bs";

const SharePartook = () => {
    const [modal, setOpenModal] = useState(false);
    return (
        <div>
            <div className='sharePartook flexCol'>
                <img src={book} alt="book" />
                <HiShare onClick={() => setOpenModal(!modal)} className='shareIcon' size={28} />
            </div>
            {/* modal */}
            {
                modal && (
                    <>
                        <div className='modalPage '>
                            <div className="flexAlign modal">
                                <h1>اشتراک گذاری پروفایل پرتوک</h1>
                                <VscChromeClose className='closeModal' size={28} onClick={() => setOpenModal(!modal)}/>
                            </div>
                            <div className='grid grid-cols-2 gap-6'>
                                <div className='flexAlign social flexAlign'>
                                    <FaLinkedinIn size={24} className='socialIcon' />
                                    <span>لینکدین</span>
                                </div>
                                <div className='flexAlign social flexAlign'>
                                    <FaTwitter size={24} className='socialIcon' />
                                    <span>توییتر</span>
                                </div>
                                <div className='flexAlign social flexAlign'>
                                    <PiInstagramLogoFill size={24} className='socialIcon' />
                                    <span>اینستاگرام</span>
                                </div>
                                <div className='flexAlign social flexAlign'>
                                    <FaTelegramPlane className='socialIcon' />
                                    <span>تلگرام</span>
                                </div>
                            </div>
                        </div>
                        <div className='openModal' onClick={() => setOpenModal(!modal)}></div>
                    </>
                )
            }
            {/* modal */}
            <div className="textModal">
            <p>پرتوک</p>
            <div className='flexAlign detailIcon'>
                <BsThreeDots className='iconsPartook' />
                <AiOutlineEye className='iconsPartook' />
                <BsBook className='iconsPartook' />
                <AiOutlineHeart className='iconsPartook heart' />
            </div>
            </div>
            <Tab />
        </div>
    )
}

export default SharePartook