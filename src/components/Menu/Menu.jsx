import React from 'react';
import { RiCloseLine } from "react-icons/ri";
import Logo from "../Logo/Logo"

const Menu = ({ state, setState }) => {
  return (
    <div className='flexCol menu-left'>
      <div>
        <RiCloseLine onClick={() => setState(!state)} className='close-menu'/>
      </div>
      <Logo />
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