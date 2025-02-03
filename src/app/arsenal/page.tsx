import React from 'react'
import { getAllWeapons } from '../../utils/fetcher'
import WeaponCard from '../../components/Cards/WeaponCard';

const page = async () => {
  const allWeapon = await getAllWeapons();
  
  return (
    <div className='w-full flex flex-col'>
      <section className="pt-[100px] w-[full] h-[250px] md:h-[300px]" style={{
        backgroundImage: 'url("/bg/bg_gray.avif")'
      }}>
        <div className='w-full container text-darkGreen uppercase p-[20px] md:p-[50px]'>
          <h1 className='uppercase text-[2rem] md:text-[4rem] font-bold -tracking-[3px] leading-[30px] md:leading-[55px] md:w-[500px]'>choose your weapon</h1>
        </div>
      </section>

      <section className='w-full p-[20px] md:p-[50px] bg-mainGray flex items-center jusfity-center'>
        <div className="w-full container flex items-center justify-center">
          <ul className='w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-x-[15px] md:gap-y-[50px]'>
            {allWeapon?.data?.map((item:any) => {
              return (
                <li key={item?.uuid}>
                  <WeaponCard weapon={item} />
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