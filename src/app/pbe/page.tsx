import PbeBasicInfo from '@/components/pbe/PbeBasicInfo'
import PbeDropdown from '@/components/pbe/PbeDropdown'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-full'>
      <section className="relative w-full flex items-center justify-start h-[600px]">
        <Image src='/bg/bg_pbe.avif' alt='background' layout='fill' objectFit='cover' objectPosition='top' className='z-10' />
        <div className="z-20 container px-[10px] md:px-[20px] lg:px-[50px] 2xl:px-0">
          <div className="flex flex-col items-start w-full md:w-[50%] gap-[20px]">
            <h1 className='font-bold uppercase md:-tracking-[4px] text-[2rem] md:text-[3rem] text-white'>WELCOME TO VALORANT PBE REGISTRATION</h1>
            <button className='p-[1.3rem] bg-mainRed text-white uppercase text-[1rem] transition-all duration-300 ease-in-out hover:bg-mainGray hover:text-black'>download the pbe client</button>
          </div>
        </div>
      </section>

      <section className="w-full bg-mainGray py-[60px]">
        <div className="w-full container flex items-center justify-center px-[20px] lg:px-0">
          <div className="w-full lg:w-[70%] xl:w-[50%] flex flex-col gap-[50px]">
            <PbeBasicInfo />
            <PbeDropdown />
          </div>
        </div>
      </section>
    </div>
  )
}

export default page