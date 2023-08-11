import React, { useState } from 'react';
import { HiMenu } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io"
import MenuDashboard from './MenuDashboard';
import { Link } from 'react-router-dom';
import { AiOutlineCloseCircle } from "react-icons/ai"

const HeadDashboard = ({text}) => {
    const [menu, setOpenMenu] = useState(false);
    const [notif, setOpenNotif] = useState(false)
    return (
        <div className="flexAlign dashboarHead">
            <div className='flexAlign'>
                <HiMenu size={24} onClick={() => setOpenMenu(!menu)} className='iconsHead' />
                <p className='dashboardText'>{text}</p>
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
                <div className="notifIcon">
                    <IoIosNotificationsOutline size={24} className='iconsHead' onClick={() => setOpenNotif(!notif)} />
                    <span></span>
                </div>
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