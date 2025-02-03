'use client'
import { News } from '@/utils/const'
import React from 'react'
import NewsCard from './Cards/NewsCard'

const NewsCarousel = () => {

  return (
    <div className='w-full flex flex-col gap-[20px]'>
      <h1 className='font-bold uppercase text-[2rem]'>related articles</h1>
      <div className="w-full overflow-x-auto pb-[30px] flex flex-col gap-[30px]">
        <ul className="flex gap-[20px]">
          {News?.map((item:any) => {
            return (
              <li key={item?.title}>
                <NewsCard data={item} />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default NewsCarousel