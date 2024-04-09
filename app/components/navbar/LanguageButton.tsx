'use client'
import { languages } from '@/app/utils/const';
import { Globe } from '@/app/utils/Icons'
import React, { useState } from 'react'

const LanguageButton = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div onClick={handleClick} className='relative'>
      <Globe size={20} color='white' />
      {click && (
        <div className="z-20 text-[14px] absolute right-0 top-[40px] overflow-y-auto h-[200px] bg-white px-[2rem] py-[1.5rem] flex flex-col items-start gap-[15px]">
          {
            languages.map((item, idx) => {
              return (
                <button key={idx} className='text-lightBrown hover:text-black'>{item}</button>
              )
            })
          }
        </div>
      )}
    </div>
  )
}

export default LanguageButton