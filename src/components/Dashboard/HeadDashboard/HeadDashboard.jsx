import React from 'react';
import { HiMenu } from "react-icons/hi";
import { HiHome } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io"

const HeadDashboard = () => {
    return (
        <div>
            <div className="flexAlign">
                <HiMenu size={24} />
                <p>داشبورد</p>
                <div className='flexAlign'>
                    <HiHome size={24}/>
                    <IoMdNotifications size={24}/>
                </div>
            </div>
        </div>
    )
}

export default HeadDashboard