import React from 'react';
import "../../styles/Welcome.css";

const Welcome = () => {
    return (
        <div className='welcome flexCol md:px-20 px-10'>
            <h1>به پرتوک خوش آمدید</h1>
            <p className='flexAlign md:text-[22px] text-[16px]'>یک نام کاربری انتخاب کنید</p>
            <div className='inputUser flexAlign'>
                <button>شروع</button>
                <input type="text" placeholder='username' />
            </div>
            <p className='flexAlign md:text-[22px] text-[16px]'>این سرویس رایگان است و ثبت نام کمتر از یک دقیقه طول می‌کشد.
                یک حامی ارزش هزار فالور دارد. </p>
        </div>
    )
}

export default Welcome