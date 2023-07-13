import React from 'react';
import "../../styles/Support.css";
import support from "../../assets/images/support.jpg"

const Support = () => {
  return (
    <div className='support flexCol md:px-20 px-10'>
      <p className='md:text-[22px] text-[16px]'>حمایت</p>
      <h1 className='md:text-[22px] text-[16px]'>به مخاطبان خود یک راه آسان برای تشکر کردن بدهید.</h1>
      <p className='md:text-[22px] text-[16px]'>پرتوک، پشتیبانی را سرگرم کننده و آسان می‌کند. فقط با چند ضربه، طرفداران شما می‌توانند پرداخت را انجام دهند (برای شما قهوه بخرند) و پیام ارسال کنند. آن‌ها حتی نیازی به ایجاد حساب کاربری ندارند!</p>
      <img src={support} alt="support" />
    </div>
  )
}

export default Support