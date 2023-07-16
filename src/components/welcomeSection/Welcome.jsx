import React from 'react';
import "../../styles/Welcome.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Welcome = () => {
    const [inputUser, setInputUser] = useState("");
    const [errorText, setErrorText] = useState("")

    //when user not write in input
    const interUsernameHandler = () => {
        if (inputUser === "") {
            setErrorText("لطفا نام کاربری خود را وارد کنید.")
        } else {
            setInputUser("");
            window.location.href = "/login"
        }
    }

    //when user press ENTER button
    const keyPressHandler = (e) => {
        if (e.key === "Enter") {
            interUsernameHandler()
        }
    }
    return (
        <div className='welcome flexCol md:px-20 px-10'>
            <h1>به پرتوک خوش آمدید</h1>
            <p className='flexAlign md:text-[22px] text-[16px]'>یک نام کاربری انتخاب کنید</p>
            {errorText && <span className='showErrorText'>{errorText}</span>}
            <div className='inputUser flexAlign'>
                <Link>
                    <button onClick={interUsernameHandler}>شروع</button>
                </Link>
                <input type="text" placeholder='username' value={inputUser} onChange={e => setInputUser(e.target.value)} onClick={keyPressHandler} />
            </div>
            <p className='flexAlign md:text-[22px] text-[16px]'>این سرویس رایگان است و ثبت نام کمتر از یک دقیقه طول می‌کشد.
                یک حامی ارزش هزار فالور دارد. </p>
        </div>
    )
}

export default Welcome