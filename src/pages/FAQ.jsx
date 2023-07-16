import React, { useState } from 'react';

const accordions = [
  { id: 1, head: "پرتوک چیست", para: "پرتوک ساده‌ترین راه برای شروع درآمدزایی مستقیم از طرفداران است. خوانندگان یا بینندگان محتوا‌های شما در صورت تمایل به حمایت مبلغ دلخواهی تحت عنوان خرید قهوه برای شما اهدا می‌کنند." }
]

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleAccordion = (accordionId) => {
    if (open === accordionId) {
      setOpen(null);
    } else {
      setOpen(accordionId)
    }
  };

  return (
    <div>
      <h1>سوالات متداول</h1>
      {
        accordions.map(accordion => {
          return (
            <div className="" onClick={() => toggleAccordion(accordion.id)} key={accordion.id}>
              <ol>
                <li>
                  {accordion.head}
                </li>
              </ol>
              {
                open === accordion.id && (
                  <div>
                    <span>
                      {accordion.para}
                    </span>
                  </div>
                )
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default FAQ

