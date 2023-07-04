import React, { useState } from 'react'
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { ContextHeaderFooter } from '../../context/ContextHeaderFooter';
import "../../styles/Header.css"
import Menu from '../Menu/Menu';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
   <ContextHeaderFooter.Consumer>
    {({headerContent}) => (
       <div className='flexAlign' >
       <div>
         <Button text="Find a Bookshop" />
       </div>
       <div>
         <Logo />
       </div>
       <div>
         <HiOutlineMenuAlt1 className='menuIcon' size={26} onClick={() => setOpenMenu(openMenu)}/>
       </div>
    {
      openMenu && (
        <Menu />
      )
    }
    <div onClick={() => setOpenMenu(!openMenu)} className='bg-cover'></div>
     </div>
    )}
   </ContextHeaderFooter.Consumer>
  )
}

export default Header