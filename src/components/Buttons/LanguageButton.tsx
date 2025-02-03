'use client'
import { GlobeIcon } from '@/utils/icons';
import React, { useState } from 'react'

const LanguageButton = () => {
  const [isClick, setIsClick] = useState(false);
  const handleIsClick = () => setIsClick(!isClick);  

  return (
    <button onClick={handleIsClick} className='block relative'>
      <GlobeIcon size={30} color='white' classname='' />
    </button>
  )
}

export default LanguageButton