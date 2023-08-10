import React, { useState } from 'react';
import book from "../../assets/images/book.jpg";

const PayBox = () => {
    const [counter, setCounter] = useState(15);
    const addFiveHandler = () => {
        for (let i = 0; i < 1; i++) {
            setCounter(prevState => prevState * 5)
        }
    }

    const addThreeHandler = () => {
        for (let i = 0; i < 1; i++) {
            setCounter(prevState => prevState * 3)
        }
    }

    const addOneHandler = () => {
        setCounter(counter)
    }
    return (
        <div className='payBox'>
            <p className='flexAlign'>
                برای پرتوک یک کتاب بخر
            </p>
            {/* counter */}
            <div className="flexCol items-center bgCounter">
                <div className="flexAlign donaitCounter">
                    <button onClick={addFiveHandler}>5</button>
                    <button onClick={addThreeHandler}>3</button>
                    <button onClick={addOneHandler}>1</button>
                    <span>+</span>
                    <img src={book} alt="book" className='imgDonait' />
                </div>
                <span className='result'>
                    {counter} هزار تومان
                </span>
            </div>
            {/* counter */}
            <div className="payer flexCol">
                <span>نام پرداخت کننده(اختیاری)</span>
                <input type="text" placeholder='نام' />
            </div>
            <div className="payer flexCol">
                <span>متن پیام(اختیاری)</span>
                <textarea></textarea>
            </div>
            <button className='btnPay' type='submit'>پرداخت</button>
        </div>
    )
}

export default PayBox