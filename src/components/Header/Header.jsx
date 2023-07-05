import React, { useState } from 'react'
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { ContextHeaderFooter } from '../../context/ContextHeaderFooter';
import "../../styles/Header.css"
import Menu from '../Menu/Menu';
import Slider from '../SliderShow/Slider';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <ContextHeaderFooter.Consumer>
      {({ headerContent }) => (
        <div className='header-menu' >
          <Slider />
          <div className='head flexAlign grid'>
            <div>
              <Button text="Find a Bookshop" />
            </div>
            <div>
              <Logo />
            </div>
            <div>
              <HiOutlineMenuAlt1 className='menu-icon' size={26} onClick={() => {
                setOpenMenu(!openMenu);

              }} />
            </div>
            {
              openMenu && (
                <Menu state={openMenu} setState={setOpenMenu} />
              )
            }
            {
              openMenu && (
                <div className='bg-cover' onClick={() => setOpenMenu(!openMenu)}></div>
              )
            }
          </div>
        </div>
      )}
    </ContextHeaderFooter.Consumer>
  )
}

export default Header