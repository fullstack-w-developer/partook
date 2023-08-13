import React from 'react';
import Button from '../Button/Button';
import "../../styles/Slider.css";
import patternImg from "../../assets/svg/patternImg.svg"


const Slide = ({ imgSlide, textMain }) => {
    return (
        <>
            <div className='bgSlide flexCol' style={{ backgroundImage: `url(${imgSlide})` }}>
                <h6>تجربه لذت بخش</h6>
                <img src={patternImg} alt="pattern" />
                <div className='detailSlide flexCol md:px-20 px-10'>
                    <h1>
                        {textMain}
                    </h1>
                    <p>
                    یک کتاب بخر و ازش لذت ببر
                    </p>
                </div>
                <Button text="کتابفروشی های ما رو ببین" />
            </div>
        </>
    )
}

export default Slide