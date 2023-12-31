import React from 'react'
import { Link } from 'react-router-dom'

const Guide = () => {
  return (
    <div>
      <p>راهنمای سایت</p>
      <h6>محلی برای دونیت(خرید قهوه) محتواهای رایگان</h6>
      <span>خیلی از کسایی که محتوا اموزشی تولید میکنند به صورت رایگان در دسترس عموم مردم قرار می دهد که کار بسیار شایسته ای است و روز به روز شاهد تولید محتوا های رایگان بیشتری در بستر اینترنت هستیم . شاید برای شما هم پیش آمده باشد که با خواندن مقاله ای که از آن لذت برده اید بخواهید از نویسنده آن تشکر کنید که معمولا با ارسال یک ایمیل این کار را انجام میدهید مطمئن گیرنده ایمیل خیلی خوشحال خواهد شد و انگیزه دوچندانی برای ادامه پیدا خواهد کرد</span>
      <h6>پرتوک</h6>
      <span>ما بستری برای تشکر و قدردانی از تولید کننده گان محتوا های رایگان ایجاد کرده ایم. فرقی نمیکند در کدام سایت فعالیت دارید فقط کافی است در پرتوک ثبت نام کنید و لینک کاربری صفحه پروفایل خود را در سایتی که در ان در حال انجام فعالیت هستید قرار دهید.خوانندگان یا بینندگان محتوای شما در صورت تمایل بر روی لینک پرتوک شما کلیک کرده و برای شما قهوه ای خریداری(دونیت) میکنند. شما بعد از رسیدن به سقف 40 هزار تومان می توانید درخواست تسویه را به پرتوک ارسال کنید که در عرض 24 ساعت مبلغ کیف پول از طرف پرتوک به حساب شما واریز خواهد شد.</span>
      <span>با ثبت نام کردن و به اشتراک گذاشتن از ما حمایت کنید .در صورت هرگونه انتقاد یا پیشنهادی می توانید از طریق <Link to="contact">پرتوک</Link> با ما در ارتباط باشید. </span>
    </div>
  )
}

export default Guide