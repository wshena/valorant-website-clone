import Image from 'next/image'
import React from 'react'

const MediaCard = ({image, title, date}:{image:string, title:string, date:string}) => {
  return (
    <div className='w-[300px] md:w-[350px] lg:w-[400px] flex flex-col gap-[20px] hover:cursor-pointer'>
      <div className="w-full h-[240px] relative">
        <Image src={image} alt={title} layout='fill' objectFit='cover' className='hover:scale-105'/>
      </div>
      <div className="flex flex-col gap-[15px]">
        <h2 className='text-[.8rem]'>{date}</h2>
        <h1 className='font-bold text-[1rem]'>{title}</h1>
      </div>
    </div>
  )
}

export default MediaCard