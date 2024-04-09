'use client'
import React, { useEffect, useState } from 'react'
import { Weapon } from '../utils/interfaces';
import WeaponBox from '../components/WeaponBox';
import { getAllWeapons } from '../utils/fetchData';


const page = () => {
  const [allWeapon, setAllWeapon] = useState([]);

  useEffect(() => {
    const fetchAllWeaponData = async () => {
      try {
        const data = await getAllWeapons();
        setAllWeapon(data)
      } catch (error) {
        console.log(error)
      }
    };

    fetchAllWeaponData();
  }, [])

  return (
    <section className='w-full bg-lightGray px-[1rem] md:px-[2rem] xl:px-0'>
      <div className="container py-[3rem]">
        <h1 className='text-center md:text-start uppercase text-[3rem] md:text-[5rem] text-black font-anton tracking-wide mb-[30px]'>Pick your weapon</h1>
        {allWeapon.length > 0 ? (        
          <div className="flex flex-col md:grid md:grid-cols-2 gap-[30px]">
            {
              allWeapon.map((item:Weapon) => {
                return (
                  <WeaponBox key={item.uuid} id={item.uuid} name={item.displayName} category={item.shopData?.category} image={item.displayIcon} fireRate={item.weaponStats?.fireRate} reloadTime={item.weaponStats?.reloadTimeSeconds} magazineSize={item.weaponStats?.magazineSize}/>
                )
              })
            }
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <h1 className="font-anton text-black text-[3rem] uppercase">loading</h1>
          </div>
        )}
      </div>
    </section>
  )
}

export default page