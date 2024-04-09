import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, RiotIcon, Youtube } from '../utils/Icons'

const Footer = () => {
  return (
    <footer className='w-full'>
      <div className="w-full bg-darkBrown flex items-center justify-center py-[1.3rem]">
        <Link href={'#'} className='uppercase text-white font-mono py-[10px] px-[20px] rounded-[10px] hover:bg-lightBrown transition-colors duration-300 ease-in-out'>Download Now</Link>
      </div>
      <div className="w-full bg-black pt-[1.5rem] pb-[3rem]">
        <div className="container w-[100%] flex items-center justify-center">
          <div className="w-full flex items-center flex-col">
            <div className="flex items-center gap-[30px] mb-[50px]">
              <Link href={'#'} className='p-[.8rem] bg-gray-800 rounded-full'>
                <Facebook size={20} color='white'/>
              </Link>
              <Link href={'#'} className='p-[.8rem] bg-gray-800 rounded-full'>
                <Youtube size={20} color='white'/>
              </Link>
              <Link href={'#'} className='p-[.8rem] bg-gray-800 rounded-full'>
                <Instagram size={20} color='white'/>
              </Link>
            </div>

            <div className="w-[100%] md:w-[50%] flex flex-col items-center gap-[20px] mb-[20px] px-[1rem] md:px-0">
              <div className="flex items-center gap-[20px]">
                <Link href={'/'}>
                  <RiotIcon />
                </Link>
                
                <Image src='https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt50870b13992cdf47/63b0d7d089f85210f400107e/val-logo-small.png?&height=75&disable=upscale' alt='valorant-logo' width={100} height={60} />
              </div>

              <p className='text-center text-gray-700'>© 2020-2024 Riot Games, Inc. RIOT GAMES, VALORANT dan semua logo terkait adalah merek dagang, merek layanan, dan/atau merek dagang terdaftar Riot Games, Inc.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between">
              <Link href={'#'} className='uppercase text-white font-mono py-[10px] px-[20px] rounded-[10px] hover:bg-gray-800 transition-colors duration-300 ease-in-out'>kebijakan privasi</Link>
              <Link href={'#'} className='uppercase text-white font-mono py-[10px] px-[20px] rounded-[10px] hover:bg-gray-800 transition-colors duration-300 ease-in-out'>ketentuan penggunaan</Link>
              <Link href={'#'} className='uppercase text-white font-mono py-[10px] px-[20px] rounded-[10px] hover:bg-gray-800 transition-colors duration-300 ease-in-out'>preferensi cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer