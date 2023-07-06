import React from 'react';
import "../../styles/Button.css"

const Button = ({text}) => {
  return (
    <div className='Button flexAlign sm:w-[210px] w-[103px] text-[9px] sm:text-[16px] '>
        <span>
            {text}
        </span>
    </div>
  )
}

export default Button