import React, { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io"
import MenuDashboard from './MenuDashboard';
import { Link } from 'react-router-dom';
import { AiOutlineCloseCircle } from "react-icons/ai"

const HeadDashboard = () => {
    const [menu, setOpenMenu] = useState(false);
    const [notif, setOpenNotif] = useState(false)
    return (
        <div className="flexAlign dashboarHead">
            <div className='flexAlign'>
                <HiMenu size={24} onClick={() => setOpenMenu(!menu)} className='iconsHead' />
                <p className='dashboardText'>داشبورد</p>
            </div>
            {
                menu && (
                    <MenuDashboard state={menu} setState={setOpenMenu} />
                )
            }
            <div className='flexAlign'>
                <Link to="profile">
                    <HiHome size={24} className='backToBefore iconsHead' />
                </Link>
                <IoMdNotifications size={24} className='iconsHead' onClick={() => setOpenNotif(!notif)} />
                {notif && (
                   <>
                    <div className='flex notifications'>
                        <span>اعلانات</span>
                        <AiOutlineCloseCircle size={24} onClick={() => setOpenNotif(!notif)} className='closeNotif' />
                    </div>
      <div className="bgCoverDash" onClick={() => setOpenNotif(!notif)}></div>
                   </>
                )}
            </div>
        </div>
    )
}

export default HeadDashboard