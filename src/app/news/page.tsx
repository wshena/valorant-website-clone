import NewsCard from '@/components/Cards/NewsCard'
import { News } from '@/utils/const'
import React from 'react'

const page = () => {
  return (
    <div className='w-full'>
      <section className='w-full h-[400px] bg-darkGreen'>
        <div className="z-20 container px-[10px] md:px-[20px] lg:px-[50px] 2xl:px-0 flex items-end w-full h-full pb-[30px]">
          <h1 className='text-white font-bold uppercase text-[5rem]'>NEWS</h1>
        </div>
      </section>
      <section className='w-full bg-mainGray py-[100px]'>
        <div className="container w-full flex items-center justify-center">
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[25px]">
            {News?.map((item:any) => {
              return (
                <li key={item?.title}>
                  <NewsCard data={item} />
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default page