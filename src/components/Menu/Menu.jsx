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
        <h1>Visit Us</h1>
        <p>Tehran,Africa St, tehran 9899,IR</p>
        <p>Bookshop@test.com</p>
        <span></span>
        <p>Booking Request</p>
        <a href='#'>+987654321</a>
      </div>
    </div>
  )
}

export default Menu