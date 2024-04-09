'use client'
import React, { useState } from 'react'
import { infoGame, support, more, navbarLinks } from '../../utils/const'
import { NavbarDropdown } from '../../utils/interfaces'
import Link from 'next/link'
import { AngleDown, RiotIcon, ValorantIcon } from '../../utils/Icons'
import LanguageButton from './LanguageButton'
import SearchButton from './SearchButton'
import MobileMenu from './MobileMenu'
import { useRouter } from 'next/navigation'

const DropDownContent = ({ links }: { links: NavbarDropdown[] }) => {
  return (
    <div className="absolute left-0 p-[.8rem] top-[40px] bg-darkBrown text-[15px] text-white flex flex-col gap-[15px] w-[200px] border-t-2 border-red-700">
      {
        links.map((item) => {
          return (
            <Link key={item.id} href={item.link} className='text-gray-500 hover:bg-lightBrown hover:text-white py-[10px] px-[15px] rounded-[10px]'>{item.title}</Link>
          )
        })
      }
    </div>
  )
}

const Navbar = () => {
  const [navClick, setNavClick] = useState(false);
  const [navId, setNavId] = useState(0);

  const router = useRouter();
  const handleRoute = (link:string) => router.push(link);

  const handleNavEnter = (id:number) => {
    setNavClick(true);
    setNavId(id);
  }

  const handleNavLeave = () => {
    setNavClick(false)
  }

  return (
    <nav className="w-full bg-black text-white font-anton text-[20px] tracking-wide py-[1.3rem] px-[1rem] md:px-[2rem] xl:px-0">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-[20px]">
          <Link href={'/'}><RiotIcon /></Link>
          <Link href={'#'}><ValorantIcon /></Link>
          <ul className='hidden xl:flex items-center gap-[20px]'>
          {
            navbarLinks.map((navItem) => {
              const index = navItem.id
              return (
                <li key={navItem.id} onMouseEnter={() => {handleNavEnter(navItem.id)}} className='relative'>
                  <Link onClick={() => {handleRoute(navItem.link)}} href={navItem.link} className='uppercase cursor-pointer nav-link flex items-center gap-[10px]'>
                    <span className=''>{navItem.title}</span>
                    {(navItem.id === 1 || navItem.id === 5 || navItem.id === 6) && (
                      <AngleDown size={10} color='white'/>
                    )}
                    {(navId === 1 && index === 1 && navClick) && (
                      <div className="" onMouseLeave={handleNavLeave}>
                        <DropDownContent links={infoGame}/>
                      </div>
                    )}
                    {(navId === 5 && index === 5 && navClick) && (
                      <div className="" onMouseLeave={handleNavLeave}>
                        <DropDownContent links={support}/>
                      </div>
                    )}
                    {(navId === 6 && index === 6 && navClick) && (
                      <div className="" onMouseLeave={handleNavLeave}>
                        <DropDownContent links={more}/>
                      </div>
                    )}
                  </Link>
                </li>
              )
            })
          }
          </ul>
        </div>

        <div className="flex items-center gap-[10px]">
          <SearchButton />
          <LanguageButton />
          <MobileMenu />
          <Link href={'#'} className='hidden xl:inline-block font-anton text-white py-[8px] px-[20px] rounded-[10px] bg-lightBrown hover:bg-red-800 text-[12px] uppercase transition-colors duration-300 ease-in-out'>Play Now</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar