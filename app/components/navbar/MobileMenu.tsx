'use client'
import { useGlobalState } from '@/app/context/globalProvider'
import { infoGame, support, more, navbarLinks } from '@/app/utils/const';
import { Menu, Cancel, ValorantIcon, AngleDown } from '@/app/utils/Icons'
import { NavbarDropdown } from '@/app/utils/interfaces';
import Link from 'next/link';
import React, { useState } from 'react'

interface DropDownContentProps {
  links: NavbarDropdown[];
  dropDownClick: () => void; // Define the type of dropDownClick function
}

const DropDownContent: React.FC<DropDownContentProps> = ({ links, dropDownClick }) => {
  return (
    <div className="text-[15px] text-white flex flex-col gap-[15px] mt-[20px]">
      {
        links.map((item) => {
          return (
            <Link onClick={dropDownClick} key={item.id} href={item.link} className='text-lightBrown'>{item.title}</Link>
          )
        })
      }
    </div>
  )
}

const MobileMenu = () => {
  const { menuClick, closeMenu, openMenu } = useGlobalState();

  const [click, setClick] = useState(false);
  const [navLinkClick, setNavLinkClick] = useState(false);
  const [navId, setNavId] = useState(0);

  const handleClick = () => {
    setClick(!click);
  };

  const handlenavLinkClick = (id:number) => {
    setNavLinkClick(!navLinkClick);
    setNavId(id)
  };
  
  return (
    <>
      <button onClick={() => {
        handleClick();
        openMenu();
      }} className='block xl:hidden p-[10px] bg-darkBrown rounded-full'>
        <Menu size={25} color='white'/>
      </button>
      {(click) && (
        <div className="absolute top-0 left-0 bg-black bg-opacity-65 w-full h-[100vh] flex justify-end">
        </div>
      )}

      {/* Menu */}
      <div className={`z-50 fixed overflow-y-scroll top-0 right-0 bg-darkBrown h-[100vh] p-[2rem] w-[100%] md:w-[40%] transition-transform duration-500 ease-in-out ${(click && menuClick === true) ? 'translate-x-0' : 'translate-x-[900px] xl:translate-x-[1400px]'} flex flex-col`}>
        <div className="flex items-center justify-between">
          <ValorantIcon />
          <button onClick={handleClick}><Cancel size={25} color='white' /></button>
        </div>

        <ul className="flex flex-col gap-[20px] mt-[20px]">
          {navbarLinks.map((item, idx) => {
            const index = item.id;

            return (
              <li key={item.id} onClick={() => {handlenavLinkClick(item.id)}} className='uppercase text-[1.3rem]'>
                <Link href={item.link} className='flex items-center justify-between'>
                  <span>{item.title}</span>
                  {(item.id === 1 || item.id === 5 || item.id === 6) && (
                    <AngleDown size={25} color='white'/>
                  )}
                </Link>
                {(navId === 1 && index === 1 && navLinkClick) && (
                  <div className="">
                    <DropDownContent dropDownClick={() => {
                      closeMenu()
                      handleClick()
                    }} links={infoGame}/>
                  </div>
                )}
                {(navId === 5 && index === 5 && navLinkClick) && (
                  <div className="">
                    <DropDownContent dropDownClick={() => {
                      closeMenu()
                      handleClick()
                    }} links={support}/>
                  </div>
                )}
                {(navId === 6 && index === 6 && navLinkClick) && (
                  <div className="">
                    <DropDownContent dropDownClick={() => {
                      closeMenu()
                      handleClick()
                    }} links={more}/>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
        
        <Link href={'#'} className='text-center font-anton text-white py-[10px] px-[20px] rounded-[10px] bg-red-800 text-[12px] uppercase transition-colors duration-300 ease-in-out'>Play Now</Link>
      </div>
      {/* Menu */}
    </>
  )
}

export default MobileMenu