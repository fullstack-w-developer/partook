import React from 'react';
import "../styles/Login.css";
import Button from "../components/Button/Button"

const VerifyAccount = () => {
    return (
        <div className='verify'>
            <div className="flexCol text-center headVerify">
            <p>کد تایید</p>
            <span>برای فعالسازی حساب کد ارسال شده را وارد کنید</span>
            </div>
            <div className='inputVerify flexCol'>
                <label htmlFor="name">کد فعالسازی</label>
                <input type="text" placeholder='کد فعالسازی' />
            </div>
            <div className="flexCol items-center mt-2">
            <Button text="فعالسازی"/>
            </div>
        </div>
    )
}

export default VerifyAccount