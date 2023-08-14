import React, { useEffect, useState } from 'react';
import "../styles/Login.css";
import Button from "../components/Button/Button"
import { useLocation } from 'react-router-dom';

const VerifyAccount = () => {
    const location = useLocation();
    const [activationCode, setActivationCode] = useState("");
    useEffect(() => {
        if(location.state && location.state.activationCode){
            setActivationCode(location.state.activationCode)
        }
    }, [location.state]);

    const handleActivation = async () => {
        try {
            // ارسال کد فعالسازی به سرور و انجام عملیات مرتبط
            const response = await AuthServices.VerifyActivationCode(activationCode);
            if (response.success) {
                // عملیات موفقیت‌آمیز بعد از فعالسازی حساب
                // مثلاً نمایش پیامی به کاربر
                console.log("حساب کاربری با موفقیت فعال شد.");
            } else {
                // عملیات ناموفق بعد از فعالسازی حساب
                // مثلاً نمایش پیام خطا به کاربر
                console.error("مشکلی در فعالسازی حساب کاربری رخ داده است.");
            }
        } catch (error) {
            console.error("خطا در ارسال کد فعالسازی:", error);
        }
    };
    return (
        <div className='verify'>
            <div className="flexCol text-center headVerify">
            <p>کد تایید</p>
            <span>برای فعالسازی حساب کد ارسال شده را وارد کنید</span>
            </div>
            <div className='inputVerify flexCol'>
                <label htmlFor="name">کد فعالسازی</label>
                <input type="text" placeholder='کد فعالسازی' value={activationCode} />
            </div>
            <div className="flexCol items-center mt-2">
            {/* <Button text="فعالسازی"/> */}
            <button type='submit' onClick={handleActivation}>فعالسازی</button>
            </div>
        </div>
    )
}

export default VerifyAccount