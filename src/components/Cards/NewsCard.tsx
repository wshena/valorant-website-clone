import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NewsCard = ({data}:{data:any}) => {
  return (
    <Link href={data?.link} className='block w-[260px] md:w-[300px] lg:w-[400px] h-fit flex flex-col gap-[20px]'>
      <div className="w-full h-[200px] relative">
        <Image 
          src={data?.image}
          alt={data?.title}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center gap-[5px] text-[13px]">
          <span className='text-mainRed'>{data?.type}</span>
          <span className='block bg-mediumGray w-[2px] h-[10px]'></span>
          <span>{data?.date}</span>
        </div>
        <h1 className='font-bold text-[1rem]'>{data?.title}</h1>
        <h2 className='text-[.8rem] w-[90%]'>{data?.description}</h2>
      </div>
    </Link>
  )
}

export default NewsCard