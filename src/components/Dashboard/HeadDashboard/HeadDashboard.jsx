import React from 'react';
import { HiMenu } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io"
import MenuDashboard from './MenuDashboard';
import { Link } from 'react-router-dom';

const HeadDashboard = () => {
    return (
        <div className=''>
            <div className="flex items-start">
                <MenuDashboard />
                <div className="flexAlign dashboarHead">
                    <div className='flexAlign'>
                        <HiMenu size={24} />
                        <p className='dashboardText'>داشبورد</p>
                    </div>
                    <div className='flexAlign'>
                        <Link to="profile">
                            <HiHome size={24} className='backToBefore' />
                        </Link>
                        <IoMdNotifications size={24} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadDashboard