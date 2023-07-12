import React from 'react';
import { ImSearch } from "react-icons/im";
import book from "../../assets/images/book.jpg";
import avatarBook from "../../assets/images/avatarBook.png";
import Button from "../Button/Button";
import "../../styles/Articles.css"

const contentArticles = [
  { id: 1, head: "دونیت چیست", content: "دونیت چیست دونیت به معنای اهدای مبلغ کوچکی به یک شخص یا سازمان است که محتوای رایگانی را ارائه می‌دهد. با دادن دونیت، شما به ارائه‌دهنده محتوا کمک می‌کنید تا بتواند هزینه‌های تولید محتوا را تامین کرده و ادامه فعالیت خود را در ارائه محتوای رایگان ادامه دهد. استفاده از دونیت به این معناست که شما به جای پرداخت هزینه برای دسترسی به محتوا، از این امکان استفاده می‌کنید که به ارائه‌دهنده محتوا کمک ما ...", img: book },
  { id: 2, head: "قوانین کافیته", content: "شرایط و قوانین استفاده شرایط استفاده از حساب کاربری : سرویس 'پرتوک' به منظور تشویق و فرهنگ سازی برای محتوا های رایگان ایجاد شده است. هرگونه استفاده دیگر و یا سوء استفاده از این سرویس برای امور مجرمانه یا خلاف قوانین کشوری ایران توسط کاربران ممنوع می‌باشد. در صورت مشاهده ،حساب کاربری شخص متخلف به صورت دائم مسدود و به مراجع قانونی ارجاع داده خواهد شد. کاربران در سرویس 'پرتوک' می بایست در زما ...", img: avatarBook, }
]

const Article = () => {
  return (
    <div className='grid md:grid-cols-2'>
      <div>
        <h1>جستجوی مقاله</h1>
        <input type="text" />
        <div>
          <ImSearch />
        </div>
        <div>
          <div>
            <span>پرتوک (3)</span>
          </div>
          <div>
            <span>دونیت (2)</span>
          </div>
          <div>
            <span>قوانین (1)</span>
          </div>
        </div>
      </div>
      <div className='articles'>
        <p>مقاله ها</p>
        <div className='bgArticle'>
          <div className='articlesStart flexAlign'>
            <div className='partookArticle'>
              <img src={book} alt="book" />
              <span>پرتوک</span>
            </div>
            <div className='dateArticle'>
              <span>1402/01/01</span>
            </div>
          </div>
          {
            contentArticles.map((article, id) => {
              return (
                <div key={id}>
                  <h4 className='headArticle'>
                    {article.head}
                  </h4>
                  <div className='contentArticle'>
                    <img src={article.img} alt="book" />
                    <span>
                      {article.content}
                    </span>
                    <Button text="ادامه مقاله" />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Article