import Image from 'next/image'
import React from 'react'

const WeaponCard = ({weapon}:{weapon:any}) => {

  return (
    <div className="flex flex-col">
      <div className='block relative w-[250px] md:w-[300px] h-[100px] overflow-hidden weapon-box'>
        <div className="absolute top-[10px] right-0">
          <Image 
            src={weapon?.displayIcon}
            alt={weapon?.displayName}          
            loading='lazy'
            width={250}
            height={250}
            className='w-full h-full'
          />
        </div>
      </div>

      <h1 className='text-[1rem] uppercase font-bold'>{weapon?.displayName}</h1>
      <h2 className='uppercase text-[.8rem]'>
        types // {weapon?.category.replace("EEquippableCategory::", "")}
      </h2>
    </div>
  )
}

export default WeaponCard