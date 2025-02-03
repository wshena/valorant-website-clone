import { ArrowNorthEast } from '@/utils/icons'
import Link from 'next/link'
import React from 'react'

const NavLink = ({label, link}:{label:string, link:string}) => {
  return (
    <>
    {label === 'esports' ? (
      <Link href={link} target='blank' className='hover:border-b-[3px] border-b-mainRed pb-[20px] uppercase font-bold'>
        <p className='text-[.9rem] p-[.7rem] rounded-[5px] hover:bg-bgHover flex items-center gap-[5px]'>
          <span>{label}</span>
          <ArrowNorthEast size={15} color='white' classname='' />
        </p>
      </Link>
    ) : (
      <Link href={link} className='hover:border-b-[3px] border-b-mainRed pb-[20px] uppercase font-bold'>
        <span className='text-[.9rem] p-[.7rem] rounded-[5px] hover:bg-bgHover'>{label}</span>
      </Link>
    )}
    </>
  )
}

export default NavLink