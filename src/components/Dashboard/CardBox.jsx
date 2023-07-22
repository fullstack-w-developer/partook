import React from 'react';
import { AiFillHeart } from "react-icons/ai";
import "../../styles/Dashboard.css";

const cards = [
  {
    id: 1, headCard: "ساعت", count: 0, amount: "1402/02/02", borderCount: <AiFillHeart />, colorCount: "red",colorBorderCount:"red"
  },
  {
    id: 2, headCard: "امار کتاب های من", count: 0, amount: "مبلغ کتاب ها(تومان)", borderCount: "0", colorCount: "#FC5C7D",colorBorderCount:"#FC5C7D"
  },
  { id: 3, headCard: "کتاب های امروز من", count: 0, amount: "مبلغ کتاب ها(تومان)", borderCount: "0", colorCount: "#2657eb",colorBorderCount:"#2657eb" },
  { id: 4, headCard: "برداشت های من", count: 0, amount: "مبلغ کتاب ها(تومان)", borderCount: "0", colorCount: "#fffc00",colorBorderCount:"#fffc00" },
  {
    id: 5, headCard: "کیف پول من", count: 0, amount: "مبلغ(تومان)", borderCount: "Wallet", colorCount: "#ff00cc",colorBorderCount:"#ff00cc"
  },
  {
    id: 6, headCard: "لایک های من", count: 0, amount: "نعداد لایک های من", borderCount: <AiFillHeart />, colorCount: "#ff6a00", colorBorderCount:"#ff6a00"
  }
]

const CardBox = () => {
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-12'>
      {
        cards.map(card => {
          const { headCard, count, amount, borderCount, colorCount, id, colorBorderCount } = card
          return (
            <div className='cardBox' key={id}>
              <h6>{headCard}</h6>
              <div className='flexAlign cardAmount'>
                <div className='countBox' style={{borderColor: colorBorderCount, color: colorBorderCount}}>
                  <p>
                    {borderCount}
                  </p>
                </div>
                <div className='flexCol countCard'>
                  <span style={{ color: colorCount }}>
                    {count}
                  </span>
                  <p className='paraBox'>{amount}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default CardBox