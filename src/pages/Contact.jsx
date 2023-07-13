import React from 'react';
import "../styles/Contact.css"

const Contact = () => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-8 mt-20 md:px-20 px-10'>
      <div className="flexCol contact">
        <h6>پیشنهادات و انتقادات خود را به ما بگویید</h6>
        <p>لطفا با ارائه نظرات و پیشنهادات و انتقادات خود ما را در بهبود وظایف یاری فرمایید . در صورتی که هرگونه نظر ، انتقاد و پیشنهادی نسبت به فعالیت های سایت پرتوک دارید ، خوشحال می شویم اگر از این طریق ما را آگاه فرمایید . نظرات شما حتماً مورد بررسی قرار خواهد گرفت . پیشاپیش از توجه شما تشکر می کنیم .</p>
      </div>
      <div className="flexCol contact">
        <h6>
          تماس با ما
        </h6>
        <h6>
          موضوع
        </h6>
        <input type="text" />
        <h6>
          ایمیل
        </h6>
        <input type="email" />
        <h6>
          پیام
        </h6>
        <textarea></textarea>
        <button type='submit'>
          ثبت
        </button>
      </div>
    </div>
  )
}

export default Contact