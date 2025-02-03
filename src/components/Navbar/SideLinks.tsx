'use client'
import React from 'react'
import SideLink from './SideLink';
import { RootState } from '../../redux/store';
import { useAppSelector } from '../../redux/hook';
import SideLinkDropdown from '../Buttons/SideLinkDropdown';
import { GameInfoDropDownContent, OurSocialDropdownContent, SupportDropdownContent } from '../../utils/const';

const SideLinks = () => {
  const hamburgerClick = useAppSelector((state:RootState) => state.utility.hamburgerClick);

  return (
    <section className={`z-50 fixed xl:hidden w-full top-[80px] right-0 max-h-[calc(100dvh-90px)] lg:h-full md:w-[50dvw] bg-mainBlack transform transition-transform duration-500 ease-in-out ${hamburgerClick ? 'translate-x-0' : 'translate-x-[1500px]'} text-white p-[1rem] flex flex-col justify-between overflow-y-auto`}>
      <ul className="flex flex-col">
        <li><SideLinkDropdown label='game info' contents={GameInfoDropDownContent} /></li>
        <li className=''><SideLink label='media' link='/media'/></li>
        <li className=''><SideLink label='news' link='/news'/></li>
        <li><SideLinkDropdown label='support' contents={SupportDropdownContent} /></li>
        <li><SideLinkDropdown label='our socials' contents={OurSocialDropdownContent} /></li>
        <li className=''><SideLink label='esports' link='https://valorantesports.com/'/></li>
        <li className=''><SideLink label='pbe signup' link='/pbe'/></li>
      </ul>

      <button className='mt-[40px] w-full rounded-[10px] text-black bg-mainRed text-center p-[.6rem] uppercase text-[1rem] font-bold'>
        Play Now
      </button>
    </section>
  )
}

export default SideLinks