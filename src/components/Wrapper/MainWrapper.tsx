'use client'
import { useAppSelector } from '@/redux/hook';
import { RootState } from '@/redux/store';
import React from 'react'
import SideLinks from '../Navbar/SideLinks';
import NextNProgress from 'nextjs-progressbar';

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  const hamburgerClick = useAppSelector((state:RootState) => state.utility.hamburgerClick);

  return (
    <>
      <NextNProgress
        color='rgb(225, 70, 85)'
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        options={{ showSpinner: false }}
      />

      <main className={`relative overflow-x-hidden transition-all duration-500 ease-in-out ${hamburgerClick && 'overflow-y-hidden bg-mainBlack bg-opacity-60'}`}>

        <div className={`transition-all transform duration-500 ease-in-out z-30 fixed top-o left-0 w-[100dvw] h-[100dvh] bg-black bg-opacity-60 ${hamburgerClick ? 'translate-x-0' : 'translate-x-[2000px] xl:hidden'}`}></div>
        {children}

        <SideLinks />
      </main>
    </>
  )
}

export default MainWrapper