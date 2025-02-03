import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, RiotLogo, Youtube } from '../utils/icons'

const Footer = () => {
  return (
    <footer className='w-full'>
      <div className="w-full bg-mediumGray flex items-center justify-center py-[1.3rem]">
        <Link href={'https://riotgames.sng.link/Dnyzj/csgh'} className='uppercase text-white font-mono py-[10px] px-[20px] rounded-[10px] hover:bg-bgHover transition-colors duration-300 ease-in-out text-center tracking-tight font-bold'>Download riot mobile companion app</Link>
      </div>
      <div className="w-full bg-black pt-[1.5rem] pb-[3rem]">
        <div className="container w-[100%] flex items-center justify-center">
          <div className="w-full flex items-center flex-col">
            <div className="flex items-center gap-[20px] mb-[50px]">
              <Link href={'https://www.facebook.com/playvalorant/'} className='p-[.5rem] bg-gray-800 rounded-full'>
                <Facebook size={20} color='white'/>
              </Link>
              <Link href={'https://www.youtube.com/@valorant'} className='p-[.5rem] bg-gray-800 rounded-full'>
                <Youtube size={20} color='white'/>
              </Link>
              <Link href={'https://instagram.com/valorant'} className='p-[.5rem] bg-gray-800 rounded-full'>
                <Instagram size={20} color='white'/>
              </Link>
            </div>

            <div className="w-[100%] md:w-[50%] flex flex-col items-center gap-[20px] mb-[20px] px-[1rem] md:px-0">
              <div className="flex items-center gap-[20px]">
                <Link href={'http://www.riotgames.com/'}>
                  <RiotLogo fillColor='white' width='130' height='30' classname='' />
                </Link>
              </div>

              <p className='text-center text-gray-700'>© 2020-2024 Riot Games, Inc. RIOT GAMES, VALORANT and all related logos are trademarks, service marks and/or registered trademarks of Riot Games, Inc.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between">
              <Link href={'#'} className='uppercase text-white font-mono py-[10px] px-[20px] rounded-[10px] hover:bg-gray-800 transition-colors duration-300 ease-in-out'>privacy policy</Link>
              <Link href={'#'} className='uppercase text-white font-mono py-[10px] px-[20px] rounded-[10px] hover:bg-gray-800 transition-colors duration-300 ease-in-out'>terms of use</Link>
              <Link href={'#'} className='uppercase text-white font-mono py-[10px] px-[20px] rounded-[10px] hover:bg-gray-800 transition-colors duration-300 ease-in-out'>cookie preferences</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer