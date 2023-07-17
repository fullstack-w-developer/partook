import React from 'react';
import "../../styles/Dashboard.css";

const CardBoxNotif = () => {
    return (
        <div className='dashboard mt-14'>
            <p>اطلاعیه ها</p>
            <div className="dashboardNotif">
                <span>
                    "با احترام به کاربران گرامی، لطفا توجه داشته باشید که درخواست تسویه حساب از طریق درگاه پرداخت زرین پال به صورت فوری انجام می‌گیرد و ممکن است با این حال، به دلیل درخواست های زیاد بانکی، تا دو روز کاری به طول بیانجامد. برای پیگیری وضعیت پرداخت، میتوانید به قسمت تراکنش ها در سامانه مراجعه کرده و بر روی زرین پال کلیک نمایید.
                    در پایان، از اعتماد و توجه شما به خدمات ما سپاسگزاریم."
                </span>
            </div>
        </div>
    )
}

export default CardBoxNotif