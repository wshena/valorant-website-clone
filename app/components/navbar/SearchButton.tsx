'use client'
import { Search, Cancel } from '@/app/utils/Icons'
import React, { useState } from 'react'

const SearchButton = () => {
  const [click, setClick] = useState(false);
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setClick(!click);
  };

  return (
    <form className={`hidden xl:flex overflow-x-hidden transition-all duration-300 ease-in-out ${click ? 'w-[300px]' : 'w-[37px]'} items-center justify-between p-[10px] rounded-full bg-darkBrown`}>
      <button onClick={handleClick}>
        <Search size={15} color='white' />
      </button>
      <input type="text" name="search" id="search" autoComplete='off' className={`bg-darkBrown focus:outline-none ${click ? 'block' : 'hidden'} h-[15px] font-sans text-[15px] w-[230px]`}/>
      <button className={`${click ? 'block' : 'hidden'}`} onClick={handleClick}>
        <Cancel size={15} color='white' />
      </button>
    </form>
  )
}

export default SearchButton