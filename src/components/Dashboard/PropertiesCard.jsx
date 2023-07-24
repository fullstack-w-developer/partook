import React from 'react';
import "../../styles/Dashboard.css"

const PropertiesCard = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-10'>
            <div className="boxEnterName">
                <p>نام خود را وارد کنید</p>
                <div className="flexAlign nameInput
    ">
                    <span>نام</span>
                    <input type="text" />
                </div>
                <button type="submit" className='btnPayDashboard'>ثبت</button>
            </div>
            <div className="boxEnterName">
                <p>شماره شبا خود را وارد کنید</p>
                <div className="flexAlign nameInput
    ">
                    <span>نام</span>
                    <input type="text" />
                </div>
                <div className="flexAlign">
                    <button type="submit" className='btnPayDashboard'>ثبت</button>
                    <button type="submit" className='btnPayDashboard rejectSugg'>انصراف</button>
                </div>
            </div>
        </div>
    )
}

export default PropertiesCard