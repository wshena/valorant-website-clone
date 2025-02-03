import React from 'react'
import Link from 'next/link'
import RiotButton from '../Buttons/RiotButton'
import { ValorantLogo } from '@/utils/icons'
import LanguageButton from '../Buttons/LanguageButton'
import HamburgerButton from '../Buttons/HamburgerButton'
import NavLink from './NavLink'
import { GameInfoDropDownContent, OurSocialDropdownContent, SupportDropdownContent } from '@/utils/const'
import NavDropdown from './NavDropdown'

const Navbar = () => {

  return (
    <section className='z-30 fixed top-0 left-0 w-[100dvw] bg-mainBlack'>
      <nav className="container text-white py-[15px] px-[10px] md:px-[20px] lg:px-[50px] 2xl:px-0 flex items-center justify-between">

        {/* first group */}
        <div className="flex items-center gap-[15px]">
          <RiotButton />
          <Link href={'/'} className=''>
            <ValorantLogo width='30' height='30' classname='md:w-[35px] md:h-[35px]'/>
          </Link>

          <ul className="hidden xl:flex items-center">
            <li><NavDropdown label='game info' contents={GameInfoDropDownContent} /></li>
            <li><NavLink label='media' link='/media'/></li>
            <li><NavLink label='news' link='/news'/></li>
            <li><NavDropdown label='support' contents={SupportDropdownContent} /></li>
            <li><NavDropdown label='our social' contents={OurSocialDropdownContent} /></li>
            <li><NavLink label='esports' link='https://valorantesports.com/'/></li>
            <li><NavDropdown label='more' contents={[{id:1, label:'PBE Signup', link:'/pbe'}]} /></li>
          </ul>
        </div>
        {/* first group */}

        {/* second group */}
        <div className="flex items-center xl:gap-[10px]">
          <LanguageButton />
          <HamburgerButton />
          <button className='hidden xl:block w-full rounded-[10px] text-black bg-mainRed text-center py-[.6rem] px-[1rem] uppercase text-[.8rem] font-bold'>
            Play Now
          </button>
        </div>
        {/* second group */}
      </nav>
    </section>
  )
}

export default Navbar