'use client'
import Link from 'next/link'
import React from 'react'
import { ArrowNorthEast } from '../../utils/icons'
import { useAppDispatch } from '@/redux/hook';
import { toggleHamburger } from '@/redux/Slice/UtilitySlice';

const SideLink = ({label, link}:{label:string, link:string}) => {
  const dispatch = useAppDispatch()

  return (
    <>
    {label.toLowerCase() === 'esports' ? (
      <Link onClick={() => {
        dispatch(toggleHamburger(false))
      }} href='https://valorantesports.com/id-ID/' target='blank' className='uppercase text-[1rem] block w-full p-[1rem] hover:bg-bgHover hover:text-mainRed rounded-[10px] flex items-center justify-between'>
        <span>{label}</span>
        <ArrowNorthEast size={20} color='white' classname='' />
      </Link>
    ) : (
      <Link onClick={() => {
        dispatch(toggleHamburger(false))
      }} href={link} className='uppercase text-[1rem] block w-full p-[1rem] hover:bg-bgHover hover:text-mainRed rounded-[10px]'>{label}</Link>
    )}
    </>
  )
}

export default SideLink