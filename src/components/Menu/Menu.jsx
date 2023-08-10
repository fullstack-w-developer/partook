import React from 'react';
import { RiCloseLine } from "react-icons/ri";
import Logo from "../Logo/Logo";
import Dropdown from "../Dropdown/Dropdown"

const Menu = ({ state, setState }) => {
  return (
    <div className='flexCol menu-left sm:w-[360px] w-[260px]'>
      <div>
        <RiCloseLine onClick={() => setState(!state)} className='close-menu' size={24}/>
      </div>
      <Logo />
      <Dropdown />
      <div className='content-menu flexCol'>
        <h1>ما رو دنبال کنید</h1>
        <p>تهران، خیابان افریقا</p>
        <p>Bookshop@test.com</p>
        <p>سفارش کتاب</p>
        <a href='#'>+987654321</a>
      </div>
    </div>
  )
}

export default Menu