import React, { useState } from 'react';
import SharePartook from "../components/SharePartook/SharePartook";
import { BsThreeDotsVertical } from "react-icons/bs";
import book from "../assets/images/book.jpg";
import { BsHeart } from "react-icons/bs";
import "../styles/Articles.css"

const Articles = () => {
    const [openBox, setOpenBox] = useState(false);
    const [like, setLike] = useState(false);
    return (
        <div>
            <SharePartook />
            <div className='content'>
                <div className="flexAlign contentPage">
                    <div className='flexCol'>
                        <span className='headArticle flex'>دونیت چیست</span>
                        <p className='dateArticle'>1402/01/01</p>
                    </div>
                    <div>
                        <BsThreeDotsVertical size={24} onClick={() => setOpenBox(!openBox)} className='iconDot' />
                    </div>
                    {
                        openBox && (
                            <div className='boxOpen flexAlign'>
                                <span>گزارش تخلف</span>
                            </div>
                        )
                    }
                </div>
                <h1 className='headerArticles'>دونیت چیست</h1>
                <p>
                    دونیت به معنای اهدای مبلغ کوچکی به یک شخص یا سازمان است که محتوای رایگانی را ارائه می‌دهد. با دادن دونیت، شما به ارائه‌دهنده محتوا کمک می‌کنید تا بتواند هزینه‌های تولید محتوا را تامین کرده و ادامه فعالیت خود را در ارائه محتوای رایگان ادامه دهد.
                    استفاده از دونیت به این معناست که شما به جای پرداخت هزینه برای دسترسی به محتوا، از این امکان استفاده می‌کنید که به ارائه‌دهنده محتوا کمک مالی کنید و او بتواند در ارائه محتوای رایگان بهتر عمل کند. بااین کار، می‌توانید به عنوان یک حمایت مالی از محتوای رایگان ارائه شده، به نوعی به ارائه‌دهنده محتوا انگیزه بدهید تا بیشتر و بهترین محتواها را ارائه کند و شما نیز از محتواهای با کیفیت و رایگان بهره‌مند شوید.
                </p>
                <h1 className='headerArticles'>پرتوک چیست</h1>
                <p>در پلتفرم دونیشن پرتوک کاربران می‌توانند به راحتی و با استفاده از درگاه‌های پرداخت آنلاین، به ارائه‌دهندگان محتوای رایگان کمک مالی کنند. این پلتفرم به عنوان یک راه‌حل ساده و امن برای حمایت مالی از محتوای رایگان، برای افراد و شرکت‌ها و همچنین برای ارائه‌دهندگان محتوای رایگان طراحی شده است. با استفاده از پلتفرم دونیشن پرتوک، ارائه‌دهندگان محتوای رایگان می‌توانند به راحتی حمایت مالی از کاربران خود را دریافت کنند و کاربران همچنین می‌توانند به سادگی و با چند کلیک دسترسی به صفحات دونیشن ارائه‌دهندگان مورد نظر خود داشته باشند و دونیت خود را انجام دهند.</p>
                <img src={book} alt="book" className='bookArticle flexAlign'/>
                <div className='flexAlign'>
                    <BsHeart className={like ? "likeArticle" : "disslike"} size={20} onClick={() => setLike(!like)}/>
                    <span>1</span>
                </div>
            </div>
        </div>
    )
}

export default Articles