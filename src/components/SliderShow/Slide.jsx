import React from 'react'
import Button from '../Button/Button';
import "../../styles/Slider.css"

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
        <div className='bgSlide' style={{ backgroundImage: `url(${imgSlide})` }}>
            {textSlide.map(txt => {
                return (
                    <div className='detailSlide flexAlign'>
                        <h1>
                            {txt.textMain}
                        </h1>
                        <p>
                            {txt.textPara}
                        </p>
                    </div>
                )
            })}
            <Button text="View Our Bookshop" />
        </div>
    )
}

export default Slide