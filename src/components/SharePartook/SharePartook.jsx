import React, {useState} from 'react';
import { VscChromeClose } from "react-icons/vsc";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { HiShare } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBook } from "react-icons/bs";

const SharePartook = ({imgProfile}) => {
  const [modal, setOpenModal] = useState(false);
    return (
        <>
            <div className='sharePartook flexCol'>
                <img src={imgProfile} alt="profile" />
                <HiShare onClick={() => setOpenModal(!modal)} className='shareIcon' size={28} />
            </div>
            {/* modal */}
            {
                modal && (
                    <>
                        <div className='modalPage '>
                            <div className="flexAlign modal">
                                <h1>اشتراک گذاری پروفایل پرتوک</h1>
                                <VscChromeClose className='closeModal' size={28} onClick={() => setOpenModal(!modal)} />
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
                <p className='flexAlign'>پرتوک</p>
                <div className='flexAlign detailIcon'>
                    <div className='iconsPartook flexAlign'>
                        <BsThreeDots className='dot' size={24} />
                    </div>
                    <div className='iconsPartook flexAlign'>
                        <AiOutlineEye className='eye' size={24} />
                    </div>
                    <div className='iconsPartook flexAlign'>
                        <BsBook className='book' size={24} />
                    </div>
                    <div className='iconsPartook flexAlign'>
                        <AiOutlineHeart className='heart' size={24} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SharePartook