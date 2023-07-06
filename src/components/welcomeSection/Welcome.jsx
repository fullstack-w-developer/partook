import React from 'react'

const Welcome = () => {
    return (
        <div>
            <h1>به پرتوک خوش آمدید</h1>
            <p>یک نام کاربری انتخاب کنید</p>
            <div>
                <button>شروع</button>
                <input type="text" placeholder='username' />
            </div>
            <p>این سرویس رایگان است و ثبت نام کمتر از یک دقیقه طول می‌کشد.
                یک حامی ارزش هزار فالور دارد. </p>
        </div>
    )
}

export default Welcome