import React from 'react'
import avatar from "../../../assets/images/avatarBook.png"
import { AiFillSetting } from "react-icons/ai"
import { BiPowerOff } from "react-icons/bi"
import { BiSolidDashboard } from "react-icons/bi"
import { BiSolidUser } from "react-icons/bi"
import { TbBrandPaypalFilled } from "react-icons/tb"
import { FcSms } from "react-icons/fc"
import { GiArtilleryShell } from "react-icons/gi"
import { AiFillHeart } from "react-icons/ai"
import "../../../styles/Dashboard.css"
import { AiOutlineCloseCircle } from "react-icons/ai"

const MenuDashboard = ({ state, setState }) => {
  return (
    <>
      <div className='menuDashboard'>
        <div className='closeMenu flexAlign' onClick={() => setState(!state)}>
          <AiOutlineCloseCircle size={24} />
        </div>
        <p className='flexAlign'>پرتوک</p>
        <div className="flexCol profileUserDash">
          <img src={avatar} alt="avatar" />
          <div className="flexAlign">
            <AiFillSetting size={16} className='setting' />
            <BiPowerOff size={16} className='power' />
          </div>
        </div>
        <div className="textCategory">
          <span className='setting'>دسته بندی ها</span>
        </div>
        <div className='flexAlign paraCategory'>
          <BiSolidDashboard size={24} />
          <span>داشبورد</span>
        </div>
        <div className='flexAlign paraCategory'>
          <BiSolidUser size={24} />
          <span>اطلاعات کاربری</span>
        </div>
        <div className='flexAlign paraCategory'>
          <TbBrandPaypalFilled size={24} />
          <span>تراکنش ها</span>
        </div>
        <div className='flexAlign paraCategory'>
          <FcSms size={24} />
          <span>تیکت ها</span>
        </div>
        <div className='flexAlign paraCategory'>
          <AiFillHeart size={24} />
          <span>لایک ها</span>
        </div>
        <div className='flexAlign paraCategory'>
          <GiArtilleryShell size={24} />
          <span>مقاله ها</span>
        </div>
      </div>
      <div className="bgCoverDash" onClick={() => setState(!state)}></div>
    </>
  )
}

export default MenuDashboard