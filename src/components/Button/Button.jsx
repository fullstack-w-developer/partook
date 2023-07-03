import React from 'react';
import "../../styles/Button.css"

const Button = ({text}) => {
  return (
    <div className='Button flexAlign'>
        <span>
            {text}
        </span>
    </div>
  )
}

export default Button