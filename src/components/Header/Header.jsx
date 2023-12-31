import React, { useContext, useState } from 'react'
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { ContextHeaderFooter } from '../../context/ContextHeaderFooter';
import "../../styles/Header.css"
import Menu from '../Menu/Menu';
import Slider from '../SliderShow/Slider';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const {showHeader} = useContext(ContextHeaderFooter)

  return (
    <ContextHeaderFooter.Consumer>
      {({ headerContent }) => (
        <div className='header-menu' >
          <Slider />
          <div className='head grid grid-cols-3 md:px-20 px-10 items-center'>
            <div>
              <Button text="یک کتابفروشی پیدا کن" />
            </div>
            <div className='flex justify-center'>
              <Logo />
            </div>
            <div className='flex justify-end'>
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