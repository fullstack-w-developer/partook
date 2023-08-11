import React from 'react'

const VerifyAccount = () => {
    return (
        <div>
            <div className="flexCol">
            <p>کد تایید</p>
            <span>برای فعالسازی حساب کد ارسال شده را وارد کنید</span>
            </div>
            <div>
                <label htmlFor="name">کد فعالسازی</label>
                <input type="number" placeholder='کد فعالسازی' />
            </div>
            <button type='submit'>فعالسازی</button>
        </div>
    )
}

export default VerifyAccount