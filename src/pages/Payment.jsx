import React from 'react';
import HeadDashboard from "../components/Dashboard/HeadDashboard/HeadDashboard";
import "../styles/Payment.css"

const Payment = () => {
  return (
    <div className='md:px-20 px-10 py-10'>
        <HeadDashboard text="لیست تراکنش ها"/>
        <div className="overflow-x-auto">
          <p className='payment'>کیف پول من</p>
          <span className='payment m-0'>
          موجودی کیف پول من: 0 تومان
          </span>
          <table className='mt-10'>
            <tr className=''>
              <th>نام پرداخت کننده</th>
              <th>زمان پرداخت</th>
              <th>توضیحات</th>
              <th>مبلغ</th>
              <th>نوع پرداخت</th>
              <th>نمایش در صفحه شخصی</th>
              <th>وضعیت</th>
              <th>نحوه پرداخت</th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
    </div>
  )
}

export default Payment