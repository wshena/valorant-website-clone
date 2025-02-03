'use client'
import { ArrowDownIcon } from '@/utils/icons';
import { DropdownSideNavContentProps } from '@/utils/interface';
import Link from 'next/link';
import React, { useState } from 'react'

const NavDropdown = ({label, contents}:{label:string, contents:DropdownSideNavContentProps[]}) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const handleMouseEnter = () => setMouseEnter(true);
  const handleMouseLeave = () => setMouseEnter(false);

  return  (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="hover:cursor-pointer relative uppercase font-bold">
      <span className='flex items-center text-[.9rem] p-[.7rem] rounded-[5px] hover:bg-bgHover'>
        {label}
        <ArrowDownIcon size={20} color='white' classname='' />
      </span>

      {mouseEnter && (
        <div className="absolute left-0 top-[50px] min-w-[150%] h-fit bg-darkGray border-t border-t-[3px] border-t-mainRed p-[.6rem]">
          <ul className="flex flex-col gap-[10px]">
            {contents.map((item:DropdownSideNavContentProps) => {
              return (
                <li key={item.id}>
                  {item?.label === 'support' ? (
                    <Link href={item.link} target='blank' className='text-[.8rem] block w-full p-[.5rem] hover:bg-bgHover rounded-[5px]'>{item.label}</Link>
                  ) : (
                    <Link href={item.link} className='text-[.8rem] block w-full p-[.5rem] hover:bg-bgHover rounded-[5px]'>{item.label}</Link>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default NavDropdown