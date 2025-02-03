'use client'
import { ArrowDownIcon, RiotLogo } from '@/utils/icons';
import React, { useState } from 'react'

const RiotButton = () => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const handleMouseEnter = () => setMouseEnter(true);
  const handleMouseLeave = () => setMouseEnter(false);

  return (
    <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex items-center'>
      <RiotLogo fillColor={`${mouseEnter ? 'rgb(225, 70, 85)' : 'white'}`} width='99' height='22' classname='xl:w-[100px] xl:h-[30px]'/>
      <ArrowDownIcon size={20} color={mouseEnter ? 'rgb(225, 70, 85)' : '#fff'} classname='' />
    </button>
  )
}

export default RiotButton