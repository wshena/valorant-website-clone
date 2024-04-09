'use client'
import React, { useState } from 'react'
import Image from 'next/image'

interface Props {
  id:string;
  image:string;
  name:string;
  category:string;
  fireRate:number;
  reloadTime:number;
  magazineSize:number;
}

const WeaponBox = ({id, name, image, category, fireRate, reloadTime, magazineSize}:Props) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const handleMouseEnter = () => setMouseEnter(true);
  const handleMouseLeave = () => setMouseEnter(false);
  
  return (
    <div key={id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`relative border border-black h-[100%] bg-lightGray text-black font-anton p-[1.5rem] weapon-box transition-all duration-300 ease-in-out hover:text-white flex flex-col ${mouseEnter && 'justify-between'}`}>
      <h1 className='text-[2.3rem] tracking-wide uppercase mb-[20px]'>{name}.</h1>
      <Image src={image} alt={name} width={500} height={500} className={`${mouseEnter && 'scale-90'} transition-all duratin-300 ease-in-out`} />

      {mouseEnter && (
        <div className="uppercase">
          <h1 className='text-[1.3rem]'>// Category {category}</h1>
          <div className="flex items-center gap-[20px] text-[.8rem] lg:text-[1rem]">
            <h2>fire rate: {fireRate}</h2>
            <h2>reload time: {reloadTime} seconds</h2>
            <h2>magazine size: {magazineSize}</h2>
          </div>
        </div>
      )}
    </div>
  )
}

export default WeaponBox