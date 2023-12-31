import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/Dropdown.css";

const Dropdown = () => {
  return (
    <div>
      <div className='dropdown homeDropdown flex'>
        <Link className='linkMenuLeft flex' to="/">صفحه اصلی</Link>
      </div>
      <div className='dropdown flex'>
        <Link className='linkMenuLeft flex' to="register">ثبت نام</Link>
      </div>
      <div className='dropdown flex'>
        <Link className='linkMenuLeft flex' to="login">ورود</Link>
      </div>
      <div className='dropdown flex'>
        <Link className='linkMenuLeft flex' to="contact">تماس با ما</Link>
      </div>
      <div className='dropdown flex'>
        <Link className='linkMenuLeft flex' to="listbookshop">لیست کتابفروشی ها</Link>
      </div>
      <div className='dropdown flex'>
        <Link className='linkMenuLeft flex' to="aboutus">درباره ما</Link>
      </div>
      <div className='dropdown flex'>
        <Link className='linkMenuLeft flex' to="articlespage">مقالات</Link>
      </div>
      <div className='dropdown flex'>
        <Link className='linkMenuLeft flex' to="UserPanel">پنل کاربری</Link>
      </div>
    </div>
  )
}

export default Dropdown