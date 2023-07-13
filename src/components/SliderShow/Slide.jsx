import React from 'react';
import Button from '../Button/Button';
import "../../styles/Slider.css";
import patternImg from "../../assets/svg/patternImg.svg"

const textSlide = [
    {
        textMain: "مطالعه، یگانه راهی است برای آشنایی و گفتگو با بزرگان روزگار که قرن‌ها پیش در دنیا به سر برده و اکنون در زیر خاک منزل دارند.",
        textPara: "یک کتاب بخر و ازش لذت ببر"
    },
    {
        textSec: "کتاب راستگوترین، بی‌توقع‌ترین، مفیدترین و همیشگی‌ترین رفیق برای هر انسان است.",
        textpara: "یک کتاب بخر و ازش لذت ببر"
    }
    ,
    {
        textSec: "مراقب لحظات آزاد خود باشید. آن لحظات مانند الماس‌های نتراشیده‌اند؛ اگر آن‌ها را بتراشید و خرد کنید؛ ارزش حقیقی خود را از دست می‌دهند .اگر مراقب آن‌ها باشید؛ شفاف‌تر و درخشنده‌تر جلوه خواهند کرد",
        textpara: "یک کتاب بخر و ازش لذت ببر"
    }
]

const Slide = ({ imgSlide }) => {
    return (
        <div className='bgSlide flexCol' style={{ backgroundImage: `url(${imgSlide})` }}>
            <h6>تجربه لذت بخش</h6>
            <img src={patternImg} alt="pattern" />
            {textSlide.map(txt => {
                return (
                    <div className='detailSlide flexCol md:px-20 px-10'>
                        <h1>
                            {txt.textMain}
                        </h1>
                        <p>
                            {txt.textPara}
                        </p>
                    </div>
                )
            })}
            <Button text="کتابفروشی های ما رو ببین" />
        </div>
    )
}

export default Slide